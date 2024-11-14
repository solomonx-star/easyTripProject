"use client";

// import { Form } from "react-hook-form";
import { z } from "zod";
import { useAuth } from "@/context/userContext";
import pic from "../../../public/images/briefcase.png";
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
import { Spinner } from "@nextui-org/spinner";
import { useState } from "react";

const formSchema = z.object({
  phoneNumber: z
    .string()
    .min(2, { message: "Phone must start with +232" })
    .max(20),
  username: z.string().min(2).max(20),
  email: z.string().min(2).max(20),
  password: z.string().min(2).max(20),
});

export default function Login() {
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const { login } = useAuth();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phoneNumber: "",
      username: "",
      email: "",
      password: "",
    },
  });

  async function onSubmit(values) {
    // setLoading(true);
    try {
      // Make a POST request to your login endpoint with JSON data
      const response = await fetch(
        "https://easytrip-salone.up.railway.app/api/auth/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );

      if (!response.ok) {
        throw new Error("Sign up failed");
      }

      const data = await response.json();
      console.log(data);

      const { token, user } = data;
      console.log("Token:", token);
      console.log("User Data:", user);

      // Use the login function from your UserContext
      // login(user, token); // Assuming `login` accepts userData and token


      // setLoading(false); // Stop loading
      setShowModal(true);

      setTimeout(() => {
        setShowModal(false);
        setLoading(false);
        // router.push("/user/Login"); 
      }, 2000);

    } catch (error) {
      console.error("Login error:", error);
      setLoading(false);
    } 
  }

  return (
    <div className=" flex items-center justify-center h-screen">
      <div className="flex h-full w-full">
        <div className="w-6/12 hidden md:block">
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
            <div className="w-96">
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
                        <Input placeholder="Password" {...field} />
                      </FormControl>
                      <FormDescription></FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="">
                  <Button className="text-white" variant="secondary" size="lg" type="submit">
                    Sign up
                    {/* {loading ? (
                      <p>Sign up</p>
                    ) : (
                      <Spinner color="white" size="sm" />
                    )} */}
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
