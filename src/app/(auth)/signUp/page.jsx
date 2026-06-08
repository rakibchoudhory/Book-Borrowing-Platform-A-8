"use client";
import React, { useState } from "react";
import Link from "next/link";
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
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { useRouter } from "next/navigation";

const SignUpPage = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const router = useRouter();
  const handleRegister = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const photourl = e.target.photourl.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    //   console.log(email,password , "from");

    const { data, error } = await authClient.signUp.email({
      name: name, // required
      email: email, // required
      password: password, // required
      image: photourl,
      callbackURL: "/signIn",
    });
    console.log(data, error);
    if (error) {
      alert(error.message);
    }
    if (data) {
      alert("Signup successful");
      router.push("/signIn");
    }
  };

  const handleGoogleSignIn = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
    //   console.log(data,"data");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-slate-900 to-black px-4 py-10">
      <div className="w-full max-w-md">
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl rounded-3xl p-8 transition-all duration-500 hover:shadow-indigo-500/20">
          <div className="text-center mb-6">
            <h2 className="text-4xl font-bold text-white">
              Create Your Account 🚀
            </h2>
            <p className="text-gray-300 mt-2">Join us and start your journey</p>
          </div>

          <Form className="flex flex-col gap-5" onSubmit={handleRegister}>
            <TextField
              isRequired
              name="name"
              validate={(value) => {
                if (value.length < 3) {
                  return "Name must be at least 3 characters";
                }
                return null;
              }}
            >
              <Label className="text-gray-200">Name</Label>
              <Input
                name="name"
                placeholder="John Doe"
                className="rounded-xl w-full"
              />
              <FieldError />
            </TextField>
            \
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
                className="rounded-xl w-full"
              />

              <FieldError />
            </TextField>
            \
            <TextField
              isRequired
              name="photourl"
              validate={(value) => {
                if (value.length < 3) {
                  return "Photo URL is required";
                }
                return null;
              }}
            >
              <Label className="text-gray-200">Photo URL</Label>

              <Input
                name="photourl"
                placeholder="https://example.com/photo.jpg"
                className="rounded-xl w-full"
              />

              <FieldError />
            </TextField>
            <TextField
              className="relative"
              isRequired
              minLength={8}
              name="password"
              type={isShowPassword ? "text" : "password"}
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
                  className="rounded-xl pr-10 w-full"
                />

                <button
                  type="button"
                  onClick={() => setIsShowPassword(!isShowPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-indigo-500 transition"
                >
                  {isShowPassword ? (
                    <FaEye size={18} />
                  ) : (
                    <FaEyeSlash size={18} />
                  )}
                </button>
              </div>

              <Description className="text-gray-400">
                Must be at least 8 characters with 1 uppercase and 1 number
              </Description>

              <FieldError />
            </TextField>
            <Button
              className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold py-3 rounded-xl hover:scale-[1.02] transition-all duration-300 shadow-lg"
              type="submit"
            >
              <Check />
              Register
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
              Continue with Google
            </Button>
            <p className="text-center text-gray-300 mt-2">
              Already have an account?{" "}
              <Link
                className="text-indigo-400 hover:text-indigo-300 font-semibold transition"
                href={"/signIn"}
              >
                Login
              </Link>
            </p>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
