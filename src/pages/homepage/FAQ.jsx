import React, { useRef, useState } from "react";
import image from "../icons/faq/image.png";

// Example FAQ data
const faqs = [
  {
    q: "How does the AI detect violence in surveillance footage?",
    a: "Our system uses advanced deep learning models to analyse patterns and behaviours in video footage. Can identify potential violent and malignant activities.",
  },
  {
    q: "How does the system notify us of potential violence?",
    a: "The system sends real-time alerts via your preferred channels as soon as suspicious activity is detected.",
  },
  {
    q: "Can the system integrate with my existing CCTV setup?",
    a: "Yes, our solution is compatible with most modern CCTV systems and can be integrated with minimal setup.",
  },
  {
    q: "How accurate is the detection?",
    a: "Our AI models are trained on diverse datasets and achieve high accuracy, but no system is 100% foolproof.",
  },
  {
    q: "What kind of footage is flagged for review?",
    a: "Any footage that matches violent or abnormal behavior patterns is flagged for your review.",
  },
  {
    q: "Is the system capable of 24/7 monitoring?",
    a: "Absolutely. The system is designed for continuous, round-the-clock monitoring.",
  },
  {
    q: "Is it a one-time payment?",
    a: "We offer both one-time and subscription-based pricing models.",
  },
  {
    q: "How does billing works?",
    a: "Billing can be monthly or annual, with detailed invoices and transparent pricing.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const answerRefs = useRef([]);

  return (
    <div className="relative min-h-screen w-full bg-black bg-gradient-to-t from-black/20 to-black/20 border border-black font-['Prompt'] px-4 py-8">
      {/* Top Section */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start mb-8">
        {/* Left: Title and Search */}
        <div className="flex-1 min-w-[320px]">
          <h2 className="text-white font-bold text-[2.25rem] leading-[54px] mb-4 font-['Prompt']">
            Top questions about KalkiNI
          </h2>
          <div className="w-full max-w-[500px] h-[70px] bg-[#030303] border-4 border-[#555151] rounded-[14px] shadow-inner flex items-center px-6 mb-6">
            <input
              type="text"
              placeholder="Search"
              className="w-full bg-transparent outline-none text-white text-xl font-['Cascadia_Mono'] placeholder:text-[#FFF0F0] placeholder:opacity-70"
              style={{ fontWeight: 350 }}
            />
          </div>
        </div>
        {/* Right: QR and Scan Here */}
        <div className="flex flex-col items-center mt-8 md:mt-0 md:ml-8">
          <div className="flex flex-row items-center gap-4">
            <div>
              <div className="text-white font-bold text-3xl font-['Prompt'] leading-[54px] mb-2" style={{ color: "#FFF7F7" }}>
                Scan Here
              </div>
              <div className="text-white font-['Poppins'] text-base font-medium leading-6 max-w-[294px]">
                Save 100s of man hours monitoring and detect crucial events.<br />
                Detect events. Every day. Automatically.
              </div>
            </div>
            <img
              src = {image}
              alt="QR Code"
              className="w-[134px] h-[134px] rounded-lg object-cover"
            />
          </div>
        </div>
      </div>

      {/* FAQ Title and Description */}
      <div className="max-w-2xl mx-auto text-center mb-8">
        <h3 className="text-white font-bold text-[2.25rem] leading-[54px] font-['Prompt']">
          Frequently asked questions
        </h3>
        <p className="text-white font-['Poppins'] text-base font-medium leading-6 mt-2">
          Everything you need to know about the product, billing and how it works. Can't find an answer? Please chat to our friendly team.
        </p>
      </div>

      {/* FAQ Accordion */}
      <div className="max-w-2xl mx-auto flex flex-col gap-4">
        {faqs.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={item.q}
              className={`rounded-lg transition-all duration-300 ${
                isOpen ? "bg-[#222] opacity-100" : "bg-[#222] opacity-80"
              }`}
              style={{
                background: "rgba(217,217,217,0.17)",
                borderRadius: "8px",
                opacity: isOpen ? 1 : 0.55,
              }}
            >
              {/* Question Row (fixed height) */}
              <button
                className={`w-full flex justify-between items-center px-6 py-4 text-left focus:outline-none transition-all duration-200 min-h-[64px] ${
                  isOpen
                    ? "font-bold text-white text-[1.5rem] font-['Prompt']"
                    : "font-medium text-white text-[1.25rem] font-['Prompt']"
                }`}
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                style={{ minHeight: "64px" }}
              >
                <span>{item.q}</span>
                <svg
                  className={`w-7 h-7 transition-transform duration-200 ${
                    isOpen ? "transform rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="white"
                  strokeWidth={3}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {/* Animated Answer (expands below, question box remains fixed) */}
              <div
                ref={el => (answerRefs.current[idx] = el)}
                className="overflow-hidden transition-all duration-500 ease-in-out"
                style={{
                  maxHeight: isOpen
                    ? answerRefs.current[idx]?.scrollHeight + "px"
                    : "0px",
                  opacity: isOpen ? 1 : 0,
                }}
              >
                <div className="border-t border-gray-600 mx-6" />
                <div className="px-6 py-4 text-[#E3E3E3] text-lg font-['Radio_Canada'] font-medium leading-7">
                  {item.a}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
