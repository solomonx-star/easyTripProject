"use client";
import React, { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { FaChevronDown } from "react-icons/fa6";
import { FaUsers, FaBus } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { MdHistory, MdOutlineLogout } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { Button } from "@/components/ui/button";
import { IoSettingsOutline } from "react-icons/io5";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/context/userContext";
import { X, Menu } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const Navbar = () => {
  const [position, setPosition] = useState("bottom");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [navbar, setNavBar] = useState(false);

  const getMenu = () => {
    let menuClasses = [];

    if (navbar) {
      menuClasses = [
        "flex",
        "absolute",
        "top-[50px]",
        "bg-black",
        "bg-opacity-60",
        "w-full",
        "p-4",
        "left-0",
        "gap-3",
        "flex-col",
        "items-center",
        "z-50",
      ];
    } else {
      menuClasses = [
        "hidden",
        "md:flex",
        "gap-7",
        "flex-1",
        "justify-center",
        "mr-16",
        "items-center",
      ];
    }
    return menuClasses.join(" ");
  };


  const { logout, authState } = useAuth();

  const router = useRouter();

  const pathname = usePathname();

  const links = [
    {
      href: "/user/Homepage",
      label: "Home",
    },
    {
      href: "/user/HowItWorks",
      label: "How It works",
    },
    {
      href: "/user/About",
      label: "About",
    },
    {
      href: "/user/Contact",
      label: "Contact",
    },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 flex items-center justify-between px-6 py-3 border-none shadow-md bg-[#189AA7]">
      
      <div className="flex items-center">
        
        <span className="font-bold text-sm md:text-xl md:font-semibold text-white">
          <Link href="/">EasyTrip</Link>
        </span>
      </div>

      {/* Navigation Links */}
      <ul className={getMenu()}>
        {" "}
        {links.map((link) => (
          <li key={link.href}>
            {/* <div className={}> */}
            <Link
              href={link.href}
              className={`${
                pathname === link.href
                  ? "border-b-3 border-b-white text-black"
                  : ""
              }`}
            >
              <span className="text-white font-sans text-[13px] md:text-white">{link.label}</span>
            </Link>
          </li>
        ))}
      </ul>

      {/* Book Ticket Button and Dropdown Menu */}
      <div className="flex items-center gap-3">
        {/* Book Ticket Button */}
        {/* <button
          onClick={() => router.push("/user/Homepage/Book")}
          className="bg-[#189AA7] md:px-4 px-3 py-2 text-xs md:text-base md:py-2 text-white rounded hover:bg-[#102021] font-medium"
        >
          Book my Ticket
        </button> */}

        { authState.isAuthenticated ? (
          <div>
            <span className="text-white md:text-lg text-sm">{authState.user?.username}</span>
          </div>
        ) : (
          <span></span>
        )}

        {/* Dropdown Menu */}
        {authState.isAuthenticated ? (
          <div className="relative ">
            <div className="flex items-center gap-2">
              <div className="md:h-11 md:w-11 h-6 w-6 items-center justify-center flex rounded-full text-gray-700 border ">
                {authState.isAuthenticated ? (
                  <Avatar className="md:h-[40px] md:w-[40px] w-[20px] h-[20px]">
                    <AvatarImage src={authState.user?.profilePhoto} />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                ) : (
                  <FaRegUser size={26} />
                )}
              </div>

              <DropdownMenu className="">
                <DropdownMenuTrigger asChild>
                  <button className="text-white text-[13px]">
                    <FaChevronDown />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="mt-3 mr-5">
                  
                  <DropdownMenuSeparator />
                  <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                    <DropdownMenuRadioItem className="border-b gap-4">
                      <FaRegUser size={15} />
                      <Link href="/user/Homepage/Profile">Profile</Link>
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem className="border-b gap-4">
                      <MdHistory size={15} />
                      <Link href="/user/Homepage/BookingHistory">
                        Booking History
                      </Link>
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem className="border-b gap-4">
                      <BiSupport size={15} />
                      <Link href="/user/Homepage/Help">Help / support</Link>
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem className="border-b gap-4">
                      <IoSettingsOutline size={15} />
                      <Link href="/user/Homepage/Settings">Settings</Link>
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem className="gap-4">
                      <MdOutlineLogout size={15} />
                      <button onClick={logout}>Logout</button>
                    </DropdownMenuRadioItem>
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 items-center justify-center flex rounded-full text-gray-700 border ">
              <FaRegUser size={26} />
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button>
                  <FaChevronDown />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="flex justify-center items-center">
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup
                  value={position}
                  onValueChange={setPosition}
                >
                  <DropdownMenuRadioItem className="border-b">
                    <Link
                      className="p-2 flex justify-center items-center w-[110px] "
                      href="/user/Signup"
                    >
                      Sign up
                    </Link>
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem className="">
                    <Link
                      className="bg-[#189AA7] p-2 flex justify-center items-center w-[110px]"
                      href="/user/Login"
                    >
                      Login
                    </Link>
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        )}

        <div className="md:hidden flex items-center">
          <button
            aria-label="Toggle Navigation Menu"
            onClick={() => setNavBar(!navbar)}
            className="focus:outline-none"
          >
            {navbar ? <X color="white" /> : <Menu color="white" />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
