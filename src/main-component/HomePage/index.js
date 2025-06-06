import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar'
import Hero from '../../components/hero';
import Features from '../../components/Features';
import FunFact from '../../components/FunFact';
import ProjectSection from '../../components/Projects';
import Testimonial from '../../components/Testimonial';
import Support from '../../components/support';
import Footer from '../../components/footer';
import Scrollbar from '../../components/scrollbar';
import BlogSection from '../../components/BlogSection'
import Tools from '../../components/about2'



import Logo from '../../images/logo-3.png'


const HomePage =() => {
    return(
        <Fragment>
            <Navbar Logo={Logo} hclass={'wpo-header-style-1'}/>
            <Hero/>
            <Tools/>

            <Features/>
            {/* <ServiceSection/> */}
            <FunFact/>
            <ProjectSection/>
            <BlogSection/>

            <Testimonial/>
            <Support/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default HomePage;