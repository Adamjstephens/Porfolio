import { StrictMode, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import { tools, useCases } from "./data/tools";
import type { Tool, ToolIconName } from "./data/tools";

const basePath = "/Porfolio";

function normalizePath(pathname: string) {
  const withoutBase = pathname.startsWith(basePath)
    ? pathname.slice(basePath.length)
    : pathname;
  return withoutBase === "" ? "/" : withoutBase;
}

function getInitialRoute() {
  const params = new URLSearchParams(window.location.search);
  const redirectPath = params.get("p");

  if (redirectPath) {
    const normalized = normalizePath(redirectPath);
    const nextUrl = `${basePath}${normalized === "/" ? "" : normalized}`;
    window.history.replaceState({}, "", nextUrl);
    return normalized;
  }

  return normalizePath(window.location.pathname);
}

function localHref(path: string) {
  return `${basePath}${path === "/" ? "" : path}`;
}

function assetHref(path: string) {
  return `${basePath}${path}`;
}

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/tools", label: "Tools" },
  { href: "/about", label: "Why MirrorFlow" },
];

const executiveMetrics = [
  {
    value: "3-6 min",
    label: "estimated saved per lead",
    detail: "Less retyping, searching, and switching between workflow surfaces.",
  },
  {
    value: "Live",
    label: "credit visibility",
    detail: "Bookings become visible progress instead of end-of-day guesswork.",
  },
  {
    value: "1 trail",
    label: "for QA and coaching",
    detail: "Saved outcomes, rejection reasons, callbacks, and context stay reviewable.",
  },
  {
    value: "4 tools",
    label: "one workflow layer",
    detail: "Lead tracking, templates, AI assist, and reflection work together.",
  },
];

const leadershipPoints = [
  {
    title: "Turns invisible effort into operating data",
    copy: "MirrorCTT and MirrorCXT capture outcomes, credit movement, callback intent, and rejection patterns so leaders can see what is happening between calls, not just after reports are built.",
  },
  {
    title: "Incentivizes better habits without adding admin work",
    copy: "Credit tracking gives reps an immediate reason to save clean lead context. The same action that motivates the rep also creates better QA and coaching evidence.",
  },
  {
    title: "Compresses repetitive tasks into reusable systems",
    copy: "ClickAi and Email Template Builder remove copy/paste drift, reduce context switching, and make the next action faster while keeping the human in control.",
  },
];

const workflowLoop = [
  "Capture lead context",
  "Classify outcome",
  "Credit useful progress",
  "Surface coaching patterns",
  "Automate the next response",
];

const portfolioProof = [
  "Found manual friction in live booking work",
  "Designed the workflow around real operator behavior",
  "Built interfaces that reward accurate tracking",
  "Connected rep speed with QA and leadership visibility",
];

const iconPaths: Record<ToolIconName, string[]> = {
  PanelsTopLeft: [
    "M4 5h16v14H4z",
    "M4 9h16",
    "M9 9v10",
    "M12 13h5",
    "M12 16h4",
  ],
  Gauge: [
    "M4 14a8 8 0 0 1 16 0",
    "M12 14l4-4",
    "M7 18h10",
    "M6 14h2",
    "M16 14h2",
  ],
  Sparkles: [
    "M12 3l1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6z",
    "M5 16l.7 1.8L8 18.5l-2.3.7L5 21l-.7-1.8L2 18.5l2.3-.7z",
    "M19 15l.6 1.4L21 17l-1.4.6L19 19l-.6-1.4L17 17l1.4-.6z",
  ],
  MailPlus: [
    "M4 6h16v12H4z",
    "m4 7 8 6 8-6",
    "M16 18v4",
    "M14 20h4",
  ],
};

