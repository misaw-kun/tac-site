import Footer from "@/app/(blog)/_components/footer";
import type { Metadata } from "next";
import cn from "classnames";
// import { ThemeSwitcher } from "./_components/theme-switcher";

import "./globals.css";
import localFont from "next/font/local";
import TacChatV2 from "../components/botpress/tac-chat-v2";
import TacLegalFooter from "../components/tac-sections/legal-footer";
import { FloatingDock } from "../components/aceternity/dock";
import { links } from "../components/ui/links";

const satoshi = localFont({
  src: "../assets/Satoshi-Variable.woff2",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://theautomationcompany.tech/"),
  title: `Automating the Future | The Automation Co. Blog`,
  description:
    "Explore the cutting edge of AI and automation with The Automation Company where we deep dive into the latest trends, best practices, and innovations in AI-powered chatbots, voicebots, and workflow automation.",
  openGraph: {
    images: [
      "https://res.cloudinary.com/dx6mylv5z/image/upload/v1725386601/main-og_xk1k0p.png",
    ],
    url: "https://theautomationcompany.tech/posts",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={cn(
          satoshi.className,
          "bg-background text-foreground overscroll-none"
        )}
      >
        {/* <ThemeSwitcher /> */}
        <div className="min-h-screen">{children}</div>
        <Footer />
        <TacLegalFooter />
        <TacChatV2 />
        <FloatingDock
          desktopClassName="bg-neutral-950 border border-neutral-800 fixed z-10 bottom-10 left-[50%] translate-x-[-50%]"
          mobileClassName="bg-neutral-950 border border-4 rounded-full border-destructive fixed z-10 bottom-10 left-5"
          items={links}
        />
      </body>
    </html>
  );
}
