import Hero from "@/components/sections/Hero";
import Manifesto from "@/components/sections/Manifesto";
import Portfolio from "@/components/sections/Portfolio";
import TechSpotlight from "@/components/sections/TechSpotlight";
import Process from "@/components/sections/Process";

export default function Home() {
  return (
    <>
      <Hero />
      <Manifesto />
      <Portfolio />
      <TechSpotlight />
      <Process />
    </>
  );
}
