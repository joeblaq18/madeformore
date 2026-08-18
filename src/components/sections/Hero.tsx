"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import Button from "../ui/Button";

export default function Hero() {
  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <section
      id="home"
      className="hero-grid relative flex min-h-screen items-center overflow-hidden bg-[#080706] pt-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_40%,rgba(201,138,50,0.16),transparent_30%)]" />

      <div className="absolute right-[-10%] top-[15%] hidden h-[600px] w-[600px] rounded-full border border-[#c98a32]/10 lg:block" />
      <div className="absolute right-[-5%] top-[20%] hidden h-[500px] w-[500px] rounded-full border border-[#c98a32]/10 lg:block" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-[#c98a32]/50 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-[#c98a32]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#c98a32] sm:text-xs">
              Official Launch — 30.08.2026
            </span>
          </div>

          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-white/45">
            Wear the mindset. Live the vision.
          </p>

          <motion.h1 
            className="max-w-4xl text-6xl font-black uppercase leading-[0.88] tracking-[-0.05em] text-white sm:text-7xl lg:text-[7rem]"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.span
              custom={0}
              variants={titleVariants}
              className="inline-block"
            >
              Made
            </motion.span>
            <br />
            <motion.span 
              custom={1}
              variants={titleVariants}
              className="gold-gradient inline-block"
            >
              For More.
            </motion.span>
          </motion.h1>

          <p className="mt-8 max-w-xl text-base leading-8 text-white/55 sm:text-lg">
            More than clothing. MADEFORMORE is a movement built for
            dreamers, achievers, and everyone committed to becoming more.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Button href="#collection">
              Explore the Collection
            </Button>

            <Button href="#story" variant="outline">
              Our Story
            </Button>
          </div>

          <div className="mt-12 flex items-center gap-4 text-white/35">
            <ArrowDown size={18} />
            <span className="text-[10px] uppercase tracking-[0.25em]">
              Scroll to discover
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.15 }}
          className="relative"
        >
          <div className="relative mx-auto aspect-[4/5] max-w-md overflow-hidden rounded-[2rem] border border-white/10 bg-[#15110d]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(201,138,50,0.35),transparent_42%)]" />

            <img
              src="/images/products/madeformore-black-front.jpg"
              alt="MADEFORMORE"
              className="h-full w-full object-cover opacity-90"
            />

            <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/15 bg-black/55 p-5 backdrop-blur-md">
              <p className="text-[10px] uppercase tracking-[0.25em] text-[#c98a32]">
                The journey begins
              </p>

              <div className="mt-2 flex items-end justify-between">
                <h2 className="text-2xl font-black uppercase text-white">
                  Are You
                  <br />
                  Made For More?
                </h2>

                <ArrowUpRight className="text-[#c98a32]" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}