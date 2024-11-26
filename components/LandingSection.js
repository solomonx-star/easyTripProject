"use client";

import Link from "next/link";
import React from "react";
import { FaMapMarkerAlt, FaCalendarAlt, FaUser } from "react-icons/fa";

const LandingSection = () => {
  return (
    <div

      className="md:h-[700px] h-[600px] bg-cover bg-center "
      style={{ backgroundImage: "url('/Bus.jpg')" }}
    >
      {/* Content */}
      <div className="relative flex flex-col bg-black bg-opacity-50 items-start justify-center h-full text-white px-6 lg:px-20">
        {/* Title */}
        <h1 className="md:text-6xl text-2xl font-bold ">
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
        <div className="md:bg-gray-200 grid grid-cols-2 bg-gray-200 top-[85%]  md:top-[95%] self-center absolute shadow-lg p-4 text-gray-800 md:w-[80%] md:flex flex-col gap-5 md:flex-row items-center md:space-x-5 text-center">
          {/* FROM Dropdown */}

          <div className="flex-1">
            <div className="md:bg-white bg-white md:px-4 p-3">
              <label className="flex items-center text-gray-500">
                <FaMapMarkerAlt className="mr-2" />
                From
              </label>
              <select className="w-full rounded-lg focus:outline-none focus:border-teal-500">
                <option value="">Select City</option>
                <option value="city1">Makeni</option>
                <option value="city2">Freetown</option>
                <option value="city3">Bo</option>
              </select>
            </div>
          </div>

          {/* TO Dropdown */}
          <div className="flex-1">
            <div className="md:bg-white bg-white md:px-4 p-3">
              <label className="flex items-center text-gray-500">
                <FaMapMarkerAlt className="mr-2" />
                To
              </label>
              <select className="w-full rounded-lg focus:outline-none focus:border-teal-500">
                <option value="">Select City</option>
                <option value="city1">Makeni</option>
                <option value="city2">Freetown</option>
                <option value="city3">Bo</option>
              </select>
            </div>
          </div>

          {/* DEPARTING Date Picker */}
          <div className="flex-1">
            <div className="md:bg-white bg-white md:px-4 p-3">
              <label className="flex items-center text-gray-500">
                <FaCalendarAlt className="mr-2" />
                Departing
              </label>
              <input
                type="date"
                className="w-full rounded-lg  focus:outline-none focus:border-teal-500"
              />
            </div>
          </div>

          {/* PASSENGER Dropdown */}
          <div className="flex-1">
            <div className="md:bg-white bg-white md:px-4 p-3">
              <label className="flex items-center text-gray-500">
                <FaUser className="mr-2" />
                Passenger
              </label>
              <select className="w-full rounded-lg focus:outline-none focus:border-teal-500">
                <option value="1">1 Adult</option>
                <option value="2">2 Adults</option>
                <option value="3">3 Adults</option>
                <option value="4">4 Adults</option>
              </select>
            </div>
          </div>

          {/* Search Buses Button */}

          <Link
            href="/"
            className="md:px-8 md:py-3 place-items-center item-center justify-center flex col-span-2 md:col-span-1 self-center bg-teal-500 text-white text-sm p-1 px-3 font-bold rounded shadow-lg hover:bg-teal-600 focus:outline-none"
          >
            <p>Search Buses</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingSection;
