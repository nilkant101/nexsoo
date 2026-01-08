import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ServicesPage from "./pages/ServicesPage";
import PortfolioPage from "./pages/PortfolioPage";
import AboutPage from "./pages/AboutPage";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="bg-[#0B0F0E] text-white min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/AboutPage" element={<AboutPage />} />
      </Routes>
    </div>
  );
}
