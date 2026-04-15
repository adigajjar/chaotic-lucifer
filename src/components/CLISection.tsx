import { TerminalSquare } from "lucide-react";

const quickStarts = [
  { cmd: "$ lucifer signup", desc: "Create account and store API token" },
  { cmd: "$ lucifer aws-connect", desc: "Configure AWS credentials" },
  { cmd: "$ lucifer create-experiment", desc: "Launch chaos experiment" },
  { cmd: "$ lucifer start", desc: "Start control plane" },
];

const CLISection = () => {
  return (
    <section
      id="cli"
      className="relative py-24 px-6 bg-[#030303] border-t border-border"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 border border-primary px-3 py-1 bg-primary/5 rounded-none mb-6">
            <TerminalSquare className="w-3.5 h-3.5 text-primary" />
            <span className="text-primary text-xs font-mono tracking-wide">
              DevSecOps Integration
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4 tracking-tighter">
            Command-Line Interface
          </h2>
          <p className="text-muted-foreground/80 max-w-2xl text-sm md:text-base font-mono">
            Integrate Lucifer into your CI/CD pipeline with our powerful CLI.
          </p>
        </div>

        {/* Terminal Window */}
        <div className="w-full bg-[#0a0a0a] border border-border rounded-md overflow-hidden mb-12 shadow-2xl">
          {/* Mac window header */}
          <div className="bg-[#1a1a1a] border-b border-border px-4 py-3 flex items-center gap-2">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
            </div>
            <div className="mx-auto text-[#666] text-xs font-mono flex items-center gap-2">
              <TerminalSquare className="w-3 h-3" />
              lucifer --help
            </div>
          </div>

          {/* Terminal content */}
          <div className="p-6 md:p-8 text-xs md:text-sm font-mono leading-relaxed overflow-x-auto text-left">
            <div className="text-primary font-bold mb-6">
              Chaos Engineering CLI
            </div>

            <div className="text-primary mb-2">Usage:</div>
            <div className="ml-4 text-foreground mb-6">lucifer [command]</div>

            <div className="text-primary mb-2">Available Commands:</div>
            <div className="grid grid-cols-[160px_1fr] md:grid-cols-[200px_1fr] gap-x-4 gap-y-2 ml-4 text-foreground mb-6">
              <div className="text-primary">audit</div>
              <div className="text-muted-foreground">
                Audit commands for scanning and attacking infrastructure
              </div>
              <div className="text-primary">completion</div>
              <div className="text-muted-foreground">
                Generate the autocompletion script for the specified shell
              </div>
              <div className="text-primary">create-agent</div>
              <div className="text-muted-foreground">Create agent</div>
              <div className="text-primary">create-experiment</div>
              <div className="text-muted-foreground">Create experiment</div>
              <div className="text-primary">expose</div>
              <div className="text-muted-foreground">Expose control plane</div>
              <div className="text-primary">help</div>
              <div className="text-muted-foreground">
                Help about any command
              </div>
              <div className="text-primary">login</div>
              <div className="text-muted-foreground">
                Authenticate with an existing API token
              </div>
              <div className="text-primary">signup</div>
              <div className="text-muted-foreground">
                Create a new user and store API token
              </div>
              <div className="text-primary">start</div>
              <div className="text-muted-foreground">Start control plane</div>
            </div>

            <div className="text-primary mb-2">Flags:</div>
            <div className="ml-4 text-primary mb-6">
              -h, --help{" "}
              <span className="text-muted-foreground">help for lucifer</span>
            </div>

            <div className="text-foreground">
              Use "lucifer [command] --help" for more information about a
              command.
            </div>
          </div>
        </div>

        {/* Quick Starts */}
        <h3 className="text-center text-foreground font-bold font-mono mb-8">
          Quick Start Examples
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {quickStarts.map((item, i) => (
            <div
              key={i}
              className="border border-border bg-[#0a0a0a] p-4 flex flex-col gap-3"
            >
              <div className="text-primary text-xs font-mono">{item.cmd}</div>
              <div className="text-[10px] text-muted-foreground font-mono leading-relaxed">
                {item.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CLISection;
