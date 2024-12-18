const HowItWorks = () => {
    return (
      <div className="mt-[2%]">
        {/* Section Heading */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">How it Works</h1>
          <p className="text-gray-600">
            Explore our &quot;How it Works&quot; section to discover the
            simplicity <br />
            behind securing your travel tickets.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 px-4 md:px-10">
          {/* Step 1 */}
          <div
            // data-aos-delay="900"
            // data-aos-duration="1000"
            // data-aos="fade-right"
            className="flex flex-col items-center p-6 shadow-lg bg-white rounded-lg hover:bg-green-100 transition-transform duration-300 transform hover:-translate-y-2"
          >
            <div className="mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-12 h-12 text-green-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.75 8.75h14.5M4.75 15.25h14.5m-9.5-11.5h5a2 2 0 012 2v12.5a2 2 0 01-2 2h-5a2 2 0 01-2-2V5.75a2 2 0 012-2z"
                />
              </svg>
            </div>
            <h2 className="text-xl font-bold mb-2">Book Online</h2>
            <p className="text-gray-600">
              With just a few clicks, you can reserve your travel tickets from
              the comfort of your own home.
            </p>
          </div>

          {/* Step 2 */}
          <div
            // data-aos-delay="900"
            // data-aos-duration="1000"
            // data-aos="fade-up"
            className="flex flex-col items-center p-6 shadow-lg bg-white rounded-lg hover:bg-blue-100 transition-transform duration-300 transform hover:-translate-y-2"
          >
            <div className="mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-12 h-12 text-blue-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-3A2.25 2.25 0 008.25 5.25V9m7.5 0v10.5a2.25 2.25 0 01-2.25 2.25h-3A2.25 2.25 0 018.25 19.5V9m7.5 0H8.25"
                />
              </svg>
            </div>
            <h2 className="text-xl font-bold mb-2">Get Ticket</h2>
            <p className="text-gray-600">
              Instantly download or receive your tickets after booking online.
            </p>
          </div>

          {/* Step 3 */}
          <div
            // data-aos-delay="900"
            // data-aos-duration="1000"
            // data-aos="fade-up"
            className="flex flex-col items-center p-6 shadow-lg bg-white rounded-lg hover:bg-purple-100 transition-transform duration-300 transform hover:-translate-y-2"
          >
            <div className="mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-12 h-12 text-purple-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 8.25v12a.75.75 0 00.75.75h15a.75.75 0 00.75-.75v-12m-16.5 0A2.25 2.25 0 016 6h12a2.25 2.25 0 012.25 2.25m-16.5 0h16.5M9.75 3.75h4.5m-4.5 0A2.25 2.25 0 0112 6h0a2.25 2.25 0 012.25-2.25m-4.5 0h4.5"
                />
              </svg>
            </div>
            <h2 className="text-xl font-bold mb-2">View Your Bookings</h2>
            <p className="text-gray-600">
              Manage your travel plans by viewing and editing your bookings at
              any time.
            </p>
          </div>

          {/* Step 4 */}
          <div
            // data-aos-delay="900"
            // data-aos-duration="1000"
            // data-aos="fade-left"
            className="flex flex-col items-center p-6 shadow-lg bg-white rounded-lg hover:bg-yellow-100 transition-transform duration-300 transform hover:-translate-y-2"
          >
            <div className="mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-12 h-12 text-yellow-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 7.5V6A2.25 2.25 0 0015 3.75h-6A2.25 2.25 0 006.75 6v1.5m0 9V18a2.25 2.25 0 002.25 2.25h6A2.25 2.25 0 0017.25 18v-1.5m-10.5 0h10.5m-10.5 0V9m10.5 0v6"
                />
              </svg>
            </div>
            <h2 className="text-xl font-bold mb-2">Seamless Payment</h2>
            <p className="text-gray-600">
              Pay securely using a variety of payment methods with a smooth and
              hassle-free experience.
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default HowItWorks;
  