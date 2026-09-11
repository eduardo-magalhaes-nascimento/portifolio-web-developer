import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navigation, profile } from "../data/content";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("inicio");
  const toggle = useRef(null);
  useEffect(() => {
    if (!open) return;
    const close = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    const media = window.matchMedia("(min-width: 1024px)");
    const resize = () => {
      if (media.matches) setOpen(false);
    };
    document.addEventListener("keydown", close);
    media.addEventListener("change", resize);
    return () => {
      document.removeEventListener("keydown", close);
      media.removeEventListener("change", resize);
    };
  }, [open]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    const sections = navigation
      .map(({ href }) => document.querySelector(href))
      .filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        }),
      { rootMargin: "-25% 0px -65% 0px" },
    );
    sections.forEach((section) => observer.observe(section));
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="container header-inner">
        <a
          href="#inicio"
          className="brand"
          aria-label={`${profile.name}, início`}
        >
          <span className="monogram">
            EH<span>.</span>
          </span>
          <span className="brand-name">
            Eduardo
            <br />
            Henrique
          </span>
        </a>
        <button
          ref={toggle}
          className="menu-toggle"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="main-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
        <nav
          id="main-navigation"
          aria-label="Navegação principal"
          className={`navigation ${open ? "is-open" : ""}`}
        >
          {navigation.map((item) => (
            <a
              className={active === item.href.slice(1) ? "is-active" : ""}
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            className="button button-small"
            href="#contato"
            onClick={() => setOpen(false)}
          >
            Pedir orçamento <ArrowUpRight size={16} />
          </a>
        </nav>
      </div>
    </header>
  );
}
