import React from 'react';
import abimg from '../../images/about.jpg';
import { Link } from 'react-router-dom';

const About = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className={`wpo-about-section ${props.abClass}`}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="about-img">
                            <img src={abimg} alt=""/>
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
                                <br/>
                                <p>
                                    Although we are unsure of what will ultimately<span style={{ color: '#aa2135' }}> save the world</span>, we do know that it must be{' '}
                                    <span style={{ color: '#aa2135' }}>perfectly designed</span>. Whether it is graphics, ads layout, 
                                    video making, animation, or packing design, our works drive people to action.
                                </p>
                                <br/>
                            </div>

                            <Link onClick={ClickHandler} className="theme-btn-s2" to="/portfolio-grid">View Projects</Link>

                            
                        </div>
                    </div>
                    {/* My Resume Section */}
                    <div className="resume-section">
                                <h2>My Resume</h2>
                                <p className="resume-intro">
                                    I believe that working hard and trying to learn every day will make me improve in satisfying my customers.
                                </p>
                                <div className="resume-content">
                                    <div className="education">
                                        <h3>Education</h3>
                                        <div className="resume-card">
                                            <p className="resume-date">2020-2021</p>
                                            <p className="resume-title">Certification in Python Language</p>
                                            <p className="resume-rating">4.9/5</p>
                                        </div>
                                        <div className="resume-card">
                                            <p className="resume-date">2021-2022</p>
                                            <p className="resume-title">Certification in Web Dev</p>
                                            <p className="resume-rating">5.0/5</p>
                                        </div>
                                        <div className="resume-card">
                                            <p className="resume-date">2021-2022</p>
                                            <p className="resume-title">Certification in Web Dev</p>
                                            <p className="resume-rating">5.0/5</p>
                                        </div>
                                    </div>
                                    <div className="experience">
                                        <h3>Experience</h3>
                                        <div className="resume-card">
                                            <p className="resume-date">2024 - Present</p>
                                            <p className="resume-title">Senior Programmer</p>
                                            <p className="resume-detail">Leader in Creative team</p>
                                        </div>
                                        <div className="resume-card">
                                            <p className="resume-date">2021 - 2024</p>
                                            <p className="resume-title">Freelancer</p>
                                            <p className="resume-detail">Worked in different programming languages</p>
                                        </div>
                                        <div className="resume-card">
                                            <p className="resume-date">2021 - 2024</p>
                                            <p className="resume-title">Freelancer</p>
                                            <p className="resume-detail">Worked in different programming languages</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                </div>
            </div>
        </section>
    )
}

export default About;
