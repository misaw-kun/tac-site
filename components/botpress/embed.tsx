"use client";
import TacChat from "@/components/botpress/tac-chat";
import { getCalApi } from "@calcom/embed-react";

export default function Embed() {
  const handleChatEvent = (e: any) => {
    if (e) console.log("i recieved an event", e);
    (async function () {
      const cal = await getCalApi();
      cal("modal", {
        calLink: "tacai",
        __prerender: true,
      });
    })();
  };

  if (typeof window !== "undefined") {
    return (
      <TacChat
        onChatEvent={handleChatEvent}
        clientId="5fe3b3d2-26b5-4afa-9a8a-4c845880c6ea"
      />
    );
  }
}
