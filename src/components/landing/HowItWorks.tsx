const steps = [
  {
    step: "01",
    title: "Analyze Your Style",
    description: "Complete a quick assessment to discover your Kibbe body type and personal style profile.",
  },
  {
    step: "02",
    title: "Build Your Wardrobe",
    description: "Upload photos of your clothes to create your digital wardrobe collection.",
  },
  {
    step: "03",
    title: "Get Recommendations",
    description: "Receive personalized outfit combinations and new pieces that complement your style.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get started with AI-Stylist in three simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {steps.map((item, index) => (
            <div key={index} className="text-center">
              <div className="relative mb-8">
                <span className="text-7xl font-bold text-primary/10">
                  {item.step}
                </span>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-6 lg:-right-10 w-8 lg:w-16 h-px bg-border" />
                )}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
