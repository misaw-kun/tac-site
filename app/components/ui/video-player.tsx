"use client";
import { CldVideoPlayer, getCldImageUrl } from "next-cloudinary";
import "next-cloudinary/dist/cld-video-player.css";

export default function VideoPlayer() {
  return (
    <CldVideoPlayer
      className="z-20 rounded-lg"
      width="1920"
      height="1080"
      src="vsl_healthcare_miexav"
      poster={getCldImageUrl({ src: "vsl_thumb_jxmxuo" })}
      colors={{
        accent: "#00ff7a",
        base: "#09090b",
        text: "#fafafa",
      }}
      logo={{
        imageUrl: getCldImageUrl({
          src: "logo-bg_mxfwe9",
        }),
        onClickUrl: "https://www.theautomationcompany.tech/",
      }}
    />
  );
}
