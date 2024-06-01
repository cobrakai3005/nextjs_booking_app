import Image from "next/image";
import React from "react";
import { SocialIcons } from "./SocialIcons";

export const Footer = () => {
  return (
    <div className="py-28 px-16 w-full  bg-[#03045e] ">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <Image
          width={220}
          height={150}
          src={"/assets/logo-white.svg"}
          alt="Logo"
        />
        <SocialIcons size={32} />
      </div>
    </div>
  );
};
