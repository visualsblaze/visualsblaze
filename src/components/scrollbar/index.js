'use client';
import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import './style.css';

const RADIUS = 26;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

const Scrollbar = () => {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const pct = height > 0 ? scrollTop / height : 0;
      setProgress(pct);
      setVisible(scrollTop > 250);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <button
      type="button"
      className={`vb-totop ${visible ? 'is-visible' : ''}`}
      onClick={toTop}
      aria-label="Scroll to top"
    >
      <svg className="vb-totop__ring" viewBox="0 0 60 60" aria-hidden="true">
        <circle className="vb-totop__track" cx="30" cy="30" r={RADIUS} />
        <circle
          className="vb-totop__bar"
          cx="30"
          cy="30"
          r={RADIUS}
          style={{
            strokeDasharray: CIRCUMFERENCE,
            strokeDashoffset: CIRCUMFERENCE * (1 - progress),
          }}
        />
      </svg>
      <FaArrowUp className="vb-totop__icon" />
    </button>
  );
};

export default Scrollbar;
