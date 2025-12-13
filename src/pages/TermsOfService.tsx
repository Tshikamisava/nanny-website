import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const TermsOfService = () => {
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
          <h1 className="text-4xl font-bold gradient-text mb-8">Website Terms of Service</h1>
          <p className="text-muted-foreground mb-8">Effective Date: 01 October 2025</p>
          
          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using the NannyGold website ("Website"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our Website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Website Description</h2>
              <p className="text-muted-foreground leading-relaxed">
                The NannyGold Website provides information about our childcare matching services and allows prospective clients and nannies to learn about our platform. To access our full services, users must download our mobile application and agree to our separate Client Terms and Conditions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Website Use</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">You agree to use our Website:</p>
              <ul className="text-muted-foreground leading-relaxed list-disc list-inside space-y-2 ml-4">
                <li>For lawful purposes only</li>
                <li>In accordance with these Terms</li>
                <li>Without violating any applicable laws or regulations</li>
                <li>Without attempting to gain unauthorized access to our systems</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                All content on this Website, including text, graphics, logos, images, and software, is the property of NannyGold and is protected by copyright and other intellectual property laws. You may not reproduce, distribute, or modify any content without our written permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Privacy</h2>
              <p className="text-muted-foreground leading-relaxed">
                Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and protect your information when you visit our Website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Disclaimers</h2>
              <p className="text-muted-foreground leading-relaxed">
                This Website is provided "as is" without any representations or warranties. We do not guarantee that the Website will be uninterrupted, error-free, or free of viruses or other harmful components.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                To the fullest extent permitted by law, NannyGold shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of this Website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting to the Website. Your continued use of the Website constitutes acceptance of any modified Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms are governed by the laws of South Africa. Any disputes will be subject to the exclusive jurisdiction of the courts in Johannesburg, Gauteng.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">10. Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about these Terms, please contact us:
              </p>
              <div className="mt-4 p-4 bg-muted rounded-lg">
                <p className="text-foreground">
                  <strong>Email:</strong> <a href="mailto:care@nannygold.co.za" className="text-primary hover:text-primary/80">care@nannygold.co.za</a>
                </p>
                <p className="text-foreground">
                  <strong>Telephone:</strong> <a href="tel:+27662733942" className="text-primary hover:text-primary/80">+27 66 273 3942</a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;