function ToolIcon({
  icon,
  className = "h-5 w-5",
}: {
  icon: ToolIconName;
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      className={className}
    >
      {iconPaths[icon].map((path) => (
        <path key={path} d={path} />
      ))}
    </svg>
  );
}

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen overflow-hidden bg-[#07111e] text-slate-100">
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(135deg,#07111e_0%,#0b1424_42%,#10233a_100%)]" />
      <div className="pointer-events-none fixed inset-0 opacity-[0.08] [background-image:linear-gradient(#e2e8f0_1px,transparent_1px),linear-gradient(90deg,#e2e8f0_1px,transparent_1px)] [background-size:48px_48px]" />
      <Navbar />
      <div className="relative">{children}</div>
      <Footer />
    </main>
  );
}

function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#08111f]/88 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-6 lg:px-8">
        <a href={localHref("/")} className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-lg bg-cyan-400 text-sm font-black text-slate-950 shadow-lg shadow-cyan-400/25">
            MF
          </span>
          <span className="text-base font-semibold tracking-tight text-white">
            MirrorFlow Suite
          </span>
        </a>
        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={localHref(link.href)}
              className="text-sm font-medium text-slate-300 transition hover:text-cyan-200"
            >
              {link.label}
            </a>
          ))}
        </div>
        <a
          href={localHref("/tools/mirrorctt")}
          className="inline-flex min-h-10 items-center justify-center rounded-lg bg-cyan-400 px-4 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-400/20 transition hover:-translate-y-0.5 hover:bg-cyan-300"
        >
          Explore Tools
        </a>
      </nav>
      <div className="border-t border-white/10 px-5 py-3 md:hidden">
        <div className="mx-auto flex max-w-7xl justify-between gap-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={localHref(link.href)}
              className="text-sm font-medium text-slate-300 transition hover:text-cyan-200"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-slate-950/70">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-6 md:grid-cols-[1.2fr_1fr_1fr] lg:px-8">
        <div>
          <p className="text-lg font-semibold text-white">MirrorFlow Suite</p>
          <p className="mt-3 max-w-md text-sm leading-7 text-slate-400">
            A workflow portfolio showing how small internal tools can save time,
            motivate cleaner lead tracking, and turn frontline work into better
            QA and leadership visibility.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-200">
            Tool pages
          </p>
          <div className="mt-4 grid gap-2">
            {tools.map((tool) => (
              <a
                key={tool.slug}
                href={localHref(`/tools/${tool.slug}`)}
                className="text-sm text-slate-400 hover:text-cyan-200"
              >
                {tool.name}
              </a>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-200">
            Pages
          </p>
          <div className="mt-4 grid gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={localHref(link.href)}
                className="text-sm text-slate-400 hover:text-cyan-200"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-5 text-center text-xs text-slate-500">
        Copyright 2026 MirrorFlow Suite. All rights reserved.
      </div>
    </footer>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
      {children}
    </p>
  );
}

function SectionHeader({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-8 text-slate-300">{copy}</p>
    </div>
  );
}

function ProductFrame({ tool }: { tool: Tool }) {
  const [active, setActive] = useState(0);
  const screenshot = tool.screenshots[active];

  if (!screenshot) {
    return <SystemMap tool={tool} />;
  }

  return (
    <div className="rounded-2xl border border-white/10 bg-[#111b2a]/90 p-4 shadow-2xl shadow-black/30">
      <div className="flex flex-wrap gap-2 pb-4">
        {tool.screenshots.map((shot, index) => (
          <button
            key={shot.src}
            onClick={() => setActive(index)}
            className={`rounded-full border px-3 py-1.5 text-xs font-bold transition ${
              active === index
                ? "border-cyan-300 bg-cyan-300 text-slate-950"
                : "border-white/10 bg-slate-950/60 text-slate-300 hover:border-cyan-300/60"
            }`}
          >
            {shot.caption}
          </button>
        ))}
      </div>
      <div className="relative overflow-hidden rounded-xl border border-white/10 bg-slate-950/75">
        <img
          src={assetHref(screenshot.src)}
          alt={screenshot.alt}
          className="mx-auto max-h-[560px] w-full object-contain"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent p-4">
          <p className="text-sm font-semibold text-cyan-100">
            {screenshot.caption}
          </p>
        </div>
      </div>
    </div>
  );
}

function ExecutiveMetricGrid() {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {executiveMetrics.map((metric) => (
        <div
          key={metric.label}
          className="rounded-xl border border-white/10 bg-white/[0.045] p-4"
        >
          <p className="text-3xl font-black tracking-tight text-white">
            {metric.value}
          </p>
          <p className="mt-1 text-xs font-black uppercase tracking-[0.16em] text-cyan-200">
            {metric.label}
          </p>
          <p className="mt-3 text-sm leading-6 text-slate-400">
            {metric.detail}
          </p>
        </div>
      ))}
    </div>
  );
}

