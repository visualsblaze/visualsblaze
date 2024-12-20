import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Services from '../../api/service';
import SectionTitle from '../SectionTitle';
import emailjs from 'emailjs-com';

const ServiceSection = (props) => {
    const [appointment, setAppointment] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        service: '',
        duration: ''
    });

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    };

    const handleChange = (e) => {
        setAppointment({
            ...appointment,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Send email using EmailJS
        emailjs.send(
            'service_gcxf8kg',       // Replace with your EmailJS service ID
            'template_wycyv4d',       // Replace with your EmailJS template ID
            {
                name: appointment.name,
                email: appointment.email,
                phone: appointment.phone,
                message: appointment.message,
                service: appointment.service,
                duration: appointment.duration
            },
            'AzDofKsyz3zAhmGFq'            // Replace with your EmailJS API Key here
        )
        .then((response) => {
            console.log('Email sent successfully!', response.status, response.text);
            alert('Appointment request sent successfully!');
        })
        .catch((error) => {
            console.error('Failed to send email:', error);
            alert('Failed to send appointment request. Please try again later.');
        });

        // Clear form after submission
        setAppointment({
            name: '',
            email: '',
            phone: '',
            message: '',
            service: '',
            duration: ''
        });
    };

    return (
        <section className={`wpo-service-section ${props.sClass}`}>
            <div className="container">
                <SectionTitle subTitle={'Get Services'} MainTitle={'What Can We Offer'} vTitle={'Service'} />
                
                
                <div className="appointment-form">
                    <h2 className='h2-text'>We’re here for you</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-row">
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="name"
                                    value={appointment.name}
                                    onChange={handleChange}
                                    placeholder="Your Name"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="email"
                                    name="email"
                                    value={appointment.email}
                                    onChange={handleChange}
                                    placeholder="Your Email"
                                    required
                                />
                            </div>
                        </div>
                        
                        <div className="form-row">
                            <div className="form-group">
                                <input
                                    type="tel"
                                    name="phone"
                                    value={appointment.phone}
                                    onChange={handleChange}
                                    placeholder="Your Phone"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <select
                                    name="service"
                                    value={appointment.service}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="" disabled>Select Service</option>
                                    {Services.map((service) => (
                                        <option key={service.Id} value={service.sTitle}>
                                            {service.sTitle}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className="form-group">
                            <input
                                type="number"
                                name="duration"
                                value={appointment.duration}
                                onChange={handleChange}
                                placeholder="Project Duration (in days)"
                                min="1"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <textarea
                                name="message"
                                value={appointment.message}
                                onChange={handleChange}
                                placeholder="Your Message"
                                required
                            />
                        </div>
                        
                        <button type="submit" className="btn-submit">Submit</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ServiceSection;
