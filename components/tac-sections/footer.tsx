import React from "react";
import AnimatedShinyText from "../magicui/animated-shiny-text";
import CalPopup from "../ui/cal-popup";
import Meteors from "../magicui/meteors";

function TacFooter() {
  return (
    <footer className="relative py-20 lg:py-40 lg:px-16 w-full flex flex-col md:flex-row justify-between overflow-hidden min-h-72 items-center">
      <div className="z-10">
        <h1 className="font-bold text-3xl lg:text-6xl tracking-normal mb-5 bg-gradient-to-b from-secondary to-accent bg-clip-text text-transparent">
          Ready to Automate?
        </h1>
        <h2 className="text-xl text-center md:text-left md:text-3xl font-semibold tracking-tight text-neutral-500">
          <AnimatedShinyText
            className="max-w-full transition ease-out"
            shimmerWidth={200}
          >
            For businesses of the future
          </AnimatedShinyText>
        </h2>
      </div>
      <CalPopup btnText="Book A Call" isHeader={false} />
      <Meteors number={30} />
    </footer>
  );
}

export default TacFooter;
