import React from "react";
import AnimatedShinyText from "../magicui/animated-shiny-text";
import WordRotate from "../magicui/word-rotate";
import CalPopup from "../ui/cal-popup";
import Particles from "../magicui/particles";

function TacHero() {
  return (
    <section className="snap-start relative flex flex-col w-full h-[740px] lg:h-[784px] justify-center overflow-hidden lg:p-24 items-center">
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
      <Particles
        className="absolute inset-0"
        quantity={256}
        ease={10}
        color="#fff"
        refresh
      />
    </section>
  );
}

export default TacHero;
