import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

// Sections
import Hero from "../sections/Hero";
import Stats from "../sections/Stats";
import Services from "../sections/Services";
import Process from "../sections/Process";
import CTA from "../sections/CTA";

const Home = ()=> {
  return (
    <div className="relative min-h-screen overflow-x-hidden text-white bg-[#0B0F0E]">
       
       
      {/* Background gradient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#2ED3A7]/10 blur-[120px]" />
        <div className="absolute top-1/3 -right-40 h-[500px] w-[500px] rounded-full bg-[#22C55E]/10 blur-[120px]" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Stats />
        <Services />
        <Process />
        <CTA />
      </div>

    </div>
  );
}

export default Home;
