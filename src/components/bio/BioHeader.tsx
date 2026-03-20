import Image from "next/image";
import { companyData } from "@/data/companyData";

export default function BioHeader() {
  return (
    <header className="text-center">
      <div className="mx-auto relative h-24 w-24 overflow-hidden rounded-full border-3 border-primary/25 shadow-sm">
        <Image
          src="/enterprise-logo.png"
          alt={`Foto institucional da ${companyData.companyName}`}
          fill
          priority
          sizes="96px"
          className="object-cover"
        />
      </div>

      <h1 className="mt-4 font-heading text-2xl font-bold text-text-primary">
        {companyData.companyName}
      </h1>
      <p className="mt-1 text-sm font-body text-text-muted">
        Advocacia - Itumbiara GO
      </p>
    </header>
  );
}
