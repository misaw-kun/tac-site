import Footer from "@/app/(blog)/_components/footer";
import { HOME_OG_IMAGE_URL } from "@/lib/constants";
import type { Metadata } from "next";
import cn from "classnames";
// import { ThemeSwitcher } from "./_components/theme-switcher";

import "./globals.css";
import localFont from "next/font/local";

const satoshi = localFont({
  src: "../assets/Satoshi-Variable.woff2",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://theautomationcompany.tech/"),
  title: `Automating the Future | The Automation Co. Blog`,
  description:
    "Explore the cutting edge of AI and automation with The Automation Company. Our blog delivers deep dives into the latest trends, best practices, and innovations in AI-powered chatbots, voicebots, and workflow automation. Whether you're a business leader, tech enthusiast, or just curious about how AI can transform industries, we provide the knowledge and insights to help you stay ahead in the fast-evolving world of automation.",
  openGraph: {
    images: [HOME_OG_IMAGE_URL],
    url: "https://theautomationcompany.tech/posts",
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
      </body>
    </html>
  );
}
