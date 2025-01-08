import React from 'react';
import abimg from '../../images/about.jpg';
import { Link } from 'react-router-dom';
import photoshope from "../../images/photoshope img.png";
import premiere from "../../images/premiere img.png";
import xd from "../../images/xd img.png";
import effects from "../../images/after effects img.png";
import indesign from "../../images/indesign img.png";
import media from "../../images/media endcoder img.png";
import figma from "../../images/figma img.png";
import illus from "../../images/illustrator img.png";
import choose from "../../images/choos.png";
import fact from "../../images/fact.png";





const About = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className={`wpo-about-section ${props.abClass}`}>
            <div className="container">
                {/* About Us Section */}
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="about-img">
                            <img src={abimg} alt="" />
                            <div className="shape-1"></div>
                            <div className="shape-2"></div>
                            <span className="ab-btn">5 Years Experience</span>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-content">
                            <div className="section-title">
                                <span>ABOUT US</span>
                                <h2>We are more than just a
                                    <span> digital agency.</span>
                                </h2>
                                <div className="transparent-text">About</div>
                            </div>
                            <div className="welcome-container">
                                <p>
                                    Welcome to the vibrant world of graphic design, where creativity knows no bounds and imagination is our playground.
                                    We're here to weave visuals that tell stories, evoke emotions, and captivate audiences. 
                                    Let’s embark on a journey where every pixel holds a purpose, and every stroke of the brush paints a masterpiece.
                                    Together, let’s bring your visions to life through the power of design.
                                </p>
                                <br />
                                <p>
                                    Although we are unsure of what will ultimately <span style={{ color: '#aa2135' }}>save the world</span>, we do know that it must be{' '}
                                    <span style={{ color: '#aa2135' }}>perfectly designed</span>. Whether it is graphics, ads layout, 
                                    video making, animation, or packing design, our works drive people to action.
                                </p>
                                <br />
                            </div>
                            <Link onClick={ClickHandler} className="theme-btn-s2" to="/portfolio-grid">View Projects</Link>
                        </div>
                    </div>
                </div>

               {/* Why Choose Us Section */}
<section className="why-choose-us-section">
    <div className="container">
        <div className="row align-items-center">
            <div className="col-lg-6">
                {/* Image Section */}
                <div className="why-choose-us-image">
                    <img src={choose} alt="Why Choose Us Graphic" />
                </div>
                </div>

            
        </div>
    </div>
</section>

                <section className="tools-section">
    <div className="container">
        <h2 className="section-title">Expertise in Modern</h2>
        <p className="tools-description">
        Graphic Design Applications
        </p>
        <div className="tools-list">
            <div className="tool-item">
                <img src={photoshope} alt="Photoshop" />
            </div>
            <div className="tool-item">
                <img src={premiere} alt="premiere" />
            </div>
            <div className="tool-item">
                <img src={xd} alt="xd" />
            </div>
            <div className="tool-item">
                <img src={effects} alt="After Effects" />
            </div>
            <div className="tool-item">
                <img src={indesign} alt="indesgin" />
            </div>
            <div className="tool-item">
                <img src={media} alt="media" />
            </div>
            <div className="tool-item">
                <img src={figma} alt="figma" />
            </div>
            <div className="tool-item">
                <img src={illus} alt="illus" />
            </div>
        </div>
    </div>
</section>
<section className="why-choose-us-section">
    <div className="container">
        <div className="row align-items-center">
            <div className="col-lg-6">
                {/* Image Section */}
                <div className="why-choose-us-image">
                    <img src={fact} alt="Why Choose Us Graphic" />
                </div>
                </div>

            
        </div>
    </div>
</section>
                {/* Quick Fun Fact Section
                <div className="row align-items-center">
                    <div className="col-lg-12">
                        <div className="quick-fun-fact">
                            <h2>Quick Fun Fact!</h2>
                            <div className="facts">
                                <div className="fact">
                                    <h3>23%</h3>
                                    <p>The typical revenue boost linked to consistently maintaining a brand’s presentation.</p>
                                    <span>Source: Lucidpress</span>
                                </div>
                                <div className="fact">
                                    <h3>86%</h3>
                                    <p>Most consumers are willing to pay a premium for brands they recognize and trust.</p>
                                    <span>Source: Superoffice.com</span>
                                </div>
                                <div className="fact">
                                    <h3>71%</h3>
                                    <p>The majority of B2B marketing leaders emphasize branding for growth.</p>
                                    <span>Source: Circle Research</span>
                                </div>
                                <div className="fact">
                                    <h3>Over 70%</h3>
                                    <p>Brand managers emphasize that cultivating an audience holds long-term value.</p>
                                    <span>Source: Onbrand.me</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </section>
    )
}

export default About;
