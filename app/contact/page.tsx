import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { ContactForm } from "./ContactForm";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <Navbar />
      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8 lg:py-20">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
            Contact
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Request access to CompassQA Suite.
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Tell us which part of the suite fits your workflow, from QA review
            and lead reflection to credit tracking, templates, and AI support.
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
      <Footer />
    </main>
  );
}
