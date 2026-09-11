import { useEffect, useRef } from 'react'
import { X } from 'lucide-react'

export default function ProjectModal({ project, onClose }) {
  const dialog = useRef(null)
  const closeButton = useRef(null)
  useEffect(() => {
    const element = dialog.current
    const previousFocus = document.activeElement
    const previousOverflow = document.body.style.overflow
    element.showModal()
    closeButton.current?.focus()
    document.body.style.overflow = 'hidden'
    return () => { element.close(); document.body.style.overflow = previousOverflow; previousFocus?.focus() }
  }, [])
  return <dialog ref={dialog} className="project-modal" aria-labelledby="project-title" aria-describedby="project-status" onCancel={onClose} onClick={event => { if (event.target === event.currentTarget) { const rect = event.currentTarget.getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) onClose() } }}>
    <button ref={closeButton} className="modal-close" onClick={onClose} aria-label="Fechar detalhes do projeto"><X /></button><p className="eyebrow">UM ESTUDO DE POSSIBILIDADES</p><h2 id="project-title">{project.name}</h2><p id="project-status" className="project-status">{project.status}</p><dl>{[['Objetivo do conceito', project.objective], ['Público', project.audience], ['Seções previstas', project.sections], ['Direção visual', project.direction]].map(([label, text]) => <div key={label}><dt>{label}</dt><dd>{text}</dd></div>)}</dl>
  </dialog>
}
