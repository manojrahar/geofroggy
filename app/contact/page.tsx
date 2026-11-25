"use client";

import React, { useState } from "react";
import Image from "next/image";

interface InputFieldProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (val: string) => void;
  required?: boolean;
}

function FormInput({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  required,
}: InputFieldProps) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block font-display text-[14px] font-semibold text-gray-800"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        required={required}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1.5 w-full rounded-xl border border-gray-200 px-4 py-3 font-prose text-[15px] text-gray-900 bg-gray-50/50 outline-none transition-all placeholder:text-gray-400 focus:bg-white focus:border-secondary focus:ring-4 focus:ring-secondary/15 shadow-2xs"
      />
    </div>
  );
}

const initialForm = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

export default function ContactPage() {
  const [formData, setFormData] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const updateField = (field: string, val: string) => {
    setFormData((prev) => ({ ...prev, [field]: val }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Simulate submission or Supabase call
      await new Promise((r) => setTimeout(r, 600));
      setSuccess(true);
      setFormData(initialForm);
      setTimeout(() => setSuccess(false), 6000);
    } catch (err: unknown) {
      console.error("Contact form error:", err);
      const msg = err instanceof Error ? err.message : "Please try again.";
      setError(`Couldn't send your message: ${msg}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="relative overflow-hidden bg-white py-16 lg:py-24">
        {/* Background art */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/website-images/Rectangle-19.png"
            alt=""
            fill
            className="object-cover"
          />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-[1140px] grid-cols-1 overflow-hidden rounded-3xl bg-white lg:grid-cols-2 card-hover-effect border border-gray-100 shadow-2xl">
            {/* Form Column */}
            <div className="px-6 py-10 sm:px-10 lg:px-12 lg:py-12">
              <h2 className="text-center font-display text-[28px] font-semibold leading-tight text-gray-900">
                Send Us a Message
              </h2>

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <FormInput
                  label="Name"
                  name="name"
                  placeholder="Kane Williamson"
                  value={formData.name}
                  onChange={(val) => updateField("name", val)}
                  required
                />

                <FormInput
                  label="Enter Email"
                  name="email"
                  type="email"
                  placeholder="kane789@gmail.com"
                  value={formData.email}
                  onChange={(val) => updateField("email", val)}
                  required
                />

                <FormInput
                  label="Phone Number"
                  name="phone"
                  type="tel"
                  placeholder="+896543- 67897"
                  value={formData.phone}
                  onChange={(val) => updateField("phone", val)}
                />

                <div>
                  <label
                    htmlFor="message"
                    className="block font-display text-[14px] font-semibold text-gray-800"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => updateField("message", e.target.value)}
                    required
                    placeholder="Tell us what's on your mind..."
                    className="mt-1.5 w-full rounded-xl border border-gray-200 px-4 py-3 font-prose text-[15px] text-gray-900 bg-gray-50/50 outline-none transition-all placeholder:text-gray-400 focus:bg-white focus:border-secondary focus:ring-4 focus:ring-secondary/15 shadow-2xs"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="animate-btn-shake w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-secondary hover:bg-secondary-dark px-10 py-3.5 font-display text-[15px] font-semibold text-white shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-60 transform hover:scale-102 active:scale-95"
                >
                  {loading ? "Sending…" : "Submit Message"}
                </button>

                {success && (
                  <p className="font-prose text-[14px] text-secondary font-medium">
                    Thanks! We’ll be in touch shortly.
                  </p>
                )}

                {error && (
                  <p className="font-prose text-[14px] text-red-700 bg-red-50 border border-red-200 rounded px-3 py-2">
                    {error}
                  </p>
                )}
              </form>
            </div>

            {/* Image Column */}
            <div className="relative min-h-[320px] lg:min-h-full">
              <Image
                src="/website-images/contact_image.png"
                alt="Contact Geofroggy"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
