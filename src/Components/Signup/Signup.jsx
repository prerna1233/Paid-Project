import React from "react";
import "./Signup.style.css";

export default function Signup() {
  return (
    <div className="signup-container">
      <div className="signup-card">

      
        <div className="form-section">
          <h2>Signup</h2>

          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Create password" />
          <input type="password" placeholder="Confirm password" />

          <button className="signup-btn">Signup</button>

          <p className="login-text">
            Already have an account? <span>Login</span>
          </p>

          <div className="divider">
            <span>Or</span>
          </div>

          <button className="google-btn">
            <img
              src="/src/assets/download.png"
              alt="Google"
            />
            Login with Google
          </button>
        </div>


        <div className="design-section"></div>

      </div>
    </div>
  );
}
