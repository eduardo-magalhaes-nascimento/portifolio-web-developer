import { ArrowUpRight, Flower2, Settings2 } from 'lucide-react'

export default function ProjectPreview({ type }) {
  const elo = type === 'elo'
  return <div className={`project-preview ${type}`} aria-hidden="true">
    <div className="project-browser"><div className="window-dots"><i /><i /><i /></div><span>{elo ? 'Instituto Elo — conceito visual' : 'Nortecar — conceito visual'}</span></div>
    <div className="concept-page"><div className="concept-nav"><strong>{elo ? <><Flower2 size={20} /> elo<span>INSTITUTO</span></> : <><Settings2 size={21} /> NORTECAR<span>OFICINA MECÂNICA</span></>}</strong><span>Sobre &nbsp;&nbsp; {elo ? 'Especialidades' : 'Serviços'} &nbsp;&nbsp; Contato <ArrowUpRight size={10} /></span></div><div className="concept-hero"><div><p className="concept-kicker">{elo ? 'CUIDADO QUE CONECTA' : 'CUIDADO EM CADA DETALHE'}</p><h3>{elo ? <>Cada pessoa,<br />um universo.<br /><em>Cuidar é conectar.</em></> : <>Seu carro em<br />boas mãos.<br /><em>Siga em frente.</em></>}</h3><p className="concept-description">{elo ? 'Um olhar completo para você e sua família.' : 'Clareza no atendimento. Precisão no serviço.'}</p><span className="concept-cta">{elo ? 'Conheça o nosso cuidado' : 'Conheça nossos serviços'} <ArrowUpRight size={12} /></span></div><div className={elo ? 'elo-art' : 'wheel-art'}>{elo ? <><div /><div /><div /></> : <><div className="wheel-center" /><div className="wheel-ring" /></>}</div></div><div className="concept-footer"><span>{elo ? 'Escuta e acolhimento' : 'Diagnóstico'}<span>01</span></span><span>{elo ? 'Cuidado integrado' : 'Manutenção'}<span>02</span></span><span>{elo ? 'Perto de você' : 'Revisão'}<span>03</span></span></div></div>
  </div>
}
