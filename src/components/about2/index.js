'use client';
import React from 'react';
import Link from 'next/link';
import {
  FaFingerprint,
  FaFilm,
  FaRegLightbulb,
  FaVideo,
  FaMobileAlt,
  FaArrowRight,
} from 'react-icons/fa';

const TOOLS = [
  {
    icon: <FaFingerprint />,
    title: 'Branding Design',
    desc: 'Unique logos, colour palettes and visual identities that leave a lasting impression.',
  },
  {
    icon: <FaFilm />,
    title: 'Motion Design',
    desc: 'Dynamic animations and engaging visuals that bring your story to life.',
  },
  {
    icon: <FaRegLightbulb />,
    title: 'Creative Design',
    desc: 'From illustrations to custom graphics, designs that inspire and stand out.',
  },
  {
    icon: <FaVideo />,
    title: 'Video Editing',
    desc: 'Raw footage transformed into compelling, polished videos with real impact.',
  },
  {
    icon: <FaMobileAlt />,
    title: 'Mobile & Web UI/UX',
    desc: 'Seamless, intuitive experiences for apps and websites that captivate users.',
  },
];

const About2 = () => {
  const ClickHandler = () => window.scrollTo(10, 0);

  return (
    <section className="vb-tools">
      <div className="vb-tools__bg" aria-hidden="true">
        <span className="vb-tools__glow" />
      </div>

      <div className="vb-tools__inner">
        <div className="vb-tools__head">
          <span className="vb-tools__eyebrow">
            <span className="vb-tools__dot" /> What We Do
          </span>
          <h2>
            The way we do things in <span>our line of work</span>
          </h2>
          <p>
            Five core craft areas, one obsession — making your brand impossible to
            ignore.
          </p>
        </div>

        <div className="vb-tools__grid">
          {TOOLS.map((t, i) => (
            <article className="vb-tools__card" key={t.title}>
              <span className="vb-tools__num">{String(i + 1).padStart(2, '0')}</span>
              <div className="vb-tools__icon">{t.icon}</div>
              <h3>{t.title}</h3>
              <p>{t.desc}</p>
            </article>
          ))}

          {/* CTA tile */}
          <article className="vb-tools__card vb-tools__card--cta">
            <h3>Ready to start a project?</h3>
            <p>Tell us what you have in mind and let&apos;s create something remarkable.</p>
            <Link href="/contact" onClick={ClickHandler} className="vb-tools__cta-btn">
              Get in touch <FaArrowRight />
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
};

export default About2;
