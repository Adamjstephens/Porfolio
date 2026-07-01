import { StrictMode, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import { benefits, tools, useCases } from "./data/tools";
import type { Tool, ToolIconName } from "./data/tools";

const basePath = "/Porfolio";

function normalizePath(pathname: string) {
  const withoutBase = pathname.startsWith(basePath)
    ? pathname.slice(basePath.length)
    : pathname;
  return withoutBase === "" ? "/" : withoutBase;
}

function localHref(path: string) {
  return `${basePath}${path === "/" ? "" : path}`;
}

function Button({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}) {
  const classes =
    variant === "primary"
      ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20 hover:bg-blue-500"
      : "border border-slate-300 bg-white text-slate-900 hover:border-blue-300 hover:text-blue-700";

  return (
    <a
      href={localHref(href)}
      className={`inline-flex min-h-11 items-center justify-center rounded-lg px-5 text-sm font-semibold transition ${classes}`}
    >
      {children}
    </a>
  );
}

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/tools", label: "Tools" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
        <a href={localHref("/")} className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-950 text-sm font-bold text-white">
            CQ
          </span>
          <span className="text-base font-semibold text-slate-950">
            CompassQA Suite
          </span>
        </a>
        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={localHref(link.href)}
              className="text-sm font-medium text-slate-600 transition hover:text-blue-700"
            >
              {link.label}
            </a>
          ))}
        </div>
        <a
          href={localHref("/contact")}
          className="inline-flex min-h-10 items-center justify-center rounded-lg bg-blue-600 px-4 text-sm font-semibold text-white transition hover:bg-blue-500"
        >
          Request Access
        </a>
      </nav>
      <div className="border-t border-slate-200 px-5 py-3 md:hidden">
        <div className="mx-auto flex max-w-7xl justify-between gap-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={localHref(link.href)}
              className="text-sm font-medium text-slate-600 transition hover:text-blue-700"
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
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-6 md:grid-cols-[1.2fr_1fr_1fr] lg:px-8">
        <div>
          <p className="text-lg font-semibold text-slate-950">
            CompassQA Suite
          </p>
          <p className="mt-3 max-w-md text-sm leading-7 text-slate-600">
            A connected productivity, QA, lead-handling, credit-tracking, and
            workflow ecosystem for booking teams.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
            Tools
          </p>
          <div className="mt-4 grid gap-2">
            {tools.map((tool) => (
              <a
                key={tool.slug}
                href={localHref(`/tools#${tool.slug}`)}
                className="text-sm text-slate-600 hover:text-blue-700"
              >
                {tool.name}
              </a>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
            Site
          </p>
          <div className="mt-4 grid gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={localHref(link.href)}
                className="text-sm text-slate-600 hover:text-blue-700"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-slate-200 px-5 py-5 text-center text-xs text-slate-500">
        Copyright 2026 CompassQA Suite. All rights reserved.
      </div>
    </footer>
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
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-8 text-slate-600">{copy}</p>
    </div>
  );
}

const iconPaths: Record<ToolIconName, string[]> = {
  AudioLines: ["M4 10v4", "M8 7v10", "M12 5v14", "M16 8v8", "M20 11v2"],
  ClipboardCheck: [
    "M9 5h6",
    "M9 3h6v4H9z",
    "M7 5H5v16h14V5h-2",
    "m8 13 2.5 2.5L16 10",
  ],
  PanelsTopLeft: ["M4 5h16v14H4z", "M4 9h16", "M9 9v10", "M12 13h5", "M12 16h4"],
  Gauge: ["M4 14a8 8 0 0 1 16 0", "M12 14l4-4", "M7 18h10", "M6 14h2", "M16 14h2"],
  Sparkles: [
    "M12 3l1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6z",
    "M5 16l.7 1.8L8 18.5l-2.3.7L5 21l-.7-1.8L2 18.5l2.3-.7z",
    "M19 15l.6 1.4L21 17l-1.4.6L19 19l-.6-1.4L17 17l1.4-.6z",
  ],
  MailPlus: ["M4 6h16v12H4z", "m4 7 8 6 8-6", "M16 18v4", "M14 20h4"],
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

function ToolCard({ tool }: { tool: Tool }) {
  return (
    <article className="group flex h-full flex-col rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-200/80">
      <div className="flex items-center justify-between gap-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
          <ToolIcon icon={tool.icon} />
        </div>
        <span className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
          {tool.badge}
        </span>
      </div>
      <h3 className="mt-5 text-xl font-semibold text-slate-950">{tool.name}</h3>
      <p className="mt-3 min-h-20 text-sm leading-7 text-slate-600">
        {tool.shortDescription}
      </p>
      <ul className="mt-5 space-y-3 text-sm text-slate-700">
        {tool.features.slice(0, 3).map((feature) => (
          <li key={feature} className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <a
        href={localHref(`/tools#${tool.slug}`)}
        className="mt-6 inline-flex text-sm font-semibold text-blue-700 transition group-hover:text-blue-500"
      >
        Learn More
      </a>
    </article>
  );
}

function DashboardPreview() {
  return (
    <div className="relative rounded-lg border border-white/20 bg-slate-950 p-4 shadow-2xl shadow-blue-950/30">
      <div className="absolute inset-0 rounded-lg bg-[radial-gradient(circle_at_top_right,#2563eb55,transparent_35%),linear-gradient(135deg,#0f172a,#111827)]" />
      <div className="relative rounded-lg border border-white/10 bg-white/5 p-4">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-blue-200">
              Suite Dashboard
            </p>
            <p className="mt-1 text-lg font-semibold text-white">
              Today&apos;s workflow
            </p>
          </div>
          <div className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-semibold text-emerald-200">
            8.25 credits
          </div>
        </div>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {[
            ["Saved lead cards", "14 leads categorized"],
            ["Transcript review", "3 calls ready for QA"],
            ["Callback queue", "4 overdue callbacks"],
            ["Template generation", "2 emails prepared"],
          ].map(([title, value]) => (
            <div
              key={title}
              className="rounded-lg border border-white/10 bg-white/10 p-4"
            >
              <p className="text-sm font-semibold text-white">{title}</p>
              <p className="mt-2 text-xs text-slate-300">{value}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-lg border border-blue-300/20 bg-blue-400/10 p-4">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-sm font-semibold text-white">
                Available-time reminder
              </p>
              <p className="mt-1 text-xs text-blue-100">
                Upcoming EST block visible in 30 minutes
              </p>
            </div>
            <span className="rounded-full bg-blue-500 px-3 py-1 text-xs font-bold text-white">
              Active
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function HomePage() {
  return (
    <>
      <section className="overflow-hidden border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8 lg:py-24">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
              CompassQA Tools
            </p>
            <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
              A smarter workspace for QA, transcription, lead handling, and
              workflow growth.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              CompassQA Suite brings together tools for reviewing calls,
              managing lead interactions, tracking credits, organizing
              callbacks, and helping team members reflect on their growth with
              less manual work.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/tools">View Tools</Button>
              <Button href="/contact" variant="secondary">
                Request Access
              </Button>
            </div>
          </div>
          <DashboardPreview />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Tool suite"
          title="Connected tools for daily workflow clarity"
          copy="Each product supports a specific part of QA, communication, lead reflection, credit tracking, or workflow speed."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {tools.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Workflow roles"
            title="Each tool handles a real operational moment"
            copy="From the first transcript to the final client-ready email, the suite keeps useful context close to the work."
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {tools.map((tool) => (
              <article
                key={tool.slug}
                className="rounded-lg border border-slate-200 bg-slate-50 p-6"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                    {tool.badge}
                  </span>
                  {tool.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="mt-5 text-xl font-semibold text-slate-950">
                  {tool.name}
                </h3>
                <p className="mt-3 text-sm font-semibold text-slate-700">
                  {tool.purpose}
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {tool.summary}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Benefits"
            title="Built around real booking-team work"
            copy="The suite keeps repetitive actions small while preserving the context teams need for coaching, review, and follow-up."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <article
                key={benefit.title}
                className="rounded-lg border border-slate-200 bg-slate-50 p-6"
              >
                <h3 className="text-lg font-semibold text-slate-950">
                  {benefit.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {benefit.copy}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Use cases"
          title="Designed for QA, lead handling, and team growth"
          copy="CompassQA Suite fits the recurring moments where teams need speed, context, and consistency."
        />
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {useCases.map((useCase) => (
            <span
              key={useCase}
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm"
            >
              {useCase}
            </span>
          ))}
        </div>
      </section>

      <section className="bg-slate-950 px-5 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Bring your workflow into one organized tool suite.
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-300">
            Explore the CompassQA Suite and see how each tool supports faster,
            cleaner, more consistent work across QA, lead handling, credit
            tracking, and team development.
          </p>
          <div className="mt-8">
            <Button href="/contact">Request Access</Button>
          </div>
        </div>
      </section>
    </>
  );
}

function ToolsPage() {
  return (
    <>
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
              Tools
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Six focused tools, one connected workflow.
            </h1>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              CompassQA Suite connects transcription, QA review, lead
              reflection, credit tracking, callbacks, AI assistance, and email
              templates without making teams manage everything by hand.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Detailed view"
          title="What each tool does"
          copy="Every tool has a clear role, from call review to lead reflection and daily performance visibility."
        />
        <div className="mt-12 space-y-8">
          {tools.map((tool) => (
            <article
              id={tool.slug}
              key={tool.slug}
              className="scroll-mt-32 rounded-lg border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
            >
              <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
                <div>
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
                      <ToolIcon icon={tool.icon} className="h-6 w-6" />
                    </span>
                    <span className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                      {tool.badge}
                    </span>
                  </div>
                  <h2 className="mt-5 text-3xl font-semibold tracking-tight">
                    {tool.name}
                  </h2>
                  <p className="mt-4 text-base leading-8 text-slate-600">
                    {tool.summary}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {tool.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="rounded-lg border border-slate-200 bg-slate-50 p-5">
                    <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
                      Key features
                    </h3>
                    <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-700">
                      {tool.features.map((feature) => (
                        <li key={feature} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="grid gap-6">
                    <div className="rounded-lg border border-slate-200 bg-slate-50 p-5">
                      <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
                        Best for
                      </h3>
                      <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-700">
                        {tool.bestFor.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-lg border border-blue-100 bg-blue-50 p-5">
                      <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">
                        Why it matters
                      </h3>
                      <p className="mt-4 text-sm leading-7 text-slate-700">
                        {tool.whyItMatters}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

const principles = [
  "Built from real daily workflow needs",
  "Designed to reduce repetitive work",
  "Focused on coaching, QA, and operational clarity",
  "Helpful for new team members and experienced reps",
  "Supports reflection, performance visibility, and better communication",
];

function AboutPage() {
  return (
    <>
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:py-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
              About
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Built around the work teams actually repeat every day.
            </h1>
          </div>
          <div className="text-lg leading-9 text-slate-600">
            CompassQA Suite was created from real workflow problems:
            remembering important calls, saving the right lead context,
            reviewing customer interactions, tracking progress, building better
            communication, and helping team members feel more in control of
            their day. Instead of forcing users to manage everything manually,
            the suite focuses on quick actions, clear context, and tools that
            support reflection and professional growth.
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {principles.map((principle) => (
            <article
              key={principle}
              className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-sm font-bold text-blue-700">
                CQ
              </div>
              <h2 className="mt-5 text-lg font-semibold text-slate-950">
                {principle}
              </h2>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-950 px-5 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Tools that make context easier to keep.
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-300">
            The suite gives teams faster ways to preserve call context, reflect
            on lead outcomes, prepare communication, track credits, and review
            quality without adding more busywork to the day.
          </p>
          <div className="mt-8">
            <Button href="/tools">View Tools</Button>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-6 text-emerald-950">
        <h2 className="text-xl font-semibold">
          Thanks — your request has been prepared.
        </h2>
        <p className="mt-3 text-sm leading-7 text-emerald-800">
          Your details are ready for review, and the right tool conversation can
          start from here.
        </p>
      </div>
    );
  }

  return (
    <form
      className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Name
          <input
            required
            name="name"
            className="min-h-11 rounded-lg border border-slate-300 px-3 text-slate-950 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Email
          <input
            required
            type="email"
            name="email"
            className="min-h-11 rounded-lg border border-slate-300 px-3 text-slate-950 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Company
          <input
            name="company"
            className="min-h-11 rounded-lg border border-slate-300 px-3 text-slate-950 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Tool interested in
          <select
            name="tool"
            className="min-h-11 rounded-lg border border-slate-300 bg-white px-3 text-slate-950 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
          >
            <option>CompassQA Suite</option>
            {tools.map((tool) => (
              <option key={tool.slug}>{tool.name}</option>
            ))}
          </select>
        </label>
      </div>
      <label className="mt-5 grid gap-2 text-sm font-medium text-slate-700">
        Message
        <textarea
          name="message"
          rows={6}
          className="rounded-lg border border-slate-300 px-3 py-3 text-slate-950 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
        />
      </label>
      <button
        type="submit"
        className="mt-6 inline-flex min-h-11 items-center justify-center rounded-lg bg-blue-600 px-5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-500"
      >
        Request Access
      </button>
    </form>
  );
}

function ContactPage() {
  return (
    <section className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8 lg:py-20">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
          Contact
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
          Request access to CompassQA Suite.
        </h1>
        <p className="mt-5 text-lg leading-8 text-slate-600">
          Tell us which part of the suite fits your workflow, from QA review and
          lead reflection to credit tracking, templates, and AI support.
        </p>
        <div className="mt-8 rounded-lg border border-blue-100 bg-blue-50 p-5">
          <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">
            Common requests
          </h2>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-700">
            <li>Evaluate tools for QA and call review.</li>
            <li>Discuss lead reflection for new onboardees.</li>
            <li>Explore credit tracking, callbacks, and reminders.</li>
            <li>Prepare templates for client communication.</li>
          </ul>
        </div>
      </div>
      <ContactForm />
    </section>
  );
}

function App() {
  const route = useMemo(() => normalizePath(window.location.pathname), []);
  const Page =
    route.startsWith("/tools")
      ? ToolsPage
      : route.startsWith("/about")
        ? AboutPage
        : route.startsWith("/contact")
          ? ContactPage
          : HomePage;

  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <Navbar />
      <Page />
      <Footer />
    </main>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
