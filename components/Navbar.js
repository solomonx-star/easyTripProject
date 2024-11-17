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

const Navbar = () => {
  const [position, setPosition] = useState("bottom")
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // const toggleDropdown = () => {
  //   setIsDropdownOpen(!isDropdownOpen);
  // };

  const { logout } = useAuth();

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
    <nav className="flex items-center justify-between px-6 py-4 shadow-md bg-white">
      {/* Logo Section */}
      <div className="flex items-center">
        {/* <img src={tripLogo} alt="Logo" className="w-10 h-10 mr-2" /> */}
        <span className="text-xl font-semibold text-gray-800">
          <Link href="/">EasyTrip</Link>
        </span>
      </div>

      {/* Navigation Links */}
      <ul className="flex items-center gap-x-6">
        {" "}
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href}>
              <div
                className={
                  pathname === link.href
                    ? " border-b-3 border-b-[#21C4D3] text-black"
                    : ""
                }
              >
                <div className="">
                  <span className="text-black">{link.label}</span>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>

      {/* Book Ticket Button and Dropdown Menu */}
      <div className="flex items-center gap-3">
        {/* Book Ticket Button */}
        <button
          type="button"
          onClick={() => router.push("/ticket")}
          className="bg-[#189AA7] px-4 py-2 text-white rounded hover:bg-[#102021] font-medium"
        >
          Book my Ticket
        </button>

        {/* Dropdown Menu */}
        <div className="relative ">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 items-center justify-center flex rounded-full text-gray-700 border ">
              <FaRegUser size={26} />
            </div>

            <DropdownMenu className="">
              <DropdownMenuTrigger asChild>
                <button>
                  <FaChevronDown />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="">
                {/* <DropdownMenuLabel>Panel Position</DropdownMenuLabel> */}
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup
                  value={position}
                  onValueChange={setPosition}
                >
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

          {/* Dropdown Items */}
          {/* {isDropdownOpen && ( */}

          {/* )} */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
