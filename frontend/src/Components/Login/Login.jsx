import React from 'react'
import './Login.style.css'

export default function Login() {
  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login</h2>
        <p className="login-subtitle">Access your account</p>

        <form className="login-form">
          <label htmlFor="login-email">Email</label>
          <input id="login-email" type="email" placeholder="Enter your email" />

          <label htmlFor="login-password">Password</label>
          <input id="login-password" type="password" placeholder="Enter your password" />

          <button type="button">Login</button>
        </form>
      </div>
    </div>
  )
}
