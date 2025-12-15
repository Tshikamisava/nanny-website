import { Link } from "react-router-dom";
import { ArrowLeft, Clock, Moon, Sun, Calendar, Home, Sparkles, Check } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const services = [
  {
    id: "emergency",
    icon: Clock,
    title: "Emergency Care",
    price: "From R80/hour",
    description: "When your regular childcare falls through unexpectedly, we're here to help. Our emergency nannies are available on short notice to step in and provide quality care when you need it most.",
    features: [
      "Available within 2-4 hours notice",
      "Vetted and trained professionals",
      "Flexible duration",
      "No long-term commitment required"
    ]
  },
  {
    id: "date-night",
    icon: Moon,
    title: "Date Night Care",
    price: "From R120/hour",
    description: "Enjoy a night out knowing your children are in safe, caring hands. Our date night nannies specialize in evening care, bedtime routines, and keeping little ones entertained.",
    features: [
      "Evening and weekend availability",
      "Experienced with bedtime routines",
      "Minimum 4-hour booking",
      "Perfect for special occasions"
    ]
  },
  {
    id: "daytime",
    icon: Sun,
    title: "Daytime Care",
    price: "From R40/hour",
    description: "Need reliable daytime childcare? Whether it's for work, appointments, or personal time, our daytime nannies provide engaging, educational care during the day.",
    features: [
      "Weekday availability",
      "Age-appropriate activities",
      "Meal preparation included",
      "Homework help for school-age children"
    ]
  },
  {
    id: "gap-coverage",
    icon: Calendar,
    title: "Gap Coverage",
    price: "From R280/day",
    description: "Bridge the gap when your regular nanny is unavailable. Perfect for holidays, sick days, or transitions between caregivers. Consistent, reliable backup when you need it.",
    features: [
      "Covers nanny holidays and sick days",
      "Maintains your routine",
      "Same high standards as regular care",
      "Flexible booking periods"
    ]
  },
  {
    id: "long-term",
    icon: Home,
    title: "Long-term Care",
    price: "From R4,500/month",
    description: "For families needing consistent, ongoing support. Our long-term placements include live-in and live-out options, with nannies who become a trusted part of your family.",
    features: [
      "Live-in or live-out options",
      "Full-time or part-time schedules",
      "Trial period included",
      "Ongoing support and backup nannies"
    ]
  }
];

const addOns = [
  "Light housekeeping",
  "Meal preparation",
  "School runs",
  "Homework assistance",
  "Pet care",
  "Laundry (children's clothing)",
  "Activity planning",
  "Tutoring coordination"
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-hero py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <Link to="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="gradient-text">Engagements</span>
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              From one-time emergencies to long-term placements, we have the perfect childcare solution for your family's unique needs.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-12 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="grid gap-8">
              {services.map((service) => (
                <Card key={service.id} id={service.id} className="border-border/50 hover:border-primary/30 transition-colors">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-fuchsia/20">
                        <service.icon className="w-8 h-8 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                          <CardTitle className="text-2xl">{service.title}</CardTitle>
                          <span className="text-lg font-semibold gradient-text">{service.price}</span>
                        </div>
                        <p className="text-muted-foreground">{service.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Add-Ons Section */}
        <section className="py-12 lg:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-4">
                <span className="gradient-text">Add-On</span> Services
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Customize your care package with additional services to make life easier for your family.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {addOns.map((addOn, idx) => (
                <div key={idx} className="flex items-center gap-2 p-3 rounded-lg bg-background border border-border/50">
                  <Sparkles className="w-4 h-4 text-fuchsia flex-shrink-0" />
                  <span className="text-sm">{addOn}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bespoke Services */}
        <section className="py-12 lg:py-20">
          <div className="container mx-auto px-4">
            <Card className="bg-gradient-to-br from-primary/10 to-fuchsia/10 border-primary/20">
              <CardContent className="p-8 text-center">
                <h2 className="text-3xl font-bold mb-4">
                  Need Something <span className="gradient-text">Bespoke</span>?
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
                  Every family is unique. If you have special requirements or need a customized care plan, we're here to create the perfect solution for you.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-gradient-to-r from-rose-gold to-rose-gold-light hover:opacity-90 gold-shimmer-effect text-white">
                    <a href="tel:+27662733942">Call Us: +27 66 273 3942</a>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <a href="mailto:bespoke@nannygold.co.za">Email Us</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
