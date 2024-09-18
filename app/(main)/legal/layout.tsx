import TacHeader from "@/app/components/tac-sections/header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Legal | The Automation Company",
    template: "%s | The Automation Co.",
  },
  description:
    "Legal policies for The Automation Company, including privacy and terms of service.",
};

export default function LegalLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="container mx-auto px-4 py-8">
      <TacHeader />
      {children}
    </div>
  );
}
