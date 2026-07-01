import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
};

export function Button({ href, children, variant = "primary" }: ButtonProps) {
  const classes =
    variant === "primary"
      ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20 hover:bg-blue-500"
      : "border border-slate-300 bg-white text-slate-900 hover:border-blue-300 hover:text-blue-700";

  return (
    <Link
      href={href}
      className={`inline-flex min-h-11 items-center justify-center rounded-lg px-5 text-sm font-semibold transition ${classes}`}
    >
      {children}
    </Link>
  );
}
