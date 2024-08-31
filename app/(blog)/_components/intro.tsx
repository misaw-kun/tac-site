import TacLogo from "@/app/assets/tac-no-bg.svg";
import Image from "next/image";
import Link from "next/link";

export function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight md:pr-8 flex gap-5">
        <Image className="inline" src={TacLogo} alt="tac-logo" />
        Blog.
      </h1>
      <h4 className="text-center md:text-left text-xl mt-5 md:pl-8">
        Automating the Future: Insights from
        <Link
          href="/"
          className="font-semibold hover:text-accent duration-200 transition-colors mx-1"
        >
          The Automation Company
        </Link>
      </h4>
    </section>
  );
}
