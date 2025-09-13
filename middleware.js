import { NextResponse } from "next/server";

export function middleware(request) {
  // Check if the token exists in cookies
  const token = request.cookies.get("authToken");

  // Redirect to login if the token is missing
  console.log(token)
  if (!token) {
    return NextResponse.redirect(new URL("/user/Homepage", request.url));
  }

  // If the token exists, allow the request to proceed
  return NextResponse.next();
}

// Apply middleware only to protected routes
export const config = {

  matcher: ["/admin", "/booking"], // Adjust paths as needed

};