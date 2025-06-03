

import React, { Component } from "react";
import Slider from "react-slick";
import { FaLink, FaShareAlt, FaSave, FaTimes } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import pageTitleImage from "../../images/general-offers-cover-image.jpg";
import typographyImage from "../../images/general-offer-inner-image-design.jpg";
import typography from "../../images/nd-offer-inner-image-design.jpg";
import typogr from "../../images/nd offers cover imagedesign.jpg";
import project3 from "../../images/privilege-card-design-cover-image.jpg";
import project4 from "../../images/privilege-card-design-inner-image.jpg";
import project5 from "../../images/certificate-design-cover-image.jpg";
import project6 from "../../images/certificate-design-inner-image.jpg";
import project7 from "../../images/pharma7-cover-image.jpg";
import project8 from "../../images/pharma7-inner-image.jpg";
import project9 from "../../images/real-time-brochure-cover-image.jpg";
import project10 from "../../images/real-time-brochure-inner-image.jpg";
import project11 from "../../images/pak-n-pure-cover-image.jpg";
import project12 from "../../images/pak-n-pure-inner-image.jpg";
import project13 from "../../images/dental-post-cover-image.jpg";
import project14 from "../../images/dental-post-inner-image.jpg";
import project15 from "../../images/ahmed-mohammed-co-cover-image.jpg";
import project16 from "../../images/ahmed-mohammed-co-inner-image.jpg";
import project17 from '../../images/sfd-offers-cover-image.png';
import project18 from '../../images/sfd-offers-inner-image-design.jpg';
import project19 from '../../images/sfd-flyer-ci.png';
import project20 from '../../images/sfd-flyer-inner-image.jpg';
import project21 from '../../images/dental-post-cover-image.png';
import project22 from '../../images/dental-post-inner-image.png';
import project23 from '../../images/eid-al-adha-25-cover-image.png';
import project24 from '../../images/eid-al-adha-inner-image.png';







import SectionTitle from "../SectionTitle";

class ProjectSection extends Component {
  state = {
    isPopupOpen: false,
    selectedImage: null,
    projectImages: [],
  };

  getImages = () => {
    const images = [
      { thumb: project23, full: project24 },

      { thumb: project21, full: project22 },

      { thumb: project17, full: project18 },

      { thumb: pageTitleImage, full: typographyImage },
      { thumb: project19, full: project20 },

      { thumb: project3, full: project4 },
      { thumb: project5, full: project6 },
      { thumb: project13, full: project14 },
      
      { thumb: project7, full: project8 },
      { thumb: typogr, full: typography },

      { thumb: project9, full: project10 },
      { thumb: project11, full: project12 },
      { thumb: project15, full: project16 },




    ];
    this.setState({ projectImages: images });
  };

  openPopup = (imageUrl) => {
    this.setState({ isPopupOpen: true, selectedImage: imageUrl });
    document.body.style.overflow = "hidden"; // Disable background scrolling
  };

  closePopup = () => {
    this.setState({ isPopupOpen: false, selectedImage: null });
    document.body.style.overflow = ""; // Restore background scrolling
  };

  generatePermalink = () => {
    const permalink = `${window.location.origin}/projects/${encodeURIComponent(
      this.state.selectedImage
    )}`;
    navigator.clipboard
      .writeText(permalink)
      .then(() => alert("Permalink copied to clipboard!"))
      .catch((err) => console.error("Error copying permalink: ", err));
  };

  shareImage = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "Check out this project",
          text: "Here's a project I liked:",
          url: this.state.selectedImage,
        })
        .catch((err) => console.error("Error sharing: ", err));
    } else {
      navigator.clipboard
        .writeText(this.state.selectedImage)
        .then(() => alert("Link copied to clipboard for sharing!"))
        .catch((err) => console.error("Error copying link: ", err));
    }
  };

  saveImage = () => {
    const savedImages = JSON.parse(localStorage.getItem("savedImages")) || [];
    if (!savedImages.includes(this.state.selectedImage)) {
      savedImages.push(this.state.selectedImage);
      localStorage.setItem("savedImages", JSON.stringify(savedImages));
      alert("Image saved successfully!");
    } else {
      alert("Image already saved.");
    }
  };

  componentDidMount() {
    this.getImages();
  }

  render() {
    const { isPopupOpen, selectedImage, projectImages } = this.state;

    // Slider settings
    const sliderSettings = {
      dots: false,
      infinite: true,
      speed: 2000,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 10,
      arrows: false,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };

    return (
      <section className="wpo-work-section section-padding">
        <div className="container">
          <SectionTitle
            subTitle={"Portfolio"}
            MainTitle={"Our Projects"}
            vTitle={"Portfolio"}
          />
        </div>
        <div className="container">
          {/* Slider */}
          <Slider {...sliderSettings}>
            {projectImages.map((image, index) => (
              <div key={index} onClick={() => this.openPopup(image.full)} style={{ cursor: "pointer" }}>
                <img src={image.thumb} alt={`Project ${index + 1}`} className="project-image" />
              </div>
            ))}
          </Slider>
        </div>

        {/* Popup Modal */}
        {isPopupOpen && (
          <div
            className={`popup-modal ${isPopupOpen ? "open" : ""}`}
            onClick={this.closePopup}
          >
            <div
              className="popup-content"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Fixed Action Bar */}
              <div className="popup-fixed-actions">
                <button onClick={this.generatePermalink}>
                  <FaLink /> Permalink
                </button>
                <button onClick={this.shareImage}>
                  <FaShareAlt /> Share
                </button>
                <button onClick={this.saveImage}>
                  <FaSave /> Save
                </button>
                <button className="close-btn" onClick={this.closePopup}>
                  <FaTimes /> Close
                </button>
              </div>
              <img src={selectedImage} alt="Project Detail" />
            </div>
          </div>
        )}
      </section>
    );
  }
}

export default ProjectSection;
