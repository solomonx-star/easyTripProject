"use client";
import React, { useState, useEffect, useRef } from "react";
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
import { useAuth } from "@/context/userContext";
import { X, Menu, MapPin, Ticket } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const Navbar = () => {
  const [navbar, setNavBar] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [authDropdownOpen, setAuthDropdownOpen] = useState(false);
  const userDropdownRef = useRef(null);
  const authDropdownRef = useRef(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle click outside to close dropdowns
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userDropdownRef.current && !userDropdownRef.current.contains(event.target)) {
        setUserDropdownOpen(false);
      }
      if (authDropdownRef.current && !authDropdownRef.current.contains(event.target)) {
        setAuthDropdownOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getMenu = () => {
    let menuClasses = [];

    if (navbar) {
      menuClasses = [
        "flex",
        "absolute",
        "top-[80px]",
        "bg-white/95",
        "backdrop-blur-xl",
        "w-full",
        "p-6",
        "left-0",
        "gap-4",
        "flex-col",
        "items-center",
        "z-50",
        "border-t",
        "border-gray-200/20",
        "shadow-2xl",
        "rounded-b-2xl",
      ];
    } else {
      menuClasses = [
        "hidden",
        "lg:flex",
        "gap-8",
        "flex-1",
        "justify-center",
        "mr-20",
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
      icon: "🏠",
    },
    {
      href: "/user/HowItWorks",
      label: "How It Works",
      icon: "⚡",
    },
    {
      href: "/user/About",
      label: "About",
      icon: "ℹ️",
    },
    {
      href: "/user/Contact",
      label: "Contact",
      icon: "💬",
    },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ease-out ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-xl shadow-lg border-b border-gray-200/20' 
          : 'bg-gradient-to-r from-[#189AA7] via-[#1BA3B0] to-[#20B2BF] shadow-xl'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
              scrolled ? 'bg-gradient-to-r from-[#189AA7] to-[#20B2BF]' : 'bg-white/20 backdrop-blur-sm'
            }`}>
              <Ticket className={`w-5 h-5 ${scrolled ? 'text-white' : 'text-white'}`} />
            </div>
            <span className={`font-bold text-xl transition-all duration-300 ${
              scrolled ? 'text-gray-900' : 'text-white'
            }`}>
              <Link href="/" className="hover:scale-105 transition-transform duration-200">
                EasyTrip
              </Link>
            </span>
          </div>

          {/* Navigation Links */}
          <ul className={getMenu()}>
            {links.map((link, index) => (
              <li key={link.href} className="relative group">
                <Link
                  href={link.href}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 ${
                    pathname === link.href
                      ? scrolled 
                        ? 'bg-gradient-to-r from-[#189AA7] to-[#20B2BF] text-white shadow-lg'
                        : 'bg-white/20 text-white backdrop-blur-sm'
                      : scrolled
                        ? 'text-gray-700 hover:bg-gray-100'
                        : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <span className="text-sm">{link.icon}</span>
                  <span className="font-medium text-sm">{link.label}</span>
                </Link>
                
                {/* Active indicator */}
                {pathname === link.href && (
                  <div className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 rounded-full transition-all duration-300 ${
                    scrolled ? 'bg-[#189AA7]' : 'bg-white'
                  }`} />
                )}
              </li>
            ))}
          </ul>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            
            {/* Quick Book Button */}
            <Button
              onClick={() => router.push("/user/Homepage/Book")}
              className={`hidden sm:flex items-center space-x-2 px-6 py-2.5 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg ${
                scrolled 
                  ? 'bg-gradient-to-r from-[#189AA7] to-[#20B2BF] hover:from-[#157A85] hover:to-[#1A9FAB] text-white'
                  : 'bg-white text-[#189AA7] hover:bg-gray-50'
              }`}
            >
              <Ticket className="w-4 h-4" />
              <span>Book Trip</span>
            </Button>

            {/* User Section */}
            {authState.isAuthenticated ? (
              <div className="flex items-center space-x-3">
                <div className="hidden md:block">
                  <span className={`text-sm font-medium transition-colors duration-300 ${
                    scrolled ? 'text-gray-700' : 'text-white'
                  }`}>
                    Welcome back, {authState.user?.username}
                  </span>
                </div>

                {/* User Avatar and Dropdown */}
                <div className="relative" ref={userDropdownRef}>
                  <button
                    onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                    className="flex items-center space-x-2 p-1 rounded-full hover:bg-white/10 transition-all duration-200 group"
                  >
                    <div className="relative">
                      <Avatar className="h-10 w-10 border-2 border-white/20 transition-all duration-200 group-hover:border-white/40">
                        <AvatarImage src={authState.user?.profilePhoto} />
                        <AvatarFallback className="bg-gradient-to-r from-[#189AA7] to-[#20B2BF] text-white text-sm font-semibold">
                          {authState.user?.username?.charAt(0)?.toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-green-400 rounded-full border-2 border-white"></div>
                    </div>
                    <FaChevronDown className={`w-3 h-3 transition-all duration-200 ${userDropdownOpen ? 'rotate-180' : ''} ${
                      scrolled ? 'text-gray-600' : 'text-white/80'
                    }`} />
                  </button>

                  {/* Custom Dropdown */}
                  {userDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-56 bg-white/95 backdrop-blur-xl border border-gray-200/20 shadow-2xl rounded-2xl p-2 z-50">
                      <div className="px-3 py-2 border-b border-gray-200/30">
                        <p className="text-sm font-medium text-gray-900">{authState.user?.username}</p>
                        <p className="text-xs text-gray-500">{authState.user?.email}</p>
                      </div>
                      <div className="py-1">
                        <Link 
                          href="/user/Homepage/Profile" 
                          className="flex items-center space-x-3 px-3 py-2.5 hover:bg-gray-100/80 rounded-xl cursor-pointer transition-colors w-full"
                          onClick={() => setUserDropdownOpen(false)}
                        >
                          <FaRegUser className="w-4 h-4 text-gray-600" />
                          <span className="text-gray-700 font-medium">Profile</span>
                        </Link>
                        <Link 
                          href="/user/Homepage/BookingHistory" 
                          className="flex items-center space-x-3 px-3 py-2.5 hover:bg-gray-100/80 rounded-xl cursor-pointer transition-colors w-full"
                          onClick={() => setUserDropdownOpen(false)}
                        >
                          <MdHistory className="w-4 h-4 text-gray-600" />
                          <span className="text-gray-700 font-medium">Booking History</span>
                        </Link>
                        <Link 
                          href="/user/Homepage/Help" 
                          className="flex items-center space-x-3 px-3 py-2.5 hover:bg-gray-100/80 rounded-xl cursor-pointer transition-colors w-full"
                          onClick={() => setUserDropdownOpen(false)}
                        >
                          <BiSupport className="w-4 h-4 text-gray-600" />
                          <span className="text-gray-700 font-medium">Help & Support</span>
                        </Link>
                        <Link 
                          href="/user/Homepage/Settings" 
                          className="flex items-center space-x-3 px-3 py-2.5 hover:bg-gray-100/80 rounded-xl cursor-pointer transition-colors w-full"
                          onClick={() => setUserDropdownOpen(false)}
                        >
                          <IoSettingsOutline className="w-4 h-4 text-gray-600" />
                          <span className="text-gray-700 font-medium">Settings</span>
                        </Link>
                        <div className="border-t border-gray-200/30 mt-2 pt-2">
                          <button 
                            onClick={() => {
                              logout();
                              setUserDropdownOpen(false);
                            }}
                            className="flex items-center space-x-3 px-3 py-2.5 hover:bg-red-50 rounded-xl cursor-pointer transition-colors w-full text-left"
                          >
                            <MdOutlineLogout className="w-4 h-4 text-red-600" />
                            <span className="text-red-600 font-medium">Logout</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <div className="relative" ref={authDropdownRef}>
                  <button
                    onClick={() => setAuthDropdownOpen(!authDropdownOpen)}
                    className="flex items-center space-x-2 p-2 rounded-full hover:bg-white/10 transition-all duration-200 group"
                  >
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-200 ${
                      scrolled 
                        ? 'border-gray-300 text-gray-600 group-hover:border-[#189AA7] group-hover:text-[#189AA7]'
                        : 'border-white/30 text-white group-hover:border-white'
                    }`}>
                      <FaRegUser className="w-4 h-4" />
                    </div>
                    <FaChevronDown className={`w-3 h-3 transition-all duration-200 ${authDropdownOpen ? 'rotate-180' : ''} ${
                      scrolled ? 'text-gray-600' : 'text-white/80'
                    }`} />
                  </button>

                  {/* Auth Dropdown */}
                  {authDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white/95 backdrop-blur-xl border border-gray-200/20 shadow-2xl rounded-2xl p-2 z-50">
                      <div className="py-1">
                        <Link
                          className="w-full px-4 py-3 text-center rounded-xl hover:bg-gray-100/80 transition-colors text-gray-700 font-medium block"
                          href="/user/Signup"
                          onClick={() => setAuthDropdownOpen(false)}
                        >
                          Create Account
                        </Link>
                        <Link
                          className="w-full bg-gradient-to-r from-[#189AA7] to-[#20B2BF] hover:from-[#157A85] hover:to-[#1A9FAB] px-4 py-3 text-center rounded-xl transition-all text-white font-medium block shadow-lg mt-2"
                          href="/user/Login"
                          onClick={() => setAuthDropdownOpen(false)}
                        >
                          Sign In
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Mobile Menu Toggle */}
            <div className="lg:hidden">
              <button
                aria-label="Toggle Navigation Menu"
                onClick={() => setNavBar(!navbar)}
                className={`p-2 rounded-xl transition-all duration-200 ${
                  scrolled 
                    ? 'hover:bg-gray-100 text-gray-700'
                    : 'hover:bg-white/10 text-white'
                }`}
              >
                {navbar ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;