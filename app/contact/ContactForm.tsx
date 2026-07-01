"use client";

import { useState } from "react";
import { tools } from "../data/tools";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-6 text-emerald-950">
        <h2 className="text-xl font-semibold">
          Thanks — your request has been prepared.
        </h2>
        <p className="mt-3 text-sm leading-7 text-emerald-800">
          Your details are ready for review, and the right tool conversation
          can start from here.
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
