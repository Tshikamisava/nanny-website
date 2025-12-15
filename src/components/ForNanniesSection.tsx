import { Button } from "@/components/ui/button";
import { DollarSign, Shield, HeartHandshake } from "lucide-react";
import MovingHighlight from "./MovingHighlight";

const benefits = [
  {
    icon: DollarSign,
    title: "Fair Pay",
    description: "Competitive rates with premium clients who value your expertise"
  },
  {
    icon: Shield,
    title: "Safe Platform",
    description: "Trusted, secure environment with vetted families"
  },
  {
    icon: HeartHandshake,
    title: "Ongoing Support", 
    description: "Resources, training opportunities and dedicated support team"
  }
];

const ForNanniesSection = () => {
  return (
    <section id="for-nannies" className="py-12 lg:py-20 bg-primary text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-rose-gold rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-pink-medium rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Join the 
              <MovingHighlight delay={800}> NannyGold Network</MovingHighlight>
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Are you an experienced nanny looking for premium families who value your expertise?
            </p>
            <p className="text-lg text-white/80 mb-8">
              At NannyGold, we connect trusted caregivers with households that respect and appreciate professional childcare.
            </p>

            <Button 
              asChild
              size="lg"
              className="bg-rose-gold hover:bg-rose-gold-light text-white border-0 px-8 py-4 text-lg"
            >
              <a href="https://app.nannygold.co.za" target="_blank" rel="noopener noreferrer">
                Apply as a Nanny →
              </a>
            </Button>
          </div>

          {/* Benefits */}
          <div className="space-y-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div 
                  key={index}
                  className="flex items-start gap-4 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 bg-rose-gold rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-white/80">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForNanniesSection;