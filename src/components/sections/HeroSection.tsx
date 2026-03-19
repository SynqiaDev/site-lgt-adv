"use client";

import Image from "next/image";
import { ArrowRight, ChevronDown, Scale } from "lucide-react";
import { companyData } from "@/data/companyData";

const HERO_IMAGE_URL =
  "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&q=80";

export default function HeroSection() {
  const scrollToSpecialties = () => {
    document
      .querySelector("#especialidades")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Background image — next/image com priority para LCP */}
      <div className="absolute inset-0" aria-hidden>
        <Image
          src={HERO_IMAGE_URL}
          alt="Estátua da deusa Têmis representando a justiça"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-bg-base/60" aria-hidden />
      </div>

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(248,248,247,0.15) 0%, rgba(248,248,247,0.45) 60%, rgba(248,248,247,0.9) 100%)",
        }}
        aria-hidden
      />

      {/* Content */}
      <div className="relative z-10 max-w-full mx-auto px-6 pt-16">
        {/* Eyebrow */}
        <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.12em] uppercase text-text-primary font-heading mb-5">
          <Scale className="w-3 h-3" />
          Advocacia transparente
        </span>

        {/* Title — keyword + marca para SEO */}
        <h1
          className="font-heading font-extrabold text-text-primary leading-[1.1] tracking-[-0.02em] mb-6"
          style={{ fontSize: "clamp(40px, 6vw, 60px)" }}
        >
          Bem-vindo à
          <br />
          {/*
            Mantemos o nome da marca como destaque para consistência SEO
            e reconhecimento imediato.
          */}
          <span className="text-primary">{companyData.companyName}!</span>
        </h1>

        {/* Subtitle */}
        <p className="text-text-secondary text-base leading-[1.7] mb-10 max-w-[560px] mx-auto font-body">
          Equipe jurídica capacitada para lhe oferecer serviços de excelência. Proporcionamos um atendimento personalizado, buscando encontrar a melhor solução para suas necessidades jurídicas.
        </p>

        {/* CTA buttons */}
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <button
            type="button"
            onClick={scrollToSpecialties}
            className="inline-flex items-center justify-center gap-2 min-h-[48px] px-7 py-3.5 bg-gradient-orange text-white text-sm font-semibold font-heading rounded-lg transition-all hover:-translate-y-0.5 hover:shadow-orange focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg-base"
          >
            Conhecer Especialidades
            <ArrowRight className="w-4 h-4" aria-hidden />
          </button>
          <button
            type="button"
            onClick={() =>
              document.querySelector("#contato")?.scrollIntoView({ behavior: "smooth" })
            }
            className="inline-flex items-center justify-center gap-2 min-h-[48px] px-7 py-3.5 bg-white/70 text-text-primary text-sm font-semibold font-heading border border-border-default rounded-lg transition-all hover:border-primary hover:text-primary hover:bg-primary/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg-base"
          >
            Falar com a equipe
          </button>
        </div>

        {/* Stats strip */}
        <div
          className="mt-16 flex items-center justify-center w-full"
        >
          <p className="text-text-muted text-sm leading-[1.7] w-full font-body">
            “Há duas coisas na vida que não se pode deixar de ter, quando se quer ir longe: bons amigos e bons advogados.” <br /> - Miguel Sousa Tavares
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        type="button"
        onClick={scrollToSpecialties}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 min-h-[48px] min-w-[48px] flex items-center justify-center text-text-muted hover:text-primary transition-colors animate-bounce focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded-full"
        aria-label="Rolar para baixo"
      >
        <ChevronDown className="w-6 h-6" aria-hidden />
      </button>
    </section>
  );
}
