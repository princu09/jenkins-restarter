import React, { useState, useEffect } from "react";
import axios from "axios";

const WebsiteStatusChecker = ({ websiteUrl }) => {
  const [isWebsiteLive, setIsWebsiteLive] = useState(null);

  useEffect(() => {
    const checkWebsiteStatus = async () => {
      try {
        const response = await axios.head(
          `https://api.allorigins.win/raw?url=${websiteUrl}`
        );
        if (response.status === 200) {
          setIsWebsiteLive(true); // Website is live
        } else {
          setIsWebsiteLive(false); // Website is down or has an error
        }
      } catch (error) {
        setIsWebsiteLive(false); // Error occurred, website is down
      }
    };

    // Check website status initially
    checkWebsiteStatus();

    // Periodically check website status (every 30 seconds in this example)
    const intervalId = setInterval(checkWebsiteStatus, 30000);

    // Cleanup function to clear interval
    return () => clearInterval(intervalId);
  }, [websiteUrl]);

  return (
    <div>
      {isWebsiteLive === null ? (
        <div className="flex items-center gap-2">
          <p className="w-3 h-3 block bg-yellow-500 rounded-full animate-pulse"></p>
          <p>Checking website status...</p>
        </div>
      ) : isWebsiteLive ? (
        <div className="">
          <div className="flex items-center gap-2">
            <p className="w-3 h-3 block bg-green-500 rounded-full animate-pulse"></p>
            <p>Website is live</p>
          </div>
          <a
            href={websiteUrl}
            target="_blank"
            rel="noreferrer"
            className="text-primary"
          >
            {websiteUrl}
          </a>
        </div>
      ) : (
        <div className="">
          <div className="flex items-center gap-2">
            <p className="w-3 h-3 block bg-red-500 rounded-full animate-pulse"></p>
            <p>Website is down or has an error</p>
          </div>
          <a
            href={websiteUrl}
            target="_blank"
            rel="noreferrer"
            className="text-primary"
          >
            {websiteUrl}
          </a>
        </div>
      )}
    </div>
  );
};

export default WebsiteStatusChecker;
