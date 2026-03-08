import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PartnerLogosSection from "@/components/PartnerLogosSection";
import WhatYouGetSection from "@/components/WhatYouGetSection";
import PartnerTiersSection from "@/components/PartnerTiersSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import RevenueCalculatorSection from "@/components/RevenueCalculatorSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import EcosystemSection from "@/components/EcosystemSection";
import FaqSection from "@/components/FaqSection";
import ApplicationFormSection from "@/components/ApplicationFormSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <PartnerLogosSection />
    <WhatYouGetSection />
    <PartnerTiersSection />
    <HowItWorksSection />
    <RevenueCalculatorSection />
    <TestimonialsSection />
    <EcosystemSection />
    <FaqSection />
    <ApplicationFormSection />
    <Footer />
    <ScrollToTop />
  </div>
);

export default Index;
