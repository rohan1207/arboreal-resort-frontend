import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiUsers, FiHeart, FiPhone } from 'react-icons/fi';

// Animation variants for sections
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut', staggerChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// Main Component
const AboutUs = () => {
  return (
    <div className="bg-[#FDFDFD] text-gray-800 font-sans">
      <HeroSection />
      <PhilosophySection />
      <TeamSection />
      <CraftsmanshipSection />
      <CtaSection />
    </div>
  );
};

// Hero Section
const HeroSection = () => (
  <section className="relative h-screen flex items-center overflow-hidden">
    <div className="absolute inset-0">
      <img
        src="/swaranjali5.png"
        alt="Luxury Event Backdrop"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
    </div>
    <div className="relative z-10 w-full px-4 sm:px-8 md:px-16 lg:px-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
        className="max-w-3xl"
      >
        <h1 className="text-3xl sm:text-4xl md:text-7xl lg:text-8xl font-serif font-light text-white leading-tight tracking-tight">
          Crafting Timeless Moments
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-white/90 font-light leading-relaxed max-w-xl mt-4 sm:mt-6">
          At Swaranjali, we believe every event is a unique story waiting to be told. Our passion is to bring your vision to life with elegance, precision, and artistry.
        </p>
      </motion.div>
    </div>
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden sm:block">
        <div className="w-px h-16 bg-white/50"></div>
    </div>
  </section>
);

// Philosophy Section
const PhilosophySection = () => (
  <motion.section
    className="py-16 sm:py-20 md:py-24 px-4 sm:px-8 md:px-16 lg:px-24"
    variants={sectionVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
  >
    <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
      <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl md:text-5xl font-serif font-light mb-4">Our Philosophy</motion.h2>
      <motion.p variants={itemVariants} className="text-base sm:text-lg text-gray-600">
        We are built on three core pillars: bespoke creativity, meticulous execution, and heartfelt service.
      </motion.p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 text-center">
      <motion.div variants={itemVariants}>
        <FiAward className="mx-auto text-3xl sm:text-4xl text-yellow-600 mb-3 sm:mb-4" />
        <h3 className="text-xl sm:text-2xl font-semibold mb-2">Excellence</h3>
        <p className="text-sm sm:text-base text-gray-600">From the grandest gestures to the smallest details, we pursue perfection in everything we do.</p>
      </motion.div>
      <motion.div variants={itemVariants}>
        <FiHeart className="mx-auto text-3xl sm:text-4xl text-yellow-600 mb-3 sm:mb-4" />
        <h3 className="text-xl sm:text-2xl font-semibold mb-2">Passion</h3>
        <p className="text-sm sm:text-base text-gray-600">Our work is our passion. We pour our hearts into creating unforgettable experiences.</p>
      </motion.div>
      <motion.div variants={itemVariants}>
        <FiUsers className="mx-auto text-3xl sm:text-4xl text-yellow-600 mb-3 sm:mb-4" />
        <h3 className="text-xl sm:text-2xl font-semibold mb-2">Partnership</h3>
        <p className="text-sm sm:text-base text-gray-600">We work alongside you as trusted partners, ensuring your vision is at the core of our creation.</p>
      </motion.div>
    </div>
  </motion.section>
);

// Team Section
const TeamSection = () => (
    <motion.section 
        className="bg-gray-50 py-16 sm:py-20 md:py-24 px-4 sm:px-8 md:px-16 lg:px-24"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
    >
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl md:text-5xl font-serif font-light mb-4">Meet the Artisans</motion.h2>
            <motion.p variants={itemVariants} className="text-base sm:text-lg text-gray-600">
                The dedicated team of creators and visionaries behind Swaranjali.
            </motion.p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {[
                { name: 'Rohan Sharma', role: 'Founder & Creative Director', img: '/user.jpeg' },
                { name: 'Priya Singh', role: 'Lead Event Planner', img: '/user.jpeg' },
                { name: 'Amit Patel', role: 'Head of Production', img: '/user.jpeg' },
                { name: 'Anjali Mehta', role: 'Client Relations Manager', img: '/user.jpeg' },
            ].map((member, index) => (
                <motion.div key={index} variants={itemVariants} className="text-center group">
                    <div className="relative overflow-hidden rounded-md mb-3 sm:mb-4">
                        <img 
                            src={member.img} 
                            alt={member.name} 
                            className="w-full h-48 sm:h-64 md:h-72 lg:h-80 object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out" 
                        />
                    </div>
                    <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold leading-tight">{member.name}</h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-500 mt-1">{member.role}</p>
                </motion.div>
            ))}
        </div>
    </motion.section>
);

// Craftsmanship Section
const CraftsmanshipSection = () => (
    <motion.section 
        className="py-16 sm:py-20 md:py-24 px-4 sm:px-8 md:px-16 lg:px-24 flex flex-col lg:flex-row items-center gap-8 sm:gap-12 md:gap-16"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
    >
        <motion.div variants={itemVariants} className="lg:w-1/2">
            <img src="/swaranjali11.png" alt="Crafting an event" className="rounded-md shadow-xl w-full" />
        </motion.div>
        <motion.div variants={itemVariants} className="lg:w-1/2">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light mb-4 sm:mb-6">Our Craftsmanship</h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-3 sm:mb-4">
                Every event we design is a testament to our commitment to craftsmanship. We begin with your story, weaving it into every aspect of the design, from the overall aesthetic to the finest details.
            </p>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Our process is collaborative and transparent, ensuring a seamless journey from concept to completion. We source the finest materials, partner with the best vendors, and manage every logistical detail with precision and care.
            </p>
        </motion.div>
    </motion.section>
);

// CTA Section
const CtaSection = () => (
  <motion.section 
    className="bg-gray-800 text-white py-16 sm:py-20 md:py-24 px-4 sm:px-8 md:px-16 lg:px-24 text-center"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 1.0 }}
  >
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light mb-4 sm:mb-6">Let's Create Together</h2>
    <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto mb-6 sm:mb-8">
      Have a vision for your next event? We'd love to hear it. Reach out to us to begin your journey with Swaranjali.
    </p>
    <motion.button 
      className="bg-[#6D2C2C] text-white font-semibold py-3 px-6 sm:px-8 rounded-full inline-flex items-center gap-2 transition-colors duration-300 hover:bg-yellow-700 text-sm sm:text-base"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <FiPhone />
      Contact Us
    </motion.button>
  </motion.section>
);

export default AboutUs;

