import { NextResponse } from "next/server";

// Middleware for authentication (Runs on `/dashboard` only)
function authMiddleware(request) {
  console.log("Auth Middleware Executed");
  // Example: Check for a token in cookies
  const token = request.cookies.get("token");
  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url)); // Redirect if no token , sending response and ending the req res cycle 
  }
  return NextResponse.next(); // Continue request to next middleware or route handler as this middleware is not sending response 
}

// Middleware for logging (Runs on `/profile` only)
function loggingMiddleware(request) {
//   console.log(request.nextUrl)
// contains info about url path and other info 
  console.log("Logging Middleware Executed");
  return NextResponse.next();
}

// Main Middleware function in which multiple middlewares are included as next js only allows one middleware function to be exported 
export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Apply different middleware based on the route

  if (pathname.startsWith("/dashboard")) {
    return authMiddleware(request);
  }

  if (pathname.startsWith("/profile")) {
    return loggingMiddleware(request);
  }

  if (pathname.startsWith('/about')) {
    return NextResponse.rewrite(new URL('/', request.url))
    // rewrite does not change the path but displays the content of rewrited path 
  }
 
  if (pathname.startsWith('/sensitive')) {
    return NextResponse.redirect(new URL('/', request.url))
    //  redirect changes the url path and directs into the given path
  }

  return NextResponse.next(); // Continue for other routes
}

// Configure matchers to trigger middleware only for relevant routes
export const config = {
  matcher: ["/dashboard/:path*", "/profile/:username*","/sensitive" , "/about"], // Ensures middleware runs only on these routes
};

//   ":path*" same as  :path/* extract only first  parameter and treats other ones as wild card 







// uses of middleware 

// Redirects & Rewrites

// Redirect users based on conditions.
// Rewrite URLs without changing them in the browser.
// Logging & Analytics

// Log requests, measure performance, or track user behavior.
// Rate Limiting & Security

// Prevent too many requests from a single IP.
// Block bad bots or certain user agents.
// Localization & Theming

// Automatically detect the user’s region and serve the appropriate language or theme.