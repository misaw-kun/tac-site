import { Signika, Share_Tech, JetBrains_Mono, Caveat } from "next/font/google";
import { GeistSans } from "geist/font/sans";

const share_tech = Share_Tech({
  weight: "400",
  subsets: ["latin"],
});

const signika = Signika({ subsets: ["latin"] });

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-serif",
});

export { GeistSans, share_tech, signika, jetbrains, caveat };
