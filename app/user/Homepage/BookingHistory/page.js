"use client";

import Breadcrumb from "@/components/BreadCrumb";
import NavBarWrapper from "@/components/NavBarWrapper";


import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, CheckCircle, XCircle } from "lucide-react";

// Sample booking data
const sampleBookings = {
  pending: [
    {
      id: "P001",
      type: "Bus",
      from: "New York",
      to: "Boston",
      date: "2024-03-15",
      time: "10:00 AM",
      status: "Pending",
    },
    {
      id: "P002",
      type: "Train",
      from: "Chicago",
      to: "Miami",
      date: "2024-04-20",
      time: "2:30 PM",
      status: "Pending",
    },
    {
      id: "P003",
      type: "Train",
      from: "Chicago",
      to: "Miami",
      date: "2024-04-20",
      time: "2:30 PM",
      status: "Pending",
    },
    {
      id: "P004",
      type: "Train",
      from: "Chicago",
      to: "Miami",
      date: "2024-04-20",
      time: "2:30 PM",
      status: "Pending",
    },
    {
      id: "P005",
      type: "Train",
      from: "Chicago",
      to: "Miami",
      date: "2024-04-20",
      time: "2:30 PM",
      status: "Pending",
    },
  ],
  completed: [
    {
      id: "C001",
      type: "Flight",
      from: "San Francisco",
      to: "Seattle",
      date: "2024-02-10",
      time: "9:45 AM",
      status: "Completed",
    },
    {
      id: "C002",
      type: "Car Rental",
      from: "Los Angeles",
      to: "San Diego",
      date: "2024-01-25",
      time: "11:00 AM",
      status: "Completed",
    },
  ],
  cancelled: [
    {
      id: "X001",
      type: "Train",
      from: "Washington DC",
      to: "Philadelphia",
      date: "2024-03-05",
      time: "1:15 PM",
      status: "Cancelled",
    },
  ],
};

const BookingHistoryPage = () => {
  const [activeTab, setActiveTab] = useState("pending");

  const renderBookingCard = (booking) => {
    const statusColors = {
      Pending: "text-yellow-500",
      Completed: "text-green-500",
      Cancelled: "text-red-500",
    };

    return (
      
      <Card key={booking.id} className="mb-4">
        <CardHeader className="flex flex-row items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className={`font-bold ${statusColors[booking.status]}`}>
              {booking.type} Booking
            </span>
            <span className="text-sm text-gray-500">#{booking.id}</span>
          </div>
          <div
            className={`flex items-center space-x-2 ${
              statusColors[booking.status]
            }`}
          >
            {booking.status === "Pending" && <Clock size={20} />}
            {booking.status === "Completed" && <CheckCircle size={20} />}
            {booking.status === "Cancelled" && <XCircle size={20} />}
            <span>{booking.status}</span>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-600">From</p>
              <p className="font-medium">{booking.from}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">To</p>
              <p className="font-medium">{booking.to}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Date</p>
              <p className="font-medium">{booking.date}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Time</p>
              <p className="font-medium">{booking.time}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <NavBarWrapper>
      <div className="max-w-2xl mt-20 mx-auto p-4">
        <h1 className="text-2xl font-bold mb-6">My Bookings</h1>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger
              value="pending"
              className="flex items-center space-x-2"
            >
              <Clock size={16} />
              <span>Pending ({sampleBookings.pending.length})</span>
            </TabsTrigger>
            <TabsTrigger
              value="completed"
              className="flex items-center space-x-2"
            >
              <CheckCircle size={16} />
              <span>Completed ({sampleBookings.completed.length})</span>
            </TabsTrigger>
            <TabsTrigger
              value="cancelled"
              className="flex items-center space-x-2"
            >
              <XCircle size={16} />
              <span>Cancelled ({sampleBookings.cancelled.length})</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="pending" className="mt-4">
            {sampleBookings.pending.length > 0 ? (
              sampleBookings.pending.map(renderBookingCard)
            ) : (
              <p className="text-center text-gray-500">No pending bookings</p>
            )}
          </TabsContent>

          <TabsContent value="completed" className="mt-4">
            {sampleBookings.completed.length > 0 ? (
              sampleBookings.completed.map(renderBookingCard)
            ) : (
              <p className="text-center text-gray-500">No completed bookings</p>
            )}
          </TabsContent>

          <TabsContent value="cancelled" className="mt-4">
            {sampleBookings.cancelled.length > 0 ? (
              sampleBookings.cancelled.map(renderBookingCard)
            ) : (
              <p className="text-center text-gray-500">No cancelled bookings</p>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </NavBarWrapper>
  );
};

export default BookingHistoryPage;