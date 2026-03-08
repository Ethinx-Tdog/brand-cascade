import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhatYouGetSection from "@/components/WhatYouGetSection";
import PartnerTiersSection from "@/components/PartnerTiersSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import RevenueCalculatorSection from "@/components/RevenueCalculatorSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FaqSection from "@/components/FaqSection";
import ApplicationFormSection from "@/components/ApplicationFormSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <WhatYouGetSection />
    <PartnerTiersSection />
    <HowItWorksSection />
    <RevenueCalculatorSection />
    <TestimonialsSection />
    <FaqSection />
    <ApplicationFormSection />
    <Footer />
  </div>
);

export default Index;
