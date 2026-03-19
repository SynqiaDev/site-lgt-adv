"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";
import { companyData } from "@/data/companyData";
import { buildWhatsAppMessage, buildWhatsAppUrl } from "@/lib/whatsapp";

const WHATSAPP_MESSAGE = "Olá, estava no seu site e preciso tirar algumas dúvidas.";

const navLinks = [
  { href: "#sobre", label: "Sobre" },
  { href: "#valores", label: "Valores" },
  { href: "#especialidades", label: "Especialidades" },
  { href: "#profissionais", label: "Profissionais" },
  { href: "#faq", label: "Dúvidas" },
  { href: "#contato", label: "Encontre-nos" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState(() =>
    buildWhatsAppUrl(companyData.whatsapp, WHATSAPP_MESSAGE)
  );

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      const message = buildWhatsAppMessage(WHATSAPP_MESSAGE, window.location.search);
      setWhatsappUrl(buildWhatsAppUrl(companyData.whatsapp, message));
    }, 100);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-bg-base/60 shadow-[0_4px_20px_rgba(15,23,42,0.12)]"
        : "bg-bg-base/95"
        } backdrop-blur-md border-b border-border-subtle`}
    >
      <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-2 group"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <span className="relative w-[140px] h-[40px] block shrink-0">
            <Image
              src="/enterprise-logo.png"
              alt={`${companyData.companyName} — Advocacia`}
              fill
              sizes="140px"
              className="object-contain object-left group-hover:opacity-90 transition-opacity"
            />
          </span>
          {/* <span className="font-heading font-bold text-lg text-white tracking-tight ">
            {companyData.companyName.toUpperCase()}
          </span> */}
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="font-heading text-[13px] font-medium text-text-secondary hover:text-primary transition-colors duration-200 tracking-[0.01em] cursor-pointer bg-transparent border-none"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* CTA + Mobile toggle */}
        <div className="flex items-center gap-4">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 min-h-[48px] px-5 py-2.5 bg-gradient-orange text-white text-[13px] font-semibold font-heading rounded-lg transition-all hover:-translate-y-0.5 hover:shadow-orange focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg-base"
          >
            <Phone className="w-3.5 h-3.5" aria-hidden />
            Fale Conosco
          </a>

          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden p-2 text-text-secondary hover:text-text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden w-full overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-[85vh] opacity-100" : "max-h-0 opacity-0"
          } bg-bg-section border-t border-border-subtle`}
      >
        <nav className="w-full min-w-0 max-w-[1200px] mx-auto px-4 sm:px-6 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="w-full min-w-0 text-left px-3 py-2.5 font-heading text-sm font-medium text-text-secondary hover:text-primary hover:bg-bg-card-hover rounded-lg transition-all"
            >
              {link.label}
            </button>
          ))}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 w-full min-w-0 flex items-center justify-center gap-2 min-h-[48px] px-5 py-3 bg-gradient-orange text-white text-sm font-semibold font-heading rounded-lg box-border focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg-section"
          >
            <Phone className="w-4 h-4 shrink-0" aria-hidden />
            Fale Conosco
          </a>
        </nav>
      </div>
    </header>
  );
}
