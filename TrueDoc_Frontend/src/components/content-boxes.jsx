import React from 'react';
import { FiShield, FiClock, FiCheck, FiLock } from 'react-icons/fi';
import Atropos from 'atropos/react';
import "atropos/css";

const ContentBoxes = () => {
  const features = [
    {
      title: "Military-Grade Security",
      description: "Your documents are protected with encryption and multi-factor authentication.",
      icon: <FiShield className="w-8 h-8 text-primary" />,
      bgColor: "bg-secondary"
    },
    {
      title: "Instant Verification",
      description: "Get real-time validation of your documents with our AI-powered verification system.",
      icon: <FiClock className="w-8 h-8 text-primary" />,
      bgColor: "bg-secondary"
    },
    {
      title: "Tamper-Proof Records",
      description: "Immutable records ensure your documents can never be altered or forged.",
      icon: <FiLock className="w-8 h-8 text-primary" />,
      bgColor: "bg-secondary"
    },
    {
      title: "Universal Acceptance",
      description: "Verified documents accepted by governments, universities, and corporations worldwide.",
      icon: <FiCheck className="w-8 h-8 text-primary" />,
      bgColor: "bg-secondary"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {features.map((feature, index) => (
        <Atropos
          key={index}
          className="rounded-xl"
          activeOffset={20}
          shadow={false}
          highlight={false}
        >
          <div className={`${feature.bgColor} border border-primary/10 rounded-xl p-6 h-full transition-all duration-300 hover:shadow-lg hover:border-primary/30`}>
            <div className="flex flex-col h-full">
              <div className="mb-4 flex items-start">
                <div className="p-3 rounded-lg bg-turnary mr-4 shadow-sm border border-primary/10">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-primary mt-2">{feature.title}</h3>
              </div>
              <p className="text-gray-600 mb-6 flex-grow">{feature.description}</p>
              <div className="mt-auto">
                <button className="text-primary text-sm font-medium hover:text-primary/80 transition-colors flex items-center">
                  Learn more
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </Atropos>
      ))}
    </div>
  );
};

export default ContentBoxes;