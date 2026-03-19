"use client";

import Link from "next/link";
import { companyData } from "@/data/companyData";

const linkClass =
  "text-text-faint text-[12px] font-body hover:text-primary transition-colors";

export default function FooterLegal() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="border-t border-border-subtle pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
      <p className="text-text-faint text-[12px] font-body">
        © {currentYear} {companyData.companyName}. Todos os direitos reservados.
      </p>
      <div className="flex items-center gap-4">
        <Link href="/politica-de-privacidade" className={linkClass}>
          Política de Privacidade
        </Link>
        <Link href="/termos-de-uso" className={linkClass}>
          Termos de Uso
        </Link>
        <Link href="/cookies" className={linkClass}>
          Cookies
        </Link>
      </div>
    </div>
  );
}
