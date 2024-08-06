import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { BotMessageSquare } from "lucide-react";
import { GeistSans } from "./fonts";
import Marquee from "react-fast-marquee";
import TypeEffect from "@/components/type-effect";
import GridPattern from "@/components/ui/grid-pattern";
import Ripple from "@/components/magicui/ripple";
import DotPattern from "@/components/magicui/dot-pattern";
import AnimatedShinyText from "@/components/magicui/animated-shiny-text";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";

export default function Home() {
  return (
    <>
      <header className="pb-7 pt-5 md:pb-10 md:pt-8 lg:pb-14 lg:pt-12 w-full">
        <div className="flex items-center justify-between">
          <h1 className="scroll-m-20 text-3xl font-extrabold lg:text-4xl uppercase text-neutral-300">
            The Automation Co.
          </h1>
          <Button
            className={cn("text-md hover:bg-accent", GeistSans.className)}
          >
            <BotMessageSquare className="mr-2 h-4 w-4" /> Contact
          </Button>
        </div>
      </header>
      <main className="flex flex-col justify-between">
        {/* hero */}
        <section className="relative flex flex-col w-full h-96 justify-center overflow-hidden lg:p-24 border border-white border-opacity-10 items-center">
          <h1
            className={cn(
              "scroll-m-20 text-4xl font-medium lg:text-6xl pt-6 tracking-tighter z-10",
              GeistSans.className
            )}
          >
            <AnimatedShinyText
              className="max-w-full transition ease-out "
              shimmerWidth={200}
            >
              AI powered solutions that
            </AnimatedShinyText>
            <div className="text-center mt-5 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
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
          <p
            className={cn(
              "text-2xl leading-10 [&:not(:first-child)]:mt-6 tracking-normal text-center text-neutral-500",
              GeistSans.className
            )}
          >
            The Automation Company is an AI agency that provides
            state-of-the-art solutions from the bleeding edge of technology. Our
            team, fueled by creativity and passion, is committed to transforming
            your business through seamless automation and exceptional customer
            service. Discover the power of AI with solutions that are tailored
            to your unique needs and designed to drive your success.
          </p>
        </section>
        <section className="border border-white border-opacity-10 pt-3"></section>
        {/* marquee + USP section */}
        <section className="flex flex-col w-full justify-center overflow-hidden border lg:py-16 border-white border-opacity-10">
          <Marquee
            speed={150}
            className={cn(
              "text-4xl md:text-5xl lg:text-7xl font-bold overflow-hidden tracking-normal text-neutral-300"
            )}
          >
            <span className="mr-12 hover:text-secondary">
              01. Seamless CRM Integration
            </span>
            <span className="lg:mr-12 md:mr-8 mr-6">/</span>
            <span className="mr-12 hover:text-secondary">
              02. 24/7 Availability
            </span>
            <span className="lg:mr-12 md:mr-8 mr-6">/</span>
            <span className="mr-12 hover:text-secondary">
              03. Secure and Compliant
            </span>
            <span className="lg:mr-12 md:mr-8 mr-6">/</span>
            <span className="mr-12 hover:text-secondary">
              04. Customizable and Scalable
            </span>
            <span className="lg:mr-12 md:mr-8 mr-6">/</span>
          </Marquee>
          <div className="mt-16 columns-2 gap-0">
            <div className="border-r border-t border-b border-white border-opacity-10 p-12">
              <h3 className="text-xl text-neutral-400">
                From manual scheduling
              </h3>
              <h2 className="text-2xl pt-2">
                to AI-powered efficiency, in seconds.
              </h2>
            </div>
            <div className="p-12 border-t border-b border-white border-opacity-10">
              world
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
