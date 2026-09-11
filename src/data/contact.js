import { profile } from './content'

export function getWhatsAppUrl(number = profile.whatsapp) {
  return /^[1-9]\d{9,14}$/.test(number) ? `https://wa.me/${number}` : null
}

// Integração futura: substituir por uma chamada ao backend.
// Não habilitar a interface antes de implementar validação e tratamento de erros.
export async function submitContact() {
  throw new Error('O envio não está disponível nesta versão de demonstração.')
}
