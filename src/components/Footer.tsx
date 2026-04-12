const Footer = () => {
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="container mx-auto max-w-5xl flex justify-between items-center">
      <div className="container mx-auto max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-sm font-bold text-foreground tracking-wider">LUCIFER</span>
        <span className="text-xs text-muted-foreground font-mono">
          Built for DevSecOps Engineers
        </span>
      </div>
    </footer>
  );
};

export default Footer;
