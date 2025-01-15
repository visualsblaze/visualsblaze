import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const FunFactSection = (props) => {
    const boxRefs = useRef([]);
    const [visibleBoxes, setVisibleBoxes] = useState([]);
    // Function to handle visibility change when element is in viewport
  const handleVisibilityChange = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setVisibleBoxes((prev) => [...prev, entry.target]);
        observer.unobserve(entry.target); // Stop observing once the box is visible
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleVisibilityChange, {
      threshold: 0.5, // Trigger when 50% of the element is visible
    });

    boxRefs.current.forEach((ref) => {
      observer.observe(ref);
    });

    return () => {
      boxRefs.current.forEach((ref) => {
        observer.unobserve(ref);
      });
    };
  }, []);

    return (
     <section className={`wpo-fun-fact-section ${props.fClass}`}>
      <div className="row">
        <div className="col col-xs-12">
          <div className="wpo-fun-fact-grids">
            {['fun-fact-box', 'fun-fact-box1', 'fun-fact-box2', 'fun-fact-box3'].map((boxClass, index) => (
              <div
                key={index}
                ref={(el) => (boxRefs.current[index] = el)}
                className={`fun-fact-box ${visibleBoxes.includes(boxRefs.current[index]) ? 'flip-horizontal' : ''} ${boxClass}`}
              >
                <div className="icon">
                  <img
                    src={`${process.env.PUBLIC_URL}/${boxClass.includes('box1') ? 'map' : boxClass.includes('box2') ? 'happy' : boxClass.includes('box3') ? 'project': 'experience'}-icon.png`}
                    alt={`${boxClass} Icon`}
                  />
                </div>
                <h3>{index === 0 ? '5+' : index === 1 ? '2+' : '100%'}</h3>
                <p>
  {index === 0
    ? 'Years\nExperience'.split('\n').map((line, i) => (
        <span key={i}>
          {line}
          {i < 1 && <br />}
        </span>
      ))
    : index === 1
    ? 'Countries\nServed'.split('\n').map((line, i) => (
        <span key={i}>
          {line}
          {i < 1 && <br />}
        </span>
      ))
    : index === 2
    ? 'Client\nSatisfied'.split('\n').map((line, i) => (
        <span key={i}>
          {line}
          {i < 1 && <br />}
        </span>
      ))
    : 'Project\nDelivered'.split('\n').map((line, i) => (
        <span key={i}>
          {line}
          {i < 1 && <br />}
        </span>
      ))}
</p>



              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ClientLogoSlider = () => {
    const logos = [
    { src: `${process.env.PUBLIC_URL}/enstpos logo.png`, alt: "Client 1" },
    { src: `${process.env.PUBLIC_URL}/alpha healthcare logo.png`, alt: "Client 2" },
    { src: `${process.env.PUBLIC_URL}/nawni logo.png`, alt: "Client 3" },
    { src: `${process.env.PUBLIC_URL}/apni dukan wala logo.png`, alt: "Client 5" },
    { src: `${process.env.PUBLIC_URL}/eboxx nde logo.png`, alt: "Client 6" },
    { src: `${process.env.PUBLIC_URL}/elde clare logo.png`, alt: "Client 7" },
    { src: `${process.env.PUBLIC_URL}/glam own logo.png`, alt: "Client 8" },
    { src: `${process.env.PUBLIC_URL}/hazbi fashion logo.png`, alt: "Client 9" },
    { src: `${process.env.PUBLIC_URL}/helix logo.png`, alt: "Client 10" },
    { src: `${process.env.PUBLIC_URL}/international dental logo.png`, alt: "Client 11" },
    { src: `${process.env.PUBLIC_URL}/pak n pure logo.png`, alt: "Client 12" },
    { src: `${process.env.PUBLIC_URL}/smile kingdom logo.png`, alt: "Client 14" },
    { src: `${process.env.PUBLIC_URL}/utam industries logo.png`, alt: "Client 15" },
    { src: `${process.env.PUBLIC_URL}/rida fatima logo.png`, alt: "Client 16" },
    { src: `${process.env.PUBLIC_URL}/zayon logo.png`, alt: "Client 17" },




    ];

    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: window.innerWidth <= 768 ? 2 : 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
    };

    return (
        <section className="client-logo-slider">
            <div className="container">
            <h2>
      <span style={{ color: 'white' }}>Our Precious</span>
      <span style={{ color: '#ffb100' }}> Clients</span>
    </h2>
                <Slider {...sliderSettings}>
                    {logos.map((logo, index) => (
                        <div key={index} className="logo-slide">
                            <img src={logo.src} alt={logo.alt} />
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

const App = () => (
    <>
        <FunFactSection />
        <ClientLogoSlider />
    </>
);

export default App;
