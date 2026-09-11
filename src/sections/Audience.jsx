import { HeartPulse, Wrench, Scissors, Briefcase, UtensilsCrossed, Dumbbell } from 'lucide-react'
import { audiences } from '../data/content'

const icons = { HeartPulse, Wrench, Scissors, Briefcase, UtensilsCrossed, Dumbbell }

export default function Audience() {
  return (
    <section id="para-quem" className="section audience" aria-labelledby="audience-title">
      <div className="container content-container">
        <div className="section-heading">
          <p className="eyebrow">PARA QUEM EU TRABALHO</p>
          <h2 id="audience-title">Especialista em negócios locais<br /><span>que querem crescer online.</span></h2>
          <p className="section-subtitle">Conheço a realidade de quem vende serviços em Boa Vista. Cada site é pensado para o seu público, não para um template genérico.</p>
        </div>
        <ul className="audience-grid">
          {audiences.map(({ icon, name }, index) => {
            const Icon = icons[icon]
            return (
              <li className="reveal" style={{ '--delay': `${index * 100}ms` }} key={name}>
                <div className="audience-item"><Icon size={26} strokeWidth={1.4} aria-hidden="true" /><span>{name}</span></div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
