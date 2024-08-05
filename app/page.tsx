import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { BotMessageSquare } from "lucide-react";
import GridPattern from "@/components/ui/grid-pattern";
import { GeistSans } from "./fonts";
import Marquee from "react-fast-marquee";
import TypeEffect from "@/components/type-effect";

export default function Home() {
  return (
    <>
      <header className="pb-7 pt-5 md:pb-10 md:pt-8 lg:pb-14 lg:pt-12 w-full">
        <div className="flex items-center justify-between">
          <h1 className="scroll-m-20 text-3xl font-extrabold lg:text-4xl uppercase">
            The Automation Co.
          </h1>
          <Button className="text-md hover:bg-secondary">
            <BotMessageSquare className="mr-2 h-4 w-4" /> Contact
          </Button>
        </div>
      </header>
      <main className="flex flex-col justify-between">
        {/*  */}
        <section className="relative flex flex-col w-full h-96 justify-center overflow-hidden lg:p-24 border border-white border-opacity-10 items-center">
          <GridPattern
            width={96}
            height={96}
            x={-1}
            y={-1}
            className={cn(
              "[mask-image:radial-gradient(900px_circle_at_center,transparent,white)]"
            )}
          />
          <h1
            className={cn(
              "scroll-m-20 text-4xl font-semibold lg:text-5xl text-primary pt-6 tracking-tighter",
              GeistSans.className
            )}
          >
            AI powered solutions that
            <div className="text-center mt-5 text-secondary">
              <TypeEffect />
            </div>
          </h1>
        </section>
        {/*  */}
        <section className="flex flex-col w-full justify-center overflow-hidden lg:p-24 border border-white border-opacity-10">
          <p
            className={cn(
              "text-xl leading-9 [&:not(:first-child)]:mt-6 tracking-normal text-center",
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
        {/*  */}
        <section className="flex flex-col w-full justify-center overflow-hidden border lg:py-20 border-white border-opacity-10">
          <Marquee
            speed={150}
            className={cn(
              "text-4xl md:text-5xl lg:text-7xl font-bold overflow-hidden tracking-normal"
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
        </section>
      </main>
    </>
  );
}
