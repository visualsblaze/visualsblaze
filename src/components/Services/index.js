'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Services from '../../api/service';
import { toast } from 'react-toastify';
import {
  FaPalette,
  FaFingerprint,
  FaPrint,
  FaLaptopCode,
  FaHashtag,
  FaPenNib,
  FaChartPie,
  FaBullhorn,
  FaObjectGroup,
  FaFilm,
  FaVideo,
  FaPhotoVideo,
  FaArrowRight,
  FaRegClock,
  FaEnvelope,
  FaCheckCircle,
} from 'react-icons/fa';

// Icon + concise copy per service (keyed by title; falls back gracefully).
const META = {
  'Graphic Design': {
    icon: <FaPalette />,
    desc: 'Eye-catching visuals — logos, posters and social creatives crafted to grab attention.',
  },
  'Branding & Identity Design': {
    icon: <FaFingerprint />,
    desc: 'Complete brand identities, from logo to guidelines, that make you instantly recognisable.',
  },
  'Print Design': {
    icon: <FaPrint />,
    desc: 'Brochures, flyers, packaging and stationery designed to look stunning in print.',
  },
  'Digital and Web Design': {
    icon: <FaLaptopCode />,
    desc: 'Modern, conversion-focused websites and digital experiences that feel effortless.',
  },
  'Social Media Graphics': {
    icon: <FaHashtag />,
    desc: 'Scroll-stopping posts, stories and ad creatives tailored to every platform.',
  },
  Illustration: {
    icon: <FaPenNib />,
    desc: 'Custom illustrations and artwork that give your brand a unique personality.',
  },
  Infographics: {
    icon: <FaChartPie />,
    desc: 'Complex data turned into clear, shareable and beautiful visual stories.',
  },
  'Advertising Design': {
    icon: <FaBullhorn />,
    desc: 'High-impact ad campaigns designed to convert across print and digital.',
  },
  'UI/UX Design': {
    icon: <FaObjectGroup />,
    desc: 'Intuitive, user-first interfaces that turn visitors into loyal customers.',
  },
  'Motion Graphics': {
    icon: <FaFilm />,
    desc: 'Dynamic animations and motion design that bring your brand to life.',
  },
  'Video Editing': {
    icon: <FaVideo />,
    desc: 'Polished, professional edits that keep your audience watching till the end.',
  },
  'Video Composition': {
    icon: <FaPhotoVideo />,
    desc: 'Cinematic compositing and VFX that elevate your video content.',
  },
};

const fallback = { icon: <FaPalette />, desc: 'Creative work tailored to help your brand stand out.' };

const ServiceSection = (props) => {
  const [appointment, setAppointment] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    service: '',
    duration: '',
  });
  const [submitting, setSubmitting] = useState(false);

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  const handleChange = (e) => {
    setAppointment({ ...appointment, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!appointment.name || !appointment.email || !appointment.message) {
      toast.error('Please fill in your name, email and message.');
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch('/api/sendAppointment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(appointment),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Something went wrong');
      toast.success(data.message || 'Appointment request sent successfully!');
      setAppointment({ name: '', email: '', phone: '', message: '', service: '', duration: '' });
    } catch (error) {
      toast.error(error.message || 'Failed to send appointment request.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className={`vb-services ${props.sClass || ''}`}>
      <div className="vb-services__bg" aria-hidden="true">
        <span className="vb-services__glow vb-services__glow--1" />
        <span className="vb-services__glow vb-services__glow--2" />
      </div>

      <div className="vb-services__inner">
        {/* Heading */}
        <div className="vb-services__head">
          <span className="vb-services__eyebrow">
            <span className="vb-services__dot" /> What We Offer
          </span>
          <h2>
            Services that make your brand <span>unforgettable</span>
          </h2>
          <p>
            From bold branding to scroll-stopping motion, we cover every creative
            need under one roof.
          </p>
        </div>

        {/* Cards */}
        <div className="vb-services__grid">
          {Services.map((service, i) => {
            const meta = META[service.sTitle] || fallback;
            return (
              <article className="vb-services__card" key={service.Id}>
                <span className="vb-services__num">{String(i + 1).padStart(2, '0')}</span>
                <div className="vb-services__icon">{meta.icon}</div>
                <h3>{service.sTitle}</h3>
                <p>{meta.desc}</p>
                <Link
                  href={`/service-single/${service.Id}`}
                  onClick={ClickHandler}
                  className="vb-services__more"
                >
                  Learn more <FaArrowRight />
                </Link>
              </article>
            );
          })}
        </div>

        {/* Appointment / CTA */}
        <div className="vb-services__cta" id="get-quote">
          <div className="vb-services__cta-info">
            <span className="vb-services__eyebrow vb-services__eyebrow--light">
              <span className="vb-services__dot" /> Let&apos;s Work Together
            </span>
            <h3>Have a project in mind?</h3>
            <p>
              Tell us a little about it and we&apos;ll get back to you within 24
              hours with a tailored plan.
            </p>
            <ul className="vb-services__perks">
              <li>
                <FaCheckCircle /> Free consultation &amp; quote
              </li>
              <li>
                <FaRegClock /> Reply within 24 hours
              </li>
              <li>
                <FaEnvelope /> visualsblaze@gmail.com
              </li>
            </ul>
          </div>

          <form className="vb-services__form" onSubmit={handleSubmit}>
            <h3 className="vb-services__form-title">Request a Quote</h3>
            <div className="vb-services__row">
              <input
                type="text"
                name="name"
                value={appointment.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
              />
              <input
                type="email"
                name="email"
                value={appointment.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
              />
            </div>
            <div className="vb-services__row">
              <input
                type="tel"
                name="phone"
                value={appointment.phone}
                onChange={handleChange}
                placeholder="Your Phone"
              />
              <select name="service" value={appointment.service} onChange={handleChange}>
                <option value="" disabled>
                  Select Service
                </option>
                {Services.map((service) => (
                  <option key={service.Id} value={service.sTitle}>
                    {service.sTitle}
                  </option>
                ))}
              </select>
            </div>
            <textarea
              name="message"
              value={appointment.message}
              onChange={handleChange}
              placeholder="Tell us about your project"
              required
            />
            <button type="submit" className="vb-services__submit" disabled={submitting}>
              {submitting ? 'Sending...' : 'Request a Quote'} <FaArrowRight />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
