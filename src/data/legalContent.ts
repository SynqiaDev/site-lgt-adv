import { companyData } from "./companyData";
import { escapeHtml } from "@/lib/utils";

/**
 * Conteúdo legal alinhado à LGPD (Lei 13.709/2018).
 * Política de Privacidade e Termos de Uso para uso em dialogs e páginas.
 * Nome e e-mail são escapados para prevenir XSS quando vindos de variáveis de ambiente.
 */

const companyName = escapeHtml(companyData.companyName);
const email = escapeHtml(companyData.email);

export const privacyPolicyTitle = "Política de Privacidade";

export function getPrivacyPolicyContent(): string {
  return `
<p class="mb-4 text-text-faint text-sm font-body leading-relaxed">
  Esta Política de Privacidade descreve como a ${companyName} coleta, usa e protege seus dados pessoais, em conformidade com a Lei Geral de Proteção de Dados (LGPD — Lei 13.709/2018).
</p>

<h3 class="font-heading font-semibold text-text-primary mt-6 mb-2 text-sm">1. Controlador e Encarregado de Dados (DPO)</h3>
<p class="mb-4 text-text-faint text-sm font-body leading-relaxed">
  O controlador dos dados é a ${companyName}. O Encarregado de Dados (DPO — Data Protection Officer) pode ser contactado pelo e-mail: ${email}, para exercer seus direitos como titular (acesso, correção, exclusão, portabilidade, revogação do consentimento).
</p>

<h3 class="font-heading font-semibold text-text-primary mt-6 mb-2 text-sm">2. Dados que Coletamos</h3>
<p class="mb-4 text-text-faint text-sm font-body leading-relaxed">
  Coletamos apenas os dados estritamente necessários para: (a) prestar os serviços jurídicos solicitados (contato e atendimento); (b) cumprir obrigações legais; (c) melhorar a experiência de navegação no site quando você consentir em cookies opcionais. Podem ser coletados: nome, e-mail, telefone, endereço e informações relacionadas ao seu caso, incluindo documentos fornecidos para fins de atendimento. O site pode utilizar cookies essenciais (necessários ao funcionamento) e, com seu consentimento, cookies opcionais (analíticos ou de preferências).
</p>

<h3 class="font-heading font-semibold text-text-primary mt-6 mb-2 text-sm">3. Base Legal e Finalidade</h3>
<p class="mb-4 text-text-faint text-sm font-body leading-relaxed">
  O tratamento baseia-se em: consentimento (quando aplicável), execução de contrato ou de medidas pré-contratuais, e legítimo interesse (quando compatível com seus direitos). Os dados são utilizados somente para as finalidades informadas e pelo tempo necessário para cumpri-las ou para obrigações legais.
</p>

<h3 class="font-heading font-semibold text-text-primary mt-6 mb-2 text-sm">4. Compartilhamento e Retenção</h3>
<p class="mb-4 text-text-faint text-sm font-body leading-relaxed">
  Seus dados não são vendidos. Podem ser compartilhados com parceiros técnicos ou autoridades quando exigido por lei. A retenção segue a necessidade da finalidade e dos prazos legais aplicáveis.
</p>

<h3 class="font-heading font-semibold text-text-primary mt-6 mb-2 text-sm">5. Seus Direitos (Art. 18 da LGPD)</h3>
<p class="mb-4 text-text-faint text-sm font-body leading-relaxed">
  Você tem direito a: confirmação da existência de tratamento; acesso; correção; anonimização, bloqueio ou eliminação de dados desnecessários; portabilidade; eliminação dos dados tratados com consentimento; revogação do consentimento; e informação sobre compartilhamento. Para exercê-los, contate-nos pelo e-mail informado acima.
</p>

<p class="mt-6 text-text-faint text-xs font-body">
  Última atualização: 19/03/2026 referente ao uso do site e aos serviços da ${companyName}. Em caso de dúvidas, entre em contato.
</p>
`.trim();
}

export const termsOfUseTitle = "Termos de Uso";

export function getTermsOfUseContent(): string {
  return `
<p class="mb-4 text-text-faint text-sm font-body leading-relaxed">
  Ao acessar e utilizar o site da ${companyName}, você concorda com os presentes Termos de Uso.
</p>

<h3 class="font-heading font-semibold text-text-primary mt-6 mb-2 text-sm">1. Objeto e Aceitação</h3>
<p class="mb-4 text-text-faint text-sm font-body leading-relaxed">
  Estes termos regem o uso do site e dos recursos disponíveis (informações e formulários de contato/atendimento jurídico, além de conteúdo institucional). O uso continuado do site implica aceitação destes termos.
</p>

<h3 class="font-heading font-semibold text-text-primary mt-6 mb-2 text-sm">2. Uso Adequado</h3>
<p class="mb-4 text-text-faint text-sm font-body leading-relaxed">
  O usuário compromete-se a utilizar o site de forma lícita, não podendo utilizar recursos para fins ilícitos, ofensivos ou que prejudiquem terceiros ou a infraestrutura do site. A ${companyName} reserva-se o direito de recusar ou interromper o acesso em caso de violação.
</p>

<h3 class="font-heading font-semibold text-text-primary mt-6 mb-2 text-sm">3. Propriedade Intelectual</h3>
<p class="mb-4 text-text-faint text-sm font-body leading-relaxed">
  O conteúdo do site (textos, imagens, marcas, layout) é de propriedade da ${companyName} ou de licenciantes. É proibida a reprodução ou uso comercial sem autorização prévia.
</p>

<h3 class="font-heading font-semibold text-text-primary mt-6 mb-2 text-sm">4. Privacidade e Dados Pessoais</h3>
<p class="mb-4 text-text-faint text-sm font-body leading-relaxed">
  O tratamento de dados pessoais é regido pela nossa Política de Privacidade e pela LGPD. Ao enviar formulários, você declara que leu e concorda com a coleta e o uso dos dados conforme ali descrito.
</p>

<h3 class="font-heading font-semibold text-text-primary mt-6 mb-2 text-sm">5. Limitação de Responsabilidade</h3>
<p class="mb-4 text-text-faint text-sm font-body leading-relaxed">
  O site é fornecido "como está". A ${companyName} não se responsabiliza por danos indiretos decorrentes do uso ou da impossibilidade de uso do site. As informações apresentadas no site têm caráter informativo e não substituem orientação jurídica formal.
</p>

<h3 class="font-heading font-semibold text-text-primary mt-6 mb-2 text-sm">6. Alterações e Lei Aplicável</h3>
<p class="mb-4 text-text-faint text-sm font-body leading-relaxed">
  Estes termos podem ser alterados a qualquer momento, com vigência a partir da publicação no site. Em caso de conflito, prevalece a lei brasileira, com foro na comarca do domicílio da ${companyName}.
</p>

<p class="mt-6 text-text-faint text-xs font-body">
  Em caso de dúvidas, entre em contato pelo e-mail: ${email}.
</p>
`.trim();
}
