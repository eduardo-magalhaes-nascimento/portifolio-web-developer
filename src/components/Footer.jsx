import { ArrowUpRight } from 'lucide-react'
import { navigation, profile } from '../data/content'
import { getWhatsAppUrl } from '../data/contact'

export default function Footer() {
  const whatsapp = getWhatsAppUrl()
  return <footer className="container footer"><div className="footer-top"><a href="#inicio" className="brand"><span className="monogram">EH.</span><span className="brand-name">{profile.name}<span>Desenvolvimento de sites em Boa Vista, RR.</span></span></a><a href="#inicio" className="back-top">Voltar ao início <ArrowUpRight size={18} /></a></div><div className="footer-bottom"><div className="footer-copyright"><p>© {new Date().getFullYear()} {profile.name}</p>{profile.email.trim() && <a href={`mailto:${profile.email.trim()}`}>E-mail</a>}{whatsapp && <a href={whatsapp} target="_blank" rel="noreferrer">WhatsApp</a>}</div><nav aria-label="Navegação do rodapé">{navigation.slice(1).map(link => <a key={link.href} href={link.href}>{link.label}</a>)}</nav><span>Feito com intenção.</span></div></footer>
}
