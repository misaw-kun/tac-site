"use client";
import { useEffect, useState } from "react";
import { PopupButton, PopupModal } from "react-calendly";
import ShimmerButton from "../magicui/shimmer-button";
import { BotMessageSquare } from "lucide-react";
import { Button } from "./button";

export default function CalendlyPopup({
  btnText,
  isHeader,
}: {
  btnText: string;
  isHeader: boolean;
}) {
  const [isClient, setIsClient] = useState(false);
  const [rootElement, setRootElement] = useState<HTMLElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setRootElement(document.getElementById("__next"));
  }, []);

  return (
    <>
      {isHeader ? (
        <Button
          className="text-lg p-6 hover:bg-accent hidden md:inline-flex"
          onClick={() => setIsOpen(true)}
        >
          {btnText}
        </Button>
      ) : (
        <ShimmerButton
          className="shadow-2xl mt-10 z-20 p-4 lg:p-6"
          onClick={() => setIsOpen(true)}
        >
          <BotMessageSquare className="mr-2 h-6 w-6" />
          <span className="text-center text-sm font-medium leading-none tracking-tight text-white from-white to-slate-900/10 lg:text-lg z-12">
            {btnText}
          </span>
        </ShimmerButton>
      )}

      {isClient && rootElement && (
        <PopupModal
          pageSettings={{
            primaryColor: "#00f55a",
            backgroundColor: "#000",
            textColor: "#fff",
          }}
          url="https://calendly.com/ayman-theautomationcompany/30min"
          rootElement={rootElement}
          open={isOpen}
          onModalClose={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
