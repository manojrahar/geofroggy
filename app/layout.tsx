import type { Metadata } from "next";
import { Poppins, Inter, Roboto, Philosopher, Yellowtail, Averia_Serif_Libre } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import KaiMaBadge from "@/components/KaiMaBadge";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
});

const philosopher = Philosopher({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-philosopher",
  display: "swap",
});

const yellowtail = Yellowtail({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-yellowtail",
  display: "swap",
});

const averia = Averia_Serif_Libre({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-averia",
  display: "swap",
});

export const metadata: Metadata = {
  title: "GeoFroggy - Discover New Voices, New Cultures",
  description:
    "Discover new voices, new cultures, and a new way to see the world. Celebrating Cultures. Connecting People. One Story at a Time.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${inter.variable} ${roboto.variable} ${philosopher.variable} ${yellowtail.variable} ${averia.variable}`}
    >
      <head>
        {/* Live site Tailwind v4 compiled utility styles */}
        <link rel="stylesheet" href="/live_tailwind.css" />
        {/* Fontshare CDN for Clash Display */}
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&display=swap"
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col bg-white text-[#383838]">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <KaiMaBadge />
      </body>
    </html>
  );
}
