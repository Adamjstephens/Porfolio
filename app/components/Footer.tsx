import Link from "next/link";
import { tools } from "../data/tools";

export function Footer() {
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
              <Link
                key={tool.slug}
                href={`/tools#${tool.slug}`}
                className="text-sm text-slate-600 hover:text-blue-700"
              >
                {tool.name}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
            Site
          </p>
          <div className="mt-4 grid gap-2">
            {["Home", "Tools", "About", "Contact"].map((item) => (
              <Link
                key={item}
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="text-sm text-slate-600 hover:text-blue-700"
              >
                {item}
              </Link>
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
