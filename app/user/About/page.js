// components/AboutUs.js
import LeadershipTeam from "@/components/LeadershipTeam";
import NavBarWrapper from "@/components/NavBarWrapper";
import FooterWrapper from "@/components/FooterWrapper";
import Image from "next/image";
import React from "react";
const About = () => {
  return (
    <NavBarWrapper>
      <FooterWrapper>
        <div className="bg-white text-gray-800">
          {/* Header Section */}
          <div className="relative">
            <Image
              src="/bus.png"
              alt="Bus Travel"
              width={1920}
              height={600}
              className="w-full h-[800px] object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
              <h1 className="text-4xl font-bold">About Us</h1>
              <p className="mt-2 text-lg">Home / About Us</p>
              <p className="mt-2 text-lg">
                Revolutionazing Transportation System In Sierra Leone{" "}
              </p>
            </div>
          </div>

          {/* Content Section */}
          <div className="container mx-auto px-4 py-12">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold mb-8">We are EasyTrip</h2>
              <p className="text-gray-600">
                We are your trusted partner in seamless bus travel experiences.
                Our journey began with a vision to redefine the way people
                explore the world through bus travel.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Images Section */}
              <div className="grid grid-cols-2 gap-4">
                <Image
                  src="/team.png"
                  alt="Community"
                  width={300}
                  height={300}
                  className="rounded-lg shadow-lg"
                />
                <Image
                  src="/tech.png"
                  alt="Technology"
                  width={300}
                  height={300}
                  className="rounded-lg shadow-lg"
                />

                <Image
                  src="/community.png"
                  alt="Technology"
                  width={300}
                  height={300}
                  className="rounded-lg shadow-lg"
                />
                <Image
                  src="/group.png"
                  alt="Team"
                  width={300}
                  height={300}
                  className="rounded-lg shadow-lg"
                />
              </div>

              {/* Text Section */}
              <div>
                <p className="text-gray-700 mb-16">
                  At EasyTrip, we are more than just a platform for booking bus
                  travel—we are the architects of unforgettable travel
                  experiences. Our mission is to revolutionize how people
                  explore the world through travel journeys..
                </p>
                <p className="text-gray-700 mb-16">
                  Rooted in excellence, we focus on providing a seamless,
                  user-friendly platform, integrating advanced technology, and
                  ensuring top-tier customer satisfaction. Whether you are
                  looking to browse, select, or book bus tickets to destinations
                  near and far, our system is designed to make it easy and
                  hassle-free.
                </p>
                <p className="text-gray-700 mt-4">
                  Our team is driven by a passion for creating a travel
                  ecosystem that goes beyond expectations. By partnering with
                  trusted transport providers and offering flexible booking
                  options, we make each journey memorable and stress-free. With
                  EasyTrip, your adventure begins with confidence and
                  convenience.
                </p>
              </div>
            </div>
          </div>
          <section className="bg-[#21C4D3] text-white py-12">
            <div className="container mx-auto text-center">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="transition-transform duration-500 hover:scale-110">
                  <h2 className="text-4xl font-bold">1M+</h2>
                  <p className="mt-2">Happy Customers</p>
                </div>
                <div className="transition-transform duration-500 hover:scale-110">
                  <h2 className="text-4xl font-bold">100+</h2>
                  <p className="mt-2">Cities Covered</p>
                </div>
                <div className="transition-transform duration-500 hover:scale-110">
                  <h2 className="text-4xl font-bold">500+</h2>
                  <p className="mt-2">Transport Partners</p>
                </div>
                <div className="transition-transform duration-500 hover:scale-110">
                  <h2 className="text-4xl font-bold">24/7</h2>
                  <p className="mt-2">Customer Support</p>
                </div>
              </div>
            </div>
          </section>
          <LeadershipTeam />
        </div>
      </FooterWrapper>
    </NavBarWrapper>
  );
};

export default About;
