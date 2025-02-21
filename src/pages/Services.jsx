import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaCut, FaSpa, FaHandSparkles, FaPaintBrush, FaRegClock, FaUserFriends } from 'react-icons/fa';

const services = [
  {
    id: 1,
    title: "Soch turmagi",
    price: "200 000 so'm dan",
    description: "Professional soch turmagi va parvarish xizmatlari",
    icon: FaCut,
    duration: "45 daqiqa"
  },
  {
    id: 2,
    title: "SPA xizmatlari",
    price: "400 000 so'm dan",
    description: "Dam olish va teri parvarishi xizmatlari",
    icon: FaSpa,
    duration: "60 daqiqa"
  },
  {
    id: 3,
    title: "Massaj",
    price: "350 000 so'm dan",
    description: "Professional massaj xizmatlari",
    icon: FaHandSparkles,
    duration: "50 daqiqa"
  },
  {
    id: 4,
    title: "Manikyr & Pedikyr",
    price: "150 000 so'm dan",
    description: "Professional tirnoq parvarishi",
    icon: FaPaintBrush,
    duration: "40 daqiqa"
  }
];

const Services = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-violet-50 dark:from-gray-900 dark:to-gray-800 py-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="heading-primary mb-4">Bizning xizmatlar</h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
            Professional xizmatlarimiz bilan tanishing
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card group"
            >
              <div className="flex items-center justify-between mb-6">
                <service.icon className="text-4xl text-indigo-600 dark:text-indigo-400 
                  group-hover:scale-110 transition-transform duration-300" />
                <div className="flex items-center text-gray-500 dark:text-gray-400">
                  <FaRegClock className="mr-2" />
                  <span>{service.duration}</span>
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{service.description}</p>
              <div className="flex flex-wrap justify-between items-center gap-4">
                <span className="text-indigo-600 dark:text-indigo-400 font-semibold">
                  {service.price}
                </span>
                <Link 
                  to="/booking" 
                  className="btn-primary text-sm md:text-base"
                >
                  Band qilish
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 card bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-center"
        >
          <div className="flex items-center justify-center mb-4">
            <FaUserFriends className="text-4xl" />
          </div>
          <h3 className="text-2xl font-semibold mb-2">Guruh uchun maxsus takliflar</h3>
          <p className="mb-6">Do'stlaringiz bilan birga kelganingizda maxsus chegirmalar mavjud</p>
          <button className="bg-white text-indigo-600 px-6 py-3 rounded-xl font-medium 
            hover:bg-gray-50 transition-all duration-300 mx-auto">
            Batafsil ma'lumot
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
