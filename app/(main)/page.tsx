import { cn } from "@/lib/utils";
import { CalendarCheck, MessagesSquare } from "lucide-react";
import GridPattern from "@/app/components/ui/grid-pattern";
import Image from "next/image";
import BlurFade from "@/app/components/magicui/blur-fade";
import FeaturesGrid from "@/app/components/ui/features-grid";
import DotPattern from "@/app/components/magicui/dot-pattern";
import TangibleAI from "@/app/assets/tangible.svg";
import Efficiency from "@/app/assets/efficiency.svg";
import TacHeader from "@/app/components/tac-sections/header";
import TacHero from "@/app/components/tac-sections/hero";
import TacBizDesc from "@/app/components/tac-sections/biz-desc";
import TacScrollReveal from "@/app/components/tac-sections/scroll-reveal";
import TacMetrics from "@/app/components/tac-sections/industry-metrics";
import SparklesText from "../components/magicui/sparkles-text";
import TacFooter from "../components/tac-sections/footer";
import TacLegalFooter from "../components/tac-sections/legal-footer";

export default function Home() {
  return (
    <BlurFade delay={0.25} inView={true}>
      <TacHeader isHome />
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
              From manual handling
            </h3>
            <h2 className="text-xl md:text-3xl font-semibold pt-2 text-neutral-400 mb-12">
              To{" "}
              <SparklesText
                className="inline mx-auto font-medium text-neutral-200  text-xl md:text-3xl"
                text="AI-powered efficiency, in seconds."
              />
            </h2>
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
            <h2 className="text-xl md:text-3xl font-semibold pt-2 text-neutral-400 mb-12">
              Work with us{" "}
              <SparklesText
                className="inline mx-auto font-medium text-neutral-200 text-xl md:text-3xl"
                text="on tangible AI solutions, not buzzwords"
              />
            </h2>
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
      <TacFooter />
      <TacLegalFooter />
    </BlurFade>
  );
}
