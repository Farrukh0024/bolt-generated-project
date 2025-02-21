import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTelegram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">BeautyPro</h3>
            <p className="text-gray-400">
              Professional go'zallik va parvarish xizmatlari
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Tezkor havolalar</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white">Asosiy</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white">Xizmatlar</Link></li>
              <li><Link to="/booking" className="text-gray-400 hover:text-white">Band qilish</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Aloqa</h4>
            <ul className="space-y-2 text-gray-400">
              <li>info@beautypro.uz</li>
              <li>+998 90 123 45 67</li>
              <li>Toshkent, O'zbekiston</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Ijtimoiy tarmoqlar</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaTelegram size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2023 BeautyPro. Barcha huquqlar himoyalangan.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
