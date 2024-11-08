import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Services from '../../api/service';
import SectionTitle from '../SectionTitle';

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
        // Handle form submission, e.g., send to API or display a success message
        console.log('Appointment Form Submitted:', appointment);
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
                <div className="row">
                    {Services.map((service, Sitem) => (
                        <div className="col-lg-4 col-md-6 col-12" key={Sitem}>
                            <div className="wpo-service-item">
                                <div className="wpo-service-icon">
                                    <img src={service.icon} alt="" />
                                </div>
                                <div className="wpo-service-text">
                                    <h2><Link onClick={ClickHandler} to={`/service-single/${service.Id}`}>{service.sTitle}</Link></h2>
                                    <p>{service.description}</p>
                                </div>
                                <div className="visible-icon">
                                    <img src={service.icon2} alt="" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className="appointment-form">
    <h3>Book an Appointment</h3>
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
