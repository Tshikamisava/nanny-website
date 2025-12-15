import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {

  const companyLinks = [
    { name: "About Us", to: "/about", description: "Learn about NannyGold's mission and values" },
    { name: "Our Nannies", to: "/our-nannies", description: "Meet our vetted, trained nanny network" },
    { name: "Safety & Trust", to: "/safety-trust", description: "Our rigorous vetting and background checks" },
    { name: "Careers", to: "/careers", description: "Join the NannyGold nanny network" },
    { name: "Contact", to: "/contact", description: "Get in touch with our team" },
  ];

  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16 max-w-6xl mx-auto">
          {/* Brand & Description */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">NannyGold</h3>
            <p className="text-white/80 text-sm leading-relaxed max-w-xs">
              Connecting families with vetted, professional nannies for premium childcare services across South Africa.
            </p>
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
