"use client";

import Breadcrumb from "@/components/BreadCrumb";
import NavBarWrapper from "@/components/NavBarWrapper";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuth } from "@/context/userContext";
import { Camera, Trash2 } from "lucide-react";
import { z } from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRef, useState } from "react";
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
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  country: z.string(),
  city: z.string(),
  gender: z.string(),
});

export default function Settings() {
  const { authState, setAuthState } = useAuth();

  const fileInputRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null); // Store the actual file
  const [isUploading, setIsUploading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      country: authState.user?.country || "",
      city: authState.user?.city || "",
      gender: authState.user?.gender || "",
    },
  });

  async function onSubmit(values) {
    setIsSubmitting(true); // Start loading
    try {
      const response = await fetch(
        "https://easytrip-salone.up.railway.app/api/user/profile-update",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${authState.token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Failed to update.");
      }

      const data = await response.json();
      console.log("Profile updated successfully:", data);
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
      alert(`Error: ${error.message}`);
    } finally {
      setIsSubmitting(false); // Stop loading
    }
  }

  // Function to handle button click and trigger file input
  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  // Function to handle file selection
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file)); // Preview the selected image
      setSelectedFile(file); // Save the file for upload
      console.log("Selected file:", file);
    }
  };

  // Function to upload the selected image
  const uploadImage = async () => {
    if (!selectedFile) {
      alert("Please select an image first.");
      return;
    }

    setIsUploading(true); // Start loading

    const formData = new FormData();
    formData.append("profilePhoto", selectedFile);

    try {
      const response = await fetch(
        "https://easytrip-salone.up.railway.app/api/upload/profile-photo",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${authState.token}`,
          },
          body: formData,
        }
      );

      if (response.ok) {
        const result = await response.json();
        console.log("File uploaded successfully:", result);
        alert("Image uploaded successfully!");
        fetchPhoto();
      } else {
        console.error("Error uploading file:", response.statusText);
        alert("Failed to upload image.");
      }
    } catch (error) {
      console.error("Upload failed:", error);
      alert("An error occurred while uploading the image.");
    } finally {
      setIsUploading(false);
    }
  };

  const fetchPhoto = async () => {
    try {
      const response = await axios.get(
        "https://easytrip-salone.up.railway.app/api/user/profile-picture",
        {
          headers: {
            Authorization: `Bearer ${authState.token}`,
          },
        }
      );
      // Update authState with the new profile photo
      setAuthState((prevState) => ({
        ...prevState,
        user: { ...prevState.user, profilePhoto: response.data.profilePhoto },
      }));
    } catch (error) {
      setError(error.response?.data || error.message);
    }
  };

  return (
    <NavBarWrapper>
      <div className="p-10 ">
        <Breadcrumb />
        <h1>Profile Update</h1>
        <div className="p-10 flex flex-col items-center ">
          <div className="flex flex-col items-center gap-7">
            <Avatar className="h-[100px] w-[100px]">
              <AvatarImage
                src={`${
                  authState.user?.profilePhoto
                }?t=${new Date().getTime()}`}
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex gap-4">
              <button
                onClick={handleButtonClick}
                className="flex gap-2 bg-black p-2 rounded-lg items-center justify-center"
              >
                <Camera color="white" size={20} />
                <p className="text-white text-sm">Change Photo</p>
              </button>
              <button
                className="px-4 py-2 bg-[#189AA7] text-white rounded hover:bg-green-600"
                onClick={uploadImage}
                disabled={!selectedFile || isUploading}
              >
                {isUploading ? "Uploading..." : "Upload Image"}
              </button>
              <div className="flex gap-2 border p-2 rounded-lg items-center justify-center">
                <Trash2 size={20} />
                <p className="text-sm">Delete Photo</p>
              </div>
              <input
                className="hidden"
                type="file"
                accept="image/png, image/jpeg, image/jpg"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
            </div>
          </div>
        </div>
        <p className="font-bold text-2xl mb-4">Edit Your Information</p>
        <div className="justify-center items-center">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="">
              <div className="grid grid-cols-2 gap-10">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem className="bg-gray-300 p-2 rounded-md">
                      <FormLabel className="">First Name</FormLabel>
                      <FormControl className="">
                        <Input
                          placeholder={authState.user?.firstName}
                          {...field}
                          className="border-none shadow-none"
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
                    <FormItem className="bg-gray-300 p-2 rounded-md">
                      <FormLabel className="">Last Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder={authState.user?.lastName}
                          {...field}
                          className="border-none shadow-none"
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
                    <FormItem className="bg-gray-300 p-2 rounded-md">
                      <FormLabel className="">Email Address</FormLabel>
                      <FormControl>
                        <Input
                          placeholder={authState.user?.email}
                          {...field}
                          className="border-none shadow-none"
                        />
                      </FormControl>
                      <FormDescription></FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem className="bg-gray-300 p-2 rounded-md">
                      <FormLabel className="">Phone Number</FormLabel>
                      <FormControl>
                        <Input
                          placeholder={authState.user?.phoneNumber}
                          {...field}
                          className="border-none shadow-none"
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
                    <FormItem className="bg-gray-300 p-2 rounded-md">
                      <FormLabel className="">username</FormLabel>
                      <FormControl>
                        <Input
                          placeholder={authState.user?.username}
                          {...field}
                          className="border-none shadow-none"
                        />
                      </FormControl>
                      {/* <FormDescription></FormDescription> */}
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="country"
                  render={({ field }) => (
                    <FormItem className="bg-gray-300 p-2 rounded-md">
                      <FormLabel className="">Country</FormLabel>
                      <FormControl>
                        <Input
                          placeholder={authState.user?.country}
                          {...field}
                          className="border-none shadow-none"
                        />
                      </FormControl>
                      <FormDescription></FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="city"
                  render={({ field }) => (
                    <FormItem className="bg-gray-300 p-2 rounded-md">
                      <FormLabel className="">City</FormLabel>
                      <FormControl>
                        <Input
                          placeholder={authState.user?.city}
                          {...field}
                          className="border-none shadow-none"
                        />
                      </FormControl>
                      <FormDescription></FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="gender"
                  render={({ field }) => (
                    <FormItem className="bg-gray-300 p-2 rounded-md">
                      <FormLabel className="">Gender</FormLabel>
                      <FormControl>
                        <Input
                          placeholder={authState.user?.gender}
                          {...field}
                          className="border-none shadow-none"
                        />
                      </FormControl>
                      <FormDescription></FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="border-b mt-10" />
              <div className="flex justify-end mt-10">
                <Button
                  className="text-white"
                  variant="secondary"
                  size="lg"
                  type="submit"
                >
                  Save changes
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </NavBarWrapper>
  );
}
