"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";
import NavBarWrapper from "@/components/NavBarWrapper";
import { FaCalendarAlt, FaMapMarkerAlt, FaUser } from "react-icons/fa";
import { MoveRight, Armchair, LifeBuoy } from "lucide-react";
import { useAuth } from "@/context/userContext";
import axios from "axios";

export default function Result() {
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

  // Booking Function
  const handleBooking = async (id) => {
    setIsLoading(true);
    setError(null);

    await fetch(`http://localhost:5000/api/customer/book/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authState.token}`,
      },
    })
      .then((response) => {
        console.log(response.data);
        alert("SUCCESSFULLY BOOKED");
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error.response.data);
        alert("FAILED TO BOOKED");
      })

  
  };

  return (
    <NavBarWrapper>
      <main className="container bg-gray-100 mt-20 mx-auto px-6 py-8">
        <section className=" bg-white">
          <div className="flex gap-9 p-4 border-b">
            <p className="font-bold text-lg">{from}</p>
            <p className="font-bold text-lg">-</p>
            <p className="font-bold text-lg">{to}</p>
          </div>
          <div className="mt-10">
            <table className="w-full text-sm">
              <thead className="">
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
                    <p className="text-gray-500">{departureDate}</p>
                    <p className="text-gray-500">{to}</p>
                  </td>
                  <td className="px-4 py-4">
                    <MoveRight size={35} color="gray" />
                    <p className="text-gray-500">5 hrs</p>
                  </td>
                  <td className="px-4 py-4">
                    <p className="text-gray-500">{etaTime}</p>
                    <p className="text-gray-500">{departureDate}</p>
                    <p className="text-gray-500">{to}</p>
                  </td>
                  <td className="px-4 py-4 text-center text-gray-500">
                    {availableSeats}
                  </td>
                  <td className="px-4 py-5 flex flex-col gap-10 items-center text-gray-500">
                    <p>Nle {price}</p>
                    <button
                      onClick={() => {
                        handleBooking(postId);
                      }}
                    //   disabled={isLoading}
                      className="bg-blue-500 text-white px-6 py-2 rounded-md shadow-sm disabled:bg-gray-300"
                    >
                      {isLoading ? "Processing..." : "Book Now"}
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        {error && (
          <p className="text-red-500 mt-4 text-center">Error: {error}</p>
        )}
      </main>
    </NavBarWrapper>
  );
}
