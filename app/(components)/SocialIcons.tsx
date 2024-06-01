import React from "react";
import { CiYoutube } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

export const SocialIcons = ({ size }: { size: number }) => {
  return (
    <div className="hidden w-[140px]  md:flex items-center justify-between  ml-3 py-2  text-white cursor-pointer">
      <CiYoutube
        size={size}
        className="bg-[#fb8500] rounded-full p-1 hover:-translate-y-3 transition duration-200"
      />
      <FaFacebook
        size={size}
        className="bg-[#fb8500] rounded-full p-1 hover:-translate-y-3 transition duration-200"
      />
      <FaInstagram
        size={size}
        className="bg-[#fb8500] rounded-full p-1 hover:-translate-y-3 transition duration-200"
      />
      <FaTwitter
        size={size}
        className="bg-[#fb8500] rounded-full p-1 hover:-translate-y-3 transition duration-200"
      />
    </div>
  );
};
