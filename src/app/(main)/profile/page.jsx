import { headers } from "next/headers";
import { redirect } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Avatar, Button } from "@heroui/react";

import { auth } from "@/lib/auth";

const ProfilePage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;
  console.log(user);
  if (!user) {
    redirect("/signIn");
  }

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-black flex items-center justify-center px-4">
      <div className="absolute top-20 left-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl animate-pulse" />

      <div className="absolute bottom-20 right-20 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl animate-pulse" />

      <div className="relative w-full max-w-md rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-10 shadow-[0_20px_60px_rgba(0,0,0,0.5)] transition-all duration-500 hover:-translate-y-2 hover:shadow-cyan-500/10">
        <div className="flex justify-center">
          <div className="rounded-full p-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500">
            <img
              src={user.image || "/default-avatar.png"}
              alt={`${user?.name || "User"}'s profile picture`}
              className="w-[150px] h-[150px] rounded-full object-cover"
            />
          </div>
        </div>

        <div className="mt-6 text-center space-y-2">
          <h2 className="text-3xl font-bold text-white">{user.name}</h2>

          <p className="text-slate-300 break-all">{user.email}</p>
        </div>

        <div className="my-8 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        <Link href="/profile/update" className="block">
          <Button
            className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold transition duration-300 hover:scale-[1.03] hover:shadow-lg hover:shadow-cyan-500/30"
            size="lg"
          >
            Update Information
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default ProfilePage;
