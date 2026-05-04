import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Etymology } from "@/components/Etymology";
import { Services } from "@/components/Services";
import { WhyOikos } from "@/components/WhyOikos";
import { Closing } from "@/components/Closing";
import { Footer } from "@/components/Footer";
import { Marquee } from "@/components/Marquee";

const brandVocab = [
  { text: "biophilic", italic: true },
  { text: "seasonal", italic: false },
  { text: "handmade", italic: true },
  { text: "refillable", italic: false },
  { text: "low-waste", italic: true },
  { text: "intentional", italic: false },
  { text: "plant-led", italic: true },
  { text: "slow-made", italic: false },
  { text: "earth-toned", italic: true },
  { text: "considered", italic: false },
  { text: "restorative", italic: true },
  { text: "paper-tied", italic: false },
];

export default function Home() {
  return (
    <>
      <Nav />
      <main className="relative">
        <Hero />
        <Etymology />
        <div className="border-y border-forest/10 bg-cream-soft/40">
          <Marquee items={brandVocab} speedSeconds={64} />
        </div>
        <Services />
        <WhyOikos />
        <Closing />
      </main>
      <Footer />
    </>
  );
}
