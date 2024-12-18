"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";
import NavBarWrapper from "@/components/NavBarWrapper";
import { FaCalendarAlt, FaMapMarkerAlt, FaUser } from "react-icons/fa";
import { MoveRight, Armchair, LifeBuoy } from "lucide-react";
import { useAuth } from "@/context/userContext";
import axios from "axios";
import PaymentModal from "@/components/PaymentModal";

export default function Result() {
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();
  const { authState } = useAuth();

  const departureTime = searchParams.get("departureTime");
  const etaTime = searchParams.get("etaTime");
  const noOfSeats = searchParams.get("noOfSeats");
  const availableSeats = searchParams.get("availableSeats");
  const vehicleInfo = searchParams.get("vehicleInfo");
  const departureDate = searchParams.get("departureDate");
  const from = searchParams.get("from");
  const to = searchParams.get("to");
  const price = searchParams.get("price");
  const date = searchParams.get("departing");
  const passenger = searchParams.get("passenger");
  const postId = searchParams.get("id");

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  
const formatDate = (dateString) => {
  if (!dateString) return "";

  try {
    // If the date is already in the desired format, return it
    if (/^[A-Za-z]{3} \d{1,2} \d{4}$/.test(dateString)) {
      return dateString;
    }

    // Parse the date string directly into a Date object
    const date = new Date(dateString);

    // Check if the date is valid
    if (isNaN(date.getTime())) {
      return dateString; // Return the original string if invalid
    }

    // Format the date
    return date.toLocaleDateString("en-US", {
      month: "short", // Jan, Feb, etc.
      day: "numeric", // 1, 2, etc.
      year: "numeric", // 2024
    });
  } catch (error) {
    console.error("Date formatting error:", error);
    return dateString;
  }
};


  const formattedDate = formatDate(departureDate);

  console.log(formattedDate);


  // Booking Function
  const handleBooking = async (id) => {


    if (!authState || !authState.token) {
      // Redirect to login or show an alert for unauthenticated users
      alert("Please log in to book.");
      router.push("/user/Login"); // Adjust the route to your login page
      return;
    }


    setIsLoading(true);
    setError(null);

    await fetch(
      `https://easytrip-salone.up.railway.app/api/customer/book/${id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authState.token}`,
        },
      }
    )
      .then((response) => {
        console.log(response.data);
        alert("SUCCESSFULLY BOOKED");
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error.response.data);
        alert("FAILED TO BOOKED");
      });
  };

  return (
    <NavBarWrapper>
      <main className="container bg-gray-100 mt-20 mx-auto px-6 py-8">
        <div className="md:bg-gray-200 my-10 grid grid-cols-2 bg-gray-200 self-center shadow-lg p-4 text-gray-800  md:flex flex-col gap-5 md:flex-row items-center md:space-x-5 text-center">
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
                // onChange={handleChange}
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
                // onChange={handleChange}
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
                // onChange={handleChange}
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
                // onChange={handleChange}
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

          <button
            // onClick={handleSearch}
            className="md:px-8 md:py-3 place-items-center item-center justify-center flex col-span-2 md:col-span-1 self-center bg-[#189AA7] text-white text-sm p-1 px-3 font-bold rounded shadow-lg hover:bg-teal-600 focus:outline-none"
          >
            <p>Search Buses</p>
          </button>
        </div>
        <section className=" bg-white">
          <div className="flex gap-9 p-4 border-b justify-center items-center">
            <p className="font-bold text-lg">{from}</p>
            <p className="font-bold text-lg">-</p>
            <p className="font-bold text-lg">{to}</p>
          </div>
          <div className="mt-10 hidden md:block">
            <table className="w-full text-sm">
              <thead>
                <tr>
                  <th className="border-b  px-4 py-2 text-left">
                    Vehicle Type
                  </th>
                  <th className="border-b  px-4 py-2 text-left">Departure</th>
                  <th className="border-b  px-4 py-2 text-left">Duration</th>
                  <th className="border-b  px-4 py-2 text-left">Est.Arrival</th>
                  <th className="border-b  px-4 py-2 text-center font-bold">
                    Available Seats
                  </th>
                  <th className="border-b  px-4 py-2 text-center font-bold">
                    Price
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="">
                  <td className="px-4 py-4">{vehicleInfo}</td>
                  <td className="px-4 py-4">
                    <p className="text-gray-500">{departureTime}</p>
                    <p className="text-gray-500">{formattedDate}</p>
                    <p className="text-gray-500">{from}</p>
                  </td>
                  <td className="px-4 py-4 items-center gap-2">
                    <MoveRight size={35} color="gray" />
                    <p className="text-gray-500">5 hrs</p>
                  </td>
                  <td className="px-4 py-4">
                    <p className="text-gray-500">{etaTime}</p>
                    <p className="text-gray-500">{formattedDate}</p>
                    <p className="text-gray-500">{to}</p>
                  </td>
                  <td className="px-4 py-4 text-center text-gray-500">
                    {availableSeats}
                  </td>
                  <td className="px-4 py-5 flex flex-col gap-10 items-center text-gray-500">
                    <p>Nle {price}</p>
                    <button
                      // onClick={() => {
                      //   handleBooking(postId);
                      // }}
                      onClick={() => setIsPaymentModalOpen(true)}
                      //   disabled={isLoading}
                      className="bg-[#189AA7] text-white px-6 py-2 rounded-md shadow-sm disabled:bg-gray-300"
                    >
                      Book Now
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        {/* Mobile layout */}

        <div className="block md:hidden p-4">
          <div className="bg-white border rounded-lg shadow-md">
            <div className="p-4 border-b">
              <p className="text-xl font-bold">{vehicleInfo}</p>
            </div>

            <div className="grid grid-cols-2 gap-4 p-4">
              <div>
                <p className="text-sm font-semibold">Departure</p>
                <p className="text-gray-500">{departureTime}</p>
                <p className="text-gray-500">{formattedDate}</p>
                <p className="text-gray-500">{from}</p>
              </div>

              <div>
                <p className="text-sm font-semibold">Estimated Arrival</p>
                <p className="text-gray-500">{etaTime}</p>
                <p className="text-gray-500">{formattedDate}</p>
                <p className="text-gray-500">{to}</p>
              </div>
            </div>

            <div className="flex justify-between p-4 border-t">
              <div>
                <p className="text-sm font-semibold">Duration</p>
                <div className="flex items-center gap-2">
                  {/* <MoveRight size={25} color="gray" /> */}
                  <p className="text-gray-500">3 hrs</p>
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold">Available Seats</p>
                <p className="text-center text-gray-500">{availableSeats}</p>
              </div>
            </div>

            <div className="p-4 border-t flex flex-col items-center">
              <p className="text-lg font-bold mb-4">Nle {price}</p>
              <button
                // onClick={() => setIsPaymentModalOpen(true)}
                onClick={() => {
                  if (!authState || !authState.token) {
                    alert("Please log in to book.");
                    router.push("/user/Login"); // Redirect to login page
                  } else {
                    setIsPaymentModalOpen(true);
                  }
                }}
                className="bg-[#189AA7] text-white px-6 py-2 rounded-md shadow-sm w-full"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
        {error && (
          <p className="text-red-500 mt-4 text-center">Error: {error}</p>
        )}
        <div>
          <PaymentModal
            isOpen={isPaymentModalOpen}
            onClose={() => setIsPaymentModalOpen(false)}
            onSubmit={() => {
              handleBooking(postId);
            }}
          />
        </div>
      </main>
    </NavBarWrapper>
  );
}
