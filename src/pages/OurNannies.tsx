import { Link } from "react-router-dom";
import { ArrowLeft, GraduationCap, Award, Heart, Users, CheckCircle, Phone, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const qualities = [
  {
    icon: GraduationCap,
    title: "Professionally Trained",
    description: "All our nannies complete comprehensive training in child development, safety, and first aid before joining the NannyGold network."
  },
  {
    icon: Award,
    title: "Rigorously Vetted",
    description: "Criminal background checks, reference verification, ID confirmation, and in-person interviews ensure only the best join our team."
  },
  {
    icon: Heart,
    title: "Passionate About Children",
    description: "Our nannies genuinely love working with children. Their passion shows in every interaction and activity they plan."
  },
  {
    icon: Users,
    title: "Experienced Professionals",
    description: "From infant care to homework help, our nannies bring years of experience across all age groups and needs."
  }
];

const trainingModules = [
  "Child development milestones",
  "Age-appropriate activities",
  "First aid & CPR certification",
  "Emergency response protocols",
  "Nutrition and meal preparation",
  "Positive discipline techniques",
  "Communication with parents",
  "Special needs awareness"
];

const benefits = [
  {
    title: "Competitive Pay",
    description: "Earn above-market rates with opportunities for bonuses and long-term placements."
  },
  {
    title: "Flexible Schedule",
    description: "Choose when and how often you work. Full-time, part-time, or on-demand – you decide."
  },
  {
    title: "Ongoing Support",
    description: "Access to training, resources, and a supportive community of fellow professionals."
  },
  {
    title: "Career Growth",
    description: "Build your reputation, gain experience, and advance your childcare career."
  }
];

const OurNannies = () => {
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
              Our <span className="gradient-text">Nannies</span>
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Meet the exceptional caregivers who make NannyGold special. Every nanny in our network is handpicked, trained, and committed to providing outstanding care.
            </p>
          </div>
        </section>

        {/* Qualities Section */}
        <section className="py-12 lg:py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-10 text-center">
              What Makes Our Nannies <span className="gradient-text">Special</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {qualities.map((quality, idx) => (
                <Card key={idx} className="border-border/50 hover:border-primary/30 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-fuchsia/20">
                        <quality.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{quality.title}</h3>
                        <p className="text-muted-foreground">{quality.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Training Section */}
        <section className="py-12 lg:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">
                Our <span className="gradient-text">Training</span> Program
              </h2>
              <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
                Every NannyGold caregiver completes our comprehensive training program covering essential skills for exceptional childcare.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {trainingModules.map((module, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-3 rounded-lg bg-background border border-border/50">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm">{module}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Join the Network Section */}
        <section id="join-network" className="py-12 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">
                Join the <span className="gradient-text">NannyGold Network</span>
              </h2>
              <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
                Are you a passionate, experienced nanny looking for rewarding opportunities? Join our network of exceptional caregivers and take your career to the next level.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-10">
                {benefits.map((benefit, idx) => (
                  <Card key={idx} className="border-border/50">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                      <p className="text-muted-foreground text-sm">{benefit.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="bg-gradient-to-br from-primary/10 to-fuchsia/10 border-primary/20">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold mb-4">Ready to Apply?</h3>
                  <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                    We're always looking for caring, reliable professionals to join our team. Get in touch to start your application process.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild size="lg" className="bg-gradient-to-r from-primary to-fuchsia hover:opacity-90">
                      <a href="tel:+27694683255">
                        <Phone className="w-4 h-4 mr-2" />
                        Call: 069 468 3255
                      </a>
                    </Button>
                    <Button asChild variant="outline" size="lg">
                      <a href="mailto:care@nannygold.co.za">
                        <Mail className="w-4 h-4 mr-2" />
                        Email Us
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default OurNannies;
