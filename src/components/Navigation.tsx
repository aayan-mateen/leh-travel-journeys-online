
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'DESTINATIONS', path: '/destinations' },
    { name: 'ITINERARIES', path: '/itineraries' },
    { name: 'ABOUT', path: '/about' },
    { name: 'CONTACT', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex flex-col items-center">
            <span className="font-serif text-2xl text-stone-800 tracking-wide">leh wanderer</span>
            <span className="text-xs text-stone-500 tracking-widest uppercase">curated journeys</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm tracking-widest transition-colors duration-200 ${
                  isActive(item.path)
                    ? 'text-amber-700 border-b-2 border-amber-700 pb-1'
                    : 'text-stone-600 hover:text-stone-800'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-stone-800 text-white px-6 py-2 text-sm tracking-widest hover:bg-stone-700 transition-colors duration-200"
            >
              START PLANNING
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block text-sm tracking-widest transition-colors duration-200 ${
                  isActive(item.path)
                    ? 'text-amber-700'
                    : 'text-stone-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="block bg-stone-800 text-white px-6 py-2 text-sm tracking-widest text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              START PLANNING
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
