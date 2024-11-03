import React from 'react'
import {Link}  from 'react-router-dom'
import Logo from '../../images/footer-logo.png'
import Services from '../../api/service';
import Project from '../../api/project';
import { FaFacebook, FaLinkedin, FaInstagram, FaBehance, FaArrowDown } from "react-icons/fa";



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
                            <p>BLAZE FOR THE PEOPLE WHO
                            WANT MORE </p>
                            <ul>
                                <li>
                                <Link to="https://www.behance.net/discovervisualsblaze">
              <FaBehance />
            </Link>
                                </li><li>
                                <Link to="https://www.behance.net/discovervisualsblaze">
              <FaLinkedin />
            </Link>
                                </li>
                                <li>
                                <Link to="https://www.behance.net/discovervisualsblaze">
              <FaFacebook />
            </Link>
                                </li>
                                <li>
                                <Link to="https://www.behance.net/discovervisualsblaze">
              <FaInstagram />
            </Link>
                                </li>
                                
                            </ul>
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
                             
                                {Services.slice(1, 5).map((service, Sitem) => (
                                    <li key={Sitem}><Link onClick={ClickHandler} to={`/service-single/${service.Id}`}>{service.sTitle}</Link></li>
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
                                <li><i className=""></i>Al-Andalus District,Jeddah KSA</li>
                                    <li><i className="fi flaticon-phone-call"></i>+966 50 887 5968</li>
                                    <li><i className="fi flaticon-email"></i>isualsblaze@gmail.com</li>
                                </ul>
                            </div>
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
                        <p className="copyright"> Copyright &copy; 2021 anur by <Link onClick={ClickHandler} to="/">wpOceans</Link>.
                            All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
} 

export default Footer;