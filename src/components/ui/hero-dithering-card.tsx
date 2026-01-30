import { ArrowRight } from "lucide-react"
import { useState, Suspense, lazy } from "react"

const Dithering = lazy(() => 
  import("@paper-design/shaders-react").then((mod) => ({ default: mod.Dithering }))
)

export function CTASection() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-8 bg-background">
      {/* Main Card */}
      <div 
        className="relative w-full max-w-5xl aspect-[16/10] rounded-3xl overflow-hidden cursor-pointer group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Animated Gradient Background */}
        <div className="absolute inset-0">
          <Suspense fallback={<div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20" />}>
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
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8"
          >
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse delay-75" />
            </div>
            AI-Powered Writing
          </div>

          {/* Headline */}
          <h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
          >
            Your words, <br />
            delivered perfectly.
          </h1>
          
          {/* Description */}
          <p 
            className="max-w-xl text-lg text-white/70 mb-10"
          >
            Join 2,847 founders using the only AI that understands the nuance of your voice. 
            Clean, precise, and uniquely yours.
          </p>

          {/* Button */}
          <button className="group/btn flex items-center gap-2 px-8 py-4 bg-white text-zinc-900 rounded-full font-semibold text-lg hover:bg-white/90 transition-all duration-300 hover:gap-4">
            Start Typing
            <ArrowRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-1" />
          </button>
        </div>

      </div>
    </div>
  )
}
