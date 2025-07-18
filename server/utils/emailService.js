import nodemailer from 'nodemailer';

// Create transporter (configure with your email service)
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Send booking confirmation email
export const sendBookingConfirmation = async (booking) => {
  try {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: booking.guestEmail,
      subject: 'Booking Confirmation - Mambo Yote Hotel',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #d97706;">🏨 Mambo Yote Hotel - Booking Confirmation</h2>
          
          <p>Dear ${booking.guestName},</p>
          
          <p>Thank you for choosing Mambo Yote Hotel! Your booking has been received and is currently being processed.</p>
          
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0;">Booking Details:</h3>
            <p><strong>Booking ID:</strong> ${booking._id}</p>
            <p><strong>Guest Name:</strong> ${booking.guestName}</p>
            <p><strong>Email:</strong> ${booking.guestEmail}</p>
            <p><strong>Phone:</strong> ${booking.guestPhone}</p>
            <p><strong>Check-in:</strong> ${new Date(booking.checkInDate).toLocaleDateString()}</p>
            <p><strong>Check-out:</strong> ${new Date(booking.checkOutDate).toLocaleDateString()}</p>
            <p><strong>Guests:</strong> ${booking.guests}</p>
            <p><strong>Total Price:</strong> $${booking.totalPrice}</p>
            <p><strong>Status:</strong> ${booking.status}</p>
            ${booking.specialRequests ? `<p><strong>Special Requests:</strong> ${booking.specialRequests}</p>` : ''}
          </div>
          
          <p>We will contact you shortly to confirm your booking. If you have any questions, please don't hesitate to contact us.</p>
          
          <p>Best regards,<br>Mambo Yote Hotel Team</p>
          
          <hr style="margin: 30px 0;">
          <p style="font-size: 12px; color: #666;">
            Mambo Yote Hotel<br>
            123 Luxury Avenue, Downtown District<br>
            Phone: +1 (555) 123-4567<br>
            Email: info@mamboyotehotel.com
          </p>
        </div>
      `
    };

    await transporter.sendMail(mailOptions);
    console.log('Booking confirmation email sent successfully');
  } catch (error) {
    console.error('Error sending booking confirmation email:', error);
    throw error;
  }
};

// Send contact form confirmation email
export const sendContactConfirmation = async (contact) => {
  try {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: contact.email,
      subject: 'Contact Form Received - Mambo Yote Hotel',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #d97706;">🏨 Mambo Yote Hotel - Contact Form Received</h2>
          
          <p>Dear ${contact.firstName} ${contact.lastName},</p>
          
          <p>Thank you for contacting Mambo Yote Hotel! We have received your inquiry and will respond within 24 hours.</p>
          
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0;">Your Message:</h3>
            <p><strong>Subject:</strong> ${contact.subject}</p>
            <p><strong>Message:</strong> ${contact.message}</p>
          </div>
          
          <p>Best regards,<br>Mambo Yote Hotel Team</p>
          
          <hr style="margin: 30px 0;">
          <p style="font-size: 12px; color: #666;">
            Mambo Yote Hotel<br>
            123 Luxury Avenue, Downtown District<br>
            Phone: +1 (555) 123-4567<br>
            Email: info@mamboyotehotel.com
          </p>
        </div>
      `
    };

    await transporter.sendMail(mailOptions);
    console.log('Contact confirmation email sent successfully');
  } catch (error) {
    console.error('Error sending contact confirmation email:', error);
    throw error;
  }
};
