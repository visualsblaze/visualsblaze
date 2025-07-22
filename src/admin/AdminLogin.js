import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminUpload.css"; // 👈 import the external CSS

const SignInPage = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const isAdmin = localStorage.getItem("isAdmin") === "true";
    if (isAdmin) {
      navigate("/admin");
    }
  }, [navigate]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === "blaze4464") {
      localStorage.setItem("isAdmin", "true");
      navigate("/admin");
    } else {
      setError("❌ Incorrect password. Try again.");
    }
  };

  return (
    <div className="signin-wrapper">
      <form onSubmit={handleLogin} className="signin-form">
        <h2 className="signin-title">Admin Panel</h2>

        <input
          type="password"
          placeholder="Enter Admin Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setError("");
          }}
          className="signin-input"
        />

        {error && <p className="signin-error">{error}</p>}

        <button type="submit" className="signin-button">
          🔐 Sign In
        </button>

        <p className="signin-footer">
          Forgot to logout? Clear session in browser settings.
        </p>
      </form>
    </div>
  );
};

export default SignInPage;
