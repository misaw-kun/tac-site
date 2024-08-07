import { Signika, Share_Tech } from "next/font/google";
import { GeistSans } from "geist/font/sans";

const share_tech = Share_Tech({
  weight: "400",
  subsets: ["latin"],
});

const signika = Signika({ subsets: ["latin"] });

export { GeistSans, share_tech, signika };
