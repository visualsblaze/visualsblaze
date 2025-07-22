import React, { Component } from "react";
import Slider from "react-slick";
import { FaLink, FaShareAlt, FaSave, FaTimes } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import SectionTitle from "../SectionTitle";

class ProjectSection extends Component {
  state = {
    isPopupOpen: false,
    selectedImage: null,
    projectImages: [],
  };

  getImages = () => {
    const savedImages = JSON.parse(localStorage.getItem("portfolioProjects")) || [];

    // Optional fallback data
    const fallback = [
      {
        thumb: "https://res.cloudinary.com/demo/image/upload/v1610000000/sample.jpg",
        full: "https://res.cloudinary.com/demo/image/upload/v1610000000/sample.jpg",
      },
    ];

    const images = savedImages.length > 0 ? savedImages : fallback;
    this.setState({ projectImages: images });
  };

  openPopup = (imageUrl) => {
    this.setState({ isPopupOpen: true, selectedImage: imageUrl });
    document.body.style.overflow = "hidden"; // Disable background scrolling
  };

  closePopup = () => {
    this.setState({ isPopupOpen: false, selectedImage: null });
    document.body.style.overflow = ""; // Restore scrolling
  };

  generatePermalink = () => {
    const permalink = `${window.location.origin}/projects/${encodeURIComponent(this.state.selectedImage)}`;
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

    const sliderSettings = {
      dots: false,
      infinite: true,
      speed: 1000,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
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
          <div className="popup-modal open" onClick={this.closePopup}>
            <div className="popup-content" onClick={(e) => e.stopPropagation()}>
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
