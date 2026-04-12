import luciferLogo from "@/assets/lucifer-logo.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="hero-grid absolute inset-0" />
      <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl">
        <img
          src={luciferLogo}
          alt="Lucifer Logo"
          width={80}
          height={80}
          className="mx-auto mb-8"
        />
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.05] mb-6 text-foreground">
          Unified Cloud Resilience Testing —{" "}
          <span className="text-primary">Security and Chaos, Together.</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed font-light">
          Lucifer scans your cloud infrastructure for vulnerabilities and simulates what happens
          when they are exploited — giving you a complete picture of your security posture and
          operational resilience.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#download"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors glow-red"
          >
            Download Lucifer
          </a>
          <a
            href="#docs"
            className="inline-flex items-center justify-center px-8 py-3.5 border border-border text-foreground font-semibold rounded-lg hover:bg-secondary transition-colors"
          >
            View Documentation
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
