import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ts1 from '../../images/testimonial/img-1.jpg'
import ts2 from '../../images/testimonial/img-2.jpg'
import ts3 from '../../images/testimonial/img-3.jpg'


class Testimonial extends Component {
    render() {
        var settings = {
            dots: false,
            arrows: false,
            speed: 1000,
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };

        const testimonial = [
            {
                tsImg: ts1,
                Des: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected  randomised.",
                Title: 'Elizabeth Anne',
                Sub: "Fasion Designer",
            },
            {
                tsImg: ts2,
                Des: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected  randomised.",
                Title: 'Sara Watson',
                Sub: "UX?UI Designer",
            },
            {
                tsImg: ts3,
                Des: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected  randomised.",
                Title: 'David Miller',
                Sub: "CEO & Founder",
            }
        ]
        return 
         
        
    }
}

export default Testimonial;