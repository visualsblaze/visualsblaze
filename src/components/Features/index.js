'use client';
import React from 'react';
import { FaLightbulb, FaCalculator, FaPencilRuler, FaRocket } from 'react-icons/fa';

const missionImg = '/images/mission-icons.png';
const visionImg = '/images/vision-icons.png';

const MISSION_VISION = [
  {
    id: 'mission',
    label: 'Our Mission',
    image: missionImg,
    description:
      'To harness the transformative power of visual communication so businesses connect authentically with their audience — pushing creative boundaries with innovative, impactful design that elevates brands and inspires meaningful engagement.',
  },
  {
    id: 'vision',
    label: 'Our Vision',
    image: visionImg,
    description:
      'To be a catalyst for positive change, empowering brands to tell their stories with clarity, creativity and purpose. Through collaboration, diversity and staying ahead of design trends, we shape a vibrant, visually compelling future for our clients.',
  },
];

const STEPS = [
  {
    icon: <FaLightbulb />,
    title: 'Creating a Concept',
    desc: 'We dig into your brand, goals and audience to shape a clear creative direction.',
  },
  {
    icon: <FaCalculator />,
    title: 'Budget Planning',
    desc: 'A transparent plan and timeline, so you always know exactly what to expect.',
  },
  {
    icon: <FaPencilRuler />,
    title: 'Design Process',
    desc: 'Ideas come to life through iterative design, feedback and careful refinement.',
  },
  {
    icon: <FaRocket />,
    title: 'Building Your Dream',
    desc: 'We deliver polished, ready-to-launch work that makes your brand truly shine.',
  },
];

const Features = (props) => {
  return (
    <section className={`vb-features ${props.wClass || ''}`}>
      <div className="vb-features__bg" aria-hidden="true">
        <span className="vb-features__glow" />
      </div>

      <div className="vb-features__inner">
        {/* Mission & Vision */}
        <div className="vb-features__mv">
          {MISSION_VISION.map((item) => (
            <article className={`vb-features__mv-card vb-features__mv-card--${item.id}`} key={item.id}>
              <div className="vb-features__mv-icon">
                <img src={item.image} alt={item.label} />
              </div>
              <div className="vb-features__mv-body">
                <span className="vb-features__badge">{item.label}</span>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Working process */}
        <div className="vb-features__head">
          <span className="vb-features__eyebrow">
            <span className="vb-features__dot" /> Working Process
          </span>
          <h2>
            How we turn ideas into <span>impact</span>
          </h2>
          <p>A simple, transparent process that takes you from first spark to launch.</p>
        </div>

        <div className="vb-features__steps">
          {STEPS.map((s, i) => (
            <div className="vb-features__step" key={s.title}>
              <span className="vb-features__step-num">{String(i + 1).padStart(2, '0')}</span>
              <div className="vb-features__step-icon">{s.icon}</div>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
