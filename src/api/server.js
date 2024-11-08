const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON
app.use(bodyParser.json());

// Nodemailer transport configuration
const transporter = nodemailer.createTransport({
    service: 'gmail', // or use another email service like 'smtp.ethereal.email' for testing
    auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASS  // Your email password or app-specific password
    }
});

// GET endpoint for appointment information or API status
app.get('/appointmentInfo', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the Appointment API!',
        description: 'This API allows you to submit appointment requests.',
        instructions: 'Send a POST request to /api/sendAppointment to submit an appointment.',
    });
});

// POST endpoint to receive form data and send email
app.post('/api/sendAppointment', (req, res) => {
    const { name, email, phone, message, service, duration } = req.body;

    // Email message configuration
    const mailOptions = {
        from: email,
        to: process.env.OWNER_EMAIL, // Owner's email address
        subject: `New Appointment Request from ${name}`,
        text: `
            You have received a new appointment request:

            Name: ${name}
            Email: ${email}
            Phone: ${phone}
            Service: ${service}
            Duration: ${duration} days
            Message: ${message}
        `,
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            return res.status(500).json({ message: 'Error sending email' });
        }
        res.status(200).json({ message: 'Appointment request sent successfully' });
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
