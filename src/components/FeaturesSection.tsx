import React from "react";
import featuresImg from "./../assets/Home Page.png";
import featuresBg from "./../assets/backgroundFeature.svg";
import {
  MessageSquare,
  Calendar,
  Smartphone,
  Settings,
} from "lucide-react";

const featuresData = [
  { icon: <MessageSquare />, title: "AI-POWERED EMOTIONAL ANALYSIS" },
  { icon: <Calendar />, title: "MOOD CALENDAR & VISUAL STATISTICS" },
  { icon: <Smartphone />, title: "AVAILABLE ON IOS & ANDROID" },
  { icon: <Settings />, title: "PERSONALIZED DAILY AFFIRMATIONS" },
];

const FeaturesSection: React.FC = () => {
  return (
    <section
    id="features"
      className="min-h-screen py-20 px-4 relative overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${featuresBg})` }}
    >
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-700 mb-6 tracking-wide">
          APP FEATURES
        </h2>
        <p className="text-gray-600 leading-relaxed">
         Unlock the power of DevelopYourself with features designed to support your emotional well-being. 
         Enjoy AI-powered mood analysis, a personal daily journal, insightful visual statistics, and tailored affirmations – 
         all helping you understand your emotions, track your growth, and nurture self-awareness effortlessly.
        </p>
      </div>

     <div className="max-w-7xl mx-auto relative flex flex-col lg:flex-row items-center justify-center gap-16">
  {/* Features grid for small screens */}
  <div className="grid grid-cols-2 gap-8 order-2 lg:hidden">
    {featuresData.map((feature, idx) => (
      <div key={idx} className="flex flex-col items-center text-center">
        <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mb-4 shadow-lg text-white text-2xl">
          {feature.icon}
        </div>
        <h3 className="text-base font-bold text-gray-700 max-w-48">
          {feature.title}
        </h3>
      </div>
    ))}
  </div>

  {/* Desktop layout */}
  <div className="hidden lg:flex flex-col gap-24 order-1">
    {featuresData.slice(0, 2).map((feature, idx) => (
      <div key={idx} className="flex flex-col items-center text-center lg:text-right lg:items-end">
        <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mb-4 shadow-lg text-white text-2xl">
          {feature.icon}
        </div>
        <h3 className="text-base font-bold text-gray-700 max-w-48">
          {feature.title}
        </h3>
      </div>
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
    {featuresData.slice(2, 4).map((feature, idx) => (
      <div key={idx} className="flex flex-col items-center text-center lg:text-left lg:items-start">
        <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mb-4 shadow-lg text-white text-2xl">
          {feature.icon}
        </div>
        <h3 className="text-base font-bold text-gray-700 max-w-48">
          {feature.title}
        </h3>
      </div>
    ))}
  </div>
</div>

    </section>
  );
};

export default FeaturesSection;