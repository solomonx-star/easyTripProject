import Image from "next/image";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { FiPhoneCall, FiMail } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-auto">
      <div className="container mx-auto px-5">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Contact */}
          <div>
            {/* <Image
              src="/logo.png" 
              alt="EasyTrip Logo"
              width={150}
              height={50}
              className="mb-4"
            /> */}
            <p className="text-sm mb-3">Your Journey, Our Priority</p>
            <p className="flex items-center space-x-2">
              <FiPhoneCall className="text-primaryColour" />
              <span>+30223581</span>
            </p>
            <p className="flex items-center space-x-2">
              <FiMail className="text-primaryColour" />
              <span>easytrip.com</span>
            </p>
            <div className="flex space-x-3 mt-3">
              <FaFacebook className="hover:text-primaryColour transition-transform duration-300 transform hover:scale-125" />
              <FaTwitter className="hover:text-primaryColour transition-transform duration-300 transform hover:scale-125" />
              <FaInstagram className="hover:text-primaryColour transition-transform duration-300 transform hover:scale-125" />
              <FaYoutube className="hover:text-primaryColour transition-transform duration-300 transform hover:scale-125" />
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-3">Services</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-primaryColour cursor-pointer">Book Ticket</li>
              <li className="hover:text-primaryColour cursor-pointer">Reserve Ticket</li>
              <li className="hover:text-primaryColour cursor-pointer">Compare Prices</li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-3">Support</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-primaryColour cursor-pointer">Customer Services</li>
              <li className="hover:text-primaryColour cursor-pointer">FAQs</li>
              <li className="hover:text-primaryColour cursor-pointer">Comment/Complaint</li>
            </ul>
          </div>

          {/* Useful Info */}
          <div>
            <h3 className="font-semibold mb-3">Useful Information</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-primaryColour cursor-pointer">Terms and Conditions</li>
              <li className="hover:text-primaryColour cursor-pointer">Privacy Policy</li>
              <li className="hover:text-primaryColour cursor-pointer">Careers</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-5 text-sm flex flex-col md:flex-row justify-between">
          <p className="text-center">© EasyTrip 2024. All rights reserved.</p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
