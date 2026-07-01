import Link from "next/link";
import type { Tool } from "../data/tools";
import { ToolIcon } from "./ToolIcon";

export function ToolCard({ tool }: { tool: Tool }) {
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
      <Link
        href={`/tools#${tool.slug}`}
        className="mt-6 inline-flex text-sm font-semibold text-blue-700 transition group-hover:text-blue-500"
      >
        Learn More
      </Link>
    </article>
  );
}
