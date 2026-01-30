import { ArrowRight } from "lucide-react";
import { useState, Suspense, lazy } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { z } from "zod";

const Dithering = lazy(() =>
  import("@paper-design/shaders-react").then((mod) => ({ default: mod.Dithering }))
);

const emailSchema = z.string().trim().email({ message: "Please enter a valid email address" });

const CTA = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = emailSchema.safeParse(email);
    if (!result.success) {
      toast({
        title: "Invalid email",
        description: result.error.errors[0].message,
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "You're on the list! 🎉",
      description: "We'll notify you when AI-Stylist launches.",
    });

    setEmail("");
    setIsLoading(false);
  };

  return (
    <section id="waitlist" className="py-24 px-6">
      <div className="container mx-auto">
        <div
          className="relative w-full max-w-5xl mx-auto aspect-[16/10] rounded-3xl overflow-hidden cursor-pointer group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Animated Gradient Background */}
          <div className="absolute inset-0">
            <Suspense
              fallback={
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20" />
              }
            >
              <div className="w-full h-full">
                <Dithering
                  colorFront={"#8c7e74" as any}
                  colorBack={"#241e1c" as any}
                  speed={isHovered ? 2 : 0.5}
                />
              </div>
            </Suspense>
          </div>

          {/* Content Container */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full px-8 py-12 text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse delay-75" />
              </div>
              Limited Early Access
            </div>

            {/* Headline */}
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Ready to Transform <br />
              Your Style?
            </h2>

            {/* Description */}
            <p className="max-w-xl text-lg text-white/70 mb-10">
              Join the waitlist and be the first to experience AI-powered
              personal styling. Be among the first 1,000 to get exclusive early
              access.
            </p>

            {/* Email Form */}
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 w-full max-w-md"
            >
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-12 bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/50"
              />
              <Button
                type="submit"
                size="lg"
                disabled={isLoading}
                className="h-12 px-8 bg-white text-zinc-900 hover:bg-white/90"
              >
                {isLoading ? "Joining..." : "Join Waitlist"}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </form>

            <p className="text-sm text-white/50 mt-4">
              Free to join • No spam • Unsubscribe anytime
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
