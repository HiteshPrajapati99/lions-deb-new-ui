import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FounderStoriesShowcase from "@/components/founderStories/FounderStoriesShowcase";

export const metadata: Metadata = {
  title: "Season 01 | Lions Den",
  description:
    "Discover the inspiring journeys of entrepreneurs who transformed their dreams into thriving businesses with Lions Den.",
};

export default function FounderStoriesPage() {
  return (
    <>
      <Navbar />
      <FounderStoriesShowcase />
      <Footer />
    </>
  );
}
