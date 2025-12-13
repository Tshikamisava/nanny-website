import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { Clock, Calendar, Heart, Home, MapPin, Construction, Sparkles, Info } from "lucide-react";
import MovingHighlight from "@/components/MovingHighlight";

const ServicesSection = () => {
  const shortTermServices = [
    {
      icon: Clock,
      title: "Emergency Booking",
      description: "A nanny to your home within 3 hours.",
      time: "3 hours",
      addOns: "Cooking, Transportation, Special Needs Care"
    },
    {
      icon: Calendar,
      title: "Day Booking",
      description: "Book a professional nanny for the day.",
      time: "Full day",
      addOns: "Cooking, Light Housekeeping, Transportation"
    },
    {
      icon: Heart,
      title: "Date Night Booking",
      description: "Trusted care so you can enjoy your evening out.",
      time: "Evening",
      addOns: "Late Night Care, Light Meal Prep"
    },
    {
      icon: Construction,
      title: "Gap Cover",
      description: "A minimum of 5 consecutive days to help during transitional periods.",
      time: "5+ days",
      addOns: "Full Household Support, Cooking, Transportation, Educational Activities"
    },
  ];

  const longTermServices = [
    {
      icon: Home,
      title: "Live-In Nannies",
      description: "Full-time, in-home support for your family's daily needs.",
      commitment: "Full-time",
      addOns: "Cooking, Light Housekeeping, Transportation, Educational Activities, Special Needs Care"
    },
    {
      icon: MapPin,
      title: "Live-Out Nannies",
      description: "Professional care while living independently.",
      commitment: "Long-term",
      addOns: "Cooking, Transportation, Educational Activities, Special Needs Care"
    },
  ];

  return (
    <TooltipProvider>
      <section id="services" className="py-12 lg:py-20 bg-gradient-soft">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-4 lg:mb-6">
            Childcare that{" "}
            <span className="gradient-text">
              <MovingHighlight delay={500}>
                Fits Your Life
              </MovingHighlight>
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            From emergency care to long-term support, flexible solutions for your family.
          </p>
        </div>

        <Tabs defaultValue="short-term" className="w-full max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8 lg:mb-12 bg-card border border-border p-0 h-auto">
            <TabsTrigger 
              value="short-term" 
              className="text-base lg:text-lg py-3 lg:py-4 data-[state=active]:bg-purple-700 data-[state=active]:text-white rounded-none first:rounded-l-md transition-all duration-300"
            >
              Short Term
            </TabsTrigger>
            <TabsTrigger 
              value="long-term" 
              className="text-base lg:text-lg py-3 lg:py-4 data-[state=active]:bg-purple-700 data-[state=active]:text-white rounded-none last:rounded-r-md transition-all duration-300"
            >
              Long Term
            </TabsTrigger>
          </TabsList>

          <TabsContent value="short-term" className="space-y-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {shortTermServices.map((service, index) => (
                <div key={index} className="service-card group">
                  <div className="flex items-center justify-between mb-4">
                    <service.icon className="w-8 h-8 text-rose-gold group-hover:animate-pulse transition-all duration-300" />
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-muted-foreground bg-muted px-3 py-1 rounded-full">
                        {service.time}
                      </span>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <div className="w-6 h-6 bg-gradient-to-br from-rose-gold to-rose-gold-light rounded-full flex items-center justify-center cursor-help hover:scale-110 transition-transform duration-300 shadow-sm">
                            <Info className="w-3 h-3 text-white" />
                          </div>
                        </TooltipTrigger>
                        <TooltipContent className="max-w-xs p-3 bg-white border border-rose-gold/20 shadow-xl">
                          <p className="text-sm text-muted-foreground font-medium mb-1">Available Add-Ons:</p>
                          <p className="text-xs text-muted-foreground">{service.addOns}</p>
                        </TooltipContent>
                      </Tooltip>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="long-term" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
              {longTermServices.map((service, index) => (
                <div key={index} className="service-card group p-8 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-6">
                    <service.icon className="w-10 h-10 text-rose-gold group-hover:animate-pulse transition-all duration-300" />
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-muted-foreground bg-muted px-3 py-1 rounded-full">
                        {service.commitment}
                      </span>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <div className="w-6 h-6 bg-gradient-to-br from-rose-gold to-rose-gold-light rounded-full flex items-center justify-center cursor-help hover:scale-110 transition-transform duration-300 shadow-sm">
                            <Info className="w-3 h-3 text-white" />
                          </div>
                        </TooltipTrigger>
                        <TooltipContent className="max-w-xs p-3 bg-white border border-rose-gold/20 shadow-xl">
                          <p className="text-sm text-muted-foreground font-medium mb-1">Available Add-Ons:</p>
                          <p className="text-xs text-muted-foreground">{service.addOns}</p>
                        </TooltipContent>
                      </Tooltip>
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed flex-grow">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </TabsContent>

          {/* Bespoke Services */}
          <div className="mt-12 lg:mt-16 text-center">
            <div className="max-w-2xl mx-auto p-6 lg:p-8 bg-gradient-to-r from-primary/10 via-pink-medium/10 to-rose-gold/10 rounded-2xl border border-rose-gold/20">
              <Sparkles className="w-10 h-10 lg:w-12 lg:h-12 text-rose-gold mx-auto mb-4 animate-pulse" />
              <h3 className="text-xl lg:text-2xl font-semibold text-foreground mb-3 lg:mb-4">
                Bespoke Services
              </h3>
              <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
                Custom care plans when your family's needs are unique. 
                Let us create the perfect solution for your lifestyle.
              </p>
            </div>
          </div>
        </Tabs>
        </div>
      </section>
    </TooltipProvider>
  );
};

export default ServicesSection;