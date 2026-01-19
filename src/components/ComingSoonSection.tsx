import { Home, PawPrint, Plane, Heart } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const ComingSoonSection = () => {
  const comingSoonServices = [
    {
      icon: Home,
      title: "DomesticGold",
      description: "Premium domestic cleaning and household management services, bringing the same trusted quality to your home care needs.",
    },
    {
      icon: PawPrint,
      title: "NannyGold Pets",
      description: "Professional pet care services for your furry family members. Trusted pet sitting, walking, and care when you need it.",
    },
    {
      icon: Plane,
      title: "AuPairGold",
      description: "Local au pair placement services, connecting South African families with qualified au pairs for cultural exchange and childcare.",
    },
    {
      icon: Heart,
      title: "SilvernestGold",
      description: "Compassionate senior care services, providing trusted companionship and assistance for your elderly loved ones.",
    },
  ];

  return (
    <section id="coming-soon" className="py-12 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 lg:mb-6">
            <span className="gradient-text">Coming Soon</span>
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            We're expanding our trusted care network. These exciting new services are on the horizon.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {comingSoonServices.map((service, index) => (
            <div
              key={index}
              className="service-card group p-6 lg:p-8 flex flex-col h-full"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'hsl(var(--primary) / 0.3)' }}>
                  <service.icon className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
                </div>
                <Badge className="bg-gradient-to-r from-pink-500 to-orange-500 text-white border-0 px-3 py-1 text-xs font-semibold rounded-md">
                  Coming Soon
                </Badge>
              </div>
              <h3 className="text-xl lg:text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed flex-grow">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComingSoonSection;

