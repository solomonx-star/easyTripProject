"use client";

import NavBarWrapper from "@/components/NavBarWrapper";
import FloatingForm from "@/components/floatingForm";
import axios from "axios";
import { useSearchParams, useRouter } from "next/navigation";
import React, { Suspense, useEffect, useState } from "react";
import { FaCalendarAlt, FaMapMarkerAlt, FaUser } from "react-icons/fa";

function BookContent() {
  const searchParams = useSearchParams();
  const from = searchParams.get("from");
  const to = searchParams.get("to");
  const date = searchParams.get("departing");
  const passenger = searchParams.get("passenger");

  const [book, setBook] = useState([]);
  const [error, setError] = useState();

  const router = useRouter();

  const handleDetails = (item) => {
    return router.push(
      `/user/Homepage/Book/${item._id}?id=${item._id}&departureTime=${item.departureTime}&etaTime=${item.etaTime}&noOfSeats=${item.noOfSeats}&availableSeats=${item.availableSeats}&vehicleInfo=${item.vehicleInfo}&departureDate=${item.departureDate}&from=${item.from}&to=${item.to}&price=${item.price}`
    );
  };

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get(
          "https://easytrip-salone.up.railway.app/api/admin/book"
        );
        setBook(response.data);
      } catch (err) {
        console.error("Error fetching users:", err);
        setError(err.message);
      }
    };
    fetchBookings();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set(name, value);
    } else {
      params.delete(name);
    }
    router.push(`/user/Homepage/Book?${params.toString()}`);
  };

  const filteredResults = book.filter(
    (item) =>
      (!from || item.from === from) &&
      (!to || item.to === to) &&
      (!date || item.departureDate === date)
  );

  return (
    <main className="container mt-20 mx-auto px-6 py-8">
      {/* Search Form */}
      <div className="md:bg-gray-200 grid grid-cols-2 bg-gray-200 self-center shadow-lg p-4 text-gray-800  md:flex flex-col gap-5 md:flex-row items-center md:space-x-5 text-center">
        {/* FROM Dropdown */}
        <div className="flex-1">
          <div className="md:bg-white bg-white md:px-4 p-3">
            <label className="flex items-center text-gray-500">
              <FaMapMarkerAlt className="mr-2" />
              From
            </label>
            <select
              name="from"
              value={from}
              onChange={handleChange}
              className="w-full rounded-lg focus:outline-none focus:border-teal-500"
            >
              <option value="">{from || "Select City"}</option>
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
            <select
              name="to"
              value={to}
              onChange={handleChange}
              className="w-full rounded-lg focus:outline-none focus:border-teal-500"
            >
              <option value="">{to || "Select City"}</option>
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
              name="departing"
              value={date}
              onChange={handleChange}
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
            <select
              name="passenger"
              value={passenger}
              onChange={handleChange}
              className="w-full rounded-lg focus:outline-none focus:border-teal-500"
            >
              <option value="1">1 Adult</option>
              <option value="2">2 Adults</option>
              <option value="3">3 Adults</option>
              <option value="4">4 Adults</option>
            </select>
          </div>
        </div>

        {/* Search Buses Button */}
        <button className="md:px-8 md:py-3 place-items-center item-center justify-center flex col-span-2 md:col-span-1 self-center bg-[#189AA7] text-white text-sm p-1 px-3 font-bold rounded shadow-lg hover:bg-teal-600 focus:outline-none">
          <p>Search Buses</p>
        </button>
      </div>

      {/* Results Table */}
      <section className="p-6 mt-16">
        <div className="overflow-x-auto">
          {filteredResults.length > 0 ? (
            <table className="w-full text-sm md:table-auto">
              <thead className="bg-gray-200">
                <tr>
                  <th className="border-b px-4 py-2 text-left">
                    Service Provider
                  </th>
                  <th className="border-b px-4 py-2 text-left">
                    Departure Time
                  </th>
                  <th className="border-b px-4 py-2 text-left">
                    Est. Arrival Time
                  </th>
                  <th className="border-b px-4 py-2 text-left">
                    Available Seats
                  </th>
                  <th className="border-b px-4 py-2 text-center font-bold">
                    Price
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredResults.map((item, idx) => (
                  <tr key={idx} className="hover:bg-gray-100">
                    <td className="px-4 py-2">
                      <p className="text-gray-500">{item.vehicleInfo}</p>
                    </td>
                    <td className="px-4 py-2">{item.departureTime}</td>
                    <td className="px-4 py-2">{item.etaTime}</td>
                    <td className="px-4 py-2">{item.availableSeats}</td>
                    <td className="px-4 py-5">
                      <button
                        onClick={() => handleDetails(item)}
                        className="bg-[#189AA7] text-white px-6 py-2 rounded-md shadow-sm"
                      >
                        View Seats
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No Results Found.</p>
          )}
        </div>
      </section>
    </main>
  );
}

export default function Book() {
  return (
    <NavBarWrapper>
      <Suspense fallback={<p>Loading...</p>}>
        <BookContent />
      </Suspense>
    </NavBarWrapper>
  );
}
