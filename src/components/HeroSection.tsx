import { Shield, TerminalSquare } from "lucide-react";
import AnimatedSphere from "./AnimatedSphere";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-16 flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-background" />

      <div className="relative z-10 container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col items-start text-left">
            <div className="inline-block border border-[#6b52a3] bg-[#2a1b41]/40 px-3 py-1 mb-8">
              <span className="text-[#a585e8] text-xs font-mono tracking-wide uppercase">
                DevSecOps Platform
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-7xl font-extrabold leading-[1.1] mb-6 text-foreground tracking-tighter">
              <span className="block text-foreground">Resilience Meets</span>
              <span className="block text-foreground mt-2">Security</span>
            </h1>

            <div className="mb-8">
              <p className="text-lg md:text-xl font-medium text-foreground tracking-tight mb-4">
                Unleashing Controlled Chaos For Unshakable Security
                <span className="text-[#ff5555]">.</span>
              </p>
              <p className="text-sm md:text-base text-muted-foreground/80 max-w-md leading-relaxed font-mono">
                Integrate Chaos Engineering with AWS Security Auditing through
                our unique Vuln-Chaos pipeline. Test your infrastructure's
                resilience while identifying vulnerabilities.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-20 w-full sm:w-auto">
              <a
                href="/download"
                className="inline-flex items-center justify-between px-6 py-4 bg-primary text-black font-semibold hover:bg-primary-bright transition-all text-sm tracking-wide w-full sm:w-64"
              >
                <span>
                  Secure Your
                  <br />
                  Infrastructure
                </span>
                <Shield className="w-5 h-5 ml-4 stroke-[1.5]" />
              </a>
              <a
                href="https://github.com/ShubhankarSalunke/Lucifer"
                className="inline-flex items-center justify-between px-6 py-4 bg-[#1a1a1a] text-foreground font-semibold hover:bg-[#252525] transition-all text-sm tracking-wide w-full sm:w-56"
              >
                <span>
                  View
                  <br />
                  Documentation
                </span>
                <TerminalSquare className="w-5 h-5 ml-4 stroke-[1.5] text-muted-foreground" />
              </a>
            </div>

            {/* Stats row */}
            <div className="flex flex-wrap gap-6 sm:gap-12 border-t border-border pt-8">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">
                  99.9%
                </div>
                <div className="text-xs text-muted-foreground font-mono">
                  Uptime Resilience
                </div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-border"></div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">20+</div>
                <div className="text-xs text-muted-foreground font-mono">
                  Security Audits
                </div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-border"></div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-xs text-muted-foreground font-mono">
                  Monitoring
                </div>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center items-center -mt-16 md:-mt-24 lg:-mt-24">
            {/* Animated 3D Sphere */}
            <div className="relative w-full max-w-lg aspect-square flex items-center justify-center">
              <div className="absolute inset-0 glow-cyan rounded-full opacity-20 blur-[100px]"></div>
              <div className="relative z-10 w-full h-full flex items-center justify-center">
                <AnimatedSphere />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
