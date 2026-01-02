
import React from "react";
import "./Login.style.css";

export default function Login() {
  return (
    <div className="login-container">
      <div className="login-card">
        <label>Username or Email</label>
        <input type="text" placeholder="" />

        <label>Password</label>
        <input type="password" placeholder="" />

        <div className="row">
          <button className="signin-btn">Login</button>
          <a href="#" className="forgot">Forgot password?</a>
        </div>

        <p className="or">or</p>

        <button className="google-btn">
          <img src="../src/assets/google-icon-2.png"alt="Google"
          style={{ width: "30px", height: "25px", marginRight: "10px" }}/>
       Login With Google
        </button>

        <p className="new">
          <span>Create account</span>
        </p>

      </div>
    </div>
  );
}
