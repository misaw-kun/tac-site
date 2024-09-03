import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://theautomationcompany.tech"),
  title: {
    default: "The Automation Company",
    template: "%s | The Automation Co.",
  },
  description: "AI-powered solutions that just work",
  openGraph: {
    title: "The Automation Company",
    description:
      "Discover cutting-edge AI solutions that streamline your business operations.",
    url: "https://theautomationcompany.tech",
    siteName: "The Automation Company",
    images: [
      {
        url: "/images/og-image.jpg", // Replace with the actual path to your Open Graph image
        width: 1200,
        height: 630,
        alt: "A depiction of AI technology in action",
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
    images: ["/images/twitter-image.jpg"], // Replace with the actual path to your Twitter image
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
