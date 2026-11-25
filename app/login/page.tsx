"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await new Promise((r) => setTimeout(r, 800));
      // Demo authentication feedback
      setError("Please verify your email address to log in.");
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Failed to log in.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-surface min-h-screen lg:h-screen lg:overflow-hidden lg:grid lg:grid-cols-[51.2%_48.8%]">
      {/* Left Column: Illustration & Tagline */}
      <section className="relative lg:h-full flex flex-col overflow-hidden bg-[#FBFBFA]">
        <Image
          src="/website-images/girl_by_window_login.png"
          alt="Geofroggy — our window, your world"
          width={1106}
          height={1131}
          priority
          className="block w-full h-auto lg:w-auto lg:max-h-[72vh] lg:mx-0 select-none shrink-0 object-contain"
        />
        <div className="relative flex-1 px-6 lg:px-8 pt-5 lg:pt-6 pb-6 flex flex-col items-center justify-start text-center">
          <h2 className="font-display font-semibold text-[28px] lg:text-[40px] text-brand-blue leading-tight">
            Our Window, Your World
          </h2>
          <p className="font-prose text-[14px] lg:text-[16px] leading-[26px] text-fg-muted mt-2 max-w-[497px]">
            Join a global community that celebrates culture, connection, and the stories that bring us closer together.
          </p>
        </div>
        <Image
          src="/website-images/abstractart2.png"
          alt=""
          width={170}
          height={170}
          aria-hidden={true}
          className="hidden lg:block absolute left-2 bottom-4 rotate-[-12.47deg] pointer-events-none opacity-80 select-none z-0"
        />
      </section>

      {/* Right Column: Login Card & Social Auth */}
      <section className="relative lg:h-full flex items-center justify-center px-6 py-10 lg:px-10 lg:py-12 overflow-y-auto bg-[#F4F9EC]">
        <Image
          src="/website-images/green-splotch.png"
          alt=""
          fill
          aria-hidden={true}
          sizes="(min-width: 1024px) 49vw, 100vw"
          className="object-cover pointer-events-none select-none opacity-90"
          priority
        />
        <Image
          src="/website-images/frog_on_globe.png"
          alt=""
          width={83}
          height={97}
          aria-hidden={true}
          className="hidden lg:block absolute top-8 right-10 w-[65px] h-auto -rotate-[13deg] pointer-events-none select-none z-10"
        />

        <div className="relative z-10 w-full max-w-[475px]">
          <h1 className="font-display font-semibold uppercase text-[36px] lg:text-[54px] text-fg text-center leading-none">
            Welcome
          </h1>
          <p className="font-prose text-[16px] lg:text-[18px] text-fg-muted text-center mt-2">
            Login with Gmail
          </p>

          <form onSubmit={handleSubmit} className="mt-6 lg:mt-8 space-y-4">
            {error && (
              <div className="bg-red-50 text-red-600 font-prose text-sm p-3 rounded-lg border border-red-200">
                {error}
              </div>
            )}

            <div className="relative">
              <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 lg:w-6 lg:h-6 text-fg-subtle pointer-events-none" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="iberways@gmail.com"
                required
                className="w-full h-[58px] lg:h-[64px] pl-14 pr-5 rounded-[10px] border border-divider-strong bg-surface font-prose text-[16px] lg:text-[18px] text-fg placeholder:text-fg-subtle focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 transition"
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 lg:w-6 lg:h-6 text-fg-subtle pointer-events-none" />
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••"
                required
                className="w-full h-[58px] lg:h-[64px] pl-14 pr-12 rounded-[10px] border border-divider-strong bg-surface font-prose text-[16px] lg:text-[18px] text-fg placeholder:text-fg-subtle focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 transition"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Hide password" : "Show password"}
                className="absolute right-5 top-1/2 -translate-y-1/2 text-fg-subtle hover:text-fg"
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full h-[48px] lg:h-[52px] rounded-[5px] bg-brand-blue text-white font-prose font-medium text-[18px] lg:text-[20px] hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed transition shadow-sm"
            >
              {loading ? "Signing in…" : "Login"}
            </button>
          </form>

          <div className="flex items-center gap-4 my-5 lg:my-6">
            <span className="h-px flex-1 bg-[#cfcfcf]" />
            <span className="font-prose font-semibold text-[18px] lg:text-[20px] text-fg">
              OR
            </span>
            <span className="h-px flex-1 bg-[#cfcfcf]" />
          </div>

          <div className="flex items-center justify-center gap-5">
            <button
              type="button"
              aria-label="Continue with Google"
              onClick={() => {}}
              className="w-[100px] h-[48px] lg:h-[52px] rounded-[5px] border border-[#282828] bg-surface flex items-center justify-center hover:bg-hover transition shadow-2xs"
            >
              <svg className="w-7 h-7" viewBox="0 0 24 24" aria-hidden={true}>
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
            </button>

            <button
              type="button"
              aria-label="Continue with Apple"
              onClick={() => {}}
              className="w-[100px] h-[48px] lg:h-[52px] rounded-[5px] border border-divider-strong bg-surface text-fg flex items-center justify-center hover:bg-hover transition shadow-2xs"
            >
              <svg
                className="w-7 h-7"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden={true}
              >
                <path d="M17.05 20.28c-.98.95-2.05.86-3.08.41-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.41C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01M12 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
              </svg>
            </button>
          </div>

          <p className="font-prose text-[14px] lg:text-[16px] text-center mt-5 lg:mt-6">
            <span className="text-fg-muted">Don&apos;t Have an Account ? </span>
            <Link
              href="/signup"
              className="font-semibold text-brand-green underline hover:opacity-80"
            >
              Register Now
            </Link>
          </p>

          <div className="flex justify-center mt-4 lg:mt-5">
            <Link
              href="/"
              className="inline-flex items-center bg-brand-blue text-white font-display font-medium text-[12px] px-[26px] py-[6px] rounded-full hover:opacity-90 transition shadow-sm"
            >
              Go Back To Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
