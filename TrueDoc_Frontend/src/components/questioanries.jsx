import React, { useState } from "react";
import { FaPlus, FaMinus, FaQuestionCircle, FaHeadset } from "react-icons/fa";

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");

    const handleToggle = (index) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    const questions = [
        {
            title: "Why is document verification important?",
            content:
                "Document verification is crucial for preventing identity fraud and ensuring the authenticity of government-issued documents. It helps verify the user's identity and address, providing an added layer of security, especially in sectors like banking and finance. It also helps protect against identity theft by ensuring that personal details match the provided documentation.",
            tags: ["security", "identity", "fraud"]
        },
        {
            title: "What types of documents can be verified?",
            content:
                "We support verification of various types of documents, including government-issued IDs (e.g., passports, national IDs, driver's licenses), utility bills for address verification, and financial documents like bank statements or tax forms.",
            tags: ["documents", "types", "ids"]
        },
        {
            title: "How does the document verification process work?",
            content:
                "Our process involves scanning the provided document, validating its authenticity using advanced algorithms and AI, and then cross-referencing it with public databases or other sources of truth. The verification process usually takes just a few minutes.",
            tags: ["process", "verification", "ai"]
        },
        {
            title: "Is document verification secure?",
            content:
                "Yes, our document verification system employs encryption and complies with data protection regulations, ensuring that all sensitive information is handled securely. Your documents are processed using industry-standard security protocols.",
            tags: ["security", "encryption", "privacy"]
        },
        {
            title: "Can I use this service for international document verification?",
            content:
                "Yes, our platform supports the verification of international documents, including passports and national IDs from various countries, ensuring that the verification process is seamless for users across the globe.",
            tags: ["international", "global", "passport"]
        },
    ];

    const filteredQuestions = questions.filter(
        question =>
            question.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            question.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
            question.tags.some(tag => tag.includes(searchTerm.toLowerCase()))
    );

    return (
        <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary to-turnary">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <div className="inline-block p-3 bg-secondary rounded-full mb-4">
                        <FaQuestionCircle className="h-8 w-8 text-primary" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Find answers to common questions about our document verification services.
                    </p>
                </div>

                {/* Search bar */}
                <div className="relative mb-8 max-w-lg mx-auto">
                    <input
                        type="text"
                        placeholder="Search questions..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full py-3 px-4 pl-12 bg-white border border-secondary rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                        <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                </div>

                {/* FAQ accordion */}
                <div className="space-y-4">
                    {filteredQuestions.length > 0 ? (
                        filteredQuestions.map((item, index) => (
                            <div
                                key={index}
                                className="border border-secondary rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg"
                            >
                                <button
                                    onClick={() => handleToggle(index)}
                                    className={`w-full flex justify-between items-center p-6 text-left focus:outline-none transition-all duration-300 ${openIndex === index
                                        ? 'bg-primary text-white'
                                        : 'bg-turnary text-gray-900 hover:bg-secondary'
                                        }`}
                                    aria-expanded={openIndex === index}
                                >
                                    <h3 className="text-lg font-semibold">
                                        {item.title}
                                    </h3>
                                    <span className={`ml-4 flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'text-white transform rotate-180' : 'text-primary'
                                        }`}>
                                        {openIndex === index ? (
                                            <FaMinus className="h-5 w-5" />
                                        ) : (
                                            <FaPlus className="h-5 w-5" />
                                        )}
                                    </span>
                                </button>

                                <div
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96' : 'max-h-0'
                                        }`}
                                >
                                    <div className="px-6 py-6 bg-white text-gray-700">
                                        <p className="leading-relaxed">{item.content}</p>

                                        {/* Tags */}
                                        <div className="mt-4 flex flex-wrap gap-2">
                                            {item.tags.map((tag, tagIndex) => (
                                                <span
                                                    key={tagIndex}
                                                    className="px-3 py-1 bg-secondary text-primary text-xs font-medium rounded-full"
                                                >
                                                    #{tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="text-center py-8 px-4 bg-white rounded-xl border border-secondary">
                            <p className="text-gray-500 mb-2">No questions found matching "{searchTerm}"</p>
                            <button
                                onClick={() => setSearchTerm("")}
                                className="text-primary hover:underline font-medium"
                            >
                                Clear search
                            </button>
                        </div>
                    )}
                </div>

                {/* Contact support card */}
                <div className="mt-12 bg-white p-8 rounded-xl shadow-md border border-secondary flex flex-col md:flex-row items-center justify-between">
                    <div className="mb-6 md:mb-0 md:mr-6">
                        <h3 className="text-xl font-semibold text-primary mb-2">Still have questions?</h3>
                        <p className="text-gray-600">Our support team is here to help you with any questions you may have.</p>
                    </div>
                    <button className="flex items-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-opacity-90 transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-lg">
                        <FaHeadset className="mr-2" />
                        Contact Support
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;