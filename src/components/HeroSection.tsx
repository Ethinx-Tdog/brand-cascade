import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Shield, TrendingUp, Crown } from "lucide-react";
import { useFadeIn } from "@/hooks/useFadeIn";

const scrollToForm = () => {
  document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" });
};

const scrollToHow = () => {
  document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" });
};

const HeroSection = () => {
  const ref = useFadeIn();

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-primary/5 blur-[120px]" />

      <div ref={ref} className="fade-in-section container relative mx-auto px-4 py-20 text-center">
        <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          White-Label Our AI Marketing Engine.{" "}
          <span className="text-gradient-green">Sell It As Your Own.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
          Give your agency AI-powered video generation, ad creation, and campaign automation — branded as YOUR product. Zero development. Infinite margin.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button variant="neon" size="xl" onClick={scrollToForm}>
            Apply for Partnership <ArrowRight className="ml-1 h-5 w-5" />
          </Button>
          <Button variant="ghost-green" size="xl" onClick={scrollToHow}>
            <Play className="mr-1 h-5 w-5" /> See How It Works
          </Button>
        </div>

        {/* Progress bar */}
        <div className="mx-auto mt-14 max-w-md">
          <p className="mb-3 text-sm text-muted-foreground">
            Currently onboarding <span className="font-semibold text-foreground">50 founding partners</span>
          </p>
          <div className="h-3 w-full overflow-hidden rounded-full bg-muted">
            <div className="h-full rounded-full bg-primary transition-all" style={{ width: "62%" }} />
          </div>
          <p className="mt-2 text-xs text-muted-foreground">31 of 50 spots filled</p>
        </div>

        {/* Tier badges */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            <Shield className="h-3.5 w-3.5" /> Founding Partner
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-foreground/20 bg-muted px-4 py-1.5 text-sm font-medium text-foreground">
            <TrendingUp className="h-3.5 w-3.5" /> Growth Partner
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-sm font-medium text-gold">
            <Crown className="h-3.5 w-3.5" /> Enterprise Partner
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
