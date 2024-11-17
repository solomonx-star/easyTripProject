import React from "react";
import { FaMapMarkerAlt, FaCalendarAlt, FaUser } from "react-icons/fa";

const LandingSection = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center py-10"
      style={{ backgroundImage: "url('/b.jpeg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Content */}
      <div className="relative flex flex-col items-start justify-center h-full text-white px-6 lg:px-20">
        {/* Title */}
        <h1 className="text-6xl font-bold ">
          Seamless Booking <br/>
          Experience with <br />
          EasyTrip 
        </h1>

        {/* Subtitle */}
        <p className="text-lg mt-15 max-w-xl font-light">
          "Effortless Bookings at your fingertips: Your Ticket to Stress-Free Travel!"
        </p>

        {/* Booking Form */}
        <div className="bg-white rounded-lg shadow-lg p-4 w-full max-w-5xl text-gray-800 flex items-center space-x-4 text-center hover:bg-[#F9ECE4]">
          {/* FROM Dropdown */}
          <div className="flex-1">
            <label className="flex items-center text-gray-500">
              <FaMapMarkerAlt className="mr-2" />
              From
            </label>
            <select className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:border-teal-500 ">
              <option value="">Select City</option>
              <option value="city1">Makeni</option>
              <option value="city2">Freetown</option>
              <option value="city3">Bo</option>
            </select>
          </div>

          {/* TO Dropdown */}
          <div className="flex-1">
            <label className="flex items-center text-gray-500">
              <FaMapMarkerAlt className="mr-2" />
              To
            </label>
            <select className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:border-teal-500">
              <option value="">Select City</option>
              <option value="city1">Makeni</option>
              <option value="city2">Freetown</option>
              <option value="city3">Bo</option>
            </select>
          </div>

          {/* DEPARTING Date Picker */}
          <div className="flex-1">
            <label className="flex items-center text-gray-500">
              <FaCalendarAlt className="mr-2" />
              Departing
            </label>
            <input
              type="date"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:border-teal-500"
            />
          </div>

          {/* PASSENGER Dropdown */}
          <div className="flex-1">
            <label className="flex items-center text-gray-500">
              <FaUser className="mr-2" />
              Passenger
            </label>
            <select className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:border-teal-500">
              <option value="1">1 Adult</option>
              <option value="2">2 Adults</option>
              <option value="3">3 Adults</option>
              <option value="4">4 Adults</option>
            </select>
          </div>

          {/* Search Buses Button */}
          <div>
            <button className="px-8 py-3 bg-teal-500 text-white font-bold rounded-lg shadow-lg hover:bg-teal-600 focus:outline-none">
              Search Buses
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingSection;
