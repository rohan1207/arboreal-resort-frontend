import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import Navbar from "./components/Navbar";

import Services from "./pages/Services";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";  
import GalleryPage from "./pages/GalleryPage";
import Availability from "./pages/Availability";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Home />} />
          <Route path="/rooms" element={<Home />} />
          <Route path="/reservation" element={<div>Reservation</div>} />
          <Route path="/gallery" element={<Home />} />
          <Route path="/contact" element={<Home />} />
          <Route path="/services" element={<Home />} />
          <Route path="/availability" element={<Availability />} />
        </Routes>
       
      </BrowserRouter>
    </>
  );
};

export default App;
