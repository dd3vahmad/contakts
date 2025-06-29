"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CircleCheck } from "lucide-react";
import Link from "next/link";
import { FormEvent } from "react";

const VerifyEmail = () => {
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
      <div className="space-y-4 w-full px-6 max-w-md py-8 rounded-lg border flex flex-col justify-center items-center">
        <h2 className="text-2xl font-semibold w-full text-center">Yaaaayy!</h2>
        <CircleCheck size={64} />
        <p className="text-sm mt-2 text-gray-500 px-4 text-center">
          A confirmation link has been sent to your email to confirm your
          registration.
        </p>

        <h3 className="text-sm font-semibold">
          Click the link to verify your email
        </h3>
      </div>
    </main>
  );
};

export default VerifyEmail;
