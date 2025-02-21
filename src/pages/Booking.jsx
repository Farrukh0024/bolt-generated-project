import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaClock, FaUser, FaPhone, FaEnvelope } from 'react-icons/fa';

const availableTimeSlots = [
  "09:00", "10:00", "11:00", "12:00", 
  "14:00", "15:00", "16:00", "17:00"
];

const Booking = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ ...formData, date: selectedDate, time: selectedTime });
    alert('Bandlov muvaffaqiyatli yaratildi!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-violet-50 dark:from-gray-900 dark:to-gray-800 py-20">
      <div className="container-custom max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="heading-primary mb-4">Band qilish</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            O'zingizga qulay vaqtni tanlang
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="card"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 dark:text-gray-200 mb-2">
                  Xizmatni tanlang
                </label>
                <select
                  className="input-field"
                  value={formData.service}
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                  required
                >
                  <option value="">Tanlang...</option>
                  <option value="haircut">Soch turmagi</option>
                  <option value="spa">SPA xizmatlari</option>
                  <option value="massage">Massaj</option>
                  <option value="manicure">Manikyr & Pedikyr</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 dark:text-gray-200 mb-2">
                  Sanani tanlang
                </label>
                <input
                  type="date"
                  className="input-field"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 dark:text-gray-200 mb-2">
                Vaqtni tanlang
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {availableTimeSlots.map((time) => (
                  <button
                    key={time}
                    type="button"
                    className={`p-2 rounded-xl border transition-all ${
                      selectedTime === time
                        ? 'bg-indigo-600 text-white border-indigo-600'
                        : 'border-gray-200 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-400'
                    }`}
                    onClick={() => setSelectedTime(time)}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 dark:text-gray-200 mb-2">
                  <FaUser className="inline mr-2" />
                  Ism familiya
                </label>
                <input
                  type="text"
                  className="input-field"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 dark:text-gray-200 mb-2">
                  <FaPhone className="inline mr-2" />
                  Telefon
                </label>
                <input
                  type="tel"
                  className="input-field"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 dark:text-gray-200 mb-2">
                <FaEnvelope className="inline mr-2" />
                Elektron pochta
              </label>
              <input
                type="email"
                className="input-field"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full btn-primary"
            >
              Band qilish
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Booking;
