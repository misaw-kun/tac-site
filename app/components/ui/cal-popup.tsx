"use client";
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { Button } from "./button";
import ShimmerButton from "../magicui/shimmer-button";
import { BotMessageSquare } from "lucide-react";
import PulsatingButton from "./pulsating-button";

export default function CalPopup({
  btnText,
  isHeader = false,
  isPromo = false,
  isBlog = false,
}: {
  btnText: string;
  isHeader?: boolean;
  isPromo?: boolean;
  isBlog?: boolean;
}) {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        theme: "dark",
        styles: {
          branding: { brandColor: "#00cc4b" },
        },
      });
    })();
  }, []);
  if (isBlog) {
    return (
      <button
        className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        data-cal-link="tacai"
      >
        {btnText}
      </button>
    );
  }
  if (isPromo) {
    return (
      <PulsatingButton
        className="text-sm md:text-3xl font-semibold z-20"
        pulseColor="#00ff7a"
        data-cal-link="tacai"
      >
        {btnText}
      </PulsatingButton>
    );
  }
  return (
    <>
      {isHeader ? (
        <Button
          data-cal-link="tacai"
          className="text-lg p-6 hover:bg-accent hidden md:inline-flex"
        >
          {btnText}
        </Button>
      ) : (
        <ShimmerButton
          data-cal-link="tacai"
          className="shadow-2xl mt-10 z-20 p-4 lg:p-6"
        >
          <BotMessageSquare className="mr-2 h-6 w-6" />
          <span className="text-center text-sm font-medium leading-none tracking-tight text-white from-white to-slate-900/10 lg:text-lg z-12">
            {btnText}
          </span>
        </ShimmerButton>
      )}
    </>
  );
}
