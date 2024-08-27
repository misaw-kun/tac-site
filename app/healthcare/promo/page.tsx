import BlurFade from "@/components/magicui/blur-fade";
import FlickeringGrid from "@/components/magicui/flickering-grid";
import ShimmerButton from "@/components/magicui/shimmer-button";
import TacHeader from "@/components/tac-sections/header";
import CalPopup from "@/components/ui/cal-popup";
import Link from "next/link";
import Video from "next-video";
import { ArrowUpRight, SquareArrowOutUpRight } from "lucide-react";
import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";

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
        {/* promise */}
        <NeonGradientCard
          neonColors={{
            firstColor: "#00ff7a",
            secondColor: "#5100ff",
          }}
          className="max-w-xs md:max-w-4xl mx-auto items-center justify-center text-center md:mt-40"
        >
          <span className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-r from-secondary from-35% to-accent bg-clip-text text-center text-xl md:text-5xl font-bold leading-tight tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
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
