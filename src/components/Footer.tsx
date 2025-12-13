import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

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

    try {
      const response = await fetch('/functions/v1/send-contact-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "Thank you for contacting us. We'll get back to you soon.",
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id.replace('footer-', '')]: e.target.value
    }));
  };

  const serviceLinks = [
    { name: "Emergency Care", to: "/services#emergency", description: "Urgent childcare when you need it most" },
    { name: "Date Night Care", to: "/services#date-night", description: "Evening care for your special nights out" },
    { name: "Daytime Care", to: "/services#daytime", description: "Regular daytime childcare support" },
    { name: "Gap Coverage", to: "/services#gap-coverage", description: "Fill in when your regular care isn't available" },
    { name: "Long-term Care", to: "/services#long-term", description: "Consistent, ongoing nanny placement" },
  ];

  const companyLinks = [
    { name: "About Us", to: "/about", description: "Learn about NannyGold's mission and values" },
    { name: "Our Nannies", to: "/our-nannies", description: "Meet our vetted, trained nanny network" },
    { name: "Safety & Trust", to: "/safety-trust", description: "Our rigorous vetting and background checks" },
    { name: "Careers", to: "/our-nannies#join-network", description: "Join the NannyGold nanny network" },
    { name: "Contact", to: "/about#contact", description: "Get in touch with our team" },
  ];

  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand & Description */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold gradient-text mb-4">NannyGold</h3>
            <p className="text-white/80 text-sm leading-relaxed">
              Connecting families with vetted, professional nannies for premium childcare services across South Africa.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 bg-gradient-to-r from-fuchsia-400 to-rose-gold bg-clip-text text-transparent">
              Services
            </h4>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.to}
                    className="text-white/70 hover:text-rose-gold transition-colors text-sm"
                    title={link.description}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4 bg-gradient-to-r from-fuchsia-400 to-rose-gold bg-clip-text text-transparent">
              Company
            </h4>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.to}
                    className="text-white/70 hover:text-rose-gold transition-colors text-sm"
                    title={link.description}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 bg-gradient-to-r from-fuchsia-400 to-rose-gold bg-clip-text text-transparent">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="tel:+27662733942" 
                  className="flex items-center gap-2 text-white/70 hover:text-rose-gold transition-colors text-sm"
                >
                  <Phone className="w-4 h-4" />
                  +27 66 273 3942
                </a>
              </li>
              <li>
                <a 
                  href="mailto:care@nannygold.co.za" 
                  className="flex items-center gap-2 text-white/70 hover:text-rose-gold transition-colors text-sm"
                >
                  <Mail className="w-4 h-4" />
                  care@nannygold.co.za
                </a>
              </li>
              <li>
                <div className="flex items-center gap-2 text-white/70 text-sm">
                  <MapPin className="w-4 h-4 flex-shrink-0" />
                  Johannesburg, South Africa
                </div>
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <div>
            <h4 className="font-semibold mb-4 bg-gradient-to-r from-fuchsia-400 to-rose-gold bg-clip-text text-transparent">
              Get in Touch
            </h4>
            <form onSubmit={handleSubmit} className="space-y-3">
              <Input 
                id="footer-name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your name"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 text-sm h-9"
                required
              />
              <Input 
                id="footer-email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 text-sm h-9"
                required
              />
              <Textarea 
                id="footer-message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Your message..."
                rows={3}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 text-sm resize-none"
                required
              />
              <Button 
                type="submit"
                size="sm"
                disabled={isLoading}
                className="w-full bg-rose-gold hover:bg-rose-gold-light text-white border-0"
              >
                {isLoading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            © 2025 NannyGold. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-white/60 mt-4 md:mt-0">
            <a href="/privacy-policy" className="hover:text-rose-gold transition-colors">Privacy Policy</a>
            <a href="/terms-of-service" className="hover:text-rose-gold transition-colors">Terms of Service</a>
            <a href="/cookie-policy" className="hover:text-rose-gold transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
