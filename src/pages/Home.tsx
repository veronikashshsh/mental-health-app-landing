import React, { useEffect } from "react";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import FeaturesSection from "../components/FeaturesSection";
import DownloadSection from "../components/DownloadSection";
import Footer from "../components/Footer";
import { useLocation, useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        navigate(location.pathname, { replace: true });
      }
    }
  }, [location.state, location.pathname, navigate]);

  return (
    <div>
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <DownloadSection />
      <Footer />
    </div>
  );
};

export default Home;
