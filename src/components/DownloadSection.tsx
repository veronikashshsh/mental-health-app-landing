import React from "react";
import PhoneImg from "../assets/phones2.png";
import EmailSubscription from "./EmailSubscription";
import { DOWNLOAD_CONTENT } from "../content/download";

const DownloadSection: React.FC = () => {
  return (
    <section
      id="download"
      className="py-10 px-6 bg-white text-gray-800"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-2 lg:gap-4">
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-3xl font-bold mb-6">{DOWNLOAD_CONTENT.title}</h2>
          <p className="mb-8 text-lg">
            {DOWNLOAD_CONTENT.description}
          </p>
          
         <div className="flex justify-center lg:justify-start md:justify-center gap-4">
                    <EmailSubscription />
                </div>
        </div>
        <div className="flex-1 flex justify-center">
          <img src={PhoneImg} alt="App Mockup" className="w-64 sm:w-80 md:w-96" />
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
