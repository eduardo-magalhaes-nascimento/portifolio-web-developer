import { ArrowDown, ArrowUpRight, Globe2, PanelsTopLeft, MonitorSmartphone } from 'lucide-react'
import SiteComposition from '../components/SiteComposition'
import { profile } from '../data/content'

export default function Hero() {
  return <>
    <section id="inicio" className="hero container" aria-labelledby="hero-title">
      <div className="hero-copy"><p className="eyebrow"><span className="tiny-dot" /> DESENVOLVIMENTO DE SITES EM BOA VISTA</p><h1 id="hero-title">Seu negócio<br />merece um site<br /><span>à altura.</span></h1><p className="hero-description">Desenvolvo sites para pequenas e médias empresas que querem apresentar seus serviços com <strong>profissionalismo</strong> e facilitar o contato de <strong>novos clientes</strong>.</p><div className="hero-actions flex flex-wrap gap-3"><a className="button" href="#contato">Pedir orçamento <ArrowUpRight size={18} /></a><a className="button button-outline" href="#projetos">Ver projetos <ArrowDown size={17} /></a></div><p className="hero-location">{profile.name}<span>·</span>{profile.location}</p></div>
      <SiteComposition />
    </section>
    <div className="specialties" aria-label="Especialidades">
      <ul className="specialties-list">
        <li><Globe2 aria-hidden="true" /><span>Sites institucionais</span></li>
        <li><PanelsTopLeft aria-hidden="true" /><span>Landing pages</span></li>
        <li><MonitorSmartphone aria-hidden="true" /><span>Design responsivo</span></li>
      </ul>
    </div>
  </>
}
