import Image from "next/image";
import Link from "next/link";
import TacLogo from "@/app/assets/tac-no-bg.svg";

const Header = () => {
  return (
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8 flex items-center gap-3">
      <Image className="w-16" src={TacLogo} alt="tac-logo" />
      <Link href="/posts" className="hover:text-accent">
        Blog.
      </Link>
    </h2>
  );
};

export default Header;
