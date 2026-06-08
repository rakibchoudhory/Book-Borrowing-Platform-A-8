"use client";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "@/assets/logo.png";
import NavLink from "./NavLink";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { data: session } = authClient.useSession();
  const user = session?.user;
  // console.log(user, "user");

  return (
    <nav className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-xl border-b border-white/10 shadow-lg">
      <div className="w-11/12 mx-auto">

        <div className="flex items-center justify-between py-3">
          <Link
            href="/"
            className="flex items-center gap-2 transition-transform duration-300 hover:scale-105"
          >
            <Image
              src={logo}
              alt="Book Logo"
              width={55}
              height={55}
              className="object-contain"
            />

            <div>
              <h2 className="font-bold text-white text-lg">
                Book <span className="text-purple-400">Borrowing</span>
              </h2>

              <p className="text-xs text-gray-400">Digital Library</p>
            </div>
          </Link>

          <ul className="hidden md:flex items-center gap-8 text-white font-medium">
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

          <div className=" hidden md:block ">
           {user ? (
                 
                    
                    <button onClick={async()=>await authClient.signOut()} className="  px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium shadow-lg  cursor-pointer">
                      logout
                    </button>
               
                ) : (
                  
                    <Link className=" py-3 px-6 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium shadow-lg  cursor-pointer"  href={"/signIn"}>
                      
                        Login
                      
                    </Link>
                 
                )}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white text-3xl transition-transform duration-300"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>

                {/* Mobile device*/}
        {isOpen && (
          <div className="md:hidden mb-4 bg-slate-800/90 backdrop-blur-xl rounded-2xl border border-white/10 shadow-xl p-5">
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

              <li className="flex mr-2 w-full">
                {user ? (
                 
                   
                    <button onClick={async()=>await authClient.signOut()} className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium shadow-lg  cursor-pointer">
                      logout
                    </button>
                
                ) : (
              
                    <Link className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium shadow-lg  cursor-pointer text-center" href={"/signIn"}>
                     
                        Login
                      
                    </Link>
               
                )}
              </li>
            </ul>
          </div>
        )}

      </div>
    </nav>
  );
};

export default Navbar;
