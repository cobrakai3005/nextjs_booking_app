import React from "react";

export function HeroSection() {
  return (
    <div className="hero min-h-[500px] flex justify-center items-center">
      <div className="max-w-4xl mx-auto py-16 flex flex-col items-center justify-center gap-3">
        <div className="text-3xl md:text-5xl text-white text-center uppercase tracking-wider">
          <h1 className="my-4">Experience hospitality</h1>
          <h2 className="my-4">At its finest</h2>
        </div>

        <button className="bg-[#fb8500] text-white rounded py-3 px-4 uppercase hover:bg-[#03045e] hover:-translate-y-4 duration-200">
          Discover more
        </button>
      </div>
    </div>
  );
}
