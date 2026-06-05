'use client';
import React from 'react';
import Link from 'next/link';
import {
  FaArrowRight,
  FaPenNib,
  FaLightbulb,
  FaRocket,
  FaHandshake,
} from 'react-icons/fa';

const abimg = '/images/about.jpg';

const TOOLS = [
  { src: '/images/photoshop img.png', name: 'Photoshop' },
  { src: '/images/illustrator img.png', name: 'Illustrator' },
  { src: '/images/after effects img.png', name: 'After Effects' },
  { src: '/images/premiere img.png', name: 'Premiere Pro' },
  { src: '/images/media encoder img.png', name: 'Media Encoder' },
  { src: '/images/indesign img.png', name: 'InDesign' },
  { src: '/images/xd img.png', name: 'Adobe XD' },
  { src: '/images/figma img.png', name: 'Figma' },
];

const STATS = [
  { value: '+23%', label: 'Revenue boost from consistent brand presentation.', source: 'Lucidpress' },
  { value: '+86%', label: 'Of consumers pay a premium for brands they recognise and trust.', source: 'SuperOffice' },
  { value: '77%', label: 'Of B2B marketing leaders say branding is key to growth.', source: 'Circle Research' },
  { value: '70%', label: 'Of brand managers value audience-building over direct sales.', source: 'OnBrand' },
];

const REASONS = [
  { icon: <FaPenNib />, title: 'Craft & Detail', desc: 'Every pixel has a purpose — we obsess over the details so your brand looks flawless.' },
  { icon: <FaLightbulb />, title: 'Creative Strategy', desc: 'Design that does more than look good — it communicates clearly and drives action.' },
  { icon: <FaRocket />, title: 'Fast Turnaround', desc: 'A streamlined process that delivers stunning work without the wait.' },
  { icon: <FaHandshake />, title: 'True Partnership', desc: "We're invested in your success — a strategic partner, not just a service provider." },
];

const About = (props) => {
  const ClickHandler = () => window.scrollTo(10, 0);

  return (
    <section className={`vb-about ${props.abClass || ''}`}>
      <div className="vb-about__bg" aria-hidden="true">
        <span className="vb-about__glow vb-about__glow--1" />
        <span className="vb-about__glow vb-about__glow--2" />
      </div>

      <div className="vb-about__inner">
        {/* Intro */}
        <div className="vb-about__intro">
          <div className="vb-about__media">
            <img src={abimg} alt="About Visuals Blaze" />
            <span className="vb-about__badge">
              <strong>5+</strong> Years Experience
            </span>
          </div>

          <div className="vb-about__copy">
            <span className="vb-about__eyebrow">
              <span className="vb-about__dot" /> About Us
            </span>
            <h2>
              We are more than just a <span>digital agency.</span>
            </h2>
            <p>
              Welcome to the vibrant world of graphic design, where creativity knows no
              bounds and imagination is our playground. We weave visuals that tell stories,
              evoke emotions and captivate audiences — where every pixel holds a purpose and
              every stroke paints a masterpiece.
            </p>
            <p>
              We may not know what will ultimately <strong>save the world</strong>, but we do
              know it must be <strong>perfectly designed</strong>. Whether it&apos;s graphics,
              ad layouts, video, animation or packaging, our work drives people to action.
            </p>
            <Link onClick={ClickHandler} className="vb-about__btn" href="/portfolio-grid-s2">
              View Projects <FaArrowRight />
            </Link>
          </div>
        </div>

        {/* Why choose us */}
        <div className="vb-about__why">
          <div className="vb-about__why-head">
            <span className="vb-about__eyebrow">
              <span className="vb-about__dot" /> Why Choose Us
            </span>
            <h3>
              A partner invested in your <span>success</span>
            </h3>
            <p>
              When it comes to graphic design, the right partner makes all the difference. We
              offer more than design services — a complete solution tailored to your unique
              needs, blending traditional and digital techniques to bring your vision to life.
            </p>
          </div>

          <div className="vb-about__reasons">
            {REASONS.map((r) => (
              <article className="vb-about__reason" key={r.title}>
                <div className="vb-about__reason-icon">{r.icon}</div>
                <h4>{r.title}</h4>
                <p>{r.desc}</p>
              </article>
            ))}
          </div>
        </div>

        {/* Tools / expertise */}
        <div className="vb-about__tools">
          <div className="vb-about__tools-head">
            <h3>
              Expertise in <span>modern</span> design applications
            </h3>
            <p>The industry-standard toolkit we use to craft every project.</p>
          </div>
          <div className="vb-about__tools-grid">
            {TOOLS.map((t) => (
              <div className="vb-about__tool" key={t.name}>
                <img src={t.src} alt={t.name} />
                <span>{t.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Fun facts */}
        <div className="vb-about__facts">
          <div className="vb-about__facts-head">
            <span className="vb-about__eyebrow vb-about__eyebrow--light">
              <span className="vb-about__dot" /> Quick Fun Facts
            </span>
            <h3>Why great design pays off</h3>
          </div>
          <div className="vb-about__facts-grid">
            {STATS.map((s) => (
              <div className="vb-about__fact" key={s.source}>
                <strong>{s.value}</strong>
                <p>{s.label}</p>
                <span className="vb-about__fact-source">Source: {s.source}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
