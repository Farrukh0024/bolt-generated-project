import React, { useState } from 'react';
import { motion } from 'framer-motion';

const services = {
  haircut: 200000,
  spa: 400000,
  massage: 350000,
  manicure: 150000,
  // Ek hizmetler
  styling: 100000,
  facial: 250000,
  pedicure: 150000
};

const PriceCalculator = () => {
  const [selectedServices, setSelectedServices] = useState([]);
  const [total, setTotal] = useState(0);

  const toggleService = (service, price) => {
    const newSelected = selectedServices.includes(service)
      ? selectedServices.filter(s => s !== service)
      : [...selectedServices, service];
    
    setSelectedServices(newSelected);
    calculateTotal(newSelected);
  };

  const calculateTotal = (selected) => {
    const newTotal = selected.reduce((sum, service) => sum + services[service], 0);
    setTotal(newTotal);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="card dark:bg-gray-800"
    >
      <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
        Narxni hisoblash
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {Object.entries(services).map(([service, price]) => (
          <motion.button
            key={service}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`p-4 rounded-xl border transition-all ${
              selectedServices.includes(service)
                ? 'border-violet-500 bg-violet-50 dark:bg-violet-900'
                : 'border-gray-200 dark:border-gray-700'
            }`}
            onClick={() => toggleService(service, price)}
          >
            <div className="flex justify-between items-center">
              <span className="capitalize">{service}</span>
              <span className="font-semibold">
                {price.toLocaleString()} so'm
              </span>
            </div>
          </motion.button>
        ))}
      </div>

      <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold">Jami:</span>
          <motion.span
            key={total}
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            className="text-2xl font-bold text-violet-600 dark:text-violet-400"
          >
            {total.toLocaleString()} so'm
          </motion.span>
        </div>
      </div>
    </motion.div>
  );
};

export default PriceCalculator;
