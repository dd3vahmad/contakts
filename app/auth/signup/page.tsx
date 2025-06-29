"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/providers/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { toast } from "sonner";

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const auth = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const password = formData.get("password")?.toString().trim() as string;
    const confirmPassword = formData
      .get("confirmPassword")
      ?.toString()
      .trim() as string;

    if (password.length < 8) {
      setPasswordError("Password must be of atleast 8 characters");
      return;
    }
    setPasswordError("");

    if (password.length !== confirmPassword.length) {
      setConfirmPasswordError("Confirm password must be of the same length");
      return;
    }
    setConfirmPasswordError("");

    if (password !== confirmPassword) {
      setConfirmPasswordError("Password is invalid");
      return;
    }
    setConfirmPasswordError("");

    const credentials = {
      data: { full_name: formData.get("name")?.toString().trim() as string },
      email: formData.get("email")?.toString().trim() as string,
      password,
    };

    setLoading(true);
    const error = await auth?.signup(credentials);
    if (error) {
      toast.error(error.message || "Error ceate your account");
      setLoading(false);
      return;
    }

    setLoading(false);
    router.refresh();
  };

  return (
    <main className="min-h-screen flex flex-col justify-center items-center w-full">
      <form
        onSubmit={handleSubmit}
        className="space-y-4 w-full px-6 max-w-md py-8 rounded-lg border flex flex-col justify-center"
      >
        <h2 className="text-2xl font-semibold mb-6">Create an account</h2>

        <div className="flex flex-col gap-y-3">
          <Label className="text-sm">Your Name</Label>
          <Input name="name" placeholder="Enter your name" />
        </div>

        <div className="flex flex-col gap-y-3">
          <Label className="text-sm">Email</Label>
          <Input type="email" name="email" placeholder="Enter your email" />
        </div>

        <div className="flex flex-col gap-y-4">
          <Label className="text-sm">Password</Label>
          <Input
            type="password"
            name="password"
            placeholder="Enter your password"
          />
          {passwordError && (
            <p className="text-sm text-destructive">{passwordError}</p>
          )}
        </div>

        <div className="flex flex-col gap-y-4">
          <Label className="text-sm">Confirm Password</Label>
          <Input
            type="password"
            name="confirmPassword"
            placeholder="Re-enter your password"
          />
          {confirmPasswordError && (
            <p className="text-sm text-destructive">{confirmPasswordError}</p>
          )}
        </div>

        <div className="flex flex-col items-center justify-center mt-4 gap-y-4">
          <Button className="text-center w-full text-white cursor-pointer">
            {loading ? "..." : "Sign Up"}
          </Button>

          <p className="w-full text-center text-sm text-gray-500">
            Already have an account?{" "}
            <Link
              href={"/auth/login"}
              className="text-primary font-semibold cursor-pointer hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </form>
    </main>
  );
};

export default Signup;
