"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "react-hot-toast";
import { Eye, EyeOff } from "lucide-react";
import { LoginService } from "@/app/api/auth"; // Import optimized API client
import { useAuth } from "@/context/userContext";
import pic from "@/public/images/briefcase.png";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// Zod schema for form validation
const formSchema = z.object({
  phoneNumber: z
    .string()
    .regex(/^\+232\d{8}$/, "Phone number must start with +232 and be 11 digits"),
  password: z.string().min(7, "Password must be at least 7 characters").max(20),
});

export default function Login() {
  const router = useRouter();
  const { login } = useAuth();
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lastLoggedInNumber, setLastLoggedInNumber] = useState("");

  // Fetch last logged-in number from localStorage
  useEffect(() => {
    const fetchLastLoginNumber = async () => {
      try {
        const data = localStorage.getItem("lastLoggedInNumber");
        if (data) {
          setLastLoggedInNumber(data);
        }
      } catch (error) {
        console.error("Error fetching last logged-in number:", error);
      }
    };
    fetchLastLoginNumber();
  }, []);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phoneNumber: lastLoggedInNumber || "",
      password: "",
    },
  });

  async function onSubmit(values) {
    try {
      setIsSubmitting(true);
      const response = await LoginService({
        phoneNumber: values.phoneNumber,
        password: values.password,
      });
      console.log("Login response:", response);
      console.log("User object:", response?.user);

      const { user, token } = response;
      localStorage.setItem("lastLoggedInNumber", values.phoneNumber);
      login(user, token); // Update auth context
      toast.success("Login successful!");
    } catch (error) {
      const errorMessage = error.message || "An error occurred during login";
      toast.error(errorMessage);
      console.error("Login error:", error);
    } finally {
      setIsSubmitting(false);
    }
  }

  const toggleVisibility = () => setIsVisible((prev) => !prev);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="flex w-full max-w-5xl h-screen">
        {/* Image Section */}
        <div className="hidden w-6/12 md:block">
          <Image
            src={pic}
            width={400}
            height={400}
            alt="Login Background"
            className="object-cover w-full h-full"
            priority
          />
        </div>
        {/* Form Section */}
        <div className="flex flex-col justify-center w-full p-6 space-y-6 md:w-6/12 md:p-12">
          <div className="p-8 bg-white rounded-lg shadow-lg">
            <div className="max-w-md mx-auto">
              <h2 className="text-2xl font-bold">Log In</h2>
              <div className="flex gap-1 mt-2">
                <p className="text-sm">Dont have an account?</p>
                <Link className="text-sm text-[#189AA7] hover:underline" href="/user/Signup">
                  Sign up
                </Link>
              </div>
            </div>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="mt-8 space-y-6">
                <FormField
                  control={form.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input placeholder="+23212345678" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            placeholder="Password"
                            type={isVisible ? "text" : "password"}
                            {...field}
                          />
                          <button
                            type="button"
                            onClick={toggleVisibility}
                            className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                          >
                            {isVisible ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                          </button>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="w-full text-white"
                  variant="secondary"
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Logging in..." : "Log In"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}