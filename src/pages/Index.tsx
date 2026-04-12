import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import FeaturesSection from "@/components/FeaturesSection";
import DownloadSection from "@/components/DownloadSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background bg-grid-texture">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <FeaturesSection />
      <DownloadSection />
      <Footer />
    </div>
  );
};

export default Index;
