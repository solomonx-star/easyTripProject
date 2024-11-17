"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Breadcrumb = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter(Boolean); // Remove empty segments

  return (
    <nav aria-label="breadcrumb" className="text-sm text-gray-400">
      <ul className="flex items-center space-x-2">
        {/* Home Link */}
        <li>
          <Link href="/" className="text-red-500 hover:underline">
            Home
          </Link>
        </li>

        {/* Dynamic Links */}
        {pathSegments.map((segment, index) => {
          const isLast = index === pathSegments.length - 1;
          const path = `/${pathSegments.slice(0, index + 1).join("/")}`;

          return (
            <li key={index} className="flex items-center">
              {/* Separator */}
              <span className="mx-2 text-gray-500">›</span>

              {/* Segment */}
              {isLast ? (
                <span className="text-red-500">
                  {decodeURIComponent(segment)}
                </span>
              ) : (
                <Link href={path} className="text-red-500 hover:underline">
                  {decodeURIComponent(segment)}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
