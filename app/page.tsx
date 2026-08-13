import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustMarquee } from "@/components/TrustMarquee";
import { Features } from "@/components/Features";
import { Product } from "@/components/Product";
import { Pricing } from "@/components/Pricing";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrustMarquee />
      <Features />
      <Product />
      <Pricing />
      <FinalCTA />
      <Footer />
    </main>
  );
}
