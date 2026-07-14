import React from "react";

const NoVacancies: React.FC = () => {
  return (
    <div className="relative">
      <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 p-12 max-w-md mx-auto transform hover:scale-105 transition-transform duration-300">
        <div className="absolute top-4 left-4 w-3 h-3 border-t-2 border-l-2 border-slate-300"></div>
        <div className="absolute top-4 right-4 w-3 h-3 border-t-2 border-r-2 border-slate-300"></div>
        <div className="absolute bottom-4 left-4 w-3 h-3 border-b-2 border-l-2 border-slate-300"></div>
        <div className="absolute bottom-4 right-4 w-3 h-3 border-b-2 border-r-2 border-slate-300"></div>

        <div className="text-center">
          <div className="mx-auto w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-6">
            <svg className="w-8 h-8 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6.294a23.946 23.946 0 01-4 2.33M6 20h12a2 2 0 002-2V8a2 2 0 00-2-2H6a2 2 0 00-2 2v10a2 2 0 002 2zM6 9h12v4a2 2 0 01-2 2H8a2 2 0 01-2-2V9z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-slate-800 mb-3">
            There are currently no vacancies.
          </h2>
          <p className="text-lg text-slate-600 font-medium mb-2">
            Check back for updates.
          </p>
        </div>

        <div
          className="absolute inset-0 rounded-2xl opacity-5 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000' fill-opacity='0.1'%3E%3Ccircle cx='3' cy='3' r='1'/%3E%3Ccircle cx='13' cy='13' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 rounded-2xl transform translate-y-2 -translate-x-1 -z-10"></div>
    </div>
  );
};

export default NoVacancies;
