"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Breadcrumb = () => {
  const pathname = usePathname(); // Get current path
  const pathSegments = pathname.split("/").filter(Boolean); // Remove empty segments
  const currentRoute = pathSegments[pathSegments.length - 1]; // Get the last segment

  return (
    <nav aria-label="breadcrumb" className="text-sm text-gray-400">
      <ul className="flex items-center space-x-2">
        {/* Home Link */}
        <li>
          <Link href="/user/Homepage" className="text-gray-400 hover:underline">
            Home
          </Link>
        </li>

        {/* Current Route */}
        {currentRoute && (
          <li className="flex items-center">
            {/* Separator */}
            <span className="mx-1 text-gray-500">/</span>

            {/* Current Segment */}
            <span className="text-black text-base">
              {decodeURIComponent(currentRoute)}
            </span>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
