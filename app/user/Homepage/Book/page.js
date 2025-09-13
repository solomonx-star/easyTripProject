'use client'

import React, { useState } from 'react';
import { MapPin, Clock, Users, Bus, Calendar, DollarSign, ArrowRight, CheckCircle, Phone, User } from 'lucide-react';

export default function BusBookingPage() {
  const [selectedSeats, setSelectedSeats] = useState(1);
  const [passengerName, setPassengerName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [showBookingForm, setShowBookingForm] = useState(false);

  // Trip data from backend
  const tripData = {
    _id: "674f06b5ec9c910bcc416ee0",
    departureTime: "5:30 AM",
    etaTime: "8:30 AM",
    noOfSeats: 20,
    availableSeats: 15,
    vehicleInfo: "Bus, without AC",
    departureDate: "2024-12-23T00:00:00.000Z",
    from: "Freetown",
    to: "Makeni",
    price: 120,
    availability: true
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const handleBooking = () => {
    if (!passengerName || !phoneNumber) {
      alert('Please fill in all required fields');
      return;
    }
    
    const bookingData = {
      tripId: tripData._id,
      passengerName,
      phoneNumber,
      seatsBooked: selectedSeats,
      totalAmount: tripData.price * selectedSeats
    };
    
    alert(`🎉 Booking Confirmed!\n\n📋 Booking Details:\n• Passenger: ${passengerName}\n• Phone: ${phoneNumber}\n• Seats: ${selectedSeats}\n• Total: Le ${tripData.price * selectedSeats}\n• Trip ID: ${tripData._id.slice(-8)}`);
  };

  const bookingDetails = [
    { icon: MapPin, label: "Route", value: `${tripData.from} → ${tripData.to}`, color: "text-blue-600" },
    { icon: Calendar, label: "Travel Date", value: formatDate(tripData.departureDate), color: "text-purple-600" },
    { icon: Clock, label: "Departure", value: tripData.departureTime, color: "text-orange-600" },
    { icon: Clock, label: "Arrival", value: tripData.etaTime, color: "text-green-600" },
    { icon: Bus, label: "Vehicle", value: tripData.vehicleInfo, color: "text-gray-600" },
    { icon: Users, label: "Available Seats", value: `${tripData.availableSeats} of ${tripData.noOfSeats}`, color: "text-indigo-600" },
    { icon: DollarSign, label: "Price per Seat", value: `Le ${tripData.price}`, color: "text-emerald-600" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header with gradient */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-4">
            <Bus className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">
            Book Your Journey
          </h1>
          <p className="text-gray-600 text-lg">Experience comfort and reliability on every trip</p>
        </div>

        {/* Enhanced Trip Info Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden mb-8">
          {/* Card Header with gradient */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="bg-white bg-opacity-20 rounded-lg p-3">
                  <Bus className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">{tripData.from}</h2>
                  <div className="flex items-center space-x-2 mt-1">
                    <ArrowRight className="w-4 h-4" />
                    <span className="text-lg">{tripData.to}</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="bg-green-400 text-green-900 px-4 py-2 rounded-full font-semibold text-sm flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Available</span>
                </div>
                <div className="text-3xl font-bold mt-2">Le {tripData.price}</div>
                <div className="text-sm opacity-90">per seat</div>
              </div>
            </div>
          </div>

          {/* Booking Details List */}
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Trip Details</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {bookingDetails.map((detail, index) => {
                const IconComponent = detail.icon;
                return (
                  <div key={index} className="flex items-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                    <div className={`p-2 rounded-lg bg-white shadow-sm ${detail.color}`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-500">{detail.label}</p>
                      <p className="text-lg font-semibold text-gray-800">{detail.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Enhanced Booking Section */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          {!showBookingForm ? (
            <div className="p-8 text-center">
              <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Book Your Seat?</h3>
              <p className="text-gray-600 mb-6 max-w-md mx-auto">
                Secure your spot on this comfortable journey. Quick and easy booking process.
              </p>
              <button
                onClick={() => setShowBookingForm(true)}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                Book Now →
              </button>
            </div>
          ) : (
            <div className="p-8">
              <div className="flex items-center space-x-3 mb-8">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-full p-2">
                  <User className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Passenger Information</h3>
              </div>
              
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2 text-sm font-semibold text-gray-700">
                      <User className="w-4 h-4 text-blue-600" />
                      <span>Full Name *</span>
                    </label>
                    <input
                      type="text"
                      value={passengerName}
                      onChange={(e) => setPassengerName(e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="flex items-center space-x-2 text-sm font-semibold text-gray-700">
                      <Phone className="w-4 h-4 text-green-600" />
                      <span>Phone Number *</span>
                    </label>
                    <input
                      type="tel"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
                      placeholder="+232 XX XXX XXX"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="flex items-center space-x-2 text-sm font-semibold text-gray-700">
                    <Users className="w-4 h-4 text-purple-600" />
                    <span>Number of Seats</span>
                  </label>
                  <select
                    value={selectedSeats}
                    onChange={(e) => setSelectedSeats(parseInt(e.target.value))}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all bg-white"
                  >
                    {[...Array(Math.min(tripData.availableSeats, 5))].map((_, i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1} seat{i > 0 ? 's' : ''}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Enhanced Total Section */}
                <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 border-2 border-green-200">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-gray-600">Total Amount</p>
                      <p className="text-lg font-medium text-gray-800">{selectedSeats} seat{selectedSeats > 1 ? 's' : ''} × Le {tripData.price}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-green-600">
                        Le {tripData.price * selectedSeats}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex space-x-4 pt-4">
                  <button
                    onClick={() => setShowBookingForm(false)}
                    className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-4 rounded-xl font-semibold text-lg transition-colors"
                  >
                    ← Back
                  </button>
                  <button
                    onClick={handleBooking}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 rounded-xl font-semibold text-lg shadow-lg transform hover:scale-105 transition-all duration-200"
                  >
                    Confirm Booking ✓
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}