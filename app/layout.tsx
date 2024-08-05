import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import "./globals.css";
import "./styles.css";
import { share_tech } from "./fonts";

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
