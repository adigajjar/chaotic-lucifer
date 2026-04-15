import { Zap } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const steps = [
  {
    num: "01",
    title: "Audit Finding",
    desc: "VAPT scanner identifies a network segmentation gap in VPC configuration.",
    status: "Critical Vulnerability",
    statusColor: "text-[#ff5555] border-[#ff5555]",
  },
  {
    num: "02",
    title: "Auto-Trigger",
    desc: "Vuln-Chaos engine automatically creates a chaos experiment based on the finding.",
    status: "Experiment Created",
    statusColor: "text-[#a585e8] border-[#a585e8]",
  },
  {
    num: "03",
    title: "Chaos Execution",
    desc: "Simulates lateral movement attempt to test system resilience under attack.",
    status: "Running",
    statusColor: "text-primary border-primary",
  },
  {
    num: "04",
    title: "Resilience Report",
    desc: "Comprehensive analysis of system behavior during simulated attack scenario.",
    status: "Completed",
    statusColor: "text-green-500 border-green-500",
  },
];

const vectors = [
  "Lateral Movement Simulation",
  "Privilege Escalation Tests",
  "Data Exfiltration Scenarios",
  "DDoS Resilience Testing",
  "Credential Compromise Simulation",
  "Service Disruption Tests",
];

const VulnChaosSection = () => {
  return (
    <section
      id="vuln-chaos"
      className="relative py-24 px-6 bg-background border-t border-border"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 border border-[#ff5555] px-3 py-1 bg-[#ff5555]/5 rounded-none mb-6">
            <Zap className="w-3.5 h-3.5 text-[#ff5555]" />
            <span className="text-[#ff5555] text-xs font-mono tracking-wide">
              Vuln-Chaos Pipeline
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4 tracking-tighter">
            Security Attack &rarr; Chaos
            <br />
            Simulation
          </h2>
          <p className="text-muted-foreground/80 max-w-2xl text-sm md:text-base font-mono">
            Revolutionize workflow that automatically converts security
            <br />
            vulnerabilities into chaos experiments. Test your system's
            resilience
            <br />
            against real attack scenarios.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-0 mb-8 justify-between items-stretch">
          {steps.map((step, i) => (
            <div key={i} className="flex-1 flex items-stretch">
              <div className="flex-1 bg-card border border-border p-6 flex flex-col h-full">
                <div className="text-primary font-mono text-xs mb-4">
                  {step.num}
                </div>
                <h3 className="text-sm font-bold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed font-mono mb-6 flex-grow">
                  {step.desc}
                </p>
                <div
                  className={`mt-auto self-start border px-2 py-1 text-[10px] uppercase tracking-wider font-mono ${step.statusColor}`}
                >
                  {step.status}
                </div>
              </div>

              {i < steps.length - 1 && (
                <div className="hidden md:flex items-center justify-center w-12 shrink-0">
                  <Zap className="w-4 h-4 text-[#ff5555]" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="border border-border bg-card p-6">
          <div className="text-center font-bold text-foreground mb-6">
            Supported Attack Vectors
          </div>
          <div className="grid md:grid-cols-3 gap-3">
            {vectors.map((v, i) => (
              <div
                key={i}
                className="border border-primary px-4 py-3 text-center text-xs text-primary font-mono hover:bg-primary/5 transition-colors cursor-default"
              >
                {v}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VulnChaosSection;
