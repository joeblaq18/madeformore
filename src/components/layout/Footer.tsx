import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#080706] px-5 py-12 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-8 border-b border-white/10 pb-10 md:flex-row md:items-end">
          <div>
            <div className="text-xl font-black tracking-[0.15em] text-white">
              MADEFORMORE
            </div>

            <p className="mt-2 max-w-sm text-xs leading-6 text-white/35">
              More of who you&apos;re meant to become.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-3">
            <Link
              href="#home"
              className="text-xs uppercase tracking-[0.15em] text-white/40 transition hover:text-[#c98a32]"
            >
              Home
            </Link>

            <Link
              href="#story"
              className="text-xs uppercase tracking-[0.15em] text-white/40 transition hover:text-[#c98a32]"
            >
              Story
            </Link>

            <Link
              href="#collection"
              className="text-xs uppercase tracking-[0.15em] text-white/40 transition hover:text-[#c98a32]"
            >
              Collection
            </Link>

            <Link
              href="#contact"
              className="text-xs uppercase tracking-[0.15em] text-white/40 transition hover:text-[#c98a32]"
            >
              Contact
            </Link>
          </nav>
        </div>

        <div className="flex flex-col justify-between gap-3 pt-7 text-[10px] uppercase tracking-[0.15em] text-white/25 sm:flex-row">
          <p>© 2026 MADEFORMORE. All rights reserved.</p>

          <p>Wear It. Believe It. Live It.</p>
        </div>
      </div>
    </footer>
  );
}