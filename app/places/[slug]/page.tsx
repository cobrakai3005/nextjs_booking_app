import BookRoom from "@/app/(components)/BookRoom";
import PlaceDetails from "@/app/(components)/PlaceDetails";

import { prisma } from "@/lib/client";

import React from "react";

export default async function Place({ params }: { params: { slug: string } }) {
  const place = await prisma.place.findUnique({ where: { slug: params.slug } });
  //   console.log(place);
  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="flex flex-col md:flex-row gap-14 justify-between flex-wrap">
        <PlaceDetails place={place} />
        <div className=" flex justify-end items-start md:mt-10">
          <BookRoom />
        </div>
      </div>
    </div>
  );
}
