import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const goToSection = (sectionId: string) => {
    if (window.location.pathname !== "/") {
      navigate("/", { state: { scrollTo: sectionId } });
    } else {
      const element = document.getElementById(sectionId);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-3 left-0 right-0 z-[1000] m-4">
      <nav className="max-w-6xl mx-auto px-4 md:px-6 py-3 flex justify-between items-center bg-white shadow-md rounded-md relative">
        <div className="hidden lg:flex gap-8">
          <a
            onClick={() => goToSection("home")}
            className="text-black font-semibold hover:text-[#8397D3] transition-colors cursor-pointer"
          >
            HOME
          </a>
          <a
            onClick={() => goToSection("about")}
            className="text-black font-semibold hover:text-[#8397D3] transition-colors cursor-pointer"
          >
            ABOUT
          </a>
          <a
            onClick={() => goToSection("features")}
            className="text-black font-semibold hover:text-[#8397D3] transition-colors cursor-pointer"
          >
            FEATURES
          </a>
          <Link
            to="/career"
            className="text-black font-semibold hover:text-[#8397D3] transition-colors cursor-pointer"
          >
            CAREER
          </Link>
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-lg px-6 py-5 md:px-6 md:py-7 rounded-md font-bold text-lg md:text-lg tracking-wide">
          DEVELOPYOURSELF
        </div>
        <a className="hidden lg:block bg-gradient-to-br bg-[#8397D3] hover:bg-[#7181b0] text-white px-6 py-2.5 rounded-md font-semibold text-sm shadow hover:shadow-xl transition-all cursor-pointer" 
          onClick={() => {goToSection("download");
              setMenuOpen(false)}}
          >
              TRY IT FIRST
          </a>

        <div
          className={`w-6 h-5 flex flex-col justify-between cursor-pointer lg:hidden`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`h-0.5 bg-black rounded-full transition-transform ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`h-0.5 bg-black rounded-full transition-opacity ${
              menuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`h-0.5 bg-black rounded-full transition-transform ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </div>

        {menuOpen && (
          <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-md rounded-md py-4 px-6 flex flex-col gap-4 lg:hidden">
            <a
              onClick={() => {
                goToSection("home");
                setMenuOpen(false);
              }}
              className="text-black font-semibold hover:text-[#8397D3] transition-colors cursor-pointer"
            >
              HOME
            </a>
            <a
              onClick={() => {
                goToSection("about");
                setMenuOpen(false);
              }}
              className="text-black font-semibold hover:text-[#8397D3] transition-colors cursor-pointer"
            >
              ABOUT
            </a>
            <a
              onClick={() => {
                goToSection("features");
                setMenuOpen(false);
              }}
              className="text-black font-semibold hover:text-[#8397D3] transition-colors cursor-pointer"
            >
              FEATURES
            </a>
            <Link
              to="/career"
              onClick={() => setMenuOpen(false)}
              className="text-black font-semibold hover:text-[#8397D3] transition-colors cursor-pointer"
            >
              CAREER
            </Link>
             <a
            className="flex items-center justify-center bg-gradient-to-br bg-[#8397D3] hover:bg-[#7181b0] text-white px-4 py-2 rounded-md font-semibold shadow hover:shadow-lg transition-all cursor-pointer" 
             onClick={() => {goToSection("download");
              setMenuOpen(false)}}
            >
            TRY IT FIRST
          </a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
