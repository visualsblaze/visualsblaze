'use client';
import React from 'react';

const REVIEWS = [
  '/images/t1.jpg',
  '/images/t2.jpg',
  '/images/t3.jpg',
  '/images/t4.jpg',
  '/images/t5.jpg',
  '/images/t6.jpg',
  '/images/t7.jpg',
  '/images/t8.jpg',
  '/images/t9.jpg',
  '/images/t10.jpg',
  '/images/t11.jpg',
];

const colA = REVIEWS.filter((_, i) => i % 2 === 0); // t1, t3, t5...
const colB = REVIEWS.filter((_, i) => i % 2 === 1); // t2, t4, t6...

const Column = ({ items, reverse }) => (
  <div className="vb-reviews__col">
    <div className={`vb-reviews__track ${reverse ? 'vb-reviews__track--rev' : ''}`}>
      {[...items, ...items].map((src, i) => (
        <div className="vb-reviews__card" key={i}>
          <img src={src} alt="Client review" loading="lazy" />
        </div>
      ))}
    </div>
  </div>
);

const BlogSection = () => {
  return (
    <section className="vb-reviews">
      <div className="vb-reviews__inner">
        <div className="vb-reviews__head">
          <span className="vb-reviews__eyebrow">
            <span className="vb-reviews__dot" /> Client Reviews
          </span>
          <h2>
            Loved by clients <span>around the world</span>
          </h2>
          <p>Real words from real people we&apos;ve had the pleasure of working with.</p>
        </div>

        <div className="vb-reviews__cols">
          <Column items={colA} reverse={false} />
          <Column items={colB} reverse={true} />
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
