import React from "react";
import NoVacancies from "../components/NoVacancies";


const Career: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-8 relative">
      <NoVacancies />

      <div className="absolute top-20 left-20 w-32 h-32 bg-blue-100 rounded-full opacity-20 blur-xl"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-100 rounded-full opacity-20 blur-xl"></div>
    </div>
  );
};

export default Career;
