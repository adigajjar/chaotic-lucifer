import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between max-w-7xl">
        <Link to="/" className="text-2xl font-bold text-primary tracking-tighter">
          LUCIFER
        </Link>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <a href="#chaos-engine" className="hover:text-foreground transition-colors">Chaos Engine</a>
          <a href="#vapt-scanner" className="hover:text-foreground transition-colors">VAPT Scanner</a>
          <a href="#vuln-chaos" className="hover:text-foreground transition-colors">Vuln-Chaos</a>
          <a href="#architecture" className="hover:text-foreground transition-colors">Architecture</a>
          <a href="/pricing" className="hover:text-foreground transition-colors">Pricing</a>
          <a 
            href="#contact" 
            className="px-6 py-2.5 bg-primary text-primary-foreground font-bold hover:bg-primary-bright transition-colors"
          >
            Secure Your Infrastructure
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
