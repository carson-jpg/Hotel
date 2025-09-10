import express from 'express';
import Booking from '../models/Booking.js';
import auth from '../middleware/auth.js';
import { sendBookingConfirmation } from '../utils/emailService.js';

const router = express.Router();

// Create a new booking
router.post('/', async (req, res) => {
  try {
    console.log('Booking request received:', req.body);
    const bookingData = req.body;

    // Validate required fields
    const requiredFields = ['roomId', 'guestName', 'guestEmail', 'guestPhone', 'checkInDate', 'checkOutDate', 'guests', 'totalPrice'];
    const missingFields = requiredFields.filter(field => !bookingData[field]);

    if (missingFields.length > 0) {
      return res.status(400).json({
        message: `Missing required fields: ${missingFields.join(', ')}`,
        missingFields
      });
    }

    // Handle guest bookings - remove invalid userId
    const cleanBookingData = { ...bookingData };
    if (cleanBookingData.userId === 'guest-user' || !cleanBookingData.userId) {
      delete cleanBookingData.userId; // Remove userId for guest bookings
    }

    // Create new booking
    const booking = new Booking(cleanBookingData);
    await booking.save();
    console.log('Booking saved successfully:', booking._id);

    // Send confirmation email (optional)
    try {
      await sendBookingConfirmation(booking);
      console.log('Confirmation email sent successfully');
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
      // Don't fail the booking if email fails
    }

    res.status(201).json({
      message: 'Booking created successfully',
      booking,
      bookingId: booking._id
    });
  } catch (error) {
    console.error('Booking creation error:', error);
    console.error('Error details:', error.message);
    res.status(500).json({
      message: 'Failed to create booking',
      error: error.message
    });
  }
});

// Get all bookings (admin only)
router.get('/all', auth, async (req, res) => {
  try {
    if (req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Access denied. Admin only.' });
    }

    const bookings = await Booking.find()
      .sort({ createdAt: -1 })
      .populate('userId', 'name email');

    res.json(bookings);
  } catch (error) {
    console.error('Get bookings error:', error);
    res.status(500).json({ message: 'Failed to fetch bookings' });
  }
});

// Get user's bookings
router.get('/my-bookings', auth, async (req, res) => {
  try {
    const bookings = await Booking.find({ userId: req.user.userId })
      .sort({ createdAt: -1 });

    res.json(bookings);
  } catch (error) {
    console.error('Get user bookings error:', error);
    res.status(500).json({ message: 'Failed to fetch your bookings' });
  }
});

// Update booking status (admin only)
router.patch('/:id/status', auth, async (req, res) => {
  try {
    if (req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Access denied. Admin only.' });
    }

    const { status } = req.body;
    const booking = await Booking.findByIdAndUpdate(
      req.params.id,
      { status, updatedAt: Date.now() },
      { new: true }
    );

    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    res.json({ message: 'Booking status updated', booking });
  } catch (error) {
    console.error('Update booking status error:', error);
    res.status(500).json({ message: 'Failed to update booking status' });
  }
});

// Get booking by ID
router.get('/:id', async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    
    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    res.json(booking);
  } catch (error) {
    console.error('Get booking error:', error);
    res.status(500).json({ message: 'Failed to fetch booking' });
  }
});

export default router;
