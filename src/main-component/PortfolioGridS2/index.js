import React, { Component, Fragment } from "react";
import { FaLink, FaShareAlt, FaSave, FaTimes } from "react-icons/fa";
import Navbar from '../../components/Navbar';
import PageTitle from '../../components/pagetitle';
import SectionTitle from '../../components/SectionTitle';

import Footer from '../../components/footer';
import Scrollbar from '../../components/scrollbar';
import Logo from '../../images/logo-3.png';
import pageTitleImage from '../../images/general-offers-cover-image.jpg';
import typographyImage from '../../images/general-offer-inner-image-design.jpg';
import typography from '../../images/nd-offer-inner-image-design.jpg';
import typogr from '../../images/nd offers cover imagedesign.jpg';
import project5 from "../../images/certificate-design-cover-image.jpg";
import project6 from "../../images/certificate-design-inner-image.jpg";
import project3 from '../../images/privilege-card-design-cover-image.jpg';
import project4 from '../../images/privilege-card-design-inner-image.jpg';
import project7 from '../../images/pharma7-cover-image.jpg';
import project8 from '../../images/pharma7-inner-image.jpg';
import project9 from '../../images/real-time-brochure-cover-image.jpg';
import project10 from '../../images/real-time-brochure-inner-image.jpg';
import project11 from '../../images/pak-n-pure-cover-image.jpg';
import project12 from '../../images/pak-n-pure-inner-image.jpg';
import project13 from '../../images/dental-post-cover-image.jpg';
import project14 from '../../images/dental-post-inner-image.jpg';
import project15 from '../../images/ahmed-mohammed-co-cover-image.jpg';
import project16 from '../../images/ahmed-mohammed-co-inner-image.jpg';
import project17 from '../../images/sfd-offers-cover-image.jpg';
import project18 from '../../images/sfd-offers-inner-image-design.jpg';
import project19 from '../../images/sfd-flyer-cover-image.jpg';
import project20 from '../../images/sfd-flyer-inner-image.jpg';







class PortfolioGridS2 extends Component {
    state = {
        isPopupOpen: false,
        selectedImage: null,
        projectImages: []
    };

    getImages = () => {
        const images = [
            { thumb: project17, full: project18 },
            { thumb: project19, full: project20 },

            { thumb: project15, full: project16 },

            { thumb: project13, full: project14 },

            { thumb: project11, full: project12 },

            { thumb: project9, full: project10 },
            { thumb: project5, full: project6 },
            { thumb: project7, full: project8 },
            { thumb: typogr, full: typography },

            { thumb: project3, full: project4 },

            { thumb: pageTitleImage, full: typographyImage },




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
            <Fragment>
                <Navbar Logo={Logo} hclass={'wpo-header-style-5'} />
                <PageTitle pageTitle={'Portfolio'} pagesub={'Portfolio'} />
                <SectionTitle subTitle={'portfolio'} MainTitle={'Our projects'} vTitle={'Work'}/>


                <div className="container">
                    <div className="project-grid">
                        {projectImages.map((image, index) => (
                            <div
                            style={{ marginBottom: '0px' }} 

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

                <Footer />
                <Scrollbar />
            </Fragment>
        );
    }
}

export default PortfolioGridS2;
