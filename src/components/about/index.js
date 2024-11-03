import React from 'react'
import abimg from '../../images/about.jpg'
import { Link } from 'react-router-dom'


const About = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return(
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
                            <p>Welcome to the vibrant world of graphic design, where creativity knows no bounds and imagination is our playground. We're  here to weave visuals that tell stories, evoke emotions, and captivate audiences. Let’s embark on a journey where every pixel holds a purpose, and every stroke of the brush paints a masterpiece. Together, let’s bring your visions to life through the power of design. </p>
                            <p>
      Although we are unsure of what will ultimately<span style={{ color: '#aa2135' }}> save the world</span>, we do know that it must be{' '}
      <span style={{ color: '#aa2135' }}>perfectly designed</span>. Whether it is graphics, ads layout, 
      video making, animation, or packing design, our works drive people to action.
    </p>

                            {/* <ul>
                                <li><i className="ti-plus"></i> Quis ipsum suspendisse ultrices gravida. </li>
                                <li><i className="ti-plus"></i> Risus commodo viverra maecenas accumsan lacus.</li>
                                <li><i className="ti-plus"></i> Incididunt ut labore et dolore magna aliqua. </li>
                            </ul> */}
                            <Link onClick={ClickHandler} className="theme-btn-s2" to="/portfolio-grid">View Projects</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;