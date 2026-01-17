import { MatchResultsNoMatches } from "@/components/MatchResultsNoMatches";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const MatchResults = () => {
  const location = useLocation();
  const [clientProfile, setClientProfile] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    childrenCount: 0,
    preferences: "",
  });

  useEffect(() => {
    // Get client profile from location state, localStorage, or API
    // This is a placeholder - adjust based on your data source
    const profileFromState = location.state?.clientProfile;
    const profileFromStorage = localStorage.getItem("clientProfile");
    
    if (profileFromState) {
      setClientProfile(profileFromState);
    } else if (profileFromStorage) {
      try {
        setClientProfile(JSON.parse(profileFromStorage));
      } catch (e) {
        console.error("Error parsing client profile:", e);
      }
    }
    
    // You can also fetch from an API here
    // Example:
    // fetchClientProfile().then(setClientProfile);
  }, [location.state]);

  return (
    <div className="min-h-screen bg-background">
      <MatchResultsNoMatches clientProfile={clientProfile} />
    </div>
  );
};

export default MatchResults;


