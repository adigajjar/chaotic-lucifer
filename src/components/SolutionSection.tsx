import { Lock, HardDrive, Network, FileCheck, Shield } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const audits = [
  {
    icon: Lock,
    title: "IAM Security Audits",
    desc: "Detect overly permissive policies, unused credentials, and privilege escalation risks.",
  },
  {
    icon: HardDrive,
    title: "S3 Bucket Analysis",
    desc: "Identify public buckets, encryption gaps, and access control misconfigurations.",
  },
  {
    icon: Network,
    title: "Network Segmentation",
    desc: "Analyze VPC configurations, security groups, and network access patterns.",
  },
  {
    icon: FileCheck,
    title: "Compliance Reports",
    desc: "Automated VAPT reports with severity ratings and remediation recommendations.",
  },
];

const VAPTScannerSection = () => {
  return (
    <section
      id="vapt-scanner"
      className="relative py-24 px-6 bg-[#030303] border-t border-border"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 border border-primary px-3 py-1 bg-primary/5 rounded-none mb-6">
            <Shield className="w-3.5 h-3.5 text-primary" />
            <span className="text-primary text-xs font-mono tracking-wide">
              The VAPT Scanner
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4 tracking-tighter">
            Automated AWS Security
            <br />
            Auditing
          </h2>
          <p className="text-muted-foreground/80 max-w-3xl text-sm md:text-base font-mono">
            Comprehensive vulnerability assessment and penetration testing for
            your AWS infrastructure. Automated rule-based audits across IAM, S3,
            networking, and more.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {audits.map((item, i) => (
            <div key={i} className="flex flex-col h-full bg-transparent p-2">
              <div className="mb-4 bg-transparent border border-primary w-10 h-10 flex items-center justify-center">
                <item.icon className="w-4 h-4 text-primary" />
              </div>
              <h3 className="text-sm font-bold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed font-mono">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="w-full border border-border bg-[#0a0a0a] min-h-[400px] relative overflow-hidden flex items-center justify-end p-4 md:p-8">
          <div className="flex flex-wrap gap-2 md:gap-4 relative z-20 self-start mt-4 md:mt-8">
            <div className="bg-[#111] border border-border p-4 text-center w-24">
              <div className="text-2xl text-[#ff5555] font-bold">12</div>
              <div className="text-[10px] text-muted-foreground font-mono mt-1 uppercase tracking-widest">
                Critical
              </div>
            </div>
            <div className="bg-[#111] border border-border p-4 text-center w-24">
              <div className="text-2xl text-[#ffaa00] font-bold">28</div>
              <div className="text-[10px] text-muted-foreground font-mono mt-1 uppercase tracking-widest">
                High
              </div>
            </div>
            <div className="bg-[#111] border border-border p-4 text-center w-24">
              <div className="text-2xl text-[#facc15] font-bold">45</div>
              <div className="text-[10px] text-muted-foreground font-mono mt-1 uppercase tracking-widest">
                Medium
              </div>
            </div>
            <div className="bg-[#111] border border-border p-4 text-center w-24">
              <div className="text-2xl text-primary font-bold">67</div>
              <div className="text-[10px] text-muted-foreground font-mono mt-1 uppercase tracking-widest">
                Low
              </div>
            </div>
          </div>

          <img
            alt="VAPT Scanner Interface"
            className="absolute inset-0 w-full h-full object-cover opacity-80 z-0 pointer-events-none"
            src="https://images.unsplash.com/photo-1583695477819-357b45d15825?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwzfHxjeWJlcnNlY3VyaXR5JTIwdnVsbmVyYWJpbGl0eSUyMHNjYW5uaW5nfGVufDB8fHx8MTc3NjAxMjIxOHww&ixlib=rb-4.1.0&q=85"
          />
          <div className="absolute inset-0  z-10 pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export default VAPTScannerSection;
