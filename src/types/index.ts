export interface User {
  id: string;
  name: string;
  email: string;
  password?: string;
  role: 'guest' | 'admin';
  createdAt: Date;
}

export interface Room {
  id: string;
  roomNumber: string;
  type: 'standard' | 'deluxe' | 'suite' | 'presidential';
  name: string;
  description: string;
  price: number;
  maxGuests: number;
  amenities: string[];
  images: string[];
  available: boolean;
  size: string;
}

export interface Booking {
  id: string;
  userId: string;
  roomId: string;
  guestName: string;
  guestEmail: string;
  guestPhone: string;
  checkInDate: string;
  checkOutDate: string;
  guests: number;
  totalPrice: number;
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
  specialRequests?: string;
  createdAt: Date;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  icon: string;
  image: string;
}

export interface Review {
  id: string;
  guestName: string;
  rating: number;
  comment: string;
  date: string;
  roomType: string;
}