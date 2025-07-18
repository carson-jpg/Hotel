import express from 'express';
import auth from '../middleware/auth.js';

const router = express.Router();

// Sample room data (in a real app, this would be in MongoDB)
const rooms = [
  {
    id: '1',
    roomNumber: '101',
    type: 'standard',
    name: 'Standard Room',
    description: 'Comfortable and cozy room perfect for solo travelers or couples.',
    price: 120,
    maxGuests: 2,
    amenities: ['Free WiFi', 'Air Conditioning', 'TV', 'Mini Fridge', 'Private Bathroom'],
    images: [
      'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    available: true,
    size: '25 sqm'
  },
  {
    id: '2',
    roomNumber: '201',
    type: 'deluxe',
    name: 'Deluxe Room',
    description: 'Spacious room with premium furnishings and enhanced amenities.',
    price: 180,
    maxGuests: 3,
    amenities: ['Free WiFi', 'Air Conditioning', 'Smart TV', 'Mini Bar', 'Work Desk', 'Room Service', 'Balcony'],
    images: [
      'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    available: true,
    size: '35 sqm'
  },
  {
    id: '3',
    roomNumber: '301',
    type: 'suite',
    name: 'Executive Suite',
    description: 'Luxurious suite with separate living area and premium amenities.',
    price: 280,
    maxGuests: 4,
    amenities: ['Free WiFi', 'Air Conditioning', '55" Smart TV', 'Full Mini Bar', 'Living Area', 'Kitchenette', 'Premium Bathroom', 'Concierge Service'],
    images: [
      'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    available: true,
    size: '55 sqm'
  },
  {
    id: '4',
    roomNumber: '401',
    type: 'presidential',
    name: 'Presidential Suite',
    description: 'The ultimate luxury experience with multiple rooms and personalized service.',
    price: 450,
    maxGuests: 6,
    amenities: ['Free WiFi', 'Climate Control', 'Multiple TVs', 'Full Kitchen', 'Dining Area', 'Master Bedroom', 'Guest Bedroom', 'Butler Service', 'Private Terrace'],
    images: [
      'https://images.pexels.com/photos/1743227/pexels-photo-1743227.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    available: true,
    size: '85 sqm'
  }
];

// Get all rooms
router.get('/', (req, res) => {
  res.json(rooms);
});

// Get room by ID
router.get('/:id', (req, res) => {
  const room = rooms.find(r => r.id === req.params.id);
  if (!room) {
    return res.status(404).json({ message: 'Room not found' });
  }
  res.json(room);
});

// Update room availability (admin only)
router.patch('/:id/availability', auth, (req, res) => {
  try {
    if (req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Access denied. Admin only.' });
    }

    const { available } = req.body;
    const roomIndex = rooms.findIndex(r => r.id === req.params.id);
    
    if (roomIndex === -1) {
      return res.status(404).json({ message: 'Room not found' });
    }

    rooms[roomIndex].available = available;
    res.json({ message: 'Room availability updated', room: rooms[roomIndex] });
  } catch (error) {
    console.error('Update room availability error:', error);
    res.status(500).json({ message: 'Failed to update room availability' });
  }
});

export default router;
