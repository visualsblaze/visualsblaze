'use client';
import React, { useEffect, useRef, useState } from 'react';
import { FaRegClock, FaGlobeAmericas, FaRegSmile, FaRocket } from 'react-icons/fa';

const STATS = [
  { value: 5, suffix: '+', label: 'Years of Experience', icon: <FaRegClock /> },
  { value: 2, suffix: '+', label: 'Countries Served', icon: <FaGlobeAmericas /> },
  { value: 100, suffix: '%', label: 'Client Satisfaction', icon: <FaRegSmile /> },
  { value: 100, suffix: '%', label: 'Projects Delivered', icon: <FaRocket /> },
];

const CLIENT_LOGOS = [
  'enstpos logo.png',
  'alpha healthcare logo.png',
  'nawni logo.png',
  'apni dukan wala logo.png',
  'eboxx nde logo.png',
  'elde clare logo.png',
  'glam own logo.png',
  'hazbi fashion logo.png',
  'helix logo.png',
  'international dental logo.png',
  'pak n pure logo.png',
  'smile kingdom logo.png',
  'utam industries logo.png',
  'rida fatima logo.png',
  'zayon logo.png',
];

// Animated count-up that fires once the element scrolls into view.
const CountUp = ({ end, suffix = '', duration = 1600 }) => {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const tick = (now) => {
              const p = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - p, 3);
              setVal(Math.round(eased * end));
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [end, duration]);

  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
};

const FunFact = () => {
  const marquee = [...CLIENT_LOGOS, ...CLIENT_LOGOS];

  return (
    <>
      {/* Stats band */}
      <section className="vb-funfact">
        <div className="vb-funfact__bg" aria-hidden="true">
          <span className="vb-funfact__orb vb-funfact__orb--1" />
          <span className="vb-funfact__orb vb-funfact__orb--2" />
          <span className="vb-funfact__grid" />
        </div>

        <div className="vb-funfact__inner">
          {STATS.map((s) => (
            <div className="vb-funfact__stat" key={s.label}>
              <div className="vb-funfact__icon">{s.icon}</div>
              <h3>
                <CountUp end={s.value} suffix={s.suffix} />
              </h3>
              <p>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Client logos */}
      <section className="vb-clients">
        <div className="vb-clients__inner">
          <div className="vb-clients__head">
            <span className="vb-clients__eyebrow">
              <span className="vb-clients__dot" /> Trusted By
            </span>
            <h2>
              Our Precious <span>Clients</span>
            </h2>
          </div>
        </div>

        <div className="vb-clients__marquee">
          <div className="vb-clients__track">
            {marquee.map((logo, i) => (
              <div className="vb-clients__logo" key={i}>
                <img src={`/${logo}`} alt="Client logo" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FunFact;
