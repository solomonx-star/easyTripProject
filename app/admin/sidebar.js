"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
// import { useAuth } from "../AuthContext";
import { useAuth } from "@/context/userContext";
import { useEffect, useState } from "react";
import { FiFileText } from "react-icons/fi";
import { FaLanguage } from "react-icons/fa";
import { FaUsers, FaBus } from "react-icons/fa";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Clock,
  BusFront,
  Users,
  LayoutDashboard,
  LogOut,
  CalendarCheck,
} from "lucide-react";


const SideBar = () => {
  const { logout, authState } = useAuth();
  const pathname = usePathname();

  const links = [
    {
      href: "/admin/dashboard",
      label: "Dashboard",
      icon: <LayoutDashboard size={20} color="white" />,
    },
    {
      href: "/admin/Bookings",
      label: "Booking",
      icon: <CalendarCheck size={20} color="white" />,
    },
    {
      href: "/admin/Schedule",
      label: "Schedule",
      icon: <Clock size={20} color="white" />,
    },
    {
      href: "/admin/VehicleManagement",
      label: "Vehicle Management",
      icon: <BusFront size={20} color="white" />,
    },
    {
      href: "/admin/Users",
      label: "Customer Management",
      icon: <Users size={20} color="white" />,
    },
  ];
    


  return (
    <div className="flex flex-col bg-[#189AA7] h-screen w-[250px] pt-8 p-7 ">
      <div className="flex flex-col items-center space-y-3 justify-center">
        <Avatar className="h-[80px] w-[80px]">
          <AvatarImage src={authState.user?.ProfilePhoto} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div>
          <p className="text-xs text-white font-thin">
            Welcome {authState.user?.username}
          </p>
        </div>
      </div>
      <nav className="">
        <ul className="mt-11">
          <div className="space-y-5">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>
                  <div
                    className={
                      pathname === link.href
                        ? "bg-[#21C4D3] w-[222px] p-2 rounded-bl rounded-tl text-black"
                        : "p-2 w-[222px]"
                    }
                  >
                    <div className="flex items-center gap-3">
                      <span>{link.icon}</span>
                      <span className="text-white">{link.label}</span>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </div>
        </ul>
      </nav>
      <div className="mt-auto">
        <Button className="w-full" variant="outline" size="lg" onClick={logout}>
          <LogOut size={20} className="mr-2" />
          <span className="text-base font-medium flex-1">Logout</span>
        </Button>
      </div>
    </div>
  );
};

export default SideBar;
