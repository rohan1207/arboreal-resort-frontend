import React from 'react';
import { motion } from 'framer-motion';
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';

const ContactUs = () => {
  return (
    <div className="bg-gray-50 font-sans">
      {/* Hero Section */}
      <motion.section 
        className="relative h-[50vh] bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: "url('/swaranjali10.png')" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative text-center">
          <motion.h1 
            className="text-5xl md:text-7xl font-serif font-light"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Get in Touch
          </motion.h1>
          <motion.p 
            className="text-lg mt-4 max-w-2xl"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            We're here to help you create unforgettable moments. Reach out to us for inquiries and bookings.
          </motion.p>
        </div>
      </motion.section>

      {/* Contact Form and Info Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-serif font-light text-gray-800 mb-8">Send Us a Message</h2>
            <form action="#" method="POST" className="space-y-6">
              <div>
                <label htmlFor="name" className="sr-only">Name</label>
                <input type="text" name="name" id="name" placeholder="Your Name" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-yellow-600 focus:border-yellow-600 transition" />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <input type="email" name="email" id="email" placeholder="Your Email" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-yellow-600 focus:border-yellow-600 transition" />
              </div>
              <div>
                <label htmlFor="subject" className="sr-only">Subject</label>
                <input type="text" name="subject" id="subject" placeholder="Subject" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-yellow-600 focus:border-yellow-600 transition" />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">Message</label>
                <textarea name="message" id="message" rows="6" placeholder="Your Message" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-yellow-600 focus:border-yellow-600 transition"></textarea>
              </div>
              <div>
                <motion.button 
                  type="submit" 
                  className="w-full bg-[#6D2C2C] text-white font-semibold py-3 px-8 rounded-full transition-colors duration-300 hover:bg-yellow-700"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Submit
                </motion.button>
              </div>
            </form>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-serif font-light text-gray-800 mb-8">Contact Information</h2>
            <div className="space-y-6 text-lg text-gray-700">
              <div className="flex items-start gap-4">
                <FiMapPin className="text-yellow-600 text-2xl mt-1 shrink-0" />
                <span>Swaranjali Hotel & Lawns,<br />At Post-Warvade, Tal-Shirpur, Dist-Dhule</span>
              </div>
              <div className="flex items-center gap-4">
                <FiPhone className="text-yellow-600 text-2xl shrink-0" />
                <span>+91 9822992789</span>
              </div>
              <div className="flex items-center gap-4">
                <FiMail className="text-yellow-600 text-2xl shrink-0" />
                <span>contact@swaranjali.com</span>
              </div>
            </div>

            <div className="mt-12 h-80 rounded-md overflow-hidden shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.881319985964!2d74.8884722148993!3d21.3519449858089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bde9c1c6f5c1c1b%3A0x1b8f8b8f8b8f8b8f!2sSwaranjali%20Hotel%20%26%20Lawns!5e0!3m2!1sen!2sin!4v1620048453413!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Swaranjali Location"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;

