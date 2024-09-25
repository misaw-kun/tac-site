"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import TacHeader from "@/app/components/tac-sections/header";
import { LampContainer } from "@/app/components/aceternity/lamp";
import BlurFade from "@/app/components/magicui/blur-fade";
import CalPopup from "@/app/components/ui/cal-popup";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { InView } from "react-intersection-observer";
import { BackgroundBeamsWithCollision } from "@/app/components/aceternity/background-beams-with-collision";
import SparklesText from "@/app/components/magicui/sparkles-text";
import Image from "next/image";
import kissMark from "@/app/assets/kissmark.svg";

export default function Page() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <BlurFade>
      <div className="flex flex-col min-h-screen bg-background text-foreground">
        <TacHeader />
        <main className="flex-1 mt-10">
          {/* hero */}
          <LampContainer className="rounded-lg mb-12">
            <section className="py-12 md:py-24">
              <div className="container mx-auto px-4 text-center">
                <motion.h1
                  initial={{ opacity: 0.5, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.5,
                    duration: 0.8,
                    ease: "easeInOut",
                  }}
                  className="md:mt-8 bg-gradient-to-b from-neutral-300 to-accent py-4 bg-clip-text text-center text-4xl font-semibold tracking-tight text-transparent md:text-7xl"
                >
                  Reawaken Your Data
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0.5, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.5,
                    duration: 0.8,
                    ease: "easeInOut",
                  }}
                  className={`text-xl md:text-2xl text-neutral-400 mb-12 max-w-3xl mx-auto transition-opacity`}
                >
                  Sleeping Beauty brings your dormant database back to life with
                  the power of AI.
                </motion.p>
                <div
                  className={`transition-opacity duration-1000 delay-500 flex justify-center ${
                    isVisible ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {/* <ShimmerButton
                    className="shadow-2xl"
                    shimmerColor="#00ff7a"
                    background="rgba(0,2,0,1)"
                    shimmerSize="0.1em"
                  >
                    <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white from-white to-slate-900/10 lg:text-lg p-2">
                      Discover the Magic
                    </span>
                  </ShimmerButton> */}
                  <CalPopup btnText="Discover the Magic" />
                </div>
              </div>
            </section>
          </LampContainer>

          {/* features */}
          <section
            id="features"
            className="py-24 bg-neutral-950 rounded-lg mb-12"
          >
            <div className="container mx-auto px-4">
              <SparklesText
                className="text-3xl md:text-4xl font-bold text-center mb-16"
                text="Magical Features"
              />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {[
                  {
                    title: "AI-powered engagement",
                    description:
                      "engage with leads right after they reply, 24/7",
                  },
                  {
                    title: "Personalized Campaigns",
                    description: "Tailor-made reactivation strategies",
                  },
                  {
                    title: "Real-Time Tracking",
                    description: "Monitor engagement as it happens",
                  },
                ].map((feature, index) => (
                  <RoughNotationGroup key={index}>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                        <span className="text-background text-2xl font-bold">
                          {index + 1}
                        </span>
                      </div>
                      <h4 className="text-2xl font-semibold mb-4">
                        {feature.title}
                      </h4>
                      <p className="text-neutral-400 text-lg">
                        {feature.description}
                      </p>
                    </div>
                  </RoughNotationGroup>
                ))}
              </div>
            </div>
          </section>

          {/* vsl */}
          <section id="video" className="py-24">
            <div className="container mx-auto px-4 text-center">
              <h3 className="text-3xl md:text-4xl font-bold mb-12">
                Sleeping Beauty in Action
              </h3>
              <div
                className="relative aspect-video max-w-full mx-auto overflow-hidden rounded-2xl shadow-2xl"
                style={{
                  position: "relative",
                  paddingBottom: "56.25%",
                  height: 0,
                }}
              >
                <iframe
                  src="https://www.loom.com/embed/542d0e5ee6d34b74a1ceae8a0c575dad?sid=ad2a8276-e762-47ec-836e-23349703a212"
                  allowFullScreen
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                  }}
                ></iframe>
              </div>
            </div>
          </section>

          {/* cta */}
          <section
            id="cta"
            className="py-24 bg-background rounded-lg text-foreground relative overflow-hidden"
          >
            <BackgroundBeamsWithCollision>
              <div className="container mx-auto px-4 text-center z-20">
                <InView threshold={1}>
                  {({ inView, ref, entry }) => (
                    <RoughNotationGroup show={inView}>
                      <h3
                        ref={ref}
                        className="text-3xl md:text-4xl font-bold mb-6 relative"
                      >
                        Ready to{" "}
                        <RoughNotation
                          color="#00ff7a"
                          strokeWidth={2}
                          type="box"
                          animationDelay={1000}
                          order={1}
                          multiline
                        >
                          Wake Your Leads Up
                        </RoughNotation>{" "}
                        ?
                        <span className="absolute translate-y-10 w-full -translate-x-full md:-translate-y-20 text-sm md:-translate-x-20 md:w-fit md:text-4xl text-red-400 font-serif md:rotate-12 mb-0">
                          <RoughNotation
                            strokeWidth={2}
                            padding={-20}
                            type="underline"
                            order={2}
                          >
                            with a kiss
                          </RoughNotation>
                          <Image
                            src={kissMark}
                            alt="wake your leads up with a kiss"
                            className="w-8 md:w-16 h-auto absolute rotate-45 md:-translate-y-16 md:translate-x-20 opacity-30 hidden md:block"
                          />
                        </span>
                      </h3>
                    </RoughNotationGroup>
                  )}
                </InView>
                <p className="text-lg md:text-2xl mb-12 max-w-3xl mx-auto text-neutral-300">
                  Don&apos;t let your valuable leads sleep forever. <br />{" "}
                  It&apos;s time for a magical awakening.
                </p>
                <div className="flex justify-center">
                  <CalPopup btnText="Turn On The Money Printer" />
                </div>
              </div>
            </BackgroundBeamsWithCollision>
          </section>
        </main>
      </div>
    </BlurFade>
  );
}