function ImpactConsole({ activeTool }: { activeTool: Tool }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#0b1322]/95 p-5 shadow-2xl shadow-black/40">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-300">
            Executive View
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-white">
            MirrorFlow turns daily clicks into operational leverage.
          </h2>
        </div>
        <span className="rounded-lg border border-emerald-300/30 bg-emerald-300/10 px-3 py-2 text-xs font-black uppercase tracking-[0.14em] text-emerald-200">
          Built from frontline friction
        </span>
      </div>

      <div className="mt-5 grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-xl border border-white/10 bg-white/[0.035] p-4">
          <p className="text-sm font-bold text-slate-300">Current focus</p>
          <div className="mt-4 flex items-center gap-3">
            <span className={`rounded-xl bg-gradient-to-br ${activeTool.color} p-px`}>
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-slate-950 text-cyan-100">
                <ToolIcon icon={activeTool.icon} className="h-6 w-6" />
              </span>
            </span>
            <div>
              <p className="text-xl font-black text-white">{activeTool.name}</p>
              <p className="text-sm text-slate-400">{activeTool.badge}</p>
            </div>
          </div>
          <p className="mt-4 text-sm leading-7 text-slate-300">
            {activeTool.shortDescription}
          </p>
          <div className="mt-5 grid gap-3">
            {activeTool.metrics.map((metric) => (
              <div
                key={metric.label}
                className="flex items-center justify-between rounded-lg border border-white/10 bg-slate-950/60 px-3 py-3"
              >
                <span className="text-sm font-semibold text-slate-300">
                  {metric.label}
                </span>
                <span className="text-lg font-black text-cyan-200">
                  {metric.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-cyan-300/20 bg-cyan-300/[0.06] p-4">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-200">
            Value Loop
          </p>
          <div className="mt-5 grid gap-3">
            {workflowLoop.map((item, index) => (
              <div key={item} className="flex items-center gap-3">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-cyan-300 text-sm font-black text-slate-950">
                  {index + 1}
                </span>
                <div className="h-px flex-1 bg-white/10" />
                <span className="min-w-0 flex-[2] text-sm font-bold text-slate-100">
                  {item}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-xl border border-amber-200/20 bg-amber-200/[0.08] p-4">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-amber-100">
              Why leadership should care
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-200">
              The same saved lead that helps a rep get credit also gives QA a
              cleaner artifact, gives trainers concrete coaching moments, and
              gives leaders a more accurate picture of workflow health.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SystemMap({ tool }: { tool: Tool }) {
  return (
    <div className="rounded-[28px] border border-white/10 bg-slate-950/70 p-5 shadow-2xl shadow-black/30">
      <div className={`rounded-2xl bg-gradient-to-br ${tool.color} p-px`}>
        <div className="rounded-2xl bg-slate-950 p-6">
          <div className="flex items-center justify-between gap-4">
            <span className="grid h-12 w-12 place-items-center rounded-lg bg-white/10 text-cyan-200">
              <ToolIcon icon={tool.icon} className="h-6 w-6" />
            </span>
            <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-slate-300">
              Interactive map
            </span>
          </div>
          <h3 className="mt-6 text-2xl font-semibold text-white">
            {tool.name} workflow
          </h3>
          <div className="mt-6 grid gap-3">
            {tool.workflow.map((step, index) => (
              <div
                key={step}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-4"
              >
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-cyan-300 text-sm font-black text-slate-950">
                  {index + 1}
                </span>
                <span className="text-sm font-semibold text-slate-200">
                  {step}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-6 grid grid-cols-3 gap-3">
            {tool.metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-xl border border-white/10 bg-white/[0.04] p-3"
              >
                <p className="text-lg font-black text-white">{metric.value}</p>
                <p className="mt-1 text-xs text-slate-400">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ToolCard({ tool }: { tool: Tool }) {
  return (
    <a
      href={localHref(`/tools/${tool.slug}`)}
      className="group block h-full rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-xl shadow-black/10 transition hover:-translate-y-1 hover:border-cyan-300/50 hover:bg-white/[0.07]"
    >
      <div className="flex items-start justify-between gap-4">
        <div className={`rounded-xl bg-gradient-to-br ${tool.color} p-px`}>
          <span className="grid h-12 w-12 place-items-center rounded-xl bg-slate-950 text-cyan-100">
            <ToolIcon icon={tool.icon} className="h-6 w-6" />
          </span>
        </div>
        <span className="rounded-full border border-white/10 bg-slate-950/60 px-3 py-1 text-xs font-bold text-slate-300">
          {tool.badge}
        </span>
      </div>
      <h3 className="mt-5 text-xl font-semibold text-white">{tool.name}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-300">
        {tool.shortDescription}
      </p>
      <div className="mt-5 flex flex-wrap gap-2">
        {tool.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-white/[0.06] px-3 py-1 text-xs font-semibold text-slate-300"
          >
            {tag}
          </span>
        ))}
      </div>
      <span className="mt-6 inline-flex text-sm font-bold text-cyan-300 transition group-hover:translate-x-1">
        Open tool page
      </span>
    </a>
  );
}

function HomePage() {
  const [activeSlug, setActiveSlug] = useState("mirrorctt");
  const activeTool = tools.find((tool) => tool.slug === activeSlug) ?? tools[0];

  return (
    <>
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-14 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-20">
        <div>
          <Eyebrow>MirrorFlow Suite Portfolio</Eyebrow>
          <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-tight text-white sm:text-7xl">
            Workflow tools that turn frontline effort into measurable insight.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            MirrorFlow Suite shows how I find repeated operational friction and
            turn it into practical software: faster lead handling, motivated
            credit tracking, cleaner QA evidence, better callbacks, and less
            wasted copy/paste work.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={localHref(`/tools/${activeTool.slug}`)}
              className="inline-flex min-h-12 items-center justify-center rounded-lg bg-cyan-300 px-5 text-sm font-black text-slate-950 shadow-xl shadow-cyan-400/20 transition hover:-translate-y-0.5 hover:bg-cyan-200"
            >
              Review {activeTool.name}
            </a>
            <a
              href={localHref("/about")}
              className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/15 bg-white/[0.04] px-5 text-sm font-bold text-white transition hover:border-cyan-300/60"
            >
              Why I built it
            </a>
          </div>
          <div className="mt-8">
            <ExecutiveMetricGrid />
          </div>
        </div>
        <div>
          <div className="mb-4 flex flex-wrap gap-2">
            {tools.map((tool) => (
              <button
                key={tool.slug}
                onClick={() => setActiveSlug(tool.slug)}
                className={`rounded-full border px-3 py-2 text-xs font-bold transition ${
                  activeSlug === tool.slug
                    ? "border-cyan-300 bg-cyan-300 text-slate-950"
                    : "border-white/10 bg-slate-950/70 text-slate-300 hover:border-cyan-300/60"
                }`}
              >
                {tool.name}
              </button>
            ))}
          </div>
          <ImpactConsole activeTool={activeTool} />
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.035]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <Eyebrow>Business Case</Eyebrow>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white">
              The goal was not to make another dashboard. It was to change the
              behavior around lead handling.
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-300">
              Manual tracking usually fails because it asks reps to do extra
              work after the important moment has already passed. MirrorFlow
              moves tracking into the moment of action, then makes the captured
              data useful for the rep, QA, trainers, and leaders.
            </p>
          </div>
          <div className="grid gap-4">
            {leadershipPoints.map((point) => (
              <article
                key={point.title}
                className="rounded-xl border border-white/10 bg-slate-950/55 p-5"
              >
                <h3 className="text-xl font-semibold text-white">
                  {point.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {point.copy}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Product System"
          title="Four focused tools, one operational story"
          copy="Each tool solves a daily workflow problem, but the bigger value is the connected system: capture better context, reduce repeated work, and create evidence leaders can act on."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {tools.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <div className="rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-6 sm:p-8">
            <Eyebrow>What This Demonstrates</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">
              I build where operations, incentives, and software meet.
            </h2>
            <div className="mt-6 grid gap-3">
              {portfolioProof.map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-4 rounded-xl border border-white/10 bg-slate-950/55 p-4"
                >
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-cyan-300 text-sm font-black text-slate-950">
                    {index + 1}
                  </span>
                  <p className="text-sm font-semibold text-slate-100">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-slate-950/65 p-6 sm:p-8">
            <Eyebrow>Use Cases</Eyebrow>
            <div className="mt-5 flex flex-wrap gap-3">
              {useCases.map((useCase) => (
                <span
                  key={useCase}
                  className="rounded-lg border border-white/10 bg-white/[0.045] px-4 py-2 text-sm font-semibold text-slate-200"
                >
                  {useCase}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ToolsIndexPage() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="All tools"
        title="Choose a MirrorFlow tool page"
        copy="Each page focuses on one product with live-style interface details, screenshots where available, and a workflow breakdown."
      />
      <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {tools.map((tool) => (
          <ToolCard key={tool.slug} tool={tool} />
        ))}
      </div>
    </section>
  );
}

function ModeExplorer({ tool }: { tool: Tool }) {
  const [active, setActive] = useState(0);
  const mode = tool.modes[active];

  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
      <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">
        Interactive modes
      </p>
      <div className="mt-5 flex flex-wrap gap-2">
        {tool.modes.map((item, index) => (
          <button
            key={item.label}
            onClick={() => setActive(index)}
            className={`rounded-lg border px-4 py-2 text-sm font-bold transition ${
              active === index
                ? "border-cyan-300 bg-cyan-300 text-slate-950"
                : "border-white/10 bg-slate-950/70 text-slate-300 hover:border-cyan-300/60"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className="mt-5 rounded-xl border border-white/10 bg-slate-950/70 p-5">
        <h3 className="text-xl font-semibold text-white">{mode.label}</h3>
        <p className="mt-3 text-sm leading-7 text-slate-300">{mode.detail}</p>
      </div>
    </div>
  );
}

function ToolImpactPanel({ tool }: { tool: Tool }) {
  const impactNotes: Record<string, string[]> = {
    mirrorctt: [
      "Connects credit incentives to cleaner lead tracking.",
      "Creates QA-ready saved cards without asking reps to fill out a separate report.",
      "Keeps callback intent visible so follow-up work survives the next call.",
    ],
    mirrorcxt: [
      "Turns onboarding into a visible learning loop.",
      "Captures real lead examples that trainers can review instead of relying on memory.",
      "Makes rejection patterns easier to discuss and improve.",
    ],
    clickai: [
      "Reduces tab switching and repeated prompt setup.",
      "Lets AI support happen at the moment text is selected.",
      "Keeps prompt behavior configurable instead of hard-coded to one use case.",
    ],
    "email-template-builder": [
      "Standardizes client communication while preserving human review.",
      "Cuts repetitive subject/body drafting into a focused verification step.",
      "Keeps Outlook handoff close to the generated message.",
    ],
  };

  return (
    <section className="border-y border-white/10 bg-white/[0.035]">
      <div className="mx-auto grid max-w-7xl gap-6 px-5 py-14 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:px-8">
        <div>
          <Eyebrow>Leadership Read</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">
            What {tool.name} proves
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-300">
            {tool.whyItMatters}
          </p>
        </div>
        <div className="grid gap-3 md:grid-cols-3">
          {(impactNotes[tool.slug] ?? tool.bestFor).map((note) => (
            <div
              key={note}
              className="rounded-xl border border-white/10 bg-slate-950/60 p-5"
            >
              <p className="text-sm leading-7 text-slate-200">{note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ToolPage({ tool }: { tool: Tool }) {
  return (
    <>
      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-20">
        <div>
          <a
            href={localHref("/tools")}
            className="text-sm font-bold text-cyan-300 hover:text-cyan-200"
          >
            Back to tools
          </a>
          <div className="mt-6 flex items-center gap-4">
            <span className={`rounded-xl bg-gradient-to-br ${tool.color} p-px`}>
              <span className="grid h-14 w-14 place-items-center rounded-xl bg-slate-950 text-cyan-100">
                <ToolIcon icon={tool.icon} className="h-7 w-7" />
              </span>
            </span>
            <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-slate-300">
              {tool.badge}
            </span>
          </div>
          <h1 className="mt-6 text-5xl font-semibold tracking-tight text-white sm:text-6xl">
            {tool.name}
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            {tool.summary}
          </p>
          <div className="mt-7 flex flex-wrap gap-2">
            {tool.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-slate-950/60 px-3 py-1.5 text-xs font-semibold text-slate-300"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {tool.metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"
              >
                <p className="text-2xl font-black text-white">{metric.value}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.14em] text-slate-400">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </div>
        <ProductFrame tool={tool} />
      </section>

      <ToolImpactPanel tool={tool} />

      <section className="mx-auto grid max-w-7xl gap-6 px-5 pb-16 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">
        <ModeExplorer tool={tool} />
        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">
            Workflow
          </p>
          <div className="mt-5 grid gap-3">
            {tool.workflow.map((step, index) => (
              <div
                key={step}
                className="flex gap-4 rounded-xl border border-white/10 bg-slate-950/70 p-4"
              >
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-cyan-300 text-sm font-black text-slate-950">
                  {index + 1}
                </span>
                <p className="text-sm font-semibold text-slate-200">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 py-16 sm:px-6 lg:grid-cols-3 lg:px-8">
          <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-6 lg:col-span-1">
            <h2 className="text-2xl font-semibold text-white">
              Why it matters
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              {tool.whyItMatters}
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-6 lg:col-span-2">
            <h2 className="text-2xl font-semibold text-white">Best for</h2>
            <div className="mt-5 grid gap-3 md:grid-cols-3">
              {tool.bestFor.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-white/10 bg-white/[0.04] p-4 text-sm font-semibold text-slate-200"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Feature set"
          title={`${tool.name} keeps the important actions close`}
          copy="The page below turns the plain feature list into a scan-friendly operational map."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {tool.features.map((feature) => (
            <div
              key={feature}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-sm leading-7 text-slate-200"
            >
              {feature}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

function AboutPage() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <Eyebrow>Why MirrorFlow</Eyebrow>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-white sm:text-6xl">
            I build tools when a workflow is asking people to remember too much.
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            MirrorFlow Suite was built around real lead-handling, booking,
            coaching, callback, and communication friction. The point is not
            just speed. It is preserving the context teams need later while
            making the fastest action also the cleanest action.
          </p>
          <div className="mt-8 rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-5">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-200">
              Design principle
            </p>
            <p className="mt-3 text-base leading-8 text-slate-100">
              If a tool saves time for the rep and improves visibility for
              leadership at the same time, adoption stops being a training
              problem and becomes a natural part of the workflow.
            </p>
          </div>
        </div>
        <div className="grid gap-4">
          {leadershipPoints.map((benefit) => (
            <article
              key={benefit.title}
              className="rounded-xl border border-white/10 bg-white/[0.04] p-6"
            >
              <h2 className="text-xl font-semibold text-white">
                {benefit.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                {benefit.copy}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function App() {
  const route = useMemo(() => getInitialRoute(), []);
  const toolSlug = route.startsWith("/tools/") ? route.split("/")[2] : null;
  const tool = tools.find((item) => item.slug === toolSlug);

  let page: React.ReactNode;
  if (tool) {
    page = <ToolPage tool={tool} />;
  } else if (route.startsWith("/tools")) {
    page = <ToolsIndexPage />;
  } else if (route.startsWith("/about")) {
    page = <AboutPage />;
  } else {
    page = <HomePage />;
  }

  return <Shell>{page}</Shell>;
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
