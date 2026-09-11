import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Projects from "./sections/Projects";
import Process from "./sections/Process";
import Contact from "./sections/Contact";
import Audience from "./sections/Audience";
import { useReveal } from "./hooks/useReveal";

export default function App() {
  useReveal();
  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo" tabIndex={-1}>
        <Hero />
        <Services />
        <Projects />
        <Audience />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
