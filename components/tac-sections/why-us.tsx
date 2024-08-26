import Image from "next/image";
import { MagicCard } from "../magicui/magic-card";
import { VelocityScroll } from "../magicui/scroll-based-velocity";
import Bespoke from "@/app/assets/bespoke.svg";
import Increase from "@/app/assets/increase.svg";
import Expertise from "@/app/assets/expertise.svg";
import Focus from "@/app/assets/focus.svg";

export function TacWhyUs() {
  return (
    <section className="py-36 my-24">
      <VelocityScroll
        text="Why choose The Automation Company ?"
        default_velocity={2}
        className="font-display text-center text-3xl font-bold tracking-[-0.02em] drop-shadow-sm text-foreground md:text-5xl md:leading-[5rem] h-18"
      />
      <div className="flex h-[800px] w-full flex-col gap-10 lg:h-[550px] lg:flex-row mt-24">
        <MagicCard
          className="cursor-pointer flex-col items-center justify-center shadow-2xl p-8 md:p-16 basis-1/2"
          gradientColor="#262626"
        >
          <h2 className="text-center border-b pb-4 md:text-4xl font-semibold tracking-tight first:mt-0 mb-5">
            Bespoke Service
          </h2>
          <Image src={Bespoke} alt="bespoke-service" className="mb-5" />
          <h4 className="text-normal md:text-2xl font-normal tracking-tight text-neutral-300">
            No two businesses are alike, that's why we believe in working
            closely with you to develop custom solutions as opposed to the
            cookie cutter method.
          </h4>
        </MagicCard>
        <MagicCard
          className="cursor-pointer flex-col items-center justify-center shadow-2xl p-8 basis-1/2"
          gradientColor="#262626"
        >
          <h2 className="text-center border-b pb-4 md:text-4xl font-semibold tracking-tight first:mt-0 mb-5">
            Guaranteed Results
          </h2>
          <Image
            width={312}
            src={Increase}
            alt="guaranteed-results"
            className="mb-5"
          />
          <h4 className="text-normal md:text-2xl font-normal tracking-tight text-neutral-300">
            We guarantee upto 30% increase in conversions, or we work for you
            for free.
          </h4>
        </MagicCard>
      </div>
      <div className="flex h-[800px] w-full flex-col gap-10 lg:h-[550px] lg:flex-row mt-10">
        <MagicCard
          className="cursor-pointer flex-col items-center justify-center shadow-2xl p-8 md:p-16 basis-1/2"
          gradientColor="#262626"
        >
          <h2 className="text-center border-b pb-4 md:text-4xl font-semibold tracking-tight first:mt-0 mb-5">
            Technical Expertise
          </h2>
          <Image
            width={512}
            src={Expertise}
            alt="tech-expert"
            className="mb-5"
          />
          <h4 className="text-normal md:text-2xl font-normal tracking-tight text-neutral-300">
            Our team of experts specializes in creating cutting-edge AI tools
            designed to enhance customer support and streamline your operations
          </h4>
        </MagicCard>
        <MagicCard
          className="cursor-pointer flex-col items-center justify-center shadow-2xl p-8 md:p-16 basis-1/2"
          gradientColor="#262626"
        >
          <h2 className="text-center border-b pb-4 md:text-4xl font-semibold tracking-tight first:mt-0 mb-5">
            Undivided attention
          </h2>
          <Image
            width={384}
            src={Focus}
            alt="bespoke-service"
            className="mb-5"
          />
          <h4 className="text-normal md:text-2xl font-normal tracking-tight text-neutral-300">
            We selectively work with a limited number of businesses at a time,
            ensuring each one receives our full attention and a truly
            personalized experience.
          </h4>
        </MagicCard>
      </div>
    </section>
  );
}
