import { Button } from "./components/Button";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { SectionHeader } from "./components/SectionHeader";
import { ToolCard } from "./components/ToolCard";
import { benefits, tools, useCases } from "./data/tools";

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

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <Navbar />
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
      <Footer />
    </main>
  );
}
