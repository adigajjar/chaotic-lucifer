import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ChaosEngineSection from "@/components/ProblemSection";
import VAPTScannerSection from "@/components/SolutionSection";
import VulnChaosSection from "@/components/FeaturesSection";
import ArchitectureSection from "@/components/DownloadSection";
import CLISection from "@/components/CLISection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ChaosEngineSection />
      <VAPTScannerSection />
      <VulnChaosSection />
      <ArchitectureSection />
      <CLISection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
