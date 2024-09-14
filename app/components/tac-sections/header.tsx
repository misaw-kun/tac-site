import Image from "next/image";
import React from "react";
import CalPopup from "../ui/cal-popup";
import Logo from "@/app/assets/logo.svg";
import Link from "next/link";
import { SparklesCore } from "@/app/(blog)/_components/sparkles";

function TacHeader() {
  return (
    <header className="py-8 lg:py-12 w-full relative">
      <div className="absolute flex justify-between w-full">
        <Link href="/">
          <Image src={Logo} alt="brand-logo" />
          <div className="w-full h-full md:h-[2.5rem] relative mt-3">
            {/* Gradients */}
            <div className="absolute md:inset-x-20 top-0 bg-gradient-to-r from-transparent via-secondary to-transparent h-[2px] w-full md:w-3/4  blur-sm" />
            <div className="absolute md:inset-x-20 top-0 bg-gradient-to-r from-transparent via-accent to-transparent h-px w-full md:w-3/4 " />
            <div className="absolute md:inset-x-60 top-0 bg-gradient-to-r from-transparent via-accent to-transparent h-[5px] w-full md:w-1/4  blur-sm" />
            <div className="absolute md:inset-x-60 top-0 bg-gradient-to-r from-transparent via-secondary to-transparent h-px w-full md:w-1/4 " />

            {/* Core component */}
            <SparklesCore
              background="transparent"
              minSize={0.4}
              maxSize={1}
              particleDensity={1200}
              className="w-full h-full"
              particleColor="#FFFFFF"
            />

            {/* Radial Gradient to prevent sharp edges */}
            <div className="absolute inset-0 w-full h-full bg-background [mask-image:radial-gradient(150px_150px_at_top,transparent_20%,white)]"></div>
          </div>
        </Link>
        <CalPopup btnText="Contact Us" isHeader />
      </div>
    </header>
  );
}

export default TacHeader;
