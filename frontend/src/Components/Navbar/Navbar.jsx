import React from 'react'
import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import styles from './Navbar.module.css'
import Home from '../../Pages/Home/Home.jsx'
import About from '../../Pages/About/About.jsx'
import Culture from '../../Pages/Culture/Culture.jsx'
import logo from '../../assets/logo.png'
import { MdLanguage } from "react-icons/md";
import { BsSun, BsMoon } from "react-icons/bs";
import { FaUser } from "react-icons/fa";


export default function Navbar() {
    const [dark, light] = useState(false);
    const [showCulture, setShowCulture] = useState(false);
    const [showAbout, setShowAbout] = useState(false);
    const [showAccomodation, setShowAccomodation] = useState(false);
    const [showProfileDropdown, setShowProfileDropdown] = useState(false);
    const [authMode, setAuthMode] = useState('login'); // 'login', 'signup', 'profile'
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Set to false to show login/register by default
    const [isEditMode, setIsEditMode] = useState(false);
    const [userDetails, setUserDetails] = useState({
        username: 'Rajesh Kumar',
        email: 'rajesh.kumar@kishanganj.gov.in',
        designation: 'Assistant Collector'
    });
    
    // Form state management
    const [loginForm, setLoginForm] = useState({ email: '', password: '' });
    const [signupForm, setSignupForm] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [editForm, setEditForm] = useState({
        username: '',
        email: '',
        password: ''
    });
    
    // Authentication handlers
    const handleLogin = (e) => {
        e.preventDefault();
        if (loginForm.email && loginForm.password) {
            // Simulate successful login
            setUserDetails({
                username: loginForm.email.split('@')[0].replace('.', ' ').replace(/\b\w/g, l => l.toUpperCase()),
                email: loginForm.email,
                department: 'District Administration',
                designation: 'Government Official'
            });
            setIsLoggedIn(true);
            setLoginForm({ email: '', password: '' }); // Clear form
            alert('Login successful!');
        } else {
            alert('Please fill in all fields');
        }
    };
    
    const handleSignup = (e) => {
        e.preventDefault();
        if (signupForm.name && signupForm.email && signupForm.password && signupForm.confirmPassword) {
            if (signupForm.password !== signupForm.confirmPassword) {
                alert('Passwords do not match!');
                return;
            }
            // Simulate successful signup
            setUserDetails({
                username: signupForm.name,
                email: signupForm.email,
                department: 'District Administration',
                designation: 'New User'
            });
            setIsLoggedIn(true);
            setSignupForm({ name: '', email: '', password: '', confirmPassword: '' }); // Clear form
            alert('Account created successfully!');
        } else {
            alert('Please fill in all fields');
        }
    };
    
    const handleLogout = () => {
        setIsLoggedIn(false);
        setShowProfileDropdown(false);
        setAuthMode('login');
        alert('Logged out successfully!');
    };



    return (
        <>
            <div className={styles.NavContainer}>

                {/* ---- LoGo ---- */}
                <div className={styles.logo}>
                    <img src={logo} alt="LoGo" />

                </div>

                {/* ----- NavLinks ----- */}
                <nav className={styles.navbar}>
                    <Link to="/">Home</Link>
                    
                    <div
                        className={styles.cultureWrapper}
                        onMouseEnter={() => setShowAbout(true)}
                        onMouseLeave={() => setShowAbout(false)}>
                        <Link to="About">About</Link>

                        {showAbout && (
                            <div className={styles.cultureDropdown}>
                                <Link to="/About/Historykishanganj">History</Link>
                                <Link to="/About/WhoIsWho">Who's Who</Link>
                                <Link to="/About/Economy">Economy</Link>
                            </div>
                        )}
                    </div>

                    <div
                        className={styles.cultureWrapper}
                        onMouseEnter={() => setShowAccomodation(true)}
                        onMouseLeave={() => setShowAccomodation(false)}>
                        <Link to="Destination">Explore</Link>

                        {showAccomodation && (
                            <div className={styles.cultureDropdown}>
                                <Link to="/Destination">Find Destinations</Link>
                                <Link to="/Destination/Hotel_Homepage">Hotel</Link>
                            </div>
                        )}
                    </div>

                    <div
                        className={styles.cultureWrapper}
                        onMouseEnter={() => setShowCulture(true)}
                        onMouseLeave={() => setShowCulture(false)}>
                        <Link to="Culture">Culture</Link>

                        {showCulture && (
                            <div className={styles.cultureDropdown}>
                                <Link to="/Culture/festivals">Festivals & Traditions</Link>
                                <Link to="/Culture/art">Art & Handicrafts</Link>
                                <Link to="/Culture/food">Food & Lifestyle</Link>
                            </div>
                        )}
                    </div>

                    <Link to="/Blogs">Blogs</Link>
                </nav>

                {/* ----- Right Section ----- */}
                <div className={styles.right}>

                    {/* Theme Icon */}
                    <div className={styles.themeIcon} onClick={() => light(!dark)}>
                        {dark ? <BsMoon /> : <BsSun />}
                    </div>

                    {/* Language Icon */}
                    <div className={styles.language}>
                        <MdLanguage className={styles.languageIcon} />
                        <select>
                            <option>English</option>
                            <option>Hindi</option>
                        </select>
                    </div>
                    {/* ----- Profile Icon / Auth ----- */}
                    <div 
                        className={styles.ProfileIcon} 
                        onClick={() => setShowProfileDropdown(!showProfileDropdown)} 
                        style={{ position: 'relative', cursor: 'pointer', marginRight: '50px' }}
                    >
                        <div style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            backgroundColor: '#4a7c59',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white'
                        }}>
                            <FaUser size={20} />
                        </div>
                        
                        {/* Professional District Profile Dropdown */}
                        {showProfileDropdown && (
                            <>
                                {/* Click outside overlay */}
                                <div 
                                    style={{
                                        position: 'fixed',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        zIndex: 999
                                    }}
                                    onClick={() => setShowProfileDropdown(false)}
                                ></div>
                                
                                <div 
                                    style={{
                                        position: 'absolute',
                                        top: '100%',
                                        right: '0',
                                        marginTop: '12px',
                                        background: '#ffffff',
                                        border: '1px solid #e1e5e9',
                                        borderRadius: '12px',
                                        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.2)',
                                        padding: '0',
                                        width: '380px',
                                        zIndex: '1000',
                                        overflow: 'hidden'
                                    }}
                                    onClick={(e) => e.stopPropagation()}
                                >
                                {isLoggedIn ? (
                                    /* Logged In User Profile */
                                    <div>
                                        {/* Header */}
                                        <div style={{
                                            background: 'linear-gradient(135deg, #4a7c59 0%, #5d8a6a 50%, #629f4fff 100%)',
                                            padding: '25px',
                                            color: '#ffffff'
                                        }}>
                                            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                                                <img 
                                                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
                                                    alt="Profile"
                                                    style={{
                                                        width: '50px',
                                                        height: '50px',
                                                        borderRadius: '50%',
                                                        marginRight: '15px',
                                                        border: '2px solid rgba(255,255,255,0.3)'
                                                    }}
                                                />
                                                <div>
                                                    <h3 style={{ margin: '0 0 4px 0', fontSize: '18px', fontWeight: '600' }}>
                                                        {userDetails.username}
                                                    </h3>
                                                    <p style={{ margin: '0', fontSize: '13px', opacity: '0.9' }}>
                                                        {userDetails.designation}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        {/* User Details */}
                                        <div style={{ padding: '20px' }}>
                                            {!isEditMode ? (
                                                /* View Mode */
                                                <>
                                                    <div style={{ marginBottom: '15px' }}>
                                                        <label style={{ 
                                                            display: 'block', 
                                                            fontSize: '12px', 
                                                            color: '#6b7280',
                                                            fontWeight: '600',
                                                            textTransform: 'uppercase',
                                                            letterSpacing: '0.5px',
                                                            marginBottom: '4px' 
                                                        }}>Username</label>
                                                        <div style={{
                                                            fontSize: '14px',
                                                            color: '#374151',
                                                            fontWeight: '500'
                                                        }}>
                                                            {userDetails.username}
                                                        </div>
                                                    </div>
                                                    
                                                    <div style={{ marginBottom: '15px' }}>
                                                        <label style={{ 
                                                            display: 'block', 
                                                            fontSize: '12px', 
                                                            color: '#6b7280',
                                                            fontWeight: '600',
                                                            textTransform: 'uppercase',
                                                            letterSpacing: '0.5px',
                                                            marginBottom: '4px' 
                                                        }}>Email</label>
                                                        <div style={{
                                                            fontSize: '14px',
                                                            color: '#374151'
                                                        }}>
                                                            {userDetails.email}
                                                        </div>
                                                    </div>
                                                </>
                                            ) : (
                                                /* Edit Mode */
                                                <>
                                                    <div style={{ marginBottom: '15px' }}>
                                                        <label style={{ 
                                                            display: 'block', 
                                                            fontSize: '12px', 
                                                            color: '#6b7280',
                                                            fontWeight: '600',
                                                            textTransform: 'uppercase',
                                                            letterSpacing: '0.5px',
                                                            marginBottom: '4px' 
                                                        }}>Username</label>
                                                        <input
                                                            type="text"
                                                            value={editForm.username || userDetails.username}
                                                            onChange={(e) => setEditForm({...editForm, username: e.target.value})}
                                                            style={{
                                                                width: '100%',
                                                                padding: '10px',
                                                                border: '1px solid #d1d5db',
                                                                borderRadius: '6px',
                                                                fontSize: '14px',
                                                                boxSizing: 'border-box',
                                                                color: '#000000'
                                                            }}
                                                        />
                                                    </div>
                                                    
                                                    <div style={{ marginBottom: '15px' }}>
                                                        <label style={{ 
                                                            display: 'block', 
                                                            fontSize: '12px', 
                                                            color: '#6b7280',
                                                            fontWeight: '600',
                                                            textTransform: 'uppercase',
                                                            letterSpacing: '0.5px',
                                                            marginBottom: '4px' 
                                                        }}>Email</label>
                                                        <input
                                                            type="email"
                                                            value={editForm.email || userDetails.email}
                                                            onChange={(e) => setEditForm({...editForm, email: e.target.value})}
                                                            style={{
                                                                width: '100%',
                                                                padding: '10px',
                                                                border: '1px solid #d1d5db',
                                                                borderRadius: '6px',
                                                                fontSize: '14px',
                                                                boxSizing: 'border-box',
                                                                color: '#000000'
                                                            }}
                                                        />
                                                    </div>
                                                    
                                                    <div style={{ marginBottom: '15px' }}>
                                                        <label style={{ 
                                                            display: 'block', 
                                                            fontSize: '12px', 
                                                            color: '#6b7280',
                                                            fontWeight: '600',
                                                            textTransform: 'uppercase',
                                                            letterSpacing: '0.5px',
                                                            marginBottom: '4px' 
                                                        }}>New Password</label>
                                                        <input
                                                            type="password"
                                                            value={editForm.password}
                                                            onChange={(e) => setEditForm({...editForm, password: e.target.value})}
                                                            style={{
                                                                width: '100%',
                                                                padding: '10px',
                                                                border: '1px solid #d1d5db',
                                                                borderRadius: '6px',
                                                                fontSize: '14px',
                                                                boxSizing: 'border-box',
                                                                color: '#000000'
                                                            }}
                                                            placeholder="Leave empty to keep current password"
                                                        />
                                                    </div>
                                                </>
                                            )}
                                            
                                            {/* Action Buttons */}
                                            <div style={{ 
                                                borderTop: '1px solid #f3f4f6',
                                                paddingTop: '15px',
                                                display: 'flex',
                                                gap: '8px'
                                            }}>
                                                {!isEditMode ? (
                                                    <button 
                                                        onClick={() => {
                                                            setIsEditMode(true);
                                                            setEditForm({
                                                                username: userDetails.username,
                                                                email: userDetails.email,
                                                                password: ''
                                                            });
                                                        }}
                                                        style={{
                                                            flex: '1',
                                                            padding: '10px 16px',
                                                            background: 'linear-gradient(135deg, #4a7c59 0%, #5d8a6a 100%)',
                                                            border: 'none',
                                                            borderRadius: '6px',
                                                            color: '#ffffff',
                                                            fontSize: '14px',
                                                            fontWeight: '500',
                                                            cursor: 'pointer',
                                                            transition: 'all 0.2s'
                                                        }}
                                                    >
                                                        Edit Profile
                                                    </button>
                                                ) : (
                                                    <>
                                                        <button 
                                                            onClick={() => {
                                                                // Save changes
                                                                const updatedDetails = {
                                                                    ...userDetails,
                                                                    username: editForm.username || userDetails.username,
                                                                    email: editForm.email || userDetails.email
                                                                };
                                                                setUserDetails(updatedDetails);
                                                                setIsEditMode(false);
                                                                setEditForm({ username: '', email: '', password: '' });
                                                                alert('Profile updated successfully!');
                                                            }}
                                                            style={{
                                                                flex: '1',
                                                                padding: '10px 16px',
                                                                background: 'linear-gradient(135deg, #059669 0%, #10b981 100%)',
                                                                border: 'none',
                                                                borderRadius: '6px',
                                                                color: '#ffffff',
                                                                fontSize: '14px',
                                                                fontWeight: '500',
                                                                cursor: 'pointer',
                                                                transition: 'all 0.2s'
                                                            }}
                                                        >
                                                            Save
                                                        </button>
                                                        <button 
                                                            onClick={() => {
                                                                setIsEditMode(false);
                                                                setEditForm({ username: '', email: '', password: '' });
                                                            }}
                                                            style={{
                                                                flex: '1',
                                                                padding: '10px 16px',
                                                                background: '#6b7280',
                                                                border: 'none',
                                                                borderRadius: '6px',
                                                                color: '#ffffff',
                                                                fontSize: '14px',
                                                                fontWeight: '500',
                                                                cursor: 'pointer',
                                                                transition: 'all 0.2s'
                                                            }}
                                                        >
                                                            Cancel
                                                        </button>
                                                    </>
                                                )}
                                                <button 
                                                    onClick={handleLogout}
                                                    style={{
                                                        flex: '1',
                                                        padding: '10px 16px',
                                                        background: '#dc2626',
                                                        border: 'none',
                                                        borderRadius: '6px',
                                                        color: '#ffffff',
                                                        fontSize: '14px',
                                                        fontWeight: '500',
                                                        cursor: 'pointer',
                                                        transition: 'all 0.2s'
                                                    }}
                                                >
                                                    Logout
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    /* Login/Signup Section */
                                    <div>
                                        {/* Header */}
                                        <div style={{
                                            background: 'linear-gradient(135deg, #4a7c59 0%, #5d8a6a 50%, #629f4fff 100%)',
                                            padding: '25px',
                                            color: '#ffffff',
                                            textAlign: 'center'
                                        }}>
                                            <div style={{
                                                width: '60px',
                                                height: '60px',
                                                background: 'rgba(255,255,255,0.2)',
                                                borderRadius: '50%',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                margin: '0 auto 12px auto',
                                                fontSize: '24px'
                                            }}>
                                                🏛️
                                            </div>
                                            <h3 style={{ margin: '0 0 4px 0', fontSize: '18px', fontWeight: '600' }}>
                                                District Portal Access
                                            </h3>
                                            <p style={{ margin: '0', fontSize: '13px', opacity: '0.9' }}>
                                                Kishanganj Administration
                                            </p>
                                        </div>
                                        
                                        {/* Auth Tabs */}
                                        <div style={{
                                            display: 'flex',
                                            borderBottom: '1px solid #e5e7eb'
                                        }}>
                                            <button
                                                onClick={() => setAuthMode('login')}
                                                style={{
                                                    flex: 1,
                                                    padding: '12px',
                                                    border: 'none',
                                                    background: authMode === 'login' ? '#f8fafc' : 'transparent',
                                                    color: authMode === 'login' ? '#4a7c59' : '#6b7280',
                                                    fontSize: '14px',
                                                    fontWeight: '600',
                                                    cursor: 'pointer',
                                                    borderBottom: authMode === 'login' ? '2px solid #5d8a6a' : '2px solid transparent'
                                                }}
                                            >
                                                LOGIN
                                            </button>
                                            <button
                                                onClick={() => setAuthMode('signup')}
                                                style={{
                                                    flex: 1,
                                                    padding: '12px',
                                                    border: 'none',
                                                    background: authMode === 'signup' ? '#f8fafc' : 'transparent',
                                                    color: authMode === 'signup' ? '#4a7c59' : '#6b7280',
                                                    fontSize: '14px',
                                                    fontWeight: '600',
                                                    cursor: 'pointer',
                                                    borderBottom: authMode === 'signup' ? '2px solid #5d8a6a' : '2px solid transparent'
                                                }}
                                            >
                                                REGISTER
                                            </button>
                                        </div>
                                        
                                        {/* Auth Forms */}
                                        <div style={{ padding: '20px' }}>
                                            {authMode === 'login' && (
                                                <div>
                                                    <div style={{ marginBottom: '16px' }}>
                                                        <label style={{ 
                                                            display: 'block', 
                                                            fontSize: '13px', 
                                                            color: '#374151',
                                                            fontWeight: '500',
                                                            marginBottom: '6px' 
                                                        }}>Official Email ID</label>
                                                        <input 
                                                            type="email" 
                                                            value={loginForm.email}
                                                            onChange={(e) => setLoginForm({...loginForm, email: e.target.value})}
                                                            style={{
                                                                width: '100%',
                                                                padding: '12px',
                                                                border: '1px solid #d1d5db',
                                                                borderRadius: '6px',
                                                                fontSize: '14px',
                                                                boxSizing: 'border-box',
                                                                transition: 'border-color 0.2s',
                                                                color: '#000000'
                                                            }}
                                                            placeholder="your.name@kishanganj.gov.in"
                                                        />
                                                    </div>
                                                    
                                                    <div style={{ marginBottom: '20px' }}>
                                                        <label style={{ 
                                                            display: 'block', 
                                                            fontSize: '13px', 
                                                            color: '#374151',
                                                            fontWeight: '500',
                                                            marginBottom: '6px' 
                                                        }}>Password</label>
                                                        <input 
                                                            type="password" 
                                                            value={loginForm.password}
                                                            onChange={(e) => setLoginForm({...loginForm, password: e.target.value})}
                                                            style={{
                                                                width: '100%',
                                                                padding: '12px',
                                                                border: '1px solid #d1d5db',
                                                                borderRadius: '6px',
                                                                fontSize: '14px',
                                                                boxSizing: 'border-box',
                                                                transition: 'border-color 0.2s',
                                                                color: '#000000'
                                                            }}
                                                            placeholder="Enter your password"
                                                        />
                                                    </div>
                                                    
                                                    <button 
                                                        onClick={handleLogin}
                                                        style={{
                                                            width: '100%',
                                                            padding: '14px',
                                                            background: 'linear-gradient(135deg, #4a7c59 0%, #5d8a6a 50%, #629f4fff 100%)',
                                                            color: '#ffffff',
                                                            border: 'none',
                                                            borderRadius: '8px',
                                                            fontSize: '15px',
                                                            fontWeight: '600',
                                                            cursor: 'pointer',
                                                            transition: 'all 0.3s',
                                                            textTransform: 'uppercase',
                                                            letterSpacing: '0.5px'
                                                        }}
                                                    >
                                                        SECURE LOGIN
                                                    </button>
                                                    
                                                    <div style={{ 
                                                        textAlign: 'center', 
                                                        marginTop: '12px',
                                                        fontSize: '12px',
                                                        color: '#6b7280'
                                                    }}>
                                                        Forgot password? Contact IT Support
                                                    </div>
                                                </div>
                                            )}
                                            
                                            {authMode === 'signup' && (
                                                <div>
                                                    <div style={{ marginBottom: '16px' }}>
                                                        <label style={{ 
                                                            display: 'block', 
                                                            fontSize: '13px', 
                                                            color: '#374151',
                                                            fontWeight: '500',
                                                            marginBottom: '6px' 
                                                        }}>Full Name</label>
                                                        <input 
                                                            type="text" 
                                                            value={signupForm.name}
                                                            onChange={(e) => setSignupForm({...signupForm, name: e.target.value})} 
                                                            style={{
                                                                width: '100%',
                                                                padding: '12px',
                                                                border: '1px solid #d1d5db',
                                                                borderRadius: '6px',
                                                                fontSize: '14px',
                                                                boxSizing: 'border-box',
                                                                color: '#000000'
                                                            }}
                                                            placeholder="Enter your full name"
                                                        />
                                                    </div>
                                                    
                                                    <div style={{ marginBottom: '16px' }}>
                                                        <label style={{ 
                                                            display: 'block', 
                                                            fontSize: '13px', 
                                                            color: '#374151',
                                                            fontWeight: '500',
                                                            marginBottom: '6px' 
                                                        }}>Official Email</label>
                                                        <input 
                                                            type="email" 
                                                            value={signupForm.email}
                                                            onChange={(e) => setSignupForm({...signupForm, email: e.target.value})}
                                                            style={{
                                                                width: '100%',
                                                                padding: '12px',
                                                                border: '1px solid #d1d5db',
                                                                borderRadius: '6px',
                                                                fontSize: '14px',
                                                                boxSizing: 'border-box',
                                                                color: '#000000'
                                                            }}
                                                            placeholder="your.name@kishanganj.gov.in"
                                                        />
                                                    </div>
                                                    
                                                    <div style={{ marginBottom: '16px' }}>
                                                        <label style={{ 
                                                            display: 'block', 
                                                            fontSize: '13px', 
                                                            color: '#374151',
                                                            fontWeight: '500',
                                                            marginBottom: '6px' 
                                                        }}>Password</label>
                                                        <input 
                                                            type="password" 
                                                            value={signupForm.password}
                                                            onChange={(e) => setSignupForm({...signupForm, password: e.target.value})}
                                                            style={{
                                                                width: '100%',
                                                                padding: '12px',
                                                                border: '1px solid #d1d5db',
                                                                borderRadius: '6px',
                                                                fontSize: '14px',
                                                                boxSizing: 'border-box',
                                                                color: '#000000'
                                                            }}
                                                            placeholder="Create a secure password"
                                                        />
                                                    </div>
                                                    
                                                    <div style={{ marginBottom: '20px' }}>
                                                        <label style={{ 
                                                            display: 'block', 
                                                            fontSize: '13px', 
                                                            color: '#374151',
                                                            fontWeight: '500',
                                                            marginBottom: '6px' 
                                                        }}>Confirm Password</label>
                                                        <input 
                                                            type="password" 
                                                            value={signupForm.confirmPassword}
                                                            onChange={(e) => setSignupForm({...signupForm, confirmPassword: e.target.value})}
                                                            style={{
                                                                width: '100%',
                                                                padding: '12px',
                                                                border: '1px solid #d1d5db',
                                                                borderRadius: '6px',
                                                                fontSize: '14px',
                                                                boxSizing: 'border-box',
                                                                color: '#000000'
                                                            }}
                                                            placeholder="Confirm your password"
                                                        />
                                                    </div>
                                                    
                                                    <button 
                                                        onClick={handleSignup}
                                                        style={{
                                                            width: '100%',
                                                            padding: '14px',
                                                            background: 'linear-gradient(135deg, #4a7c59 0%, #5d8a6a 50%, #629f4fff 100%)',
                                                            color: '#ffffff',
                                                            border: 'none',
                                                            borderRadius: '8px',
                                                            fontSize: '15px',
                                                            fontWeight: '600',
                                                            cursor: 'pointer',
                                                            transition: 'all 0.3s',
                                                            textTransform: 'uppercase',
                                                            letterSpacing: '0.5px'
                                                        }}>
                                                        CREATE ACCOUNT
                                                    </button>
                                                    
                                                    <div style={{ 
                                                        textAlign: 'center', 
                                                        marginTop: '12px',
                                                        fontSize: '12px',
                                                        color: '#6b7280'
                                                    }}>
                                                        Account approval required by Admin
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                            </>
                        )}
                    </div>

                </div>
            </div>

        </>
    )
}
