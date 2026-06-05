'use client';
import React from 'react';
import Link from 'next/link';
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
  FaArrowDown,
  FaArrowRight,
  FaStar,
} from 'react-icons/fa';

const portrait = '/images/slider/right-img.png';
const pdfFile = '/images/VISUALS BLAZE PROFILE.pdf';

const SOCIALS = [
  { icon: <FaWhatsapp />, href: 'https://w.app/OT5BzR', label: 'WhatsApp' },
  {
    icon: <FaLinkedinIn />,
    href: 'https://www.linkedin.com/in/husnain-manzoor-910581120?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
    label: 'LinkedIn',
  },
  {
    icon: <FaFacebookF />,
    href: 'https://www.facebook.com/people/Visuals-Blaze/61557573718174/?mibextid=LQQJ4d',
    label: 'Facebook',
  },
  {
    icon: <FaInstagram />,
    href: 'https://www.instagram.com/visualsblaze/profilecard/?igsh=dDVkcGhkZTA1dnhy',
    label: 'Instagram',
  },
];

const STATS = [
  { value: '5+', label: 'Years\nExperience' },
  { value: '200+', label: 'Projects\nDelivered' },
  { value: '50+', label: 'Happy\nClients' },
];

const Hero = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdfFile;
    link.download = 'visualsblaze-profile.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="vb-hero">
      {/* Animated background */}
      <div className="vb-hero__bg" aria-hidden="true">
        <span className="vb-hero__orb vb-hero__orb--1" />
        <span className="vb-hero__orb vb-hero__orb--2" />
        <span className="vb-hero__grid" />
        <span className="vb-hero__watermark">BLAZE</span>
      </div>

      <div className="vb-hero__inner">
        {/* Social rail (sits in the reserved left gutter on desktop) */}
        <div className="vb-hero__social">
          <span className="vb-hero__social-label">Follow</span>
          <span className="vb-hero__social-line" />
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
            >
              {s.icon}
            </a>
          ))}
        </div>

        {/* Left: copy */}
        <div className="vb-hero__content">
          <span className="vb-hero__eyebrow">
            <span className="vb-hero__pulse" />
            Motion Graphics • Branding • Visuals
          </span>

          <h1 className="vb-hero__title">
            Hello, I&apos;m
            <span className="vb-hero__name">Husnain M.</span>
          </h1>

          <p className="vb-hero__role">
            Motion Graphic Artist — CEO &amp; Founder of Visuals Blaze
          </p>

          <p className="vb-hero__desc">
            I craft bold motion, branding and visuals that help ambitious brands
            stand out and stay unforgettable.
          </p>

          <div className="vb-hero__actions">
            <button onClick={handleDownload} className="vb-hero__btn vb-hero__btn--solid">
              <FaArrowDown /> Download Profile
            </button>
            <Link href="/portfolio-grid-s2" className="vb-hero__btn vb-hero__btn--ghost">
              View Work <FaArrowRight />
            </Link>
          </div>

          <div className="vb-hero__stats">
            {STATS.map((s) => (
              <div className="vb-hero__stat" key={s.value}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: portrait */}
        <div className="vb-hero__visual">
          <div className="vb-hero__portrait">
            <span className="vb-hero__ring" />
            <span className="vb-hero__blob" />
            <img src={portrait} alt="Husnain M., Founder of Visuals Blaze" />

            <div className="vb-hero__badge vb-hero__badge--exp">
              <strong>5+</strong>
              <span>Years of creative work</span>
            </div>
            <div className="vb-hero__badge vb-hero__badge--rating">
              <FaStar />
              <span>Top-rated creative studio</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="vb-hero__scroll" aria-hidden="true">
        <span className="vb-hero__mouse">
          <span />
        </span>
        <small>Scroll</small>
      </div>
    </section>
  );
};

export default Hero;
