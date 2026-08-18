import Button from "../ui/Button";

export default function FinalCTA() {
  return (
    <section id="contact" className="bg-[#c98a32] py-24 text-black sm:py-32">
      <div className="mx-auto max-w-5xl px-5 text-center sm:px-8">
        <p className="text-xs font-black uppercase tracking-[0.35em]">
          Your Journey Starts Here
        </p>

        <h2 className="mt-6 text-5xl font-black uppercase leading-[0.9] tracking-[-0.05em] sm:text-7xl">
          Are You
          <br />
          Made For More?
        </h2>

        <p className="mx-auto mt-7 max-w-xl text-base leading-7 text-black/60">
          Join the movement. Get first access to new designs, pre-orders,
          exclusive discounts and launch updates.
        </p>

        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <Button
            href="https://wa.me/233208968839"
            className="bg-black text-white hover:bg-[#17120d]"
          >
            Pre-Order on WhatsApp
          </Button>

          <Button
            href="https://instagram.com/madeformore_m.4.m"
            variant="outline"
            className="border-black/40 text-black hover:bg-black/10"
          >
            Follow Us
          </Button>
        </div>
      </div>
    </section>
  );
}