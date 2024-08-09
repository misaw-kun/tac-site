import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { BotMessageSquare, CalendarCheck, MessagesSquare } from "lucide-react";
import Marquee from "react-fast-marquee";
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

export default function Home() {
  return (
    <BlurFade delay={0.25} inView={true}>
      <header className="pb-7 pt-5 md:pb-10 md:pt-8 lg:pb-14 lg:pt-12 w-full">
        <div className="flex items-center justify-between">
          <Image src={Logo} alt="brand-logo" />
          <Button className="text-lg p-6">Contact Us</Button>
        </div>
      </header>
      <main className="flex flex-col justify-between">
        {/* hero */}
        <section className="relative flex flex-col w-full h-fit justify-center overflow-hidden lg:p-24 border border-white border-opacity-15 items-center">
          <h1
            className={cn(
              "scroll-m-20 text-4xl font-bold lg:text-5xl pt-6 tracking-tight z-10"
            )}
          >
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
          <ShimmerButton className="shadow-2xl  mt-10 z-20">
            <BotMessageSquare className="mr-2 h-4 w-4" />
            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
              Start Automating
            </span>
          </ShimmerButton>
          <Particles
            className="absolute inset-0"
            quantity={256}
            ease={10}
            color="#fff"
            refresh
          />
        </section>
        {/* biz desc */}
        <section className="relative flex flex-col w-full justify-center overflow-hidden lg:py-24 border border-white border-opacity-15 border-t-0 border-b-0">
          <GridPattern
            width={96}
            height={96}
            x={-1}
            y={-1}
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
          <p className="text-2xl leading-10 [&:not(:first-child)]:mt-3 tracking-normal text-center text-neutral-500">
            that provides state-of-the-art solutions from the bleeding edge of
            technology.
          </p>
        </section>
        <section className="border border-white border-opacity-15 pt-3 bg-neutral-900"></section>
        {/* marquee + USP section */}
        <section className="flex flex-col w-full justify-center border lg:pt-14 border-white border-opacity-15 border-b-0 border-t-0">
          <Marquee
            speed={150}
            className={cn(
              "text-4xl md:text-5xl lg:text-6xl font-bold tracking-normal text-neutral-300 overflow-hidden min-h-20"
            )}
          >
            <span className="mr-12 hover:bg-gradient-to-r from-secondary to-accent hover:bg-clip-text hover:text-transparent">
              01. Seamless CRM Integration
            </span>
            <span className="lg:mr-12 md:mr-8 mr-6">/</span>
            <span className="mr-12 hover:bg-gradient-to-r from-secondary to-accent hover:bg-clip-text hover:text-transparent">
              02. 24/7 Availability
            </span>
            <span className="lg:mr-12 md:mr-8 mr-6">/</span>
            <span className="mr-12 hover:bg-gradient-to-r from-secondary to-accent hover:bg-clip-text hover:text-transparent">
              03. Secure and Compliant
            </span>
            <span className="lg:mr-12 md:mr-8 mr-6">/</span>
            <span className="mr-12 hover:bg-gradient-to-r from-secondary to-accent hover:bg-clip-text hover:text-transparent">
              04. Customizable and Scalable
            </span>
            <span className="lg:mr-12 md:mr-8 mr-6">/</span>
          </Marquee>
          {/* yap */}
          <div className="mt-16 columns-2 gap-0 flex">
            <div className="border-r border-t border-white border-opacity-15 p-12 flex-1">
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
            <div className="border-t border-white border-opacity-15 p-12 flex-1">
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
          </div>
        </section>
        <section className="border border-white border-opacity-15 pt-3 bg-neutral-900"></section>
        {/* reveal section */}
        <section className="z-10 flex min-h-[16rem] items-center justify-center border border-white border-opacity-15 pt-3">
          <TextRevealByWord text="Streamline Engagement, Support and Sales Like Never Before" />
        </section>
      </main>
    </BlurFade>
  );
}
