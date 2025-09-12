"use client";

import Link from "next/link";
import { FaMapMarkerAlt, FaCalendarAlt, FaUser, FaRoute, FaClock } from "react-icons/fa";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import { MapPin, Calendar, ArrowRight, Star, Clock } from "lucide-react";
import Image from "next/image";

export default function PlanYourTrip() {
  useEffect(() => {
    AOS.init({ duration: 800, easing: 'ease-out-cubic' });
  }, []);

  const destinations = [
    { 
      from: "Freetown", 
      to: "Lunsar", 
      price: "NLe 80", 
      duration: "2h 30m",
      rating: "4.8",
      img: "/freetown.jpeg",
      popular: true 
    },
    { 
      from: "Makeni", 
      to: "Freetown", 
      price: "NLe 120", 
      duration: "3h 15m",
      rating: "4.7",
      img: "/makeni.jpeg",
      popular: false 
    },
    { 
      from: "Kenema", 
      to: "Freetown", 
      price: "NLe 150", 
      duration: "4h 20m",
      rating: "4.9",
      img: "/Kenemaa.jpeg",
      popular: false 
    },
    { 
      from: "Bo", 
      to: "Makeni", 
      price: "NLe 140", 
      duration: "3h 45m",
      rating: "4.6",
      img: "/kono.jpeg",
      popular: false 
    },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-16 px-4 mt-[40%] md:mt-[8%]">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div
            data-aos="fade-down"
            data-aos-delay="200"
            className="inline-flex items-center bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <MapPin className="w-4 h-4 mr-2" />
            Popular Routes
          </div>
          
          <h1
            data-aos="fade-down"
            data-aos-delay="400"
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Plan Your Trip 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600"> With Us</span>
          </h1>
          
          <p
            data-aos="fade-up"
            data-aos-delay="600"
            className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
          >
            Discover our most popular routes with comfortable buses, 
            competitive prices, and reliable service across Sierra Leone.
          </p>
        </div>

        {/* Destination Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((destination, index) => (
            <div
              data-aos="fade-up"
              data-aos-delay={300 + (index * 150)}
              key={index}
              className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-gray-200 transform hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <Image
                  width={400}
                  height={250}
                  src={destination.img}
                  alt={`${destination.from} to ${destination.to}`}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Overlay Elements */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Popular Badge */}
                {destination.popular && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1">
                    <Star className="w-3 h-3 fill-current" />
                    <span>Popular</span>
                  </div>
                )}

                {/* Rating Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-gray-800 px-2 py-1 rounded-full text-xs font-semibold flex items-center space-x-1">
                  <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  <span>{destination.rating}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                
                {/* Route Info */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <h3 className="text-lg font-bold text-gray-900">{destination.from}</h3>
                    <ArrowRight className="w-4 h-4 text-gray-400" />
                    <h3 className="text-lg font-bold text-gray-900">{destination.to}</h3>
                  </div>
                </div>

                {/* Trip Details */}
                <div className="flex items-center justify-between mb-6 text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{destination.duration}</span>
                  </div>
                  <div className="text-2xl font-bold text-teal-600">
                    {destination.price}
                  </div>
                </div>

                {/* Booking Section */}
                <div className="space-y-4">
                  
                  {/* Date Picker */}
                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                      <Calendar className="w-4 h-4 mr-2 text-gray-500" />
                      Select Date
                    </label>
                    <input
                      type="date"
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 hover:border-gray-300"
                    />
                  </div>

                  {/* Reserve Button */}
                  <Link 
                    href={`/user/Homepage/Book?from=${destination.from}&to=${destination.to}`}
                    className="block w-full"
                  >
                    <button className="w-full bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2 group">
                      <span>Reserve Seat</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          data-aos="fade-up"
          data-aos-delay="800"
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-8 border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Cant Find Your Route?
            </h3>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              Were constantly expanding our network. Contact us for custom routes or check our full schedule.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/user/Contact">
                <button className="px-8 py-3 bg-white border-2 border-teal-600 text-teal-600 font-semibold rounded-xl hover:bg-teal-600 hover:text-white transition-all duration-300 transform hover:scale-105">
                  Contact Us
                </button>
              </Link>
              <Link href="/user/Homepage/Book">
                <button className="px-8 py-3 bg-gradient-to-r from-teal-600 to-blue-600 text-white font-semibold rounded-xl hover:from-teal-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                  View All Routes
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}