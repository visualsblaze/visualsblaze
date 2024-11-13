import React, { Component } from "react";
import { FaLink, FaShareAlt, FaSave, FaTimes } from "react-icons/fa"; // Import icons from React Icons
import pageTitleImage from '../../images/general-offers-cover-image.jpg';
import typographyImage from '../../images/general-offer-inner-image-design.jpg';
import typography from '../../images/nd offer inner image designdesign.jpg';
import typogr from '../../images/nd offers cover imagedesign.jpg';


class ProjectSection extends Component {
    state = {
        isPopupOpen: false,
        selectedImage: null,
        projectImages: []
    };

    getImages = () => {
        const images = [
            { thumb: pageTitleImage, full: typographyImage },
            { thumb: typogr, full: typography },
        ];
        this.setState({ projectImages: images });
    };

    openPopup = (imageUrl) => {
        this.setState({ isPopupOpen: true, selectedImage: imageUrl });
    };

    closePopup = () => {
        this.setState({ isPopupOpen: false, selectedImage: null });
    };

    generatePermalink = () => {
        const permalink = `${window.location.origin}/projects/${encodeURIComponent(this.state.selectedImage)}`;
        navigator.clipboard.writeText(permalink)
            .then(() => alert("Permalink copied to clipboard!"))
            .catch(err => console.error("Error copying permalink: ", err));
    };

    shareImage = () => {
        if (navigator.share) {
            navigator.share({
                title: "Check out this project",
                text: "Here's a project I liked:",
                url: this.state.selectedImage
            }).catch(err => console.error("Error sharing: ", err));
        } else {
            navigator.clipboard.writeText(this.state.selectedImage)
                .then(() => alert("Link copied to clipboard for sharing!"))
                .catch(err => console.error("Error copying link: ", err));
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

        return (
            <section className="wpo-project-section section-padding">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-12">
                            <div className="project-section-title">
                                <span>Portfolio</span>
                                <h2>Our Projects</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="project-image-container">
                        {projectImages.map((image, index) => (
                            <div key={index} onClick={() => this.openPopup(image.full)}>
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
                    <div className={`popup-modal ${isPopupOpen ? 'open' : ''}`} onClick={this.closePopup}>
                        <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                            <div className="popup-actions">
                                <button onClick={this.generatePermalink}><FaLink /> Permalink</button>
                                <button onClick={this.shareImage}><FaShareAlt /> Share</button>
                                <button onClick={this.saveImage}><FaSave /> Save</button>
                            </div>
                            <img src={selectedImage} alt="Project Detail" />
                            <button className="close-btn" onClick={this.closePopup}><FaTimes /> </button>
                        </div>
                    </div>
                )}
            </section>
        );
    }
}

export default ProjectSection;
