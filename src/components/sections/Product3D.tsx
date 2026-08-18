"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Product3D() {
  const [rotateY, setRotateY] = useState(0);
  const [rotateX, setRotateX] = useState(0);

  const products = [
    {
      name: "Black",
      front: "/images/products/madeformore-black-front.jpg",
      back: "/images/products/madeformore-black-back.jpg",
    },
    {
      name: "Cream",
      front: "/images/products/madeformore-cream-front.jpg",
      back: "/images/products/madeformore-cream-back.jpg",
    },
    {
      name: "Pink",
      front: "/images/products/madeformore-pink-front.jpg",
      back: "/images/products/madeformore-pink-back.jpg",
    },
  ];

  const [currentProduct, setCurrentProduct] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const x = (e.clientY - rect.top - centerY) / 10;
    const y = (e.clientX - rect.left - centerX) / 10;
    setRotateX(x);
    setRotateY(y);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <section className="bg-[#080706] py-24 text-white sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-16 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-[#c98a32]">
            Interactive Showcase
          </p>
          <h2 className="text-4xl font-black uppercase tracking-[-0.03em] sm:text-5xl">
            Explore in <span className="text-[#c98a32]">3D</span>
          </h2>
          <p className="mt-5 text-white/50">Move your mouse to rotate • Click to flip</p>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          {/* 3D Product Display */}
          <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              perspective: "1000px",
            }}
            className="relative h-[500px] cursor-grab rounded-3xl border border-white/10 bg-gradient-to-br from-[#1a1714] to-[#0d0b08] p-8 active:cursor-grabbing"
          >
            <motion.div
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }}
              animate={{
                rotateY: isFlipped ? 180 : 0,
              }}
              transition={{ duration: 0.6 }}
              className="relative h-full w-full"
            >
              {/* Front */}
              <div
                style={{
                  backfaceVisibility: "hidden",
                }}
                className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-2xl"
              >
                <img
                  src={products[currentProduct].front}
                  alt={`${products[currentProduct].name} Front`}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Back */}
              <div
                style={{
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                }}
                className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-2xl"
              >
                <img
                  src={products[currentProduct].back}
                  alt={`${products[currentProduct].name} Back`}
                  className="h-full w-full object-cover"
                />
              </div>
            </motion.div>

            {/* Flip Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsFlipped(!isFlipped)}
              className="absolute right-4 top-4 rounded-full bg-[#c98a32]/20 p-3 backdrop-blur-sm hover:bg-[#c98a32]/40"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16V4m0 0L3 8m0 0l4 4m10-4v12m0 0l4-4m0 0l-4-4"
                />
              </svg>
            </motion.button>
          </motion.div>

          {/* Color Selection */}
          <div className="space-y-8">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#c98a32]">
                Choose Color
              </p>
              <div className="flex gap-4">
                {products.map((product, idx) => (
                  <motion.button
                    key={product.name}
                    onClick={() => {
                      setCurrentProduct(idx);
                      setIsFlipped(false);
                    }}
                    className={`relative overflow-hidden rounded-xl px-6 py-3 font-bold uppercase tracking-[0.1em] transition-all ${
                      currentProduct === idx
                        ? "border-2 border-[#c98a32] bg-[#c98a32] text-black"
                        : "border border-white/20 text-white/60 hover:text-white"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {product.name}
                  </motion.button>
                ))}
              </div>
            </div>

            <div className="space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-black uppercase">
                {products[currentProduct].name} Collection
              </h3>
              <p className="text-sm leading-7 text-white/60">
                Experience our {products[currentProduct].name.toLowerCase()} MADEFORMORE
                apparel. Move your mouse over the product to explore every angle.
                Click the flip button to see the back design.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-4 w-full rounded-lg border border-[#c98a32] bg-[#c98a32] px-6 py-3 font-bold text-black transition-all hover:bg-transparent hover:text-[#c98a32]"
              >
                View in Collection
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
