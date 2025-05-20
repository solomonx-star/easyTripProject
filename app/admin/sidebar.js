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
  Menu
} from "lucide-react";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
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
    <>
      {/* Mobile Toggle Button */}
      <button
        className="lg:hidden fixed top-4 left-4 z-20 p-2 text-white bg-gray-900 rounded-md"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle sidebar"
      >
        <Menu size={24} />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen w-[250px] bg-gray-800 pt-8 p-7 flex flex-col transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 z-10`}
      >
        <div className="flex flex-col items-center space-y-3 justify-center">
          <Avatar className="h-[80px] w-[80px]">
            <AvatarImage src={authState.user?.profilePhoto} />
            <AvatarFallback>
              {authState.user?.username?.charAt(0).toUpperCase() || "CN"}
            </AvatarFallback>
          </Avatar>
          <p className="text-xs text-white font-thin">
            Welcome {authState.user?.username || "User"}
          </p>
        </div>
        <nav className="mt-11 flex-1">
          <ul className="space-y-5">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} passHref>
                  <div
                    className={`flex items-center gap-3 p-2 rounded-md w-full ${
                      pathname === link.href
                        ? "bg-gray-700 text-blue-500"
                        : "text-white hover:bg-gray-700"
                    }`}
                    aria-current={pathname === link.href ? "page" : undefined}
                  >
                    {React.cloneElement(link.icon, {
                      color: pathname === link.href ? "#3B82F6" : "white",
                      size: 20,
                    })}
                    <span>{link.label}</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mt-auto">
          <Button
            className="w-full bg-gray-800 text-white hover:bg-gray-700"
            variant="outline"
            size="lg"
            onClick={logout}
            aria-label="Log out"
          >
            <LogOut size={20} className="mr-2" />
            <span className="text-base font-medium">Logout</span>
          </Button>
        </div>
      </div>

      {/* Overlay for Mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-0 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default SideBar;
