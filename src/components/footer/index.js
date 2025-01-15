import React from 'react'
import {Link}  from 'react-router-dom'
import Logo from '../../images/footer-logo.png'
import Services from '../../api/service';
import Project from '../../api/project';
import { FaFacebook, FaLinkedin, FaInstagram, FaWhatsapp, FaArrowDown } from "react-icons/fa";



const Footer = (props) =>{

    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }

  return(
    <footer className="wpo-site-footer">
        <div className="wpo-upper-footer">
            <div className="container">
                <div className="row">
                    
                    <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                    <img src={Logo} alt="logo" className="logo" />

                        <div className="widget about-widget">
                            <div className="logo widget-title">
                            </div>
                            <p className='p-text'>BLAZE FOR THE PEOPLE WHO <br/> 
                            WANT MORE </p>
                            <p className='follow' style={{ color: '#aa2135' }}>Follow us on<br/></p>

                            <div className="social">
        <ul>
          <li>
            <Link to="https://w.app/OT5BzR">
              <FaWhatsapp />
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
                        </div>
                    </div>
                    
                    <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                        <div className="widget link-widget">
                            <div className="widget-title">
                                <h3>Quicks Links </h3>
                            </div>
                            <ul>
                            <li><Link onClick={ClickHandler} to="/">Home</Link></li>

                            <li><Link onClick={ClickHandler} to="/about">About</Link></li>
                                            <li><Link onClick={ClickHandler} to="/portfolio-grid-s2">Portfolio</Link></li>
                                            <li><Link onClick={ClickHandler} to="/service">Get Service</Link></li>
                                            <li><Link onClick={ClickHandler} to="/contact">Contact</Link></li>

                                
                               
                            </ul>
                        </div>
                    </div>
                    <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                        <div className="widget link-widget">
                            <div className="widget-title">
                                <h3>Services </h3>
                            </div>
                            <ul>
                             
                                {Services.slice(1, 15).map((service, Sitem) => (
                                    <li key={Sitem}> {service.sTitle}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
    <div className="widget wpo-service-link-widget">
        <div className="widget-title">
            <h3>Contact Details</h3>
        </div>
        <div className="contact-ft">
            <ul>
                <p>Al-Andalus District, Jeddah KSA</p>
                <li><i className="fi flaticon-phone-call"></i>+966 50 887 5968</li>
                <li><i className="fi flaticon-email"></i>visualsblaze@gmail.com</li>
            </ul>
        </div>
    </div>
    {/* Logo Section (Visible on Mobile) */}
    <div className="footer-logo-mobile">
        <img src={Logo} alt="Footer Logo" className="logo-mobile" />
        <p style={{ color: '#333333' }}>BLAZE FOR THE PEOPLE WHO <br/> 
        WANT MORE </p>
        <p style={{ color: '#aa2135', fontWeight: 'bold' }}>Follow us on</p>
       
    </div>
</div>


                    {/* <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                        <div className="widget instagram">
                            <div className="widget-title">
                                <h3>Projects</h3>
                            </div>
                            <ul className="d-flex"> 
                                {Project.slice(0, 6).map((project, Pitem) => (
                                    <li key={Pitem}><Link onClick={ClickHandler} to={`/project-single/${project.Id}`}><img src={project.pImg} alt="" /></Link></li>
                                ))}
                            </ul>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
        <div className="wpo-lower-footer">
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <p className="copyright" style={{ color: '#ffffff' }}> © Visuals Blaze | Designed and Developed By Hamza Manzoor.All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
} 

export default Footer;