"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { companyData } from "@/data/companyData";


export default function AboutSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="sobre"
      className="py-20 bg-linear-to-tr from-bg-base via-bg-section to-bg-base"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text + Stats */}
          <div
            className={`transition-all duration-600 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
          >
            <span className="inline-block text-[11px] font-semibold tracking-[0.12em] uppercase text-primary font-heading mb-3">
              Sobre a {companyData.companyName}
            </span>
            <h2
              className="font-heading font-bold text-text-primary mb-5 leading-[1.2]"
              style={{ fontSize: "clamp(26px, 3vw, 34px)" }}
            >
              Conheça nossa história
            </h2>
            <p className="text-text-secondary text-sm leading-relaxed font-body mb-4">
              A ideia de ter um escritório surgiu desde a época de faculdade, quando a vontade de advogar era grande. <br /> <br />
              Desde então, nesse período adquirimos experiência suficiente para ofertar nosso trabalho com a qualidade necessária, com toda firmeza e confiança que vocês precisam. <br /> <br />
              Com isso, em 2019, tivemos a oportunidade de montar nosso escritório próprio, para podermos melhor atender a todos que precisam de defesa e que seus direitos sejam resguardados. <br /> <br />
              Assim, nossa equipe sempre busca deixar o ambiente de trabalho bem aconchegante, para proporcionar conforto e acolhimento aos nossos clientes, para que se sintam à vontade, e voltem sempre que quiserem e precisarem.
              Buscamos sempre cultivar boas relações, boas conversas e transmitir confiança.
            </p>
          </div>

          {/* Image */}
          <div
            className={`transition-all duration-600 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              }`}
          >
            <div className="relative rounded-2xl overflow-hidden aspect-16/10">
              <Image
                src="/about-picture.jpg"
                alt={`Equipe da ${companyData.companyName} em atendimento jurídico`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-tr from-bg-base/70 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
