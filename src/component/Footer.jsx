import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-300 border-t border-slate-800">
      <div className="w-11/12 mx-auto py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-yellow-400">
               Book Borrowing Platform
            </h2>

            <p className="mt-4 text-gray-400 leading-relaxed">
              Discover, borrow, and enjoy thousands of books from Story,
              Tech, and Science categories. Your digital library companion.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3">
              <Link
                href="/"
                className="hover:text-yellow-400 transition"
              >
                Home
              </Link>

              <Link
                href="/all-books"
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
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Contact Us
            </h3>

            <div className="space-y-3 text-gray-400">
              <p>📧 support@bookborrow.com</p>
              <p>📞 +880 1234-567890</p>
              <p>📍 Dhaka, Bangladesh</p>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Follow Us
            </h3>

            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 hover:bg-yellow-400 hover:text-black transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 hover:bg-yellow-400 hover:text-black transition"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 hover:bg-yellow-400 hover:text-black transition"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 hover:bg-yellow-400 hover:text-black transition"
              >
                <FaTwitter />
              </a>
            </div>

            <p className="mt-5 text-sm text-gray-500">
              Stay connected for new arrivals and library updates.
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-800 mt-12 pt-6 flex flex-col md:flex-row justify-center items-center gap-4 text-sm text-gray-500">
          <p >
            © {new Date().getFullYear()} Book Borrowing Platform.
            All rights reserved.
          </p>

        
        </div>
      </div>
    </footer>
  );
};

export default Footer;