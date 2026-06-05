'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
  FaArrowDown,
} from 'react-icons/fa';
import { FiMenu, FiX } from 'react-icons/fi';

const pdfFile = '/images/VISUALS BLAZE PROFILE.pdf';

const NAV_ITEMS = [
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

export default function Header(props) {
  const { Logo } = props;
  const pathname = usePathname();
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Sliding pill indicator behind the active / hovered nav item.
  const linkRefs = useRef([]);
  const [pill, setPill] = useState({ left: 0, width: 0, opacity: 0 });

  const isActive = (path) =>
    path === '/' ? pathname === '/' : pathname.startsWith(path);

  const activeIndex = NAV_ITEMS.findIndex((i) => isActive(i.path));

  const movePillTo = (idx) => {
    const el = linkRefs.current[idx];
    if (el) setPill({ left: el.offsetLeft, width: el.offsetWidth, opacity: 1 });
  };

  const resetPill = () => {
    if (activeIndex >= 0) movePillTo(activeIndex);
    else setPill((p) => ({ ...p, opacity: 0 }));
  };

  // Position the pill on load, route change and resize. Reposition again once
  // web fonts finish loading, since they change the link widths (avoids a
  // misaligned indicator on first paint).
  useEffect(() => {
    resetPill();
    const onResize = () => resetPill();
    window.addEventListener('resize', onResize);
    const t = setTimeout(resetPill, 300);
    if (typeof document !== 'undefined' && document.fonts && document.fonts.ready) {
      document.fonts.ready.then(resetPill);
    }
    return () => {
      window.removeEventListener('resize', onResize);
      clearTimeout(t);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  // Lock body scroll while the mobile drawer is open.
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [drawerOpen]);

  const closeDrawer = () => setDrawerOpen(false);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdfFile;
    link.download = 'visualsblaze-profile.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header className="vb-nav-wrap">
      <div className="vb-nav">
        {/* Brand */}
        <Link href="/" className="vb-nav__brand" onClick={closeDrawer}>
          {Logo ? <img src={Logo} alt="VisualsBlaze" /> : <span>VisualsBlaze</span>}
        </Link>

        {/* Center nav with sliding indicator */}
        <nav className="vb-nav__menu" aria-label="Primary" onMouseLeave={resetPill}>
          <span
            className="vb-nav__pill"
            style={{ left: pill.left, width: pill.width, opacity: pill.opacity }}
            aria-hidden="true"
          />
          <ul>
            {NAV_ITEMS.map((item, idx) => (
              <li key={item.path}>
                <Link
                  href={item.path}
                  ref={(el) => (linkRefs.current[idx] = el)}
                  onMouseEnter={() => movePillTo(idx)}
                  className={isActive(item.path) ? 'is-active' : ''}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right actions */}
        <div className="vb-nav__actions">
          <button
            type="button"
            onClick={handleDownload}
            className="vb-cta"
          >
            <span>Profile</span>
            <FaArrowDown />
          </button>

          <button
            type="button"
            className="vb-nav__burger"
            aria-label="Toggle menu"
            aria-expanded={drawerOpen}
            onClick={() => setDrawerOpen((o) => !o)}
          >
            {drawerOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile drawer + overlay */}
      <div
        className={`vb-drawer__overlay ${drawerOpen ? 'is-open' : ''}`}
        onClick={closeDrawer}
      />
      <aside className={`vb-drawer ${drawerOpen ? 'is-open' : ''}`} aria-hidden={!drawerOpen}>
        <div className="vb-drawer__head">
          {Logo ? <img src={Logo} alt="VisualsBlaze" /> : <span>VisualsBlaze</span>}
          <button type="button" aria-label="Close menu" onClick={closeDrawer}>
            <FiX />
          </button>
        </div>

        <nav aria-label="Mobile">
          <ul>
            {NAV_ITEMS.map((item, idx) => (
              <li key={item.path} style={{ '--i': idx }}>
                <Link
                  href={item.path}
                  onClick={closeDrawer}
                  className={isActive(item.path) ? 'is-active' : ''}
                >
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          onClick={() => {
            handleDownload();
            closeDrawer();
          }}
          className="vb-cta vb-drawer__cta"
        >
          <span>Download Profile</span>
          <FaArrowDown />
        </button>

        <div className="vb-drawer__socials">
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
      </aside>
    </header>
  );
}
