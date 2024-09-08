"use client";
import { useEffect } from "react";

const TacChatV2 = () => {
  useEffect(() => {
    // Dynamically load the Botpress webchat script
    const webchatScript = document.createElement("script");
    webchatScript.src = "https://cdn.botpress.cloud/webchat/v2.1/inject.js";
    webchatScript.async = true;

    // After the webchat script has loaded, load the config script
    webchatScript.onload = () => {
      const configScript = document.createElement("script");
      configScript.src =
        "https://mediafiles.botpress.cloud/8fd7debd-4133-45a8-ad91-f3852a55dbd1/webchat/v2.1/config.js";
      configScript.async = true;
      document.body.appendChild(configScript);
    };

    document.body.appendChild(webchatScript);

    // Cleanup function to remove scripts when the component unmounts
    return () => {
      document.body.removeChild(webchatScript);
    };
  }, []);

  return null; // No visual render needed, bot will inject itself
};

export default TacChatV2;
