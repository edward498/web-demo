
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="bg-blue-600 p-2 rounded-lg">
              <i className="fas fa-tools text-white text-xl"></i>
            </div>
            <span className="text-xl font-bold text-slate-900 tracking-tight">HomeGuard</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#services" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Services</a>
            <a href="#toolkit" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Marketing Toolkit</a>
            <a href="#chat" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">AI Assistant</a>
          </nav>
          <div className="flex items-center space-x-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full font-semibold transition-all shadow-sm">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
