import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { BotMessageSquare, CalendarCheck, MessagesSquare } from "lucide-react";
import GridPattern from "@/components/ui/grid-pattern";
import AnimatedShinyText from "@/components/magicui/animated-shiny-text";
import Image from "next/image";
import Logo from "./assets/logo.svg";
import Particles from "@/components/magicui/particles";
import ShimmerButton from "@/components/magicui/shimmer-button";
import WordRotate from "@/components/magicui/word-rotate";
import BoxReveal from "@/components/magicui/box-reveal";
import TextRevealByWord from "@/components/magicui/text-reveal";
import BlurFade from "@/components/magicui/blur-fade";
import FeaturesGrid from "@/components/ui/features-grid";
import DotPattern from "@/components/magicui/dot-pattern";
import Metrics from "@/components/ui/metrics";
import Meteors from "@/components/magicui/meteors";
import CalendlyPopup from "@/components/ui/calendly-popup";

export default function Home() {
  return (
    <BlurFade delay={0.25} inView={true}>
      <header className="lg:py-12 w-full">
        <div className="flex items-center justify-between">
          <Image src={Logo} alt="brand-logo" />
          <Button className="text-lg p-6 hover:bg-accent">Contact Us</Button>
        </div>
      </header>
      <main className="snap-y flex flex-col justify-between">
        {/* hero */}
        <section className="snap-start relative flex flex-col w-full h-[784px] justify-center overflow-hidden lg:p-24 items-center">
          <h1 className="scroll-m-20 text-4xl font-bold lg:text-6xl tracking-tight z-10">
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
                "increases efficiency",
                "adapt to your needs",
                "boosts revenue",
                "runs 24/7",
              ]}
              className="text-center mt-3 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent min-h-32"
            />
          </h1>
          <CalendlyPopup btnText="Start Automating" />
          <Particles
            className="absolute inset-0"
            quantity={256}
            ease={10}
            color="#fff"
            refresh
          />
        </section>
        {/* biz desc */}
        <section className="snap-start relative flex flex-col w-full justify-center overflow-hidden lg:py-28 border border-white border-opacity-15">
          <GridPattern
            width={64}
            height={64}
            className="[mask-image:radial-gradient(600px_circle_at_center,transparent,white)]"
          />

          <h2
            className={cn("text-4xl font-medium text-center text-neutral-300")}
          >
            The Automation Company is an{" "}
            <span className="mx-auto bg-gradient-to-b from-secondary to-accent bg-clip-text text-transparent font-bold">
              AI Agency
            </span>
          </h2>
          <p className="text-2xl leading-10 [&:not(:first-child)]:mt-3 tracking-normal text-center text-neutral-400">
            that provides state-of-the-art solutions from the bleeding edge of
            technology.
          </p>
        </section>
        {/* reveal section */}
        <section className="z-10 flex min-h-[16rem] items-center justify-center snap-start">
          <TextRevealByWord text="Streamline Engagement, Support and Sales Like Never Before" />
        </section>
        {/* yap */}
        <section className="snap-start flex w-full justify-center columns-2 border border-neutral-800">
          <div className="border-r border-neutral-800 p-12 flex-1">
            <h3 className="text-xl font-semibold text-neutral-500 flex items-center gap-2">
              <CalendarCheck className="inline" size={20} />
              From manual scheduling
            </h3>
            <BoxReveal boxColor="#fff">
              <h2 className="text-2xl font-semibold pt-2 text-neutral-400">
                To{" "}
                <span className="mx-auto text-neutral-200">
                  {" "}
                  AI-powered efficiency, in seconds.
                </span>
              </h2>
            </BoxReveal>
          </div>
          <div className="p-12 flex-1">
            <h3 className="text-xl font-semibold text-neutral-500 flex items-center gap-2">
              <MessagesSquare className="inline" size={20} />
              Every interaction is streamlined
            </h3>
            <BoxReveal boxColor="#fff">
              <h2 className="text-2xl font-semibold pt-2 text-neutral-400">
                Work with our team on{" "}
                <span className="mx-auto text-neutral-200">
                  tangible AI solutions, not just buzzwords.
                </span>
              </h2>
            </BoxReveal>
          </div>
        </section>
        {/* benefits */}
        <section className="snap-start relative border border-neutral-800 overflow-hidden lg:px-16 lg:py-24 border-b-0">
          <FeaturesGrid />
          <DotPattern
            className={cn(
              "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
            )}
          />
        </section>
        {/* metrics */}
        <section className="border border-neutral-800 relative snap-start lg:py-24 lg:px-16">
          <h2 className="scroll-m-20 pb-2 text-4xl font-bold tracking-tight first:mt-0">
            AI In Action
          </h2>
          <p className="text-2xl leading-10 [&:not(:first-child)]:mt-3 tracking-normal text-neutral-300">
            Success stories from the industry you can trust
          </p>
          <Metrics />
          <p className="text-lg text-neutral-500">
            *numbers are market-research backed data conducted by the individual
            companies or other surveys,
            <br /> thereby, do not attribute to The Automation Company in any
            manner.
          </p>
          <DotPattern
            className={cn(
              "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
            )}
          />
        </section>
        {/* CTA */}
      </main>
      <footer className="relative lg:py-40 lg:px-16 w-full flex justify-between border border-neutral-800 border-t-0 overflow-hidden min-h-72 items-center">
        <div className="z-10">
          <h1 className="font-bold lg:text-6xl tracking-normal mb-5 bg-gradient-to-br from-secondary to-accent bg-clip-text text-transparent">
            Ready to Automate?
          </h1>
          <h2 className="lg:text-3xl font-semibold tracking-tight text-neutral-500">
            <AnimatedShinyText
              className="max-w-full transition ease-out"
              shimmerWidth={200}
            >
              For businesses of the future
            </AnimatedShinyText>
          </h2>
        </div>
        <CalendlyPopup btnText="Book A Call" />
        <Meteors number={30} />
      </footer>
    </BlurFade>
  );
}
