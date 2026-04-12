const problems = [
  "Security scanners find what's wrong. They don't show you what breaks.",
  "Chaos tools test failure. They don't know what caused it.",
  "No tool connects a vulnerability to its operational impact. Until now.",
];

const ProblemSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-14 text-center">
          The Gap Nobody is Solving
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((text, i) => (
            <div
              key={i}
              className="bg-card border border-border rounded-lg p-6 border-l-4 border-l-primary"
            >
              <p className="text-secondary-foreground leading-relaxed text-sm">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
