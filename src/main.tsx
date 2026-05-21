import React from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight,
  CalendarCheck,
  HeartHandshake,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  UsersRound,
  X,
  Mail,
  Heart,
  Camera,
} from "lucide-react";
import "./styles.css";

const DATA = {
  phone: "(85) 3122-0070",
  whatsapp: "(85) 99769-0022",
  email: "contatotocafisio@hotmail.com",
  instagram: "@EUSOUTOCA",
  waLink: "https://wa.me/5585997690022",
  igLink: "https://www.instagram.com/eusoutoca/",
  address: {
    street: "Av. Santos Dumont, 5335",
    complement: "5º andar · Salas 508 e 509",
    neighborhood: "Papicu",
    city: "Fortaleza",
    state: "CE",
    cep: "60175-047",
    maps: "https://maps.app.goo.gl/YQcGZRKjLqYRXxNT9",
  },
};

const specialties = [
  {
    name: "Psicologia",
    desc: "Acompanhamento psicológico infantil com foco no desenvolvimento emocional e comportamental.",
  },
  {
    name: "Psicopedagogia",
    desc: "Apoio especializado para dificuldades de aprendizagem e processos pedagógicos.",
  },
  {
    name: "Psicomotricidade",
    desc: "Trabalho corporal e motor que integra movimento, afeto e cognição.",
  },
  {
    name: "Fonoaudiologia",
    desc: "Estimulação da linguagem, fala, audição e motricidade orofacial.",
  },
  {
    name: "Terapia Ocupacional",
    desc: "Autonomia nas atividades diárias por meio de intervenções lúdicas e funcionais.",
  },
  {
    name: "Fisioterapia Motora",
    desc: "Desenvolvimento motor, coordenação e reabilitação do movimento.",
  },
  {
    name: "Fisioterapia Visual",
    desc: "Estimulação e reabilitação da função visual no desenvolvimento infantil.",
  },
  {
    name: "Musicoterapia",
    desc: "A música como ferramenta terapêutica para expressão, comunicação e vínculo.",
  },
];

