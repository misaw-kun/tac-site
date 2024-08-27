import { CircleCheckBig, CircleX } from "lucide-react";
import GridPattern from "@/components/ui/grid-pattern";
import Image from "next/image";
import BoxReveal from "@/components/magicui/box-reveal";
import BlurFade from "@/components/magicui/blur-fade";
import CallReduction from "@/app/assets/calls.svg";
import IncSales from "@/app/assets/sales.svg";
import Leads from "@/app/assets/leads.svg";
import TacFooter from "@/components/tac-sections/footer";
import TacHeader from "@/components/tac-sections/header";
import TacHero from "@/components/tac-sections/hero";
import TacBizDesc from "@/components/tac-sections/biz-desc";
import TacScrollReveal from "@/components/tac-sections/scroll-reveal";
import TacMetrics from "@/components/tac-sections/industry-metrics";
import { BorderBeam } from "@/components/magicui/border-beam";
import AnimatedShinyText from "@/components/magicui/animated-shiny-text";
import { MagicCard } from "@/components/magicui/magic-card";
import SparklesText from "@/components/magicui/sparkles-text";
import { TacWhyUs } from "@/components/tac-sections/why-us";
export default function Page() {
  return (
    <BlurFade delay={0.25} inView={true}>
      <TacHeader />
      <main className="snap-y flex flex-col justify-between">
        {/* hero */}
        <TacHero />
        {/* biz desc */}
        <TacBizDesc />
        {/* why chose tac */}
        <TacWhyUs />
        {/* reveal section */}
        <TacScrollReveal />
        {/* key to future section */}
        <section className="snap-y relative flex w-full flex-col items-center justify-start overflow-hidden rounded-lg border border-background md:shadow-xl p-4 md:py-32 md:my-40 my-20">
          <div className="mx-auto">
            <div className="hidden md:flex gap-5 justify-center items-center md:items-baseline pb-10 flex-row">
              <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-r from-secondary to-accent bg-clip-text text-center text-2xl md:text-6xl font-semibold leading-none text-transparent">
                AI Automation
              </span>
              <span className="text-2xl md:text-6xl font-medium text-neutral-500">
                is the
              </span>
              <AnimatedShinyText
                className="text-2xl md:text-6xl font-medium"
                shimmerWidth={100}
              >
                <span>key to the future</span>
              </AnimatedShinyText>
            </div>
            <h1 className="md:hidden pb-8 text-3xl font-semibold tracking-tight">
              AI Automation is the key to the future
            </h1>
            <h2 className="md:text-justify pb-5 text-xl md:text-3xl font-normal md:tracking-normal tracking-wide text-neutral-400">
              It&apos;s the difference between the countless businesses
              struggling with volume <br className="hidden md:inline-flex" />{" "}
              and the ones that thrive with
              <span className="mx-2 md:mx-3 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent font-semibold">
                automation and efficiency!
              </span>
            </h2>
            <div className="flex h-[650px] flex-col w-full gap-10 lg:h-[384px] md:flex-row mt-6 md:mt-12 bg-background">
              <MagicCard
                className="flex flex-col justify-center items-center p-8 opacity-60"
                gradientColor="#E60000"
                gradientOpacity={0.1}
                gradientSize={500}
              >
                <h3 className="text-xl md:text-4xl font-semibold tracking-tight text-neutral-400 mb-5 md:mb-10 text-center">
                  Without Automation
                </h3>
                <ul className="text-sm md:text-2xl flex flex-col gap-5">
                  <li className="inline-flex items-center gap-2">
                    <CircleX className="text-red-500" />
                    Manual Inquiry Handling
                  </li>
                  <li className="inline-flex items-center gap-2">
                    <CircleX className="text-red-500" />
                    Higher Staff Workload
                  </li>
                  <li className="inline-flex items-center gap-2">
                    <CircleX className="text-red-500" />
                    Lower Conversion Rates
                  </li>
                  <li className="inline-flex items-center gap-2">
                    <CircleX className="text-red-500" />
                    Increased Operational Costs
                  </li>
                  <li className="inline-flex items-center gap-2">
                    <CircleX className="text-red-500" />
                    Limited Support Hours
                  </li>
                </ul>
              </MagicCard>
              <MagicCard
                className="flex flex-col justify-center items-center p-8 relative overflow-hidden"
                gradientColor="#00FF7A"
                gradientOpacity={0.1}
                gradientSize={500}
              >
                <h3 className="text-xl md:text-4xl font-semibold tracking-tight text-neutral-200 mb-5 md:mb-10 text-center">
                  With Automation
                </h3>
                <ul className="text-sm md:text-2xl flex flex-col gap-5">
                  <li className="inline-flex items-center gap-2">
                    <CircleCheckBig className="text-accent" />
                    24/7 patient support.
                  </li>
                  <li className="inline-flex items-center gap-2">
                    <CircleCheckBig className="text-accent" />
                    Reduced staff workload.
                  </li>
                  <li className="inline-flex items-center gap-2">
                    <CircleCheckBig className="text-accent" />
                    Increased conversion rates.
                  </li>
                  <li className="inline-flex items-center gap-2">
                    <CircleCheckBig className="text-accent" />
                    Lower operational costs.
                  </li>
                  <li className="inline-flex items-center gap-2">
                    <CircleCheckBig className="text-accent" />
                    Higher customer satisfaction.
                  </li>
                </ul>
              </MagicCard>
              <GridPattern
                width={16}
                height={16}
                className="[mask-image:radial-gradient(900px_circle_at_center,white,transparent)] opacity-25"
              />
            </div>
          </div>
          <BorderBeam
            size={250}
            duration={8}
            delay={9}
            colorFrom="#00FFBF"
            colorTo="#00FF7A"
          />
        </section>
        {/* yap */}
        <section className="snap-y flex flex-col py-24 gap-10 md:mx-16">
          <h1 className="scroll-m-20 text-3xl font-bold tracking-tight md:text-5xl">
            Unlock Growth with AI-Powered Chatbots
          </h1>
          <div className="relative px-6 py-12 lg:px-12 lg:py-24 flex items-center justify-center md:flex-row flex-col">
            <BoxReveal boxColor="#fff">
              <SparklesText
                className="text-2xl md:text-4xl font-medium pt-2 text-neutral-200 mb-10"
                text="How much would your business make with 28% more sales?"
              />
            </BoxReveal>
            <Image
              className="z-20"
              width={384}
              src={IncSales}
              alt="increased sales"
            />
            <GridPattern
              width={32}
              height={32}
              className="[mask-image:radial-gradient(600px_circle_at_center,white,transparent)] opacity-70"
            />
          </div>
          <div className="relative px-6 py-12 lg:px-12 lg:py-24 flex items-center justify-center md:flex-row flex-col">
            <Image
              className="z-20 order-last md:order-first"
              width={512}
              src={CallReduction}
              alt="call-reduction"
            />
            <BoxReveal boxColor="#fff">
              <SparklesText
                className="text-2xl md:text-4xl font-medium pt-2 text-neutral-200 mb-10"
                text="What about a 40% reduction in calls taken?"
              />
            </BoxReveal>
            <GridPattern
              width={32}
              height={32}
              className="[mask-image:radial-gradient(600px_circle_at_center,white,transparent)] opacity-70"
            />
          </div>
          <div className="relative px-6 py-12 lg:px-12 lg:py-24 flex items-center justify-between md:flex-row flex-col">
            <BoxReveal boxColor="#fff">
              <SparklesText
                className="text-2xl md:text-4xl font-medium pt-2 text-neutral-200 mb-10"
                text="70% more leads?"
              />
            </BoxReveal>
            <Image
              className="z-20 order-last md:order-last"
              width={512}
              src={Leads}
              alt="more-leads"
            />
            <GridPattern
              width={32}
              height={32}
              className="[mask-image:radial-gradient(600px_circle_at_center,white,transparent)] opacity-70"
            />
          </div>
          <h2 className="pb-2 text-xl font-medium md:text-2xl md:font-semibold tracking-tight first:mt-0 leading-normal text-neutral-300">
            These aren&apos;t just numbers - they&apos;re real outcomes
            businesses are achieving with AI-driven chat solutions. Transform
            your customer interactions and watch your business thrive.
          </h2>
        </section>
        {/* metrics */}
        <TacMetrics />
        {/* CTA */}
      </main>
      <TacFooter isPromo />
    </BlurFade>
  );
}
