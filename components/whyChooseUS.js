import Image from "next/image";
import {CurrencyDollarIcon,BookOpenIcon,ScaleIcon,ChatBubbleOvalLeftEllipsisIcon,} from "@heroicons/react/24/outline";

const WhyChooseUs = () => {
  return (
    <section className="py-16 ">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-3xl font-extrabold text-black mb-10">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Image Section */}
          <div className="col-span-1 md:col-span-2 grid grid-cols-2 gap-4">
            <div className="rounded-lg overflow-hidden">
              <Image
                src="/happy.png"
                alt="Happy people"
                width={300}
                height={200}
                className="rounded-lg"
              />
            </div>
            <div className="rounded-lg overflow-hidden">
              <Image
                src="/customer.png"
                alt="Using a device"
                width={300}
                height={200}
                className="rounded-lg"
              />
            </div>
            <div className="rounded-lg overflow-hidden">
              <Image
                src="/struggle.png"
                alt="Shrugging person"
                width={300}
                height={200}
                className="rounded-lg"
              />
            </div>
            <div className="rounded-lg overflow-hidden">
              <Image
                src="/Booking.png"
                alt="Customer service"
                width={300}
                height={200}
                className="rounded-lg"
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="col-span-1 md:col-span-2 flex flex-col justify-center space-y-20">
            <div className="flex items-center space-x-4">
              <CurrencyDollarIcon className="h-8 w-8 text-green-500" />
              <div>
                <h3 className="text-xl font-bold text-gray-800">
                  Affordable Prices
                </h3>
                <p className="text-gray-600">
                  We provide the best services at the most affordable price with
                  lots of great benefits.
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <BookOpenIcon className="h-8 w-8 text-blue-500" />
              <div>
                <h3 className="text-xl font-bold text-gray-800">
                  Seamless Booking Experience
                </h3>
                <p className="text-gray-600">
                  Our user-friendly website allows you to search, select, and
                  purchase tickets seamlessly.
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <ScaleIcon className="h-8 w-8 text-purple-500" />
              <div>
                <h3 className="text-xl font-bold text-gray-800">
                  Price Comparison
                </h3>
                <p className="text-gray-600">
                  Compare prices from various transportation companies to choose
                  your preferred price.
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <ChatBubbleOvalLeftEllipsisIcon className="h-8 w-8 text-yellow-500" />
              <div>
                <h3 className="text-xl font-bold text-gray-800">
                  Excellent Customer Service
                </h3>
                <p className="text-gray-600">
                  Our Customer support is top-notch, providing you with all the
                  needed assistance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
