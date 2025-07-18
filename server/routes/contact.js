import express from 'express';
import Contact from '../models/Contact.js';
import auth from '../middleware/auth.js';
import { sendContactConfirmation } from '../utils/emailService.js';

const router = express.Router();

// Submit contact form
router.post('/', async (req, res) => {
  try {
    const contactData = req.body;
    
    // Create new contact inquiry
    const contact = new Contact(contactData);
    await contact.save();

    // Send confirmation email (optional)
    try {
      await sendContactConfirmation(contact);
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
    }

    res.status(201).json({
      message: 'Contact form submitted successfully',
      contact,
      contactId: contact._id
    });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({ message: 'Failed to submit contact form' });
  }
});

// Get all contact inquiries (admin only)
router.get('/all', auth, async (req, res) => {
  try {
    if (req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Access denied. Admin only.' });
    }

    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (error) {
    console.error('Get contacts error:', error);
    res.status(500).json({ message: 'Failed to fetch contact inquiries' });
  }
});

// Update contact status (admin only)
router.patch('/:id/status', auth, async (req, res) => {
  try {
    if (req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Access denied. Admin only.' });
    }

    const { status, response } = req.body;
    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { status, response, updatedAt: Date.now() },
      { new: true }
    );

    if (!contact) {
      return res.status(404).json({ message: 'Contact inquiry not found' });
    }

    res.json({ message: 'Contact inquiry updated', contact });
  } catch (error) {
    console.error('Update contact error:', error);
    res.status(500).json({ message: 'Failed to update contact inquiry' });
  }
});

export default router;
