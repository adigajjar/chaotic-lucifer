const Footer = () => {
  return (
    <footer className="bg-background border-t border-border pt-20 pb-12 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
          <div className="md:col-span-1">
            <div className="text-xl font-bold text-primary tracking-tighter mb-4">
              LUCIFER
            </div>
            <p className="text-xs text-muted-foreground/80 font-mono leading-relaxed max-w-[200px]">
              Unleashing Controlled Chaos For<br/>Unshakable Security.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-bold text-foreground mb-6">Product</h4>
            <ul className="space-y-4">
              <li><a href="#chaos-engine" className="text-xs text-muted-foreground hover:text-primary font-mono transition-colors">Chaos Engine</a></li>
              <li><a href="#vapt-scanner" className="text-xs text-muted-foreground hover:text-primary font-mono transition-colors">VAPT Scanner</a></li>
              <li><a href="#vuln-chaos" className="text-xs text-muted-foreground hover:text-primary font-mono transition-colors">Vuln-Chaos</a></li>
              <li><a href="#architecture" className="text-xs text-muted-foreground hover:text-primary font-mono transition-colors">Architecture</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-bold text-foreground mb-6">Resources</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-xs text-muted-foreground hover:text-primary font-mono transition-colors">Documentation</a></li>
              <li><a href="#" className="text-xs text-muted-foreground hover:text-primary font-mono transition-colors">API Reference</a></li>
              <li><a href="#" className="text-xs text-muted-foreground hover:text-primary font-mono transition-colors">CLI Guide</a></li>
              <li><a href="#" className="text-xs text-muted-foreground hover:text-primary font-mono transition-colors">Tutorials</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-bold text-foreground mb-6">Company</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-xs text-muted-foreground hover:text-primary font-mono transition-colors">About</a></li>
              <li><a href="#" className="text-xs text-muted-foreground hover:text-primary font-mono transition-colors">Blog</a></li>
              <li><a href="#" className="text-xs text-muted-foreground hover:text-primary font-mono transition-colors">Careers</a></li>
              <li><a href="#" className="text-xs text-muted-foreground hover:text-primary font-mono transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
