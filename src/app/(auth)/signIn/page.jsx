"use client";

import React, { useState } from "react";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { Check } from "@gravity-ui/icons";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";

const LogInPage = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  const handleLogIN = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const { data, error } = await authClient.signIn.email({
      email,
      password,
      rememberMe: true,
      callbackURL: "/",
    });

    console.log(data, error);
  };

  const handleGoogleSignIn = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });

    console.log(data);
  };

  return (
    <div className="animate-float backdrop-blur-xl min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-slate-900 to-black px-4 py-10">
      <div className="w-full max-w-md">
        {/* Glass Card */}
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl rounded-3xl p-8 transition-all duration-500 hover:shadow-indigo-500/20">
          <Form className="flex flex-col gap-5" onSubmit={handleLogIN}>
            {/* Header */}
            <div className="text-center mb-2">
              <h2 className="text-4xl font-bold text-white">Welcome Back 👋</h2>
              <p className="text-gray-300 mt-2">
                Login to continue your journey
              </p>
            </div>

            {/* Email */}
            <TextField
              isRequired
              name="email"
              type="email"
              validate={(value) => {
                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                  return "Please enter a valid email address";
                }
                return null;
              }}
            >
              <Label className="text-gray-200">Email</Label>

              <Input
                name="email"
                placeholder="john@example.com"
                className="rounded-xl  w-full"
              />

              <FieldError />
            </TextField>

            {/* Password */}
            <TextField
              isRequired
              name="password"
              type={isShowPassword ? "text" : "password"}
              className="relative"
              validate={(value) => {
                if (value.length < 8) {
                  return "Password must be at least 8 characters";
                }

                if (!/[A-Z]/.test(value)) {
                  return "Password must contain at least one uppercase letter";
                }

                if (!/[0-9]/.test(value)) {
                  return "Password must contain at least one number";
                }

                return null;
              }}
            >
              <Label className="text-gray-200">Password</Label>

              <div className="relative">
                <Input
                  name="password"
                  placeholder="Enter your password"
                  className="rounded-xl w-full"
                />

                <button
                  type="button"
                  onClick={() => setIsShowPassword(!isShowPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-indigo-500 transition"
                >
                  {isShowPassword ? (
                    <FaEye className="cursor-pointer" size={18} />
                  ) : (
                    <FaEyeSlash className="cursor-pointer"  size={18} />
                  )}
                </button>
              </div>

              <Description className="text-gray-400">
                Must be at least 8 characters with 1 uppercase and 1 number
              </Description>

              <FieldError />
            </TextField>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold py-3 rounded-xl hover:scale-[1.02] transition-all duration-300 shadow-lg"
            >
              <Check />
              Login
            </Button>

            <div className="relative">
              <div className="border-t border-white/20"></div>

              <span className="absolute left-1/2 -translate-x-1/2 -top-3 bg-slate-900 px-3 text-sm text-gray-400">
                OR
              </span>
            </div>

            <Button
              onClick={handleGoogleSignIn}
              className="w-full bg-white text-black font-medium rounded-xl hover:scale-[1.02] transition-all duration-300 shadow-lg"
            >
              <FaGoogle />
              continue with Google
            </Button>

            <p className="text-center text-gray-300 mt-2">
              Don't have an account?{" "}
              <Link
                href="/signUp"
                className="text-indigo-400 hover:text-indigo-300 font-semibold transition"
              >
                Create one
              </Link>
            </p>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default LogInPage;
