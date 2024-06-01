import React, { useState } from "react";
import Room from "./Room";
import Filter from "./Filter";
import { prisma } from "@/lib/client";

export default async function Rooms() {
  const rooms = await prisma.place.findMany();

  return (
    <>
      <Filter />
      <div className="py-16 flex justify-center items-center  gap-3">
        {rooms && rooms.map((room: any) => <Room key={room.id} room={room} />)}
      </div>
    </>
  );
}
