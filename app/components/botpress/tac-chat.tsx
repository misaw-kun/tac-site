"use client";
import { useState, useEffect } from "react";
import { Fab, useClient, WebchatProvider, Webchat } from "@botpress/webchat";

import { buildTheme } from "@botpress/webchat-generator";

const configuration = {
  botName: "tac - AI consultant",
  botAvatar:
    "https://web.miniextensions.com/api/public-attachments/9ByNPsAciKdexzQ6qid6/recxvGdB85pib3Q2y/1",
  botDescription: "Hi👋 I am tac. An AI powered automation consultant.",
  composerPlaceholder: "Ask me what you need! book a call maybe ? 🐱",
  email: {
    title: "admin@theautomationcompany.tech",
    link: "mailto:admin@theautomationcompany.tech",
  },
  website: {
    title: "theautomationcompany.tech",
    link: "https://www.theautomationcompany.tech/",
  },
};

const { style, theme } = buildTheme({
  themeName: "midnight",
  themeColor: "#00FF7A",
});

export default function ChatbotReact({
  clientId,
  onChatEvent,
}: {
  clientId: string;
  onChatEvent: (e: any) => void;
}) {
  const bpClient = useClient({ clientId });
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleChatEvent = (event: any) => {
      if (event) {
        onChatEvent(event);
      }
    };

    bpClient.on("*", (event) => {
      if (event.type === "customEvent" && event.payload?.popupCal === "true") {
        handleChatEvent(event);
      }
    });
  }, [bpClient, onChatEvent]);

  return (
    <WebchatProvider
      client={bpClient}
      theme={theme}
      configuration={configuration}
      closeWindow={() => setOpen(false)}
    >
      <style>{style}</style>
      {!open && (
        <Fab
          onClick={() => setOpen((o) => !o)}
          style={{ position: "fixed", right: 20, bottom: 20, margin: "20px" }}
        />
      )}
      {open && (
        <div
          className="bot-sm"
          style={{
            height: "70vh",
            width: "20%",
            minWidth: "400px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            position: "fixed",
            bottom: 50,
            right: 50,
          }}
        >
          <Webchat />
        </div>
      )}
    </WebchatProvider>
  );
}
