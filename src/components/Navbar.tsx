import { Button } from "@/components/ui/button";

const scrollToForm = () => {
  document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" });
};

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
    <div className="container mx-auto flex h-16 items-center justify-between px-4">
      <div className="text-xl font-bold tracking-tight">
        ETHINX<span className="text-primary">.</span>
      </div>
      <div className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
        <a href="#features" className="transition-colors hover:text-foreground">Features</a>
        <a href="#tiers" className="transition-colors hover:text-foreground">Pricing</a>
        <a href="#calculator" className="transition-colors hover:text-foreground">Revenue</a>
        <a href="#faq" className="transition-colors hover:text-foreground">FAQ</a>
      </div>
      <Button variant="neon" size="sm" onClick={scrollToForm}>Apply Now</Button>
    </div>
  </nav>
);

export default Navbar;
