import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { StartYourJourneyForm } from "./StartYourJourneyForm";

export default function StartYourJourneyPage() {
  return (
    <>
      <Navbar />
      <main className="relative min-h-screen bg-gradient-to-b from-[#0a192f] via-brand-navy to-[#162a42] pb-20 pt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* <StartYourJourneyForm /> */}
          {/* Add content like work in progress */}

          <div className="flex flex-col items-center justify-center h-screen text-white">
            <h1 className="text-4xl font-bold">Work in Progress</h1>
            <p className="text-lg">
              We are working on the application form. Please check back later.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
