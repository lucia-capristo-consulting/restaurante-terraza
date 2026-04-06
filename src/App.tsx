import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import AnnouncementBanner from "./components/AnnouncementBanner";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Reservations from "./pages/Reservations";
import Contact from "./pages/Contact";
import Events from "./pages/Events";
import ScrollToTop from "./components/ScrollToTop";

const BANNER_STORAGE_KEY = "announcement-banner-dismissed";

function App() {
  const [bannerVisible, setBannerVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(BANNER_STORAGE_KEY)) {
      setBannerVisible(true);
    }
  }, []);

  return (
    <>
      <ScrollToTop />
      <AnnouncementBanner onDismiss={() => setBannerVisible(false)} />
      <Navbar bannerVisible={bannerVisible} />
      <main className={bannerVisible ? "pt-24 md:pt-28" : "pt-16 md:pt-20"}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/carta" element={<Menu />} />
          <Route path="/nosotros" element={<About />} />
          <Route path="/reservas" element={<Reservations />} />
          <Route path="/eventos" element={<Events />} />
          <Route path="/contacto" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default App;
