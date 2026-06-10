"use client";

import React from "react";
import { authClient } from "@/lib/auth-client";
import { Button, Input } from "@heroui/react";
import { useRouter } from "next/navigation";

const UpdateProfileForm = ({ user }) => {
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const image = e.target.photoURL.value;

    console.log(name, image, "name, image");

    const { error } = await authClient.updateUser({
      name,
      image,
    });

    if (error) {
      console.log(error);
      return;
    }

    router.refresh();
    router.push("/profile");
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-10 animate-in fade-in duration-700">
      <div className="w-full max-w-md rounded-3xl border border-default-200 bg-white/70 backdrop-blur-xl shadow-2xl p-8 transition-all duration-500 hover:shadow-3xl hover:-translate-y-2">
        <div className="text-center mb-8 animate-in slide-in-from-top-4 duration-700">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
            Update Profile
          </h1>

          <p className="text-default-500 mt-2">
            Update your personal information
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="transition-all duration-300 hover:scale-[1.02] focus-within:scale-[1.02]">
            <level className={'font-bold '}>Name</level>
            <Input
              name="name"
              label="Name"
              placeholder="Enter your name"
              defaultValue={user?.name || ""}
              variant="bordered"
              radius="lg"
              className={'mt-1'}
            />
          </div>

          <div className="transition-all duration-300 hover:scale-[1.02] focus-within:scale-[1.02]">
             <level className={'font-bold '}>Photo URL</level>
            <Input
              name="photoURL"
              label="Photo URL"
              placeholder="Enter photo URL"
              defaultValue={user?.image || ""}
              variant="bordered"
              radius="lg"
              className={'mt-1'}
            />
          </div>

          <div className="animate-in zoom-in-95 duration-700 delay-200">
            <Button
              type="submit"
              color="primary"
              radius="lg"
              size="lg"
              className="w-full font-semibold transition-all duration-300 hover:scale-[1.03] active:scale-95 hover:shadow-xl"
            >
              Update Profile
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfileForm;
