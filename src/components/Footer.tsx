const Footer = () => (
  <footer className="border-t border-border py-10">
    <div className="container mx-auto flex flex-col items-center gap-6 px-4 text-center sm:flex-row sm:justify-between sm:text-left">
      <div className="text-xl font-bold tracking-tight">
        ETHINX<span className="text-primary">.</span>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
        <a href="#" className="transition-colors hover:text-foreground">Privacy</a>
        <a href="#" className="transition-colors hover:text-foreground">Terms</a>
        <a href="#" className="transition-colors hover:text-foreground">Contact</a>
        <a href="#" className="transition-colors hover:text-foreground">Partner Login</a>
      </div>
      <p className="text-xs text-muted-foreground">© 2025 ETHINX Systems. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
