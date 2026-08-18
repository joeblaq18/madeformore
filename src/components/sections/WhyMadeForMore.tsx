const benefits = [
  {
    number: "01",
    title: "Premium Quality",
    description:
      "Designed with attention to fit, feel and everyday durability.",
  },
  {
    number: "02",
    title: "Bold Identity",
    description:
      "Pieces created to represent confidence, ambition and individuality.",
  },
  {
    number: "03",
    title: "Limited Drops",
    description:
      "Small-batch releases designed to keep every collection meaningful.",
  },
  {
    number: "04",
    title: "Built With Purpose",
    description:
      "A brand built around personal growth, discipline and becoming more.",
  },
];

export default function WhyMadeForMore() {
  return (
    <section className="bg-[#11100e] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-[#c98a32]">
              Why MADEFORMORE
            </p>

            <h2 className="text-5xl font-black uppercase leading-[0.95] tracking-[-0.04em] text-white sm:text-6xl">
              Built
              <br />
              <span className="gold-gradient">Different.</span>
            </h2>

            <p className="mt-7 max-w-md text-base leading-8 text-white/45">
              We are not interested in simply putting a logo on clothing.
              We want every piece to carry a message.
            </p>
          </div>

          <div className="grid border-t border-white/10 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <div
                key={benefit.number}
                className="border-b border-white/10 p-7 sm:p-9"
              >
                <span className="text-xs font-bold text-[#c98a32]">
                  {benefit.number}
                </span>

                <h3 className="mt-8 text-xl font-black uppercase tracking-tight text-white">
                  {benefit.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/40">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}