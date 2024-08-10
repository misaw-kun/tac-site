import { Activity, Blocks, ShieldCheck, Workflow } from "lucide-react";
import { BentoCard, BentoGrid } from "../magicui/bento-grid";

const features = [
  {
    Icon: Blocks,
    name: "01. Seamless Integrations",
    description:
      "No matter what CRM or third-party services you use, our solutions integrate effortlessly, ensuring an uninterrupted workflow.",
    href: "/",
    cta: "Learn more",
    background: (
      <img alt="bg-img" className="absolute -right-20 -top-20 opacity-60" />
    ),
    className: "col-span-3 lg:col-span-2",
  },
  {
    Icon: Activity,
    name: "02. 24/7 Availability",
    description:
      "Our chat and voice bots are on call around the clock, providing consistent support and engagement whenever your customers need it.",
    href: "/",
    cta: "Learn more",
    background: (
      <img alt="bg-img" className="absolute -right-20 -top-20 opacity-60" />
    ),
    className: "col-span-3 lg:col-span-1",
  },
  {
    Icon: ShieldCheck,
    name: "03. Secure and Compliant",
    description:
      "Rest easy knowing that our solutions adhere to the highest standards of data security and regulatory compliance, keeping your customer information safe.",
    href: "/",
    cta: "Learn more",
    background: (
      <img alt="bg-img" className="absolute -right-20 -top-20 opacity-60" />
    ),
    className: "col-span-3 lg:col-span-1",
  },
  {
    Icon: Workflow,
    name: "04. Customizable and Scalable",
    description:
      "Tailor our chat and voice bots to meet your specific business needs, and scale up effortlessly as your business grows.",
    href: "/",
    cta: "Learn more",
    background: (
      <img alt="bg-img" className="absolute -right-20 -top-20 opacity-60" />
    ),
    className: "col-span-3 lg:col-span-2",
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
