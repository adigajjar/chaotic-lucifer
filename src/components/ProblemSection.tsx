import { ShieldAlert, Zap, Link2 } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const problems = [
  {
    icon: ShieldAlert,
    text: "Security scanners find what's wrong. They don't show you what breaks.",
  },
  {
    icon: Zap,
    text: "Chaos tools test failure. They don't know what caused it.",
  },
  {
    icon: Link2,
    text: "No tool connects a vulnerability to its operational impact. Until now.",
  },
];

const ProblemSection = () => {
  return (
    <section className="relative py-28 px-6">
      <div className="container mx-auto max-w-5xl">
        <ScrollReveal>
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-16 text-center tracking-tight">
            The Gap Nobody is Solving
          </h2>
        </ScrollReveal>
        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((item, i) => (
            <ScrollReveal key={i} delay={i * 120}>
              <div className="relative group bg-card/60 backdrop-blur-sm border border-border rounded-lg p-8 border-l-4 border-l-primary card-glow overflow-hidden h-full">
                {/* Faded background icon */}
                <item.icon className="absolute top-4 right-4 w-20 h-20 text-primary/[0.06] group-hover:text-primary/[0.12] transition-colors" />
                <item.icon className="w-6 h-6 text-primary mb-5 relative z-10" />
                <p className="text-secondary-foreground leading-relaxed text-sm relative z-10">
                  {item.text}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
