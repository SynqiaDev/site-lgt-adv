import { companyData } from "@/data/companyData";

export default function BioFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="pt-3 text-center">
      <p className="text-[11px] font-body text-text-faint">
        © {year} {companyData.companyName}. Todos os direitos reservados.
      </p>
      <p className="mt-1 text-[11px] font-body text-text-faint">
        Powered by{" "}
        <a
          href="https://www.synqia.com.br"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          Synqia
        </a>
      </p>
    </footer>
  );
}
