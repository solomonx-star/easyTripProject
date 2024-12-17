"use client";

import NavBarWrapper from "@/components/NavBarWrapper";
import Breadcrumb from "@/components/BreadCrumb";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuth } from "@/context/userContext";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { MapPin, CalendarDays} from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Profile() {
  const { authState } = useAuth();
  // const [user, setUser] = useState("");

  const router = useRouter();

  const formatDate = (mongoDate) => {
    if (!mongoDate) return "N/A";
    const date = new Date(mongoDate); // Convert MongoDB date string to a Date object
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short", // Short month format like "Jan"
      day: "numeric",
    });
  };

  return (
    <NavBarWrapper>
      <div className="pb-10 mt-14">
        <div className="flex-1 flex-col items-start justify-start p-7">
          <h1 className="font-bold text-5xl">My Profile</h1>
          <Breadcrumb />
        </div>
        <div className="flex flex-col items-center">
          <div className="flex flex-col gap-5 h-[400px] m-5 w-[80%] items-center justify-center rounded bg-gray-300">
            <div className="flex flex-col">
              <Avatar className="h-[100px] w-[100px]">
                <AvatarImage src={authState.user?.profilePhoto} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              {/* </button> */}
            </div>
            <div className="flex gap-2">
              <p className="text-black text-xl">{authState.user?.firstName}</p>
              <p className="text-black text-xl">{authState.user?.lastName}</p>
            </div>
            <div className="flex gap-10 items-center justify-center">
              <div className="flex gap-2">
                <MapPin color="gray" />
                <p className="text-gray-500">{authState.user?.city}</p>
              </div>
              <div className="flex gap-2">
                <CalendarDays color="gray" />
                <p className="text-gray-500">
                  Created {formatDate(authState.user?.createdAt)}
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5 h-[400px] m-5 w-[80%] p-5 rounded bg-gray-300">
            <p className="font-bold">Personal Information</p>
            <div className="grid grid-cols-2 gap-10">
              <div>
                <label>First Name</label>
                <p>{authState.user?.firstName}</p>
              </div>
              <div>
                <label>Last Name</label>
                <p>{authState.user?.lastName}</p>
              </div>
              <div>
                <label>username</label>
                <p>{authState.user?.username}</p>
              </div>
              <div>
                <label>Phone Number</label>
                <p>{authState.user?.phoneNumber}</p>
              </div>
              <div>
                <label>Email Address</label>
                <p>{authState.user?.email}</p>
              </div>
              <div>
                <label>Gender</label>
                <p>{authState.user?.gender}</p>
              </div>
              <div>
                <label>City</label>
                <p>{authState.user?.city}</p>
              </div>
              <div></div>
            </div>
          </div>
          <div className="flex flex-col gap-5 h-[400px] m-5 w-[80%] p-5 rounded bg-gray-300">
            <p className="font-bold">Emergency Contact</p>
            <div className="grid grid-cols-2 gap-10">
              <div>
                <label>First Name</label>
                <p>{authState.user?.firstName}</p>
              </div>
              <div>
                <label>Last Name</label>
                <p>{authState.user?.lastName}</p>
              </div>

              <div>
                <label>Phone Number</label>
                <p>{authState.user?.phoneNumber}</p>
              </div>
              <div>
                <label>Email Address</label>
                <p>{authState.user?.email}</p>
              </div>
              <div>
                <label>Relationship</label>
                <p>{authState.user?.gender}</p>
              </div>
              <div>
                <label>City</label>
                <p>{authState.user?.city}</p>
              </div>
              <div></div>
            </div>
          </div>
          <div className="">
            <Link
              href="/user/Homepage/Settings"
              className="flex bg-blue-500 p-3 px-6 rounded-md text-white"
            >
              Update Profile info
            </Link>
          </div>
        </div>
      </div>
    </NavBarWrapper>
  );
}
