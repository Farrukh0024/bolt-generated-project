import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaCut, FaSpa, FaHandSparkles, FaClock } from 'react-icons/fa';

const features = [
  {
    icon: FaCut,
    title: "Soch stilisti",
    desc: "Zamonaviy va professional soch turmagi"
  },
  {
    icon: FaSpa,
    title: "SPA va parvarish",
    desc: "Yuqori sifatli relaks va parvarish"
  },
  {
    icon: FaHandSparkles,
    title: "Massaj va relaks",
    desc: "Professional massaj xizmati"
  },
  {
    icon: FaClock,
    title: "Qulay vaqt",
    desc: "24/7 onlayn band qilish"
  }
];

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] bg-gradient-to-br from-indigo-50 to-violet-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container-custom h-full py-20">
          <div className="flex flex-col items-center justify-center h-full text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <h1 className="heading-primary mb-6">
                Go'zallik va parvarishning yangi darajasi
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
                Professional go'zallik xizmatlari va malakali mutaxassislar yordamida o'zingizni yanada go'zal his eting
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/booking" className="btn-primary">
                  Band qilish
                </Link>
                <Link to="/services" className="btn-secondary">
                  Xizmatlar
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden -z-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-indigo-200/30 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-violet-200/30 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="heading-secondary mb-4">Bizning afzalliklarimiz</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Sifatli xizmat va qulay narxlar
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card group"
              >
                <feature.icon className="text-4xl text-indigo-600 dark:text-indigo-400 mb-4 
                  group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-semibold mb-2 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-violet-600">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Go'zalligingizni biz bilan kashf eting
            </h2>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Professional xizmatlarimizdan foydalaning
            </p>
            <Link
              to="/booking"
              className="bg-white text-indigo-600 px-8 py-3 rounded-xl font-medium 
              hover:bg-gray-50 transform hover:scale-105 transition-all duration-300
              shadow-lg hover:shadow-xl inline-block"
            >
              Hoziroq band qiling
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
