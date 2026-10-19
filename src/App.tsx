import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
// import HeroSection from "@/components/sections/HeroSection";
import HomeHeroSection from "@/components/sections/HomeHeroSection";
import ExploreSection from "@/components/sections/ExploreSection";
import FeaturedEpisodesSection from "@/components/sections/FeaturedEpisodesSection";
import ImpactSection from "@/components/sections/ImpactSection";
import NewsletterSection from "@/components/sections/NewsletterSection";

import LegalPageChrome from "@/components/legal/LegalPageChrome";
import PrivacyPolicyContent from "@/components/legal/PrivacyPolicyContent";
import DisclaimerContent from "@/components/legal/DisclaimerContent";
import CookiesPolicyContent from "@/components/legal/CookiesPolicyContent";
import TermsContent from "@/components/legal/TermsContent";
import ApplicationGuideContent from "@/components/application-guide/ApplicationGuideContent";

// Backup of the previous Meet the Lions page — kept for reference.
// import MeetTheLionsShowcase from "@/components/meetTheLions/MeetTheLionsShowcase";
import LionProfilePage from "@/components/meetTheLions/LionProfilePage";
import Season01Showcase from "@/components/season01/Season01Showcase";
import Season02ComingSoon from "@/components/season02/Season02ComingSoon";
import FounderStoriesShowcase from "@/components/founderStories/FounderStoriesShowcase";
import PartnerNetworkShowcase from "@/components/partnerNetwork/PartnerNetworkShowcase";
import PressShowcase from "@/components/press/PressShowcase";
import { StartYourJourneyForm } from "./start-your-journey/StartYourJourneyForm";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        {/* <HeroSection /> */}
        <HomeHeroSection />
        <ImpactSection />
        <ExploreSection />
        <FeaturedEpisodesSection />
        <NewsletterSection />
      </main>
      <Footer />
    </>
  );
}

function MeetTheLionsPage() {
  return (
    <>
      <Navbar />
      {/* <MeetTheLionsShowcase /> */}
      <LionProfilePage />
      <Footer />
    </>
  );
}

function Season01Page() {
  return (
    <>
      <Navbar />
      <Season01Showcase />
      <Footer />
    </>
  );
}

function Season02Page() {
  return (
    <>
      <Navbar />
      <Season02ComingSoon />
      <Footer />
    </>
  );
}

function FounderStoriesPage() {
  return (
    <>
      <Navbar />
      <FounderStoriesShowcase />
      <Footer />
    </>
  );
}

function PartnerNetworkPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <PartnerNetworkShowcase />
      </main>
      <Footer />
    </>
  );
}

function PressPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <PressShowcase />
      </main>
      <Footer />
    </>
  );
}

function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#0B1726] pt-20">
        <NewsletterSection />
      </main>
      <Footer />
    </>
  );
}

function StartYourJourneyPage() {
  return (
    <>
      <Navbar />
      <main className="relative min-h-screen bg-gradient-to-b from-[#0a192f] via-brand-navy to-[#162a42] pb-20 pt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <StartYourJourneyForm />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/season" element={<Season01Page />} />
        <Route path="/season-02" element={<Season02Page />} />
        <Route path="/founder-stories" element={<FounderStoriesPage />} />
        <Route path="/meet-the-lions" element={<MeetTheLionsPage />} />
        <Route path="/partner-network" element={<PartnerNetworkPage />} />
        <Route path="/press" element={<PressPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/start-your-journey" element={<StartYourJourneyPage />} />

        <Route
          path="/privacy"
          element={
            <LegalPageChrome>
              <PrivacyPolicyContent />
            </LegalPageChrome>
          }
        />
        <Route
          path="/terms"
          element={
            <LegalPageChrome>
              <TermsContent />
            </LegalPageChrome>
          }
        />
        <Route
          path="/cookies"
          element={
            <LegalPageChrome>
              <CookiesPolicyContent />
            </LegalPageChrome>
          }
        />
        <Route
          path="/disclaimer"
          element={
            <LegalPageChrome>
              <DisclaimerContent />
            </LegalPageChrome>
          }
        />
        <Route
          path="/apply/guide"
          element={
            <LegalPageChrome>
              <ApplicationGuideContent />
            </LegalPageChrome>
          }
        />
      </Routes>
    </>
  );
}
