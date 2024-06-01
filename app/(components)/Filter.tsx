import React from "react";

export default function Filter() {
  return (
    <div className="w-full flex justify-center items-center gap-5 ">
      <button
        className={`py-2 px-3 rounded bg-[#fb8500] text-white tracking-wider hover:bg-gray-700/80`}
      >
        All
      </button>
      <button
        className={`py-2 px-3 rounded bg-[#fb8500] text-white tracking-wider hover:bg-gray-700 `}
      >
        Single
      </button>
      <button
        className={`py-2 px-3 rounded bg-[#fb8500] text-white tracking-wider hover:bg-gray-700/50`}
      >
        Double
      </button>
    </div>
  );
}
