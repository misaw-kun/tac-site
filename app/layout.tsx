import type { Metadata } from "next";
import { Inter, Share_Tech } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";

// const inter = Inter({ subsets: ["latin"] });
const share_tech = Share_Tech({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "The Automation Co.",
  description: "AI powered solutions that just work",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased container",
          share_tech.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
