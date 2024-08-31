import Container from "@/app/(blog)/_components/container";
import { EXAMPLE_PATH } from "@/lib/constants";
import { BackgroundBeams } from "./bg-beams";
import Link from "next/link";
import WordRotate from "@/app/components/magicui/word-rotate";

export function Footer() {
  return (
    <footer className="relative border-t border-neutral-200 bg-neutral-950">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center justify-between">
          <WordRotate
            className="text-4xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent"
            words={[
              "Need More Proof ?",
              "Think It's Time ?",
              "Ready to Transform ?",
              "Ready to Elevate ?",
            ]}
          />
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2 z-10">
            <Link
              href="/"
              className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              Learn More
            </Link>
            <Link
              href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
              className="mx-3 font-bold hover:underline"
            >
              Let&apos;s Make It Happen
            </Link>
          </div>
        </div>
      </Container>
      <BackgroundBeams />
    </footer>
  );
}

export default Footer;
