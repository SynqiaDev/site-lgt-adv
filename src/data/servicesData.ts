/** Serviços para a seção da home e para JSON-LD Service. Apenas título e descrição (ícones ficam no componente). */
export interface ServiceItem {
  title: string;
  description: string;
}

export const servicesData: ServiceItem[] = [
  {
    title: "Direito do Trabalho",
    description:
      "Atuação em reclamações trabalhistas, acordos e orientações para empresas e trabalhadores, com foco em estratégia e documentação.",
  },
  {
    title: "Direito Previdenciário",
    description:
      "Auxílio na obtenção e revisão de benefícios junto ao INSS, com análise de requisitos, prazos e documentos para fortalecer seu direito.",
  },
  {
    title: "Direito Cível",
    description:
      "Soluções para contratos, indenizações, cobranças e responsabilidade civil, buscando decisões favoráveis e segurança jurídica.",
  },
  {
    title: "Direito Criminal",
    description:
      "Defesa técnica em investigações e processos criminais, com atuação responsável, orientação ao cliente e acompanhamento em cada etapa.",
  },
];
