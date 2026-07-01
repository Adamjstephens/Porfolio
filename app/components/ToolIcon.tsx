import type { ToolIconName } from "../data/tools";

const paths: Record<ToolIconName, string[]> = {
  AudioLines: [
    "M4 10v4",
    "M8 7v10",
    "M12 5v14",
    "M16 8v8",
    "M20 11v2",
  ],
  ClipboardCheck: [
    "M9 5h6",
    "M9 3h6v4H9z",
    "M7 5H5v16h14V5h-2",
    "m8 13 2.5 2.5L16 10",
  ],
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

export function ToolIcon({
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
      {paths[icon].map((path) => (
        <path key={path} d={path} />
      ))}
    </svg>
  );
}
