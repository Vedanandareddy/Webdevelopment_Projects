import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}



// If both Navbar and Footer use <Head> to set a title, the last rendered <Head> wins because React processes updates sequentially.

// If Navbar and Footer both use <Head>, the last rendered <Head> wins (React updates the title sequentially).
// If metadata is defined in RootLayout, it initially sets the title but can be overridden by client-side <Head> components.
// metadata cannot be used in Navbar/Footer because it's only allowed at page and layout levels in Next.js.


// metadata can only be used at the layout (RootLayout.js) and page (children) levels.
// Navbar and Footer cannot set metadata.



// 🎯 Final Rule: Who Wins?
// Method	Priority (Higher Wins)
// Latest <Head> in Client Components	🏆 Highest Priority
// metadata in Page (app/contact/page.js)	Medium Priority
// metadata in Layout (app/layout.js)	Lowest Priority
// ✅ Best Practice
// If you want the page title to always be correct, set it inside the page component instead of Navbar or Footer.
