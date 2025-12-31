import { Shield, Star, Users, Heart } from "lucide-react";
import MovingHighlight from "@/components/MovingHighlight";
import NannyGoldBrand from "@/components/NannyGoldBrand";

const features = [
  {
    icon: Shield,
    title: "Trust & Safety",
    description: "Every nanny is carefully vetted, trained in child development, first aid and home keeping, and verified.",
    highlight: "100% Verified"
  },
  {
    icon: Star,
    title: "Premium Quality",
    description: "We only work with professional child and home care givers who meet our high standards of care, and continue their professional development throughout their service to you.",
    highlight: "Premium Standards"
  },
  {
    icon: Users,
    title: "Tailored Matching",
    description: "From one-time emergencies to consistent, long-term support, we match you with vetted, trained, and trustworthy nannies who show up when you need them. It's care that works around your life, not the other way around.",
    highlight: "Perfect Fit"
  },
  {
    icon: Heart,
    title: "Always Supported, Never Alone",
    description: "With NannyGold, your nanny is part of a caring community—always guided, supported, and trained—so your family enjoys seamless, exceptional care every day.",
    highlight: "Caring Community"
  }
];

const WhyChooseUsSection = () => {
  return (
    <section id="why-choose-us" className="py-12 lg:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 lg:mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight pb-2">
            The <span className="gradient-text">
              <MovingHighlight delay={300}>
                <NannyGoldBrand size="xl" className="inline-block" /> Promise
              </MovingHighlight>
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Premium care backed by unwavering commitment to excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="card-premium group text-center lg:text-left relative overflow-hidden"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-pink-soft/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="flex items-center justify-center mb-6">
                    <div className="w-16 h-16 bg-gradient-rose rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-primary mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 border border-transparent group-hover:border-rose-gold/30 rounded-2xl transition-colors duration-300" />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUsSection;