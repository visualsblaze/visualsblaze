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
              Hello, I’m Husnain M.
              </h1>
              <h2>Motion Graphic Artist</h2>
              <p>CEO of Visuals Blaze</p>
              
            </div>
            <Link to="/" className="hero-button"> 
                <FaArrowDown style={{ marginLeft: "0px" }} /> BROCHURE 
              </Link>
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
            <Link to="/">
              <FaBehance />
            </Link>
          </li>
          <li>
            <Link to="/">
              <FaLinkedin />
            </Link>
          </li>
          <li>
            <Link to="/">
              <FaFacebook />
            </Link>
          </li>
          <li>
            <Link to="/">
              <FaInstagram />
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Hero;
