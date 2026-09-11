import { ArrowUpRight } from 'lucide-react'
import { steps } from '../data/content'

export default function Process() {
  return <section id="processo" className="section container process" aria-labelledby="process-title"><div className="section-heading"><p className="eyebrow">COMO FUNCIONA</p><h2 id="process-title">Do primeiro contato<br /><span>ao seu site.</span></h2><p>Um processo claro, construído junto com você.</p></div><div className="process-grid">{steps.map((step, index) => <article className="process-card reveal" style={{ '--delay': `${index * 100}ms` }} key={step.title}><div className="step-top"><span>0{index + 1}</span><ArrowUpRight size={20} strokeWidth={1} /></div><h3>{step.title}</h3><p>{step.description}</p></article>)}</div></section>
}
