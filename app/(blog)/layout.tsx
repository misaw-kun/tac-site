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
    "Explore the cutting edge of AI and automation with The Automation Company.Explore deep dives into the latest trends, best practices, and innovations in AI-powered chatbots, voicebots, and workflow automation.",
  openGraph: {
    images: [
      "https://res.cloudinary.com/dx6mylv5z/image/upload/v1725386601/main-og_xk1k0p.png",
    ],
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
