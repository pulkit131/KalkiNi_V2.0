import React from "react";
import image from "../icons/founders/image.png";

const founders = [
  {
    name: "Ved Raut",
    role: "Co-founder, Chairman, Executive Director",
    image: image,
  },
  {
    name: "Ujjwal Agarwal",
    role: "Co-founder, Chairman, Executive Director",
    image: image,
  },
  {
    name: "Shreyansh",
    role: "Co-founder, Chairman, Executive Director",
    image: image,
  },
];

export default function FoundersSection() {
  return (
    <section className="w-full bg-black bg-gradient-to-t from-black/20 to-black/20 border border-black font-['Prompt'] py-10">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl text-white leading-tight">
            Still have questions?
          </h2>
        </div>

        {/* Input and Send Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-12">
          <input
            className="w-full sm:w-[400px] h-[48px] bg-black border border-white rounded-[8px] px-4 text-white placeholder:text-white/50 font-normal outline-none focus:text-white text-base sm:text-lg"
            placeholder="Type Something..."
          />
          <button className="w-full sm:w-[165px] h-[48px] bg-white/15 rounded-[48px] flex items-center justify-center font-['Radio_Canada'] font-bold text-base sm:text-lg text-white transition hover:bg-white/25">
            Send
          </button>
        </div>

        {/* Founders Title */}
        <div className="mb-6">
          <h3 className="font-bold text-2xl sm:text-3xl md:text-4xl text-white">
            Founders
          </h3>
        </div>

        {/* Divider Line */}
        <div className="w-full border-t-2 border-[#403D3D] mb-8" />

        {/* Founders Cards */}
        <div className="flex flex-col md:flex-row justify-center gap-8">
          {founders.map((founder) => (
            <div
              key={founder.name}
              className="flex flex-col items-center bg-black/30 rounded-xl p-4 w-full max-w-xs mx-auto"
            >
              <div
                className="w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 bg-cover bg-center rounded-[15px] mb-4"
                style={{
                  backgroundImage: `url(${founder.image})`,
                }}
              />
              <div className="font-bold text-lg sm:text-2xl md:text-3xl text-[#FFF9F9] text-center">
                {founder.name}
              </div>
              <div className="font-medium text-base sm:text-lg md:text-xl text-[#FFFAFA] text-center mt-2">
                {founder.role}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
