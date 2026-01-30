import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { z } from "zod";

const emailSchema = z.string().trim().email({ message: "Please enter a valid email address" });

const CTA = () => {
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
    <section id="waitlist" className="py-24 px-6 bg-card">
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Transform Your Style?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join the waitlist and be the first to experience AI-powered personal styling.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-6">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 h-12 bg-background border-border"
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
            Free to join • No spam • Unsubscribe anytime
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
