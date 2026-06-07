"use client";
import "animate.css";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-gray-300 border-t border-white/10 overflow-hidden">
      <div className="w-11/12 mx-auto py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="animate__animated animate__fadeInUp">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Book <span className="text-purple-500">Borrowing</span>
            </h2>

            <p className="mt-4 text-gray-400 leading-relaxed">
              Discover, borrow, and enjoy thousands of books from Story,
              Tech and Science categories.
            </p>

            <div className="mt-5">
              <span className="badge badge-warning badge-outline">
                Digital Library
              </span>
            </div>
          </div>

          {/* Links */}
          <div className="animate__animated animate__fadeInUp animate__delay-1s">
            <h3 className="text-xl font-semibold text-white mb-5">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3">
              <Link href="/" className="hover:text-yellow-400 transition">
                Home
              </Link>

              <Link
                href="/allBooks"
                className="hover:text-yellow-400 transition"
              >
                All Books
              </Link>

              <Link
                href="/profile"
                className="hover:text-yellow-400 transition"
              >
                My Profile
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="animate__animated animate__fadeInUp animate__delay-2s">
            <h3 className="text-xl font-semibold text-white mb-5">
              Contact Us
            </h3>

            <div className="space-y-3">
              <p>📧 support@bookborrow.com</p>
              <p>📞 +880 1234-567890</p>
              <p>📍 Dhaka, Bangladesh</p>
            </div>
          </div>

          {/* Social */}
          <div className="animate__animated animate__fadeInUp animate__delay-3s">
            <h3 className="text-xl font-semibold text-white mb-5">
              Follow Us
            </h3>

            <div className="flex gap-4">

              <a
                href="#"
                className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-500 hover:scale-110 transition-all duration-300"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center hover:bg-pink-500 hover:scale-110 transition-all duration-300"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center hover:bg-sky-500 hover:scale-110 transition-all duration-300"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center hover:bg-cyan-500 hover:scale-110 transition-all duration-300"
              >
                <FaTwitter />
              </a>

            </div>

            <p className="mt-5 text-sm text-gray-500">
              Stay connected for new arrivals &
              library updates.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 border-t border-white/10"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-sm text-gray-500">

          <p>
            © {new Date().getFullYear()} Book Borrowing Platform.
            All rights reserved.
          </p>

          

        </div>
      </div>
    </footer>
  );
};

export default Footer;