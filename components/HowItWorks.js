'use client'

import React, { useState } from 'react';
import { ChevronRight, Smartphone, Download, Calendar, CreditCard } from 'lucide-react';

const HowItWorks = () => {
  const [hoveredStep, setHoveredStep] = useState(null);

  const steps = [
    {
      id: 1,
      icon: Smartphone,
      title: "Book Online",
      description: "Browse and select your perfect travel option with our intuitive booking platform",
      color: "from-emerald-400 to-teal-500",
      bgColor: "bg-emerald-50",
      hoverBg: "hover:bg-emerald-100",
      delay: "0ms"
    },
    {
      id: 2,
      icon: Download,
      title: "Get Ticket",
      description: "Receive your digital tickets instantly via email or download to your device",
      color: "from-blue-400 to-indigo-500",
      bgColor: "bg-blue-50",
      hoverBg: "hover:bg-blue-100",
      delay: "150ms"
    },
    {
      id: 3,
      icon: Calendar,
      title: "Manage Bookings",
      description: "Track, modify, and organize all your travel plans in one convenient dashboard",
      color: "from-purple-400 to-pink-500",
      bgColor: "bg-purple-50",
      hoverBg: "hover:bg-purple-100",
      delay: "300ms"
    },
    {
      id: 4,
      icon: CreditCard,
      title: "Secure Payment",
      description: "Complete transactions safely with bank-level security and multiple payment options",
      color: "from-orange-400 to-red-500",
      bgColor: "bg-orange-50",
      hoverBg: "hover:bg-orange-100",
      delay: "450ms"
    }
  ];

  return (
    <div className="relative py-20 px-4 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white"></div>
      <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-blue-200/30 to-purple-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-r from-emerald-200/20 to-blue-200/20 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-200/50 mb-4">
            <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Simple Process
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold">
            <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              How It
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Works
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Experience the future of travel booking with our streamlined process designed for modern travelers
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 md:gap-6">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            const isHovered = hoveredStep === step.id;
            
            return (
              <div
                key={step.id}
                className="relative group"
                style={{ animationDelay: step.delay }}
                onMouseEnter={() => setHoveredStep(step.id)}
                onMouseLeave={() => setHoveredStep(null)}
              >
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-0">
                    <ChevronRight className="w-6 h-6 text-gray-300 group-hover:text-blue-500 transition-colors duration-500" />
                  </div>
                )}
                
                {/* Step Card */}
                <div className={`
                  relative h-full p-8 rounded-3xl border border-gray-200/60 bg-white/80 backdrop-blur-sm
                  transform transition-all duration-500 ease-out
                  hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20
                  ${isHovered ? 'border-blue-300/60' : ''}
                  group-hover:-translate-y-2
                `}>
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-gray-800 to-gray-900 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white text-sm font-bold">{step.id}</span>
                  </div>
                  
                  {/* Icon Container */}
                  <div className={`
                    relative mb-6 w-20 h-20 mx-auto rounded-2xl
                    bg-gradient-to-r ${step.color} p-0.5
                    transform transition-all duration-500
                    ${isHovered ? 'scale-110 rotate-12' : ''}
                  `}>
                    <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center">
                      <IconComponent className="w-10 h-10 text-gray-700" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="text-center space-y-4">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {step.description}
                    </p>
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className={`
                    absolute inset-0 rounded-3xl bg-gradient-to-br ${step.color} opacity-0
                    transition-opacity duration-500 pointer-events-none
                    ${isHovered ? 'opacity-5' : ''}
                  `}></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer">
            <span>Start Your Journey Today</span>
            <ChevronRight className="w-5 h-5" />
          </div>
          
          <p className="text-sm text-gray-500 mt-4">
            Join thousands of satisfied travelers worldwide
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;