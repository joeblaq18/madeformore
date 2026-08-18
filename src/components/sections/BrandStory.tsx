import { ArrowUpRight } from "lucide-react";

export default function BrandStory() {
  return (
    <section id="story" className="bg-[#eee6d7] py-24 text-[#11100e] sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-[#9a641f]">
              The Story
            </p>

            <h2 className="max-w-xl text-5xl font-black uppercase leading-[0.95] tracking-[-0.04em] sm:text-6xl">
              More than
              <br />
              <span className="text-[#9a641f]">a brand.</span>
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-8 text-black/60">
              MADEFORMORE was created around one simple belief: you are
              capable of becoming more than who you were yesterday.
            </p>

            <p className="mt-5 max-w-xl text-lg leading-8 text-black/60">
              Every piece represents ambition, discipline, confidence and
              the decision to keep moving forward.
            </p>

            <a
              href="#philosophy"
              className="mt-8 inline-flex items-center gap-3 text-sm font-black uppercase tracking-[0.15em] text-[#9a641f]"
            >
              Discover the mindset
              <ArrowUpRight size={18} />
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="overflow-hidden rounded-3xl">
              <img
                src="/images/brand/story-1.png"
                alt="MADEFORMORE lifestyle"
                className="aspect-[3/4] h-full w-full object-cover"
              />
            </div>

            <div className="mt-12 overflow-hidden rounded-3xl">
              <img
                src="/images/brand/story-1.png"
                alt="MADEFORMORE lifestyle"
                className="aspect-[3/4] h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}