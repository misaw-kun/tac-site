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
  title: `Automating the Future | The Automation Co. Blog`,
  description:
    "Explore the cutting edge of AI and automation with The Automation Company. Our blog delivers deep dives into the latest trends, best practices, and innovations in AI-powered chatbots, voicebots, and workflow automation. Whether you're a business leader, tech enthusiast, or just curious about how AI can transform industries, we provide the knowledge and insights to help you stay ahead in the fast-evolving world of automation.",
  openGraph: {
    images: [HOME_OG_IMAGE_URL],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#000000"
        />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="msapplication-config"
          content="/favicon/browserconfig.xml"
        />
        <meta name="theme-color" content="#000" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      </head> */}
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
