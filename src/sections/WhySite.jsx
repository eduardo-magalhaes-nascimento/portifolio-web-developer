import { Search, Timer, MessageCircle, ArrowUpRight } from 'lucide-react'
import { siteReasons } from '../data/content'

const icons = { Search, Timer, MessageCircle }

export default function WhySite() {
  return (
    <section id="por-que-um-site" className="section why-site" aria-labelledby="why-site-title">
      <div className="container content-container">
        <div className="section-heading">
          <p className="eyebrow">POR QUE TER UM SITE?</p>
          <h2 id="why-site-title">Seu cliente procura no Google.<br /><span>Você aparece?</span></h2>
          <p className="section-subtitle">Sem presença online, seu negócio pode perder espaço para concorrentes com um site simples e bem feito.</p>
        </div>
        <div className="reasons-grid">
          {siteReasons.map(({ icon, value, unit, label, description, source, sourceUrl }, index) => {
            const Icon = icons[icon]
            return (
              <article className="reason-block reveal" style={{ '--delay': `${index * 100}ms` }} key={label}>
                <Icon size={28} strokeWidth={1.4} aria-hidden="true" />
                <p className="reason-value">{value}{unit && <span>{unit}</span>}</p>
                <h3>{label}</h3>
                <p className="reason-description">{description}</p>
                {sourceUrl
                  ? <a className="reason-source" href={sourceUrl} target="_blank" rel="noreferrer">{source}<ArrowUpRight size={14} aria-hidden="true" /></a>
                  : <p className="reason-source">{source}</p>}
              </article>
            )
          })}
        </div>
        <p className="research-note">Referências de pesquisa; não representam resultados dos projetos ou uma previsão para negócios de Boa Vista.</p>
      </div>
    </section>
  )
}
