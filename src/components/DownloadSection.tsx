import ScrollReveal from "./ScrollReveal";

const DownloadSection = () => {
  return (
    <section id="download" className="relative py-28 px-6 bg-red-gradient">
      <div className="scanlines" />
      <div className="container mx-auto max-w-2xl text-center relative z-10">
        <ScrollReveal>
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4 tracking-tight">
            Get Lucifer
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <p className="text-muted-foreground mb-12 text-lg">
            Open source. CLI-native. Cloud-agnostic.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <a
            href="#"
            className="inline-flex items-center justify-center px-14 py-5 bg-primary text-primary-foreground font-extrabold rounded-lg pulse-glow transition-all text-xl tracking-wide mb-10"
          >
            Download Latest Release
          </a>
        </ScrollReveal>

        {/* Terminal block */}
        <ScrollReveal delay={300}>
          <div className="relative max-w-lg mx-auto mb-12 rounded-lg overflow-hidden border border-border">
            {/* Terminal header */}
            <div className="bg-secondary/80 px-4 py-2 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-primary/60" />
              <div className="w-3 h-3 rounded-full bg-muted-foreground/30" />
              <div className="w-3 h-3 rounded-full bg-muted-foreground/30" />
              <span className="ml-2 text-xs text-muted-foreground font-mono">terminal</span>
            </div>
            {/* Terminal body */}
            <div className="bg-muted/80 px-6 py-5 font-mono text-sm text-left relative">
              <div className="scanlines" style={{ opacity: 0.3 }} />
              <span className="text-muted-foreground">$</span>{" "}
              <span className="text-primary">curl -sSL https://get.lucifer.sh | bash</span>
              <span className="terminal-cursor" />
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={400}>
          <div className="flex justify-center gap-3">
            {["AWS Supported", "GCP Supported", "Azure Supported"].map((badge) => (
              <span
                key={badge}
                className="px-4 py-1.5 text-xs font-bold bg-secondary/60 text-secondary-foreground rounded-full border border-border/60 tracking-wide"
              >
                {badge}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default DownloadSection;
