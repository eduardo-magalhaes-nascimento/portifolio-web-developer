import { ArrowUpRight, Asterisk, Globe, MousePointer2 } from 'lucide-react'

export default function SiteComposition() {
  return <div className="composition" role="img" aria-label="Composição ilustrativa de um site em uma janela de computador e em um celular"><span className="composition-label label-top">Design responsivo</span><span className="composition-label label-bottom">Pensado para cada tela</span>
    <div className="orbit orbit-one" /><div className="orbit orbit-two" />
    <div className="desktop-window">
      <div className="window-bar"><span className="window-dots"><i /><i /><i /></span><span>seu próximo site</span><Globe size={12} /></div>
      <div className="mock-content">
        <div className="mock-nav"><strong>studio<span>®</span></strong><span>Sobre &nbsp; Serviços &nbsp; Contato</span></div>
        <div className="mock-hero"><div><span className="mock-eyebrow">FEITO PARA CONECTAR</span><h3>Uma presença<br />digital à altura<br /><em>da sua empresa.</em></h3><span className="mock-pill">Boas ideias começam aqui <ArrowUpRight size={11} /></span></div><div className="silver-sculpture"><Asterisk strokeWidth={0.8} /></div></div>
        <div className="mock-bottom"><span>01 / Estratégia</span><span>02 / Design</span><span>03 / Conexão</span></div>
      </div>
    </div>
    <div className="phone-window"><div className="phone-notch" /><div className="phone-brand">studio® <span>≡</span></div><span className="mock-eyebrow">EM QUALQUER TELA</span><h3>Seu negócio.<br />Sempre<br /><em>por perto.</em></h3><div className="phone-art"><Asterisk strokeWidth={0.7} /></div><div className="phone-line" /><div className="phone-line short" /><span className="phone-pill">Vamos conversar <ArrowUpRight size={10} /></span></div>
    <div className="design-tag"><MousePointer2 size={15} /><span>Design que conecta</span></div>
    <span className="composition-caption">PENSADO NO DETALHE. EM CADA TELA.</span>
  </div>
}
