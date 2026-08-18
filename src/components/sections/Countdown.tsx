"use client";

import { useEffect, useState } from "react";

const launchDate = new Date("2026-08-30T00:00:00").getTime();

export default function Countdown() {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const update = () => {
      const difference = launchDate - Date.now();

      if (difference <= 0) {
        setTime({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        return;
      }

      setTime({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (difference / (1000 * 60 * 60)) % 24
        ),
        minutes: Math.floor(
          (difference / (1000 * 60)) % 60
        ),
        seconds: Math.floor(
          (difference / 1000) % 60
        ),
      });
    };

    update();

    const interval = setInterval(update, 1000);

    return () => clearInterval(interval);
  }, []);

  const values = [
    ["Days", time.days],
    ["Hours", time.hours],
    ["Minutes", time.minutes],
    ["Seconds", time.seconds],
  ];

  return (
    <section className="bg-[#080706] py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-5 text-center sm:px-8">
        <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#c98a32]">
          The Journey Begins
        </p>

        <h2 className="mt-5 text-4xl font-black uppercase text-white sm:text-6xl">
          August 30, 2026
        </h2>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-5">
          {values.map(([label, value]) => (
            <div
              key={label}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8"
            >
              <div className="text-4xl font-black text-[#c98a32] sm:text-5xl">
                {String(value).padStart(2, "0")}
              </div>

              <div className="mt-2 text-[9px] font-bold uppercase tracking-[0.25em] text-white/35">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}