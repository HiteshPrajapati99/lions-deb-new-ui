import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Season01Showcase from "@/components/season01/Season01Showcase";

export const metadata: Metadata = {
  title: "Season 01 | Lions Den",
  description:
    "Watch all 10 episodes of Season 01, featuring 36 passionate entrepreneurs, ₹9.15 Cr in investments, and countless inspiring stories of ambition meeting opportunity.",
};

export default function Season01Page() {
  return (
    <>
      <Navbar />
      <Season01Showcase />
      <Footer />
    </>
  );
}
