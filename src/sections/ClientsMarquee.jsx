import { motion } from "framer-motion";
import { useState } from "react";
import ClientLogo from "./ClientLogo";

import logo1 from "../assets/logoes/1.png";
import logo2 from "../assets/logoes/2.png";
import logo3 from "../assets/logoes/3.png";
import logo4 from "../assets/logoes/4.png";
import logo5 from "../assets/logoes/5.png";
import logo6 from "../assets/logoes/6.png";
import logo7 from "../assets/logoes/7.png";
import logo8 from "../assets/logoes/8.png";
import logo9 from "../assets/logoes/9.png";
import logo10 from "../assets/logoes/10.png";
import logo11 from "../assets/logoes/11.png";

const logos = [
  logo1, logo2, logo3, logo4, logo5,
  logo6, logo7, logo8, logo9, logo10, logo11
];

const ClientsMarquee = () => {
  const [slow, setSlow] = useState(false);

  const duration = slow ? 40 : 20; // hover pe slow

  return (
    <section className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-light text-center mb-14">
          Our <span className="text-[#2ED3A7]">Clients</span>
        </h2>

        {/* ================= ROW 1 ================= */}
        <div
          className="relative overflow-hidden mb-10"
          onMouseEnter={() => setSlow(true)}
          onMouseLeave={() => setSlow(false)}
        >
          {/* LEFT SHADOW */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-16 sm:w-24
                          bg-gradient-to-r from-[#0B0F0E] to-transparent z-10" />

          {/* RIGHT SHADOW */}
          <div className="pointer-events-none absolute right-0 top-0 h-full w-16 sm:w-24
                          bg-gradient-to-l from-[#0B0F0E] to-transparent z-10" />

          <motion.div
            className="flex gap-8 w-max"
            animate={{ x: ["-50%", "0%"] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration,
              ease: "linear",
            }}
          >
            {[...logos, ...logos].map((logo, i) => (
              <ClientLogo key={`row1-${i}`} logo={logo} />
            ))}
          </motion.div>
        </div>

        {/* ================= ROW 2 ================= */}
        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setSlow(true)}
          onMouseLeave={() => setSlow(false)}
        >
          {/* LEFT SHADOW */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-16 sm:w-24
                          bg-gradient-to-r from-[#0B0F0E] to-transparent z-10" />

          {/* RIGHT SHADOW */}
          <div className="pointer-events-none absolute right-0 top-0 h-full w-16 sm:w-24
                          bg-gradient-to-l from-[#0B0F0E] to-transparent z-10" />

          <motion.div
            className="flex gap-8 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration,
              ease: "linear",
            }}
          >
            {[...logos, ...logos].map((logo, i) => (
              <ClientLogo key={`row2-${i}`} logo={logo} />
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default ClientsMarquee;
