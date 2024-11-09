import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const FunFactSection = (props) => {
    const facts = [
        { number: "5+", text: "Years<br />Experience", icon:  `${process.env.PUBLIC_URL}/experience-icon.png` },
        { number: "2+", text: "Countries<br />Served", icon:  `${process.env.PUBLIC_URL}/map-icon.png` },
        { number: "100%", text: "Client<br />Satisfied", icon:  `${process.env.PUBLIC_URL}/happy-icon.png` },
        { number: "100%", text: "Project<br />Delivered", icon:  `${process.env.PUBLIC_URL}/project-icon.png` }
    ];

    return (
        <section className={`wpo-fun-fact-section ${props.fClass}`} style={styles.section}>
            <div className="row">
                <div className="col col-xs-12">
                    <div className="wpo-fun-fact-grids" style={styles.factGrid}>
                        {facts.map((fact, index) => (
                            <div className="fun-fact-box" key={index} style={styles.factBox}>
                                <div className="icon" style={styles.icon}>
                                    <img src={fact.icon} alt="" style={styles.iconImage} />
                                </div>
                                <h3 style={styles.number}>{fact.number}</h3>
                                <p style={styles.text} dangerouslySetInnerHTML={{ __html: fact.text }}></p>
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
        { src: "/path/to/logo1.png", alt: "Client 1" },
        { src: "/path/to/logo2.png", alt: "Client 2" },
        { src: "/path/to/logo3.png", alt: "Client 3" },
        { src: "/path/to/logo4.png", alt: "Client 4" }
    ];

    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
    };

    return (
        <section className="client-logo-slider" style={styles.sliderContainer}>
            <div className="container">
                <h3 style={styles.clientHeading}>Our Precious Clients</h3>
                <Slider {...sliderSettings}>
                    {logos.map((logo, index) => (
                        <div key={index} style={styles.logoSlide}>
                            <img src={logo.src} alt={logo.alt} style={styles.logo} />
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

const styles = {
    section: {
        backgroundColor: '#ffffff',
        padding: '50px 0',
        width: '100vw',          // Makes the section take the full viewport width
        marginLeft: 'calc(-50vw + 50%)', // Centers the full-width section
    },
    factGrid: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        gap: '15px',
        padding: '0 100px',        // Adds padding to prevent edge cutting
    },
    factBox: {
        width: '20%',   
        padding: '20px',
        height: '350px',
        background: 'linear-gradient(45deg, #b81029, #ff4856)',
        borderTopRightRadius: '55px',
        borderBottomLeftRadius: '55px',
        textAlign: 'center',
        color: '#fff',
        boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)',
        margin: '10px 0',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        marginBottom: '10px',
    },
    iconImage: {
        width: '100px',
        height: '100px',
    },
    number: {
        fontSize: '70px',
        fontWeight: 'bold',
        color: '#ffb100',
    },
    text: {
        fontSize: '32px',
        color: '#ffffff',
        lineHeight: '1',
        textAlign: 'center',
    },
    sliderContainer: {
        paddingTop: '40px',
        background: 'linear-gradient(45deg, #b81029, #ff4856)',
        padding: '80px 0',
    },
    clientHeading: {
        textAlign: 'center',
        color: '#ffb100',
        marginBottom: '20px',
    },
    logoSlide: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        maxWidth: '100px',
        maxHeight: '50px',
    },
};

const App = () => (
    <>
        <FunFactSection />
        <ClientLogoSlider />
    </>
);

export default App;
