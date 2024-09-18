import Link from "next/link";

export default function TacLegalFooter() {
  return (
    <div className="bg-neutral-950 flex justify-center gap-5 text-neutral-500">
      <Link className="hover:text-secondary" href="/legal/privacy-policy">
        Privacy Policy
      </Link>
      |
      <Link className="hover:text-secondary" href="/legal/terms-of-service">
        Terms of Service
      </Link>
    </div>
  );
}
