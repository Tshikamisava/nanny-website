import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import MovingHighlight from "@/components/MovingHighlight";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-rose-gold/30" />
        <div className="absolute top-0 left-0 w-full h-full opacity-15">
          <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-rose-gold rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-pink-medium rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-28 h-28 bg-rose-gold/15 rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/3 left-1/3 w-24 h-24 bg-pink-medium/15 rounded-full animate-float" style={{ animationDelay: '6s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto animate-slide-up">
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 lg:mb-6 text-shadow-soft">
            Find Trusted
            <span className="block gradient-text">
              <MovingHighlight delay={1000}>
                Nannies. Fast.
              </MovingHighlight>
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-6 lg:mb-8 max-w-2xl mx-auto leading-relaxed">
            We connect families with vetted, professional nannies that fit your lifestyle.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              asChild
              size="lg"
              className="btn-hero text-lg px-8 py-4 animate-glow"
            >
              <a href="https://app.nannygold.co.za" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                Find Your Perfect Nanny
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 lg:mt-12 grid grid-cols-3 gap-4 lg:gap-8 max-w-md mx-auto text-white/80 text-sm">
            <div className="text-center">
              <div className="font-semibold text-base lg:text-lg text-white">100%</div>
              <div className="text-xs lg:text-sm">Vetted</div>
            </div>
            <div className="text-center">
              <div className="font-semibold text-base lg:text-lg text-white">24/7</div>
              <div className="text-xs lg:text-sm">Support</div>
            </div>
            <div className="text-center">
              <div className="font-semibold text-base lg:text-lg text-white">Premium</div>
              <div className="text-xs lg:text-sm">Care</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;