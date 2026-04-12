const DownloadSection = () => {
  return (
    <section id="download" className="py-24 px-6">
      <div className="container mx-auto max-w-2xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Get Lucifer
        </h2>
        <p className="text-muted-foreground mb-10">
          Open source. CLI-native. Cloud-agnostic.
        </p>
        <a
          href="#"
          className="inline-flex items-center justify-center px-10 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors glow-red text-lg mb-8"
        >
          Download Latest Release
        </a>
        <div className="code-block max-w-md mx-auto mb-10">
          curl -sSL https://get.lucifer.sh | bash
        </div>
        <div className="flex justify-center gap-3">
          {["AWS Supported", "GCP Supported", "Azure Supported"].map((badge) => (
            <span
              key={badge}
              className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full border border-border"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
