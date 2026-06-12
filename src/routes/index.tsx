import { createFileRoute } from "@tanstack/react-router";
import logoAsset from "@/assets/coellho-logo.jpg";
import {
  Stethoscope,
  Clock,
  Siren,
  Pill,
  Scissors,
  MapPin,
  Phone,
  Instagram,
  Heart,
  PawPrint,
  ShieldCheck,
  Syringe,
  HeartPulse,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Coellho Clínica Veterinária 24h | Cuidar com amor é a nossa missão" },
      { name: "description", content: "Clínica veterinária 24 horas em Alvorada/RS. Consultas, internações, cirurgias, emergência, banho e tosa. (51) 3421-2022." },
      { property: "og:title", content: "Coellho Clínica Veterinária 24h" },
      { property: "og:description", content: "Cuidar com amor é a nossa missão 💙💛" },
    ],
  }),
  component: Home,
});

const WHATSAPP = "https://wa.me/555134212022";
const INSTAGRAM = "https://www.instagram.com/coellhopetcenter_/";
const PHONE_DISPLAY = "(51) 3421-2022";
const ADDRESS = "Av. Frederico Dihl, 434 – Alvorada/RS";
const MAPS_EMBED =
  "https://www.google.com/maps?q=" +
  encodeURIComponent("Av. Frederico Dihl, 434, Alvorada, RS") +
  "&output=embed";
const MAPS_LINK =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent("Av. Frederico Dihl, 434, Alvorada, RS");

const services = [
  { icon: Stethoscope, title: "Consultas Veterinárias", desc: "Check-ups, exames e acompanhamento clínico completo do seu pet." },
  { icon: Clock, title: "Atendimento 24 Horas", desc: "Estamos abertos dia e noite — todos os dias do ano." },
  { icon: HeartPulse, title: "Internações", desc: "Estrutura preparada para internação clínica com monitoramento contínuo." },
  { icon: Syringe, title: "Cirurgias", desc: "Centro cirúrgico equipado e equipe experiente para procedimentos seguros." },
  { icon: Siren, title: "Emergência", desc: "Atendimento urgente para todos os portes — chegou, foi atendido." },
  { icon: Pill, title: "Farmácia Veterinária", desc: "Medicamentos e tudo que seu pet precisa para o tratamento." },
  { icon: Scissors, title: "Banho e Tosa", desc: "Higiene, beleza e bem-estar com profissionais que amam animais." },
];

function Logo({ size = "default" }: { size?: "default" | "lg" }) {
  const h = size === "lg" ? "h-16" : "h-11";
  return (
    <a href="#top" className="flex items-center gap-3">
      <div className={`${h} aspect-square shrink-0 overflow-hidden rounded-xl bg-navy p-1 shadow-[var(--shadow-navy)]`}>
        <img src={logoAsset} alt="Coellho Pet Center" className="h-full w-full object-contain" />
      </div>
    </a>
  );
}

