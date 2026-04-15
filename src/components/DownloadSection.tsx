import { Shield, Lock, Activity, Link2, Download } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const ArchitectureSection = () => {
  return (
    <section
      id="architecture"
      className="relative py-24 px-6 bg-[#030303] border-t border-border"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 border border-primary px-3 py-1 bg-primary/5 rounded-none mb-6">
            <Lock className="w-3.5 h-3.5 text-primary" />
            <span className="text-primary text-xs font-mono tracking-wide">
              Secure Architecture
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4 tracking-tighter">
            Orchestrator-Agent Model
          </h2>
          <p className="text-muted-foreground/80 max-w-2xl text-sm md:text-base font-mono">
            Multi-tenant security with zero-trust data handling. Your
            credentials remain client-side, ensuring complete control and
            isolation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="border border-border bg-card flex flex-col group overflow-hidden">
            <div className="h-64 w-full relative bg-[#111] border-b border-border overflow-hidden">
              <div className="absolute inset-0 z-10"></div>
              {/* Abstract visualization */}
              <img
                alt="Secure Cloud Architecture 1"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 z-0"
                src="https://images.unsplash.com/photo-1667372283536-a832e74401c2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwxfHxzZWN1cmUlMjBjbG91ZCUyMGFyY2hpdGVjdHVyZXxlbnwwfHx8fDE3NzYwMTIyNTJ8MA&ixlib=rb-4.1.0&q=85"
              />
            </div>
            <div className="p-6">
              <h3 className="text-base font-bold text-foreground mb-2">
                Client-Side Security
              </h3>
              <p className="text-xs text-muted-foreground font-mono leading-relaxed">
                All AWS credentials and sensitive data remain on your
                infrastructure. Zero data exposure to external systems.
              </p>
            </div>
          </div>

          <div className="border border-border bg-card flex flex-col group overflow-hidden">
            <div className="h-64 w-full relative bg-[#111] border-b border-border overflow-hidden">
              <div className="absolute inset-0 z-10"></div>
              {/* Abstract visualization */}
              <img
                alt="Secure Cloud Architecture 2"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 z-0"
                src="https://images.unsplash.com/photo-1667372283587-e1557c08aca4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwzfHxzZWN1cmUlMjBjbG91ZCUyMGFyY2hpdGVjdHVyZXxlbnwwfHx8fDE3NzYwMTIyNTJ8MA&ixlib=rb-4.1.0&q=85"
              />
            </div>
            <div className="p-6">
              <h3 className="text-base font-bold text-foreground mb-2">
                Multi-Tenant Isolation
              </h3>
              <p className="text-xs text-muted-foreground font-mono leading-relaxed">
                Complete tenant isolation with encrypted communication channels
                and role-based access control.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-4">
          {[
            { icon: Lock, label: "Zero-Trust Architecture" },
            { icon: Shield, label: "End-to-End Encryption" },
            { icon: Activity, label: "Distributed Agent Network" },
            { icon: Link2, label: "Audit Trail Logging" },
          ].map((item, i) => (
            <div
              key={i}
              className="border border-border bg-card p-4 flex items-center gap-3"
            >
              <item.icon className="w-4 h-4 text-primary" />
              <span className="text-xs font-mono font-bold text-foreground">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArchitectureSection;
