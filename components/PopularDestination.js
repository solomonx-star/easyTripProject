"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

const PopularDestinations = () => {
  useEffect(() => {
    AOS.init({});
  }, []);

  const destinations = [
    { name: "Freetown", price: "Nle 120", img: "/freetown.jpeg" },
    { name: "Makeni", price: "Nle 120", img: "/makeni.jpeg" },
    { name: "Kenema", price: "Nle 120", img: "/Kenemaa.jpeg" },
    { name: "Bo", price: "Nle 120", img: "/kono.jpeg" },
  ];

  return (
    <section className="pb-5">
      <h2
        data-aos-delay="900"
        data-aos-duration="1000"
        data-aos="fade-down"
        className="text-3xl font-bold text-center mb-8"
      >
        Popular Destinations
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
        {destinations.map((destination, index) => (
          <div
            data-aos-delay="900"
            data-aos-duration="1000"
            data-aos="fade-up"
            key={index}
            className="bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 hover:bg-[#F9ECE4]"
          >
            <img
              src={destination.img}
              alt={destination.name}
              className="rounded-t-lg w-full h-48 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold mb-2">{destination.name}</h3>
              <p className="text-gray-600 mb-4">From {destination.price}</p>
              <button className="bg-[#189AA7] text-white px-4 py-2 rounded-lg hover:bg-[#F9ECE4] transition duration-400">
                Explore
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularDestinations;
