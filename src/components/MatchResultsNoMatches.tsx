import { Button } from "@/components/ui/button";
import { Mail, Heart } from "lucide-react";

interface MatchResultsNoMatchesProps {
  clientProfile?: {
    name?: string;
    email?: string;
    phone?: string;
    location?: string;
    childrenCount?: number;
    preferences?: string;
  };
}

export const MatchResultsNoMatches = ({ clientProfile }: MatchResultsNoMatchesProps) => {
  const handleContactSupport = () => {
    // Get client profile details
    const clientName = clientProfile?.name || "Client";
    const clientEmail = clientProfile?.email || "";
    const clientPhone = clientProfile?.phone || "";
    const clientLocation = clientProfile?.location || "";
    const childrenCount = clientProfile?.childrenCount || 0;
    const preferences = clientProfile?.preferences || "Not specified";

    // Create email subject
    const subject = encodeURIComponent("No Perfect Matches Found - Assistance Requested");

    // Create email body with pre-populated information
    const body = encodeURIComponent(
      `Dear NannyGold Support Team,

I am reaching out because I couldn't find perfect matches for my nanny requirements through the matching system.

CLIENT PROFILE DETAILS:
- Name: ${clientName}
- Email: ${clientEmail}
- Phone: ${clientPhone}
- Location: ${clientLocation}
- Number of Children: ${childrenCount}
- Preferences: ${preferences}

ISSUE SUMMARY:
I have completed the matching process but no perfect matches were found based on my specific requirements. This could be due to availability or my specific preferences.

I would appreciate your assistance in finding a suitable nanny match for my family's needs.

Thank you for your help.

Best regards,
${clientName}`
    );

    // Create mailto link
    const mailtoLink = `mailto:care@nannygold.co.za?subject=${subject}&body=${body}`;

    // Open email client
    window.location.href = mailtoLink;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 py-8">
      <div className="max-w-md w-full space-y-6">
        {/* Heart Icon */}
        <div className="flex justify-center">
          <Heart className="h-16 w-16 text-muted-foreground/30" strokeWidth={1.5} />
        </div>

        {/* Main Message */}
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold text-foreground">
            No Perfect Matches Found
          </h2>
          <p className="text-muted-foreground">
            We couldn't find nannies matching all your specific requirements right now. This could be due to availability or your specific preferences.
          </p>
        </div>

        {/* Contact Support Section */}
        <div className="space-y-3">
          <div className="text-center space-y-2">
            <p className="text-sm text-muted-foreground">
              Need help finding a match? Contact our support team at <strong>care@nannygold.co.za</strong>
            </p>
          </div>
          
          <Button
            onClick={handleContactSupport}
            className="w-full bg-fuchsia hover:bg-fuchsia/90 text-white"
            size="lg"
          >
            <Mail className="mr-2 h-4 w-4" />
            Contact Support Team
          </Button>
          
          <p className="text-xs text-center text-muted-foreground">
            This will open your email client with a pre-filled message - no typing required!
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            className="flex-1 bg-fuchsia hover:bg-fuchsia/90 text-white"
            size="lg"
            onClick={() => {
              // Navigate back to preferences or adjust preferences
              window.history.back();
            }}
          >
            Adjust My Preferences
          </Button>
          <Button
            variant="outline"
            className="flex-1 border border-border"
            size="lg"
            onClick={() => {
              // Refresh or try again
              window.location.reload();
            }}
          >
            Try Again
          </Button>
        </div>

        {/* Footer Note */}
        <p className="text-xs text-center text-muted-foreground">
          Our team is constantly onboarding new nannies. Try adjusting your preferences or check back later.
        </p>
      </div>
    </div>
  );
};

