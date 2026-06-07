"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "@/assets/logo.png";
import NavLink from "./NavLink";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-slate-900 border-b border-slate-800 ">
      <div className="w-11/12 mx-auto">
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src={logo}
              alt="Book Logo"
              width={55}
              height={55}
              className="object-contain"
            />

            <div>
              <h2 className="font-bold text-white">
                Book <span className="text-purple-500">Borrowing</span>
              </h2>
              <p className="text-xs text-gray-400">Digital Library</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 text-white font-medium">
            <li>
              <NavLink href="/">Home</NavLink>
            </li>
            <li>
              <NavLink href="/allBooks">All Books</NavLink>
            </li>
            <li>
              <NavLink href="/profile">My Profile</NavLink>
            </li>
          </ul>

          {/* Desktop Login */}
          <div className="hidden md:block">
            <button className="px-5 py-2 bg-purple-600 rounded-lg text-white hover:bg-purple-700">
              Login
            </button>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white text-3xl"
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <ul className="flex flex-col gap-4 text-white font-medium">
              <li>
                <NavLink href="/" onClick={() => setIsOpen(false)}>
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink href="/allBooks" onClick={() => setIsOpen(false)}>
                  All Books
                </NavLink>
              </li>

              <li>
                <NavLink href="/profile" onClick={() => setIsOpen(false)}>
                  My Profile
                </NavLink>
              </li>

              <li>
                <button className="w-full bg-purple-600 py-2 rounded-lg">
                  Login
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
