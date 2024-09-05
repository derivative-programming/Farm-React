import React, { useEffect, useState } from "react";
import useNavigatorOnline from "./useNavigatorOnLine";

interface CheckVersionProps {
  onNewVersionDetected: () => void;
  checkInterval?: number; // Optional interval in milliseconds (default is 10 minutes)
}

const CheckVersion: React.FC<CheckVersionProps> = ({ onNewVersionDetected, checkInterval = 600000 }) => {
  const [currentVersion, setCurrentVersion] = useState<string | null>(null);
  const isOnline = useNavigatorOnline(); // Use the custom hook to check if the browser is online

  // Fetch the version.json file
  const fetchVersion = async () => {
    try {
      const response = await fetch("/version.json");
      if (response.ok) {
        const data = await response.json();
        return data.version + "-" + data.build; // Combine version and build for uniqueness
      }
    } catch (error) {
      console.error("Error fetching version.json:", error);
    }
    return null;
  };

  // Check for a new version
  const checkForNewVersion = async () => {
    if (!isOnline) return; // Don't check for a new version if offline

    const latestVersion = await fetchVersion();
    if (latestVersion && currentVersion && latestVersion !== currentVersion) {
      onNewVersionDetected(); // Call the function passed as prop when a new version is detected
    }
    setCurrentVersion(latestVersion); // Update currentVersion to the latest version
  };

  useEffect(() => {
    // Initial version check (only if online)
    if (isOnline) {
      checkForNewVersion();
    }

    // Set interval for periodic checks (only when online)
    const intervalId = setInterval(() => {
      if (isOnline) {
        checkForNewVersion();
      }
    }, checkInterval);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, [currentVersion, checkInterval, isOnline]); // Re-run the effect when isOnline changes

  return null; // This component doesn't render anything itself
};

export default CheckVersion;