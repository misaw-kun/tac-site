import BlurFade from "@/components/magicui/blur-fade";
import FlickeringGrid from "@/components/magicui/flickering-grid";
import ShimmerButton from "@/components/magicui/shimmer-button";
import TacHeader from "@/components/tac-sections/header";
import CalPopup from "@/components/ui/cal-popup";
import Link from "next/link";
import Video from "next-video";
import { ArrowUpRight, SquareArrowOutUpRight } from "lucide-react";

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
        {/* embed */}
        <div
          className="w-full rounded-lg z-20"
          style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}
        >
          <iframe
            src="https://www.loom.com/embed/ccff505d039e409fabb342ae0cfc53d3?sid=b353ade3-67c9-44d4-a793-fab8981cb918?hideEmbedTopBar=true"
            allowFullScreen
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
          ></iframe>
        </div>
        {/* cta */}
        <div className="flex md:gap-12 items-center md:items-baseline justify-center md:flex-row flex-col mx-16 md:mx-auto p-4 md:p-24 w-full z-20">
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
