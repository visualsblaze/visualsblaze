'use client';
import React from 'react';
import Slider from 'react-slick';
import { FaStar, FaQuoteRight } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TESTIMONIALS = [
  {
    name: 'Elizabeth Anne',
    role: 'Fashion Designer',
    text: 'Visuals Blaze completely transformed our brand identity. The team understood our vision instantly and delivered designs that exceeded every expectation.',
  },
  {
    name: 'Sara Watson',
    role: 'UI/UX Designer',
    text: 'Incredible attention to detail and a lightning-fast turnaround. Every piece they create feels premium — our engagement has never been higher.',
  },
  {
    name: 'David Miller',
    role: 'CEO & Founder',
    text: 'Working with Husnain and the team was effortless. Clear communication, bold creativity, and results that genuinely move the needle for our business.',
  },
];

const Testimonial = () => {
  const settings = {
    dots: true,
    arrows: false,
    speed: 700,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4500,
    infinite: true,
    responsive: [
      { breakpoint: 991, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="vb-testi">
      <div className="vb-testi__inner">
        <div className="vb-testi__head">
          <span className="vb-testi__eyebrow">
            <span className="vb-testi__dot" /> Testimonials
          </span>
          <h2>
            What our <span>clients say</span>
          </h2>
        </div>

        <Slider {...settings} className="vb-testi__slider">
          {TESTIMONIALS.map((t) => (
            <div key={t.name}>
              <article className="vb-testi__card">
                <FaQuoteRight className="vb-testi__quote" />
                <div className="vb-testi__stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <p className="vb-testi__text">{t.text}</p>
                <div className="vb-testi__person">
                  <span className="vb-testi__avatar">
                    {t.name
                      .split(' ')
                      .map((w) => w[0])
                      .slice(0, 2)
                      .join('')}
                  </span>
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.role}</span>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;
