import { TerminalSquare, Network, AlertTriangle, Cpu } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const experiments = [
  {
    icon: TerminalSquare,
    color: "text-[#ff5555]",
    badge: "Infrastructure",
    title: "Container Kill",
    desc: "Randomly terminate containers to test pod recovery and orchestration resilience.",
  },
  {
    icon: Network,
    color: "text-[#a585e8]",
    badge: "Resource",
    title: "Memory Stress",
    desc: "Apply memory pressure to test application behavior under resource constraints.",
  },
  {
    icon: AlertTriangle,
    color: "text-[#ff5555]",
    badge: "Storage",
    title: "S3 Object Sabotage",
    desc: "Simulate S3 failures to test backup systems and data recovery protocols.",
  },
];

const ChaosEngineSection = () => {
  return (
    <section id="chaos-engine" className="relative py-24 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 border border-primary px-3 py-1 bg-primary/5 rounded-none mb-6">
            <Cpu className="w-3.5 h-3.5 text-primary" />
            <span className="text-primary text-xs font-mono tracking-wide">
              The Chaos Engine
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4 tracking-tighter">
            Controlled Chaos at Scale
          </h2>
          <p className="text-muted-foreground/80 max-w-2xl text-sm md:text-base font-mono">
            Simulate real-world failures to build resilient systems. Test your
            infrastructure's limits with precision chaos experiments.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {experiments.map((exp, i) => (
            <div
              key={i}
              className="bg-card border border-border p-6 hover:border-primary/50 transition-all flex flex-col h-full rounded-none"
            >
              <div className="mb-4 bg-[#1a1a1a] border border-border w-12 h-12 flex items-center justify-center">
                <exp.icon className={`w-5 h-5 ${exp.color}`} />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2 tracking-tight">
                {exp.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-8 flex-grow font-mono">
                {exp.desc}
              </p>

              <div className="flex items-center justify-between border-t border-border pt-4 mt-auto">
                <span className="text-[#555] text-xs font-mono">
                  Experiment Type:
                </span>
                <span className="text-primary text-xs font-mono">
                  {exp.badge}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Dashboard graphic placeholder */}
        <div className="w-full border border-border bg-card relative overflow-hidden flex flex-col h-[400px]">
          <div className="flex items-center justify-between p-4 border-b border-border relative z-20 bg-card">
            <div className="flex items-center gap-2">
              <TerminalSquare className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm font-mono text-muted-foreground">
                Real-Time Agent Polling Dashboard
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-mono text-muted-foreground">
                3 Experiments Running
              </span>
            </div>
          </div>

          {/* Background Image */}
          <img
            alt="Chaos Engineering Dashboard"
            className="absolute top-[61px] left-0 w-full h-[calc(100%-61px)] object-cover opacity-60 z-0"
            src="https://images.unsplash.com/photo-1729549223893-b340db51e577?crop=entropy&amp;cs=srgb&amp;fm=jpg&amp;ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwxfHxpbmZyYXN0cnVjdHVyZSUyMHRlc3Rpbmd8ZW58MHx8fHwxNzc2MDEyMTg0fDA&amp;ixlib=rb-4.1.0&amp;q=85"
          />

          {/* Bottom Gradient overlay */}
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent z-10 pointer-events-none"></div>

          <div className="absolute bottom-6 left-6 z-20 flex flex-col gap-3">
            <div className="flex items-center gap-3 text-sm font-mono">
              <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]"></div>
              <span className="text-white drop-shadow-md">
                Container Kill - Running
              </span>
            </div>
            <div className="flex items-center gap-3 text-sm font-mono">
              <div className="w-2.5 h-2.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></div>
              <span className="text-white drop-shadow-md">
                Memory Stress - Completed
              </span>
            </div>
            <div className="flex items-center gap-3 text-sm font-mono">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)]"></div>
              <span className="text-white drop-shadow-md">
                Network Latency - Interrupted
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChaosEngineSection;
