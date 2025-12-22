import { Link } from "react-router-dom";
import { ArrowLeft, Heart, Shield, Users, Star, Phone, Mail, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NannyGoldBrand from "@/components/NannyGoldBrand";

const values = [
  {
    icon: Shield,
    title: "Safety First",
    description: "Every nanny undergoes rigorous background checks, reference verification, and ongoing monitoring to ensure your family's safety."
  },
  {
    icon: Heart,
    title: "Genuine Care",
    description: "We believe childcare should be nurturing and loving. Our nannies are passionate about children and committed to their wellbeing."
  },
  {
    icon: Users,
    title: "Family Partnership",
    description: "We work alongside you as partners, understanding your unique needs and matching you with the perfect caregiver for your family."
  },
  {
    icon: Star,
    title: "Excellence",
    description: "From our selection process to ongoing training, we maintain the highest standards in everything we do."
  }
];

const AboutUs = () => {
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
              About <NannyGoldBrand size="xl" className="inline-block" />
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Connecting South African families with exceptional childcare since day one. We're more than a nanny service – we're your partner in parenting.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-12 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">
                Our <span className="gradient-text">Guiding Mission</span>
              </h2>
              <Card className="bg-gradient-to-br from-primary/10 to-fuchsia/10 border-primary/20">
                <CardContent className="p-8">
                  <p className="text-lg text-muted-foreground text-center leading-relaxed">
                    Children are at the heart of <NannyGoldBrand size="md" className="inline-block" />, receiving safe, loving, God-honoring care under their parents' wise stewardship. When the right nanny is meant for a family, parents find their way to our platform, ensuring a seamless match for any duration.
                  </p>
                </CardContent>
              </Card>
              <Card className="mt-6 bg-gradient-to-br from-primary/5 to-fuchsia/5 border-primary/20">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold mb-4">The <NannyGoldBrand size="lg" className="inline-block" /> Promise</h3>
                  <p className="text-muted-foreground">
                    From one-time emergencies to consistent, long-term support, we match you with vetted, trained, and trustworthy nannies who show up when you need them. It's care that works around your life, not the other way around.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-12 lg:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-10 text-center">
              Our <span className="gradient-text">Values</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {values.map((value, idx) => (
                <Card key={idx} className="border-border/50 hover:border-primary/30 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-fuchsia/20">
                        <value.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                        <p className="text-muted-foreground">{value.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-12 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">
                Our <span className="gradient-text">Story</span>
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="mb-4 text-lg leading-relaxed">
                  <NannyGoldBrand size="md" className="inline-block" /> began from a parent's honest frustration—searching endlessly for the right nanny who truly cherishes children like a blessing from above. As parents ourselves, we experienced the anxiety of cancelled care, the stress of last-minute scrambles, and the challenge of finding someone we could truly trust with our children. Finding reliable childcare in South Africa shouldn't be so hard.
                </p>
                <p className="mb-4 text-lg leading-relaxed">
                  We turned that challenge into a heartfelt solution: connecting families with dedicated, faith-centered caregivers who provide God's intended care for each child's unique season of life. We built <NannyGoldBrand size="md" className="inline-block" /> to be the solution we wished existed – a platform that combines technology with the human touch, rigorous vetting with genuine care, and flexibility with reliability.
                </p>
                <p className="mb-8 text-lg leading-relaxed">
                  Today, we're proud to serve families across Johannesburg and beyond, providing peace of mind to parents who deserve to know their children are in the best hands possible.
                </p>
              </div>

              {/* What Sets Us Apart */}
              <div className="mt-10">
                <h3 className="text-2xl font-bold mb-6 text-center">
                  What Sets Us <span className="gradient-text">Apart</span>
                </h3>
                <div className="grid md:grid-cols-1 gap-6">
                  <Card className="border-border/50 hover:border-primary/30 transition-colors">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-fuchsia/20 flex-shrink-0">
                          <Heart className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold mb-2">From Frustration to Joy</h4>
                          <p className="text-muted-foreground">
                            We built an easy app for quick bookings, ongoing training, and purposeful connections that bring real peace.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-border/50 hover:border-primary/30 transition-colors">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-fuchsia/20 flex-shrink-0">
                          <Users className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold mb-2">Caregivers with Purpose</h4>
                          <p className="text-muted-foreground">
                            Sourced thoughtfully from faith communities, our nannies bring genuine calling, skills like First-Aid and CPR, and nurturing expertise.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-border/50 hover:border-primary/30 transition-colors">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-fuchsia/20 flex-shrink-0">
                          <Shield className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold mb-2">Support for Families</h4>
                          <p className="text-muted-foreground">
                            Everything—from matching to management—stays aligned with shared values for lasting trust.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="mt-10 text-center">
                <p className="text-xl font-semibold text-primary mb-4">
                  Discover the care your family deserves today.
                </p>
                <Button asChild size="lg" className="bg-gradient-to-r from-rose-gold to-rose-gold-light hover:opacity-90 gold-shimmer-effect text-white">
                  <a href="https://app.nannygold.co.za" target="_blank" rel="noopener noreferrer">
                    Get Started
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 lg:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-10 text-center">
              Get in <span className="gradient-text">Touch</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
              <Card className="border-border/50 text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-fuchsia/20 flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Phone</h3>
                  <a href="tel:+27662733942" className="text-muted-foreground hover:text-primary transition-colors">
                    +27 66 273 3942
                  </a>
                </CardContent>
              </Card>
              <Card className="border-border/50 text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-fuchsia/20 flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Email</h3>
                  <a href="mailto:care@nannygold.co.za" className="text-muted-foreground hover:text-primary transition-colors">
                    care@nannygold.co.za
                  </a>
                </CardContent>
              </Card>
              <Card className="border-border/50 text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-fuchsia/20 flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Location</h3>
                  <p className="text-muted-foreground">
                    Johannesburg, South Africa
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="flex justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-rose-gold to-rose-gold-light hover:opacity-90 gold-shimmer-effect text-white">
                <a href="mailto:care@nannygold.co.za">Send Us a Message</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutUs;
