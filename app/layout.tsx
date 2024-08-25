import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import "./globals.css";
import "./styles.css";
import localFont from "next/font/local";
import Embed from "@/components/botpress/embed";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "The Automation Co.",
  description: "AI powered solutions that just work",
};

const satoshi = localFont({
  src: "./assets/Satoshi-Variable.woff2",
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased container lg:max-w-screen-lg xl:max-w-screen-xl overscroll-none scroll-smooth",
          satoshi.variable
        )}
      >
        <div id="__next">{children}</div>
        <Embed />
      </body>
    </html>
  );
}
