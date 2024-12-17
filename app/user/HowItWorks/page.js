import NavBarWrapper from "@/components/NavBarWrapper";
import Breadcrumb from "@/components/BreadCrumb";

import React from "react";
import {
  ArrowRight,
  Search,
  Calendar,
  CreditCard,
  CheckCircle,
  MapPin,
} from "lucide-react";

const HowItWorksPage = () => {
  const bookingSteps = [
    {
      icon: <Search className="w-12 h-12 text-blue-600" />,
      title: "Search Your Route",
      description:
        "Enter your starting point, destination, and travel dates. Our system will show you available transportation options tailored to your needs.",
    },
    {
      icon: <MapPin className="w-12 h-12 text-green-600" />,
      title: "Select Your Trip",
      description:
        "Browse through various transportation modes - buses, trains, shared rides, or private transfers. Compare prices, timings, and amenities to find your perfect match.",
    },
    {
      icon: <Calendar className="w-12 h-12 text-purple-600" />,
      title: "Choose Details",
      description:
        "Customize your booking by selecting seat preferences, additional services, and any special requirements. Get a clear view of your total trip cost upfront.",
    },
    {
      icon: <CreditCard className="w-12 h-12 text-teal-600" />,
      title: "Make Payment",
      description:
        "Complete your booking securely using multiple payment options. We support credit cards, digital wallets, and local payment methods for your convenience.",
    },
    {
      icon: <CheckCircle className="w-12 h-12 text-emerald-600" />,
      title: "Confirmation & Support",
      description:
        "Receive an instant digital ticket and booking confirmation. Our 24/7 customer support is always ready to assist you with any queries or changes.",
    },
  ];

  return (
    <NavBarWrapper>
      <div className="container mx-auto mt-20 px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            How EasyTrip Booking Works
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Booking your transportation has never been easier. Follow these
            simple steps to plan your perfect journey.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-6 items-start">
          {bookingSteps.map((step, index) => (
            <div
              key={step.title}
              className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md"
            >
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Step {index + 1}: {step.title}
              </h3>
              <p className="text-gray-600">{step.description}</p>
              {index < bookingSteps.length - 1 && (
                <div className="hidden md:block mt-4">
                  <ArrowRight className="w-8 h-8 text-gray-400 mx-auto" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-50 p-8 rounded-lg text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Why Choose EasyTrip?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="text-xl font-semibold mb-3">
                Transparent Pricing
              </h4>
              <p className="text-gray-600">
                No hidden fees. See the complete cost before you book.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3">Wide Coverage</h4>
              <p className="text-gray-600">
                Extensive network covering multiple cities and routes.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3">24/7 Support</h4>
              <p className="text-gray-600">
                Customer support available round the clock.
              </p>
            </div>
          </div>
        </div>
      </div>
    </NavBarWrapper>
  );
};

export default HowItWorksPage;
