import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <section className="min-h-screen mt-[-100px] flex items-center bg-dark pt-24">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-light leading-tight"
        >
          Make <span className="text-accent">Your</span> Brand Unforgettable
        </motion.h1>

        <p className="mt-6 text-[20px] max-w-2xl mx-auto">
          – In a Digital-Driven Era!
        </p>

        <div className="mt-10 flex justify-center gap-4">

          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/919999999999?text=Hello%20I%20want%20to%20discuss%20my%20project"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent px-8 py-3 rounded-full border border-gray-600 hover:border-white transition"
          >
            Let’s Connect
          </a>

          {/* Portfolio Route */}
          <NavLink
            to="/portfolio"
            className="border font-bold bg-[#2ED3A7] text-black border-gray-600 px-8 py-3 rounded-full hover:border-white transition"
          >
            Our Work
          </NavLink>

        </div>

      </div>
    </section>
  );
};

export default Hero;
