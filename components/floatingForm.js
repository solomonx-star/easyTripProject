"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaCalendarAlt, FaMapMarkerAlt, FaUser } from "react-icons/fa";

export default function FloatingForm() {

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
      <div className="md:bg-gray-200 grid grid-cols-2 bg-gray-200 self-center shadow-lg p-4 text-gray-800  md:flex flex-col gap-5 md:flex-row items-center md:space-x-5 text-center">
        {/* FROM Dropdown */}

        <div className="flex-1">
          <div className="md:bg-white bg-white md:px-4 p-3">
            <label className="flex items-center text-gray-500">
              <FaMapMarkerAlt className="mr-2" />
              From
            </label>
            <select className="w-full rounded-lg focus:outline-none focus:border-teal-500">
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
          <div className="md:bg-white bg-white md:px-4 p-3">
            <label className="flex items-center text-gray-500">
              <FaMapMarkerAlt className="mr-2" />
              To
            </label>
            <select className="w-full rounded-lg focus:outline-none focus:border-teal-500">
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

        <button
          onClick={handleSearch}
          className="md:px-8 md:py-3 place-items-center item-center justify-center flex col-span-2 md:col-span-1 self-center bg-[#189AA7] text-white text-sm p-1 px-3 font-bold rounded shadow-lg hover:bg-teal-600 focus:outline-none"
        >
          <p>Search Buses</p>
        </button>
      </div>
    );
}