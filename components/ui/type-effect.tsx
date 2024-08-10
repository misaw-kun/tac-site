"use client";
import { TypeAnimation } from "react-type-animation";
import Typewriter from "typewriter-effect";

export default function TypeEffect() {
  return (
    <TypeAnimation
      sequence={[
        "actually work",
        1000,
        "set appointments",
        1000,
        "increases efficiency",
        1000,
        "adapt to your needs",
        1000,
        "boosts revenue",
        1000,
        "runs 24/7",
        1000,
      ]}
      speed={50}
      repeat={Infinity}
      cursor={true}
      className="text-center mt-5 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent  min-h-full"
      wrapper="div"
    />
  );
}
