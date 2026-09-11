import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { projects } from '../data/content'
import ProjectPreview from '../components/ProjectPreview'
import ProjectModal from '../components/ProjectModal'

export default function Projects() {
  const [selected, setSelected] = useState(null)
  return <section id="projetos" className="section projects" aria-labelledby="projects-title"><div className="container"><div className="projects-heading"><div><p className="eyebrow">PROJETOS CONCEITUAIS</p><h2 id="projects-title">Ideias para<br /><span>negócios reais.</span></h2></div><p>Estudos de design para apresentar como diferentes empresas podem se posicionar na internet.</p></div><div className="projects-grid">{projects.map((project, index) => <article className="project-card reveal" style={{ '--delay': `${index * 100}ms` }} key={project.id}><button className="project-open" onClick={() => setSelected(project)} aria-label={`Ver conceito: ${project.name}`} aria-haspopup="dialog"><ProjectPreview type={project.id} /><div className="project-info"><div><h3>{project.name}</h3><p>{project.category}</p></div><span className="round-arrow"><ArrowUpRight size={23} /></span></div></button><p className="project-status"><span className="status-dot" />{project.status}</p></article>)}</div></div>{selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}</section>
}