function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <Logo />
        <nav className="hidden items-center gap-8 text-sm font-medium text-navy/70 md:flex">
          <a href="#servicos" className="transition-colors hover:text-navy">Serviços</a>
          <a href="#sobre" className="transition-colors hover:text-navy">Sobre</a>
          <a href="#contato" className="transition-colors hover:text-navy">Contato</a>
        </nav>
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noreferrer"
          className="hidden items-center gap-2 rounded-full bg-gold px-4 py-2 text-sm font-bold text-gold-foreground shadow-[var(--shadow-gold)] transition-transform hover:scale-105 sm:inline-flex"
        >
          <Phone className="h-4 w-4" />
          {PHONE_DISPLAY}
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28" style={{ background: "var(--gradient-hero)" }}>
      {/* sun burst behind logo */}
      <div className="pointer-events-none absolute right-[-180px] top-12 hidden h-[640px] w-[640px] rotate-12 rounded-full sun-burst md:block" />
      <div className="pointer-events-none absolute -left-32 -bottom-32 h-[400px] w-[400px] rounded-full bg-gold/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-10 md:grid-cols-[1.1fr_1fr] md:pb-28 md:pt-16">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-navy/15 bg-navy/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-navy">
            <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-gold" />
            Atendimento 24 horas — Alvorada/RS
          </div>

          <h1 className="font-display text-5xl font-extrabold leading-[0.95] text-navy sm:text-6xl md:text-7xl">
            CLÍNICA<br />VETERINÁRIA
            <span className="mt-3 block">
              <span className="relative inline-block">
                <span className="text-navy">24</span>
                <span className="text-navy/80">hrs</span>
                <span className="absolute -right-3 -top-2 h-3 w-3 rounded-full border-2 border-gold" />
              </span>
            </span>
          </h1>

          <p className="mt-6 max-w-md text-lg font-medium text-navy/70">
            <span className="text-navy">Cuidar com amor</span> é a nossa missão.
            Cuidamos de quem te ama <span className="font-bold text-navy">incondicionalmente</span>.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3.5 text-sm font-bold text-navy-foreground shadow-[var(--shadow-navy)] transition-all hover:scale-105"
            >
              <Phone className="h-4 w-4" />
              Falar no WhatsApp
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-bold text-gold-foreground shadow-[var(--shadow-gold)] transition-all hover:scale-105"
            >
              {PHONE_DISPLAY}
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-5 text-xs font-semibold uppercase tracking-wider text-navy/60">
            <div className="flex items-center gap-2"><HeartPulse className="h-4 w-4 text-gold" /> Internações</div>
            <div className="flex items-center gap-2"><Syringe className="h-4 w-4 text-gold" /> Cirurgias</div>
            <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-gold" /> Equipe especializada</div>
          </div>
        </div>

        {/* Logo card — like the flyer */}
        <div className="relative">
          <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-[2rem] bg-navy p-8 shadow-[var(--shadow-navy)]">
            <img
              src={logoAsset}
              alt="Coellho Pet Center — Clínica Veterinária"
              className="h-full w-full object-contain"
            />
          </div>
          {/* floating "24h" badge */}
          <div className="absolute -bottom-5 -left-5 flex items-center gap-3 rounded-2xl border-2 border-navy bg-gold px-4 py-3 shadow-[var(--shadow-gold)] sm:-left-8">
            <Clock className="h-6 w-6 text-navy" />
            <div className="text-left leading-tight">
              <p className="text-[10px] font-bold uppercase tracking-wider text-navy/70">Aberto agora</p>
              <p className="font-display text-lg font-extrabold text-navy">24 horas</p>
            </div>
          </div>
          {/* floating badge - cirurgias/internações */}
          <div className="absolute -right-3 -top-3 rounded-2xl bg-navy px-4 py-3 text-navy-foreground shadow-[var(--shadow-navy)] sm:-right-6">
            <div className="flex items-center gap-2 text-sm font-bold">
              <PawPrint className="h-4 w-4 text-gold" /> Internações
            </div>
            <div className="mt-1 flex items-center gap-2 text-sm font-bold">
              <Syringe className="h-4 w-4 text-gold" /> Cirurgias
            </div>
          </div>
        </div>
      </div>

      {/* mission strip — mirrors the bottom of the flyer */}
      <div className="relative bg-navy text-navy-foreground">
        <div className="mx-auto grid max-w-6xl gap-4 px-5 py-5 text-sm sm:grid-cols-[1fr_auto_1fr] sm:items-center">
          <div className="flex items-center gap-3">
            <Heart className="h-5 w-5 shrink-0 text-gold" />
            <p>
              Cuidar de quem te <span className="font-bold text-gold">AMA INCONDICIONALMENTE</span> é a nossa <span className="font-bold text-gold">MISSÃO</span>.
            </p>
          </div>
          <div className="hidden h-8 w-px bg-white/20 sm:block" />
          <div className="flex items-center gap-3">
            <Phone className="h-5 w-5 shrink-0 text-gold" />
            <p>
              Informações e Agendamentos:{" "}
              <a href={WHATSAPP} target="_blank" rel="noreferrer" className="font-display text-base font-extrabold text-gold hover:underline">
                51 3421.2022
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="servicos" className="relative py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-gold">Nossos Serviços</p>
          <h2 className="font-display text-3xl font-extrabold text-navy sm:text-4xl md:text-5xl">
            Cuidado completo, do focinho à cauda.
          </h2>
          <p className="mt-4 text-navy/60">
            Estrutura preparada para acolher seu pet em todos os momentos — da rotina à emergência.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-gold hover:shadow-[var(--shadow-gold)]"
            >
              <div className="mb-5 inline-grid h-12 w-12 place-items-center rounded-xl bg-navy text-gold transition-colors group-hover:bg-gold group-hover:text-navy">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-navy">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy/60">{s.desc}</p>
            </article>
          ))}
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-navy p-7 text-navy-foreground transition-transform hover:-translate-y-1"
          >
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full sun-burst" />
            <div className="relative">
              <Heart className="h-7 w-7 text-gold" />
              <h3 className="mt-5 font-display text-xl font-bold">Precisa de ajuda agora?</h3>
              <p className="mt-2 text-sm text-white/70">Fale com a nossa equipe — atendemos 24h por dia.</p>
            </div>
            <span className="relative mt-6 inline-flex items-center gap-2 text-sm font-bold text-gold">
              Conversar agora →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="sobre" className="relative overflow-hidden border-y border-border bg-navy py-24 text-navy-foreground">
      <div className="pointer-events-none absolute -right-40 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full sun-burst" />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-2 md:items-center">
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-gold">Sobre a Coellho</p>
          <h2 className="font-display text-3xl font-extrabold sm:text-4xl md:text-5xl">
            Uma clínica feita com <span className="gradient-text">amor</span> pelos animais.
          </h2>
          <p className="mt-5 text-white/75">
            A <strong className="text-white">Coellho Clínica Veterinária</strong> é referência em saúde animal na região
            de Alvorada. Atuamos com compromisso, ética e carinho — porque acreditamos que cada pet merece o melhor
            atendimento, em qualquer hora do dia.
          </p>
          <p className="mt-4 text-white/75">
            Estrutura completa com internações, centro cirúrgico, farmácia veterinária, banho e tosa, e equipe
            preparada para emergências 24h.
          </p>

          <div className="mt-8 grid grid-cols-3 gap-4">
            {[
              { n: "24h", l: "Atendimento" },
              { n: "+1k", l: "Pets felizes" },
              { n: "5★", l: "Avaliações" },
            ].map((s) => (
              <div key={s.l} className="rounded-xl border border-white/15 bg-white/5 p-4 text-center">
                <p className="font-display text-2xl font-extrabold text-gold">{s.n}</p>
                <p className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-white/60">{s.l}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-[2rem] border-4 border-gold bg-navy p-8">
            <img src={logoAsset} alt="Coellho Pet Center" className="h-full w-full object-contain" />
          </div>
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-gold px-5 py-2 text-sm font-extrabold uppercase tracking-wider text-navy shadow-[var(--shadow-gold)]">
            Cuidar com amor é a nossa missão
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contato" className="relative py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-gold">Localização</p>
          <h2 className="font-display text-3xl font-extrabold text-navy sm:text-4xl md:text-5xl">
            Venha nos visitar.
          </h2>
          <p className="mt-4 text-navy/60">
            Estamos prontos para receber você e o seu pet com todo o cuidado.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_1.4fr]">
          <div className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-7">
            <div className="flex items-start gap-4">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-navy text-gold">
                <MapPin className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-wider text-navy/50">Endereço</p>
                <p className="mt-1 font-semibold text-navy">{ADDRESS}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-navy text-gold">
                <Phone className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-wider text-navy/50">Telefone / WhatsApp</p>
                <a href={WHATSAPP} target="_blank" rel="noreferrer" className="mt-1 block font-display text-xl font-extrabold text-navy hover:text-gold">
                  {PHONE_DISPLAY}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-navy text-gold">
                <Clock className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-wider text-navy/50">Horário</p>
                <p className="mt-1 font-semibold text-navy">Atendimento 24 horas — todos os dias</p>
              </div>
            </div>

            <div className="mt-2 flex flex-wrap gap-3">
              <a
                href={MAPS_LINK}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-bold text-gold-foreground shadow-[var(--shadow-gold)] transition-transform hover:scale-105"
              >
                <MapPin className="h-4 w-4" />
                Como chegar
              </a>
              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-navy/20 bg-card px-5 py-3 text-sm font-semibold text-navy transition-colors hover:border-gold hover:text-navy"
              >
                <Instagram className="h-4 w-4" />
                @coellhopetcenter_
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-border bg-card">
            <iframe
              title="Mapa Coellho Clínica Veterinária"
              src={MAPS_EMBED}
              className="h-[420px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-navy py-10 text-navy-foreground">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 text-sm md:flex-row">
        <Logo />
        <p className="text-center text-white/70">
          © {new Date().getFullYear()} Coellho Clínica Veterinária. Cuidar com amor é a nossa missão.
        </p>
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noreferrer"
      aria-label="Fale conosco no WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-5px_rgba(37,211,102,0.6)] transition-transform hover:scale-110 sm:h-16 sm:w-16"
    >
      <svg viewBox="0 0 24 24" className="h-7 w-7 sm:h-8 sm:w-8" fill="currentColor" aria-hidden="true">
        <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.588-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 0 1 8.413 3.488 11.82 11.82 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
      </svg>
    </a>
  );
}

function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
