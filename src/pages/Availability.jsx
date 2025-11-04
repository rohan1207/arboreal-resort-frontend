import React, { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5001";

const Availability = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [rooms, setRooms] = useState([]);
  const [error, setError] = useState(null);
  const [searchData, setSearchData] = useState({
    checkIn: searchParams.get("checkIn"),
    checkOut: searchParams.get("checkOut"),
    rooms: searchParams.get("rooms"),
    adults: searchParams.get("adults"),
    children: searchParams.get("children") || 0,
    name: searchParams.get("name"),
  });

  useEffect(() => {
    if (!searchData.checkIn || !searchData.checkOut) {
      navigate("/");
      return;
    }
    searchAvailability();
  }, []);

  const searchAvailability = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(`${API_BASE_URL}/api/booking/search`, {
        checkIn: searchData.checkIn,
        checkOut: searchData.checkOut,
        rooms: parseInt(searchData.rooms),
        adults: parseInt(searchData.adults),
        children: parseInt(searchData.children),
      });

      if (response.data.success) {
        // Ezee API returns the room data directly as an array
        const roomData = response.data.data || [];
        setRooms(roomData);
      } else {
        setError("No rooms available for the selected dates");
      }
    } catch (err) {
      console.error("Search error:", err);
      setError(
        err.response?.data?.message || "Failed to fetch available rooms. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  const calculateNights = () => {
    const checkIn = new Date(searchData.checkIn);
    const checkOut = new Date(searchData.checkOut);
    const diffTime = Math.abs(checkOut - checkIn);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-amber-50/20 to-slate-100">
        <div className="text-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-20 h-20 border-4 border-amber-600/30 border-t-amber-600 rounded-full mx-auto mb-6"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-gray-700 text-xl font-light tracking-wide"
          >
            Discovering your perfect sanctuary...
          </motion.p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-amber-50/20 to-slate-100 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-10 text-center border border-amber-100"
        >
          <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h2 className="text-3xl font-light text-gray-800 mb-4 tracking-wide">We Apologize</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">{error}</p>
          <button
            onClick={() => navigate("/")}
            className="px-8 py-3 bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-full font-medium hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
          >
            Return Home
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-amber-50/20 to-slate-100 pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Elegant Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl lg:text-5xl font-light text-gray-800 mb-3 tracking-wide">
            Your Perfect Retreat Awaits
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-600 to-transparent mx-auto"></div>
        </motion.div>

        {/* Search Summary Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-amber-100 p-8 mb-12"
        >
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="flex-1">
              <h2 className="text-2xl font-light text-gray-800 mb-4 tracking-wide">
                Your Selection
              </h2>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="flex items-center gap-3 bg-amber-50 rounded-xl p-3">
                  <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium">Check In</p>
                    <p className="text-sm font-semibold text-gray-800">{formatDate(searchData.checkIn)}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-amber-50 rounded-xl p-3">
                  <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium">Check Out</p>
                    <p className="text-sm font-semibold text-gray-800">{formatDate(searchData.checkOut)}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-amber-50 rounded-xl p-3">
                  <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium">Guests</p>
                    <p className="text-sm font-semibold text-gray-800">
                      {searchData.adults} Adults{searchData.children > 0 && `, ${searchData.children} Children`}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-amber-50 rounded-xl p-3">
                  <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium">Duration</p>
                    <p className="text-sm font-semibold text-gray-800">{calculateNights()} Night{calculateNights() > 1 ? 's' : ''}</p>
                  </div>
                </div>
              </div>
            </div>
            <button
              onClick={() => navigate("/")}
              className="px-6 py-3 border-2 border-amber-600 text-amber-600 rounded-full hover:bg-amber-600 hover:text-white transition-all duration-300 font-medium"
            >
              Modify Search
            </button>
          </div>
        </motion.div>

        {/* Room Results */}
        {rooms.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-amber-100 p-16 text-center"
          >
            <div className="w-24 h-24 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-2xl font-light text-gray-800 mb-3 tracking-wide">
              No Accommodations Available
            </h3>
            <p className="text-gray-600 leading-relaxed max-w-md mx-auto">
              We apologize, but there are no rooms available for your selected dates. 
              Please consider adjusting your travel dates.
            </p>
          </motion.div>
        ) : (
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center mb-8"
            >
              <p className="text-gray-600 text-lg">
                We found <span className="font-semibold text-amber-600">{rooms.length}</span> exquisite accommodation{rooms.length > 1 ? 's' : ''} for your stay
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {rooms.map((room, index) => (
                <motion.div
                  key={room.roomrateunkid || index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 border border-amber-100"
                >
                  {/* Image */}
                  <div className="relative h-72 overflow-hidden">
                    {room.room_main_image ? (
                      <motion.img
                        src={room.room_main_image}
                        alt={room.Room_Name || "Room"}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center">
                        <svg className="w-20 h-20 text-amber-600/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                    )}
                    {room.deals && (
                      <div className="absolute top-4 right-4">
                        <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                          � Special Offer
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <div className="mb-4">
                      <h3 className="text-2xl font-light text-gray-800 mb-2 tracking-wide">
                        {room.Room_Name || room.Roomtype_Name}
                      </h3>
                      <p className="text-gray-600 leading-relaxed line-clamp-2">
                        {room.Room_Description || "Indulge in comfort with premium amenities and elegant design"}
                      </p>
                    </div>

                    {/* Room Features */}
                    <div className="grid grid-cols-2 gap-4 mb-6 pb-6 border-b border-gray-100">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center">
                          <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Max Capacity</p>
                          <p className="text-sm font-medium text-gray-800">{room.Room_Max_adult} Adults, {room.Room_Max_child} Children</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center">
                          <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Availability</p>
                          <p className="text-sm font-medium text-gray-800">{room.min_ava_rooms} Room{room.min_ava_rooms > 1 ? 's' : ''} Left</p>
                        </div>
                      </div>
                    </div>

                    {room.deals && (
                      <div className="mb-6">
                        <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                          <p className="text-green-800 text-sm font-medium">
                            ✨ {room.deals}
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Pricing */}
                    <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 mb-6">
                      <div className="flex items-end justify-between">
                        <div>
                          <p className="text-sm text-gray-600 mb-1">Starting from</p>
                          <div className="flex items-baseline gap-2">
                            <span className="text-4xl font-light text-gray-800">
                              {room.currency_sign}{room.room_rates_info?.avg_per_night_after_discount?.toLocaleString()}
                            </span>
                            <span className="text-gray-600">/ night</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-gray-600 mb-1">Total Stay</p>
                          <p className="text-2xl font-semibold text-amber-600">
                            {room.currency_sign}{room.room_rates_info?.totalprice_inclusive_all?.toLocaleString()}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Book Button */}
                    <button 
                      onClick={() => window.open(room.BookingEngineURL, '_blank')}
                      className="w-full bg-gradient-to-r from-amber-600 to-amber-700 text-white py-4 rounded-xl font-medium hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-lg"
                    >
                      Reserve This Room
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Availability;
