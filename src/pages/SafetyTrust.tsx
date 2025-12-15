import { Link } from "react-router-dom";
import { ArrowLeft, Shield, FileCheck, UserCheck, Eye, Phone, BadgeCheck, Lock, HeartHandshake } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const vettingSteps = [
  {
    step: 1,
    icon: FileCheck,
    title: "Document Verification",
    description: "We verify identity documents, qualifications, and certifications to ensure authenticity and legitimacy."
  },
  {
    step: 2,
    icon: Shield,
    title: "Criminal Background Check",
    description: "Comprehensive criminal record checks through official channels to ensure a clean history."
  },
  {
    step: 3,
    icon: UserCheck,
    title: "Reference Verification",
    description: "We contact previous employers and personal references to verify work history and character."
  },
  {
    step: 4,
    icon: Eye,
    title: "In-Person Interview",
    description: "Face-to-face interviews assess personality, communication skills, and suitability for childcare."
  },
  {
    step: 5,
    icon: BadgeCheck,
    title: "Skills Assessment",
    description: "Practical assessments evaluate childcare knowledge, safety awareness, and problem-solving abilities."
  },
  {
    step: 6,
    icon: HeartHandshake,
    title: "Trial & Onboarding",
    description: "Supervised trial periods and comprehensive onboarding ensure nannies meet our high standards."
  }
];

const safetyCommitments = [
  {
    icon: Lock,
    title: "Data Protection",
    description: "Your personal information is encrypted and protected. We comply with POPIA and never share your data without consent."
  },
  {
    icon: Phone,
    title: "24/7 Support",
    description: "Our team is available around the clock for emergencies, concerns, or any issues that may arise."
  },
  {
    icon: Shield,
    title: "Insurance Coverage",
    description: "All our nannies are covered by liability insurance for your peace of mind."
  },
  {
    icon: Eye,
    title: "Ongoing Monitoring",
    description: "Regular check-ins, feedback collection, and performance reviews ensure continued excellence."
  }
];

const SafetyTrust = () => {
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
              Safety & <span className="gradient-text">Trust</span>
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Your family's safety is our top priority. Discover the rigorous processes we follow to ensure every NannyGold caregiver is someone you can trust completely.
            </p>
          </div>
        </section>

        {/* Vetting Process Section */}
        <section className="py-12 lg:py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6 text-center">
              Our <span className="gradient-text">Vetting Process</span>
            </h2>
            <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
              Every nanny in our network goes through a comprehensive 6-step vetting process before they're approved to care for your children.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {vettingSteps.map((step) => (
                <Card key={step.step} className="border-border/50 hover:border-primary/30 transition-colors relative">
                  <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-fuchsia flex items-center justify-center text-white font-bold text-sm">
                    {step.step}
                  </div>
                  <CardContent className="p-6 pt-8">
                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-lg bg-gradient-to-br from-primary/20 to-fuchsia/20">
                        <step.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                        <p className="text-muted-foreground text-sm">{step.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Safety Commitments Section */}
        <section className="py-12 lg:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-10 text-center">
              Our <span className="gradient-text">Safety Commitments</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {safetyCommitments.map((commitment, idx) => (
                <Card key={idx} className="border-border/50 hover:border-primary/30 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-fuchsia/20">
                        <commitment.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{commitment.title}</h3>
                        <p className="text-muted-foreground">{commitment.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Promise Section */}
        <section className="py-12 lg:py-20">
          <div className="container mx-auto px-4">
            <Card className="max-w-4xl mx-auto bg-gradient-to-br from-primary/10 to-fuchsia/10 border-primary/20">
              <CardContent className="p-8 text-center">
                <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                <h2 className="text-3xl font-bold mb-4">The NannyGold Trust Promise</h2>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  We stand behind every nanny in our network. If you're ever unsatisfied with your care experience, we'll work to make it right – whether that means finding you a better match or addressing any concerns directly.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-gradient-to-r from-rose-gold to-rose-gold-light hover:opacity-90 gold-shimmer-effect text-white">
                    <a href="tel:+27662733942">Contact Us: +27 66 273 3942</a>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/about#contact">Learn More</Link>
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

export default SafetyTrust;
