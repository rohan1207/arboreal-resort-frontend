import React from "react";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
// import EventsShowcase from "../components/EventsShowcase";
// import MiniAboutUs from "../components/MiniAboutUs";
import FeatureBanner from "../components/FeatureBanner";
// import BentoGallery from "../components/BentoGallery";
// import RoomInfo from "../components/RoomInfo";


const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <FeatureBanner />
      <Stats />
      {/* <EventsShowcase />
      <RoomInfo />
      <BentoGallery />
      <MiniAboutUs /> */}
    </div>
  );
};

export default Home;
