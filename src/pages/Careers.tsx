import { Link } from "react-router-dom";
import { ArrowLeft, Briefcase, DollarSign, Heart, Sparkles, CheckCircle, Phone, Mail, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const benefits = [
  {
    icon: DollarSign,
    title: "Competitive Salary",
    description: "We offer market-competitive compensation packages with performance bonuses."
  },
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive health benefits and wellness programs to support your wellbeing."
  },
  {
    icon: Sparkles,
    title: "Professional Development",
    description: "Continuous learning opportunities, training programs, and career growth paths."
  },
  {
    icon: Users,
    title: "Great Team Culture",
    description: "Work with passionate, dedicated professionals in a supportive environment."
  }
];

const values = [
  "Passion for making a difference",
  "Strong communication skills",
  "Problem-solving mindset",
  "Team collaboration",
  "Adaptability and growth mindset",
  "Commitment to excellence"
];

const Careers = () => {
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
              Join Our <span className="gradient-text">Team</span>
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Help us transform childcare in South Africa. We're building a team of passionate professionals who want to make a real difference in families' lives.
            </p>
          </div>
        </section>

        {/* Why Work Here Section */}
        <section className="py-12 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-4">
                Why Work at <span className="gradient-text">NannyGold</span>?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We're a fast-growing startup with a mission to make quality childcare accessible to every family. Join us and be part of something meaningful.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {benefits.map((benefit, idx) => (
                <Card key={idx} className="border-border/50 hover:border-primary/30 transition-colors">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-fuchsia/20 flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground text-sm">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions Section */}
        <section className="py-12 lg:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-4">
                Open <span className="gradient-text">Positions</span>
              </h2>
            </div>
            <div className="max-w-2xl mx-auto">
              <Card className="border-border/50 bg-gradient-to-br from-primary/5 to-fuchsia/5">
                <CardContent className="p-8 lg:p-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-fuchsia/20 flex items-center justify-center mx-auto mb-6">
                    <Briefcase className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">No Current Vacancies</h3>
                  <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                    We don't have any open positions at the moment, but we're always growing and looking for talented individuals to join our team. Please keep checking our page for new opportunities.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Interested in working with us? Feel free to send us your resume using the contact information below.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* What We Look For Section */}
        <section className="py-12 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">
                What We're <span className="gradient-text">Looking For</span>
              </h2>
              <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
                While specific roles have different requirements, we value these qualities in all team members:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {values.map((value, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 rounded-lg bg-muted/50 border border-border/50">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Application Section */}
        <section className="py-12 lg:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="bg-gradient-to-br from-primary/10 to-fuchsia/10 border-primary/20">
                <CardContent className="p-8 lg:p-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-fuchsia/20 flex items-center justify-center mx-auto mb-6">
                    <Briefcase className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold mb-4">Don't See a Role That Fits?</h2>
                  <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                    We're always interested in connecting with talented people. Even if there's no current opening that matches your skills, we'd love to hear from you. Send us your resume and let's start a conversation.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild size="lg" className="bg-gradient-to-r from-rose-gold to-rose-gold-light hover:opacity-90 gold-shimmer-effect text-white">
                      <a href="mailto:care@nannygold.co.za?subject=General Application">
                        <Mail className="w-4 h-4 mr-2" />
                        Send Your Resume
                      </a>
                    </Button>
                    <Button asChild variant="outline" size="lg">
                      <a href="tel:+27662733942">
                        <Phone className="w-4 h-4 mr-2" />
                        Call: +27 66 273 3942
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

export default Careers;
