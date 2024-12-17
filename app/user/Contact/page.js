import NavBarWrapper from "@/components/NavBarWrapper";
import Image from "next/image";

const Contact = () => {
  return (
    <NavBarWrapper>
      <div className="relative">
        <Image
          src="/bus.png"
          alt="Bus Travel"
          width={1920}
          height={600}
          className="w-full h-[800px] object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p className="mt-2 text-lg">Home / Contact Us</p>
          <p className="mt-2 text-lg">
            Revolutionazing Transportation System In Sierra Leone{" "}
          </p>
        </div>
      </div>
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">
          {/* Contact Form */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Contact Us
            </h2>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#21C4D3]"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#21C4D3]"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-medium"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  placeholder="Enter your message"
                  className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#21C4D3"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#21C4D3] text-white font-bold py-3 rounded-lg hover:bg-[#123c3f] transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Details */}
          <div className="bg-white-600 text-black shadow-lg rounded-lg p-6 flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
            <div className="space-y-4">
              <p className="flex items-center">
                <span className="material-icons-outlined mr-2">phone</span>{" "}
                +23230223581
              </p>
              <p className="flex items-center">
                <span className="material-icons-outlined mr-2">email</span>{" "}
                easytrip.com
              </p>
              <p className="flex items-center">
                <span className="material-icons-outlined mr-2">
                  location_on
                </span>{" "}
                12 Freeetown HighWay Makeni
              </p>
            </div>
          </div>
        </div>
      </div>
    </NavBarWrapper>
  );
};

export default Contact;
