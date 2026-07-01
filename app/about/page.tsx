import { Button } from "../components/Button";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

const principles = [
  "Built from real daily workflow needs",
  "Designed to reduce repetitive work",
  "Focused on coaching, QA, and operational clarity",
  "Helpful for new team members and experienced reps",
  "Supports reflection, performance visibility, and better communication",
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <Navbar />
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
      <Footer />
    </main>
  );
}
