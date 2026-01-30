import { Sparkles, Shirt, Wand2, Camera, ShoppingBag } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Kibbe Body Type Analysis",
    description: "Get personalized style recommendations based on your unique body type using the Kibbe system.",
  },
  {
    icon: Shirt,
    title: "Digital Wardrobe",
    description: "Save and organize all your clothes in one place. Never forget what you own again.",
  },
  {
    icon: Wand2,
    title: "Smart Outfit Combinations",
    description: "AI-powered outfit suggestions using your existing wardrobe pieces.",
  },
  {
    icon: Camera,
    title: "Virtual Try-On",
    description: "See how clothes look on you before buying with our AR technology.",
  },
  {
    icon: ShoppingBag,
    title: "Shop Links",
    description: "Find and purchase recommended items instantly with direct shopping links.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 px-6 bg-card">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Everything You Need
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            AI-Stylist combines cutting-edge technology with fashion expertise 
            to transform how you dress.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-background rounded-2xl p-8 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
