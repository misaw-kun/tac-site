"use client";
import Typewriter from "typewriter-effect";

export default function TypeEffect() {
  return (
    <Typewriter
      options={{
        strings: [
          "actually work",
          "integrate with your CRM",
          "set appointments",
          "increase efficiency",
          "adapt to your needs",
        ],
        autoStart: true,
        loop: true,
        delay: 50,
        deleteSpeed: 30,
      }}
    />
  );
}
