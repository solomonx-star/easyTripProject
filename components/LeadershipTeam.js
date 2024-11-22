import React from "react";
import Image from "next/image";

const LeadershipTeam = () => {
  const teamMembers = [
    {
      name: "John Doe",
      position: "CEO",
      note: "An innovative leader with a passion for transforming the travel industry.",
      image: "/ceo.png",
    },
    {
      name: "Jane Smith",
      position: "CTO",
      note: "Driving technological excellence and innovation in every solution.",
      image: "/c.png",
    },
    {
      name: "Emily Johnson",
      position: "COO",
      note: "Ensuring seamless operations and top-notch customer experiences.",
      image: "/coo.png",
    },
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8 h-full">Our Leadership Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 transition-transform duration-500 hover:scale-105"
            >
              <img
                src={member.image}
                alt={member.name}
                className="rounded-full w-32 h-32 mx-auto mb-4 border-4 border-[#21C4D3]"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-blue-600">{member.position}</p>
              <p className="mt-4 text-gray-600">{member.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipTeam;
