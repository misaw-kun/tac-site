"use client";
import Typewriter from "typewriter-effect";

export default function TypeEffect() {
  return (
    <Typewriter
      options={{
        strings: [
          "actually work",
          "set appointments",
          "increases efficiency",
          "adapt to your needs",
          "boosts revenue",
          "run 24/7",
        ],
        autoStart: true,
        loop: true,
        delay: 75,
        deleteSpeed: 10,
      }}
    />
  );
}
