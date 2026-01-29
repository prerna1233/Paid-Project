import React, { useState } from 'react';
import './SignUp.style.css'

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassWord] = useState("");
  const [comfirmPassWord, setComfirmPaassWord] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password.length < 8) {
      setError("Password must be at least 8 characters");
      return;
    }

    if (password !== comfirmPassWord) {
      setError("Password and Confirm Password do not match");
      return;
    }

    setError("");
    alert("Account created successfully ✅");
  };

  return (
    <div className="sign_container">
      <div className="signup">
        <h2>Create Account</h2>

        {/* 🔴 ERROR MESSAGE */}
        {error && <p style={{ color: "red" }}>{error}</p>}

        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="userEmail"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassWord(e.target.value)}
            required
          />

          <label htmlFor="confirm_password">Confirm Password</label>
          <input
            type="password"
            id="confirm_password"
            placeholder="Enter your confirm password"
            value={comfirmPassWord}
            onChange={(e) => setComfirmPaassWord(e.target.value)}
            required
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
