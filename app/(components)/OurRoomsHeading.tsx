import Image from "next/image";
import React from "react";

export default function OurRoomsHeading() {
  return (
    <div className="ourRooms w-[200px] h-10 flex flex-col justify-center items-center">
      <Image
        width={14}
        height={14}
        className="w-full h-full"
        src={"/assets/heading-icon.svg"}
        alt="hvbjn"
      />
      <h2 className="w-[300px] text-center mt-6 text-5xl tracking-wider text-gray-800">
        Our Rooms
      </h2>
    </div>
  );
}
