import React from "react";

const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="py-20 px-6 bg-white"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">About our app</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            DevelopYourself is more than just a mood tracker – it's your personal
            emotional companion. With daily journaling, AI-powered analysis, and
            meaningful insights, our app helps you understand your emotions and
            develop self-growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white shadow-lg rounded-xl border border-gray-100 text-center">
            <div className="flex justify-center mb-4">
              <span className="text-indigo-600 text-2xl">✔</span>
            </div>
            <h3 className="font-semibold text-lg text-gray-800 mb-3">
              Emotional Awareness Made Simple
            </h3>
            <p className="text-gray-600">
              Track your daily moods and thoughts in just a few taps – see how
              your emotions evolve over time.
            </p>
          </div>

          <div className="p-6 bg-white shadow-lg rounded-xl border border-gray-100 text-center">
            <div className="flex justify-center mb-4">
              <span className="text-indigo-600 text-2xl">✔</span>
            </div>
            <h3 className="font-semibold text-lg text-gray-800 mb-3">
              Insights That Matter
            </h3>
            <p className="text-gray-600">
              Beautiful visualizations and statistics help you discover what
              drives your moods.
            </p>
          </div>

          <div className="p-6 bg-white shadow-lg rounded-xl border border-gray-100 text-center">
            <div className="flex justify-center mb-4">
              <span className="text-indigo-600 text-2xl">✔</span>
            </div>
            <h3 className="font-semibold text-lg text-gray-800 mb-3">
              A Safe Space for Self-Reflection
            </h3>
            <p className="text-gray-600">
              Journal privately, track progress, and build resilience at your
              own pace.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;