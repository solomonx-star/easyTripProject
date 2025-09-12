"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/userContext";
import { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CalendarCheck, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Clock,
  BusFront,
  Users,
  LayoutDashboard,
  LogOut,
  Menu,
} from "lucide-react";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sideBar, setSideBar] = useState(false); // Controls collapsed/expanded state
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

      {/* Collapse/Expand Button */}

      {/* Sidebar */}
      <div
        className={`sticky  inset-0 top-0 left-0 h-screen  bg-gray-800 pt-8 p-4 flex flex-col transition-all duration-400 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 z-10  ${sideBar ? "w-[80px]" : "w-[250px]"}`} // Dynamic width
      >
        <ChevronLeft
          size={24}
          className={`bg-white sm:visible border-gray-800 text-gray-800 text-3xl rounded-full absolute top-9 cursor-pointer -right-[9px] ${
            !sideBar && "rotate-180"
          }`}
          onClick={() => setSideBar(!sideBar)} // Toggle sidebar state
        />

        {/* User Info */}
        <div
          className={`flex flex-col items-center space-y-3 justify-center transition-all duration-300 ${
            sideBar ? "scale-75" : ""
          }`} // Scale down avatar when collapsed
        >
          <Avatar
            className={`${sideBar ? "h-[50px] w-[50px]" : "h-[80px] w-[80px]"}`}
          >
            <AvatarImage src={authState.user?.profilePhoto} />
            <AvatarFallback>
              {authState.user?.username?.charAt(0).toUpperCase() || "CN"}
            </AvatarFallback>
          </Avatar>
          {!sideBar && ( // Hide username when collapsed
            <p className="text-xs text-white font-thin">
              Welcome {authState.user?.username || "User"}
            </p>
          )}
        </div>

        {/* Navigation */}
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
                    } ${sideBar ? "justify-center" : ""}`} // Center icons when collapsed
                    aria-current={pathname === link.href ? "page" : undefined}
                  >
                    {React.cloneElement(link.icon, {
                      color: pathname === link.href ? "#3B82F6" : "white",
                      size: 20,
                    })}
                    {!sideBar && <span>{link.label}</span>}{" "}
                    {/* Hide labels when collapsed */}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Logout Button */}
        <div className="mt-auto">
          <Button
            className={`w-full transform-all duration-400 bg-gray-800 text-white hover:bg-gray-700 ${
              sideBar ? "justify-center flex items-center border-none " : ""
            }`}
            variant="outline"
            size="lg"
            onClick={logout}
            aria-label="Log out"
          >
            <LogOut size={20} className={sideBar ? "" : "mr-2"} />
            {!sideBar && <span className="text-base font-medium">Logout</span>}
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
