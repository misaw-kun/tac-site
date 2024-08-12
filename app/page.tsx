import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { CalendarCheck, MessagesSquare } from "lucide-react";
import GridPattern from "@/components/ui/grid-pattern";
import AnimatedShinyText from "@/components/magicui/animated-shiny-text";
import Image from "next/image";
import Logo from "./assets/logo.svg";
import Particles from "@/components/magicui/particles";
import WordRotate from "@/components/magicui/word-rotate";
import BoxReveal from "@/components/magicui/box-reveal";
import TextRevealByWord from "@/components/magicui/text-reveal";
import BlurFade from "@/components/magicui/blur-fade";
import FeaturesGrid from "@/components/ui/features-grid";
import DotPattern from "@/components/magicui/dot-pattern";
import Metrics from "@/components/ui/metrics";
import Meteors from "@/components/magicui/meteors";
import CalendlyPopup from "@/components/ui/calendly-popup";
import AiPoweredOne from "@/app/assets/ai-sched-1.png";

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
        <section className="snap-start relative flex flex-col w-full justify-center overflow-hidden lg:py-28">
          <GridPattern
            width={32}
            height={32}
            className="[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]"
          />

          <h2 className="text-4xl text-center mx-auto bg-gradient-to-b from-secondary to-accent bg-clip-text text-transparent font-bold min-h-12">
            The Automation Company is an AI Agency
          </h2>
          <p className="text-2xl leading-10 [&:not(:first-child)]:mt-3 tracking-normal text-center text-neutral-400">
            that provides the tools and integrations needed to <br /> automate,
            optimize, and scale your business operations seamlessly.
          </p>
        </section>
        {/* reveal section */}
        <section className="z-10 flex min-h-[16rem] items-center justify-center snap-start">
          <TextRevealByWord text="Streamline Engagement, Support and Sales Like Never Before" />
        </section>
        {/* yap */}
        <section className="flex flex-col py-24">
          <div className="relative px-12 py-24 flex-1 self-start">
            <h3 className="text-xl font-semibold text-neutral-500 flex items-center gap-2">
              <CalendarCheck className="inline" size={20} />
              From manual scheduling
            </h3>
            <BoxReveal boxColor="#fff">
              <h2 className="text-2xl font-semibold pt-2 text-neutral-400 mb-10">
                To{" "}
                <span className="mx-auto text-neutral-200">
                  {" "}
                  AI-powered efficiency, in seconds.
                </span>
              </h2>
            </BoxReveal>
            <BoxReveal boxColor="#c0c0c0">
              <Image
                src={AiPoweredOne}
                width={576}
                height={576}
                alt="ai-powered-efficiency"
                className="z-12"
              />
            </BoxReveal>
            <GridPattern
              width={32}
              height={32}
              className="[mask-image:radial-gradient(600px_circle_at_center,white,transparent)] opacity-70"
            />
          </div>
          <div className="px-12 py-24 flex-1 self-end">
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
        <section className="snap-start relative overflow-hidden lg:py-24 lg:px-16">
          <h2 className="pb-10 text-4xl font-bold tracking-tight first:mt-0">
            The Automation Advantage
          </h2>
          <FeaturesGrid />
          <DotPattern
            className={cn(
              "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)] opacity-40"
            )}
          />
        </section>
        {/* metrics */}
        <section className="relative snap-start lg:py-24 lg:px-16">
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
          <DotPattern className="[mask-image:radial-gradient(300px_circle_at_center,white,transparent)] opacity-30" />
        </section>
        {/* CTA */}
      </main>
      <footer className="relative lg:py-40 lg:px-16 w-full flex justify-between  overflow-hidden min-h-72 items-center">
        <div className="z-10">
          <h1 className="font-bold lg:text-6xl tracking-normal mb-5 bg-gradient-to-b from-secondary to-accent bg-clip-text text-transparent">
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
