import React, { useEffect } from 'react';
import SideDesign from '../components/side-design';
import ContentBoxes from '../components/content-boxes';
import HowItsWorks from '../components/howitsworks';
import FAQSection from '../components/questioanries';
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";

const HomePage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const handleAnchorClick = (e) => {
      const href = e.target.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });

          window.history.pushState(null, '', href);
        }
      }
    };

    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
      link.addEventListener('click', handleAnchorClick);
    });

    return () => {
      anchorLinks.forEach(link => {
        link.removeEventListener('click', handleAnchorClick);
      });
    };
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-turnary to-secondary">
      <SideDesign />

      {/* Decorative elements */}
      <div className="absolute top-40 left-10 w-64 h-64 rounded-full bg-primary/5 blur-3xl"></div>
      <div className="absolute bottom-40 right-10 w-96 h-96 rounded-full bg-primary/10 blur-3xl"></div>

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-[80vh] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block mb-4 px-4 py-1 bg-secondary rounded-full">
              <span className="text-primary font-medium">Secure Document Verification</span>
            </div>
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 mb-8">
              <motion.h1
                className="text-5xl sm:text-6xl md:text-7xl font-bold text-primary"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Upload.
              </motion.h1>
              <motion.h1
                className="text-5xl sm:text-6xl md:text-7xl font-bold text-primary"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Verify.
              </motion.h1>
              <motion.h1
                className="text-5xl sm:text-6xl md:text-7xl font-bold text-primary"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Trust.
              </motion.h1>
            </div>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Your documents verified securely using AI-ML technology, ensuring trust and transparency at every step.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button onClick={() => navigate('/upload')} className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-opacity-90 text-white font-medium rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                <span>Get Started</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              <button className="w-full sm:w-auto px-8 py-4 bg-secondary hover:bg-opacity-80 text-primary font-medium rounded-lg shadow-md transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-16 md:py-24 mt-24 bg-white/50 backdrop-blur-sm relative">
          <div className="absolute left-0 top-0 w-full h-16 bg-gradient-to-b from-turnary to-transparent"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Why Choose Our Platform</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Experience the future of document verification with our solution</p>
            </div>
            <ContentBoxes />
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="w-full py-16 md:py-24 bg-turnary relative">
          <div className="absolute left-0 top-0 w-full h-16 bg-gradient-to-b from-white/50 to-transparent"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">How It Works</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Simple steps to secure your documents</p>
            </div>
            <HowItsWorks />
          </div>
        </section>
        <section id="faq">
          <FAQSection />
        </section>
      </main>

      <div className="fixed bottom-6 right-6 md:hidden">
        <button className="p-4 bg-primary rounded-full shadow-lg text-white hover:bg-opacity-90 transition-all">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default HomePage;