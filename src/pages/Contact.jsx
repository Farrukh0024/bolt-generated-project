import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Form gönderme işlemi
    alert('Mesajınız başarıyla gönderildi!');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">İletişim</h1>
          <p className="text-xl text-gray-600">Sizden haber almayı bekliyoruz</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-semibold mb-6">İletişim Bilgileri</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <FaMapMarkerAlt className="text-primary-600 text-2xl mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold">Adres</h3>
                  <p className="text-gray-600">
                    Bağdat Caddesi No:123<br />
                    Kadıköy, İstanbul
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <FaPhone className="text-primary-600 text-2xl mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold">Telefon</h3>
                  <p className="text-gray-600">+90 555 123 4567</p>
                </div>
              </div>

              <div className="flex items-start">
                <FaEnvelope className="text-primary-600 text-2xl mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold">E-posta</h3>
                  <p className="text-gray-600">info@randevupro.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <FaWhatsapp className="text-primary-600 text-2xl mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold">WhatsApp</h3>
                  <p className="text-gray-600">+90 555 123 4567</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="font-semibold mb-4">Çalışma Saatleri</h3>
              <div className="space-y-2 text-gray-600">
                <p>Pazartesi - Cumartesi: 09:00 - 20:00</p>
                <p>Pazar: 10:00 - 18:00</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-semibold mb-6">Bize Mesaj Gönderin</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2">Ad Soyad</label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">E-posta</label>
                <input
                  type="email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Konu</label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Mesajınız</label>
                <textarea
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 h-32"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full btn-primary"
              >
                Mesaj Gönder
              </button>
            </form>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16"
        >
          <div className="bg-gray-200 rounded-xl h-96">
            {/* Burada Google Maps veya başka bir harita servisi entegre edilebilir */}
            <div className="w-full h-full rounded-xl flex items-center justify-center text-gray-600">
              Harita burada görüntülenecek
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
