import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { TerminalSquare, Monitor, HardDrive, Download, ChevronRight } from "lucide-react";

const DownloadPage = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-24 px-6 relative overflow-hidden">
        {/* Background ambient glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-2xl aspect-square bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 border border-primary px-3 py-1 bg-primary/5 rounded-none mb-6">
              <Download className="w-3.5 h-3.5 text-primary" />
              <span className="text-primary text-xs font-mono tracking-wide">Downloads</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-foreground mb-6 tracking-tighter">
              Get Lucifer CLI
            </h1>
            <p className="text-muted-foreground/80 max-w-2xl mx-auto text-sm md:text-base font-mono leading-relaxed">
              Install the ultimate DevSecOps weapon on your local machine. Choose your platform below and unleash controlled chaos.
            </p>
          </div>

          <div className="border border-border bg-[#0a0a0a] p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <HardDrive className="w-8 h-8 text-muted-foreground" />
              <div>
                <h4 className="font-bold text-foreground">Direct Binary Download</h4>
                <p className="text-xs text-muted-foreground font-mono mt-1">Download pre-compiled binaries for arm64 and amd64 architectures.</p>
              </div>
            </div>
            <a
              href="https://github.com/ShubhankarSalunke/Lucifer/releases/tag/v1.0.0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-black font-semibold hover:bg-gray-200 transition-colors text-sm w-full md:w-auto shrink-0"
            >
              See All Releases
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DownloadPage;
