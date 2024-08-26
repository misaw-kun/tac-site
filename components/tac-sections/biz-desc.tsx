import React from "react";
import GridPattern from "../ui/grid-pattern";

function TacBizDesc() {
  return (
    <section className="snap-start relative flex flex-col w-full justify-center overflow-hidden py-14 lg:py-28">
      <GridPattern
        width={32}
        height={32}
        className="[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]"
      />

      <h2 className="text-2xl lg:text-4xl text-center mx-auto bg-gradient-to-b from-secondary to-accent bg-clip-text text-transparent font-bold min-h-12 mb-4 lg:mb-0">
        The Automation Company is a team of AI experts
      </h2>
      <p className="text-xl leading-8 lg:text-2xl lg:leading-10 [&:not(:first-child)]:mt-3 tracking-normal text-center text-neutral-400">
        that provides the tools and integrations needed to <br /> automate,
        optimize, and scale your business operations seamlessly.
      </p>
    </section>
  );
}

export default TacBizDesc;
