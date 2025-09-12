"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import { MapPin, Star, ArrowRight, TrendingUp, Users } from "lucide-react";

const PopularDestinations = () => {
  useEffect(() => {
    AOS.init({ duration: 800, easing: 'ease-out-cubic' });
  }, []);

  const destinations = [
    { 
      name: "Freetown", 
      price: "NLe 120", 
      img: "/freetown.jpeg",
      description: "Capital city with beautiful beaches",
      rating: "4.8",
      trips: "150+ trips daily",
      highlight: "Most Popular"
    },
    { 
      name: "Makeni", 
      price: "NLe 120", 
      img: "/makeni.jpeg",
      description: "Northern region's commercial hub",
      rating: "4.7",
      trips: "80+ trips daily",
      highlight: "Business Hub"
    },
    { 
      name: "Kenema", 
      price: "NLe 120", 
      img: "/Kenemaa.jpeg",
      description: "Diamond mining center",
      rating: "4.6",
      trips: "60+ trips daily",
      highlight: "Cultural Center"
    },
    { 
      name: "Bo", 
      price: "NLe 120", 
      img: "/kono.jpeg",
      description: "Southern province's largest city",
      rating: "4.7",
      trips: "90+ trips daily",
      highlight: "Growing Fast"
    },
  ];

  const highlights = [
    { icon: <Users className="w-5 h-5" />, text: "10,000+ Happy Travelers" },
    { icon: <TrendingUp className="w-5 h-5" />, text: "95% On-Time Performance" },
    { icon: <Star className="w-5 h-5" />, text: "4.8 Average Rating" },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div
            data-aos="fade-down"
            data-aos-delay="200"
            className="inline-flex items-center bg-teal-50 text-teal-700 px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <MapPin className="w-4 h-4 mr-2" />
            Top Destinations
          </div>
          
          <h2
            data-aos="fade-down"
            data-aos-delay="400"
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Popular 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600"> Destinations</span>
          </h2>
          
          <p
            data-aos="fade-up"
            data-aos-delay="600"
            className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8"
          >
            Explore Sierra Leones most loved destinations with our comfortable 
            and reliable bus services.
          </p>

          {/* Statistics */}
          <div
            data-aos="fade-up"
            data-aos-delay="800"
            className="flex flex-wrap justify-center gap-8 text-gray-600"
          >
            {highlights.map((highlight, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div className="text-teal-600">{highlight.icon}</div>
                <span className="text-sm font-medium">{highlight.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((destination, index) => (
            <div
              data-aos="fade-up"
              data-aos-delay={400 + (index * 150)}
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-gray-200 transform hover:-translate-y-3"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <Image
                  width={400}
                  height={250}
                  src={destination.img}
                  alt={destination.name}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60" />
                
                {/* Highlight Badge */}
                <div className="absolute top-4 left-4 bg-gradient-to-r from-teal-500 to-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  {destination.highlight}
                </div>

                {/* Rating & Trips Info */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex justify-between items-end text-white text-sm">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold">{destination.rating}</span>
                    </div>
                    <div className="text-xs opacity-90">
                      {destination.trips}
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors duration-300">
                    {destination.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {destination.description}
                  </p>
                </div>

                {/* Price Section */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <span className="text-gray-500 text-sm">Starting from</span>
                    <div className="text-2xl font-bold text-teal-600">
                      {destination.price}
                    </div>
                  </div>
                  <div className="text-green-600 text-sm font-medium bg-green-50 px-3 py-1 rounded-full">
                    Best Price
                  </div>
                </div>

                {/* Explore Button */}
                <button className="group/btn w-full bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2">
                  <span>Explore Routes</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                </button>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-teal-200 transition-colors duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          data-aos="fade-up"
          data-aos-delay="1000"
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-2xl p-8 border border-teal-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              Book your ticket now and experience comfortable travel across Sierra Leone 
              with our modern fleet and professional service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-white border-2 border-teal-600 text-teal-600 font-semibold rounded-xl hover:bg-teal-600 hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>View All Routes</span>
              </button>
              <button className="px-8 py-3 bg-gradient-to-r from-teal-600 to-blue-600 text-white font-semibold rounded-xl hover:from-teal-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2">
                <span>Book Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;