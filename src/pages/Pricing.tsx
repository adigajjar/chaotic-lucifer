import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Check, Shield, Activity, Target, Zap, ChevronDown, ChevronUp } from "lucide-react";

const PricingPage = () => {
  const [isYearly, setIsYearly] = useState(true);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "Does Lucifer require cross-account permissions?",
      a: "No, Lucifer runs directly in your environment and only requires the IAM permissions you explicitly grant it. It operates on a principle of least privilege, ensuring zero unauthorized cross-account access."
    },
    {
      q: "Can I create custom security rules?",
      a: "Yes! The Enterprise tier fully supports custom rule authoring via YAML to fit your unique compliance and infrastructure needs."
    },
    {
      q: "How does the Chaos Engine ensure safety?",
      a: "Lucifer's Chaos Engine includes strict blast-radius controls. Simulations are ring-fenced, and you can define 'dry-run' modes or auto-rollback triggers if system health checks fail during an experiment."
    }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <main className="flex-grow pt-32 pb-24 px-6 relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-full max-w-3xl aspect-square bg-primary/5 rounded-full blur-[150px] pointer-events-none"></div>

        <div className="container mx-auto max-w-7xl relative z-10">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-extrabold text-foreground mb-6 tracking-tighter">
              Scalable Security for<br />Modern Infrastructure
            </h1>
            <p className="text-muted-foreground/80 max-w-2xl mx-auto text-sm md:text-base font-mono leading-relaxed mb-10">
              From independent researchers to global enterprises. Choose the power of VAPT-driven Chaos Engineering.
            </p>

            {/* Toggle */}
            <div className="flex items-center justify-center gap-4 text-sm font-mono font-bold">
              <span className={`transition-colors ${!isYearly ? "text-foreground" : "text-muted-foreground"}`}>Monthly</span>
              <button 
                onClick={() => setIsYearly(!isYearly)}
                className="w-14 h-7 bg-[#1a1a1a] border border-border rounded-full flex items-center px-1"
              >
                <div className={`w-5 h-5 bg-primary rounded-full transition-transform ${isYearly ? "translate-x-7" : "translate-x-0"}`}></div>
              </button>
              <div className="flex items-center gap-2">
                <span className={`transition-colors ${isYearly ? "text-foreground" : "text-muted-foreground"}`}>Yearly</span>
                <span className="bg-primary/20 text-primary px-2 py-0.5 rounded-full text-[10px] tracking-wide border border-primary/30 uppercase">Save 20%</span>
              </div>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-24 max-w-6xl mx-auto">
            {/* Community */}
            <div className="border border-border bg-card p-8 flex flex-col hover:border-primary/50 transition-colors">
              <h3 className="text-2xl font-bold text-foreground mb-2">Community</h3>
              <p className="text-xs text-muted-foreground font-mono mb-6">For individual researchers & OSS enthusiasts.</p>
              <div className="text-4xl font-extrabold text-foreground mb-8">
                $0
                <span className="text-sm text-muted-foreground font-mono font-normal tracking-wide"> / forever</span>
              </div>
              <ul className="flex flex-col gap-4 mb-8 flex-grow">
                {["Standard AWS Service Scanning", "Community YAML Rules", "CLI Access", "Basic Markdown Reports", "GitHub Community Support"].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground font-mono">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a href="/download" className="block w-full text-center px-6 py-4 bg-[#1a1a1a] text-foreground font-semibold hover:bg-[#252525] border border-border transition-all text-sm tracking-wide">
                Download Community
              </a>
            </div>

            {/* Professional */}
            <div className="border border-primary bg-card p-8 flex flex-col relative scale-[1.02] shadow-[0_0_30px_rgba(34,211,238,0.05)] z-10">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-black px-4 py-1 text-xs font-bold tracking-widest uppercase">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Professional</h3>
              <p className="text-xs text-muted-foreground font-mono mb-6">For startups & fast-moving DevSecOps teams.</p>
              <div className="text-4xl font-extrabold text-primary mb-8">
                ${isYearly ? "79" : "99"}
                <span className="text-sm text-muted-foreground font-mono font-normal tracking-wide text-foreground"> /mo per account</span>
              </div>
              <ul className="flex flex-col gap-4 mb-8 flex-grow">
                <li className="flex items-start gap-3 text-sm text-foreground font-mono font-semibold pb-2 border-b border-border/50">
                  <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>Everything in Community, plus:</span>
                </li>
                {["Continuous Security Monitoring", "Compliance Mapping (CIS & NIST)", "Professional PDF Exposure Reports", "Automated Remediation Workflows", "Email Support (24h SLA)"].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-foreground/90 font-mono">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a href="/download" className="block w-full text-center px-6 py-4 bg-primary text-black font-semibold hover:bg-primary-bright transition-all text-sm tracking-wide shadow-[0_0_15px_rgba(34,211,238,0.4)] hover:shadow-[0_0_25px_rgba(34,211,238,0.6)]">
                Start Free Trial
              </a>
            </div>

            {/* Enterprise */}
            <div className="border border-border bg-card p-8 flex flex-col hover:border-primary/50 transition-colors">
              <h3 className="text-2xl font-bold text-foreground mb-2">Enterprise</h3>
              <p className="text-xs text-muted-foreground font-mono mb-6">For large orgs requiring total audit assurance.</p>
              <div className="text-4xl font-extrabold text-foreground mb-8">
                Custom
                <span className="text-sm text-muted-foreground font-mono font-normal tracking-wide"> / tailored</span>
              </div>
              <ul className="flex flex-col gap-4 mb-8 flex-grow">
                <li className="flex items-start gap-3 text-sm text-foreground font-mono font-semibold pb-2 border-b border-border/50">
                  <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>Everything in Professional, plus:</span>
                </li>
                {["Multi-Account & Region Scanning", "RBAC & Team Management", "CI/CD Pipeline Integration", "SOC2 & HIPAA Audit-Ready Reporting", "Custom Chaos Experiment Authoring", "Dedicated Technical Account Manager"].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground font-mono">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a href="#" className="block w-full text-center px-6 py-4 bg-transparent text-primary font-semibold hover:bg-primary/5 border border-primary transition-all text-sm tracking-wide">
                Contact Sales
              </a>
            </div>
          </div>

          {/* Security/Trust Section */}
          <div className="max-w-4xl mx-auto border-y border-border py-12 mb-24 text-center">
            <Shield className="w-12 h-12 text-primary mx-auto mb-6 opacity-80" />
            <h3 className="text-2xl font-bold text-foreground mb-4">Zero-Trust by Design</h3>
            <p className="text-muted-foreground font-mono text-sm">
              Lucifer runs <strong className="text-primary font-bold">locally or inside your VPC</strong>. Your security data and infrastructure credentials
              never leave your environment. Utmost privacy for enterprise scaling.
            </p>
          </div>

          {/* Feature Grid */}
          <div className="mb-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-foreground">Why upgrade to Lucifer Pro?</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {[
                { icon: Zap, title: "Impact Verification", text: "Don't just find bugs; prove them with our Chaos Engine. Execute controlled exploits." },
                { icon: Shield, title: "Compliance First", text: "Mapped directly to MITRE ATT&CK® and CIS Benchmarks for easy regulatory audits." },
                { icon: Target, title: "Executive Insights", text: "Rich, interactive Mermaid diagrams and C-suite ready reporting exported directly to PDF." },
                { icon: Activity, title: "Automated Fixes", text: "Code-ready remediation steps and Terraform/CloudFormation snippets for every finding." }
              ].map((f, i) => (
                <div key={i} className="border border-border bg-[#0a0a0a] p-6 flex items-start gap-4 hover:border-primary/50 transition-colors">
                  <div className="bg-[#1a1a1a] p-3 border border-border">
                    <f.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-foreground font-bold mb-2">{f.title}</h4>
                    <p className="text-xs text-muted-foreground font-mono leading-relaxed">{f.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-extrabold text-foreground text-center mb-12">Frequently Asked Questions</h2>
            <div className="flex flex-col gap-4">
              {faqs.map((faq, i) => (
                <div key={i} className="border border-border bg-[#0a0a0a] overflow-hidden">
                  <button 
                    onClick={() => toggleFaq(i)}
                    className="w-full text-left px-6 py-4 flex items-center justify-between font-bold text-foreground hover:bg-[#111]"
                  >
                    {faq.q}
                    {openFaq === i ? <ChevronUp className="w-5 h-5 text-primary" /> : <ChevronDown className="w-5 h-5 text-muted-foreground" />}
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-6 text-sm text-muted-foreground font-mono leading-relaxed border-t border-[#1a1a1a] pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PricingPage;
