import { cn } from "@/lib/utils";
import { logoFont } from "./styles/fonts";
import { Button } from "@/components/ui/button";
import { BotMessageSquare } from "lucide-react";

export default function Home() {
  return (
    <>
      <header className="pt-7 md:pt-10 lg:pt-14 w-full">
        <div className="flex items-center justify-between">
          <h1 className="scroll-m-20 text-3xl font-extrabold lg:text-4xl uppercase">
            The Automation Company
          </h1>
          <Button className="text-md hover:bg-secondary">
            <BotMessageSquare className="mr-2 h-4 w-4" /> Contact
          </Button>
        </div>
      </header>
      <main className="flex flex-col items-center justify-between p-24">
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex"></div>
      </main>
    </>
  );
}
