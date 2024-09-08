import { cn } from "@/lib/utils";
import "./globals.css";
import "./styles.css";
import localFont from "next/font/local";
// import Embed from "@/app/components/botpress/embed";
import { jetbrains } from "@/app/fonts";
import { Metadata } from "next";
import TacChatV2 from "../components/botpress/tac-chat-v2";

// export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://theautomationcompany.tech"),
  title: {
    default: "The Automation Company",
    template: "%s | The Automation Co.",
  },
  description: "AI-powered solutions that actually work",
  openGraph: {
    title: "The Automation Company",
    description:
      "Discover cutting-edge AI solutions that streamline your business operations.",
    url: "https://theautomationcompany.tech",
    siteName: "The Automation Company",
    images: [
      {
        url: "https://res.cloudinary.com/dx6mylv5z/image/upload/v1725386601/main-og_xk1k0p.png",
        width: 1200,
        height: 630,
        alt: "Banner image saying 'What will you Automate?'",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@theautomationco", // Update with your actual Twitter handle
    creator: "@theautomationco", // Update with your actual Twitter handle
    title: "The Automation Company",
    description: "Explore AI solutions that optimize your business processes.",
    images: [
      {
        url: "https://res.cloudinary.com/dx6mylv5z/image/upload/v1725386601/main-og_xk1k0p.png",
        alt: "banner image saying 'What will you Automate?'",
      },
    ], // Replace with the actual path to your Twitter image
  },
};

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
        <TacChatV2 />
      </body>
    </html>
  );
}
