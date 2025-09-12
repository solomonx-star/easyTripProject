'use client';

import React, { useState } from 'react';
import { DollarSign, BookOpen, Scale, MessageCircle, ArrowRight, CheckCircle, Star } from 'lucide-react';

const WhyChooseUs = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: DollarSign,
      title: "Unbeatable Value",
      description: "Premium services at competitive prices with exclusive deals and transparent pricing—no hidden fees, just exceptional value.",
      gradient: "from-emerald-500 to-green-600",
      bgGradient: "from-emerald-50 to-green-50",
      stat: "30% Less",
      statLabel: "Than Competitors",
      image: "/happy.png"
    },
    {
      icon: BookOpen,
      title: "Effortless Experience",
      description: "Intuitive booking platform designed for speed and simplicity—from search to confirmation in just 3 clicks.",
      gradient: "from-blue-500 to-indigo-600",
      bgGradient: "from-blue-50 to-indigo-50",
      stat: "< 2 Min",
      statLabel: "Booking Time",
      image: "/customer.png"
    },
    {
      icon: Scale,
      title: "Smart Comparison",
      description: "AI-powered price comparison across all major carriers, ensuring you always get the best deal available.",
      gradient: "from-purple-500 to-pink-600",
      bgGradient: "from-purple-50 to-pink-50",
      stat: "500+",
      statLabel: "Partners Compared",
      image: "/struggle.png"
    },
    {
      icon: MessageCircle,
      title: "24/7 Support Excellence",
      description: "Award-winning customer service team available around the clock with multilingual support and instant assistance.",
      gradient: "from-orange-500 to-red-600",
      bgGradient: "from-orange-50 to-red-50",
      stat: "4.9★",
      statLabel: "Customer Rating",
      image: "/Booking.png"
    }
  ];

  const testimonials = [
    { name: "Sarah Chen", text: "Absolutely seamless experience!" },
    { name: "Mike Johnson", text: "Best prices I've found anywhere." },
    { name: "Emma Wilson", text: "Customer service is outstanding." }
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30"></div>
      <div className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-r from-blue-300/20 to-purple-300/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-emerald-300/15 to-teal-300/15 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-200/50 mb-6">
            <Star className="w-4 h-4 text-yellow-500 mr-2" />
            <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Trusted by 50,000+ Travelers
            </span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Why Choose
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Our Platform?
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience the difference with our innovative approach to travel booking, 
            designed around what modern travelers actually need.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Interactive Image Showcase */}
          <div className="relative">
            {/* Main Feature Display */}
            <div className="relative bg-white rounded-3xl shadow-2xl shadow-blue-500/10 overflow-hidden border border-gray-100">
              <div className={`h-80 bg-gradient-to-br ${features[activeFeature].bgGradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/5"></div>
                <div className="absolute top-6 left-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${features[activeFeature].gradient} flex items-center justify-center shadow-lg`}>
                    {/* <features[activeFeature].icon className="w-6 h-6 text-white" /> */}
                  </div>
                </div>
                <div className="absolute top-6 right-6">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm font-medium">Verified</span>
                    </div>
                  </div>
                </div>
                
                {/* Placeholder for image - in real implementation, you'd use the actual images */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl opacity-20">🎯</div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{features[activeFeature].title}</h3>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-900">{features[activeFeature].stat}</div>
                    <div className="text-xs text-gray-500">{features[activeFeature].statLabel}</div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">{features[activeFeature].description}</p>
              </div>
            </div>

            {/* Mini Feature Cards */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              {features.slice(0, 4).map((feature, index) => (
                <div
                  key={index}
                  className={`
                    p-4 rounded-2xl border cursor-pointer transition-all duration-300
                    ${activeFeature === index 
                      ? 'bg-white border-blue-300 shadow-lg scale-105' 
                      : 'bg-gray-50/50 border-gray-200 hover:bg-white hover:shadow-md'
                    }
                  `}
                  onClick={() => setActiveFeature(index)}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`
                      w-10 h-10 rounded-lg bg-gradient-to-r ${feature.gradient} 
                      flex items-center justify-center shadow-sm
                    `}>
                      <feature.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm">{feature.title}</h4>
                      <p className="text-xs text-gray-500 mt-1">{feature.statLabel}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Features List */}
          <div className="space-y-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              const isActive = activeFeature === index;
              
              return (
                <div
                  key={index}
                  className={`
                    group cursor-pointer p-6 rounded-2xl transition-all duration-500
                    ${isActive 
                      ? 'bg-white shadow-xl shadow-blue-500/10 border border-blue-200/50' 
                      : 'hover:bg-white/60 hover:shadow-lg'
                    }
                  `}
                  onClick={() => setActiveFeature(index)}
                  onMouseEnter={() => setActiveFeature(index)}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`
                      w-14 h-14 rounded-2xl bg-gradient-to-r ${feature.gradient} 
                      flex items-center justify-center shadow-lg transform transition-all duration-300
                      ${isActive ? 'scale-110 rotate-3' : 'group-hover:scale-105'}
                    `}>
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className={`
                          text-xl font-bold transition-colors duration-300
                          ${isActive ? 'text-blue-600' : 'text-gray-900 group-hover:text-blue-600'}
                        `}>
                          {feature.title}
                        </h3>
                        <ArrowRight className={`
                          w-5 h-5 transition-all duration-300
                          ${isActive ? 'text-blue-500 translate-x-1' : 'text-gray-400 group-hover:text-blue-500 group-hover:translate-x-1'}
                        `} />
                      </div>
                      
                      <p className="text-gray-600 leading-relaxed mb-3">
                        {feature.description}
                      </p>
                      
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                          <div className="text-2xl font-bold text-gray-900">{feature.stat}</div>
                          <div className="text-sm text-gray-500">{feature.statLabel}</div>
                        </div>
                        {isActive && (
                          <div className="flex items-center space-x-1 animate-pulse">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            <span className="text-xs text-blue-600 font-medium">Active</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Testimonials Strip */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white overflow-hidden relative">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative">
            <h3 className="text-2xl font-bold text-center mb-6">What Our Customers Say</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="text-center">
                  <p className="text-lg mb-2">{testimonial.text}</p>
                  <p className="text-blue-200 font-medium">- {testimonial.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;