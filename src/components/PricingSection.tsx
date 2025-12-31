import { Check, Info, Clock, Heart, Home, Calendar, Star } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import MovingHighlight from "@/components/MovingHighlight";
const services = [{
  icon: Clock,
  title: "Emergency Care",
  description: "Last-minute childcare when you need it most",
  price: "From R80/hour",
  gradient: "from-rose-500 to-pink-600",
  features: ["24/7 availability", "Minimum 5 hours", "Immediate response"]
}, {
  icon: Heart,
  title: "Date Night Care",
  description: "Enjoy your evening while your children are in safe hands",
  price: "From R120/hour",
  gradient: "from-purple-500 to-fuchsia-600",
  features: ["Evening availability", "Minimum 3 hours", "Trusted nannies"]
}, {
  icon: Home,
  title: "Daytime Care",
  description: "Regular daytime childcare for working parents",
  price: "From R40/hour",
  gradient: "from-blue-500 to-indigo-600",
  features: ["Flexible hours", "Educational activities", "Meal preparation"]
}, {
  icon: Calendar,
  title: "Gap Coverage",
  description: "Short-term coverage for school holidays or nanny leave",
  price: "From R280/day",
  gradient: "from-cyan-500 to-teal-600",
  features: ["5+ consecutive days", "Full day coverage", "No service fee"]
}, {
  icon: Star,
  title: "Long-term Care",
  description: "Monthly arrangements for ongoing childcare needs",
  price: "From R4,500/month",
  gradient: "from-orange-500 to-amber-600",
  features: ["Live-in or live-out", "Placement service", "Ongoing support"]
}];
const PricingSection = () => {
  return <section id="pricing" className="py-12 lg:py-20 bg-gradient-soft">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 lg:mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            Tailored Care, 
            <span className="gradient-text">
              <MovingHighlight delay={400}>
                Transparent Pricing
              </MovingHighlight>
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Every family is unique. Our pricing is based on the size of your household and the services you need. Choose only what's right for you.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="max-w-6xl mx-auto mb-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
            const Icon = service.icon;
            return <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold text-primary mb-4">{service.price}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Check className="w-4 h-4 text-primary flex-shrink-0" />
                          <span>{feature}</span>
                        </li>)}
                    </ul>
                  </CardContent>
                </Card>;
          })}
          </div>
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <p className="text-muted-foreground mb-6 text-lg">
              Pricing factors include:
            </p>
            <TooltipProvider>
              <div className="flex flex-wrap justify-center gap-4">
                {["Home Size", "Family Size"].map((factor, index) => <span key={index} className="bg-white border border-border px-6 py-3 rounded-full text-sm text-muted-foreground shadow-sm hover:shadow-md transition-shadow duration-300">
                    {factor}
                  </span>)}
                
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span className="bg-white border border-border px-6 py-3 rounded-full text-sm text-muted-foreground shadow-sm hover:shadow-md transition-shadow duration-300 cursor-help flex items-center gap-2">
                      Add-On Services
                      <Info size={14} className="text-primary" />
                    </span>
                  </TooltipTrigger>
                  <TooltipContent>
                    <div className="text-sm">
                      <p className="font-medium mb-2">Available Add-Ons:</p>
                      <ul className="space-y-1">
                        <li>• Cooking</li>
                        <li>• Driving</li>
                        <li>• Diverse Ability Care</li>
                      </ul>
                    </div>
                  </TooltipContent>
                </Tooltip>
              </div>
            </TooltipProvider>
          </div>
        </div>
      </div>
    </section>;
};
export default PricingSection;