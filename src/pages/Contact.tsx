import { Link } from "react-router-dom";
import { ArrowLeft, Phone, Mail, MapPin, MessageSquare } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Contact = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    // Use mailto link to open email client
    const subject = encodeURIComponent('Contact Form Submission from NannyGold Website');
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || 'Not provided'}\n\nMessage:\n${formData.message}`
    );
    
    window.location.href = `mailto:care@nannygold.co.za?subject=${subject}&body=${body}`;
    
    toast({
      title: "Opening email client...",
      description: "Please send the email from your email client.",
    });
    
    setFormData({ name: '', email: '', phone: '', message: '' });
    setIsLoading(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

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
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Have a question? Need help? We're here for you. Reach out and we'll get back to you as soon as possible.
            </p>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-12 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
              <Card className="border-border/50 text-center hover:border-primary/30 transition-colors">
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
              <Card className="border-border/50 text-center hover:border-primary/30 transition-colors">
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
              <Card className="border-border/50 text-center hover:border-primary/30 transition-colors">
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
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-12 lg:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-10">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-fuchsia/20 flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-3xl font-bold mb-4">
                  Send us a <span className="gradient-text">Message</span>
                </h2>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll respond as soon as possible.
                </p>
              </div>

              <Card className="border-border/50">
                <CardContent className="p-6 lg:p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          Name <span className="text-destructive">*</span>
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your name"
                          required
                          className="border-border focus:border-primary focus:ring-primary"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email <span className="text-destructive">*</span>
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your.email@example.com"
                          required
                          className="border-border focus:border-primary focus:ring-primary"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Phone (Optional)
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+27 XX XXX XXXX"
                        className="border-border focus:border-primary focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message <span className="text-destructive">*</span>
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us how we can help..."
                        rows={6}
                        required
                        className="border-border focus:border-primary focus:ring-primary resize-none"
                      />
                    </div>
                    <Button
                      type="submit"
                      size="lg"
                      disabled={isLoading}
                      className="w-full bg-gradient-to-r from-rose-gold to-rose-gold-light hover:opacity-90 gold-shimmer-effect text-white"
                    >
                      {isLoading ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
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

export default Contact;

