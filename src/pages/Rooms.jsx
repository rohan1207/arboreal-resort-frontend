import React from "react";
import RoomsHero from "../components/RoomsHero";
import RoomsMenu from "../components/RoomsMenu";
import RoomsFeaturesShowcase from "../components/RoomsFeaturesShowcase";
import RoomsCards from "../components/RoomsCards";

const Rooms = () => {
  return (
    <div className="overflow-x-hidden">
      <RoomsHero />
      <RoomsMenu />
      <RoomsFeaturesShowcase />
      <RoomsCards />
    </div>
  );
};

export default Rooms;
