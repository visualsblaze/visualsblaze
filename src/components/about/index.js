import React from 'react';
import abimg from '../../images/about.jpg';
import { Link } from 'react-router-dom';
import photoshope from "../../images/photoshop img.png";
import premiere from "../../images/premiere img.png";
import xd from "../../images/xd img.png";
import effects from "../../images/after effects img.png";
import indesign from "../../images/indesign img.png";
import media from "../../images/media encoder img.png";
import figma from "../../images/figma img.png";
import illus from "../../images/illustrator img.png";
import choose from "../../images/choose-us-img.png";
import gball from "../../images/golden ball img.png";
import wball from "../../images/white ball img.png";
import fact1 from "../../images/revenue img.png";
import fact2 from "../../images/consumers img.png";
import fact3 from "../../images/majority img.png";
import fact4 from "../../images/managers img.png";










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
                            <span className='about-us'>ABOUT US</span>

                                <h2 className='wea'>We are more than just a
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
                    <br/>
                    <br/>

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
            <div className="col-lg-6">
                {/* Text Section */}
                <div className="why-choose-us-text">
                <h2 className="choose-titlemobile"> Why Choose Us</h2>

                    <p>
                    When it comes to graphic design, choosing the right partner can make all the difference in the success of your brand. At our studio, we offer more than just design services, we provide a comprehensive solution tailored to your unique needs. Our team is comprised of skilled professionals who are passionate about creativity and innovation. We understand that effective graphic design goes beyond aesthetics; it's about communicating your message clearly and engaging your audience on a deeper level. With our expertise in both traditional and digital design techniques, we can bring your vision to life across various platforms and mediums. What sets us apart is our commitment to excellence, attention to detail, and dedication to exceeding your expectations. When you choose us for your graphic design needs, you're not just getting a service provider, you're gaining a strategic partner invested in your success.

                    </p>

                    <br/>
                    <br/>

                    <h2 className="choose-title"> Why Choose Us</h2>

                  
                </div>
            </div>
        </div>
    </div>
</section>
<section className="tools-section">
  <div className="container">
    <h2 className="section-title">Expertise in Modern</h2>
    <p className="tools-description">Graphic Design Applications</p>
    <br/>

    <div className="tools-list">
      <div className="tool-item">
        <img className="tool-icon" src={photoshope} alt="XD" />
        <img className="ball white-ball" src={wball} alt="White Ball" />
        <img className="ball gold-ball" src={gball} alt="Gold Ball" />
      </div>
      <div className="tool-item">
        <img className="tool-icon" src={illus} alt="After Effects" />
        <img className="ball white-ball-second" src={wball} alt="White Ball" />
        <img className="ball gold-ball-second" src={gball} alt="Gold Ball" />
      </div>
      <div className="tool-item">
        <img className="tool-icon" src={effects} alt="Figma" />
        <img className="ball white-ball" src={wball} alt="White Ball" />
        <img className="ball gold-ball" src={gball} alt="Gold Ball" />
      </div>
      <div className="tool-item">
        <img className="tool-icon" src={premiere} alt="Illustrator" />
        <img className="ball white-ball-second" src={wball} alt="White Ball" />
        <img className="ball gold-ball-second" src={gball} alt="Gold Ball" />
      </div>
      
      <div className="tool-item">
        <img className="tool-icon" src={media} alt="Illustrator" />
        <img className="ball white-ball" src={wball} alt="White Ball" />
        <img className="ball gold-ball" src={gball} alt="Gold Ball" />
      </div><div className="tool-item">
        <img className="tool-icon" src={indesign} alt="Illustrator" />
        <img className="ball white-ball-second" src={wball} alt="White Ball" />
        <img className="ball gold-ball-second" src={gball} alt="Gold Ball" />
      </div><div className="tool-item">
        <img className="tool-icon" src={xd} alt="Illustrator" />
        <img className="ball white-ball" src={wball} alt="White Ball" />
        <img className="ball gold-ball" src={gball} alt="Gold Ball" />
      </div><div className="tool-item">
        <img className="tool-icon" src={figma} alt="Illustrator" />
        <img className="ball white-ball-second" src={wball} alt="White Ball" />
        <img className="ball gold-ball-second" src={gball} alt="Gold Ball" />
      </div>
    </div>
  </div>
</section>

<section className="quick-fun-fact-section">
  <div className="container">
    <h2 className="section-titls"><span className="quick-funs">Quick Fun</span> <br />
    <span className="facts">Fact</span></h2>
    <div className="row">
      <div className="col-lg-6">
      <div className="fun-fact-item">
  <div className="fact-content">
    <img src={fact1} alt="Fact Icon" className="fact-image" />
    <p className="fact-text">
  <h3 >+23%</h3>

      The typical revenue boost linked to consistently maintaining a brand's presentation.
      <br />
      <span className="fact-source">Source: Lucidpress</span>
    </p>
  </div>
  </div>

 

      </div>
      <div className="col-lg-6">
      <div className="fun-fact-item">
  <div className="fact-content">
    <img src={fact2} alt="Fact Icon" className="fact-image" />
    <p className="fact-text">
  <h3 >+86%</h3>

  most consumers are willing to pay a 
premium for brands they recognize and 
trust, prioritizing a superior customer 
experience over both price and product 
quality.
      <span className="fact-source">Source: Superoff ice.com</span>
    </p>
  </div>

</div>

      </div>
      <div className="col-lg-6">
      <div className="fun-fact-item">
  <div className="fact-content">
    <img src={fact3} alt="Fact Icon" className="fact-image" />
    <p className="fact-text">
  <h3 >77%</h3>

  the majority of B2B marketing leaders 
emphasize the importance of branding 
for achieving growth.
      <br />
      <span className="fact-source">Source: Circle Research</span>
    </p>
  </div>

</div>

      </div>
      <div className="col-lg-6">
      <div className="fun-fact-item">
  <div className="fact-content">
    <img src={fact4} alt="Fact Icon" className="fact-image" />

    <p className="fact-text">
  <h3 >OVER 70%</h3>

  brand managers worldwide emphasize 
that cultivating an audience holds 
greater long-term value than immediate 
direct sales.
      <br />
      <span className="fact-source">Source: Onbrand.me</span>
    </p>
  </div>
</div>

      </div>
    </div>
  </div>
</section>


               
            </div>
        </section>
    )
}

export default About;
