"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { FaMapMarkerAlt, FaCalendarAlt, FaUser } from "react-icons/fa";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

const LandingSection = () => {
  const router = useRouter();
  const [searchParams, setSearchParams] = useState({
    from: "",
    to: "",
    departing: "",
    passenger: 1,
  });

  // Handle form changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchParams((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle search
  const handleSearch = () => {
    const queryString = new URLSearchParams(searchParams).toString();
    console.log("Navigating to:", `/book?${queryString}`);
    router.push(`/user/Homepage/Book?${queryString}`);
  };

  return (
    <div
      className="md:h-[700px] h-[600px] bg-cover bg-center "
      style={{ backgroundImage: "url('/Bus.jpg')" }}
    >
      {/* Content */}
      <div className="relative flex flex-col bg-black bg-opacity-50 items-start justify-center h-full text-white px-6 lg:px-20">
        {/* Title */}
        <h1 className="md:text-7xl text-4xl font-bold ">
          Seamless Booking <br />
          Experience with <br />
          EasyTrip
        </h1>

        {/* Subtitle */}
        <p className="md:text-lg mt-15 max-w-xl text-sm font-light mt-5">
          Effortless Bookings at your fingertips: Your Ticket to Stress-Free
          Travel!
        </p>

        {/* Booking Form */}
        <div className="absolute w-[90%] md:w-[80%] top-[85%] md:top-[92%] self-center">
          <Card className="bg-gray-200 ">
            <CardContent className="p-4">
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 items-center">
                {/* FROM Dropdown */}
                <div className="flex-1">
                  <div className="bg-white p-3 rounded-lg">
                    <Label className="flex items-center text-gray-500">
                      <FaMapMarkerAlt className="mr-2" />
                      From
                    </Label>
                    <select
                      name="from"
                      value={searchParams.from}
                      onChange={handleChange}
                      className="w-full rounded-lg mt-2 focus:outline-none focus:border-teal-500"
                    >
                      <option value="">Select City</option>
                      <option value="Makeni">Makeni</option>
                      <option value="Freetown">Freetown</option>
                      <option value="Bo">Bo</option>
                      <option value="Kono">Kono</option>
                    </select>
                  </div>
                </div>

                {/* TO Dropdown */}
                <div className="flex-1">
                  <div className="bg-white p-3 rounded-lg">
                    <Label className="flex items-center text-gray-500">
                      <FaMapMarkerAlt className="mr-2" />
                      To
                    </Label>
                    <select
                      name="to"
                      value={searchParams.to}
                      onChange={handleChange}
                      className="w-full rounded-lg mt-2 focus:outline-none focus:border-teal-500"
                    >
                      <option value="">Select City</option>
                      <option value="Makeni">Makeni</option>
                      <option value="Freetown">Freetown</option>
                      <option value="Bo">Bo</option>
                      <option value="Kono">Kono</option>
                    </select>
                  </div>
                </div>

                {/* DEPARTING Date Picker */}
                <div className="flex-1">
                  <div className="bg-white p-3 rounded-lg">
                    <Label className="flex items-center text-gray-500">
                      <FaCalendarAlt className="mr-2" />
                      Departing
                    </Label>
                    <Input
                      type="date"
                      name="departing"
                      value={searchParams.departing}
                      onChange={handleChange}
                      className="w-full rounded-lg mt-2 focus:outline-none focus:border-teal-500"
                    />
                  </div>
                </div>

                {/* PASSENGER Dropdown */}
                <div className="flex-1">
                  <div className="bg-white p-3 rounded-lg">
                    <Label className="flex items-center text-gray-500">
                      <FaUser className="mr-2" />
                      Passenger
                    </Label>
                    <select
                      name="passenger"
                      value={searchParams.passenger}
                      onChange={handleChange}
                      className="w-full rounded-lg mt-2 focus:outline-none focus:border-teal-500"
                    >
                      <option value="1">1 Adult</option>
                      <option value="2">2 Adults</option>
                      <option value="3">3 Adults</option>
                      <option value="4">4 Adults</option>
                    </select>
                  </div>
                </div>

                {/* Search Buses Button */}
                <Button
                  onClick={handleSearch}
                  className="md:px-8 md:py-7 col-span-2 md:col-span-1 bg-teal-500 text-white text-sm font-bold rounded-lg shadow-lg hover:bg-teal-600 focus:outline-none"
                >
                  Search Buses
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LandingSection;