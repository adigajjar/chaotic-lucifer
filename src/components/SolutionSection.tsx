import { Cloud, ShieldCheck, ArrowRightLeft, Zap, FileText } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { useEffect, useRef, useState } from "react";

const steps = [
  { icon: Cloud, label: "Cloud Infra" },
  { icon: ShieldCheck, label: "Security Audit" },
  { icon: ArrowRightLeft, label: "Vuln-Chaos Bridge" },
  { icon: Zap, label: "Chaos Experiments" },
  { icon: FileText, label: "Reports" },
];

const descriptions = [
  "Lucifer scans your AWS, GCP, and Azure infrastructure against YAML-based rules mapped to CIS, NIST, and MITRE ATT&CK benchmarks.",
  "Every finding is a trigger. Lucifer prompts you to simulate the exact failure that vulnerability enables — agent-based on compute, SDK-based on storage.",
  "Three reports. VAPT, Resilience, and Combined — linking every vulnerability to the failure it caused and the time it took to recover.",
];

const SolutionSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(-1);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Animate steps sequentially
          steps.forEach((_, i) => {
            setTimeout(() => setActiveStep(i), i * 400);
          });
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-28 px-6">
      <div className="container mx-auto max-w-5xl">
        <ScrollReveal>
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-20 text-center tracking-tight">
            How Lucifer Works
          </h2>
        </ScrollReveal>

        {/* Flow diagram */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-2 mb-20">
          {steps.map((step, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="flex flex-col items-center gap-3 min-w-[110px]">
                <div
                  className="w-16 h-16 rounded-lg bg-card border flex items-center justify-center transition-all duration-500"
                  style={{
                    borderColor: i <= activeStep ? "hsl(0 100% 40% / 0.6)" : "hsl(0 0% 12%)",
                    boxShadow: i <= activeStep ? "0 0 25px -5px hsl(0 100% 40% / 0.4)" : "none",
                  }}
                >
                  <step.icon
                    className="w-7 h-7 transition-colors duration-500"
                    style={{
                      color: i <= activeStep ? "hsl(0 100% 50%)" : "hsl(0 0% 30%)",
                    }}
                  />
                </div>
                <span
                  className="text-xs text-center font-medium transition-colors duration-500"
                  style={{
                    color: i <= activeStep ? "hsl(0 0% 85%)" : "hsl(0 0% 35%)",
                  }}
                >
                  {step.label}
                </span>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden md:block w-12 h-[2px] relative overflow-hidden rounded-full">
                  <div
                    className="absolute inset-0 bg-border transition-all duration-700"
                  />
                  {i < activeStep && (
                    <div className="absolute inset-0 flow-line h-full" />
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Descriptions */}
        <div className="grid md:grid-cols-3 gap-10">
          {descriptions.map((text, i) => (
            <ScrollReveal key={i} delay={i * 150}>
              <p className="text-sm text-muted-foreground leading-relaxed border-l-2 border-primary/30 pl-4">
                {text}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
