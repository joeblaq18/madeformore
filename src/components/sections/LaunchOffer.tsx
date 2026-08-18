export default function LaunchOffer() {
  return (
    <section className="relative overflow-hidden bg-[#c98a32] py-20 text-black sm:py-28">
      <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full border border-black/10" />
      <div className="absolute -bottom-32 -left-20 h-96 w-96 rounded-full border border-black/10" />

      <div className="relative mx-auto max-w-7xl px-5 text-center sm:px-8">
        <p className="text-xs font-black uppercase tracking-[0.35em]">
          Official Launch Offer
        </p>

        <h2 className="mt-5 text-7xl font-black uppercase leading-none tracking-[-0.06em] sm:text-9xl">
          10%
        </h2>

        <h3 className="mt-2 text-3xl font-black uppercase tracking-tight sm:text-5xl">
          Off Everything
        </h3>

        <p className="mx-auto mt-6 max-w-xl text-sm font-medium leading-7 text-black/65 sm:text-base">
          Pre-order from now until 10 September 2026 and receive 10% off
          all MADEFORMORE launch pieces.
        </p>

        <div className="mt-8 inline-flex rounded-full border border-black/30 px-5 py-3 text-xs font-black uppercase tracking-[0.2em]">
          Offer ends — 10.09.2026
        </div>
      </div>
    </section>
  );
}