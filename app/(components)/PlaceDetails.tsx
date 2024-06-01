import Image from "next/image";
import React from "react";
import { HiMiniArrowsPointingOut } from "react-icons/hi2";
import { IoMdPeople } from "react-icons/io";

interface propsPlaceDetails {
  id: string;
  createdAt: Date;
  updatedAt?: Date | null;
  title: string;
  slug: string;
  description: string;
  featuredImage: string;
  type: string;
  price: number;
  size: number;
  capicity: number;
}
const PlaceDetails = ({ place }: { place: propsPlaceDetails | null }) => {
  return (
    <div className="flex-1 flex flex-col items-start gap-2 py-10">
      <Image
        alt="title_Image"
        width={1000}
        height={500}
        className="w-full max-w-3xl min-h-[400px] object-cover"
        src={place?.featuredImage || ""}
      />
      <div className="p-3 flex flex-col gap-4 mt-4">
        <div className="flex justify-between">
          <h2 className="text-3xl md:text-4xl text-gray-800">{place?.title}</h2>
          <p className=" text-md flex items-center gap-3">
            {" "}
            <span className="text-3xl font-bold text-[#fb8500]">
              {" "}
              ${place?.price}
            </span>
            / night
          </p>
        </div>
        <div className="text-sm flex items-center gap-4">
          <p className="flex items-center gap-2 ">
            <HiMiniArrowsPointingOut size={23} className="text-[#fb8500]" />{" "}
            {place?.size}ms<sup>2</sup>{" "}
          </p>
          <p className="flex items-center gap-4">
            <IoMdPeople size={23} className="text-[#fb8500] gap-4" />{" "}
            {place?.capicity} guests
          </p>
        </div>

        <div className="text-sm text-gray-600 max-w-3xl">
          {place?.description}
        </div>
      </div>
    </div>
  );
};

export default PlaceDetails;
