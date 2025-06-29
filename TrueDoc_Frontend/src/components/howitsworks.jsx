import React from "react";
import { FaUpload, FaCheckCircle, FaSearch, FaShieldAlt } from "react-icons/fa";

const HowItsWorks = () => {
  const steps = [
    {
      icon: <FaUpload />,
      title: "Upload",
      description: "Securely upload your document through our encrypted portal system.",
    },
    {
      icon: <FaSearch />,
      title: "Verification",
      description: "Our advanced technology authenticates and validates your document.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Security",
      description: "Document is encrypted and secured using industry-standard protocols.",
    },
    {
      icon: <FaCheckCircle />,
      title: "Verified",
      description: "Receive tamper-proof verification with digital certification.",
    }
  ];

  return (
    <div className="w-full">
      {/* Steps container */}
      <div className="relative">
        {/* Line connector for desktop */}
        <div className="hidden md:block absolute top-24 left-1/2 right-0 w-3/4 h-1 transform -translate-x-1/2"></div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Mobile step with left alignment */}
              <div className="md:hidden flex items-start space-x-4 bg-turnary p-5 rounded-lg shadow-sm border border-secondary">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  {step.icon}
                </div>
                <div>
                  <div className="absolute -left-1 -top-1 bg-primary text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-primary">{step.title}</h3>
                  <p className="text-gray-600 text-sm mt-1">{step.description}</p>
                </div>
              </div>

              {/* Desktop step with card layout */}
              <div className="hidden md:block">
                <div className="flex flex-col items-center">
                  {/* Circle with icon */}
                  <div className="relative z-10 w-16 h-16 bg-turnary rounded-full flex items-center justify-center text-primary text-2xl shadow-md mb-4 border-2 border-secondary">
                    {step.icon}
                  </div>

                  {/* Step number badge */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold z-20">
                    {index + 1}
                  </div>

                  {/* Content card */}
                  <div className="bg-turnary border border-secondary rounded-lg p-5 text-center h-full w-full shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-semibold text-primary mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Additional info */}
      <div className="mt-12 max-w-2xl mx-auto text-center bg-secondary/30 p-6 rounded-lg border border-secondary">
        <h4 className="text-lg font-medium text-primary mb-3">Why Choose Our Document Verification?</h4>
        <p className="text-gray-600">
          Our document verification provides a secure and reliable system that ensures the highest level of trust and security for your most important documents.
        </p>
        <button className="mt-4 px-6 py-2 bg-primary text-white rounded-lg hover:bg-opacity-90 transition-all text-sm">
          Learn More About Our Process
        </button>
      </div>
    </div>
  );
};

export default HowItsWorks;