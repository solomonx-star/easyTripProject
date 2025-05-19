"use client";

// import { Form } from "react-hook-form";
import { z } from "zod";
import { useAuth } from "@/context/userContext";
import pic from "../../../public/images/briefcase.png";
import { toast } from "react-hot-toast";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { PassengerRegister } from "@/app/api/auth";
import { useRouter } from "next/navigation";

const formSchema = z
  .object({
    firstName: z
      .string()
      .min(2, "First name must be at least 2 characters")
      .max(20),
    lastName: z
      .string()
      .min(2, "Last name must be at least 2 characters")
      .max(20),
    phoneNumber: z
      .string()
      .regex(
        /^\+232\d{8}$/,
        "Phone number must start with +232 and be 11 digits"
      ),
    username: z
      .string()
      .min(2, "Username must be at least 2 characters")
      .max(20),
    email: z.string().email("Please enter a valid email"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });

export default function Login() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [visible, setVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { login } = useAuth();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  async function onSubmit(values) {
    try {
      setIsSubmitting(true);
      const response = await PassengerRegister({
        firstName: values.firstName,
        lastName: values.lastName,
        phoneNumber: values.phoneNumber,
        username: values.username,
        email: values.email,
        password: values.password,
        confirmPassword: values.confirmPassword,
      });

      if (response) {
        setShowModal(true);
        toast.success("Sign up successful!");
        form.reset(); // Clear form on success
        setTimeout(() => {
          router.push("/user/Login"); // Redirect to login page
        }, 5000);
      } else {
        toast.error("Unexpected response from server");
      }
    } catch (error) {
      const errorMessage =
        error.message || "An error occurred during registration";
      toast.error(errorMessage);
      console.error("Registration error:", error);
    } finally {
      setIsSubmitting(false);
    }
  }

  const toggleVisibility = () => setIsVisible((prev) => !prev);
  const toggleVisible = () => setVisible((prev) => !prev);

  return (
    <div className=" flex items-center justify-center h-screen">
      <div className="flex h-full  w-full">
        <div className="w-6/12 md:block">
          <Image
            src={pic}
            width={400}
            height={400}
            alt="Picture"
            className="w-full h-full"
          />
        </div>
        <div className="shadow-xl space-y-[20px] p-[60px] rounded-md md:w-6/12 w-full items-center flex flex-col justify-center">
          <div className="px-10 py-20 bg-gray-100 border-[0.2px] border-gray-100 shadow-lg rounded">
            {showModal && (
              <div className="relative flex items-center justify-center">
                <div className="w-[250px] h-[] p-4 rounded-lg absolute bottom-1 text-center">
                  <p className="text-xs text-green-500 ">Sign Up Successful!</p>
                </div>
              </div>
            )}
            <div className="w-96 ">
              <p className="text-2xl font-bold">Sign up</p>
              <div className="flex gap-1">
                <p className="text-sm">Already Have an account?</p>
                <Link className="text-sm text-[#189AA7]" href="/user/Login">
                  Log in
                </Link>
              </div>
            </div>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <div className="flex justify-between">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem className="">
                        <FormLabel className=""></FormLabel>
                        <FormControl>
                          <Input
                            placeholder="First Name"
                            {...field}
                            className="w-44"
                          />
                        </FormControl>
                        <FormDescription></FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem className="w-44">
                        <FormLabel className=""></FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Last Name"
                            {...field}
                            className=""
                          />
                        </FormControl>
                        <FormDescription></FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem className="">
                      <FormLabel className=""></FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Phone Number"
                          {...field}
                          className="w-96"
                        />
                      </FormControl>
                      <FormDescription></FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem className="">
                      <FormLabel className=""></FormLabel>
                      <FormControl>
                        <Input
                          placeholder="username"
                          {...field}
                          className="w-96"
                        />
                      </FormControl>
                      <FormDescription></FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="">
                      <FormLabel className=""></FormLabel>
                      <FormControl>
                        <Input
                          placeholder="email"
                          {...field}
                          className="w-96"
                        />
                      </FormControl>
                      <FormDescription></FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem className="">
                      <FormLabel className=""></FormLabel>
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
                            {isVisible ? (
                              <EyeOff className="w-5 h-5" />
                            ) : (
                              <Eye className="w-5 h-5" />
                            )}
                          </button>
                        </div>

                        {/* <Eye /> */}
                      </FormControl>
                      <FormDescription></FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem className="">
                      <FormLabel className=""></FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            placeholder="confirm Password"
                            type={visible ? "text" : "password"}
                            {...field}
                          />
                          <button
                            type="button"
                            onClick={toggleVisible}
                            className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                          >
                            {visible ? (
                              <EyeOff className="w-5 h-5" />
                            ) : (
                              <Eye className="w-5 h-5" />
                            )}
                          </button>
                        </div>
                        {/* <Eye /> */}
                      </FormControl>
                      <FormDescription></FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="">
                  <Button
                    className="text-white"
                    variant="secondary"
                    size="lg"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Signing up..." : "Sign Up"}
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
