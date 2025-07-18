import { Room, Service, Review } from '../types';

export const rooms: Room[] = [
  {
    id: '1',
    roomNumber: '101',
    type: 'standard',
    name: 'Standard Room',
    description: 'Comfortable and cozy room perfect for solo travelers or couples. Features modern amenities and a beautiful city view.',
    price: 120,
    maxGuests: 2,
    amenities: ['Free WiFi', 'Air Conditioning', 'TV', 'Mini Fridge', 'Private Bathroom'],
    images: [
      'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    available: true,
    size: '25 sqm'
  },
  {
    id: '2',
    roomNumber: '201',
    type: 'deluxe',
    name: 'Deluxe Room',
    description: 'Spacious room with premium furnishings and enhanced amenities. Perfect for business travelers or those seeking extra comfort.',
    price: 180,
    maxGuests: 3,
    amenities: ['Free WiFi', 'Air Conditioning', 'Smart TV', 'Mini Bar', 'Work Desk', 'Room Service', 'Balcony'],
    images: [
      'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    available: true,
    size: '35 sqm'
  },
  {
    id: '3',
    roomNumber: '301',
    type: 'suite',
    name: 'Executive Suite',
    description: 'Luxurious suite with separate living area, premium amenities, and stunning panoramic views. Ideal for extended stays.',
    price: 280,
    maxGuests: 4,
    amenities: ['Free WiFi', 'Air Conditioning', '55" Smart TV', 'Full Mini Bar', 'Living Area', 'Kitchenette', 'Premium Bathroom', 'Concierge Service'],
    images: [
      'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    available: true,
    size: '55 sqm'
  },
  {
    id: '4',
    roomNumber: '401',
    type: 'presidential',
    name: 'Presidential Suite',
    description: 'The ultimate luxury experience with multiple rooms, premium amenities, and personalized service. Perfect for VIP guests.',
    price: 450,
    maxGuests: 6,
    amenities: ['Free WiFi', 'Climate Control', 'Multiple TVs', 'Full Kitchen', 'Dining Area', 'Master Bedroom', 'Guest Bedroom', 'Butler Service', 'Private Terrace'],
    images: [
      'https://images.pexels.com/photos/1743227/pexels-photo-1743227.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    available: true,
    size: '85 sqm'
  }
];

export const services: Service[] = [
  {
    id: '1',
    name: 'Restaurant & Bar',
    description: 'Fine dining restaurant serving international cuisine and a sophisticated bar with premium beverages.',
    icon: 'utensils',
    image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '2',
    name: 'Spa & Wellness',
    description: 'Full-service spa offering massages, treatments, and wellness programs for complete relaxation.',
    icon: 'heart',
    image: 'https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '3',
    name: 'Fitness Center',
    description: 'State-of-the-art fitness facility with modern equipment and personal training services.',
    icon: 'dumbbell',
    image: 'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '4',
    name: 'Swimming Pool',
    description: 'Outdoor infinity pool with poolside service and stunning city views.',
    icon: 'waves',
    image: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '5',
    name: 'Business Center',
    description: 'Fully equipped business center with meeting rooms and conference facilities.',
    icon: 'briefcase',
    image: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '6',
    name: 'Concierge Service',
    description: '24/7 concierge service to assist with reservations, tours, and local recommendations.',
    icon: 'bell',
    image: 'https://images.pexels.com/photos/3771115/pexels-photo-3771115.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];

export const reviews: Review[] = [
  {
    id: '1',
    guestName: 'Sarah Johnson',
    rating: 5,
    comment: 'Absolutely wonderful stay! The staff was incredibly friendly and the room was spotless. The view from our suite was breathtaking.',
    date: '2024-01-15',
    roomType: 'Executive Suite'
  },
  {
    id: '2',
    guestName: 'Michael Chen',
    rating: 5,
    comment: 'Perfect location and excellent service. The restaurant food was outstanding and the spa was very relaxing. Highly recommend!',
    date: '2024-01-10',
    roomType: 'Deluxe Room'
  },
  {
    id: '3',
    guestName: 'Emily Rodriguez',
    rating: 4,
    comment: 'Great hotel with modern amenities. The pool area is beautiful and the fitness center is well-equipped. Will definitely return.',
    date: '2024-01-08',
    roomType: 'Standard Room'
  },
  {
    id: '4',
    guestName: 'David Thompson',
    rating: 5,
    comment: 'Luxury at its finest! The Presidential Suite exceeded all expectations. The butler service was impeccable and attention to detail was remarkable.',
    date: '2024-01-05',
    roomType: 'Presidential Suite'
  }
];

export const hotelInfo = {
  name: 'Mambo Yote Hotel',
  tagline: 'Where Luxury Meets Comfort',
  description: 'Experience unparalleled luxury and comfort at Mambo Yote Hotel. Located in the heart of the city, we offer world-class amenities, exceptional service, and unforgettable experiences for both business and leisure travelers.',
  address: '123 Luxury Avenue, Downtown District, City 12345',
  phone: '+1 (555) 123-4567',
  email: 'info@mamboyotehotel.com',
  checkIn: '3:00 PM',
  checkOut: '11:00 AM',
  rating: 4.8,
  totalReviews: 1247
};