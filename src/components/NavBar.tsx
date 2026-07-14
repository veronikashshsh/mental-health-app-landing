import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { NAVIGATION_LINKS } from "../content/navigation";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const navLinkClass =
  "text-black font-semibold hover:text-[#8397D3] transition-colors cursor-pointer";

const ctaButtonClass =
  "bg-[#8397D3] hover:bg-[#7181b0] text-white px-6 py-2.5 rounded-md font-semibold text-sm shadow hover:shadow-xl transition-all";

const mobileCtaButtonClass =
  "flex items-center justify-center bg-[#8397D3] hover:bg-[#7181b0] text-white px-4 py-2 rounded-md font-semibold shadow hover:shadow-lg transition-all cursor-pointer";

const mobileNavLinkClass =
  "text-black font-semibold hover:text-[#8397D3] transition-colors text-center cursor-pointer";

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
          {NAVIGATION_LINKS.map((item) =>
     item.type === "route" ? (
      <Link key={item.label} to={item.to} className={navLinkClass}>
        {item.label}
      </Link>
    ) : (
      <button
        key={item.label}
        type="button"
        className={navLinkClass}
        onClick={() => goToSection(item.section)}
      >
        {item.label}
      </button>
    )
  )}
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-lg px-6 py-5 md:px-6 md:py-7 rounded-md font-bold text-lg md:text-lg tracking-wide">
          DEVELOPYOURSELF
        </div>
      <button
        type="button"
        className={`hidden lg:block ${ctaButtonClass}`}
        onClick={() => goToSection("download")}
      >
      TRY IT FIRST
      </button>

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
           {NAVIGATION_LINKS.map((item) =>
  item.type === "route" ? (
    <Link
      key={item.label}
      to={item.to}
      className={mobileNavLinkClass}
      onClick={() => setMenuOpen(false)}
    >
      {item.label}
    </Link>
  ) : (
    <button
      key={item.label}
      type="button"
      className={mobileNavLinkClass}
      onClick={() => {
        goToSection(item.section);
        setMenuOpen(false);
      }}
    >
      {item.label}
    </button>
  )
)}
      <button
            type="button"
            className={mobileCtaButtonClass}
            onClick={() => {
            goToSection("download");
            setMenuOpen(false);
         }}
      >
     TRY IT FIRST
      </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
