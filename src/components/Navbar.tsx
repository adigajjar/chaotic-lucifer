import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between max-w-7xl">
        <Link to="/" className="text-2xl font-bold text-primary tracking-tighter">
          LUCIFER
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <a href="/#chaos-engine" className="hover:text-foreground transition-colors">Chaos Engine</a>
          <a href="/#vapt-scanner" className="hover:text-foreground transition-colors">VAPT Scanner</a>
          <a href="/#vuln-chaos" className="hover:text-foreground transition-colors">Vuln-Chaos</a>
          <a href="/#architecture" className="hover:text-foreground transition-colors">Architecture</a>
          <a href="/pricing" className="hover:text-foreground transition-colors">Pricing</a>
          <Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link>
          <a 
            href="/#contact" 
            className="px-6 py-2.5 bg-primary text-primary-foreground font-bold hover:bg-primary-bright transition-colors"
          >
            Secure Your Infrastructure
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-foreground hover:text-primary transition-colors"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background absolute top-20 left-0 w-full flex flex-col px-6 py-4 shadow-lg">
          <a href="/#chaos-engine" className="py-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors border-b border-border/50" onClick={toggleMobileMenu}>Chaos Engine</a>
          <a href="/#vapt-scanner" className="py-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors border-b border-border/50" onClick={toggleMobileMenu}>VAPT Scanner</a>
          <a href="/#vuln-chaos" className="py-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors border-b border-border/50" onClick={toggleMobileMenu}>Vuln-Chaos</a>
          <a href="/#architecture" className="py-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors border-b border-border/50" onClick={toggleMobileMenu}>Architecture</a>
          <a href="/pricing" className="py-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors border-b border-border/50" onClick={toggleMobileMenu}>Pricing</a>
          <Link to="/contact" className="py-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors border-b border-border/50" onClick={toggleMobileMenu}>Contact</Link>
          <a 
            href="/#contact" 
            className="mt-4 px-6 py-3 bg-primary text-primary-foreground font-bold hover:bg-primary-bright transition-colors text-center"
            onClick={toggleMobileMenu}
          >
            Secure Your Infrastructure
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
