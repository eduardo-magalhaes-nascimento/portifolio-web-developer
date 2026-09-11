# Portfólio Web Developer

Este projeto foi criado a partir do perfil de Eduardo Henrique, com a proposta de transformar uma apresentação profissional em uma experiência digital clara, elegante e funcional.

A aplicação apresenta uma vitrine para serviços de criação de sites, com foco em pequenos e médios negócios que precisam comunicar melhor sua presença digital, organizar informações importantes e facilitar o primeiro contato com clientes.

## Sobre o Projeto

O projeto é uma single page application voltada para apresentação comercial de serviços digitais. A página reúne conteúdo institucional, seções de serviço, estudos conceituais, argumentos de valor, processo de trabalho e uma área de contato demonstrativa.

Na prática, ele funciona como um modelo completo de portfólio para desenvolvimento de sites, mostrando como uma presença online pode ser estruturada com clareza, hierarquia visual e foco em conversão.

Ele apresenta:

- uma página inicial com chamada direta para orçamento;
- serviços como landing pages, sites institucionais, design responsivo, manutenção e integrações;
- projetos conceituais para demonstrar direção visual e raciocínio de produto;
- segmentos de negócio que podem se beneficiar de uma presença digital mais organizada;
- processo de trabalho dividido em etapas;
- área de contato com formulário demonstrativo e espaço preparado para WhatsApp/e-mail.

Os projetos exibidos, como Instituto Elo e Nortecar Oficina, são estudos conceituais. Eles não representam clientes reais publicados; servem para demonstrar possibilidades de posicionamento, estrutura, conteúdo e identidade visual.

## Preview

O projeto possui visual escuro, acabamento prateado, animações suaves, cards interativos e layout responsivo para desktop e mobile.

Principais seções:

- **Início**: proposta de valor e chamada principal.
- **Serviços**: tipos de sites e soluções oferecidas.
- **Projetos**: estudos conceituais com modal de detalhes.
- **Público**: segmentos de negócio atendidos pela proposta.
- **Processo**: etapas desde entendimento até publicação.
- **Contato**: formulário demonstrativo e informações de atendimento.

## Tecnologias

- React 19
- JavaScript / JSX
- Vite
- Tailwind CSS 4
- Lucide React
- Poppins via `@fontsource/poppins`
- CSS próprio para identidade visual, responsividade e animações

## Como Executar Localmente

Requisito:

- Node.js 22.12 ou superior

Instale as dependências:

```bash
npm ci
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Abra a URL exibida pelo Vite no terminal. Normalmente:

```bash
http://127.0.0.1:5173
```

Para gerar a versão de produção:

```bash
npm run build
```

Para visualizar o build localmente:

```bash
npm run preview
```

Para rodar a verificação de lint:

```bash
npm run lint
```

## Estrutura do Projeto

```text
src/
  components/       Componentes reutilizáveis da interface
  data/             Conteúdos editáveis e dados de contato
  hooks/            Hooks de comportamento visual
  sections/         Seções principais da página
  styles/           Estilos globais e tema visual
public/             Favicon e arquivos públicos
checks/             Arquivos auxiliares de verificação
```

Arquivos importantes:

- `src/data/content.js`: textos, serviços, projetos, etapas e informações exibidas na interface.
- `src/data/contact.js`: validação estrutural do WhatsApp e ponto de integração futura do formulário.
- `src/styles/index.css`: base visual, responsividade, tokens e animações.
- `src/styles/silver-theme.css`: camada de acabamento prateado e refinamentos visuais.
- `src/App.jsx`: composição principal da página.

## Personalização

Para adaptar o conteúdo da aplicação, edite principalmente `src/data/content.js`.

Nele ficam:

- nome e localização exibidos na interface;
- links de contato;
- itens de navegação;
- serviços oferecidos;
- públicos atendidos;
- projetos conceituais;
- etapas do processo;
- compromissos exibidos na área de contato.

O campo de WhatsApp deve usar formato internacional, apenas com dígitos. Exemplo:

```js
whatsapp: '5595999999999'
```

Enquanto `email` e `whatsapp` estiverem vazios, os respectivos links não aparecem na interface.

## Status do Formulário

O formulário de contato é demonstrativo nesta versão:

- o botão de envio permanece desabilitado;
- nenhum dado é enviado;
- nenhum dado é salvo;
- não há backend configurado;
- não há cookies ou armazenamento local para os campos.

Para habilitar o envio real, será necessário implementar uma integração segura em `src/data/contact.js` e conectar o fluxo em `src/sections/Contact.jsx`.

## Acessibilidade

O projeto inclui cuidados como:

- HTML semântico;
- link para pular ao conteúdo;
- foco visível;
- labels nos campos;
- menu com `aria-expanded`;
- modais com elemento `dialog`;
- fechamento por Escape;
- respeito a `prefers-reduced-motion`.

## Observações

Este projeto não possui backend, domínio, hospedagem, métricas reais, depoimentos ou clientes publicados. Ele foi construído como demonstração de interface para serviços de criação de sites.

As prévias visuais dos projetos são criadas com HTML, CSS e ícones. Nenhum template externo, imagem de cliente ou asset proprietário foi importado.

## Licenças e Créditos

As fontes Poppins são fornecidas via `@fontsource/poppins`. Os ícones são fornecidos por Lucide React. As demais dependências preservam suas respectivas licenças.

---

Projeto criado para apresentar soluções digitais com design intencional, código cuidadoso e foco em negócios reais.
