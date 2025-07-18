import React, { useState } from 'react';
import { Menu, X, User, Calendar, Phone } from 'lucide-react';

interface HeaderProps {
  onBookingClick: () => void;
  currentUser: any;
  onLoginClick: () => void;
}

export default function Header({ onBookingClick, currentUser, onLoginClick }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-lg fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-amber-600">🏨 Mambo Yote</h1>
              <p className="text-xs text-gray-600 -mt-1">LUXURY HOTEL</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-amber-600 transition-colors font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('rooms')}
              className="text-gray-700 hover:text-amber-600 transition-colors font-medium"
            >
              Rooms
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-amber-600 transition-colors font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-amber-600 transition-colors font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-amber-600 transition-colors font-medium"
            >
              Contact
            </button>
          </nav>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+15551234567"
              className="flex items-center text-gray-600 hover:text-amber-600 transition-colors"
            >
              <Phone className="h-4 w-4 mr-2" />
              <span className="text-sm">+254(716) 60-8367</span>
            </a>
            
            {currentUser ? (
              <div className="flex items-center space-x-2">
                <User className="h-5 w-5 text-gray-600" />
                <span className="text-sm text-gray-700">Welcome, {currentUser.name}</span>
              </div>
            ) : (
              <button
                onClick={onLoginClick}
                className="flex items-center text-gray-600 hover:text-amber-600 transition-colors"
              >
                <User className="h-4 w-4 mr-2" />
                <span className="text-sm">Login</span>
              </button>
            )}
            
            <button
              onClick={onBookingClick}
              className="bg-amber-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-amber-700 transition-colors flex items-center"
            >
              <Calendar className="h-4 w-4 mr-2" />
              Book Now
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-amber-600 transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection('home')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-amber-600 transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('rooms')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-amber-600 transition-colors"
              >
                Rooms
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-amber-600 transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-amber-600 transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-amber-600 transition-colors"
              >
                Contact
              </button>
              <div className="border-t pt-2">
                <button
                  onClick={onBookingClick}
                  className="w-full bg-amber-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-amber-700 transition-colors flex items-center justify-center"
                >
                  <Calendar className="h-4 w-4 mr-2" />
                  Book Now
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}