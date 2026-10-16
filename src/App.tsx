import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowDown,
  CheckCheck,
  ChevronDown,
  MessageCircle,
  Pointer,
} from "lucide-react";
import {
  Robot,
  RobotHero,
  LeadCooling,
  PriceBars,
  TrainingDiagram,
  ChaosToOrder,
} from "./graphics";

const WHATSAPP_PHONE = "56944947172";
const WHATSAPP_MESSAGE =
  "¡Hola! Me gustaría conocer al Agente de Avanza Smart y saber cómo funciona.";
const FI = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

const B = {
  night: "#1a1a1a",
  night2: "#242424",
  paper: "#FFFFFF",
  subtle: "#F5F5F5",
  ink: "#4f4f4f",
  muted: "#6b6b6b",
  signal: "#ff851d",
  agent: "#ef375c",
  red: "#f34551",
  bubble: "#242424",
};

const Ce = {
  primary: "linear-gradient(135deg, #ff851d 0%, #ef375c 100%)",
  warm: "linear-gradient(135deg, #ff851d 0%, #f34551 100%)",
  sunset:
    "linear-gradient(160deg, #ff851d 20%, #f34551 60%, #ef375c 100%)",
  softDark:
    "linear-gradient(135deg, rgba(255,133,29,0.10) 0%, rgba(239,55,92,0.10) 100%)",
  softLight:
    "linear-gradient(135deg, rgba(255,133,29,0.08) 0%, rgba(239,55,92,0.08) 100%)",
};

const Xe = {
  btn: "0 4px 14px rgba(239,55,92,0.35)",
  glow: "0 4px 20px rgba(255,133,29,0.30)",
  cardDark:
    "0 2px 12px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.04)",
  cardLight:
    "0 2px 12px rgba(79,79,79,0.08), 0 0 0 1px rgba(79,79,79,0.04)",
  lg: "0 8px 32px rgba(0,0,0,0.5)",
};

function useInView(
  ref: React.RefObject<HTMLDivElement | null>,
  threshold = 0.35
) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setInView(true),
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, threshold]);
  return inView;
}

function Section({
  children,
  dark = true,
  className = "",
  id,
  bg,
}: {
  children: React.ReactNode;
  dark?: boolean;
  className?: string;
  id?: string;
  bg?: string;
}) {
  return (
    <section
      id={id}
      className={`relative flex min-h-[100svh] snap-start flex-col px-6 pt-16 pb-28 sm:px-12 md:px-20 ${className}`}
      style={{
        background: bg || (dark ? B.night : B.paper),
        color: dark ? "#e8e8e8" : B.ink,
      }}
    >
      <div className="mx-auto flex w-full max-w-[1080px] flex-1 flex-col">
        {children}
      </div>
    </section>
  );
}

