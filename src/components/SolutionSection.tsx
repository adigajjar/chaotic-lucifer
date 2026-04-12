import { Cloud, ShieldCheck, ArrowRightLeft, Zap, FileText } from "lucide-react";

const steps = [
  { icon: Cloud, label: "Cloud Infrastructure" },
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
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-16 text-center">
          How Lucifer Works
        </h2>

        {/* Flow diagram */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-16">
          {steps.map((step, i) => (
            <div key={i} className="flex items-center gap-4">
              <div className="flex flex-col items-center gap-2 min-w-[120px]">
                <div className="w-14 h-14 rounded-lg bg-card border border-border flex items-center justify-center">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-xs text-muted-foreground text-center font-medium">
                  {step.label}
                </span>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden md:block w-8 h-px bg-border" />
              )}
            </div>
          ))}
        </div>

        {/* Descriptions */}
        <div className="grid md:grid-cols-3 gap-8">
          {descriptions.map((text, i) => (
            <p key={i} className="text-sm text-muted-foreground leading-relaxed">
              {text}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
