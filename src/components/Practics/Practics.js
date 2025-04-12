import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      <Helmet>
        <title>Register Karo - Business Registration Made Easy</title>
        <meta
          name="description"
          content="Simplified legal solutions to get your business up and running effortlessly. Register your company, file GST, and secure trademarks with ease."
        />
      </Helmet>

      {/* Navbar */}
      <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">Register Karo</h1>
        <div>
          <a
            href="#services"
            className="mx-4 text-gray-700 hover:text-blue-600"
          >
            Services
          </a>
          <a
            href="#testimonials"
            className="mx-4 text-gray-700 hover:text-blue-600"
          >
            Testimonials
          </a>
          <a href="#contact" className="mx-4 text-gray-700 hover:text-blue-600">
            Contact
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-screen text-center px-6 bg-gradient-to-r from-blue-500 to-blue-700 text-white relative overflow-hidden">
        {/* <motion.img
          src="../../assets/roboboy.jpg"
          alt="Hero"
          className="absolute w-full h-full object-cover opacity-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        /> */}
        <motion.h1
          className="text-5xl font-extrabold mb-4 drop-shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Register Your Business Hassle-Free
        </motion.h1>
        <p className="text-lg max-w-2xl text-gray-200">
          Simplified legal solutions to get your business up and running
          effortlessly.
        </p>
        <motion.button
          className="mt-6 px-8 py-3 bg-white text-blue-600 font-bold rounded-full shadow-lg hover:bg-gray-100"
          whileHover={{ scale: 1.05 }}
        >
          Get Started
        </motion.button>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              "Company Registration",
              "GST Filing",
              "Trademark Registration",
            ].map((service, index) => (
              <motion.div
                key={index}
                className="p-8 border rounded-xl shadow-lg text-center bg-gray-50 hover:shadow-xl transition"
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-2xl font-semibold mb-3 text-blue-600">
                  {service}
                </h3>
                <p className="text-gray-600">
                  Expert assistance for seamless registration and compliance.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12 text-gray-800">
            What Our Clients Say
          </h2>
          <motion.div
            className="p-8 bg-white rounded-xl shadow-lg mx-auto max-w-xl"
            whileHover={{ scale: 1.02 }}
          >
            <p className="text-gray-700 italic">
              "Register Karo made the process so simple and hassle-free. Highly
              recommend their services!"
            </p>
            <p className="text-blue-600 font-bold mt-4">- A Satisfied Client</p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="contact"
        className="py-16 bg-blue-600 text-white text-center relative"
      >
        <h2 className="text-4xl font-bold mb-4">
          Ready to Register Your Business?
        </h2>
        <motion.button
          className="mt-6 px-8 py-3 bg-white text-blue-600 font-bold rounded-full shadow-lg hover:bg-gray-100"
          whileHover={{ scale: 1.05 }}
        >
          Get Started Now
        </motion.button>
      </section>
    </div>
  );
};

export default HomePage;
