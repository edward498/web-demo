
import React from 'react';

interface HeroProps {
  intro: string;
  slogan: string;
}

const Hero: React.FC<HeroProps> = ({ intro, slogan }) => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <span className="inline-block px-4 py-1.5 bg-blue-500/20 border border-blue-400/30 text-blue-300 rounded-full text-sm font-semibold mb-6">
            Expert White Goods Repair
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            {slogan}
          </h1>
          <p className="text-xl text-slate-300 mb-10 leading-relaxed">
            {intro}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-xl shadow-blue-500/20">
              Schedule Service
            </button>
            <button className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all backdrop-blur-sm">
              View Pricing
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
