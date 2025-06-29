"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { FormEvent } from "react";

const NotAuthenticated = () => {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center w-full">
      <div className="space-y-4 w-full px-6 max-w-md py-8 rounded-lg border flex flex-col justify-center">
        <h2 className="text-2xl font-semibold mb-6">Login to your account</h2>

        <div className="flex flex-col gap-y-4">
          <Label className="text-sm">Already have an account?</Label>

          <Link href={"/auth/login"} className="w-full">
            <Button className="text-center w-full text-white cursor-pointer">
              Login
            </Button>
          </Link>
        </div>

        <div className="flex flex-col gap-y-4">
          <Label className="text-sm">Don&apos;t have an account?</Label>

          <Link href={"/auth/signup"} className="w-full">
            <Button className="text-center w-full text-white cursor-pointer">
              Sign up
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default NotAuthenticated;