const agreements = [
  "Unimed",
  "Abmais Saúde",
  "São Camilo",
  "Rede Saúde",
  "Cafaz",
  "ISSEC",
];

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <main>
      <div className="bg-play" aria-hidden="true">
        <div className="bg-shape bg-shape--1" />
        <div className="bg-shape bg-shape--2" />
        <div className="bg-shape bg-shape--3" />
        <div className="bg-shape bg-shape--4" />
        <div className="bg-shape bg-shape--5" />
        <div className="bg-shape bg-shape--6" />
      </div>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Toca — início">
          <img
            className="brand-logo"
            src="/assets/logo-toca-bg.png"
            alt="Toca — Desenvolvimento Infantil"
          />
        </a>

        <nav
          className={menuOpen ? "nav open" : "nav"}
          aria-label="Menu principal"
        >
          <button onClick={() => scrollTo("especialidades")}>
            Especialidades
          </button>
          <button onClick={() => scrollTo("convenios")}>Convênios</button>
          <button onClick={() => scrollTo("localizacao")}>Localização</button>
          <button onClick={() => scrollTo("contato")}>Contato</button>
          <a
            className="nav-cta"
            href={DATA.waLink}
            target="_blank"
            rel="noreferrer"
          >
            Agendar avaliação
          </a>
        </nav>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>

      <section id="top" className="hero">
        <div className="hero-content">
          <span className="hero-badge">
            <Sparkles size={14} /> Feito por humanos, para humanos
          </span>
          <h1>
            Onde cada avanço da <em>criança</em> é visto de perto.
          </h1>
          <p className="hero-text">
            A Toca reúne cuidado multidisciplinar, escuta ativa e rotina
            terapêutica pensada para crianças e famílias que precisam de
            acompanhamento com presença, carinho e técnica.
          </p>
          <div className="hero-actions">
            <a
              className="btn btn-primary"
              href={DATA.waLink}
              target="_blank"
              rel="noreferrer"
            >
              Agendar pelo WhatsApp <ArrowRight size={18} />
            </a>
            <button
              className="btn btn-secondary"
              onClick={() => scrollTo("especialidades")}
            >
              Ver especialidades
            </button>
          </div>
        </div>

        <div className="hero-visual" aria-label="Imagem institucional da Toca">
          <div className="photo-main">
            <img
              src="/assets/convenios-toca.jpeg"
              alt="Espaço de atendimento infantil da Toca"
              loading="lazy"
            />
          </div>
          <div className="hero-floating">
            <Heart
              size={16}
              style={{
                verticalAlign: "middle",
                marginRight: 8,
                color: "var(--coral)",
              }}
            />
            Cuidado no tempo da criança
          </div>
          <div className="hero-floating">
            <UsersRound
              size={16}
              style={{
                verticalAlign: "middle",
                marginRight: 8,
                color: "var(--blue)",
              }}
            />
            Equipe multidisciplinar
          </div>
        </div>
      </section>

      <div className="trust-bar">
        <span>
          <HeartHandshake size={18} /> Acolhimento familiar
        </span>
        <span>
          <UsersRound size={18} /> Equipe integrada
        </span>
        <span>
          <ShieldCheck size={18} /> Atendimento especializado
        </span>
        <span>
          <MapPin size={18} /> Fortaleza — Papicu
        </span>
      </div>

      <section className="section">
        <div className="about-grid">
          <div className="photo-stack">
            <img
              src="/assets/toca-especialidade.png"
              alt="Especialidades da Toca"
              loading="lazy"
            />
            <img
              src="/assets/contato-toca.png"
              alt="Informações de contato da Toca"
              loading="lazy"
            />
          </div>
          <div>
            <div className="section-label">Jeito Toca</div>
            <h2>Menos clínica fria. Mais presença, rotina e vínculo.</h2>
            <p>
              Acreditamos que o desenvolvimento infantil acontece na relação —
              entre terapeuta e criança, entre família e equipe, entre o cuidado
              técnico e o afeto. Por isso, nossa clínica foi pensada para ser um
              espaço onde cada pessoa é vista pelo nome, ouvida com atenção e
              acompanhada com constância.
            </p>
            <p style={{ marginTop: 20 }}>
              Nada de recepção impessoal ou protocolo genérico. Aqui o
              atendimento é feito por profissionais de verdade, com formação
              sólida, escuta sensível e um compromisso real com o progresso de
              cada criança.
            </p>
          </div>
        </div>
      </section>

      <section id="especialidades" className="section">
        <div className="specialties-header">
          <div>
            <div className="section-label">Especialidades</div>
            <h2>Cuidado convencional e especializado.</h2>
          </div>
          <a
            href={DATA.igLink}
            target="_blank"
            rel="noreferrer"
            className="ig-link"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>{" "}
            Ver no Instagram
          </a>
        </div>

        <div className="specialty-grid">
          {specialties.map((item, index) => (
            <article className="specialty-card" key={item.name}>
              <span className="card-num">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3>{item.name}</h3>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section process-section">
        <div className="section-label">Como funciona</div>
        <h2>Da primeira conversa ao plano terapêutico.</h2>
        <div className="process-grid">
          <article className="process-step">
            <CalendarCheck size={32} />
            <h3>1. Agendamento</h3>
            <p>
              Contato inicial pelo WhatsApp para entender a necessidade da
              família e encontrar o melhor horário.
            </p>
          </article>
          <article className="process-step">
            <Star size={32} />
            <h3>2. Avaliação</h3>
            <p>
              Observação cuidadosa da criança, escuta da família e definição do
              melhor caminho terapêutico.
            </p>
          </article>
          <article className="process-step">
            <HeartHandshake size={32} />
            <h3>3. Acompanhamento</h3>
            <p>
              Plano com equipe integrada, evolução acompanhada de perto e
              orientação contínua para a família.
            </p>
          </article>
        </div>
      </section>

      <section id="convenios" className="section">
        <div className="agreements-grid">
          <div>
            <div className="section-label">Convênios</div>
            <h2>A Toca atende por diferentes convênios.</h2>
            <p>
              Consulte a disponibilidade para avaliação, especialidade,
              autorização e agenda antes do atendimento.
            </p>
            <div className="agreement-tags">
              {agreements.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
          <div className="agreement-images">
            <img
              src="/assets/toca-especialidade.png"
              alt="Lista de especialidades"
              loading="lazy"
            />
            <img
              src="/assets/contato-toca.png"
              alt="Informações de contato"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section id="localizacao" className="location-section">
        <div className="location-grid">
          <div className="location-info">
            <div className="section-label">Onde estamos</div>
            <h3>{DATA.address.street}</h3>
            <address>
              {DATA.address.complement}
              <br />
              {DATA.address.neighborhood} · {DATA.address.city}/
              {DATA.address.state}
              <br />
              CEP {DATA.address.cep}
            </address>
            <a
              className="btn btn-primary"
              href={DATA.address.maps}
              target="_blank"
              rel="noreferrer"
            >
              <MapPin size={16} /> Abrir no Google Maps
            </a>
          </div>
          <div className="location-map">
            <iframe
              title="Localização da Toca"
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.228176494966!2d-38.468525!3d-3.746402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM8KwNDQnNDcuMSJTIDM4wrAyOCcwNi43Ilc!5e0!3m2!1spt-BR!2sbr!4v1`}
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <section id="contato" className="contact-section">
        <div className="contact-wrapper">
          <div>
            <div className="section-label" style={{ color: "var(--blue)" }}>
              Contato
            </div>
            <h2>Vamos conversar sobre o desenvolvimento da sua criança?</h2>
            <p>Fale com a Toca e consulte a melhor agenda para avaliação.</p>
          </div>
          <div className="contact-channels">
            <a href={`tel:${DATA.phone.replace(/\D/g, "")}`}>
              <Phone size={19} /> {DATA.phone}
            </a>
            <a href={DATA.waLink} target="_blank" rel="noreferrer">
              <Phone size={19} /> WhatsApp: {DATA.whatsapp}
            </a>
            <a href={`mailto:${DATA.email}`}>
              <Mail size={19} /> {DATA.email}
            </a>
            <a href={DATA.igLink} target="_blank" rel="noreferrer">
              <svg
                width="19"
                height="19"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>{" "}
              {DATA.instagram}
            </a>
            <a href={DATA.address.maps} target="_blank" rel="noreferrer">
              <MapPin size={19} /> {DATA.address.street} ·{" "}
              {DATA.address.neighborhood}
            </a>
          </div>
        </div>
      </section>

      <div className="anti-ia-banner">
        <p>
          <Camera size={18} /> Feito por humanos, com amor.
        </p>
        <span>Cuidamos de você e da sua criança</span>
      </div>

      <footer>
        <span>Toca — Equipe de Desenvolvimento Infantil · Fortaleza/CE</span>
        <div className="footer-socials">
          <a href={DATA.igLink} target="_blank" rel="noreferrer">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>{" "}
            Instagram
          </a>
          <a href={DATA.waLink} target="_blank" rel="noreferrer">
            <Phone size={16} />
            WhatsApp
          </a>
        </div>
      </footer>
    </main>
  );
}

const root = createRoot(document.getElementById("root")!);
root.render(<App />);
