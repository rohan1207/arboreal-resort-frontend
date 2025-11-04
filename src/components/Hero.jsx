import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiCalendar, FiUser } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    checkIn: "",
    checkOut: "",
    rooms: 1,
    adults: 2,
    children: 0
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form data
    if (!formData.checkIn || !formData.checkOut) {
      alert("Please select check-in and check-out dates");
      return;
    }

    setLoading(true);

    try {
      // Redirect to availability page with search params
      const searchParams = new URLSearchParams({
        checkIn: formData.checkIn,
        checkOut: formData.checkOut,
        rooms: formData.rooms,
        adults: formData.adults,
        children: formData.children,
        name: formData.name
      });

      navigate(`/availability?${searchParams.toString()}`);
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('./hero.webp')`,
        }}
      />

      {/* Gradient Overlay - lighter to show more of the image */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30" />

      {/* Content Container */}
      <div className="relative z-10 h-full flex flex-col px-8 md:px-16 lg:px-24 pt-32">
        {/* Text Content - Left Aligned */}
        <div className="text-white max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-sm md:text-base tracking-wider mb-4 font-light"
          >
            The Arboreal Resort
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl font-serif leading-tight"
          >
            Find You Comfort
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl font-serif"
          >
            Rooms
          </motion.h2>
        </div>

        {/* Booking Form - Bottom Center */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="mt-auto mb-12 md:mb-16 lg:mb-20 max-w-5xl mx-auto w-full"
        >
          <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden">
            <div className="flex flex-col md:flex-row items-stretch">
              {/* Name Field */}
              <div className="flex-1 p-5 md:p-6 flex items-center gap-3 border-b md:border-b-0 md:border-r border-gray-200">
                <FiUser className="text-gray-600 text-lg md:text-xl flex-shrink-0" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Name"
                  className="w-full text-gray-800 placeholder-gray-500 text-sm md:text-base focus:outline-none bg-transparent"
                />
              </div>

              {/* Check In */}
              <div className="flex-1 p-5 md:p-6 border-b md:border-b-0 md:border-r border-gray-200">
                <div className="flex items-center gap-3">
                  <FiCalendar className="text-gray-600 text-lg md:text-xl flex-shrink-0" />
                  <div className="flex-1">
                    <label className="block text-xs text-gray-600 mb-1 font-medium">
                      Check In
                    </label>
                    <input
                      type="date"
                      name="checkIn"
                      value={formData.checkIn}
                      onChange={handleInputChange}
                      required
                      className="w-full text-gray-800 text-sm focus:outline-none bg-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* Check Out */}
              <div className="flex-1 p-5 md:p-6 border-b md:border-b-0 md:border-r border-gray-200">
                <div className="flex items-center gap-3">
                  <FiCalendar className="text-gray-600 text-lg md:text-xl flex-shrink-0" />
                  <div className="flex-1">
                    <label className="block text-xs text-gray-600 mb-1 font-medium">
                      Check Out
                    </label>
                    <input
                      type="date"
                      name="checkOut"
                      value={formData.checkOut}
                      onChange={handleInputChange}
                      required
                      className="w-full text-gray-800 text-sm focus:outline-none bg-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* Rooms for */}
              <div className="flex-1 p-5 md:p-6 border-b md:border-b-0 md:border-r border-gray-200">
                <div className="flex items-center gap-3">
                  <FiUser className="text-gray-600 text-lg md:text-xl flex-shrink-0" />
                  <div className="flex-1">
                    <label className="block text-xs text-gray-600 mb-1 font-medium">
                      Rooms for
                    </label>
                    <div className="flex gap-2">
                      <select
                        name="rooms"
                        value={formData.rooms}
                        onChange={handleInputChange}
                        className="flex-1 text-gray-800 text-sm focus:outline-none bg-transparent"
                      >
                        <option value="1">1 room</option>
                        <option value="2">2 rooms</option>
                        <option value="3">3 rooms</option>
                        <option value="4">4 rooms</option>
                      </select>
                      <select
                        name="adults"
                        value={formData.adults}
                        onChange={handleInputChange}
                        className="flex-1 text-gray-800 text-sm focus:outline-none bg-transparent"
                      >
                        <option value="1">1 guest</option>
                        <option value="2">2 guests</option>
                        <option value="3">3 guests</option>
                        <option value="4">4 guests</option>
                        <option value="5">5+ guests</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              {/* Check Availability Button */}
              <div className="flex items-center justify-center p-5 md:p-6 bg-gray-50">
                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: loading ? 1 : 1.03 }}
                  whileTap={{ scale: loading ? 1 : 0.97 }}
                  className="px-6 md:px-8 py-3 md:py-4 bg-gray-800 text-white rounded-lg font-medium text-sm tracking-wide transition-all duration-300 hover:bg-gray-900 whitespace-nowrap shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Searching..." : "Check Availability"}
                </motion.button>
              </div>
            </div>
          </div>
        </motion.form>
      </div>
    </div>
  );
};

export default Hero;
