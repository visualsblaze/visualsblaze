'use client';
import React from 'react';
import Link from 'next/link';
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
} from 'react-icons/fa';

const Logo = '/images/footer-logo.png';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Portfolio', path: '/portfolio-grid-s2' },
  { name: 'Services', path: '/service' },
  { name: 'Contact', path: '/contact' },
];

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

const Footer = () => {
  const year = '2026';

  return (
    <footer className="vb-foot">
      <span className="vb-foot__watermark" aria-hidden="true">
        BLAZE
      </span>

      <div className="vb-foot__inner">
        <img src={Logo} alt="VisualsBlaze" className="vb-foot__logo" />

        <p className="vb-foot__tagline">
          Blaze for the people who want more.
        </p>

        <nav className="vb-foot__nav" aria-label="Footer">
          {NAV_LINKS.map((l) => (
            <Link key={l.path} href={l.path}>
              {l.name}
            </Link>
          ))}
        </nav>

        <div className="vb-foot__contact">
          <a href="mailto:visualsblaze@gmail.com">visualsblaze@gmail.com</a>
          <span className="vb-foot__dot" />
          <a href="tel:+966508875968">+966 50 887 5968</a>
          <span className="vb-foot__dot" />
          <span>Jeddah, KSA</span>
        </div>

        <div className="vb-foot__social">
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

        <div className="vb-foot__divider" />

        <div className="vb-foot__bottom">
          <p>© {year} Visuals Blaze. All rights reserved.</p>
          <p>Designed &amp; Developed by Hamza Manzoor</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
