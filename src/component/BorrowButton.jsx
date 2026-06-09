"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";




const BorrowButton = () => {
   const router = useRouter();

     const { data: session } = authClient.useSession();
      const user = session?.user;

  const handleBorrow = () => {
     if (user) {
      alert("Book Borrowed Successfully");
    } else {
      router.push("/signIn");
    }
  };

  

  return (
    <button className="btn" onClick={handleBorrow}>
      Borrow This Book
    </button>
  );
};

export default BorrowButton;
