"use client"

import NavBarWrapper from "@/components/NavBarWrapper";
import FloatingForm from "@/components/floatingForm";




export default function Book() {
    return (
      <NavBarWrapper>
        <main className="container mx-auto px-6 py-8">
          {/* Search Form */}
          <FloatingForm />

          {/* Results Table */}
          <section className="bg-white shadow-md rounded-lg p-6 mt-10">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 text-sm">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="border border-gray-300 px-4 py-2 text-left">
                      Service Provider
                    </th>
                    <th className="border border-gray-300 px-4 py-2 text-left">
                      Departure Time
                    </th>
                    <th className="border border-gray-300 px-4 py-2 text-left">
                      Est. Arrival Time
                    </th>
                    <th className="border border-gray-300 px-4 py-2 text-left">
                      Available Seats
                    </th>
                    <th className="border border-gray-300 px-4 py-2 text-left">
                      Price
                    </th>
                    <th className="border border-gray-300 px-4 py-2"></th>
                  </tr>
                </thead>
                <tbody>
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <tr key={idx} className="hover:bg-gray-100">
                      <td className="border border-gray-300 px-4 py-2">
                        GIG Transport
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        5:30 AM
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        7:30 PM
                      </td>
                      <td className="border border-gray-300 px-4 py-2">10</td>
                      <td className="border border-gray-300 px-4 py-2">
                        ₦25,000
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-right">
                        <button className="bg-blue-600 text-white px-4 py-1 rounded-lg shadow-sm hover:bg-blue-700">
                          View Seats
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </main>
      </NavBarWrapper>
    );
}