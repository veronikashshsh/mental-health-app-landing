import React from 'react';
import hero from './../assets/phones2.png'
import heroBackground from "../assets/backgroundHero.svg";
import EmailSubscription from './EmailSubscription';

const Hero: React.FC = () => {
  return (
    <section 
    id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center pt-24 px-6"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
  >
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center relative z-10 w-full">
        <div className="order-2 lg:order-1 text-center lg:text-left animate-fade-in-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-800 mb-6 lg:mb-10">
            NAVIGATE YOUR<br />
            <span className="bg-gradient-to-r text-gray-800  bg-clip-text">
              EMOTIONS
            </span>,<br />
            TRANSFORM YOUR<br />
            MIND
          </h1>
          
          <div className="mt-8 mb-8 lg:mt-15">
            <h3 className="text-sm md:text-base lg:text-lg font-semibold text-gray-600 mb-4 lg:mb-5 tracking-wider">
              Get notified about the release
            </h3>
               <div className="flex justify-center lg:justify-start md:justify-center gap-4">
                    <EmailSubscription />
                </div>

          </div>
        </div>
      
        <div className="order-1 lg:order-2 flex justify-center items-center animate-fade-in-right">
  <div className="w-72 sm:w-80 md:w-96 lg:w-5/6 xl:w-4/5 max-w-lg">
    <img 
      src={hero} 
      alt="App mockup showcasing emotional tracking features" 
      className="w-full h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
    />
  </div>
</div>

      </div>
      
      <style>{`
        @keyframes fade-in-left {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-fade-in-left {
          animation: fade-in-left 1s ease-out;
        }
        
        .animate-fade-in-right {
          animation: fade-in-right 1s ease-out 0.3s both;
        }
        
        .bg-gradient-radial {
          background: radial-gradient(circle at 30% 20%, rgba(255,255,255,0.3) 0%, transparent 50%),
                      radial-gradient(circle at 70% 80%, rgba(139,159,232,0.2) 0%, transparent 50%);
        }
      `}</style>
    </section>
  );
};

export default Hero;