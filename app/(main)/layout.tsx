import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import "./globals.css";
import "./styles.css";
import localFont from "next/font/local";
import Embed from "@/app/components/botpress/embed";
import { jetbrains } from "@/app/fonts";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  metadataBase: new URL("https://theautomationcompany.tech"),
  title: "The Automation Co.",
  description: "AI powered solutions that just work",
  openGraph: {
    title: "Your Open Graph Title",
    description: "Your Open Graph Description",
    url: "https://theautomationcompany.tech",
    siteName: "Your Site Name",
    images: [
      {
        url: "/images/your-og-image.jpg",
        width: 800,
        height: 600,
        alt: "Your Image Alt Text",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@yourtwitterhandle",
    creator: "@yourtwitterhandle",
    title: "Your Twitter Card Title",
    description: "Your Twitter Card Description",
    images: ["/images/your-twitter-image.jpg"],
  },
};

const satoshi = localFont({
  src: "../assets/Satoshi-Variable.woff2",
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
