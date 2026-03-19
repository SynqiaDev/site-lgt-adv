/**
 * Depoimentos de clientes para a seção de prova social.
 * Preencha com depoimentos reais (foto, nome, contexto e texto).
 */

export interface Depoimento {
  /** Nome completo ou apenas primeiro nome + inicial do sobrenome */
  nome: string;
  /** Contexto: cidade, tipo de projeto (ex.: "Residencial em Goiânia") */
  contexto: string;
  /** Texto do depoimento */
  texto: string;
  /** URL da foto (pode ser /depoimentos/nome.jpg ou URL externa) */
  fotoUrl: string;
  /** Avaliação de 1 a 5 (opcional, para exibir estrelas) */
  nota?: number;
}

export const depoimentos: Depoimento[] = [
  {
    nome: "Maria S.",
    contexto: "Residencial — Goiânia, GO",
    texto: "Instalamos o sistema solar e a conta de luz caiu pela metade. Equipe muito profissional e pós-venda excelente.",
    fotoUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    nota: 5,
  },
  {
    nome: "João P.",
    contexto: "Comercial — Aparecida de Goiânia, GO",
    texto: "Fizemos o projeto elétrico e a instalação na empresa. Tudo dentro do prazo e com ART em dia. Recomendo.",
    fotoUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    nota: 5,
  },
  {
    nome: "Ana R.",
    contexto: "Energia solar — Anápolis, GO",
    texto: "Desde o orçamento até a homologação, foram muito atenciosos. Já indicamos para outros clientes.",
    fotoUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    nota: 5,
  },
];
