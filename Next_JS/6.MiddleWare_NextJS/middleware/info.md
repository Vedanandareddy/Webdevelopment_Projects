The middleware.js file must export a single function, either as a default export or named middleware. Note that multiple middleware from the same file are not supported.

✔ Next.js allows only one middleware.js file.
✔ You can combine multiple middleware functions inside this file.
✔ Use function composition or an array approach to manage multiple middleware.
✔ Middleware runs before the request is completed and can modify, redirect, or log requests.





Example: Multiple Middleware for Logging, Authentication, and Header Modification


import { NextResponse } from "next/server";

// 🔹 Logging Middleware
function logRequest(req) {
  console.log("Requested URL:", req.nextUrl.pathname);
  return NextResponse.next();
}

// 🔹 Authentication Middleware
function checkAuth(req) {
  const isLoggedIn = req.cookies.get("token");
  if (!isLoggedIn) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
  return NextResponse.next();
}

// 🔹 Header Modification Middleware
function modifyHeaders(req) {
  const res = NextResponse.next();
  res.headers.set("X-Custom-Header", "Hello from Middleware!");
  return res;
}

// 🔹 Main Middleware Function - Executes all middleware
export function middleware(req) {
  let response = logRequest(req); // First middleware
  if (response.status === 302) return response; // If redirected, stop execution

  response = checkAuth(req); // Second middleware
  if (response.status === 302) return response; // If redirected, stop execution

  return modifyHeaders(req); // Third middleware
}

// 🔹 Configure Middleware for Specific Routes
export const config = {
  matcher: ["/dashboard", "/profile"], // Runs only for /dashboard and /profile
};




Wildcards (*) vs Dynamic Routes (:path*) in Next.js
Both wildcards (*) and dynamic routes (:path*) are used to match multiple URLs, but they work differently.


1️⃣ Wildcards (*)
Wildcard (*) in matcher applies to all subpaths under a given route.
✅ It matches ANYTHING after the base route


2️⃣ Dynamic Routes (:path*)
✅ Used in both middleware and file-based routing (inside pages or app).
✅ Matches path segments dynamically and extracts them as parameters




3️⃣ Difference Summary
Feature	Wildcards (*)	Dynamic Routes (:path*)
Usage	Only in matcher	Middleware & file-based routing
Pattern	/dashboard/*	/user/:path*
Matching	Matches all subpaths	Matches subpaths & extracts parameters
Extract Params	❌ No parameter extraction	✅ Extracts values (e.g., :path*)
💡 Rule of Thumb:

Use * in matcher when you only need to match routes.
Use :path* when you need parameters in middleware or file-based routing.





Yes, if the config object is not present, the middleware will execute on every route in your Next.js application.

How Middleware Works Without config
By default, middleware runs on all requests, including API routes, static files, and pages.
