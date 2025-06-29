import React from "react";
import { FaTwitter, FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              {/* Logo */}
              <div className="h-10 w-10 bg-white rounded-lg flex items-center justify-center mr-3">
                <span className="text-primary font-bold text-xl">TD</span>
              </div>
              <span className="text-white text-2xl font-bold">TrueDoc</span>
            </div>
            <p className="text-secondary mb-6 leading-relaxed">
              Advanced document verification solutions powered by AI to help businesses prevent fraud and streamline onboarding.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-secondary hover:text-white transition-colors duration-300">
                <span className="sr-only">Twitter</span>
                <FaTwitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-secondary hover:text-white transition-colors duration-300">
                <span className="sr-only">LinkedIn</span>
                <FaLinkedinIn className="h-6 w-6" />
              </a>
              <a href="#" className="text-secondary hover:text-white transition-colors duration-300">
                <span className="sr-only">GitHub</span>
                <FaGithub className="h-6 w-6" />
              </a>
              <a href="#" className="text-secondary hover:text-white transition-colors duration-300">
                <span className="sr-only">Email</span>
                <FaEnvelope className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Solutions Section */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-6 border-b border-secondary/30 pb-2">Solutions</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-secondary hover:text-white transition-colors duration-300 flex items-center">
                  <span className="w-1.5 h-1.5 bg-secondary rounded-full mr-2"></span>
                  Identity Verification
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary hover:text-white transition-colors duration-300 flex items-center">
                  <span className="w-1.5 h-1.5 bg-secondary rounded-full mr-2"></span>
                  Document Checking
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary hover:text-white transition-colors duration-300 flex items-center">
                  <span className="w-1.5 h-1.5 bg-secondary rounded-full mr-2"></span>
                  Fraud Detection
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary hover:text-white transition-colors duration-300 flex items-center">
                  <span className="w-1.5 h-1.5 bg-secondary rounded-full mr-2"></span>
                  AI-Powered Tools
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary hover:text-white transition-colors duration-300 flex items-center">
                  <span className="w-1.5 h-1.5 bg-secondary rounded-full mr-2"></span>
                  SDK Integration
                </a>
              </li>
            </ul>
          </div>

          {/* Industries Section */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-6 border-b border-secondary/30 pb-2">Industries</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-secondary hover:text-white transition-colors duration-300 flex items-center">
                  <span className="w-1.5 h-1.5 bg-secondary rounded-full mr-2"></span>
                  Financial Services
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary hover:text-white transition-colors duration-300 flex items-center">
                  <span className="w-1.5 h-1.5 bg-secondary rounded-full mr-2"></span>
                  Healthcare
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary hover:text-white transition-colors duration-300 flex items-center">
                  <span className="w-1.5 h-1.5 bg-secondary rounded-full mr-2"></span>
                  Retail & eCommerce
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary hover:text-white transition-colors duration-300 flex items-center">
                  <span className="w-1.5 h-1.5 bg-secondary rounded-full mr-2"></span>
                  Gaming
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary hover:text-white transition-colors duration-300 flex items-center">
                  <span className="w-1.5 h-1.5 bg-secondary rounded-full mr-2"></span>
                  Telecommunications
                </a>
              </li>
            </ul>
          </div>

          {/* Resources Section */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-6 border-b border-secondary/30 pb-2">Resources</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-secondary hover:text-white transition-colors duration-300 flex items-center">
                  <span className="w-1.5 h-1.5 bg-secondary rounded-full mr-2"></span>
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary hover:text-white transition-colors duration-300 flex items-center">
                  <span className="w-1.5 h-1.5 bg-secondary rounded-full mr-2"></span>
                  Developer Hub
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary hover:text-white transition-colors duration-300 flex items-center">
                  <span className="w-1.5 h-1.5 bg-secondary rounded-full mr-2"></span>
                  API Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary hover:text-white transition-colors duration-300 flex items-center">
                  <span className="w-1.5 h-1.5 bg-secondary rounded-full mr-2"></span>
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary hover:text-white transition-colors duration-300 flex items-center">
                  <span className="w-1.5 h-1.5 bg-secondary rounded-full mr-2"></span>
                  Release Notes
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-12 pt-8 border-t border-secondary/30">
          <div className="max-w-md mx-auto md:mx-0">
            <h4 className="text-white text-lg font-semibold mb-3">Stay up to date</h4>
            <p className="text-secondary mb-4">Subscribe to our newsletter for the latest updates and offers.</p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 bg-turnary text-primary rounded-lg focus:outline-none border border-secondary/50 flex-grow"
              />
              <button className="px-4 py-2 bg-white text-primary font-medium rounded-lg hover:bg-secondary transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-12 pt-8 border-t border-secondary/30 flex flex-col md:flex-row justify-between items-center">
          <p className="text-secondary text-sm">
            &copy; {new Date().getFullYear()} TrueDoc. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-secondary hover:text-white text-sm transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="text-secondary hover:text-white text-sm transition-colors duration-300">Terms of Service</a>
            <a href="#" className="text-secondary hover:text-white text-sm transition-colors duration-300">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;