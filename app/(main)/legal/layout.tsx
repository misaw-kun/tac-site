import TacHeader from "@/app/components/tac-sections/header";

export default function LegalLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="container mx-auto px-4 py-8">
      <TacHeader />
      {children}
    </div>
  );
}
