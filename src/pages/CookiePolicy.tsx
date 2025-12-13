import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const CookiePolicy = () => {
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
          <h1 className="text-4xl font-bold gradient-text mb-8">Cookie Policy</h1>
          <p className="text-muted-foreground mb-8">Last Updated: 01 October 2025</p>
          
          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. What Are Cookies</h2>
              <p className="text-muted-foreground leading-relaxed">
                Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and improving our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. How We Use Cookies</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use cookies for several purposes:
              </p>
              <ul className="text-muted-foreground leading-relaxed list-disc list-inside space-y-2 ml-4">
                <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
                <li><strong>Performance Cookies:</strong> Help us understand how visitors interact with our website</li>
                <li><strong>Functionality Cookies:</strong> Remember your preferences and settings</li>
                <li><strong>Analytics Cookies:</strong> Help us improve our website and services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Third-Party Cookies</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our website is built using Lovable platform and uses Supabase for backend services. These services may set their own cookies:
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Lovable Platform Cookies</h3>
                  <ul className="text-muted-foreground leading-relaxed list-disc list-inside space-y-1 ml-4">
                    <li>Session management and user authentication</li>
                    <li>Performance monitoring and analytics</li>
                    <li>Security and fraud prevention</li>
                    <li>Website optimization and A/B testing</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Supabase Cookies</h3>
                  <ul className="text-muted-foreground leading-relaxed list-disc list-inside space-y-1 ml-4">
                    <li>User authentication and session management</li>
                    <li>Database connection and security</li>
                    <li>API request tracking and rate limiting</li>
                    <li>Error monitoring and performance analytics</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Types of Cookies We Use</h2>
              <div className="space-y-4">
                <div className="p-4 bg-muted rounded-lg">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Session Cookies</h3>
                  <p className="text-muted-foreground">
                    Temporary cookies that are deleted when you close your browser. These are essential for the website to function properly.
                  </p>
                </div>
                
                <div className="p-4 bg-muted rounded-lg">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Persistent Cookies</h3>
                  <p className="text-muted-foreground">
                    Remain on your device for a set period or until you delete them. These help remember your preferences across visits.
                  </p>
                </div>
                
                <div className="p-4 bg-muted rounded-lg">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Authentication Cookies</h3>
                  <p className="text-muted-foreground">
                    Used by Supabase to manage user login sessions and maintain security when accessing our platform services.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Managing Your Cookie Preferences</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You can control and manage cookies in several ways:
              </p>
              <ul className="text-muted-foreground leading-relaxed list-disc list-inside space-y-2 ml-4">
                <li><strong>Browser Settings:</strong> Most browsers allow you to manage cookie preferences through their settings</li>
                <li><strong>Opt-Out Tools:</strong> You can use browser extensions or privacy tools to block certain cookies</li>
                <li><strong>Clearing Cookies:</strong> You can delete existing cookies through your browser settings</li>
                <li><strong>Disabling Cookies:</strong> You can disable cookies entirely, though this may affect website functionality</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Cookie Retention</h2>
              <p className="text-muted-foreground leading-relaxed">
                Different cookies have different retention periods:
              </p>
              <ul className="text-muted-foreground leading-relaxed list-disc list-inside space-y-2 ml-4 mt-4">
                <li><strong>Session cookies:</strong> Deleted when you close your browser</li>
                <li><strong>Authentication cookies:</strong> Typically expire after 30 days or when you log out</li>
                <li><strong>Preference cookies:</strong> May persist for up to 1 year</li>
                <li><strong>Analytics cookies:</strong> Usually expire after 2 years</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Updates to This Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the updated policy on our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about our use of cookies or this Cookie Policy, please contact us:
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

export default CookiePolicy;