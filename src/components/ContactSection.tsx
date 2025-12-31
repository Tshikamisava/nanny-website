import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Phone, Mail, MessageCircle } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import MovingHighlight from "./MovingHighlight";
import NannyGoldBrand from "./NannyGoldBrand";

const ContactSection = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_md9r3cz";
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID || "template_yew0tnm";
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "yAJUd3QrzTQPzilot";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    const sendPayload = {
      from_name: formData.name,
      from_email: formData.email,
      phone: "Not provided",
      message: formData.message,
    };

    console.log("EmailJS Config:", { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY });
    console.log("Payload:", sendPayload);

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, sendPayload, { publicKey: PUBLIC_KEY });
      toast({
        title: "Message sent!",
        description: "Thank you for contacting us. We'll get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '' });
    } catch {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or contact us directly at care@nannygold.co.za",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };
  return (
    <section id="contact" className="py-12 lg:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 lg:mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            Let's <MovingHighlight delay={700}>Talk</MovingHighlight>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions? Our team is here to help you find the right care for your family.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="card-premium">
            <h3 className="text-2xl font-bold text-primary mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-foreground">
                  Name
                </label>
                <Input 
                  id="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your full name"
                  className="border-border focus:border-rose-gold focus:ring-rose-gold"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground">
                  Email
                </label>
                <Input 
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your.email@example.com"
                  className="border-border focus:border-rose-gold focus:ring-rose-gold"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  Message
                </label>
                <Textarea 
                  id="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your needs..."
                  rows={5}
                  className="border-border focus:border-rose-gold focus:ring-rose-gold resize-none"
                  required
                />
              </div>
              <Button 
                type="submit"
                size="lg"
                disabled={isLoading}
                className="btn-hero w-full gold-shimmer-effect"
              >
                {isLoading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">Get in Touch</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                We're here to answer your questions and help you find the perfect nanny for your family. 
                Reach out through any of these channels.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-pink-soft/20 to-transparent rounded-xl border border-pink-soft/30">
                <div className="w-12 h-12 bg-gradient-rose rounded-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-medium text-foreground">Call Us</div>
                  <a 
                    href="tel:+27662733942" 
                    className="text-rose-gold hover:text-rose-gold-dark transition-colors"
                  >
                    +27 66 273 3942
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-pink-soft/20 to-transparent rounded-xl border border-pink-soft/30">
                <div className="w-12 h-12 bg-gradient-rose rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-medium text-foreground">Email</div>
                  <a 
                    href="mailto:care@nannygold.co.za" 
                    className="text-rose-gold hover:text-rose-gold-dark transition-colors"
                  >
                    care@nannygold.co.za
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-pink-soft/20 to-transparent rounded-xl border border-pink-soft/30">
                <div className="w-12 h-12 bg-gradient-rose rounded-xl flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-medium text-foreground">WhatsApp</div>
                  <a 
                    href="https://wa.me/27662733942?text=Hi,%20I%20would%20like%20to%20learn%20more%20about%20NannyGold%20services" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-rose-gold hover:text-rose-gold-dark transition-colors"
                  >
                    Chat with us
                  </a>
                </div>
              </div>
            </div>

            {/* Quick CTA */}
            <div className="p-6 bg-gradient-to-br from-primary to-primary-light rounded-2xl text-white">
              <h4 className="text-lg font-semibold mb-2">Ready to Get Started?</h4>
              <p className="text-white/90 mb-4">
                Join hundreds of families who trust <NannyGoldBrand size="md" className="inline-block" /> for their childcare needs.
              </p>
              <Button 
                asChild
                className="bg-rose-gold hover:bg-rose-gold-light border-0 text-white"
              >
                <a href="https://app.nannygold.co.za" target="_blank" rel="noopener noreferrer">
                  Start Your Journey
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;