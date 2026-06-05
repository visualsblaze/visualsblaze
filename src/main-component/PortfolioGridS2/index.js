'use client';
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { FaLink, FaShareAlt, FaSave, FaExpand } from 'react-icons/fa';
import Navbar from '../../components/Navbar';
import PageTitle from '../../components/pagetitle';
import Footer from '../../components/footer';
import Scrollbar from '../../components/scrollbar';
import Lightbox from '../../components/Lightbox';

const Logo = '/images/logo-3.png';

// Static portfolio items (thumb + full-size + meta).
const STATIC_PROJECTS = [
  { thumb: '/images/mabar-arab-trading-logo-cover-image.png', full: '/images/mabar-arab-trading-logo-inner-image.png', title: 'Mabar Arab Trading', category: 'Logo Design' },
  { thumb: '/images/dental-post-cover-image2.png', full: '/images/dental-post-inner-image1.png', title: 'Dental Post', category: 'Social Media' },
  { thumb: '/images/aggtc-brochure-cover-imagedesign.png', full: '/images/aggtc-brochure-inner-imagedesign.png', title: 'AGGTC Brochure', category: 'Print Design' },
  { thumb: '/images/ahc-letterhead-plus-branding-cover-image.png', full: '/images/ahc-letterhead-plus-branding-inner-image.png', title: 'AHC Brand Identity', category: 'Branding' },
  { thumb: '/images/eid-al-adha-25-cover-image.png', full: '/images/eid-al-adha-inner-image.png', title: 'Eid Al-Adha', category: 'Social Media' },
  { thumb: '/images/dental-post-cover-image.png', full: '/images/dental-post-inner-image.png', title: 'Dental Campaign', category: 'Social Media' },
  { thumb: '/images/sfd-offers-cover-image.png', full: '/images/sfd-offers-inner-image-design.jpg', title: 'SFD Offers Campaign', category: 'Advertising' },
  { thumb: '/images/sfd-flyer-ci.png', full: '/images/sfd-flyer-inner-image.jpg', title: 'SFD Flyer', category: 'Print Design' },
  { thumb: '/images/ahmed-mohammed-co-cover-image.jpg', full: '/images/ahmed-mohammed-co-inner-image.jpg', title: 'Ahmed Mohammed & Co', category: 'Branding' },
  { thumb: '/images/dental-post-cover-image.jpg', full: '/images/dental-post-inner-image.jpg', title: 'Dental Social Post', category: 'Social Media' },
  { thumb: '/images/pak-n-pure-cover-image.jpg', full: '/images/pak-n-pure-inner-image.jpg', title: 'Pak n Pure', category: 'Packaging' },
  { thumb: '/images/real-time-brochure-cover-image.jpg', full: '/images/real-time-brochure-inner-image.jpg', title: 'Real Time Brochure', category: 'Print Design' },
  { thumb: '/images/certificate-design-cover-image.jpg', full: '/images/certificate-design-inner-image.jpg', title: 'Certificate Design', category: 'Print Design' },
  { thumb: '/images/pharma7-cover-image.jpg', full: '/images/pharma7-inner-image.jpg', title: 'Pharma7', category: 'Branding' },
  { thumb: '/images/nd offers cover imagedesign.jpg', full: '/images/nd-offer-inner-image-design.jpg', title: 'ND Offers', category: 'Advertising' },
  { thumb: '/images/privilege-card-design-cover-image.jpg', full: '/images/privilege-card-design-inner-image.jpg', title: 'Privilege Card', category: 'Print Design' },
  { thumb: '/images/general-offers-cover-image.jpg', full: '/images/general-offer-inner-image-design.jpg', title: 'General Offers', category: 'Advertising' },
];

const PortfolioGridS2 = () => {
  const [projects, setProjects] = useState(STATIC_PROJECTS);
  const [filter, setFilter] = useState('All');
  const [index, setIndex] = useState(-1);
  // Merge admin uploads (from localStorage) ahead of the static set.
  useEffect(() => {
    try {
      const uploaded = JSON.parse(localStorage.getItem('uploaded-projects') || '[]');
      if (uploaded.length) {
        const uploadedItems = uploaded.map((img) => ({
          thumb: img,
          full: img,
          title: 'Latest Work',
          category: 'Uploads',
        }));
        setProjects([...uploadedItems, ...STATIC_PROJECTS]);
      }
    } catch (e) {
      /* ignore malformed storage */
    }
  }, []);

  const categories = useMemo(
    () => ['All', ...Array.from(new Set(projects.map((p) => p.category)))],
    [projects]
  );

  const visible = useMemo(
    () => (filter === 'All' ? projects : projects.filter((p) => p.category === filter)),
    [projects, filter]
  );

  const close = useCallback(() => setIndex(-1), []);
  const current = index >= 0 ? visible[index] : null;

  const copyPermalink = () => {
    if (!current) return;
    const permalink = `${window.location.origin}/projects/${encodeURIComponent(current.full)}`;
    navigator.clipboard
      .writeText(permalink)
      .then(() => alert('Permalink copied to clipboard!'))
      .catch(() => {});
  };

  const shareImage = () => {
    if (!current) return;
    if (navigator.share) {
      navigator
        .share({ title: current.title, text: "Here's a project I liked:", url: current.full })
        .catch(() => {});
    } else {
      navigator.clipboard.writeText(current.full).then(() => alert('Link copied for sharing!'));
    }
  };

  const saveImage = () => {
    if (!current) return;
    const saved = JSON.parse(localStorage.getItem('savedImages') || '[]');
    if (!saved.includes(current.full)) {
      saved.push(current.full);
      localStorage.setItem('savedImages', JSON.stringify(saved));
      alert('Image saved successfully!');
    } else {
      alert('Image already saved.');
    }
  };

  return (
    <>
      <Navbar Logo={Logo} hclass={'wpo-header-style-5'} />
      <PageTitle pageTitle={'Portfolio'} pagesub={'Portfolio'} />

      <section className="vb-portfolio vb-portfolio--page">
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
          </div>

          {/* Category filter */}
          <div className="vb-portfolio__filter">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`vb-portfolio__chip ${filter === cat ? 'is-active' : ''}`}
                onClick={() => {
                  setFilter(cat);
                  close();
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="vb-portfolio__grid">
            {visible.map((p, i) => (
              <button
                type="button"
                className="vb-portfolio__card"
                key={`${p.full}-${i}`}
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
      </section>

      <Lightbox
        items={visible}
        index={index}
        onClose={close}
        onChange={setIndex}
        actions={
          current ? (
            <>
              <button
                type="button"
                className="vb-lightbox__icon-btn"
                onClick={copyPermalink}
                aria-label="Copy permalink"
                title="Copy permalink"
              >
                <FaLink />
              </button>
              <button
                type="button"
                className="vb-lightbox__icon-btn"
                onClick={shareImage}
                aria-label="Share"
                title="Share"
              >
                <FaShareAlt />
              </button>
              <button
                type="button"
                className="vb-lightbox__icon-btn"
                onClick={saveImage}
                aria-label="Save"
                title="Save"
              >
                <FaSave />
              </button>
            </>
          ) : null
        }
      />

      <Footer />
      <Scrollbar />
    </>
  );
};

export default PortfolioGridS2;
