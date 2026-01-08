import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Sections
import Hero from "../sections/Hero";
import Stats from "../sections/Stats";
import Services from "../sections/Services";
import Process from "../sections/Process";
import CTA from "../sections/CTA";

export default function Home() {
  return (
    <div className="bg-dark text-white overflow-x-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Stats */}
      <Stats />

      {/* Services */}
      <Services />

      {/* How We Work */}
      <Process />

      {/* Call To Action */}
      <CTA />

      {/* Footer */}
      <Footer />
    </div>
  );
}
