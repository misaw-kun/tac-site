import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import "./globals.css";
import "./styles.css";
import { share_tech } from "./fonts";
import localFont from "next/font/local";

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
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased container lg:max-w-screen-lg",
          satoshi.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
