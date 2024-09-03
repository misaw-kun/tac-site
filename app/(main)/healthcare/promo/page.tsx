import BlurFade from "@/app/components/magicui/blur-fade";
import FlickeringGrid from "@/app/components/magicui/flickering-grid";
import ShimmerButton from "@/app/components/magicui/shimmer-button";
import TacHeader from "@/app/components/tac-sections/header";
import CalPopup from "@/app/components/ui/cal-popup";
import Link from "next/link";
import { SquareArrowOutUpRight } from "lucide-react";
import { NeonGradientCard } from "@/app/components/magicui/neon-gradient-card";
import VideoPlayer from "@/app/components/ui/video-player";
import { Metadata } from "next";

export default function Page() {
  return (
    <BlurFade delay={0.25} inView={true}>
      <TacHeader />
      <main className="relative min-h-screen snap-y flex flex-col justify-between items-center overflow-hidden mx-auto">
        {/* header */}
        <div className="mx-16 md:mx-auto p-4 md:p-24 w-full z-20">
          <h1 className="text-2xl font-black tracking-tight lg:text-6xl md:mb-20 md:w-full">
            ATTRACT <span className="text-accent">HIGHER PAYING</span> CLIENTS
            AND <span className="text-secondary">INCREASED CONVERSIONS</span>{" "}
            WITH OUR CUSTOM{" "}
            <span className="text-destructive">AI-POWERED CHATBOT</span>
          </h1>
        </div>
        {/* VSL */}
        <VideoPlayer />
        {/* promise */}
        <NeonGradientCard
          neonColors={{
            firstColor: "#00ff7a",
            secondColor: "#5100ff",
          }}
          className="max-w-xs md:max-w-4xl mx-auto items-center justify-center text-center md:mt-40"
        >
          <span className="pointer-events-none z-10 h-full bg-gradient-to-r from-secondary from-35% to-accent bg-clip-text text-center text-xl md:text-6xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
            book a call to learn how we can increase your conversions by upto
            30% <br /> (or we work for free!)
          </span>
        </NeonGradientCard>
        {/* cta */}
        <div className="flex md:gap-12 items-center md:items-baseline justify-center md:flex-row flex-col mx-16 md:mx-auto p-4 md:p-24 md:pb-8 w-full z-20">
          <CalPopup isPromo={true} btnText="Book A Free Consultation Call" />
          <Link
            href="/healthcare"
            target="_blank"
            className="text-center text-sm font-medium leading-none tracking-tight text-white from-white to-slate-900/10 lg:text-2xl z-12"
          >
            <ShimmerButton className="shadow-2xl mt-10 p-4 lg:p-9">
              Learn More
              <SquareArrowOutUpRight className="ml-5" size={24} />
            </ShimmerButton>
          </Link>
        </div>
        <FlickeringGrid
          className="z-0 absolute inset-0 size-full"
          squareSize={16}
          gridGap={6}
          color="#6B7280"
          maxOpacity={0.3}
          flickerChance={0.1}
          height={2000}
          width={2000}
        />
      </main>
    </BlurFade>
  );
}

export const metadata: Metadata = {
  title: "Healthcare AI Solutions | The Automation Co.",
  description:
    "Discover our AI-powered solutions tailored for healthcare. Watch the video to learn how we can revolutionize your practice.",
  openGraph: {
    title: "Transform Your Healthcare Practice with AI",
    description:
      "Watch the video to see how our AI solutions can optimize your healthcare operations.",
    url: "https://theautomationcompany.tech/healthcare/promo",
    siteName: "The Automation Co.",
    images: [
      {
        url: "https://res.cloudinary.com/dx6mylv5z/image/upload/v1724836973/vsl_thumb_jxmxuo.png",
        width: 1200,
        height: 630,
        alt: "AI Solutions Video",
      },
    ],
    locale: "en_US",
    type: "video.movie", // If you have a video file or a video URL, this can be specific to a video type
    videos: {
      url: "https://res.cloudinary.com/dx6mylv5z/video/upload/v1724830394/vsl_healthcare_miexav.mp4",
      width: 1200,
      height: 630,
    },
  },
  twitter: {
    card: "summary_large_image",
    site: "@yourtwitterhandle",
    creator: "@yourtwitterhandle",
    title: "AI Solutions for Healthcare",
    description:
      "Unlock Higher Conversions and Better Patient Support with our AI-Powered Chatbots",
    images: ["/images/healthcare-promo-twitter.jpg"],
  },
};
