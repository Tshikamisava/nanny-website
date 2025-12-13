import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-6"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>
        
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold gradient-text mb-8">Privacy Notice</h1>
          <p className="text-muted-foreground mb-8">Last Updated: 01 October 2025</p>
          
          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                NannyGold ("we," "us," or "our") respects your privacy and is committed to protecting your personal information in compliance with South Africa's Protection of Personal Information Act ("POPIA"). This Privacy Notice explains how we collect, use, and protect your personal information when you visit our website or use our mobile application ("Platform").
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We collect personal information that you provide directly to us, such as:
              </p>
              <ul className="text-muted-foreground leading-relaxed list-disc list-inside space-y-2 ml-4">
                <li>Name, contact details (email, phone number, address)</li>
                <li>Identification details (ID number, date of birth)</li>
                <li>Payment and billing information</li>
                <li>Background and verification data</li>
                <li>Usage data including IP addresses, cookies, and browsing behavior on our Platform</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">Your information is used to:</p>
              <ul className="text-muted-foreground leading-relaxed list-disc list-inside space-y-2 ml-4">
                <li>Provide and improve our childcare matching services</li>
                <li>Communicate with you regarding your use of our Platform and services</li>
                <li>Verify identities and conduct necessary screenings</li>
                <li>Process payments and manage your account</li>
                <li>Comply with legal obligations and protect our rights</li>
                <li>Send you marketing and promotional materials (only if you consent)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Sharing and Disclosure</h2>
              <p className="text-muted-foreground leading-relaxed">
                We do not sell your personal data. We may share your information with trusted third parties who assist in operating the Platform, all subject to confidentiality and security commitments.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Data Retention</h2>
              <p className="text-muted-foreground leading-relaxed">
                We retain your data only as long as necessary to provide our services and comply with legal requirements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">Under POPIA, you have the right to:</p>
              <ul className="text-muted-foreground leading-relaxed list-disc list-inside space-y-2 ml-4">
                <li>Access your personal data</li>
                <li>Request correction or deletion of information</li>
                <li>Object to certain kinds of data processing</li>
                <li>Lodge a complaint with the Information Regulator</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We are committed to protecting your personal information in accordance with the Protection of Personal Information Act, 2013 (POPIA). We implement comprehensive technical, administrative, and organizational safeguards designed to protect your personal data from unauthorized access, disclosure, alteration, destruction, or loss. These measures include encryption, secure servers, access controls, regular security assessments, and employee training to ensure the confidentiality, integrity, and availability of your data. Despite these measures, no system can be completely secure, and you acknowledge the inherent risks in transmitting information online.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Cookies and Tracking</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our Platform may utilize cookies, web beacons, and similar tracking technologies to enhance user experience, analyze usage patterns, personalize content, and improve our services. We collect data on how users interact with our Platform to optimize functionality and security. You are empowered to control and manage your cookie preferences through your browser settings or device controls, including opting out of certain cookies. Please note that disabling essential cookies may impact your ability to access certain features or use the Platform fully.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                You have the right to inquire about, access, correct, or request deletion of your personal information processed by NannyGold, as provided under POPIA. For any privacy-related concerns, to exercise your data protection rights, or for more information about our privacy practices, please contact our Information Officer at:
              </p>
              <div className="mt-4 p-4 bg-muted rounded-lg">
                <p className="text-foreground">
                  <strong>Email:</strong> <a href="mailto:care@nannygold.co.za" className="text-primary hover:text-primary/80">care@nannygold.co.za</a>
                </p>
                <p className="text-foreground">
                  <strong>Telephone:</strong> <a href="tel:+27662733942" className="text-primary hover:text-primary/80">+27 66 273 3942</a>
                </p>
              </div>
              <p className="text-muted-foreground leading-relaxed mt-4">
                We strive to respond promptly and transparently to all privacy inquiries in accordance with POPIA requirements.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;