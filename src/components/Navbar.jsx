import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `relative pb-1 transition-colors duration-300
     ${isActive ? "text-white" : "text-[#9CA3AF] hover:text-white"}`;

  const whatsappLink =
    "https://wa.me/919999999999?text=Hello%20I%20want%20to%20book%20a%20call";

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0B0F0E]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <NavLink to="/" className="text-xl font-semibold text-white tracking-wide">
            Nexsoo<span className="text-[#2ED3A7]">.</span>
          </NavLink>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8 text-sm">
            <NavLink to="/" className={navLinkClass}>Home</NavLink>
            <NavLink to="/services" className={navLinkClass}>Our Services</NavLink>
            <NavLink to="/portfolio" className={navLinkClass}>Portfolio</NavLink>
            <NavLink to="/AboutPage" className={navLinkClass}>About Us</NavLink>
          </div>

          {/* Desktop CTA → WhatsApp */}
          <div className="hidden md:block">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 text-sm font-medium rounded-full bg-[#2ED3A7] text-black hover:bg-[#22C55E] transition"
            >
              Book Now
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setOpen(!open)}
          >
            {open ? "✕" : "☰"}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300
          ${open ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="px-6 pb-6 pt-2 flex flex-col gap-4 bg-[#0B0F0E]">

          <NavLink to="/" onClick={() => setOpen(false)} className={navLinkClass}>
            Home
          </NavLink>

          <NavLink to="/services" onClick={() => setOpen(false)} className={navLinkClass}>
            Our Services
          </NavLink>

          <NavLink to="/portfolio" onClick={() => setOpen(false)} className={navLinkClass}>
            Portfolio
          </NavLink>

          <NavLink to="/AboutPage" onClick={() => setOpen(false)} className={navLinkClass}>
            About Us
          </NavLink>

          {/* Mobile CTA → WhatsApp */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-4 w-full py-3 text-center rounded-full bg-[#2ED3A7] text-black hover:bg-[#22C55E] transition"
          >
            Book Now
          </a>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
