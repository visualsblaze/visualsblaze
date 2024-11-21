import React from 'react';

const BlogSection = () => {
  return (
    <section className="testimonial-section">
      <div className="containerss">
        <h2 className="section-title">Testimonials</h2>
        <div className="testimonial-layout">
         
          {/* Testimonials */}
          <div className="testimonial-grid">
            {/* Testimonial 1 */}
            <div className="testimonial-card card-1">
              <div className="testimonial-header">
                <h4>Angela N.</h4>
                <span className="location">Vancouver, CA</span>
                <span className="date">09 DEC 2020</span>
              </div>
              <p className="testimonial-text">
                Husnain did an amazing job! Good communication and great work. Highly recommended.
              </p>
              <div className="rating">⭐⭐⭐⭐⭐</div>
            </div>

            {/* Testimonial 2 */}
            <div className="testimonial-card card-2">
              <div className="testimonial-header">
                <h4>Hayden R.</h4>
                <span className="location">Vantaa, FI</span>
                <span className="date">06 FEB 2021</span>
              </div>
              <p className="testimonial-text">
                Well done! Completed my project fast and like hoped.
              </p>
              <div className="rating">⭐⭐⭐⭐⭐</div>
            </div>

            {/* Testimonial 3 */}
            <div className="testimonial-card card-3">
              <div className="testimonial-header">
                <h4>Jenni M.</h4>
                <span className="location">Rotherhithe, GB</span>
                <span className="date">21 DEC 2020</span>
              </div>
              <p className="testimonial-text">
                Husnain was fantastic! Very quick turnaround and reasonably priced. The project I
                submitted for him was close to my heart, and he will be making my family's Christmas
                this year, in such a hard time. Thank you, Husnain!
              </p>
              <div className="rating">⭐⭐⭐⭐⭐</div>
            </div>

            {/* Testimonial 4 */}
            <div className="testimonial-card card-4">
              <div className="testimonial-header">
                <h4>Caitlin W.</h4>
                <span className="location">Philippi, WV, US</span>
                <span className="date">25 FEB 2021</span>
              </div>
              <p className="testimonial-text">
                Husnain did a great job on my project. He created post card designs for my business.
                He made revisions at my request and completed the project in a timely manner.
              </p>
              <div className="rating">⭐⭐⭐⭐⭐</div>
            </div>

            {/* Testimonial 5 */}
            <div className="testimonial-card card-5">
              <div className="testimonial-header">
                <h4>Angela N.</h4>
                <span className="location">Vancouver, CA</span>
                <span className="date">13 MAR 2021</span>
              </div>
              <p className="testimonial-text">
                Wonderful work by Husnain. Delivered ahead of schedule as well! A great designer to
                work with.
              </p>
              <div className="rating">⭐⭐⭐⭐⭐</div>
            </div>
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
