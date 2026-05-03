import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ExploreSection from "@/components/sections/ExploreSection";
import FeaturedEpisodesSection from "@/components/sections/FeaturedEpisodesSection";
import ProsperitySection from "@/components/sections/ProsperitySection";
import ImpactSection from "@/components/sections/ImpactSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import NewsletterSection from "@/components/sections/NewsletterSection";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ExploreSection />
        <FeaturedEpisodesSection />
        <ProsperitySection />
        <ImpactSection />
        <TestimonialsSection />
        <NewsletterSection />
      </main>
      <Footer />
    </>
  );
}
