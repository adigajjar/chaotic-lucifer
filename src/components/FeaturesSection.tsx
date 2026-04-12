import { Globe, FileCode, ArrowRightLeft, Terminal, Database, BarChart3 } from "lucide-react";

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
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-14 text-center">
          What Lucifer Does
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary/40 transition-colors"
            >
              <f.icon className="w-5 h-5 text-primary mb-4" />
              <h3 className="text-foreground font-semibold mb-2 text-sm">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
