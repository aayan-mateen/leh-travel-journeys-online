
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-stone-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex flex-col">
              <span className="font-serif text-2xl text-white tracking-wide">frozen himalayas</span>
              <span className="text-sm text-stone-400 tracking-widest uppercase">curated journeys</span>
            </Link>
            <p className="text-stone-400 leading-relaxed">
              Experience the mystical beauty of Ladakh through carefully curated experiences that celebrate the region's rich heritage and breathtaking landscapes.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-stone-400 hover:text-white cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-stone-400 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-stone-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/destinations" className="text-stone-400 hover:text-white transition-colors">Destinations</Link></li>
              <li><Link to="/itineraries" className="text-stone-400 hover:text-white transition-colors">Itineraries</Link></li>
              <li><Link to="/about" className="text-stone-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-stone-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-serif text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-stone-400">
              <li>Custom Itineraries</li>
              <li>Adventure Tours</li>
              <li>Cultural Experiences</li>
              <li>Photography Tours</li>
              <li>Spiritual Journeys</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-lg mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-stone-400 mt-0.5" />
                <div className="text-stone-400">
                  <p>Main Bazaar, Leh</p>
                  <p>Ladakh 194101, India</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-stone-400" />
                <span className="text-stone-400">+91 94180 12345</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-stone-400" />
                <span className="text-stone-400">info@frozenhimalayas.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-stone-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-stone-400 text-sm">
            © 2024 Frozen Himalayas. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="#" className="text-stone-400 hover:text-white text-sm transition-colors">Privacy Policy</Link>
            <Link to="#" className="text-stone-400 hover:text-white text-sm transition-colors">Terms of Service</Link>
            <Link to="#" className="text-stone-400 hover:text-white text-sm transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
