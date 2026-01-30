import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { z } from "zod";

const emailSchema = z.string().trim().email({ message: "Please enter a valid email address" });

const Hero = () => {
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
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "You're on the list! 🎉",
      description: "We'll notify you when AI-Stylist launches.",
    });
    
    setEmail("");
    setIsLoading(false);
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 pb-20 px-6">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight">
                Your Personal
                <br />
                <span className="text-primary">AI Stylist</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0">
                Discover your unique style with Kibbe body type analysis, 
                organize your wardrobe, and get personalized outfit recommendations.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto lg:mx-0">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-12 bg-card border-border"
              />
              <Button 
                type="submit" 
                size="lg"
                disabled={isLoading}
                className="h-12 px-8"
              >
                {isLoading ? "Joining..." : "Join Waitlist"}
              </Button>
            </form>

            <p className="text-sm text-muted-foreground">
              Join 2,500+ style enthusiasts already on the waitlist
            </p>
          </div>

          {/* Right - Phone Mockup */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Phone Frame */}
              <div className="relative w-[280px] h-[580px] bg-foreground rounded-[3rem] p-3 shadow-2xl">
                <div className="absolute top-8 left-1/2 -translate-x-1/2 w-20 h-6 bg-foreground rounded-full z-10" />
                <div className="w-full h-full bg-card rounded-[2.5rem] overflow-hidden">
                  {/* Mock App Screen */}
                  <div className="p-6 space-y-6">
                    <div className="text-center pt-8">
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">Your Style Profile</p>
                      <h3 className="text-lg font-semibold mt-2">Soft Natural</h3>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="bg-accent rounded-xl p-4">
                        <p className="text-xs text-muted-foreground">Today's Outfit</p>
                        <p className="text-sm font-medium mt-1">Casual Chic Look</p>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-2">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="aspect-square bg-secondary rounded-lg" />
                        ))}
                      </div>
                      
                      <div className="bg-accent rounded-xl p-4">
                        <p className="text-xs text-muted-foreground">Wardrobe Items</p>
                        <p className="text-2xl font-bold mt-1">48</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-accent/50 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
