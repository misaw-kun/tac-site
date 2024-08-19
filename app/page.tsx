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
import AiPoweredOne from "@/app/assets/ai-sched-1.png";
import AiPoweredSm from "@/app/assets/ai-sched-sm.png";
import CalPopup from "@/components/ui/cal-popup";

export default function Home() {
  return (
    <BlurFade delay={0.25} inView={true}>
      <header className="py-8 lg:py-12 w-full">
        <div className="flex items-center justify-between">
          <Image src={Logo} alt="brand-logo" />
          <CalPopup btnText="Contact Us" isHeader />
        </div>
      </header>
      <main className="snap-y flex flex-col justify-between">
        {/* hero */}
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
                "increases efficiency",
                "adapt to your needs",
                "boosts revenue",
                "runs 24/7",
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
        {/* biz desc */}
        <section className="snap-start relative flex flex-col w-full justify-center overflow-hidden py-14 lg:py-28">
          <GridPattern
            width={32}
            height={32}
            className="[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]"
          />

          <h2 className="text-2xl lg:text-4xl text-center mx-auto bg-gradient-to-b from-secondary to-accent bg-clip-text text-transparent font-bold min-h-12 mb-4 lg:mb-0">
            The Automation Company is an AI Agency
          </h2>
          <p className="text-xl leading-8 lg:text-2xl lg:leading-10 [&:not(:first-child)]:mt-3 tracking-normal text-center text-neutral-400">
            that provides the tools and integrations needed to <br /> automate,
            optimize, and scale your business operations seamlessly.
          </p>
        </section>
        {/* reveal section */}
        <section className="z-10 flex lg:min-h-[16rem] items-center justify-center snap-start">
          <TextRevealByWord text="Streamline Engagement, Support and Sales Like Never Before" />
        </section>
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
              src={AiPoweredOne}
              sizes="(min-width: 768px)"
              alt="ai-powered-efficiency"
              className="z-20 hidden lg:block lg:w-3/5 h-auto"
            />
            <Image
              src={AiPoweredSm}
              sizes="(max-width: 720px)"
              alt="ai-powered-efficiency"
              className="z-20 lg:hidden"
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
            {/* <BoxReveal boxColor="#c0c0c0">
              <Image
                src={AiPoweredOne}
                alt="ai-powered-efficiency"
                className="z-20 w-3/5 h-auto"
              />
            </BoxReveal> */}
            <GridPattern
              width={32}
              height={32}
              className="[mask-image:radial-gradient(600px_circle_at_center,white,transparent)] opacity-70"
            />
          </div>
        </section>
        {/* benefits */}
        <section className="snap-start relative overflow-hidden py-24 lg:px-16">
          <h2 className="pb-10 text-2xl lg:text-4xl font-bold tracking-tight first:mt-0">
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
        <section className="relative snap-start py-12 lg:py-24 lg:px-16">
          <h2 className="scroll-m-20 pb-2 text-2xl lg:text-4xl font-bold tracking-tight first:mt-0">
            AI In Action
          </h2>
          <p className="text-lg lg:text-2xl lg:leading-10 [&:not(:first-child)]:mt-3 tracking-normal text-neutral-300">
            Success stories from the industry you can trust
          </p>
          <Metrics />
          <p className="text-sm md:text-lg text-neutral-500">
            *Metrics presented are based on data from industry case studies,{" "}
            <br />
            serving as examples of real-world chatbot success but not directly
            associated with The Automation Company.
          </p>
          <DotPattern className="[mask-image:radial-gradient(300px_circle_at_center,white,transparent)] opacity-30" />
        </section>
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
