"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, RotateCcw } from "lucide-react";

type Product = {
  name: string;
  color: string;
  image: string;
  backImage: string;
  description: string;
};

const products: Product[] = [
  {
    name: "MadeForMore Black Tee",
    color: "Black",
    image: "/images/products/madeformore-black-front.jpg",
    backImage: "/images/products/madeformore-black-back.jpg",
    description: "Bold. Timeless. Built for the mindset.",
  },
  {
    name: "MadeForMore Cream Tee",
    color: "Cream",
    image: "/images/products/madeformore-cream-front.jpg",
    backImage: "/images/products/madeformore-cream-back.jpg",
    description: "Clean design with a statement from every angle.",
  },
  {
    name: "MadeForMore Pink Tee",
    color: "Pink",
    image: "/images/products/madeformore-pink-front.jpg",
    backImage: "/images/products/madeformore-pink-back.jpg",
    description: "Express yourself. Wear the vision.",
  },
];

function ProductCard({ product }: { product: Product }) {
  const [showBack, setShowBack] = useState(false);

  return (
    <article className="group">
      {/* Product Image */}
      <div
        className="relative aspect-[4/5] overflow-hidden bg-[#151515] cursor-pointer"
        onClick={() => setShowBack((prev) => !prev)}
      >
        <Image
          src={showBack ? product.backImage : product.image}
          alt={`${product.name} ${showBack ? "back" : "front"}`}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />

        {/* Dark gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />

        {/* View Front / Back */}
        <div className="absolute left-4 top-4">
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              setShowBack((prev) => !prev);
            }}
            className="flex items-center gap-2 rounded-full border border-white/30 bg-black/50 px-4 py-2 text-xs font-medium uppercase tracking-[0.15em] text-white backdrop-blur-md transition hover:bg-black/80"
          >
            <RotateCcw size={14} />
            {showBack ? "Front" : "Back"}
          </button>
        </div>

        {/* Product number */}
        <div className="absolute bottom-4 left-4 text-xs uppercase tracking-[0.25em] text-white/70">
          0{products.indexOf(product) + 1}
        </div>

        {/* Arrow */}
        <div className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-white text-black transition-transform duration-300 group-hover:rotate-45">
          <ArrowUpRight size={19} />
        </div>
      </div>

      {/* Product information */}
      <div className="mt-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold tracking-tight text-white">
              {product.name}
            </h3>

            <p className="mt-1 text-sm text-white/50">
              {product.description}
            </p>
          </div>

          <span className="mt-1 whitespace-nowrap text-xs uppercase tracking-[0.2em] text-[#c98a3a]">
            {product.color}
          </span>
        </div>

        {/* Color indicator */}
        <div className="mt-4 flex items-center gap-2">
          <span
            className={`h-3 w-3 rounded-full border border-white/30 ${
              product.color === "Black"
                ? "bg-black"
                : product.color === "Cream"
                  ? "bg-[#eee4d2]"
                  : "bg-[#e8a7b8]"
            }`}
          />

          <span className="text-xs uppercase tracking-[0.18em] text-white/40">
            Tap image to view back
          </span>
        </div>
      </div>
    </article>
  );
}

export default function Collection() {
  return (
    <section
      id="collection"
      className="bg-[#0b0b0b] px-6 py-24 text-white md:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-14 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#c98a3a]">
              The First Drop
            </p>

            <h2 className="text-4xl font-bold uppercase leading-[0.95] tracking-tight sm:text-5xl md:text-6xl">
              Wear the
              <span className="block text-[#c98a3a]">Mindset.</span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-white/55 md:text-lg">
              Designed for people who believe they are capable of more.
              Premium essentials built around ambition, discipline and
              becoming the person you were meant to be.
            </p>
          </div>

          <div className="max-w-xs">
            <p className="text-sm leading-6 text-white/40">
              Every piece carries a story. Explore the front and back of each
              design before you choose yours.
            </p>
          </div>
        </div>

        {/* Products */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em]">
              Limited launch collection
            </p>

            <p className="mt-2 text-sm text-white/40">
              Limited stocks available. Pre-order before the launch.
            </p>
          </div>

          <a
            href="#preorder"
            className="inline-flex items-center gap-3 bg-[#c98a3a] px-7 py-4 text-sm font-bold uppercase tracking-[0.15em] text-black transition hover:bg-[#e1a04b]"
          >
            Pre-Order Now
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}