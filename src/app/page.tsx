import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/sections/Hero";
import BrandStory from "@/components/sections/BrandStory";
import Product3D from "@/components/sections/Product3D";
import Collection from "@/components/sections/Collection";
import LaunchOffer from "@/components/sections/LaunchOffer";
import WhyMadeForMore from "@/components/sections/WhyMadeForMore";
import Philosophy from "@/components/sections/Philosophy";
import Countdown from "@/components/sections/Countdown";
import Socials from "@/components/sections/Socials";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <BrandStory />
        <Product3D />
        <Collection />
        <LaunchOffer />
        <WhyMadeForMore />
        <Philosophy />
        <Countdown />
        <Socials />
        <FinalCTA />
      </main>

      <Footer />
    </>
  );
}