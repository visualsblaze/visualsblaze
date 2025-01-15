import React from 'react';
import brandingImage from '../../images/branding design.png';
import motionDesignImage from '../../images/motion design.png';
import creativeDesignImage from '../../images/creative design.png';
import videoEditingImage from '../../images/video editing.png';
import uiUxImage from '../../images/mobile & web design.png';

const About2 = () => {
    return (
        <section className="wpo-about-section-s2">
            <div className="container">
                <div className="title-section">
                    <h2 className="section-titles">Services</h2>
                    <p className="subtitles">
                    The way we do things in our  <br />line of work
                    </p>

                </div>
                <div className="services-grid">
                    <div className="service-card service-card1">
                        <div className="service-image">
                            <img src={brandingImage} alt="Branding Design" />
                        </div>
                        <h3 className="service-title">Branding Design</h3>
                        <p className="service-description">
                        Elevate your brand with unique logos, color palettes, and visual identities that leave a lasting impression.
                        </p>
                    </div>
                    <div className="service-card service-card2">
                        <div className="service-image">
                            <img src={motionDesignImage} alt="Motion Design" />
                        </div>
                        <h3 className="service-title">Motion Design</h3>
                        <p className="service-description">
                        Bring your story to life with dynamic animations and engaging visuals that move audiences.
                        </p>
                    </div>
                    <div className="service-card service-card3">
                        <div className="service-image">
                            <img src={creativeDesignImage} alt="Creative Design" />
                        </div>
                        <h3 className="service-title">Creative Design</h3>
                        <p className="service-description">
                        From illustrations to custom graphics, we deliver designs that inspire and stand out. Let’s craft something extraordinary together!
                        </p>
                    </div>
                    <div className="service-card service-card4">
                        <div className="service-image">
                            <img src={videoEditingImage} alt="Video Editing" />
                        </div>
                        <h3 className="service-title">Video Editing</h3>
                        <p className="service-description">
                        Transform raw footage into compelling, polished videos that tell your story with impact
                        </p>
                    </div>
                    <div className="service-card service-card5">
                        <div className="service-image">
                            <img src={uiUxImage} alt="Mobile & Web UI/UX Design" />
                        </div>
                        <h3 className="service-title">Mobile & Web UI/UX Design</h3>
                        <p className="service-description">
                        Design seamless and intuitive user experiences for your apps and websites that captivate and engage.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About2;
