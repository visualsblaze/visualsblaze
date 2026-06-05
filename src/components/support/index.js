'use client';
import React from 'react';
import Link from 'next/link';
import { FaArrowRight, FaRegCommentDots } from 'react-icons/fa';

const Support = () => {
  return (
    <section className="vb-support">
      <div className="vb-support__inner">
        <div className="vb-support__panel">
          <span className="vb-support__shape vb-support__shape--1" aria-hidden="true" />
          <span className="vb-support__shape vb-support__shape--2" aria-hidden="true" />

          <div className="vb-support__content">
            <span className="vb-support__icon">
              <FaRegCommentDots />
            </span>
            <h2>Still have a question in mind?</h2>
            <p>
              Tell us about your project or ask us anything — our team usually
              replies within 24 hours.
            </p>
          </div>

          <div className="vb-support__actions">
            <Link href="/contact" className="vb-support__btn">
              Get in touch <FaArrowRight />
            </Link>
            <a href="mailto:visualsblaze@gmail.com" className="vb-support__mail">
              visualsblaze@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
