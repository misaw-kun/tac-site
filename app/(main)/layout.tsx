import { cn } from "@/lib/utils";
import "./globals.css";
import "./styles.css";
import localFont from "next/font/local";
import Embed from "@/app/components/botpress/embed";
import { jetbrains } from "@/app/fonts";

export const dynamic = "force-dynamic";

const satoshi = localFont({
  src: "../assets/Satoshi-Variable.woff2",
  variable: "--font-sans",
});

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased container lg:max-w-screen-lg xl:max-w-screen-xl overscroll-none scroll-smooth",
          satoshi.variable,
          jetbrains.variable
        )}
      >
        <div id="__next">{children}</div>
        {/* <Embed /> */}
      </body>
    </html>
  );
}
