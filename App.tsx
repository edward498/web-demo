
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ChatWidget from './components/ChatWidget';
import { MarketingContent } from './types';
import { SERVICES, INITIAL_MARKETING_CONTENT } from './constants';
import { generateMarketingMaterials } from './services/geminiService';

const App: React.FC = () => {
  const [content, setContent] = useState<MarketingContent>(INITIAL_MARKETING_CONTENT);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleRegenerate = async () => {
    setIsGenerating(true);
    const newContent = await generateMarketingMaterials("HomeGuard Repair");
    if (newContent) setContent(newContent);
    setIsGenerating(false);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // Simple visual feedback could be added here
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      
      <main>
        {/* Landing Page Preview Sections */}
        <Hero intro={content.homepageIntro} slogan={content.slogan} />

        {/* Services Grid */}
        <section id="services" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Professional Repair Services</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              We specialize in repairing all major household appliances with genuine parts and certified expertise.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <div key={service.id} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
                <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <i className={`fas ${service.icon} text-2xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.name}</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                <a href="#" className="text-blue-600 font-semibold inline-flex items-center hover:underline">
                  Learn More <i className="fas fa-arrow-right ml-2 text-xs"></i>
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Marketing Content Toolkit - For the Business Owner */}
        <section id="toolkit" className="py-24 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
              <div>
                <h2 className="text-3xl font-bold mb-2">Business Marketing Toolkit</h2>
                <p className="text-slate-400">AI-generated content ready for your ads and website.</p>
              </div>
              <button 
                onClick={handleRegenerate}
                disabled={isGenerating}
                className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl font-bold transition-all disabled:opacity-50 shadow-lg shadow-blue-500/20"
              >
                {isGenerating ? (
                  <i className="fas fa-circle-notch animate-spin"></i>
                ) : (
                  <i className="fas fa-magic"></i>
                )}
                <span>{isGenerating ? 'Generating...' : 'Regenerate Content'}</span>
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Business Description */}
              <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 relative group">
                <button 
                  onClick={() => copyToClipboard(content.businessDescription)}
                  className="absolute top-6 right-6 text-slate-500 hover:text-blue-400 transition-colors"
                  title="Copy to clipboard"
                >
                  <i className="fas fa-copy"></i>
                </button>
                <div className="flex items-center space-x-3 mb-6">
                  <i className="fas fa-quote-left text-blue-400 text-xl"></i>
                  <h3 className="text-xl font-bold">Business Description</h3>
                </div>
                <p className="text-slate-300 leading-relaxed italic">
                  "{content.businessDescription}"
                </p>
              </div>

              {/* Google Ad Text */}
              <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 relative group">
                <button 
                  onClick={() => copyToClipboard(`${content.googleAd.headline}\n${content.googleAd.description}`)}
                  className="absolute top-6 right-6 text-slate-500 hover:text-blue-400 transition-colors"
                  title="Copy to clipboard"
                >
                  <i className="fas fa-copy"></i>
                </button>
                <div className="flex items-center space-x-3 mb-6">
                  <i className="fab fa-google text-blue-400 text-xl"></i>
                  <h3 className="text-xl font-bold">Google Ad Performance</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Headline</span>
                    <p className="text-blue-400 font-semibold text-lg">{content.googleAd.headline}</p>
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Description</span>
                    <p className="text-slate-300">{content.googleAd.description}</p>
                  </div>
                </div>
              </div>

              {/* Catchy Slogan */}
              <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 relative group">
                <button 
                  onClick={() => copyToClipboard(content.slogan)}
                  className="absolute top-6 right-6 text-slate-500 hover:text-blue-400 transition-colors"
                  title="Copy to clipboard"
                >
                  <i className="fas fa-copy"></i>
                </button>
                <div className="flex items-center space-x-3 mb-6">
                  <i className="fas fa-bullhorn text-blue-400 text-xl"></i>
                  <h3 className="text-xl font-bold">Catchy Slogan</h3>
                </div>
                <p className="text-2xl font-black tracking-tight text-white">
                  {content.slogan}
                </p>
              </div>

              {/* Chatbot Greeting */}
              <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 relative group">
                <button 
                  onClick={() => copyToClipboard(content.chatbotGreeting)}
                  className="absolute top-6 right-6 text-slate-500 hover:text-blue-400 transition-colors"
                  title="Copy to clipboard"
                >
                  <i className="fas fa-copy"></i>
                </button>
                <div className="flex items-center space-x-3 mb-6">
                  <i className="fas fa-comment-dots text-blue-400 text-xl"></i>
                  <h3 className="text-xl font-bold">Chatbot Greeting</h3>
                </div>
                <div className="bg-slate-900 rounded-xl p-4 border border-slate-700">
                  <p className="text-slate-300 text-sm font-mono">
                    {content.chatbotGreeting}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-clock"></i>
                </div>
                <h4 className="font-bold mb-2">Same-Day Service</h4>
                <p className="text-slate-500 text-sm">Repairing your appliances on the first visit.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-tag"></i>
                </div>
                <h4 className="font-bold mb-2">Affordable Pricing</h4>
                <p className="text-slate-500 text-sm">No hidden fees, just honest upfront quotes.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-certificate"></i>
                </div>
                <h4 className="font-bold mb-2">Certified Techs</h4>
                <p className="text-slate-500 text-sm">Background-checked and factory-trained.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <h4 className="font-bold mb-2">Warranty Included</h4>
                <p className="text-slate-500 text-sm">All repairs backed by our solid guarantee.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-50 py-12 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-slate-500 text-sm">© 2024 HomeGuard Appliance Repair. All rights reserved.</p>
        </div>
      </footer>

      <ChatWidget initialGreeting={content.chatbotGreeting} />
    </div>
  );
};

export default App;
