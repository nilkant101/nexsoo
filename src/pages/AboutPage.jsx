import { motion } from "framer-motion";
import { useState } from "react";

const AboutPage = () => {
  const [hovered, setHovered] = useState(null);

  const services = [
    "Product Advertisement Videos",
    "Cinematic Brand Films",
    "Short-form Reels & Social Media Videos",
    "YouTube Video Production",
    "Voice-over & Script Writing",
    "Creative Strategy & Visual Direction",
  ];

  const reasons = [
    "Deep understanding of digital platforms and audience behavior",
    "Strong focus on storytelling, not just visuals",
    "Affordable solutions for startups and small businesses",
    "End-to-end production handled completely in-house",
    "Commitment to quality, timelines, and real results",
  ];

  return (
    <section className="py-28 bg-[#0B0F0E] text-white">
      <div className="max-w-6xl mx-auto px-6 md:px-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-16 max-w-3xl"
        >
          <h1 className="text-3xl md:text-4xl font-light">
            About{" "}
            <span className="text-[#2ED3A7]">
              Nexsoo Tech Media
            </span>
          </h1>
          <p className="mt-4 text-[#9CA3AF]">
            We craft powerful visual stories that help brands connect, grow,
            and stand out in a competitive digital landscape.
          </p>
        </motion.div>

        {/* About Content */}
        <div className="space-y-6 text-[#D1D5DB] leading-relaxed max-w-4xl">
          <p>
            At <strong className="text-[#2ED3A7]">Nexsoo Tech Media</strong>, we
            specialize in creating high-impact, cinematic video content that
            brings products and brands to life. Our mission is to empower
            startups and growing businesses with professional,
            performance-driven visual content.
          </p>

          <p>
            We are a team of creative professionals focused on storytelling
            through visual media. From product ads and cinematic brand films to
            reels, YouTube content, and voice-over scripts—we manage the entire
            production process with clarity and purpose.
          </p>

          <p>
            Whether you’re launching a new product or building long-term brand
            presence, we transform ideas into compelling visuals that connect
            with the right audience.
          </p>

          <p>
            High-quality content should be accessible. That’s why Nexsoo Tech
            Media delivers affordable, impactful solutions designed to produce
            measurable results—without compromising on creativity.
          </p>
        </div>

        {/* What We Do – Animated Size Swap Blocks */}
        <div className="mt-28">
          <h2 className="text-2xl font-light mb-10">
            What We <span className="text-[#2ED3A7]">Do</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((item, index) => (
              <motion.div
                key={index}
                onHoverStart={() => setHovered(index)}
                onHoverEnd={() => setHovered(null)}
                animate={{
                  scale: hovered === index ? 1.05 : 0.97,
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="relative overflow-hidden rounded-2xl border border-white/10 cursor-pointer"
              >
                {/* Animated BG fill */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: hovered === index ? 1 : 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute inset-0 origin-left bg-[#2ED3A7]/60"
                />

                <div className="relative z-10 p-8 text-lg text-white">
                  {item}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mt-32">
          <h2 className="text-2xl font-light mb-10">
            Why Choose <span className="text-[#2ED3A7]">Us</span>
          </h2>

          <div className="space-y-4 max-w-4xl">
            {reasons.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
              >
                <p className="text-[#D1D5DB]">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Closing */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-28 max-w-3xl"
        >
          <p className="text-[#D1D5DB] leading-relaxed">
            Let’s create something extraordinary together.
            <span className="text-[#2ED3A7] font-medium">
              {" "}Nexsoo Tech Media
            </span>{" "}
            is here to turn your vision into impactful digital experiences.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutPage;
