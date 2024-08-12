import { MagicCard } from "../magicui/magic-card";
import NumberTicker from "../magicui/number-ticker";
import { Button } from "./button";
import Image from "next/image";
import Marquee from "../magicui/marquee";

import monogoDbLogo from "@/app/assets/mongodb.svg";
import amtrakLogo from "@/app/assets/amtrak.svg";
import tmobileLogo from "@/app/assets/tmobile.png";
import marriotLogo from "@/app/assets/marriot.svg";
import dominosLogo from "@/app/assets/dominos.svg";
import capitalOneLogo from "@/app/assets/capitalone.svg";
import unicefLogo from "@/app/assets/unicef.png";
import unileverLogo from "@/app/assets/unilever.png";

import { ArrowDownWideNarrow, ArrowUpNarrowWide } from "lucide-react";

const companyData = [
  {
    logo: amtrakLogo,
    number: 800,
    unit: "%",
    increase: true,
    metric: "return on investment",
    link: "#",
  },
  {
    logo: unicefLogo,
    number: 96,
    unit: "%",
    metric: "response time",
    link: "#",
  },
  {
    logo: marriotLogo,
    number: 88,
    increase: true,
    unit: "%",
    metric: "containment rate",
    link: "#",
  },
  {
    logo: tmobileLogo,
    number: 84,
    increase: true,
    unit: "%",
    metric: "customer satisfaction",
    link: "#",
  },
  {
    logo: capitalOneLogo,
    number: 40,
    unit: "%",
    metric: "calls taken",
    link: "#",
  },
  {
    logo: dominosLogo,
    number: 28,
    increase: true,
    unit: "%",
    metric: "sales",
    link: "#",
  },
  {
    logo: monogoDbLogo,
    number: 70,
    unit: "%",
    increase: true,
    metric: "leads",
    link: "#",
  },
  {
    logo: unileverLogo,
    number: 75,
    unit: "%",
    metric: "call center costs",
    link: "#",
  },
];

export default function Metrics() {
  return (
    <div className="relative overflow-hidden h-[576px] w-full flex lg:py-20">
      <Marquee pauseOnHover className="[--duration:20s]">
        {companyData.map((data) => (
          <MagicCard
            key={data.metric}
            className="cursor-pointer flex flex-col p-10 shadow-2xl whitespace-nowrap min-w-72"
            gradientColor="#262626"
          >
            <div className="max-w-40 aspect-video">
              <Image src={data.logo} alt="company-logo" />
            </div>
            <div className="my-auto">
              <p className="text-5xl font-bold tracking-tighter text-primary flex items-center gap-3">
                <span>
                  <NumberTicker value={data.number} />
                  {data.unit}
                </span>
                <span className="text-accent">
                  {data.increase ? (
                    <ArrowUpNarrowWide size={48} />
                  ) : (
                    <ArrowDownWideNarrow size={48} />
                  )}
                </span>
              </p>
              <p className="text-2xl font-medium pt-2 text-neutral-300">
                {data.metric}
              </p>
            </div>
            {/* <Button
              variant="ghost"
              className="self-start font-semibold text-accent"
            >
              Read Story
            </Button> */}
          </MagicCard>
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black"></div>
    </div>
  );
}
