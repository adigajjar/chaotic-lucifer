import { Globe, FileCode, ArrowRightLeft, Terminal, Database, BarChart3 } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const features = [
  { icon: Globe, title: "Cloud Agnostic", desc: "Supports AWS, GCP, and Azure through a unified connector" },
  { icon: FileCode, title: "YAML Rule Engine", desc: "Write your own rules mapped to CIS, NIST, and MITRE ATT&CK" },
  { icon: ArrowRightLeft, title: "Vuln-Chaos Bridge", desc: "Security findings automatically map to chaos experiments" },
  { icon: Terminal, title: "Agent-Based Chaos", desc: "CLI-driven fault injection on compute instances" },
  { icon: Database, title: "SDK-Based Chaos", desc: "Direct SDK experiments on object storage" },
  { icon: BarChart3, title: "Unified Reporting", desc: "VAPT, Resilience, and Combined reports from one data layer" },
];

const FeaturesSection = () => {
  return (
    <section className="relative py-28 px-6">
      <div className="container mx-auto max-w-5xl">
        <ScrollReveal>
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-16 text-center tracking-tight">
            What Lucifer Does
          </h2>
        </ScrollReveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <ScrollReveal key={i} delay={i * 80}>
              <div className="group relative bg-card/60 backdrop-blur-sm border border-border rounded-lg p-7 card-glow overflow-hidden">
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/[0.04] group-hover:to-primary/[0.08] transition-all duration-300 rounded-lg" />
                <f.icon className="w-5 h-5 text-primary mb-4 relative z-10 group-hover:scale-110 transition-transform duration-200" />
                <h3 className="text-foreground font-bold mb-2 text-sm relative z-10">{f.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed relative z-10">{f.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
