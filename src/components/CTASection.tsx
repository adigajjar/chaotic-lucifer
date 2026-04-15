import { Hexagon, Shield, TerminalSquare } from "lucide-react";

const CTASection = () => {
  return (
    <section className="relative py-32 px-6 bg-background border-t border-border">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6 tracking-tighter">
          Ready to Build Unshakable
          <br />
          Systems?
        </h2>
        <p className="text-muted-foreground/80 max-w-2xl mx-auto text-sm md:text-base font-mono mb-10 leading-relaxed">
          Join organizations using Lucifer to combine chaos engineering with
          security auditing for resilient, secure infrastructure.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="/download"
            className="inline-flex items-center justify-between px-6 py-4 bg-primary text-black font-semibold hover:bg-primary-bright transition-all text-sm tracking-wide w-full sm:w-64"
          >
            <span>Get Started Now</span>
            <Shield className="w-5 h-5 ml-4 stroke-[1.5]" />
          </a>
          <a
            href="#demo"
            className="inline-flex items-center justify-between px-6 py-4 bg-[#1a1a1a] text-foreground font-semibold hover:bg-[#252525] border border-transparent transition-all text-sm tracking-wide w-full sm:w-56"
          >
            <span>Schedule Demo &gt;_</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
