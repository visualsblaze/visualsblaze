'use client';
import React from 'react';
import ContactForm from '../ContactFrom';
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaWhatsapp,
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
} from 'react-icons/fa';

const INFO = [
  {
    icon: <FaMapMarkerAlt />,
    label: 'Address',
    value: 'Al-Andalus District, Jeddah KSA',
  },
  {
    icon: <FaEnvelope />,
    label: 'Email Us',
    value: 'visualsblaze@gmail.com',
    href: 'mailto:visualsblaze@gmail.com',
  },
  {
    icon: <FaPhoneAlt />,
    label: 'Call Now',
    value: '+966 50 887 5968',
    href: 'tel:+966508875968',
  },
];

const Contactpage = () => {
  return (
    <section className="vb-contact">
      <div className="vb-contact__bg" aria-hidden="true">
        <span className="vb-contact__glow vb-contact__glow--1" />
        <span className="vb-contact__glow vb-contact__glow--2" />
      </div>

      <div className="vb-contact__inner">
        {/* Info cards */}
        <div className="vb-contact__info">
          {INFO.map((item) => (
            <div className="vb-contact__card" key={item.label}>
              <div className="vb-contact__icon">{item.icon}</div>
              <div className="vb-contact__card-text">
                <h3>{item.label}</h3>
                {item.href ? (
                  <a href={item.href}>{item.value}</a>
                ) : (
                  <p>{item.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Form + side panel */}
        <div className="vb-contact__main">
          <aside className="vb-contact__aside">
            <span className="vb-contact__eyebrow">
              <span className="vb-contact__dot" /> Get In Touch
            </span>
            <h2>
              Let&apos;s create something <span>amazing</span> together
            </h2>
            <p>
              Have a project in mind or just want to say hello? Drop us a message and
              we&apos;ll get back to you within 24 hours.
            </p>
            <div className="vb-contact__social">
              <a href="https://wa.me/966508875968" target="_blank" rel="noreferrer" aria-label="WhatsApp"><FaWhatsapp /></a>
              <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram /></a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
              <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook"><FaFacebookF /></a>
            </div>
          </aside>

          <div className="vb-contact__form">
            <h3>Have any question?</h3>
            <ContactForm />
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="vb-contact__map">
        <iframe
          title="Visuals Blaze location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d944895.6413049315!2d38.485445257855576!3d21.56074161399478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3d4a1d1ae7f47%3A0xd2820a5dbfcad2f!2sJeddah%2C%20Saudi%20Arabia!5e0!3m2!1sen!2s!4v1698590424511!5m2!1sen!2s"
        />
      </div>
    </section>
  );
};

export default Contactpage;
