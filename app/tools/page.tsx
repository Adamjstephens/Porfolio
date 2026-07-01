import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { SectionHeader } from "../components/SectionHeader";
import { ToolIcon } from "../components/ToolIcon";
import { tools } from "../data/tools";

export default function ToolsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <Navbar />
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
              reflection, credit tracking, callbacks, AI assistance, and
              email templates without making teams manage everything by hand.
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
      <Footer />
    </main>
  );
}
