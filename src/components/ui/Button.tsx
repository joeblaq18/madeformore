"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "outline";
  className?: string;
};

export default function Button({
  children,
  href = "#",
  variant = "primary",
  className = "",
}: ButtonProps) {
  const styles =
    variant === "primary"
      ? "bg-[#c98a32] text-black hover:bg-[#e0a84d]"
      : "border border-[#c98a32]/60 text-[#eee6d7] hover:border-[#c98a32] hover:bg-[#c98a32]/10";

  return (
    <Link
      href={href}
      className={`group inline-flex items-center justify-center gap-3 rounded-full px-6 py-3.5 text-sm font-bold uppercase tracking-[0.12em] transition-all duration-300 ${styles} ${className}`}
    >
      {children}

      <ArrowUpRight
        size={17}
        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </Link>
  );
}