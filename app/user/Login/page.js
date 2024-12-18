"use client"


import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import pic from "@/public/images/briefcase.png"; // Replace with your actual image path
import { useAuth } from "@/context/userContext";
import { Spinner } from "@nextui-org/spinner";

// Zod schema for form validation
const formSchema = z.object({
  phoneNumber: z
    .string()
    .min(2, { message: "Phone must start with +232" })
    .max(20),
  password: z.string().min(2,{message: "Password must be at least 7 letters"}).max(20),
});

export default function Login() {
  const [loading, setLoading] = useState(true);
  const { login } = useAuth();
    const [showModal, setShowModal] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [visible, setVisible] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phoneNumber: "",
      password: "",
    },
  });

  async function onSubmit(values) {
    try {
      setLoading(false)
      // Make a POST request to your login endpoint with JSON data
      const response = await fetch(
        "https://easytrip-salone.up.railway.app/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const data = await response.json();
      console.log(data);

      const { token, user } = data;
      console.log("Token:", token);
      console.log("User Data:", user);

      // Use the login function from your UserContext
      login(user, token); // Assuming `login` accepts userData and token
      setShowModal(true);
    } catch (error) {
      console.error("Login error:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex h-full w-full">
        {/* Image Section - Hidden on mobile */}
        <div className="w-6/12 hidden md:block">
          <Image
            src={pic}
            alt="Login Background"
            className="w-full h-full md:hidden object-cover"
            priority
          />
        </div>

        {/* Login Form Section */}
        <div className="shadow-xl space-y-[20px] p-[100px] rounded-md md:w-6/12 w-full items-center flex flex-col justify-center">
          <div className="px-10 py-20 border-[0.2px] border-gray-100 shadow-lg rounded">
            {showModal && (
              <div className="relative flex items-center justify-center">
                <div className="w-[250px] h-[] p-4 rounded-lg absolute bottom-1 text-center">
                  <p className="text-xs text-green-500 ">Login Successful!</p>
                </div>
              </div>
            )}
            <div className="w-96 gap-3 mb-6">
              <p className="text-2xl font-bold mb-2">Log in</p>
              <div className="flex gap-1">
                <p className="text-sm">Dont Have an account?</p>
                <Link
                  className="text-sm text-[#189AA7] hover:underline"
                  href="/user/Signup"
                >
                  Sign up
                </Link>
              </div>
            </div>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="sr-only">Phone Number</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Phone Number"
                          {...field}
                          className="w-96"
                        />
                      </FormControl>
                      <FormDescription className="sr-only"></FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="sr-only">Password</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="Password"
                          {...field}
                          className="w-96"
                        />
                      </FormControl>
                      <FormDescription className="sr-only"></FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div>
                  <Button
                    className="text-white w-96"
                    variant="secondary"
                    size="lg"
                    type="submit"
                    // disabled={loading}
                  >
                    {loading ? "Login" : <Spinner color="white" size="sm" />}
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
