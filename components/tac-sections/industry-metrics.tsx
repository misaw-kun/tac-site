import React from "react";
import Metrics from "../ui/metrics";
import DotPattern from "../magicui/dot-pattern";

function TacMetrics() {
  return (
    <section className="relative snap-start py-12 lg:py-24 lg:px-16">
      <h2 className="scroll-m-20 pb-2 text-3xl lg:text-5xl font-bold tracking-tight first:mt-0">
        AI In Action
      </h2>
      <p className="text-lg lg:text-2xl lg:leading-10 [&:not(:first-child)]:mt-3 tracking-normal text-neutral-300">
        Success stories from the industry you can trust
      </p>
      <Metrics />
      <p className="text-sm md:text-lg text-neutral-500">
        *Metrics presented are based on data from industry case studies, <br />
        serving as examples of real-world chatbot success but not directly
        associated with The Automation Company.
      </p>
      <DotPattern className="[mask-image:radial-gradient(300px_circle_at_center,white,transparent)] opacity-30" />
    </section>
  );
}

export default TacMetrics;
