"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, Image as ImageIcon, Video, Music, Loader2 } from "lucide-react";

export default function SubmitStoryPage() {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    country: "",
    content: "",
    tags: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          title: "",
          category: "",
          country: "",
          content: "",
          tags: "",
        });
      }, 4000);
    } catch (err) {
      console.error("Story form error:", err);
      alert("Failed to submit story. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[300px] sm:h-[350px] overflow-hidden">
        <Image
          src="/website-images/slide1.jpg"
          alt="Submit Your Story"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4 font-display">
              Submit Your Story
            </h1>
            <p className="text-white/90 font-prose text-base sm:text-lg">
              Share your unique perspective with our global community. Every story helps build bridges across cultures.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {submitted ? (
            <div className="bg-green-50 rounded-xl p-8 text-center max-w-2xl mx-auto border border-green-200">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-green-800 mb-2 font-display">
                Story Submitted!
              </h3>
              <p className="text-green-600 font-prose">
                Thank you for sharing your experience. Our team will review your story before publishing it.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 font-display">
                  Story Title
                </label>
                <input
                  type="text"
                  placeholder="Give your story a compelling title"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                  required
                  className="w-full h-11 px-4 rounded-md border border-gray-200 bg-white font-prose text-sm text-[#383838] focus:outline-none focus:ring-2 focus:ring-[#195883]/20 focus:border-[#195883]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 font-display">
                  Category
                </label>
                <select
                  value={formData.category}
                  onChange={(e) =>
                    setFormData({ ...formData, category: e.target.value })
                  }
                  required
                  className="w-full h-11 px-4 rounded-md border border-gray-200 bg-white font-prose text-sm text-[#383838] focus:outline-none focus:ring-2 focus:ring-[#195883]/20 focus:border-[#195883]"
                >
                  <option value="">Select a category</option>
                  <option value="culture">Culture &amp; Traditions</option>
                  <option value="food">Food &amp; Cuisine</option>
                  <option value="travel">Travel &amp; Places</option>
                  <option value="history">History &amp; Heritage</option>
                  <option value="personal">Personal Stories</option>
                  <option value="festivals">Festivals &amp; Celebrations</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 font-display">
                  Country/Region
                </label>
                <input
                  type="text"
                  placeholder="Which country or region is this story about?"
                  value={formData.country}
                  onChange={(e) =>
                    setFormData({ ...formData, country: e.target.value })
                  }
                  required
                  className="w-full h-11 px-4 rounded-md border border-gray-200 bg-white font-prose text-sm text-[#383838] focus:outline-none focus:ring-2 focus:ring-[#195883]/20 focus:border-[#195883]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 font-display">
                  Your Story
                </label>
                <textarea
                  placeholder="Share your story here..."
                  rows={8}
                  value={formData.content}
                  onChange={(e) =>
                    setFormData({ ...formData, content: e.target.value })
                  }
                  required
                  className="w-full p-4 rounded-md border border-gray-200 bg-white font-prose text-sm text-[#383838] focus:outline-none focus:ring-2 focus:ring-[#195883]/20 focus:border-[#195883]"
                />
                <p className="text-xs text-gray-500 mt-1 font-prose">
                  Minimum 200 characters recommended
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4 font-display">
                  Add Media (Optional)
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="border-2 border-dashed border-gray-200 rounded-xl p-6 text-center hover:border-[#8AC63C] transition-colors cursor-pointer group">
                    <ImageIcon className="w-8 h-8 text-gray-400 group-hover:text-[#8AC63C] mx-auto mb-2 transition-colors" />
                    <p className="text-sm text-gray-600 font-medium">Add Photos</p>
                    <p className="text-xs text-gray-400 mt-1">JPG, PNG up to 10MB</p>
                  </div>
                  <div className="border-2 border-dashed border-gray-200 rounded-xl p-6 text-center hover:border-[#8AC63C] transition-colors cursor-pointer group">
                    <Video className="w-8 h-8 text-gray-400 group-hover:text-[#8AC63C] mx-auto mb-2 transition-colors" />
                    <p className="text-sm text-gray-600 font-medium">Add Video</p>
                    <p className="text-xs text-gray-400 mt-1">MP4 up to 100MB</p>
                  </div>
                  <div className="border-2 border-dashed border-gray-200 rounded-xl p-6 text-center hover:border-[#8AC63C] transition-colors cursor-pointer group">
                    <Music className="w-8 h-8 text-gray-400 group-hover:text-[#8AC63C] mx-auto mb-2 transition-colors" />
                    <p className="text-sm text-gray-600 font-medium">Add Audio</p>
                    <p className="text-xs text-gray-400 mt-1">MP3 up to 50MB</p>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 font-display">
                  Tags
                </label>
                <input
                  type="text"
                  placeholder="Add tags separated by commas (e.g., food, tradition, family)"
                  value={formData.tags}
                  onChange={(e) =>
                    setFormData({ ...formData, tags: e.target.value })
                  }
                  className="w-full h-11 px-4 rounded-md border border-gray-200 bg-white font-prose text-sm text-[#383838] focus:outline-none focus:ring-2 focus:ring-[#195883]/20 focus:border-[#195883]"
                />
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="agreement"
                  className="mt-1 h-4 w-4 rounded border-gray-300 text-[#195883] focus:ring-[#195883]"
                  required
                />
                <label htmlFor="agreement" className="text-sm text-gray-600 font-prose">
                  I confirm that this content is original and does not violate any copyright laws. I agree to the{" "}
                  <Link
                    href="/community-guidelines"
                    className="text-[#195883] hover:underline font-semibold"
                  >
                    Community Guidelines
                  </Link>
                  .
                </label>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-[#195883] hover:bg-[#144a6a] text-white py-4 rounded-md font-medium text-base transition-colors flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed shadow-sm"
              >
                {submitting ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Submit Story"
                )}
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
