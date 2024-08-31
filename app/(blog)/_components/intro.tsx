import TacLogo from "@/app/assets/tac-no-bg.svg";
import Image from "next/image";
import Link from "next/link";
import { SparklesCore } from "./sparkles";

export function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12 gap-5 md:gap-0">
      <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight md:pr-8 flex gap-5 hover:text-accent">
        <Image className="w-24 md:w-36" src={TacLogo} alt="tac-logo" />
        Blog.
      </h1>
      <div className="h-fit md:h-[5rem] w-fit bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
        <h4 className="text-center md:text-left text-xl mt-5 md:pl-8 relative">
          Automating the Future: Insights from
          <Link
            href="/"
            className="font-semibold hover:text-accent duration-200 transition-colors mx-2 block md:inline"
          >
            The Automation Company
          </Link>
        </h4>
        <div className="w-full h-full md:h-[2.5rem] relative mt-2">
          {/* Gradients */}
          <div className="absolute md:inset-x-20 top-0 bg-gradient-to-r from-transparent via-secondary to-transparent h-[2px] w-full md:w-3/4  blur-sm" />
          <div className="absolute md:inset-x-20 top-0 bg-gradient-to-r from-transparent via-accent to-transparent h-px w-full md:w-3/4 " />
          <div className="absolute md:inset-x-60 top-0 bg-gradient-to-r from-transparent via-accent to-transparent h-[5px] w-full md:w-1/4  blur-sm" />
          <div className="absolute md:inset-x-60 top-0 bg-gradient-to-r from-transparent via-secondary to-transparent h-px w-full md:w-1/4 " />

          {/* Core component */}
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />

          {/* Radial Gradient to prevent sharp edges */}
          <div className="absolute inset-0 w-full h-full bg-background [mask-image:radial-gradient(150px_150px_at_top,transparent_20%,white)]"></div>
        </div>
      </div>
    </section>
  );
}
