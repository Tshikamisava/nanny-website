import { UserPlus, Calendar, CheckCircle } from "lucide-react";
import MovingHighlight from "./MovingHighlight";

const steps = [
  {
    icon: UserPlus,
    title: "Sign Up",
    description: "Open our app and create your profile in minutes. Tell us about your family's needs and preferences."
  },
  {
    icon: Calendar,
    title: "Book",
    description: "Browse vetted nannies and book directly through our app. Choose from emergency, day, or long-term care."
  },
  {
    icon: CheckCircle,
    title: "Relax",
    description: "Enjoy peace of mind knowing your little ones are cared for by trusted professionals."
  }
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-12 lg:py-20 bg-gradient-soft">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4 lg:mb-6">
            Your Perfect Match in 
            <MovingHighlight delay={600}> 3 Easy Steps</MovingHighlight>
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
            Download our app and start your journey to trusted childcare
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div 
                key={index}
                className="card-premium text-center group relative pt-8 pb-6 px-6 lg:pt-10 lg:pb-8 lg:px-8"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Step Number */}
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-7 h-7 lg:w-8 lg:h-8 bg-rose-gold text-white rounded-full flex items-center justify-center font-bold text-xs lg:text-sm shadow-lg">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-rose rounded-2xl flex items-center justify-center mx-auto mb-4 lg:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md">
                  <Icon className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl lg:text-2xl font-bold text-primary mb-3 lg:mb-4">
                  {step.title}
                </h3>
                <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">
                  {step.description}
                </p>

                {/* Connecting Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 lg:-right-8 w-8 lg:w-16 h-0.5 bg-gradient-to-r from-rose-gold to-transparent" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;