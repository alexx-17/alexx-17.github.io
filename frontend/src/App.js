import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "@/App.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import Portfolio from "@/pages/Portfolio";
import About from "@/pages/About";
import Contact from "@/pages/Contact";

// Scroll restoration on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  }, [pathname]);
  return null;
};

function App() {
  return (
    <div className="App">
      <LanguageProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Navbar />
          <div className="pt-16 md:pt-[72px]">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/portofoliu" element={<Portfolio />} />
              <Route path="/despre-noi" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Home />} />
            </Routes>
            <Footer />
          </div>
        </BrowserRouter>
      </LanguageProvider>
    </div>
  );
}

export default App;
