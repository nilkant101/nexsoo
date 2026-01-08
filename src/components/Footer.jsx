import { NavLink } from "react-router-dom";



const Footer = () => {

  const whatsappLink =
    "https://wa.me/919999999999?text=Hello%20I%20want%20to%20book%20a%20call";


  return (
    <footer className=" border-t border-white/10 bg-[#0B0F0E]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <h2 className="text-xl font-semibold text-white">
              Nexsoo<span className="text-[#2ED3A7]">.</span>
            </h2>
            <p className="mt-4 text-sm text-[#9CA3AF] max-w-xs">
              We help brands grow through performance marketing,
              creative production, and strong digital systems.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <NavLink to="/" className="text-[#9CA3AF] hover:text-white transition">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" className="text-[#9CA3AF] hover:text-white transition">
                  Our Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/portfolio" className="text-[#9CA3AF] hover:text-white transition">
                  Portfolio
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="text-[#9CA3AF] hover:text-white transition">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">
              Services
            </h3>
            <ul className="space-y-2 text-sm text-[#9CA3AF]">
              <li>Performance Advertising</li>
              <li>Creative & Video Production</li>
              <li>Graphic Design Services</li>
              <li>Growth Strategy</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">
              Contact
            </h3>
            <ul className="space-y-2 text-sm text-[#9CA3AF]">
              <li>Email: hello@nexsoo.com</li>
              <li>Phone: +91 9325702674</li>
              <li>India</li>
            </ul>

             <div className="hidden md:block mt-5 mr-3">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 text-sm font-medium rounded-full bg-[#2ED3A7] text-black hover:bg-[#22C55E] transition"
            >
              Book Now
            </a>
          </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-sm text-[#9CA3AF]">
          <p>© {new Date().getFullYear()} Nexsoo. All rights reserved.</p>

          <div className="mt-4 md:mt-0 flex gap-6">
            <span className="hover:text-white transition cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-white transition cursor-pointer">
              Terms
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
