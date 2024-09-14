import React from "react";
import AnimatedShinyText from "../magicui/animated-shiny-text";
import WordRotate from "../magicui/word-rotate";
import CalPopup from "../ui/cal-popup";
import Particles from "../magicui/particles";
import { Spotlight } from "../aceternity/spotlight";
import { TextHoverEffect } from "../aceternity/text-hover-effect";
import AnimatedGridPattern from "../magicui/animated-grid-pattern";
import { cn } from "@/lib/utils";

function TacHero() {
  return (
    <section className="snap-start relative flex flex-col w-full h-[740px] lg:h-[784px] justify-center overflow-hidden lg:p-24 items-center">
      <Spotlight
        className="hidden lg:block -top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <h1 className="scroll-m-20 text-4xl font-bold lg:text-6xl tracking-tight z-10 text-center">
        <AnimatedShinyText
          className="max-w-full transition ease-out "
          shimmerWidth={200}
        >
          AI powered solutions that
        </AnimatedShinyText>
        {/* <TypeEffect /> */}
        <WordRotate
          words={[
            "actually work",
            "set appointments",
            "increase efficiency",
            "adapt to your needs",
            "boost revenue",
            "run 24/7",
          ]}
          className="text-center mt-3 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent min-h-32"
        />
      </h1>
      <CalPopup btnText="Start Automating" isHeader={false} />
      {/* <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color="#fff"
        refresh
      /> */}
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
        )}
      />
    </section>
  );
}

export default TacHero;
