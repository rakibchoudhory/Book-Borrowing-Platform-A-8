"use client";

import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";



const BorrowButton = () => {
     const { data: session } = authClient.useSession();
      const user = session?.user;
  const handleBorrow = () => {
   {
    user ? alert('Book Borrowed Successfully') : 
    redirect("/signIn")
   }

  };

  return (
    <button className="btn" onClick={handleBorrow}>
      Borrow This Book
    </button>
  );
};

export default BorrowButton;
