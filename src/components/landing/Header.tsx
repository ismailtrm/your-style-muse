import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-xl font-semibold tracking-tight text-foreground">
            AI-Stylist
          </span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => scrollToSection("features")}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Features
          </button>
          <button 
            onClick={() => scrollToSection("how-it-works")}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            How It Works
          </button>
          <Button 
            onClick={() => scrollToSection("waitlist")}
            size="sm"
          >
            Join Waitlist
          </Button>
        </nav>

        <Button 
          onClick={() => scrollToSection("waitlist")}
          size="sm"
          className="md:hidden"
        >
          Join Waitlist
        </Button>
      </div>
    </header>
  );
};

export default Header;
