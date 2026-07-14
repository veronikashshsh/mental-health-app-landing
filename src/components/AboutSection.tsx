import React from "react";
import { ABOUT_CARDS, ABOUT_CONTENT } from "../content/about";


const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="py-20 px-6 bg-white"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">{ABOUT_CONTENT.title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {ABOUT_CONTENT.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ABOUT_CARDS.map((card) => (
  <div
    key={card.title}
    className="p-6 bg-white shadow-lg rounded-xl border border-gray-100 text-center"
  >
    <div className="flex justify-center mb-4">
      <span className="text-indigo-600 text-2xl">{card.icon}</span>
    </div>

    <h3 className="font-semibold text-lg text-gray-800 mb-3">
      {card.title}
    </h3>

    <p className="text-gray-600">
      {card.description}
    </p>
  </div>
))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;