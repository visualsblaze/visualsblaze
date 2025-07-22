import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminUpload.css";

const AdminUpload = () => {
  const [coverImage, setCoverImage] = useState("");
  const [innerImage, setInnerImage] = useState("");
  const [projectList, setProjectList] = useState([]);
  const navigate = useNavigate();

  const cloudName = "dtrfeoonx";
  const uploadPreset = "visuals";

  useEffect(() => {
    const isAdmin = localStorage.getItem("isAdmin");
    if (!isAdmin) {
      navigate("/signin"); // redirect if not logged in
    }

    const saved = JSON.parse(localStorage.getItem("portfolioProjects")) || [];
    setProjectList(saved);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    navigate("/");
  };

  const openWidget = (setImage) => {
    window.cloudinary.openUploadWidget(
      {
        cloudName,
        uploadPreset,
        sources: ["local", "url", "camera"],
        multiple: false,
        cropping: false,
      },
      (error, result) => {
        if (!error && result.event === "success") {
          setImage(result.info.secure_url);
        }
      }
    );
  };

  const saveProject = () => {
    if (!coverImage || !innerImage) {
      alert("Upload both cover and inner images.");
      return;
    }

    const newProject = { thumb: coverImage, full: innerImage };
    const updatedProjects = [...projectList, newProject];
    localStorage.setItem("portfolioProjects", JSON.stringify(updatedProjects));
    setProjectList(updatedProjects);
    setCoverImage("");
    setInnerImage("");
    alert("Project saved!");
  };

  const clearProjects = () => {
    if (window.confirm("Clear all uploaded projects?")) {
      localStorage.removeItem("portfolioProjects");
      setProjectList([]);
    }
  };

  return (
    <div className="admin-container">
      <div className="bot-header">
        <div className="bot-greeting">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4712/4712035.png"
            alt="bot"
          />
          <span className="bot-text">👋 Hi Admin!</span>
        </div>
        <button onClick={handleLogout} className="logout-btn">
          🚪 Logout
        </button>
      </div>

      <h2 className="admin-title">📁 Admin Upload Panel</h2>

      <div className="upload-section">
        <div className="upload-box">
          <button
            onClick={() => openWidget(setCoverImage)}
            className="upload-btn blue"
          >
            Upload Cover Image
          </button>
          {coverImage && (
            <img src={coverImage} alt="Cover" className="preview-img" />
          )}
        </div>

        <div className="upload-box">
          <button
            onClick={() => openWidget(setInnerImage)}
            className="upload-btn green"
          >
            Upload Inner Image
          </button>
          {innerImage && (
            <img src={innerImage} alt="Inner" className="preview-img" />
          )}
        </div>
      </div>

      <div className="button-group">
        <button onClick={saveProject} className="action-btn primary">
          ✅ Save Project
        </button>
        <button onClick={clearProjects} className="action-btn danger">
          🗑️ Clear All
        </button>
      </div>

      <hr className="divider" />

      <h3 className="sub-title">Uploaded Projects:</h3>
      <div className="projects-grid">
        {projectList.map((item, index) => (
          <div key={index} className="project-card">
            <img
              src={item.thumb}
              alt={`thumb-${index}`}
              className="project-img"
            />
            <img
              src={item.full}
              alt={`full-${index}`}
              className="project-img"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminUpload;
