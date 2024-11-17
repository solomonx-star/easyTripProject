"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { FaChevronDown } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const router = useRouter();

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
      <ul className="flex items-center gap-4 ">
        
          <li className="">
            <Link
              href="/"
              className="text-gray-700 hover:text-[#189AA7] font-bold"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/work"
              className="text-gray-700 hover:text-[#189AA7] font-bold"
            >
              How it works
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="text-gray-700 hover:text-[#189AA7]  font-bold"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-gray-700 font-bold hover:text-[#189AA7]"
            >
              Contact
            </Link>
          </li>
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
        <div className="relative mr-auto">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 items-center justify-center flex rounded-full text-gray-700 hover:bg-gray-100 focus:outline-none border border-gray-300 ">
              <FaRegUser size={26} />
            </div>

            <div className="">
              <button className="mt-4" onClick={toggleDropdown}>
                <FaChevronDown />
              </button>
            </div>
          </div>

          {/* Dropdown Items */}
          {isDropdownOpen && (
            <ul className="absolute right-0  w-48  bg-white border rounded shadow-lg">
              <li className="border-b">
                <Link
                  href="/profile"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Profile
                </Link>
              </li>
              <li>
                <Link
                  href="/bookingHistory"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Booking History
                </Link>
              </li>
              <li>
                <Link
                  href="/logout"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Logout
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
