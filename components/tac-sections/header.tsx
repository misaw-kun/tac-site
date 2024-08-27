import Image from "next/image";
import React from "react";
import CalPopup from "../ui/cal-popup";
import Logo from "@/app/assets/logo.svg";
import Link from "next/link";

function TacHeader() {
  return (
    <header className="py-8 lg:py-12 w-full">
      <div className="flex items-center justify-between">
        <Link href="/">
          <Image src={Logo} alt="brand-logo" />
        </Link>
        <CalPopup btnText="Contact Us" isHeader />
      </div>
    </header>
  );
}

export default TacHeader;
