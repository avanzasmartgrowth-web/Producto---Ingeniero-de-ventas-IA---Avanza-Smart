import React, { useRef, useState, useEffect } from "react";
import { motion } from "motion/react";
import {
  MessageCircle,
  Mail,
  FileSpreadsheet,
  NotebookPen,
  Instagram,
} from "lucide-react";

export const qe = "#ff851d";
export const Lp = "#f34551";
export const zt = "#ef375c";
export const gp = "#1a1a1a";
export const Ip = "#242424";
export const kI = "#4f4f4f";

export function useSeen(ref: React.RefObject<HTMLDivElement | null>, threshold = 0.25) {
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setSeen(true),
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, threshold]);
  return seen;
}

export function Robot({
  size = 260,
  wave = false,
  className = "",
}: {
  size?: number;
  wave?: boolean;
  className?: string;
}) {
  return (
    <motion.svg
      viewBox="0 0 260 280"
      width={size}
      height={(size * 280) / 260}
      className={className}
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="gp" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={qe} />
          <stop offset="1" stopColor={zt} />
        </linearGradient>
        <linearGradient id="gs" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#3a3a3a" />
          <stop offset="1" stopColor={Ip} />
        </linearGradient>
        <radialGradient id="glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor={qe} stopOpacity="0.45" />
          <stop offset="1" stopColor={qe} stopOpacity="0" />
        </radialGradient>
        <filter id="sh" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow
            dx="0"
            dy="10"
            stdDeviation="10"
            floodColor="#000"
            floodOpacity="0.45"
          />
        </filter>
      </defs>

      <ellipse cx="130" cy="150" rx="120" ry="110" fill="url(#glow)" />

      <g filter="url(#sh)">
        <rect x="70" y="170" width="120" height="92" rx="34" fill="url(#gs)" />
        <rect x="104" y="196" width="52" height="34" rx="12" fill={gp} />
        <motion.circle
          cx="118"
          cy="213"
          r="5"
          fill={qe}
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 1.6, repeat: Infinity }}
        />
        <motion.circle
          cx="130"
          cy="213"
          r="5"
          fill={Lp}
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1.6, repeat: Infinity }}
        />
        <motion.circle
          cx="142"
          cy="213"
          r="5"
          fill={zt}
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 1.6, repeat: Infinity, delay: 0.4 }}
        />
        <rect
          x="40"
          y="182"
          width="34"
          height="62"
          rx="17"
          fill="url(#gs)"
          transform="rotate(18 57 190)"
        />
        <g transform="rotate(-8 40 236)">
          <rect
            x="22"
            y="214"
            width="34"
            height="56"
            rx="8"
            fill={gp}
            stroke="url(#gp)"
            strokeWidth="3"
          />
          <motion.rect
            x="29"
            y="226"
            width="20"
            height="8"
            rx="4"
            fill="#d9fdd3"
            animate={{ opacity: [0, 1, 1, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.rect
            x="29"
            y="240"
            width="14"
            height="8"
            rx="4"
            fill="#fff"
            animate={{ opacity: [0, 0, 1, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </g>
        <motion.g
          style={{ originX: "196px", originY: "186px" }}
          animate={wave ? { rotate: [0, -28, 0, -28, 0] } : { rotate: 0 }}
          transition={wave ? { duration: 1.6, repeat: Infinity, repeatDelay: 1.4 } : {}}
        >
          <rect
            x="186"
            y="180"
            width="34"
            height="62"
            rx="17"
            fill="url(#gs)"
            transform={wave ? "rotate(-150 203 190)" : "rotate(-18 203 190)"}
          />
        </motion.g>
      </g>

      <rect x="116" y="150" width="28" height="24" rx="8" fill="#2e2e2e" />

      <g filter="url(#sh)">
        <rect x="58" y="62" width="144" height="100" rx="40" fill="url(#gs)" />
        <rect x="74" y="80" width="112" height="64" rx="28" fill={gp} />
        <motion.g
          style={{ originY: "112px" }}
          animate={{ scaleY: [1, 1, 0.1, 1, 1] }}
          transition={{ duration: 4.5, repeat: Infinity, times: [0, 0.9, 0.93, 0.96, 1] }}
        >
          <rect x="98" y="100" width="18" height="24" rx="9" fill={qe} />
          <rect x="144" y="100" width="18" height="24" rx="9" fill={zt} />
        </motion.g>
        <path
          d="M112 132 q18 10 36 0"
          stroke="url(#gp)"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M60 104 C60 40 200 40 200 104"
          stroke="#2e2e2e"
          strokeWidth="9"
          fill="none"
        />
        <rect x="46" y="92" width="20" height="40" rx="10" fill="url(#gp)" />
        <rect x="194" y="92" width="20" height="40" rx="10" fill="url(#gp)" />
        <path
          d="M56 128 C56 154 76 160 96 156"
          stroke="#3a3a3a"
          strokeWidth="5"
          fill="none"
          strokeLinecap="round"
        />
        <motion.circle
          cx="98"
          cy="156"
          r="6"
          fill={qe}
          animate={{ scale: [1, 1.35, 1] }}
          transition={{ duration: 1.2, repeat: Infinity }}
        />
      </g>

      <g filter="url(#sh)">
        <path d="M70 70 C70 18 190 18 190 70 Z" fill="url(#gp)" />
        <rect x="56" y="64" width="148" height="14" rx="7" fill={Lp} />
        <rect x="122" y="22" width="16" height="44" rx="8" fill="#fff" opacity="0.25" />
      </g>
    </motion.svg>
  );
}

export function RobotHero() {
  const bubbles = [
    { x: "4%", y: "18%", d: 0, w: 70, c: "#fff" },
    { x: "70%", y: "8%", d: 1.2, w: 86, c: "#d9fdd3" },
    { x: "76%", y: "58%", d: 2.4, w: 60, c: "#fff" },
  ];

  return (
    <div className="relative mx-auto aspect-[1.15] w-full max-w-[420px] md:max-w-[520px]">
      <div className="absolute inset-0 grid place-items-center">
        <Robot size={250} className="!h-auto !w-[64%]" />
      </div>
      {bubbles.map((t, a) => (
        <motion.div
          key={a}
          className="absolute flex h-9 items-center gap-1.5 rounded-[14px] px-3"
          style={{
            left: t.x,
            top: t.y,
            background: t.c,
            boxShadow: "0 8px 24px rgba(0,0,0,0.35)",
            width: t.w,
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: [0, 1, 1, 0],
            scale: [0.8, 1, 1, 0.9],
            y: [6, 0, -4, -10],
          }}
          transition={{
            duration: 4.2,
            repeat: Infinity,
            delay: t.d,
            times: [0, 0.15, 0.8, 1],
          }}
        >
          {[0, 1, 2].map((o) => (
            <span
              key={o}
              className="h-1.5 w-1.5 rounded-full"
              style={{ background: "#667781" }}
            />
          ))}
        </motion.div>
      ))}
    </div>
  );
}

export function LeadCooling() {
  const ref = useRef<HTMLDivElement>(null);
  const seen = useSeen(ref);

  return (
    <div ref={ref} className="relative mt-8 h-[92px] w-full max-w-[600px]">
      <div
        className="absolute left-0 right-0 top-[44px] h-[10px] rounded-full"
        style={{
          background: `linear-gradient(90deg, ${qe}, ${Lp} 35%, #9aa5ad 75%, #c9d8e0)`,
          boxShadow: "0 2px 8px rgba(79,79,79,0.15)",
        }}
      />
      <svg
        className="absolute left-0 top-[66px]"
        width="22"
        height="24"
        viewBox="0 0 22 24"
      >
        <path
          d="M11 1c2 5 8 7 8 14a8 8 0 0 1-16 0c0-4 3-6 4-9 1 3 2 4 4 4-1-4 0-6 0-9z"
          fill={qe}
        />
      </svg>
      <svg
        className="absolute right-0 top-[66px]"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        stroke="#9aa5ad"
        strokeWidth="2"
        strokeLinecap="round"
      >
        <path d="M12 2v20M3 7l18 10M21 7L3 17" />
      </svg>
      <motion.div
        className="absolute top-0 flex h-[34px] items-center gap-1.5 rounded-[12px] rounded-bl-[4px] px-3"
        style={{
          background: "#fff",
          boxShadow: "0 6px 18px rgba(79,79,79,0.18)",
        }}
        initial={false}
        animate={
          seen
            ? { left: ["0%", "84%"], opacity: [1, 1, 0.55] }
            : { left: "0%" }
        }
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatDelay: 0.8,
          ease: "easeInOut",
        }}
      >
        {[0, 1, 2].map((a) => (
          <span
            key={a}
            className="h-1.5 w-1.5 rounded-full"
            style={{ background: "#667781" }}
          />
        ))}
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#667781"
          strokeWidth="2.4"
        >
          <circle cx="12" cy="12" r="9" />
          <motion.path
            d="M12 7v5l3 2"
            style={{ originX: "12px", originY: "12px" }}
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
        </svg>
      </motion.div>
    </div>
  );
}

export function PriceBars() {
  const ref = useRef<HTMLDivElement>(null);
  const seen = useSeen(ref, 0.3);
  const maxVal = 3500000;
  const data: [string, number][] = [
    ["Mes 1", 600000],
    ["Mes 2", 300000],
    ["Mes 3", 200000],
  ];
  const fullH = 170;

  return (
    <div ref={ref} className="mt-8 w-full max-w-[620px]">
      <div
        className="mb-3 flex flex-wrap gap-4 text-[14px] font-semibold"
        style={{ color: kI }}
      >
        <span className="flex items-center gap-2">
          <span
            className="h-3 w-3 rounded-[3px]"
            style={{ background: "#d9d9d9" }}
          />
          Vendedor técnico
        </span>
        <span className="flex items-center gap-2">
          <span
            className="h-3 w-3 rounded-[3px]"
            style={{ background: `linear-gradient(135deg, ${qe}, ${zt})` }}
          />
          Ingeniero de Ventas IA
        </span>
      </div>
      <div className="flex h-[200px] w-full max-w-[620px] items-end gap-5">
        {data.map(([s, i], l) => (
          <div key={s} className="flex flex-1 flex-col items-center gap-2">
            <div className="flex h-[170px] w-full items-end justify-center gap-2">
              <motion.div
                className="w-[38%] rounded-t-[8px]"
                style={{
                  background: "#d9d9d9",
                  boxShadow: "0 2px 6px rgba(79,79,79,0.08)",
                }}
                initial={false}
                animate={{ height: seen ? fullH : 0 }}
                transition={{
                  duration: 0.9,
                  delay: l * 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
              />
              <motion.div
                className="w-[38%] rounded-t-[8px]"
                style={{
                  background: `linear-gradient(180deg, ${qe}, ${zt})`,
                  boxShadow: "0 4px 14px rgba(239,55,92,0.3)",
                }}
                initial={false}
                animate={{ height: seen ? Math.max(8, (i / maxVal) * fullH) : 0 }}
                transition={{
                  duration: 0.9,
                  delay: 0.4 + l * 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
              />
            </div>
            <span className="text-[14px] font-bold" style={{ color: kI }}>
              {s}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Flow({ seen, delay = 0 }: { seen: boolean; delay?: number }) {
  return (
    <div
      className="relative mx-auto h-9 w-[3px] overflow-hidden rounded-full md:mx-0 md:h-[3px] md:w-auto md:flex-1"
      style={{ background: "#2e2e2e" }}
    >
      <motion.span
        className="absolute left-0 top-0 h-3 w-full rounded-full md:h-full md:w-6"
        style={{ background: `linear-gradient(180deg, ${qe}, ${zt})` }}
        animate={seen ? { top: ["-30%", "110%"], left: 0 } : {}}
        transition={{ duration: 1.4, repeat: Infinity, delay, ease: "easeInOut" }}
      />
    </div>
  );
}

export function Node({
  title,
  items,
  hot = false,
  children,
}: {
  title: string;
  items?: string[];
  hot?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <div
      className="rounded-[20px] p-5 md:w-[250px] md:shrink-0"
      style={
        hot
          ? {
              background:
                "linear-gradient(135deg, rgba(255,133,29,0.16), rgba(239,55,92,0.16))",
              boxShadow:
                "0 4px 20px rgba(255,133,29,0.25), 0 0 0 1px rgba(255,133,29,0.35)",
            }
          : {
              background: Ip,
              boxShadow:
                "0 2px 12px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.04)",
            }
      }
    >
      {children}
      <p
        className="font-[Ubuntu] text-[19px] font-bold"
        style={{ color: hot ? "#fff" : qe }}
      >
        {title}
      </p>
      {items && (
        <div className="mt-3 flex flex-wrap gap-2">
          {items.map((r) => (
            <span
              key={r}
              className="rounded-full px-3 py-1.5 text-[14px] font-semibold text-[#e8e8e8]"
              style={{ background: hot ? "rgba(0,0,0,0.25)" : "#2e2e2e" }}
            >
              {r}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export function TrainingDiagram() {
  const ref = useRef<HTMLDivElement>(null);
  const seen = useSeen(ref, 0.2);

  return (
    <div ref={ref} className="mt-9">
      <div className="flex flex-col md:flex-row md:items-center md:gap-3">
        <Node
          title="Tu conocimiento"
          items={[
            "Fichas técnicas",
            "Catálogo",
            "Condiciones",
            "Criterios de calificación",
          ]}
        />
        <Flow seen={seen} />
        <Node
          title="Tus reglas"
          items={[
            "Qué preguntar",
            "Cuándo derivar",
            "A quién",
            "Qué nunca prometer",
          ]}
        />
        <Flow seen={seen} delay={0.5} />
        <Node
          title="Ingeniero de Ventas IA"
          items={["Responde", "Califica", "Deriva o agenda"]}
          hot
        >
          <div className="-mt-2 mb-1 flex justify-center md:justify-start">
            <Robot size={86} />
          </div>
        </Node>
      </div>

      <div
        className="mt-4 flex items-center gap-3 rounded-[20px] p-4"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,133,29,0.10), rgba(239,55,92,0.10))",
          boxShadow: "0 0 0 1px rgba(255,255,255,0.06)",
        }}
      >
        <motion.svg
          width="34"
          height="34"
          viewBox="0 0 24 24"
          fill="none"
          stroke="url(#lp)"
          strokeWidth="2.4"
          strokeLinecap="round"
          className="shrink-0"
          animate={seen ? { rotate: -360 } : {}}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        >
          <defs>
            <linearGradient id="lp" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor={qe} />
              <stop offset="1" stopColor={zt} />
            </linearGradient>
          </defs>
          <path d="M21 12a9 9 0 1 1-3-6.7" />
          <path d="M21 3v6h-6" />
        </motion.svg>
        <div className="flex flex-wrap items-center gap-2 text-[15px] font-semibold text-[#e8e8e8]">
          <span>Lo que no supo</span>
          <span style={{ color: qe }}>→</span>
          <span>respondes una vez</span>
          <span style={{ color: zt }}>→</span>
          <span>ya lo sabe</span>
        </div>
      </div>
    </div>
  );
}

export function ChaosToOrder() {
  const ref = useRef<HTMLDivElement>(null);
  const seen = useSeen(ref, 0.3);

  const icons = [
    { Ic: MessageCircle, sx: 6, sy: 8, r: -18, col: "#25d366" },
    { Ic: Mail, sx: 30, sy: 62, r: 14, col: "#e8e8e8" },
    { Ic: FileSpreadsheet, sx: 4, sy: 52, r: 22, col: "#79c27a" },
    { Ic: NotebookPen, sx: 34, sy: 4, r: -10, col: "#ffcf8a" },
    { Ic: Instagram, sx: 18, sy: 30, r: 8, col: zt },
  ];

  const trans = {
    duration: 7,
    repeat: Infinity,
    times: [0, 0.18, 0.42, 0.85, 1],
    ease: "easeInOut" as const,
  };

  return (
    <div
      ref={ref}
      className="relative mx-auto mt-8 aspect-[1.55] w-full max-w-[520px]"
    >
      <div
        className="absolute bottom-[4%] right-0 top-[4%] w-[44%] rounded-[20px]"
        style={{
          background: Ip,
          boxShadow:
            "0 2px 12px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.04)",
        }}
      />
      <div className="absolute left-[40%] top-1/2 -translate-x-1/2 -translate-y-1/2">
        <Robot size={110} />
      </div>
      {icons.map(({ Ic, sx, sy, r, col }, d) => (
        <motion.div
          key={d}
          className="absolute flex items-center gap-2"
          style={{ left: `${sx}%`, top: `${sy}%` }}
          animate={
            seen
              ? {
                  left: [`${sx}%`, `${sx}%`, "59%", "59%", `${sx}%`],
                  top: [
                    `${sy}%`,
                    `${sy}%`,
                    `${9 + d * 17}%`,
                    `${9 + d * 17}%`,
                    `${sy}%`,
                  ],
                  rotate: [r, r, 0, 0, r],
                }
              : {}
          }
          transition={{ ...trans, delay: d * 0.08 }}
        >
          <span
            className="grid h-10 w-10 shrink-0 place-items-center rounded-[12px]"
            style={{
              background: "#2e2e2e",
              boxShadow: "0 4px 16px rgba(0,0,0,0.4)",
            }}
          >
            <Ic className="h-5 w-5" style={{ color: col }} />
          </span>
          <motion.span
            className="block h-2.5 rounded-full"
            style={{
              background: `linear-gradient(90deg, ${qe}, ${zt})`,
              originX: 0,
            }}
            animate={
              seen
                ? {
                    width: [0, 0, 64 - d * 6, 64 - d * 6, 0],
                    opacity: [0, 0, 1, 1, 0],
                  }
                : { width: 0, opacity: 0 }
            }
            transition={{ ...trans, delay: d * 0.08 }}
          />
        </motion.div>
      ))}
    </div>
  );
}
