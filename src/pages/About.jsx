import React from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaUsers, FaClock, FaHeart } from 'react-icons/fa';

const About = () => {
  const stats = [
    { icon: FaUsers, value: '10,000+', label: 'Mutlu Müşteri' },
    { icon: FaAward, value: '15+', label: 'Yıllık Deneyim' },
    { icon: FaClock, value: '24/7', label: 'Online Hizmet' },
    { icon: FaHeart, value: '98%', label: 'Müşteri Memnuniyeti' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-primary-600 text-white py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold mb-6">Hakkımızda</h1>
            <p className="text-xl max-w-3xl mx-auto">
              2008 yılından beri müşterilerimize en kaliteli hizmeti sunmak için çalışıyoruz.
              Profesyonel ekibimiz ve modern ekipmanlarımızla size en iyi deneyimi yaşatmayı hedefliyoruz.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="mx-auto text-4xl text-primary-600 mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Profesyonel Ekibimiz</h2>
            <p className="text-gray-600">Deneyimli ve uzman kadromuzla hizmetinizdeyiz</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Ayşe Yılmaz', role: 'Baş Stilist', image: 'https://randomuser.me/api/portraits/women/1.jpg' },
              { name: 'Mehmet Kaya', role: 'Spa Uzmanı', image: 'https://randomuser.me/api/portraits/men/1.jpg' },
              { name: 'Zeynep Demir', role: 'Masaj Terapisti', image: 'https://randomuser.me/api/portraits/women/2.jpg' },
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
