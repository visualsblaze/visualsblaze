'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { FaArrowRight, FaExpand } from 'react-icons/fa';
import Lightbox from '../Lightbox';

const PROJECTS = [
  {
    thumb: '/images/sfd-offers-cover-image.png',
    full: '/images/sfd-offers-inner-image-design.jpg',
    title: 'SFD Offers Campaign',
    category: 'Advertising',
  },
  {
    thumb: '/images/mabar-arab-trading-logo-cover-image.png',
    full: '/images/mabar-arab-trading-logo-inner-image.png',
    title: 'Mabar Arab Trading',
    category: 'Logo Design',
  },
  {
    thumb: '/images/ahc-letterhead-plus-branding-cover-image.png',
    full: '/images/ahc-letterhead-plus-branding-inner-image.png',
    title: 'AHC Brand Identity',
    category: 'Branding',
  },
  {
    thumb: '/images/eid-al-adha-25-cover-image.png',
    full: '/images/eid-al-adha-inner-image.png',
    title: 'Eid Al-Adha',
    category: 'Social Media',
  },
  {
    thumb: '/images/aggtc-brochure-cover-imagedesign.png',
    full: '/images/aggtc-brochure-inner-imagedesign.png',
    title: 'AGGTC Brochure',
    category: 'Print Design',
  },
  {
    thumb: '/images/pharma7-cover-image.jpg',
    full: '/images/pharma7-inner-image.jpg',
    title: 'Pharma7',
    category: 'Branding',
  },
  {
    thumb: '/images/certificate-design-cover-image.jpg',
    full: '/images/certificate-design-inner-image.jpg',
    title: 'Certificate Design',
    category: 'Print Design',
  },
  {
    thumb: '/images/pak-n-pure-cover-image.jpg',
    full: '/images/pak-n-pure-inner-image.jpg',
    title: 'Pak n Pure',
    category: 'Packaging',
  },
  {
    thumb: '/images/general-offers-cover-image.jpg',
    full: '/images/general-offer-inner-image-design.jpg',
    title: 'General Offers',
    category: 'Advertising',
  },
];

const ProjectSection = () => {
  const [index, setIndex] = useState(-1);

  return (
    <section className="vb-portfolio">
      <div className="vb-portfolio__inner">
        <div className="vb-portfolio__head">
          <div>
            <span className="vb-portfolio__eyebrow">
              <span className="vb-portfolio__dot" /> Our Portfolio
            </span>
            <h2>
              Work we&apos;re <span>proud of</span>
            </h2>
          </div>
          <Link href="/portfolio" className="vb-portfolio__all">
            View all <FaArrowRight />
          </Link>
        </div>

        <div className="vb-portfolio__grid">
          {PROJECTS.map((p, i) => (
            <button
              type="button"
              className="vb-portfolio__card"
              key={p.title}
              onClick={() => setIndex(i)}
              aria-label={`View ${p.title}`}
            >
              <img src={p.thumb} alt={p.title} loading="eager" decoding="async" />
              <span className="vb-portfolio__overlay">
                <span className="vb-portfolio__cat">{p.category}</span>
                <span className="vb-portfolio__title">{p.title}</span>
                <span className="vb-portfolio__expand">
                  <FaExpand />
                </span>
              </span>
            </button>
          ))}
        </div>
      </div>

      <Lightbox
        items={PROJECTS}
        index={index}
        onClose={() => setIndex(-1)}
        onChange={setIndex}
      />
    </section>
  );
};

export default ProjectSection;
