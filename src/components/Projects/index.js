import React, { Component } from "react";
import { FaLink, FaShareAlt, FaSave, FaTimes } from "react-icons/fa";

import SectionTitle from "../SectionTitle";

import { getFirestore, collection, getDocs } from "firebase/firestore";
import { app } from '../../admin/firebaseConfig';

const db = getFirestore(app);

class ProjectSection extends Component {
  state = {
    isPopupOpen: false,
    selectedImage: null,
    projectImages: [],
  };

  async componentDidMount() {
    try {
      const snapshot = await getDocs(collection(db, "portfolioProjects"));
      const images = snapshot.docs.map(doc => doc.data());
      this.setState({ projectImages: images });
    } catch (error) {
      console.error("Error fetching project images from Firestore:", error);
    }
  }

  openPopup = (imageUrl) => {
    this.setState({ isPopupOpen: true, selectedImage: imageUrl });
    document.body.style.overflow = "hidden";
  };

  closePopup = () => {
    this.setState({ isPopupOpen: false, selectedImage: null });
    document.body.style.overflow = "";
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
    const { selectedImage } = this.state;
    if (navigator.share) {
      navigator
        .share({
          title: "Check out this project",
          text: "Here's a project I liked:",
          url: selectedImage,
        })
        .catch((err) => console.error("Error sharing: ", err));
    } else {
      navigator.clipboard
        .writeText(selectedImage)
        .then(() => alert("Link copied to clipboard for sharing!"))
        .catch((err) => console.error("Error copying link: ", err));
    }
  };

  saveImage = () => {
    const { selectedImage } = this.state;
    const savedImages = JSON.parse(localStorage.getItem("savedImages")) || [];
    if (!savedImages.includes(selectedImage)) {
      savedImages.push(selectedImage);
      localStorage.setItem("savedImages", JSON.stringify(savedImages));
      alert("Image saved successfully!");
    } else {
      alert("Image already saved.");
    }
  };

  render() {
    const { isPopupOpen, selectedImage, projectImages } = this.state;

    return (
      <section className="wpo-work-section section-padding">
        <div className="container">
          <SectionTitle
            subTitle={"Portfolio"}
            MainTitle={"Our Projects"}
            vTitle={"Portfolio"}
          />
        </div>

        {/* Grid-based image layout */}
        <div className="container">
          <div className="project-grid">
            {projectImages.map((image, index) => (
              <div
                key={index}
                onClick={() => this.openPopup(image.full)}
                className="project-grid-item"
              >
                <img
                  src={image.thumb}
                  alt={`Project ${index + 1}`}
                  className="project-image"
                />
              </div>
            ))}
          </div>
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
