import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function Room({ room }: { room: any }) {
  const { title, featuredImage, capacity, price, type, slug, size } = room;

  return (
    <Link
      href={`/places/${slug}`}
      className="flex flex-col justify-center items-start flex-wrap gap-2 cursor-pointer hover:shadow-xl p-3 duration-150 hover:bg-slate-200"
    >
      <Image
        width={400}
        height={400}
        alt="room_preview"
        src={`${featuredImage}`}
      />
      <p className="text-xs bg-gray-100">Capacity - {capacity} person</p>
      <h3 className="text-xl font-semibold text-gray-700">{title}</h3>
      <h4>
        <span className="text-orange-600 text-xl">{price}$</span> /night
      </h4>
    </Link>
  );
}
