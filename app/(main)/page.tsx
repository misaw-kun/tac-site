import { cn } from "@/lib/utils";
import { CalendarCheck, MessagesSquare } from "lucide-react";
import GridPattern from "@/app/components/ui/grid-pattern";
import AnimatedShinyText from "@/app/components/magicui/animated-shiny-text";
import Image from "next/image";
import BoxReveal from "@/app/components/magicui/box-reveal";
import BlurFade from "@/app/components/magicui/blur-fade";
import FeaturesGrid from "@/app/components/ui/features-grid";
import DotPattern from "@/app/components/magicui/dot-pattern";
import Meteors from "@/app/components/magicui/meteors";
import TangibleAI from "@/app/assets/tangible.svg";
import Efficiency from "@/app/assets/efficiency.svg";
import CalPopup from "@/app/components/ui/cal-popup";
import TacHeader from "@/app/components/tac-sections/header";
import TacHero from "@/app/components/tac-sections/hero";
import TacBizDesc from "@/app/components/tac-sections/biz-desc";
import TacScrollReveal from "@/app/components/tac-sections/scroll-reveal";
import TacMetrics from "@/app/components/tac-sections/industry-metrics";

export default function Home() {
  return (
    <BlurFade delay={0.25} inView={true}>
      <TacHeader />
      <main className="snap-y flex flex-col justify-between">
        {/* hero */}
        <TacHero />
        {/* biz desc */}
        <TacBizDesc />
        {/* reveal section */}
        <TacScrollReveal />
        {/* yap */}
        <section className="flex flex-col py-24 gap-10">
          <div className="relative px-6 py-12 lg:px-12 lg:py-24 flex-1 self-start">
            <h3 className="text-lg md:text-2xl font-semibold text-neutral-500 flex items-center gap-2">
              <CalendarCheck className="inline w-5 md:w-7 h-auto" />
              From manual scheduling
            </h3>
            <BoxReveal boxColor="#fff">
              <h2 className="text-xl md:text-3xl font-semibold pt-2 text-neutral-400 mb-12">
                To{" "}
                <span className="mx-auto text-neutral-200">
                  {" "}
                  AI-powered efficiency, in seconds.
                </span>
              </h2>
            </BoxReveal>
            <Image
              src={Efficiency}
              sizes="(max-width: 720px)"
              alt="ai-powered-efficiency"
              className="z-20"
              width={650}
            />
            <GridPattern
              width={32}
              height={32}
              className="[mask-image:radial-gradient(600px_circle_at_center,white,transparent)] opacity-70"
            />
          </div>
          <div className="relative px-6 py-12 lg:px-12 lg:py-24 flex-1 self-end">
            <h3 className="text-lg md:text-2xl font-semibold text-neutral-500 flex items-center gap-2">
              <MessagesSquare className="inline w-5 md:w-7 h-auto" />
              Cut to the chase
            </h3>
            <BoxReveal boxColor="#fff">
              <h2 className="text-xl md:text-3xl font-semibold pt-2 text-neutral-400 mb-10">
                Work with us{" "}
                <span className="mx-auto text-neutral-200">
                  {" "}
                  on tangible AI solutions, not buzzwords
                </span>
              </h2>
            </BoxReveal>
            <Image src={TangibleAI} alt="tangible-AI-solutions" width={784} />
            <GridPattern
              width={32}
              height={32}
              className="[mask-image:radial-gradient(600px_circle_at_center,white,transparent)] opacity-70"
            />
          </div>
        </section>
        {/* benefits */}
        <section className="snap-start relative overflow-hidden py-12 pb-24 lg:px-16">
          <h2 className="text-2xl lg:text-5xl font-bold tracking-tight first:mt-0 pb-2">
            The Automation Advantage
          </h2>
          <p className="text-lg lg:text-2xl lg:leading-10 [&:not(:first-child)]:mt-3 tracking-normal text-neutral-300 pb-12">
            Future-Ready Solutions, Today
          </p>
          <FeaturesGrid />
          <DotPattern
            className={cn(
              "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)] opacity-40"
            )}
          />
        </section>
        {/* metrics */}
        <TacMetrics />
        {/* CTA */}
      </main>
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
    </BlurFade>
  );
}
