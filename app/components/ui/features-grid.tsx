import { Activity, Blocks, Share2, ShieldCheck } from "lucide-react";
import { BentoCard, BentoGrid } from "../magicui/bento-grid";
import BeamIllustration from "./beam-illustration";
import Image from "next/image";
import Customizable from "@/app/assets/customizable.svg";
import Available from "@/app/assets/available.svg";
import { SecureIllustration } from "./secure-illustration";

const features = [
  {
    Icon: Share2,
    name: "01. Seamless Integrations",
    description:
      "No matter what CRM or third-party services you use, our solutions integrate effortlessly, ensuring an uninterrupted workflow.",
    href: "/",
    cta: "Learn more",
    background: (
      <BeamIllustration className="absolute top-0 left-0 md:left-10 md:top-2 w-[300px] h-auto md:h-[300px] md:w-[600px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
    ),
    className: "col-span-3 lg:col-span-2 text-lg",
  },
  {
    Icon: Activity,
    name: "02. 24/7 Availability",
    description:
      "Our chat and voice bots are on call around the clock, Providing consistent support and engagement whenever your customers need it.",
    href: "/",
    cta: "Learn more",
    background: (
      <Image
        src={Available}
        alt="available round the clock"
        className="absolute top-0 left-0 md:top-2 w-[300px] h-auto md:h-auto md:w-[600px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-10 opacity-75"
      />
    ),
    className: "col-span-3 lg:col-span-1 text-lg",
  },
  {
    Icon: Blocks,
    name: "03. Customizable and Scalable",
    description:
      "Tailor our chat and voice bots to meet your specific business needs, and scale up effortlessly as your business grows.",
    href: "/",
    cta: "Learn more",
    background: (
      <Image
        src={Customizable}
        alt="ai-powered-efficiency"
        className="absolute top-0 left-0 md:top-2 w-[300px] h-auto md:h-auto md:w-[600px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-10 opacity-75"
      />
    ),
    className: "col-span-3 lg:col-span-1 text-lg",
  },
  {
    Icon: ShieldCheck,
    name: "04. Secure and Compliant",
    description:
      "Rest easy knowing that our solutions adhere to the highest standards of data security and regulatory compliance, ensuring your customer information is safe.",
    href: "/",
    cta: "Learn more",
    background: (
      <SecureIllustration className="absolute top-0 left-0 md:left-10 md:top-2 w-[300px] h-auto md:h-[300px] md:w-[600px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
    ),
    className: "col-span-3 lg:col-span-2 text-lg",
  },
];

const FeaturesGrid = () => {
  return (
    <BentoGrid className="z-10">
      {features.map((feature) => (
        <BentoCard key={feature.name} {...feature} />
      ))}
    </BentoGrid>
  );
};

export default FeaturesGrid;
