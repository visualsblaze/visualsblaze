import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const FunFactSection = (props) => {
    return (
        <section className={`wpo-fun-fact-section ${props.fClass}`}>
            <div className="row">
                <div className="col col-xs-12">
                    <div className="wpo-fun-fact-grids">
                        <div className="fun-fact-box">
                            <div className="icon">
                                <img src={`${process.env.PUBLIC_URL}/experience-icon.png`} alt="Experience Icon" />
                            </div>
                            <h3>5+</h3>
                            <p>Years<br />Experience</p>
                        </div>
                        <div className="fun-fact-box1">
                            <div className="icon">
                                <img src={`${process.env.PUBLIC_URL}/map-icon.png`} alt="Map Icon" />
                            </div>
                            <h3>2+</h3>
                            <p>Countries<br />Served</p>
                        </div>
                        <div className="fun-fact-box2">
                            <div className="icon">
                                <img src={`${process.env.PUBLIC_URL}/happy-icon.png`} alt="Happy Icon" />
                            </div>
                            <h3>100%</h3>
                            <p>Client<br />Satisfied</p>
                        </div>
                        <div className="fun-fact-box3">
                            <div className="icon">
                                <img src={`${process.env.PUBLIC_URL}/project-icon.png`} alt="Project Icon" />
                            </div>
                            <h3>100%</h3>
                            <p>Project<br />Delivered</p>
                        </div>
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
    { src: `${process.env.PUBLIC_URL}/elde clare logo.png`, alt: "Client 4" },
    { src: `${process.env.PUBLIC_URL}/apni dukan wala logo.png`, alt: "Client 5" },
    { src: `${process.env.PUBLIC_URL}/eboxx nde logo.png`, alt: "Client 6" },
    { src: `${process.env.PUBLIC_URL}/elde clare logo.png`, alt: "Client 7" },
    { src: `${process.env.PUBLIC_URL}/glam own logo.png`, alt: "Client 8" },
    { src: `${process.env.PUBLIC_URL}/hazbi fashion logo.png`, alt: "Client 9" },
    { src: `${process.env.PUBLIC_URL}/helix logo.png`, alt: "Client 10" },
    { src: `${process.env.PUBLIC_URL}/international dental logo.png`, alt: "Client 11" },
    { src: `${process.env.PUBLIC_URL}/pak n pure logo.png`, alt: "Client 12" },
    { src: `${process.env.PUBLIC_URL}/rida fatima logo.png`, alt: "Client 13" },
    { src: `${process.env.PUBLIC_URL}/smile kingdom logo.png`, alt: "Client 14" },
    { src: `${process.env.PUBLIC_URL}/utam industries logo.png`, alt: "Client 15" },
    { src: `${process.env.PUBLIC_URL}/rida fatima logo.png`, alt: "Client 16" },
    { src: `${process.env.PUBLIC_URL}/zayon logo.png`, alt: "Client 17" },




    ];

    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
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
