import { Suspense } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ExploreSection from "@/components/sections/ExploreSection";
import FeaturedEpisodesSection, {
  FeaturedEpisodesSkeleton,
} from "@/components/sections/FeaturedEpisodesSection";
import ImpactSection from "@/components/sections/ImpactSection";
import NewsletterSection from "@/components/sections/NewsletterSection";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ExploreSection />
        <Suspense fallback={<FeaturedEpisodesSkeleton />}>
          <FeaturedEpisodesSection />
        </Suspense>
        <ImpactSection />
        <NewsletterSection />
      </main>
      <Footer />
    </>
  );
}
