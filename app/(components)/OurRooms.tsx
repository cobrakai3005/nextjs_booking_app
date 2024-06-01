import Image from "next/image";
import React from "react";
import OurRoomsHeading from "./OurRoomsHeading";

import Rooms from "./Rooms";
import Filter from "./Filter";

export default async function OurRooms() {
  return (
    <div className="py-24 flex flex-col gap-12 max-w-6xl mx-auto  justify-center items-center">
      <OurRoomsHeading />
      <Rooms />
    </div>
  );
}
