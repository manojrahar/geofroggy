"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { User, Mail, Lock, Eye, EyeOff } from "lucide-react";

export default function SignUpPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    setLoading(true);
    setError(null);

    try {
      // Simulate registration
      await new Promise((r) => setTimeout(r, 800));
      setSuccess(true);
    } catch {
      setError("Failed to create account. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center green-patch-bg py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full grid grid-cols-1 lg:grid-cols-2 rounded-3xl overflow-hidden card-hover-effect bg-white">
        {/* Left: Illustration / Photo */}
        <div className="relative hidden lg:block bg-brand-blue min-h-[560px]">
          <Image
            src="/website-images/girl_by_window_signup.png"
            alt="Welcome to Geofroggy"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Right: Registration Form */}
        <div className="p-8 sm:p-12 flex flex-col justify-center">
          {success ? (
            <div className="text-center py-8">
              <h2 className="font-display font-semibold text-[32px] text-brand-blue mb-3">
                Check Your Email
              </h2>
              <p className="font-prose text-[16px] text-gray-600 mb-8">
                We've sent a confirmation link to <span className="font-semibold text-gray-900">{email}</span>. Please verify your email to begin your storytelling journey.
              </p>
              <div className="flex flex-col gap-3">
                <Link
                  href="/login"
                  className="w-full h-[50px] flex items-center justify-center rounded-[5px] bg-brand-blue text-white font-prose font-medium text-[18px] hover:opacity-90 transition"
                >
                  Back to Login
                </Link>
                <Link
                  href="/"
                  className="inline-flex items-center justify-center bg-gray-100 text-gray-700 font-display font-medium text-[13px] px-6 py-2 rounded-full hover:bg-gray-200 transition"
                >
                  Go Back To Home
                </Link>
              </div>
            </div>
          ) : (
            <>
              <h1 className="font-display font-semibold uppercase text-[36px] lg:text-[44px] text-brand-text text-center leading-none">
                Welcome
              </h1>
              <p className="font-prose text-[16px] text-gray-500 text-center mt-2">
                Register Your data
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                {error && (
                  <div className="bg-red-50 text-red-600 font-prose text-sm p-3 rounded-lg border border-red-200">
                    {error}
                  </div>
                )}

                {/* Name */}
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Full Name"
                    required
                    autoComplete="name"
                    className="w-full h-[52px] pl-12 pr-4 rounded-[8px] border border-gray-300 font-prose text-[15px] text-brand-text placeholder:text-gray-400 focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 transition"
                  />
                </div>

                {/* Email */}
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email Address"
                    required
                    autoComplete="email"
                    className="w-full h-[52px] pl-12 pr-4 rounded-[8px] border border-gray-300 font-prose text-[15px] text-brand-text placeholder:text-gray-400 focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 transition"
                  />
                </div>

                {/* Password */}
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                    autoComplete="new-password"
                    className="w-full h-[52px] pl-12 pr-12 rounded-[8px] border border-gray-300 font-prose text-[15px] text-brand-text placeholder:text-gray-400 focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 transition"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>

                {/* Confirm Password */}
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                  <input
                    type={showPassword ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm Password"
                    required
                    autoComplete="new-password"
                    className="w-full h-[52px] pl-12 pr-4 rounded-[8px] border border-gray-300 font-prose text-[15px] text-brand-text placeholder:text-gray-400 focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 transition"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-theme animate-btn-shake w-full h-[50px] mt-2 disabled:opacity-60 disabled:cursor-not-allowed active:scale-95"
                >
                  {loading ? "Creating account…" : "Register"}
                </button>
              </form>

              <p className="font-prose text-[14px] text-center mt-6 text-gray-600">
                Already Have an Account ?{" "}
                <Link
                  href="/login"
                  className="font-semibold text-secondary hover:underline"
                >
                  Login Now
                </Link>
              </p>

              <div className="flex justify-center mt-5">
                <Link
                  href="/"
                  className="inline-flex items-center bg-brand-blue text-white font-display font-medium text-[12px] px-6 py-2 rounded-full hover:opacity-90 transition"
                >
                  Go Back To Home
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
