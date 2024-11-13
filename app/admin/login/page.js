"use client";

// import { Form } from "react-hook-form";
import { z } from "zod";
import { useAuth } from "@/context/userContext";
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
import { useState } from "react";
import { Spinner } from "@nextui-org/spinner";


const formSchema = z.object({
  phoneNumber: z.string().min(2, {message: "Phone must start with +232"}).max(20),
  password: z.string().min(2).max(20),
});

export default function Login() {
  const [loading, setLoading] = useState(true);
  const { login } = useAuth();
 
 
 
  const form = useForm({
   resolver: zodResolver(formSchema),
   defaultValues: {
     phoneNumber: "",
     password: "",
   },
 });


  async function onSubmit(values) {
    try {
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
      console.log(data)

      const { token, user } = data;
      console.log("Token:", token);
      console.log("User Data:", user);


      // Use the login function from your UserContext
      login(user, token); 
    } catch (error) {
      console.error("Login error:", error);
    } finally {
      setLoading(false);
    }
  }



  return (
    <div className="pt-[200px] flex items-center justify-center ">
      <div className="shadow-md w-[25%] space-y-[20px] p-[60px] rounded-md">
        <div className="flex justify-center">
          <p className="text-2xl">Admin Login</p>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem className="">
                  <FormLabel className="">Phone Number</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter Phone Number" {...field} />
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
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter Password" {...field} />
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="">
              <Button size="lg" type="submit">{ loading ? <p>Login</p>  : <Spinner size="sm" color="white" /> }</Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
