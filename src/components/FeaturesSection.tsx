import React from "react";
import featuresImg from "./../assets/Home Page.png";
import featuresBg from "./../assets/backgroundFeature.svg";
import { FEATURES, FEATURES_CONTENT } from "../content/features";
import { FeatureCard } from "./FeatureCard";

const FeaturesSection: React.FC = () => {
  return (
    <section
    id="features"
      className="min-h-screen py-20 px-4 relative overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${featuresBg})` }}
    >
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-700 mb-6 tracking-wide">
          {FEATURES_CONTENT.title}
        </h2>
        <p className="text-gray-600 leading-relaxed">
          {FEATURES_CONTENT.description}
        </p>
      </div>

     <div className="max-w-7xl mx-auto relative flex flex-col lg:flex-row items-center justify-center gap-16">
  {/* Features grid for small screens */}
  <div className="grid grid-cols-2 gap-8 order-2 lg:hidden">
    {FEATURES.map((feature) => (
  <FeatureCard
    key={feature.title}
    {...feature}
  />
))}
  </div>

  {/* Desktop layout */}
  <div className="hidden lg:flex flex-col gap-24 order-1">
   {FEATURES.slice(0, 2).map((feature) => (
    <FeatureCard
        key={feature.title}
        {...feature}
        align="right"
    />
))}
  </div>

  <div className="order-1 lg:order-2 flex justify-center">
    <img 
      src={featuresImg} 
      alt="App features preview" 
      className="w-64 md:w-80 lg:w-96 h-auto object-contain drop-shadow-2xl rounded-lg" 
    />
  </div>

  <div className="hidden lg:flex flex-col gap-24 order-3">
    {FEATURES.slice(2).map((feature) => (
    <FeatureCard
        key={feature.title}
        {...feature}
        align="left"
    />
))}
  </div>
</div>

    </section>
  );
};

export default FeaturesSection;