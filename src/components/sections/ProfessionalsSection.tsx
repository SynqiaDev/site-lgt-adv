"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

type ProfessionalCard = {
  name: string;
  role: string;
  bio: string;
  photoUrl: string;
  oab: string;
  phone: string;
};

const professionals: ProfessionalCard[] = [
  {
    name: "Dra. Allane F. Guerra",
    role: "Direito de Família e Trabalho",
    oab: "OAB/GO 72.570",
    phone: "(64) 9 9999-5572",
    bio: "Advogada capacitada para te auxiliar com os pilares mais importantes da vida: Trabalho e Família. ",
    photoUrl:
      "/allane.png",
  },
  {
    name: "Dr. Paulo H. B. Torres",
    role: "Direito Previdenciário e Bancário",
    oab: "OAB/GO 53.087",
    phone: "(64) 9 9999-5572",
    bio: "Advogado atuante desde o ano de 2018 na área Previdenciária, sempre com intuito de alcançar o melhor para o cliente.",
    photoUrl:
      "/paulo.png",
  },
  {
    name: "Dra. Mariane S. Martins",
    oab: "OAB/GO 53.544",
    role: "Direito Cível",
    phone: "(64) 9 9999-5572",
    bio: "Advogada atuante desde o ano de 2018 , sempre com objetivo de resguardar seus direitos.",
    photoUrl:
      "/mariane.png",
  },
  {
    name: "Dr. Larissa Lelis",
    oab: "OAB/GO 53.544",
    role: "Direito Previdenciário e Cível",
    phone: "(64) 9 9999-5572",
    bio: "Advogada atuante desde o ano de 2018 na área Previdenciária e Cível, sempre com intuito de alcançar o melhor para o cliente.",
    photoUrl:
      "/larissa.png",
  },
];

export default function ProfessionalsSection() {
  const { ref, isVisible } = useScrollAnimation();
  const [activeIndex, setActiveIndex] = useState(0);

  const total = professionals.length;

  const goPrev = () => setActiveIndex((i) => (i - 1 + total) % total);
  const goNext = () => setActiveIndex((i) => (i + 1) % total);

  const active = professionals[activeIndex];

  return (
    <section
      id="profissionais"
      className="py-20 bg-bg-base"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Header + controls */}
          <div
            className={`transition-all duration-600 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
          >
            <span className="inline-block text-[11px] font-semibold tracking-[0.12em] uppercase text-primary font-heading mb-3">
              Equipe jurídica
            </span>
            <h2
              className="font-heading font-bold text-text-primary mb-4 leading-[1.2]"
              style={{ fontSize: "clamp(26px, 3vw, 34px)" }}
            >
              Conheça nossos advogados
            </h2>
            <p className="text-text-muted text-sm max-w-[520px] leading-relaxed font-body mb-6">
              Atendimento humanizado e atuação com estratégia jurídica nas áreas
              de Direito do Trabalho, Previdenciário, Cível e Criminal. <br /><br /> Conte com a nossa equipe para proteger seus direitos.
            </p>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={goPrev}
                aria-label="Profissional anterior"
                className="min-h-[44px] min-w-[44px] rounded-lg border border-border-default bg-bg-card text-text-muted hover:text-primary hover:border-primary/40 transition-colors flex items-center justify-center"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={goNext}
                aria-label="Próximo profissional"
                className="min-h-[44px] min-w-[44px] rounded-lg border border-border-default bg-bg-card text-text-muted hover:text-primary hover:border-primary/40 transition-colors flex items-center justify-center"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Carousel */}
          <div
            className={`transition-all duration-600 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              }`}
          >
            <div className="bg-bg-card border border-border-default rounded-2xl p-6">
              <div className="flex flex-col sm:flex-row gap-6 items-center">
                <div className="relative w-28 h-28 rounded-full overflow-hidden outline outline-border-primary">
                  <Image
                    src={active.photoUrl}
                    alt={active.name}
                    fill
                    sizes="200px"
                    className="object-cover"
                  />
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="text-primary font-heading font-bold text-lg uppercase tracking-wider">
                      {active.name} <br /> <span className="text-text-muted font-extralight text-xs uppercase tracking-wider">{active.oab}</span>
                    </h3>
                    <div className="text-text-muted font-heading font-bold text-sm tracking-wider">
                      {active.role}
                    </div>
                    <p className="text-text-muted text-sm leading-relaxed font-body">
                      {active.bio}
                    </p>
                  </div>

                  <div className="mt-5">
                    <a
                      href={`tel:${active.phone.replace(/\D/g, "")}`}
                      className="inline-flex items-center justify-center rounded-lg border border-border-default bg-transparent px-5 py-2 text-sm font-body text-text-muted hover:text-primary hover:border-primary/40 transition-colors"
                      aria-label={`Falar com ${active.name}`}
                    >
                      Falar com profissional
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-center gap-2">
                {professionals.map((p, idx) => (
                  <button
                    key={p.name}
                    type="button"
                    onClick={() => setActiveIndex(idx)}
                    aria-label={`Ir para ${p.name}`}
                    className={`h-2.5 rounded-full transition-all ${idx === activeIndex
                      ? "bg-primary w-9"
                      : "bg-border-default w-2.5 hover:bg-border-subtle"
                      }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

