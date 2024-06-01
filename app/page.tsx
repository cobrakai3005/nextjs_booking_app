import Image from "next/image";
import { HeroSection } from "./(components)/HeroSection";
import OurRooms from "./(components)/OurRooms";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <OurRooms />
    </div>
  );
}
