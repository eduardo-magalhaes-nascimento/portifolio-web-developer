export const profile = {
  name: 'Eduardo Henrique',
  location: 'Boa Vista, Roraima',
  email: '',
  // Formato internacional, somente dígitos: código do país + DDD + número.
  whatsapp: '',
}

export const navigation = [
  { href: '#inicio', label: 'Início' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#processo', label: 'Como funciona' },
  { href: '#contato', label: 'Contato' },
]

export const services = [
  { icon: 'panels', title: 'Landing pages', description: 'Uma página com foco no que importa: apresentar sua oferta e facilitar o próximo passo do cliente.' },
  { icon: 'globe', title: 'Sites institucionais', description: 'Sua empresa bem apresentada, com seus serviços, sua história e as informações que o cliente procura.' },
  { icon: 'devices', title: 'Design responsivo', description: 'Uma experiência clara e confortável, do celular ao computador. Seu site se adapta a cada tela.' },
  { icon: 'code', title: 'Manutenção e atualizações', description: 'Conteúdo atualizado e ajustes para acompanhar as mudanças e necessidades do seu negócio.' },
  { icon: 'Zap', number: '05', title: 'Automação e integrações', description: 'Formulários que chegam no WhatsApp, lembretes automáticos de agendamento, respostas instantâneas. Seu site trabalha mesmo quando você não está.' },
]

export const audiences = [
  { icon: 'HeartPulse', name: 'Clínicas e consultórios' },
  { icon: 'Wrench', name: 'Oficinas e autopeças' },
  { icon: 'Scissors', name: 'Salões e estéticas' },
  { icon: 'Briefcase', name: 'Escritórios e assessorias' },
  { icon: 'UtensilsCrossed', name: 'Restaurantes e delivery' },
  { icon: 'Dumbbell', name: 'Academias e studios' },
]

// Referências contextualizadas; não são resultados deste portfólio.
export const siteReasons = [
  {
    icon: 'Search', value: '76%', label: 'Da busca à visita',
    description: 'dos participantes que buscaram algo próximo pelo celular visitaram um negócio relacionado em até um dia.',
    source: 'Google/Purchased · EUA, 2016',
    sourceUrl: 'https://www.thinkwithgoogle.com/_qs/documents/2443/52a88_marketing-guide-holiday-shopping-2016-EN_ghXn6S9.pdf',
  },
  {
    icon: 'Timer', value: '3', unit: 'segundos', label: 'Carregamento importa',
    description: 'Acima desse tempo de carregamento, uma pesquisa citada pelo Google aponta abandono provável de 53% das visitas em páginas móveis.',
    source: 'Google AdSense · pesquisa sobre páginas móveis',
    sourceUrl: 'https://support.google.com/adsense/answer/7450973?hl=pt-BR',
  },
  {
    icon: 'MessageCircle', value: '2', unit: 'canais', label: 'Um caminho para conversar',
    description: 'WhatsApp e formulário visíveis dão ao cliente duas maneiras de entrar em contato com a sua empresa.',
    source: 'Recursos disponíveis conforme o escopo do projeto.',
  },
]

export const contactAssurances = [
  { icon: 'ShieldCheck', text: 'Escopo definido em conjunto' },
  { icon: 'Clock', text: 'Etapas combinadas com você' },
  { icon: 'MapPin', text: 'Boa Vista, Roraima' },
]

export const projects = [
  { id: 'elo', name: 'Instituto Elo', category: 'Clínica multidisciplinar', status: 'Projeto conceitual · Em desenvolvimento', objective: 'Apresentar uma clínica multidisciplinar de forma acolhedora e tornar as informações sobre atendimento fáceis de encontrar.', audience: 'Pessoas e famílias que procuram atendimento e querem conhecer a equipe e as especialidades.', sections: 'Apresentação, especialidades, equipe, dúvidas frequentes e contato.', direction: 'Tons neutros claros, formas suaves e tipografia com uma presença humana e acolhedora.' },
  { id: 'nortecar', name: 'Nortecar Oficina', category: 'Oficina mecânica', status: 'Projeto conceitual · Em desenvolvimento', objective: 'Organizar os serviços de uma oficina em uma apresentação objetiva, transmitindo clareza e confiança.', audience: 'Proprietários de veículos que buscam informações sobre manutenção e um caminho direto para falar com a oficina.', sections: 'Apresentação, serviços, processo de atendimento, localização e contato.', direction: 'Grafite e prata, tipografia marcante e elementos gráficos inspirados em precisão mecânica.' },
]

export const steps = [
  { title: 'Entender', description: 'Conversamos sobre a empresa, o público e o objetivo do seu site.' },
  { title: 'Planejar', description: 'Definimos conteúdo, escopo e uma direção visual que faça sentido para o negócio.' },
  { title: 'Desenvolver', description: 'Construo o site e apresento para revisão. Você acompanha a evolução.' },
  { title: 'Publicar', description: 'Fazemos os ajustes finais e preparamos tudo para a entrega do seu site.' },
]
