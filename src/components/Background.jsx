import React from "react";

const Background = () => {
  return (
    <div className="absolute inset-0 -z-50 bg-black overflow-hidden">
      <div className="absolute w-[300px] h-[300px] top-[20%] left-[10%] rounded-full bg-purple-900/50 blur-[60px] animate-float"></div>
      <div className="absolute w-[400px] h-[400px] top-[60%] left-[70%] rounded-full bg-purple-900/50 blur-[60px] animate-float animation-delay-2000"></div>
      <div className="absolute w-[200px] h-[200px] top-[30%] left-[50%] rounded-full bg-purple-900/50 blur-[60px] animate-float animation-delay-4000"></div>
    </div>
  );
};

export default Background;
