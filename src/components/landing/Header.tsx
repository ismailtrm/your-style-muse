import { FloatingNav } from "@/components/ui/floating-navbar";
import { Home, Sparkles, Zap } from "lucide-react";

const Header = () => {
  const navItems = [
    {
      name: "Features",
      link: "#features",
      icon: <Sparkles className="h-4 w-4" />,
    },
    {
      name: "How It Works",
      link: "#how-it-works",
      icon: <Zap className="h-4 w-4" />,
    },
  ];

  return (
    <>
      {/* Static header for top of page */}
      <header className="absolute top-0 left-0 right-0 z-40 bg-transparent">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-semibold tracking-tight text-foreground">
              AI-Stylist
            </span>
          </div>
        </div>
      </header>

      {/* Floating nav that appears on scroll */}
      <FloatingNav navItems={navItems} />
    </>
  );
};

export default Header;
