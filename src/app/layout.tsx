import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lions Den | Beyond the Pitch – Building Businesses",
  description:
    "Lions Den is the premier business pitching show that goes beyond the pitch to build real businesses. Watch entrepreneurs turn ideas into thriving companies.",
  keywords: ["Lions Den", "business pitch", "entrepreneurs", "investment", "startup"],
  openGraph: {
    title: "Lions Den | Beyond the Pitch – Building Businesses",
    description:
      "Lions Den is the premier business pitching show that goes beyond the pitch to build real businesses.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-gray-900">{children}</body>
    </html>
  );
}