const H = ({
  children,
  className = "",
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) => (
  <h2
    className={`font-[Ubuntu] font-bold leading-[1.08] tracking-[-0.02em] ${className}`}
    style={style}
  >
    {children}
  </h2>
);

const Eyebrow = ({
  children,
  color,
}: {
  children: React.ReactNode;
  color?: string;
}) => (
  <p
    className="font-[Ubuntu] text-[19px] font-bold leading-snug sm:text-[22px]"
    style={{ color }}
  >
    {children}
  </p>
);

const yt = {
  wall: "#efeae2",
  out: "#d9fdd3",
  inn: "#ffffff",
  text: "#111b21",
  meta: "#667781",
  tick: "#53bdeb",
  bar: "#008069",
  frame: "#1f2c33",
};

function addMin(time: string, delta: number) {
  const [h, m] = time.split(":").map(Number);
  const total = (h * 60 + m + delta) % 1440;
  return `${String(Math.floor(total / 60)).padStart(2, "0")}:${String(
    total % 60
  ).padStart(2, "0")}`;
}

interface ChatMessage {
  from: "user" | "bot";
  text: string;
}

function Chat({
  time,
  messages,
  title,
}: {
  time: string;
  messages: ChatMessage[];
  title: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, 0.3);
  const [count, setCount] = useState(0);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    if (!inView || count >= messages.length) return;
    const msg = messages[count];
    if (msg.from === "bot") setTyping(true);
    const t = setTimeout(
      () => {
        setTyping(false);
        setCount((c) => c + 1);
      },
      count === 0 ? 400 : msg.from === "bot" ? 1200 : 750
    );
    return () => clearTimeout(t);
  }, [inView, count, messages]);

  return (
    <div
      ref={ref}
      className="relative mx-auto min-h-[600px] w-full max-w-[420px]"
    >
      <div
        className="absolute inset-y-0 left-1/2 w-[74%] -translate-x-1/2 rounded-[46px] p-[9px]"
        style={{
          background: yt.frame,
          boxShadow: "0 24px 60px -18px rgba(0,0,0,0.45)",
        }}
      >
        <span
          className="absolute -right-[4px] top-[120px] h-[56px] w-[4px] rounded-r"
          style={{ background: yt.frame }}
        />
        <span
          className="absolute -left-[4px] top-[100px] h-[34px] w-[4px] rounded-l"
          style={{ background: yt.frame }}
        />
        <div
          className="relative h-full overflow-hidden rounded-[38px]"
          style={{ background: yt.wall }}
        >
          <div
            className="flex items-center gap-2.5 px-4 pb-3 pt-7"
            style={{ background: yt.bar, color: "#fff" }}
          >
            <div
              className="grid h-8 w-8 shrink-0 place-items-center rounded-full text-[14px] font-bold"
              style={{ background: "rgba(255,255,255,0.22)" }}
            >
              IA
            </div>
            <div className="min-w-0">
              <p className="truncate text-[14px] font-bold leading-tight">
                {title}
              </p>
              <p className="text-[14px] leading-tight opacity-90">
                {typing ? "escribiendo…" : "en línea"}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 flex flex-col gap-3 pb-12 pt-[92px]">
        <AnimatePresence initial={false}>
          {messages.slice(0, count).map((d, f) => {
            const isBot = d.from === "bot";
            return (
              <motion.div
                key={f}
                initial={{ opacity: 0, y: 14, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className={`max-w-[84%] rounded-[16px] px-4 pb-2 pt-3 text-[15px] leading-[1.45] ${
                  isBot
                    ? "self-end rounded-tr-[4px]"
                    : "self-start rounded-tl-[4px]"
                }`}
                style={{
                  background: isBot ? yt.out : yt.inn,
                  color: yt.text,
                  boxShadow: "0 6px 20px rgba(17,27,33,0.16)",
                  originX: isBot ? 1 : 0,
                }}
              >
                {d.text}
                <span
                  className="mt-1 flex items-center justify-end gap-1 text-[14px]"
                  style={{ color: isBot ? "#4a5a64" : yt.meta }}
                >
                  {isBot && <span className="mr-auto">Agente IA</span>}
                  {addMin(time, Math.floor(f / 2))}
                  {isBot && (
                    <CheckCheck
                      className="h-4 w-4"
                      style={{ color: yt.tick }}
                    />
                  )}
                </span>
              </motion.div>
            );
          })}
        </AnimatePresence>
        {typing && (
          <div
            className="flex w-fit gap-1.5 self-end rounded-[16px] rounded-tr-[4px] px-4 py-4"
            style={{
              background: yt.out,
              boxShadow: "0 6px 20px rgba(17,27,33,0.16)",
            }}
          >
            {[0, 1, 2].map((d) => (
              <motion.span
                key={d}
                className="h-2 w-2 rounded-full"
                style={{ background: yt.meta }}
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{
                  duration: 0.9,
                  repeat: Infinity,
                  delay: d * 0.15,
                }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function CaseSlide({
  rubro,
  headline,
  context,
  time,
  chatTitle,
  messages,
  punch,
  dark,
}: {
  rubro: string;
  headline: React.ReactNode;
  context: string;
  time: string;
  chatTitle: string;
  messages: ChatMessage[];
  punch: string;
  dark?: boolean;
}) {
  return (
    <Section dark={dark}>
      <div className="grid flex-1 grid-cols-1 items-center gap-10 md:grid-cols-[1fr_440px] md:gap-16">
        <div className="min-w-0">
          <Eyebrow color={dark ? B.signal : "#d42a4e"}>
            Caso real · {rubro}
          </Eyebrow>
          <H className="mt-4 text-[38px] sm:text-[56px] md:text-[64px]">
            {headline}
          </H>
          <p
            className="mt-5 max-w-[460px] text-[17px] leading-[1.55]"
            style={{ color: dark ? "#e8e8e8" : B.ink }}
          >
            {context}
          </p>
          <p
            className="mt-4 hidden max-w-[460px] text-[17px] leading-[1.55] md:block"
            style={{ color: dark ? "#aaaaaa" : B.muted }}
          >
            {punch}
          </p>
        </div>
        <div className="w-full min-w-0">
          <Chat time={time} title={chatTitle} messages={messages} />
          <p
            className="mt-3 text-[14px]"
            style={{ color: dark ? "#aaaaaa" : B.muted }}
          >
            Conversación representativa del caso.
          </p>
          <p
            className="mt-5 text-[17px] leading-[1.55] md:hidden"
            style={{ color: dark ? "#aaaaaa" : B.muted }}
          >
            {punch}
          </p>
        </div>
      </div>
    </Section>
  );
}

const TOTAL_WEEKS = 12;
const GANTT_ITEMS = [
  { phase: 1, label: "Kick-off y entrega de tu información", w: [1] },
  { phase: 1, label: "CRM, canales e integraciones", w: [1, 2] },
  { phase: 1, label: "Entrenamiento con tus reglas", w: [1, 2] },
  { phase: 1, label: "Pruebas y demo a tu equipo", w: [2] },
  { phase: 1, label: "Marcha blanca supervisada", w: [3, 4], hot: true },
  { phase: 1, label: "Acompañamiento 30 días", w: [1, 2, 3, 4] },
  {
    phase: 2,
    label: "Aprendizaje: respondes lo que no supo",
    w: [5, 6, 7, 8, 9, 10, 11, 12],
  },
  { phase: 2, label: "Ajuste de reglas y flujos", w: [5, 6, 7, 8, 9, 10, 11, 12] },
  { phase: 3, label: "Mantención del agente", w: [9, 10, 11, 12] },
];

const MILESTONES = [
  { week: 2, label: "Día 14 · atendiendo" },
  { week: 4, label: "Día 30 · opera solo" },
  { week: 12, label: "Día 90 · fin CRM liberado" },
];

function MobileGantt() {
  const months: [string, string, string][] = [
    ["Mes 1", "Instalación", B.signal],
    ["Mes 2", "Mejora", B.agent],
    ["Mes 3", "Mantención", "#e8e8e8"],
  ];
  return (
    <div className="flex flex-col gap-4 md:hidden">
      {months.map(([t, a, o], r) => {
        const weeks = [1, 2, 3, 4].map((l) => r * 4 + l);
        const filtered = GANTT_ITEMS.filter((l) =>
          l.w.some((u) => weeks.includes(u))
        );
        return (
          <div
            key={t}
            className="rounded-[20px] p-5"
            style={{ background: B.night2, boxShadow: Xe.cardDark }}
          >
            <div className="flex items-baseline justify-between">
              <p
                className="font-[Ubuntu] text-[22px] font-bold"
                style={{ color: o }}
              >
                {t}
              </p>
              <p className="text-[15px] font-semibold text-[#aaaaaa]">{a}</p>
            </div>
            <div className="mt-4 flex flex-col gap-3.5">
              {filtered.map((l) => (
                <div key={l.label} className="flex items-center gap-3">
                  <p
                    className="min-w-0 flex-1 text-[15px] leading-snug"
                    style={{
                      color: l.hot ? B.signal : "#e8e8e8",
                      fontWeight: l.hot ? 700 : 400,
                    }}
                  >
                    {l.label}
                  </p>
                  <div className="flex shrink-0 gap-1">
                    {weeks.map((u) => (
                      <span
                        key={u}
                        className="h-2 w-5 rounded-full"
                        style={{
                          background: l.w.includes(u)
                            ? l.phase === 2
                              ? Ce.primary
                              : l.hot
                              ? Ce.warm
                              : "#aaaaaa"
                            : "#333333",
                        }}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
      <div className="flex flex-wrap gap-2">
        {MILESTONES.map((t) => (
          <span
            key={t.label}
            className="rounded-full px-3.5 py-2 text-[14px] font-bold"
            style={{
              background: Ce.softDark,
              color: B.signal,
              boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
            }}
          >
            ◆ {t.label}
          </span>
        ))}
      </div>
    </div>
  );
}

function Gantt() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, 0.2);

  return (
    <div ref={ref} className="hidden w-full md:block">
      <div
        className="grid items-end gap-x-[3px]"
        style={{ gridTemplateColumns: `repeat(${TOTAL_WEEKS}, minmax(0,1fr))` }}
      >
        {[
          ["Mes 1", "Instalación", B.signal],
          ["Mes 2", "Mejora", B.agent],
          ["Mes 3", "Mantención", "#aaaaaa"],
        ].map(([a, o, r]) => (
          <div
            key={a}
            className="pb-2 leading-tight"
            style={{ gridColumn: "span 4", color: r }}
          >
            <p className="font-[Ubuntu] text-[20px] font-bold">{a}</p>
            <p className="text-[14px] font-semibold">{o}</p>
          </div>
        ))}
        {Array.from({ length: TOTAL_WEEKS }).map((_, o) => (
          <div
            key={o}
            className="pb-2 text-center text-[14px] font-semibold text-[#aaaaaa]"
          >
            {o + 1}
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-3">
        {GANTT_ITEMS.map((a, o) => (
          <div key={a.label}>
            <p
              className="mb-1.5 text-[15px] font-semibold leading-tight"
              style={{ color: a.hot ? B.signal : B.paper }}
            >
              {a.label}
            </p>
            <div
              className="grid h-4 gap-x-[3px]"
              style={{
                gridTemplateColumns: `repeat(${TOTAL_WEEKS}, minmax(0,1fr))`,
              }}
            >
              {Array.from({ length: TOTAL_WEEKS }).map((_, s) => {
                const active = a.w.includes(s + 1);
                const color =
                  a.phase === 1
                    ? a.hot
                      ? B.signal
                      : "#aaaaaa"
                    : a.phase === 2
                    ? B.agent
                    : "#707070";
                return (
                  <motion.div
                    key={s}
                    className="rounded-[4px]"
                    initial={false}
                    animate={{
                      opacity: active ? (inView ? 1 : 0) : 1,
                      scaleX: active ? (inView ? 1 : 0) : 1,
                    }}
                    transition={{
                      duration: 0.45,
                      delay: inView ? o * 0.08 + s * 0.03 : 0,
                    }}
                    style={{
                      originX: 0,
                      background: active
                        ? a.phase === 2
                          ? Ce.primary
                          : a.hot
                          ? Ce.warm
                          : color
                        : "#242424",
                      boxShadow:
                        active && (a.phase === 2 || a.hot)
                          ? "0 2px 8px rgba(255,133,29,0.3)"
                          : "none",
                    }}
                  />
                );
              })}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 flex flex-wrap gap-2">
        {MILESTONES.map((a) => (
          <span
            key={a.label}
            className="rounded-full px-3.5 py-2 text-[14px] font-bold"
            style={{
              background: Ce.softDark,
              color: B.signal,
              boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
            }}
          >
            ◆ {a.label}
          </span>
        ))}
      </div>
    </div>
  );
}

const PIPELINE_STEPS = [
  {
    stage: "Lead nuevo",
    who: "agent",
    title: "Cuando te escribe",
    text: "Responde al instante, de día o de noche, por WhatsApp, Instagram, Messenger, TikTok o tu web. También entiende audios.",
  },
  {
    stage: "En conversación",
    who: "agent",
    title: "Mientras conversa",
    text: "Explica tus servicios con tus fichas y condiciones, y hace las preguntas que te dicen si es un cliente serio.",
  },
  {
    stage: "Calificado y agendado",
    who: "agent",
    title: "Cuando hay que pasarlo",
    text: "Agenda en tu calendario o deriva al vendedor que corresponde. Si entras tú, se queda callado.",
  },
  {
    stage: "Seguimiento",
    who: "agent",
    title: "Y después",
    text: "Guarda todo en el CRM, recuerda lo que ya le contaron y vuelve a escribirle a quien dejó de responder.",
  },
  {
    stage: "Cierre",
    who: "you",
    title: "Ahí entras tú",
    text: "Llegas a la reunión con el cliente calificado y toda la conversación a la vista.",
  },
];

function Pipeline() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, 0.15);

  return (
    <div ref={ref} className="relative mt-9">
      <div
        className="absolute bottom-6 left-[15px] top-4 w-[3px] rounded-full md:hidden"
        style={{ background: B.subtle }}
      />
      <motion.div
        className="absolute left-[15px] top-4 w-[3px] origin-top rounded-full md:hidden"
        style={{ background: Ce.primary, bottom: "calc(20% + 8px)" }}
        initial={false}
        animate={{ scaleY: inView ? 1 : 0 }}
        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
      />
      <ol className="relative grid gap-6 md:grid-cols-5 md:gap-4">
        {PIPELINE_STEPS.map((a, o) => {
          const isYou = a.who === "you";
          return (
            <motion.li
              key={a.stage}
              className="flex gap-4 md:flex-col md:gap-3"
              initial={false}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 12 }}
              transition={{
                duration: 0.5,
                delay: inView ? 0.15 + o * 0.18 : 0,
              }}
            >
              <span
                className="relative z-10 mt-0.5 grid h-[33px] w-[33px] shrink-0 place-items-center rounded-full text-[14px] font-bold"
                style={
                  isYou
                    ? {
                        background: B.ink,
                        color: "#fff",
                        boxShadow: Xe.cardLight,
                      }
                    : {
                        background: Ce.primary,
                        color: "#fff",
                        boxShadow: Xe.btn,
                        textShadow: "0 1px 3px rgba(0,0,0,0.2)",
                      }
                }
              >
                {o + 1}
              </span>
              <div
                className="min-w-0 rounded-[12px] md:p-4"
                style={{ boxShadow: "none" }}
              >
                <p
                  className="w-fit rounded-full px-3 py-1 text-[14px] font-bold"
                  style={
                    isYou
                      ? { background: B.subtle, color: B.ink }
                      : { background: Ce.softLight, color: "#c42a4b" }
                  }
                >
                  {a.stage}
                </p>
                <p
                  className="mt-2 font-[Ubuntu] text-[19px] font-bold leading-tight"
                  style={{ color: B.ink }}
                >
                  {a.title}
                </p>
                <p
                  className="mt-1.5 text-[15px] leading-[1.55]"
                  style={{ color: B.muted }}
                >
                  {a.text}
                </p>
              </div>
            </motion.li>
          );
        })}
      </ol>
      <div className="mt-6 flex flex-wrap gap-2 text-[14px] font-bold">
        <span
          className="rounded-full px-3 py-1.5 text-white"
          style={{
            background: Ce.primary,
            boxShadow: Xe.btn,
            textShadow: "0 1px 3px rgba(0,0,0,0.2)",
          }}
        >
          Etapas 1 a 4: el agente
        </span>
        <span
          className="rounded-full px-3 py-1.5"
          style={{
            background: B.subtle,
            color: B.ink,
            boxShadow: Xe.cardLight,
          }}
        >
          Etapa 5: tu equipo
        </span>
      </div>
    </div>
  );
}

interface ValueCardData {
  t: string;
  p: string;
  h: string;
  g: string;
}

const VALUE_CARDS: ValueCardData[] = [
  {
    t: "Las 6 horas que no estuviste",
    p: "Te escriben a las 11 de la mañana. Estabas en terreno, en reunión o viendo a un proveedor. Lo ves a las 5 de la tarde y ese prospecto ya se enfrió: se fue con la competencia o encontró la información en otro lado.",
    h: "Responde en minutos mientras tú estás en otra cosa, por WhatsApp, Instagram, Messenger, TikTok o tu web. También entiende audios.",
    g: "Esa ventana de 6 horas deja de ser tiempo perdido.",
  },
  {
    t: "Los curiosos que te comen la tarde",
    p: "Proveedores, gente que solo quiere precio, vitrineadores. Tu equipo los atiende igual que a un cliente serio.",
    h: "Califica conversando, con tus criterios, y agenda directo al que sí calza.",
    g: "Tu equipo usa su tiempo con quien puede comprar.",
  },
  {
    t: "Todo pasa por el dueño",
    p: "La respuesta técnica la tienes tú, y tú estás en terreno, en reunión o cerrando otro proyecto.",
    h: "Asesora con tus fichas, tu catálogo y tus condiciones.",
    g: "Tu conocimiento trabaja aunque tú no estés disponible.",
  },
  {
    t: "La información vive en cinco lugares",
    p: "WhatsApp del equipo, correos, el Excel y la memoria de cada uno. Se pierde el hilo, y cuando un vendedor se va, se lleva el contexto.",
    h: "Guarda cada conversación y cada dato del cliente en un solo lugar, y retoma donde quedó.",
    g: "El historial comercial es de tu empresa, no de quien lo atendió.",
  },
  {
    t: "Un CRM que nadie actualiza",
    p: "Si los datos están atrasados, decides a ciegas. ¿Cuántas oportunidades reales tienes este mes? Nadie sabe bien.",
    h: "Registra los datos y mueve la oportunidad en tu pipeline mientras conversa, sin que nadie digite nada.",
    g: "Abres el CRM y ves la realidad.",
  },
  {
    t: "El seguimiento que depende de acordarse",
    p: "El prospecto deja de responder y nadie vuelve a escribirle. No por flojera: no había tiempo.",
    h: "Le vuelve a escribir solo a quien dejó de contestar.",
    g: "Ninguna oportunidad se abandona por olvido.",
  },
];

function ValueCard({ v }: { v: ValueCardData }) {
  const [open, setOpen] = useState(false);
  return (
    <button
      type="button"
      onClick={() => setOpen((o) => !o)}
      aria-expanded={open}
      className="w-full rounded-[20px] p-5 text-left transition-shadow"
      style={
        open
          ? {
              background:
                "linear-gradient(135deg, rgba(255,133,29,0.16), rgba(239,55,92,0.16))",
              boxShadow:
                "0 4px 20px rgba(255,133,29,0.25), 0 0 0 1px rgba(255,133,29,0.35)",
            }
          : { background: B.night2, boxShadow: Xe.cardDark }
      }
    >
      <div className="flex items-start justify-between gap-4">
        <p className="font-[Ubuntu] text-[19px] font-bold leading-snug text-[#e8e8e8]">
          {v.t}
        </p>
        <span
          className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full text-[18px] leading-none text-white transition-transform"
          style={{
            background: Ce.primary,
            boxShadow: Xe.btn,
            transform: open ? "rotate(45deg)" : "none",
          }}
        >
          +
        </span>
      </div>
      <AnimatePresence initial={false} mode="wait">
        {open ? (
          <motion.div
            key="s"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <p
              className="mt-3 text-[14px] font-bold uppercase tracking-[0.12em]"
              style={{ color: B.signal }}
            >
              Lo que hace
            </p>
            <p className="mt-1 text-[16px] leading-[1.6] text-[#e8e8e8]">
              {v.h}
            </p>
            <p
              className="mt-3 text-[14px] font-bold uppercase tracking-[0.12em]"
              style={{ color: B.signal }}
            >
              Lo que ganas
            </p>
            <p className="mt-1 font-[Ubuntu] text-[18px] font-bold leading-snug text-white">
              {v.g}
            </p>
          </motion.div>
        ) : (
          <motion.div
            key="p"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <p className="mt-3 text-[16px] leading-[1.6] text-[#c9c9c9]">
              {v.p}
            </p>
            <span
              className="mt-4 inline-flex items-center gap-2.5 rounded-full px-5 py-3 text-[17px] font-bold"
              style={{
                background: Ce.softDark,
                color: B.signal,
                boxShadow:
                  "0 2px 6px rgba(0,0,0,0.3), inset 0 0 0 1.5px rgba(255,133,29,0.6)",
              }}
            >
              <motion.span
                className="inline-flex"
                animate={{ y: [0, -3, 0], scale: [1, 0.9, 1] }}
                transition={{
                  duration: 1.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Pointer className="h-5 w-5" />
              </motion.span>
              <span className="whitespace-nowrap">Ver cómo lo resuelve</span>
              <ChevronDown className="h-5 w-5" />
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}

const FAQS: [string, string][] = [
  [
    "¿Qué es exactamente una conversación?",
    "Una conversación es cada intercambio entre un lead o cliente y el Ingeniero de Ventas IA dentro de un período de 24 horas, en cualquier canal. Tu plan incluye 3.000 conversaciones.",
  ],
  [
    "¿Con qué canales es compatible el Ingeniero de Ventas IA?",
    "Es compatible con WhatsApp, Instagram, Facebook (Messenger), TikTok y el chat de tu sitio web.",
  ],
  [
    "¿Cuánto tiempo dura la implementación?",
    "El agente queda listo en unas 2 semanas. En ese periodo lo configuramos y entrenamos con la información técnica de tu negocio, y desde ahí entra en marcha blanca para ir ajustando detalles con todo bajo tu control.",
  ],
  [
    "¿Hay algún pago inicial de setup?",
    "Sí. La implementación completa es de $900.000 + IVA y se puede pagar en dos: $600.000 + IVA al inicio y $300.000 + IVA el mes siguiente.",
  ],
  [
    "¿Cuándo se me empieza a cobrar la mantención?",
    "El primer mes de mantención es gratis (va incluido con la implementación). La mantención del agente, $200.000 + IVA al mes, se empieza a cobrar a partir del 3er mes de servicio.",
  ],
  [
    "¿Hay contrato mínimo de permanencia?",
    "No. La mantención es mensual y puedes cancelar cuando quieras, sin penalizaciones.",
  ],
];

function LiveClock() {
  const fmt = () =>
    new Date().toLocaleTimeString("es-CL", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  const [time, setTime] = useState(fmt);

  useEffect(() => {
    const timer = setInterval(() => setTime(fmt()), 15000);
    return () => clearInterval(timer);
  }, []);

  return <span className="tabular-nums">{time}</span>;
}

export default function App() {
  const mainRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const s = mainRef.current;
    if (!s) return;
    const onScroll = () =>
      setProgress(s.scrollTop / Math.max(1, s.scrollHeight - s.clientHeight));
    s.addEventListener("scroll", onScroll, { passive: true });
    return () => s.removeEventListener("scroll", onScroll);
  }, []);

  const trainingSteps = [
    [
      "Nos pasas tu conocimiento",
      "Fichas, catálogo, condiciones y cómo decides si un cliente vale la pena. Se entrega una sola vez.",
    ],
    [
      "Lo ajustamos a tus reglas",
      "Definimos juntos qué debe preguntar, cuándo derivar, a quién, y lo que nunca debe prometer.",
    ],
    [
      "Lo miras trabajar",
      "En la marcha blanca ves cada conversación en vivo y puedes tomarla sin que el cliente lo note.",
    ],
    [
      "Aprende cada semana",
      "Las primeras semanas te va a preguntar harto. Es normal: respondes una vez y ya lo sabe.",
    ],
  ];

  return (
    <div
      className="font-[Arimo]"
      style={{ fontFamily: "Arimo, system-ui, sans-serif" }}
    >
      {/* Top progress bar */}
      <div
        className="fixed left-0 top-0 z-50 h-[3px]"
        style={{ width: `${progress * 100}%`, background: Ce.warm }}
      />

      <main
        ref={mainRef}
        className="h-[100svh] snap-y snap-proximity overflow-y-auto"
        style={{ background: B.night }}
      >
        {/* Section 1: Hero */}
        <Section>
          <div className="flex flex-1 flex-col justify-between">
            <div className="flex items-center gap-2.5">
              <motion.span
                className="h-2.5 w-2.5 rounded-full"
                style={{ background: B.agent }}
                animate={{ opacity: [1, 0.25, 1] }}
                transition={{ duration: 1.8, repeat: Infinity }}
              />
              <span className="text-[17px] font-bold" style={{ color: B.signal }}>
                <LiveClock /> · sigue atendiendo
              </span>
            </div>

            <div className="my-4 md:absolute md:right-[6%] md:top-1/2 md:my-0 md:w-[40%] md:-translate-y-1/2">
              <RobotHero />
            </div>

            <div className="md:max-w-[58%]">
              <Eyebrow color={B.signal}>Ingeniero de Ventas IA</Eyebrow>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="mt-5 font-[Ubuntu] text-[46px] font-bold leading-[1.04] tracking-[-0.03em] sm:text-[76px] md:text-[88px]"
              >
                El vendedor estrella que empuja{" "}
                <span style={{ color: B.signal }}>tus ventas.</span>
              </motion.h1>
              <p className="mt-7 max-w-[560px] text-[19px] leading-[1.5] text-[#e8e8e8] sm:text-[22px]">
                Atiende a tus prospectos a cualquier hora, con el conocimiento
                técnico de tu empresa.
              </p>
              <p className="mt-4 max-w-[520px] text-[16px] leading-[1.55] text-[#aaaaaa]">
                Lo armamos junto a empresas como la tuya, y quería mostrártelo
                primero a ti.
              </p>
            </div>

            <div className="flex items-center gap-2 text-[14px] font-semibold text-[#aaaaaa]">
              <motion.span
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 1.6, repeat: Infinity }}
              >
                <ArrowDown className="h-4 w-4" />
              </motion.span>
              Desliza
            </div>
          </div>
        </Section>

        {/* Section 2: Pain Point / Problema */}
        <Section dark={false}>
          <div className="flex flex-1 flex-col justify-center">
            <H className="text-[40px] sm:text-[64px]">
              Te escriben justo cuando estás en terreno.
            </H>
            <p
              className="mt-7 max-w-[600px] text-[18px] leading-[1.6]"
              style={{ color: B.ink }}
            >
              Es una consulta técnica que solo tú sabes responder. La ves en la
              noche y, para entonces, el cliente ya cotizó con otro.
            </p>
            <LeadCooling />
            <p
              className="mt-6 max-w-[600px] text-[18px] leading-[1.6]"
              style={{ color: B.muted }}
            >
              Demanda hay. Lo que falta es alguien que responda con tu nivel
              mientras tú estás en otra cosa.
            </p>
            <div
              className="mt-9 rounded-[20px] p-6"
              style={{
                background: B.night,
                color: "#e8e8e8",
                boxShadow: Xe.glow,
              }}
            >
              <p
                className="text-[17px] font-bold uppercase tracking-[0.12em]"
                style={{ color: B.signal }}
              >
                Con el agente
              </p>
              <p className="mt-3 text-[18px] leading-[1.55]">
                Ese prospecto recibe respuesta en minutos y queda calificado. Tú
                llegas directo a cerrar.
              </p>
            </div>
          </div>
        </Section>

        {/* Section 3: Case 1 - Limpieza */}
        <CaseSlide
          dark={true}
          rubro="Limpieza de alta complejidad"
          headline={
            <>
              Visita agendada antes de{" "}
              <span style={{ color: B.signal }}>medianoche.</span>
            </>
          }
          context="Limpian plantas e instalaciones donde un error no se perdona. Las consultas llegan a cualquier hora y casi siempre traen preguntas técnicas."
          time="23:40"
          chatTitle="Limpieza Industrial"
          punch="Esa noche nadie del equipo tomó el celular. Y aun así, el agente preguntó lo mismo que habría preguntado el jefe de operaciones."
          messages={[
            {
              from: "user",
              text: "Hola, necesitamos limpieza post obra en planta de alimentos, 1.200 m². ¿Trabajan con protocolo HACCP?",
            },
            {
              from: "bot",
              text: "Hola, sí. Trabajamos con protocolos para industria alimentaria. ¿La planta estará detenida? ¿Hay zonas sobre 3 m?",
            },
            {
              from: "user",
              text: "Detenida, y hay techumbre a 6 m.",
            },
            {
              from: "bot",
              text: "Eso requiere trabajo en altura certificado. Te agendo visita técnica: ¿jueves 10:00 o viernes 9:00?",
            },
          ]}
        />

        {/* Section 4: Case 2 - Grupos Electrógenos */}
        <CaseSlide
          dark={false}
          rubro="Repuestos y mantención de grupos electrógenos"
          headline={
            <>
              Pidió un filtro y terminó cotizando una{" "}
              <span style={{ color: "#ef375c" }}>mantención.</span>
            </>
          }
          context="Venden repuestos y mantienen grupos electrógenos. Mucha gente escribe pidiendo una pieza, sin saber que el equipo necesita algo más."
          time="08:12"
          chatTitle="Grupos Electrógenos"
          punch="Un bot genérico habría respondido el stock y listo. Acá el agente vio la oportunidad y se la pasó al técnico."
          messages={[
            {
              from: "user",
              text: "Necesito filtros para un Cummins C150, ¿tienen stock?",
            },
            {
              from: "bot",
              text: "Hola. Para el C150 manejamos kit de aceite, combustible y aire. ¿Cuántas horas de uso tiene?",
            },
            {
              from: "user",
              text: "2.400 horas, nunca le han hecho mantención.",
            },
            {
              from: "bot",
              text: "Con 2.400 h sin mantención te recomiendo la preventiva completa. Te conecto ahora con un técnico para cotizar ambas.",
            },
          ]}
        />

        {/* Section 5: Case 3 - Pisos */}
        <CaseSlide
          dark={true}
          rubro="Pisos de poliuretano"
          headline={
            <>
              No cotiza <span style={{ color: B.signal }}>a ciegas.</span>
            </>
          }
          context="Instalan pisos de poliuretano. La pregunta que más llega es el precio por metro, y contestarla sin contexto es cotizar mal."
          time="15:27"
          chatTitle="Pisos Industriales"
          punch="Antes de hablar de precio, pregunta lo que preguntaría tu mejor técnico. Recién ahí recomienda el sistema que corresponde."
          messages={[
            {
              from: "user",
              text: "¿Cuánto cuesta el piso de poliuretano por m²?",
            },
            {
              from: "bot",
              text: "Depende del sistema. ¿Qué uso tendrá? ¿Grúa horquilla, químicos, lavado con agua caliente?",
            },
            {
              from: "user",
              text: "Cocina industrial, se lava con agua caliente todos los días.",
            },
            {
              from: "bot",
              text: "Entonces corresponde poliuretano cemento, resiste choque térmico. ¿Cuántos m² y en qué comuna? Te agendo la medición.",
            },
          ]}
        />

        {/* Section 6: Pipeline */}
        <Section dark={false}>
          <div className="flex flex-1 flex-col justify-center">
            <H className="text-[38px] sm:text-[60px]">
              Acompaña al prospecto de{" "}
              <span style={{ color: "#ef375c" }}>principio a fin.</span>
            </H>
            <p
              className="mt-5 max-w-[620px] text-[17px] leading-[1.55]"
              style={{ color: B.ink }}
            >
              Así se mueve una oportunidad en tu pipeline. El agente hace las
              primeras cuatro etapas; tú llegas a la última.
            </p>
            <Pipeline />
          </div>
        </Section>

        {/* Section 7: Training & Rules */}
        <Section>
          <div className="flex flex-1 flex-col justify-center">
            <H className="text-[38px] sm:text-[60px]">
              Lo entrenamos con lo que{" "}
              <span style={{ color: B.signal }}>tu equipo ya sabe.</span>
            </H>
            <TrainingDiagram />
            <ol className="mt-10 grid gap-6 md:grid-cols-2">
              {trainingSteps.map(([s, i], l) => (
                <li key={s} className="flex gap-5">
                  <span
                    className="grid h-11 w-11 shrink-0 place-items-center rounded-full font-[Ubuntu] text-[20px] font-bold"
                    style={{
                      background: Ce.primary,
                      color: "#fff",
                      boxShadow: Xe.btn,
                      textShadow: "0 1px 3px rgba(0,0,0,0.2)",
                    }}
                  >
                    {l + 1}
                  </span>
                  <div>
                    <p className="text-[19px] font-bold leading-snug">{s}</p>
                    <p className="mt-1.5 text-[16px] leading-[1.5] text-[#aaaaaa]">
                      {i}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
            <p
              className="mt-10 text-[17px] font-semibold"
              style={{ color: B.signal }}
            >
              Y cuando no sabe algo, lo dice y te deriva. Prefiere eso a inventar.
            </p>
          </div>
        </Section>

        {/* Section 8: Roadmap & Gantt */}
        <Section>
          <div className="flex flex-1 flex-col justify-center">
            <H className="text-[36px] sm:text-[60px]">
              En dos semanas ya está{" "}
              <span style={{ color: B.signal }}>atendiendo.</span>
            </H>
            <div className="mt-6 grid gap-3 md:grid-cols-3">
              {[
                [
                  "Mes 1",
                  "Lo instalamos y lo miras de cerca, con nosotros al lado.",
                  B.signal,
                ],
                [
                  "Mes 2",
                  "Le respondes lo que no supo. Cada semana pregunta menos.",
                  B.agent,
                ],
                [
                  "Mes 3",
                  "Ya opera solo y nosotros nos encargamos de la mantención.",
                  "#aaaaaa",
                ],
              ].map(([s, i, l]) => (
                <p key={s} className="text-[16px] leading-[1.5] text-[#e8e8e8]">
                  <span
                    className="font-[Ubuntu] font-bold"
                    style={{ color: l as string }}
                  >
                    {s}.{" "}
                  </span>
                  {i}
                </p>
              ))}
            </div>
            <div className="mt-8">
              <MobileGantt />
              <Gantt />
            </div>
          </div>
        </Section>

        {/* Section 9: Value Cards / Problemas y soluciones */}
        <Section>
          <div className="flex flex-1 flex-col justify-center">
            <H className="text-[36px] sm:text-[56px]">
              Lo que tu equipo comercial{" "}
              <span style={{ color: B.signal }}>deja de cargar.</span>
            </H>
            <p className="mt-5 max-w-[620px] text-[18px] leading-[1.55] text-[#e8e8e8]">
              Cada cosa que hace el agente resuelve un problema que ya conoces.
            </p>
            <ChaosToOrder />
            <div className="mt-8 grid items-start gap-3 md:grid-cols-2">
              {VALUE_CARDS.map((s) => (
                <ValueCard key={s.t} v={s} />
              ))}
            </div>
            <p className="mt-7 max-w-[680px] text-[15px] leading-[1.55] text-[#aaaaaa]">
              Se conecta con las herramientas que ya usas: Google Calendar,
              Outlook, Slack, ClickUp y una app en tu celular.
            </p>
          </div>
        </Section>

        {/* Section 10: Precios / ROI */}
        <Section dark={false}>
          <div className="flex flex-1 flex-col justify-center">
            <Eyebrow color={B.muted}>Valores netos, más IVA</Eyebrow>
            <H className="mt-4 text-[36px] sm:text-[56px]">
              Un vendedor te cuesta $3.500.000 al mes. El agente,{" "}
              <span style={{ color: "#ef375c" }}>desde $200.000 + IVA.</span>
            </H>
            <PriceBars />

            <div className="mt-8 grid gap-4 md:grid-cols-[1.25fr_1fr]">
              {/* Card 1: IA cost */}
              <div
                className="rounded-[20px] p-6"
                style={{
                  background: B.night,
                  color: "#e8e8e8",
                  boxShadow: Xe.glow,
                }}
              >
                <p className="text-[15px] font-bold" style={{ color: B.signal }}>
                  Así se paga el Ingeniero de Ventas IA
                </p>
                <ol className="mt-5 flex flex-col gap-4">
                  {[
                    [
                      "Mes 1",
                      "$600.000",
                      "Primera parte de la implementación",
                    ],
                    [
                      "Mes 2",
                      "$300.000",
                      "Segunda parte de la implementación",
                    ],
                    [
                      "Desde el mes 3",
                      "$200.000",
                      "Mensual, mantención del agente",
                    ],
                  ].map(([s, i, l], u) => (
                    <li
                      key={s}
                      className="flex items-baseline justify-between gap-4"
                      style={
                        u
                          ? {
                              paddingTop: 16,
                              boxShadow:
                                "inset 0 1px 0 rgba(255,255,255,0.08)",
                            }
                          : undefined
                      }
                    >
                      <div className="min-w-0">
                        <p className="text-[16px] font-bold">{s}</p>
                        <p className="mt-0.5 text-[14px] text-[#aaaaaa]">{l}</p>
                      </div>
                      <p
                        className="shrink-0 text-right font-[Ubuntu] text-[28px] font-bold leading-none"
                        style={{ color: u === 2 ? B.signal : "#e8e8e8" }}
                      >
                        {i}
                        <span className="mt-1 block text-[14px] font-semibold text-[#aaaaaa]">
                          + IVA
                        </span>
                      </p>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Card 2: Features included */}
              <div
                className="rounded-[20px] p-6 md:col-span-2 md:order-3"
                style={{
                  background: Ce.softLight,
                  boxShadow:
                    "0 4px 20px rgba(255,133,29,0.20), 0 0 0 1px rgba(255,133,29,0.30)",
                }}
              >
                <p
                  className="font-[Ubuntu] text-[20px] font-bold"
                  style={{ color: B.ink }}
                >
                  Incluido en tu plan,{" "}
                  <span style={{ color: "#d42a4e" }}>sin costo adicional</span>
                </p>
                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  {[
                    [
                      "Un equipo de personas detrás de tu agente",
                      "Revisamos su funcionamiento todos los días, corregimos lo que haya que corregir y lo vamos mejorando. No quedas solo con una herramienta.",
                    ],
                    [
                      "Te ayudamos a ordenar tu proceso comercial",
                      "Definimos contigo las etapas de tu pipeline, cuándo un prospecto está calificado y cuándo pasarlo a tu equipo.",
                    ],
                    [
                      "Un agente capacitado en ventas",
                      "Igual que un vendedor que hace cursos, el agente se entrena en el método de venta consultiva: preguntas de diagnóstico, manejo de objeciones y cómo llevar la conversación al siguiente paso.",
                    ],
                  ].map(([s, i]) => (
                    <div key={s}>
                      <p
                        className="text-[16px] font-bold leading-snug"
                        style={{ color: B.ink }}
                      >
                        {s}
                      </p>
                      <p
                        className="mt-1.5 text-[15px] leading-[1.55]"
                        style={{ color: B.muted }}
                      >
                        {i}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card 3: Human seller cost */}
              <div
                className="rounded-[20px] p-6"
                style={{ background: B.subtle, boxShadow: Xe.cardLight }}
              >
                <p className="text-[15px] font-bold" style={{ color: B.muted }}>
                  Contratar un vendedor técnico
                </p>
                <p
                  className="mt-3 font-[Ubuntu] text-[34px] font-bold leading-none"
                  style={{ color: B.ink }}
                >
                  $3.500.000
                  <span className="text-[18px]"> /mes</span>
                </p>
                <ul
                  className="mt-4 space-y-2 text-[15px] leading-[1.5]"
                  style={{ color: B.muted }}
                >
                  <li>Sueldo más los costos reales de tenerlo</li>
                  <li>
                    2 a 3 meses aprendiendo tu negocio antes de vender solo
                  </li>
                  <li>Unas 48 horas tuyas enseñándole</li>
                  <li>Atiende en horario de oficina</li>
                  <li>Su capacitación en ventas se paga aparte</li>
                </ul>
              </div>
            </div>

            <p
              className="mt-6 max-w-[620px] text-[16px] leading-[1.55]"
              style={{ color: B.ink }}
            >
              Tu vendedor sigue siendo importante. El agente le saca de encima la
              calificación para que llegue directo a cerrar.
            </p>
          </div>
        </Section>

        {/* Section 11: FAQs */}
        <Section>
          <div className="flex flex-1 flex-col justify-center">
            <H className="text-[36px] sm:text-[56px]">
              Preguntas <span style={{ color: B.signal }}>frecuentes.</span>
            </H>
            <div className="mt-8 flex flex-col gap-3">
              {FAQS.map(([s, i], l) => (
                <details
                  key={s}
                  className="group rounded-[20px] px-5 py-4 open:pb-5"
                  style={{ background: B.night2, boxShadow: Xe.cardDark }}
                  open={l === 0}
                >
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-[Ubuntu] text-[18px] font-bold leading-snug text-[#e8e8e8] [&::-webkit-details-marker]:hidden">
                    {s}
                    <span
                      className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full text-[18px] leading-none text-white transition-transform group-open:rotate-45"
                      style={{ background: Ce.primary, boxShadow: Xe.btn }}
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-[16px] leading-[1.6] text-[#c9c9c9]">
                    {i}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </Section>

        {/* Section 12: Final CTA */}
        <Section bg={Ce.sunset}>
          <div className="flex flex-1 flex-col justify-center">
            <div className="mb-6 w-fit md:absolute md:right-[8%] md:top-1/2 md:mb-0 md:-translate-y-1/2">
              <Robot size={180} wave={true} />
            </div>

            <Eyebrow color="#fff">Pruébalo antes de decidir</Eyebrow>
            <H
              className="mt-4 text-[44px] text-white sm:text-[76px]"
              style={{ textShadow: "0 1px 3px rgba(0,0,0,0.2)" }}
            >
              Conversa con el{" "}
              <span style={{ color: "#1a1a1a", textShadow: "none" }}>
                Ingeniero de Ventas IA.
              </span>
            </H>
            <p className="mt-6 max-w-[560px] text-[18px] leading-[1.5] text-white">
              Dale información de tu negocio y vive la experiencia que podrían
              tener tus clientes.
            </p>

            <a
              href={FI}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-flex w-full items-center justify-center gap-3 rounded-full px-8 py-5 text-[18px] font-bold transition-transform active:scale-[0.98] sm:w-fit"
              style={{
                background: "#fff",
                color: "#d42a4e",
                boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
              }}
            >
              <MessageCircle className="h-6 w-6" /> Chatear con el agente
            </a>

            <p className="mt-6 text-[15px] leading-[1.5] text-white/90">
              Incluye acompañamiento 30 días, marcha blanca supervisada,
              aprendizaje continuo y 3 meses de CRM liberado.
            </p>
          </div>
        </Section>
      </main>

      {/* Floating CTA button when scrolling */}
      <AnimatePresence>
        {progress > 0.04 && progress < 0.95 && (
          <motion.a
            href={FI}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            className="fixed bottom-5 left-1/2 z-50 flex -translate-x-1/2 items-center gap-2 rounded-full px-5 py-3.5 text-[15px] font-bold"
            style={{
              background: Ce.primary,
              color: "#fff",
              boxShadow: Xe.btn,
              textShadow: "0 1px 3px rgba(0,0,0,0.2)",
              x: "-50%",
            }}
          >
            <MessageCircle className="h-5 w-5" /> Probar el agente
          </motion.a>
        )}
      </AnimatePresence>
    </div>
  );
}
