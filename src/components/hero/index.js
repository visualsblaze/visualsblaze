import React from "react";
import { Link } from "react-router-dom";
import himg from "../../images/slider/right-img.png";
import him from "../../images/asset1.png";
import hi from "../../images/asset2.png";
import h from "../../images/typography.png";
import { FaFacebook, FaLinkedin, FaInstagram, FaBehance, FaArrowDown } from "react-icons/fa";

const Hero = () => {
 
  return (
    <section className="wpo-hero-section-1">
      <div className="container">
        <div className="row">
          <div className="col col-xs-12 col-lg-6">
            <div className="hero-text">
            <h1>
  <span style={{ color: "#ffcc00" }}>Hello</span>, I’m Husnain M.
</h1>
              <h2>Motion Graphic Artist</h2>
              <p>CEO OF VISUALS BLAZE</p>
              
            </div>
         
          </div>
        </div>
        
      </div>

      <div className="right-vec">
        <div className="right-img">
          <img src={himg} alt="" />
        </div>
     
       
      </div>
      <div className="stone-vec">
       
        <div className="asset1-img">
          <img src={him} alt="" />
        </div>
        <div className="asset2-img">
          <img src={hi} alt="" />
        </div>
        <div className="asset3-img">
          <img src={h} alt="" />
        </div> 
       
      </div>

      <div className="social">
        
        <ul>
       
          <li>
            <Link to="https://www.behance.net/discovervisualsblaze">
              <FaBehance />
            </Link>
          </li>
          <li>
            <Link to="https://www.linkedin.com/in/husnain-manzoor-910581120?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
              <FaLinkedin />
            </Link>
          </li>
          <li>
            <Link to="https://www.facebook.com/people/Visuals-Blaze/61557573718174/?mibextid=LQQJ4d">
              <FaFacebook />
            </Link>
          </li>
          <li>
            <Link to="https://www.instagram.com/visualsblaze/profilecard/?igsh=dDVkcGhkZTA1dnhy">
              <FaInstagram />
            </Link>
          </li>
        </ul>
        
      </div>
      
    </section>
  );
};

export default Hero;
