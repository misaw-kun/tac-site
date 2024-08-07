import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  BotMessageSquare,
  BrainCircuit,
  CalendarCheck,
  MessagesSquare,
} from "lucide-react";
import { GeistSans } from "./fonts";
import Marquee from "react-fast-marquee";
import TypeEffect from "@/components/type-effect";
import GridPattern from "@/components/ui/grid-pattern";
import Ripple from "@/components/magicui/ripple";
import DotPattern from "@/components/magicui/dot-pattern";
import AnimatedShinyText from "@/components/magicui/animated-shiny-text";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import Image from "next/image";
import Logo from "./assets/logo.svg";

export default function Home() {
  return (
    <>
      <header className="pb-7 pt-5 md:pb-10 md:pt-8 lg:pb-14 lg:pt-12 w-full">
        <div className="flex items-center justify-between">
          {/* <h1 className="scroll-m-20 text-3xl font-extrabold lg:text-4xl uppercase text-neutral-300">
            The Automation Co.
          </h1> */}
          <Image src={Logo} alt="brand-logo" width={256} height={64} />
          <Button className={cn("text-md hover:bg-accent")}>
            <BotMessageSquare className="mr-2 h-4 w-4" /> Contact
          </Button>
        </div>
      </header>
      <main className="flex flex-col justify-between">
        {/* hero */}
        <section className="relative flex flex-col w-full h-96 justify-center overflow-hidden lg:p-24 border border-white border-opacity-10 items-center">
          <h1
            className={cn(
              "scroll-m-20 text-4xl font-bold lg:text-6xl pt-6 tracking-tight z-10"
            )}
          >
            <AnimatedShinyText
              className="max-w-full transition ease-out "
              shimmerWidth={200}
            >
              AI powered solutions that
            </AnimatedShinyText>
            <div className="text-center mt-5 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent min-h-full">
              <TypeEffect />
            </div>
          </h1>
        </section>
        {/* biz desc */}
        <section className="relative flex flex-col w-full justify-center overflow-hidden lg:p-24 border border-white border-opacity-10">
          <GridPattern
            width={96}
            height={96}
            x={-1}
            y={-1}
            className="[mask-image:radial-gradient(900px_circle_at_center,transparent,white)]"
          />
          <h2
            className={cn("text-4xl font-medium text-center text-neutral-300")}
          >
            The Automation Company is an{" "}
            <span className="mx-auto bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent font-bold">
              AI Agency
            </span>
          </h2>
          <p
            className={cn(
              "text-2xl leading-10 [&:not(:first-child)]:mt-3 tracking-normal text-center text-neutral-500"
            )}
          >
            that provides state-of-the-art solutions from the bleeding edge of
            technology.
          </p>
        </section>
        <section className="border border-white border-opacity-10 pt-3"></section>
        {/* marquee + USP section */}
        <section className="flex flex-col w-full justify-center border lg:py-14 border-white border-opacity-10">
          <Marquee
            speed={150}
            className={cn(
              "text-4xl md:text-5xl lg:text-6xl font-bold tracking-normal text-neutral-300 min-h-full overflow-hidden"
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
          <div className="mt-16 columns-2 gap-0 flex">
            <div className="border-r border-t border-b border-white border-opacity-10 p-12 flex-1">
              <h3 className="text-xl font-semibold text-neutral-500 flex items-center gap-2">
                <CalendarCheck className="inline" size={20} />
                From manual scheduling
              </h3>
              <h2 className="text-2xl font-semibold pt-2 text-neutral-400">
                To{" "}
                <span className="mx-auto text-neutral-200">
                  {" "}
                  AI-powered efficiency, in seconds.
                </span>
              </h2>
            </div>
            <div className="border-r border-t border-b border-white border-opacity-10 p-12 flex-1">
              <h3 className="text-xl font-semibold text-neutral-500 flex items-center gap-2">
                <MessagesSquare className="inline" size={20} />
                Every interaction is streamlined
              </h3>
              <h2 className="text-2xl font-semibold pt-2 text-neutral-400">
                Work with our team on{" "}
                <span className="mx-auto text-neutral-200">
                  tangible AI solutions, not just buzzwords.
                </span>
              </h2>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
