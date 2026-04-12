import luciferLogo from "@/assets/lucifer-logo.png";
import MatrixBackground from "./MatrixBackground";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <MatrixBackground />
      <div className="hero-grid absolute inset-0" />
      <div className="scanlines" />

      <div className="relative z-10 container mx-auto px-6 text-center max-w-5xl">
        <img
          src={luciferLogo}
          alt="Lucifer Logo"
          width={100}
          height={100}
          className="mx-auto mb-8 glow-red-sm"
          style={{ filter: "drop-shadow(0 0 30px hsl(0 100% 50% / 0.5))" }}
        />
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[1.0] mb-6 text-foreground tracking-tighter">
          <span className="block text-primary-bright glow-red-text">LUCIFER</span>
          <span className="block mt-2 text-3xl md:text-5xl lg:text-6xl font-bold text-foreground/90">
            Security & Chaos, Together.
          </span>
        </h1>
        <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed font-light">
          Scans your cloud infrastructure for vulnerabilities and simulates what happens
          when they are exploited — a complete picture of your security posture and
          operational resilience.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#download"
            className="inline-flex items-center justify-center px-10 py-4 bg-primary text-primary-foreground font-bold rounded-lg pulse-glow transition-all text-lg tracking-wide"
          >
            Download Lucifer
          </a>
          <a
            href="#docs"
            className="inline-flex items-center justify-center px-10 py-4 border border-border text-foreground font-bold rounded-lg hover:border-primary/50 hover:bg-primary/5 transition-all text-lg tracking-wide"
          >
            View Documentation
          </a>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default HeroSection;
