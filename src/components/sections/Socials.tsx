export default function Socials() {
  return (
    <section className="bg-black px-6 py-20 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#c98a3d]">
            Connect With Us
          </p>

          <h2 className="text-4xl font-black uppercase tracking-tight md:text-6xl">
            Join the Movement
          </h2>

          <p className="mt-5 max-w-2xl text-gray-400">
            Follow MADEFORMORE for new drops, launch updates, exclusive
            offers, and behind-the-scenes content.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {/* Instagram */}
          <a
            href="https://instagram.com/madeformore_m.4.m"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-all duration-300 hover:border-[#c98a3d]/50 hover:bg-white/[0.08]"
          >
            <div>
              <p className="text-sm uppercase tracking-widest text-gray-500">
                Instagram
              </p>

              <p className="mt-2 font-semibold">
                @madeformore_m.4.m
              </p>
            </div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-7 w-7 transition-transform duration-300 group-hover:scale-110 group-hover:text-[#c98a3d]"
            >
              <rect
                x="3"
                y="3"
                width="18"
                height="18"
                rx="5"
              />
              <circle cx="12" cy="12" r="4" />
              <circle
                cx="17.5"
                cy="6.5"
                r="1"
                fill="currentColor"
                stroke="none"
              />
            </svg>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/233208968839"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-all duration-300 hover:border-[#c98a3d]/50 hover:bg-white/[0.08]"
          >
            <div>
              <p className="text-sm uppercase tracking-widest text-gray-500">
                WhatsApp
              </p>

              <p className="mt-2 font-semibold">
                +233 20 896 8839
              </p>
            </div>

            <span className="text-2xl transition-transform duration-300 group-hover:scale-110">
              💬
            </span>
          </a>

          {/* TikTok */}
          <a
            href="#"
            className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-all duration-300 hover:border-[#c98a3d]/50 hover:bg-white/[0.08]"
          >
            <div>
              <p className="text-sm uppercase tracking-widest text-gray-500">
                TikTok
              </p>

              <p className="mt-2 font-semibold">
                @madeformore_m.4.m
              </p>
            </div>

            <span className="text-2xl transition-transform duration-300 group-hover:scale-110">
              ♪
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}