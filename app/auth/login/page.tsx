"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { FormEvent } from "react";

const Login = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget;
    const formData = new FormData(form);

    // const credentials = {
    //   email: formData.get("email"),
    //   password: formData.get("password"),
    // };
  };

  return (
    <main className="min-h-screen flex flex-col justify-center items-center w-full">
      <form
        onSubmit={handleSubmit}
        className="space-y-4 w-full px-6 max-w-md min-h-[400px] rounded-lg border flex flex-col justify-center"
      >
        <h2 className="text-2xl font-semibold mb-6">Login to your account</h2>

        <div className="flex flex-col gap-y-3">
          <Label className="text-sm">Email</Label>
          <Input type="email" placeholder="Enter your email" />
        </div>

        <div className="flex flex-col gap-y-4">
          <Label className="text-sm">Password</Label>
          <Input type="password" placeholder="Enter your password" />
        </div>

        <div className="flex flex-col items-center justify-center mt-4 gap-y-4">
          <Button className="text-center w-full text-white cursor-pointer">
            Login
          </Button>

          <p className="w-full text-center text-sm text-gray-500">
            Don&apos;t have an account?{" "}
            <Link
              href={"/auth/signup"}
              className="text-primary font-semibold cursor-pointer hover:underline"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </form>
    </main>
  );
};

export default Login;
