import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import RoomCard from './components/RoomCard';
import BookingModal from './components/BookingModal';
import LoginModal from './components/LoginModal';
import AdminDashboard from './components/AdminDashboard';
import Services from './components/Services';
import About from './components/About';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { rooms } from './data/hotel';
import { Room, Booking } from './types';

function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [bookings, setBookings] = useState<Booking[]>([]);

  const handleBookingClick = (room?: Room) => {
    if (room) {
      setSelectedRoom(room);
    } else {
      // If no room specified, open with first available room
      const availableRoom = rooms.find(r => r.available);
      setSelectedRoom(availableRoom || rooms[0]);
    }
    setIsBookingModalOpen(true);
  };

  const handleBookingSubmit = (bookingData: Omit<Booking, 'id' | 'createdAt'>) => {
    const newBooking: Booking = {
      ...bookingData,
      id: Date.now().toString(),
      createdAt: new Date()
    };
    
    setBookings(prev => [...prev, newBooking]);
    
    // Show success message (in a real app, this would be a proper notification)
    alert(`Booking confirmed! Your reservation ID is ${newBooking.id}. We'll contact you shortly to confirm your booking.`);
  };

  const handleLoginClick = () => {
    setIsLoginModalOpen(true);
  };

  const handleLoginSuccess = (user: any, token: string) => {
    setCurrentUser(user);
    localStorage.setItem('authToken', token);
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('authToken');
  };

  // Check if user is admin and show admin dashboard
  if (currentUser?.role === 'admin') {
    return <AdminDashboard currentUser={currentUser} />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Header
        onBookingClick={() => handleBookingClick()}
        currentUser={currentUser}
        onLoginClick={handleLoginClick}
      />
      
      <Hero onBookingClick={() => handleBookingClick()} />
      
      {/* Rooms Section */}
      <section id="rooms" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Rooms & Suites</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our carefully designed rooms and suites, each offering comfort, luxury, and modern amenities
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {rooms.map((room) => (
              <RoomCard
                key={room.id}
                room={room}
                onBookClick={handleBookingClick}
              />
            ))}
          </div>
        </div>
      </section>
      
      <Services />
      <About />
      <Reviews />
      <Contact />
      <Footer />
      
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        room={selectedRoom}
        onBookingSubmit={handleBookingSubmit}
      />
      
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onLoginSuccess={handleLoginSuccess}
      />
    </div>
  );
}

export default App;