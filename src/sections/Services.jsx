import { Code2, Globe2, MessagesSquare, MonitorSmartphone, PanelsTopLeft, Smartphone, Zap } from 'lucide-react'
import { services } from '../data/content'
import WhySite from './WhySite'

const icons = { panels: PanelsTopLeft, globe: Globe2, devices: MonitorSmartphone, code: Code2, Zap }
const benefits = [
  { icon: Smartphone, title: 'Em qualquer tela', text: 'Experiência organizada no celular e no computador.' },
  { icon: MessagesSquare, title: 'Contato facilitado', text: 'Caminhos claros para solicitar informações e orçamentos.' },
  { icon: Globe2, title: 'Atendimento próximo', text: 'Comunicação direta durante o desenvolvimento.' },
]

export default function Services() {
  return <>
    <section className="container benefits" aria-label="Benefícios">{benefits.map(({ icon: Icon, title, text }, index) => <div className="benefit reveal" style={{ '--delay': `${index * 100}ms` }} key={title}><Icon size={27} strokeWidth={1.3} /><div><h2>{title}</h2><p>{text}</p></div></div>)}</section>
    <WhySite />
    <section id="servicos" className="container section services" aria-labelledby="services-title"><div className="section-heading"><p className="eyebrow">O QUE EU FAÇO</p><h2 id="services-title">Sites que trabalham <span>por você.</span></h2><p>Da primeira impressão ao próximo contato.</p></div><div className="services-grid">{services.map((service, index) => { const Icon = icons[service.icon]; return <article className="service-card reveal" style={{ '--delay': `${index * 100}ms` }} key={service.title}><div className="flex items-center justify-between"><Icon size={29} strokeWidth={1.3} /><span className="card-number">{service.number || `0${index + 1}`}</span></div><h3>{service.title}</h3><p>{service.description}</p></article> })}</div></section>
  </>
}
