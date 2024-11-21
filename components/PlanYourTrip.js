import Link from "next/link";
import { FaMapMarkerAlt, FaCalendarAlt, FaUser } from "react-icons/fa";

export default function PlanYourTrip() {
  const destinations = [
    { from: "Freetown", to: "Lunsar", price: "Nle 80", img: "/freetown.jpeg" },
    { from: "Makeni", to: "Freetown", price: "Nle 120", img: "/makeni.jpeg" },
    { from: "Kenema", to: "Freetown", price: "Nle 150", img: "/Kenemaa.jpeg" },
    { from: "Bo", to: "Makeni", price: "Nle 140", img: "/kono.jpeg" },
  ];

  return (
    <div className="justify-center items-center pb-10 pt-10 mt-[80%] md:mt-[5%]">
      <h1 className="text-3xl font-bold text-center mb-8">
        Plan Your trip with us
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
        {destinations.map((destination, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300"
          >
            <img
              src={destination.img}
              alt={destination.from}
              className="rounded-t-lg w-full h-48 object-cover"
            />
            <div className="flex p-4 justify-between">
              <div className="flex gap-3">
                <h3 className="text-lg font-semibold ">{destination.from}</h3>
                <h3 className="text-lg font-semibold">-</h3>
                <h3 className="text-lg font-semibold">{destination.to}</h3>
              </div>
              <div className="flex items-center">
                <p className="text-gray-600 mb-4"> {destination.price}</p>
              </div>
            </div>
            <div className="flex justify-between p-4">
              <div className="">
                <label className="flex items-center text-gray-500">
                  Departure date
                </label>
                <input
                  type="date"
                  className="rounded-lg  
                  "
                />
              </div>
              <div className="mt-4">
                <Link className="bg-[#21C4D3] text-white rounded p-2" href="/">
                  Reserve
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
