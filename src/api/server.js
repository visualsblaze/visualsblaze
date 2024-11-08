// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 5000;

// Middleware setup
app.use(cors());
app.use(bodyParser.json());

// Endpoint to handle appointment form submission
app.post('/api/appointments', (req, res) => {
    const { name, email, phone, message, service, duration } = req.body;

    // Here, you can save the data to a database or process it as needed
    // For this example, we will simply log it and send a response
    console.log('Received appointment:', req.body);

    res.status(200).json({
        message: 'Appointment booked successfully!',
        data: req.body
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
