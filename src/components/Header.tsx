import { Button } from "@/components/ui/button";
import { Menu, X, ExternalLink } from "lucide-react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navigationItems = [
    { href: "#services", label: "Engagements" },
    { href: "#how-it-works", label: "How It Works" },
    { href: "#why-choose-us", label: "Why Choose Us" },
    { href: "#pricing", label: "Pricing" },
    { href: "#coming-soon", label: "Coming Soon" },
    { href: "#for-nannies", label: "For Nannies" },
    { href: "#contact", label: "Contact" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      // If not on home page, navigate to home first, then scroll to section
      navigate("/", { state: { scrollTo: href } });
    } else {
      // If already on home page, just scroll to section
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-hero shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" onClick={(e) => { e.preventDefault(); navigate("/"); }}>
              <h1 className="text-2xl lg:text-3xl font-bold tracking-tight cursor-pointer">
                <span className="text-orange-400 hover:text-orange-300 transition-colors duration-500">Nanny</span>
                <span className="text-rose-400 hover:text-rose-300 transition-colors duration-500">Gold</span>
              </h1>
            </a>
          </div>

          {/* Navigation Tabs */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigationItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="relative px-3 lg:px-4 py-2 text-sm lg:text-base font-medium text-white/90 hover:text-white transition-all duration-300 rounded-lg hover:bg-white/10 group cursor-pointer"
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-rose-gold transition-all duration-300 group-hover:w-3/4 transform -translate-x-1/2"></span>
              </a>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Get Access Button */}
            <Button 
              asChild
              className="hidden sm:inline-flex bg-rose-gold hover:bg-rose-gold-light text-white font-medium px-6 py-2 rounded-full hover:shadow-glow hover:scale-105 transition-all duration-300"
            >
              <a 
                href="https://app.nannygold.co.za" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                Get Access
                <ExternalLink size={16} />
              </a>
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-white/80 hover:text-white transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-white/20 bg-primary">
            <nav className="py-4 space-y-2">
              {navigationItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  onClick={(e) => {
                    setIsMenuOpen(false);
                    handleNavClick(e, item.href);
                  }}
                  className="block px-4 py-3 text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 cursor-pointer"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4 px-4">
                <Button 
                  asChild
                  className="w-full bg-rose-gold hover:bg-rose-gold-light text-white font-medium py-3 rounded-full"
                >
                  <a 
                    href="https://app.nannygold.co.za" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    Get Access
                    <ExternalLink size={16} />
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;