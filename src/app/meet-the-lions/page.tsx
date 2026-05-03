import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MeetTheLionsShowcase from "@/components/meetTheLions/MeetTheLionsShowcase";

export const metadata: Metadata = {
  title: "Meet the Lions | Lions Den",
  description:
    "India's most successful entrepreneurs and investors who transform dreams into thriving businesses.",
};

export default function MeetTheLionsPage() {
  return (
    <>
      <Navbar />
      <MeetTheLionsShowcase />
      <Footer />
    </>
  );
}
