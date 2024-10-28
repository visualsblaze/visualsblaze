import React from 'react'
import {Link}  from 'react-router-dom'
import Logo from '../../images/logo-2.png'
import Services from '../../api/service';
import Project from '../../api/project';
import { FaInstagram, FaBehance } from "react-icons/fa";


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
                        <div className="widget about-widget">
                            <div className="logo widget-title">
                                {/* <img src={Logo} alt="logo"/> */}
                            </div>
                            <p>Build and Earn with your online store with lots of cool and exclusive features </p>
                            <ul>
                            <li>
                                    <Link onClick={ClickHandler} to="https://www.behance.net/discovervisualsblaze">
                                    <FaBehance />
                                    </Link>
                                </li>
                               
                                <li>
                                    <Link onClick={ClickHandler} to="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQGbnzD-UmxR1AAAAZLU1jyYe4dKmgOQyUAZn7M3kGdf_eFpF8Id1Ie6_RJiQoR4e3mOKrOlS5mw5s4M26_nu88QhudqpC8cWphSiFDQ5rYNHPK5m0uNnpxUB0m5nCfLxEEIw4c=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fhusnain-manzoor-910581120%3Futm_source%3Dshare%26utm_campaign%3Dshare_via%26utm_content%3Dprofile%26utm_medium%3Dios_app">
                                        <i className="ti-linkedin"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link onClick={ClickHandler} to="https://www.facebook.com/people/Visuals-Blaze/61557573718174/?mibextid=LQQJ4d">
                                        <i className="ti-facebook"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link onClick={ClickHandler} to="https://www.instagram.com/visualsblaze/profilecard/?igsh=dDVkcGhkZTA1dnhy">
                                        <i className="ti-instagram"></i>
                                    </Link>
                                </li>
                               
                            </ul>
                        </div>
                    </div>
                    
                    <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                        <div className="widget link-widget">
                            <div className="widget-title">
                                <h3>Services </h3>
                            </div>
                            <ul>
                                {Services.slice(1, 2).map((service, Sitem) => (
                                    <li key={Sitem}><Link onClick={ClickHandler} to={`/service-single/${service.Id}`}>{service.sTitle}</Link></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                        <div className="widget wpo-service-link-widget">
                            <div className="widget-title">
                                <h3>Contact </h3>
                            </div>
                            <div className="contact-ft">
                                <ul>
                                    <li><i className="fi flaticon-placeholder"></i>Jeddah
                                        </li>
                                    <li><i className="fi flaticon-phone-call"></i>+966 50 887 5968</li>
                                    <li><i className="fi flaticon-email"></i>visualsblaze@gmail.com</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                        <div className="widget instagram">
                            <div className="widget-title">
                                {/* <h3>Projects</h3> */}
                            </div>
                            {/* <ul className="d-flex">
                                {Project.slice(0, 6).map((project, Pitem) => (
                                    <li key={Pitem}><Link onClick={ClickHandler} to={`/project-single/${project.Id}`}><img src={project.pImg} alt="" /></Link></li>
                                ))}
                            </ul> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="wpo-lower-footer">
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <p className="copyright"> Copyright &copy; 2024 Visualsblaze by <Link onClick={ClickHandler} to="/">Hamza Manzoor</Link>.
                            All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
} 

export default Footer;