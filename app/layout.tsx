import { Metadata } from "next";

export const metadata: Metadata = {
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
