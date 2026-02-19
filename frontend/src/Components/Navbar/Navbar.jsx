import React, { useState, useEffect } from 'react'
import { NavLink, Link, useNavigate } from 'react-router-dom'
import styles from './Navbar.module.css'
// ...existing code imports
import logo from '../../assets/logo.png'
import { MdLanguage } from "react-icons/md";
// import { BsSun, BsMoon } from "react-icons/bs";
import { FaUser } from "react-icons/fa";


export default function Navbar() {
    const navigate = useNavigate();
    // Removed dark/light mode state
    const [showCulture, setShowCulture] = useState(false);
    const [showAbout, setShowAbout] = useState(false);
    const [showAccomodation, setShowAccomodation] = useState(false);
    const [showProfileDropdown, setShowProfileDropdown] = useState(false);
    const [authMode, setAuthMode] = useState('login'); // 'login', 'signup', 'profile'
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Set to false to show login/register by default
    const [isAdmin, setIsAdmin] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);
    const [userDetails, setUserDetails] = useState({
        username: 'Rajesh Kumar',
        email: 'rajesh.kumar@kishanganj.gov.in',
        designation: 'Assistant Collector'
    });
    const [updateLoading, setUpdateLoading] = useState(false);
    // Auth loading states
    const [loginLoading, setLoginLoading] = useState(false);
    const [signupLoading, setSignupLoading] = useState(false);

    // API base (Vite env override)
    const API_BASE = (import.meta && import.meta.env && import.meta.env.VITE_API_BASE) ? import.meta.env.VITE_API_BASE : 'https://paid-project.onrender.com';

    const safeParseJSON = (text) => {
        try { return JSON.parse(text); } catch { return null; }
    };

    const extractMessage = (value) => {
        if (!value && value !== 0) return '';
        if (typeof value === 'string') return value;
        if (typeof value === 'object') {
            if (value.message) return value.message;
            if (value.error) return (typeof value.error === 'string') ? value.error : (value.error.message || JSON.stringify(value.error));
            if (value.data && (value.data.message || value.data.error)) return value.data.message || value.data.error;
            try { return JSON.stringify(value); } catch { return String(value); }
        }
        return String(value);
    };
    
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
    const handleLogin = async (e) => {
        e.preventDefault();
        if (!loginForm.email || !loginForm.password) {
            alert('Please fill in all fields');
            return;
        }
        setLoginLoading(true);
        try {
            const res = await fetch(`${API_BASE}/auth/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: loginForm.email, password: loginForm.password })
            });
            if (!res.ok) {
                const txt = await res.text();
                const j = safeParseJSON(txt);
                const parsed = j ? j : txt;
                const parsedMsg = extractMessage(parsed);
                const friendly = (res.status === 401 || /invalid/i.test(parsedMsg || '')) ? 'Invalid login details. Please check your email and password.' : (parsedMsg || `Login failed (HTTP ${res.status})`);
                alert(friendly);
                throw new Error(parsedMsg || `HTTP ${res.status}`);
            }
            const data = await res.json();
            // Expecting { token, user }
            if (data.token) localStorage.setItem('token', data.token);
            const user = data.user || {};
            setUserDetails({
                username: user.name || (loginForm.email.split('@')[0] || ''),
                email: user.email || loginForm.email,
                designation: user.role || ''
            });
            setIsLoggedIn(true);
            setLoginForm({ email: '', password: '' });
            setShowProfileDropdown(false);
            alert('Login successful!');

            // If backend returned user role and it's admin, mark user as admin (don't auto-navigate)
            try {
                const role = user.role || '';
                if (role && /admin/i.test(String(role))) {
                    setIsAdmin(true);
                }

                // If no user payload was returned but we have a token, try to fetch profile to detect role
                if (!role && data.token) {
                    try {
                        const pr = await fetch(`${API_BASE}/auth/profile`, {
                            headers: { 'Authorization': `Bearer ${data.token}` }
                        });
                        if (pr.ok) {
                            const pjson = await pr.json();
                            if (pjson && pjson.role && /admin/i.test(String(pjson.role))) {
                                setIsAdmin(true);
                            }
                        }
                    } catch (pfErr) {
                        console.warn('Profile fetch after login failed', pfErr);
                    }
                }
            } catch (redirErr) {
                console.warn('Admin check after login failed', redirErr);
            }
        } catch (err) {
            console.error('Login error', err);
            // If we already alerted a friendly message above, avoid duplicating. For network errors, show a fallback.
            if (!err || !err.message) {
                alert('Login failed. Please check your connection and try again.');
            }
        } finally {
            setLoginLoading(false);
        }
    };
    
    const handleSignup = async (e) => {
        e.preventDefault();
        if (!signupForm.name || !signupForm.email || !signupForm.password || !signupForm.confirmPassword) {
            alert('Please fill in all fields');
            return;
        }
        if (signupForm.password !== signupForm.confirmPassword) {
            alert('Passwords do not match!');
            return;
        }
        setSignupLoading(true);
        try {
            const res = await fetch(`${API_BASE}/auth/register`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name: signupForm.name, email: signupForm.email, password: signupForm.password })
            });
            if (!res.ok) {
                const txt = await res.text();
                throw new Error(txt || `HTTP ${res.status}`);
            }
            const data = await res.json();
            if (data.token) localStorage.setItem('token', data.token);
            const user = data.user || {};
            setUserDetails({ username: user.name || signupForm.name, email: user.email || signupForm.email, designation: user.role || '' });
            if (user.role && /admin/i.test(String(user.role))) setIsAdmin(true);
            setIsLoggedIn(true);
            setSignupForm({ name: '', email: '', password: '', confirmPassword: '' });
            setShowProfileDropdown(false);
            alert('Account created successfully!');
        } catch (err) {
            console.error('Signup error', err);
            alert('Registration failed: ' + extractMessage(err));
        } finally {
            setSignupLoading(false);
        }
    };
    
    const [logoutLoading] = useState(false);

    const handleLogout = async () => {
        // Confirm destructive action: deleting account from DB
        const confirmed = window.confirm('Log out? This will end your session on this device.');
        if (!confirmed) return;

        try {
            // remove auth tokens and related local session data
            localStorage.removeItem('token');
            localStorage.removeItem('backupToken');
            localStorage.removeItem('userData');
        } catch {
          // ignore
        }

    setIsLoggedIn(false);
    setIsEditMode(false);
    setShowProfileDropdown(false);
    setAuthMode('login');
    setUserDetails({ username: '', email: '', designation: '' });
    setIsAdmin(false); // Hide admin link after logout
    navigate('/');
    };

    // On mount, check for token and fetch profile
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) return;
        let mounted = true;
        (async () => {
            try {
                const res = await fetch(`${API_BASE}/auth/profile`, {
                    headers: { 'Authorization': `Bearer ${token}` }
                });
                if (!res.ok) throw new Error('Failed to fetch profile');
                const profile = await res.json();
                if (!mounted) return;
                setUserDetails({ username: profile.name || '', email: profile.email || '', designation: profile.role || '' });
                if (profile && profile.role && /admin/i.test(String(profile.role))) setIsAdmin(true);
                setIsLoggedIn(true);
            } catch (err) {
                console.warn('Profile fetch failed', err);
                localStorage.removeItem('token');
            }
        })();
        return () => { mounted = false; };
    }, [API_BASE]);



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
                        {/* Non-clickable trigger for About — opens hover dropdown only */}
                        <span
                            role="button"
                            tabIndex={0}
                            aria-haspopup="true"
                            aria-expanded={showAbout}
                            onClick={(e) => e.preventDefault()}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                    e.preventDefault();
                                    setShowAbout((s) => !s);
                                }
                            }}
                        >
                            About
                        </span>

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
                        {/* Non-clickable trigger for Culture — opens hover dropdown only */}
                        <span
                            role="button"
                            tabIndex={0}
                            aria-haspopup="true"
                            aria-expanded={showCulture}
                            onClick={(e) => e.preventDefault()}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                    e.preventDefault();
                                    setShowCulture((s) => !s);
                                }
                            }}
                        >
                            Culture
                        </span>

                        {showCulture && (
                            <div className={styles.cultureDropdown}>
                                <Link to="/Culture/festivals">Festivals & Traditions</Link>
                                <Link to="/Culture/art">Art & Handicrafts</Link>
                                <Link to="/Culture/food">Food & Lifestyle</Link>
                            </div>
                        )}
                    </div>

                    <Link to="/Blogs">Blogs</Link>
                    {isAdmin && (
                        <Link to="/admin" style={{ color: '#b23b3b', fontWeight: 700 }}>Admin</Link>
                    )}
                </nav>

                {/* ----- Right Section ----- */}
                <div className={styles.right}>

                    {/* Theme Icon */}
                    {/* Theme toggle removed */}

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
                                                {/* Neutral avatar frame (initials if available) */}
                                                <div style={{
                                                    width: '50px',
                                                    height: '50px',
                                                    borderRadius: '50%',
                                                    marginRight: '15px',
                                                    border: '2px solid rgba(255,255,255,0.3)',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    fontWeight: 700,
                                                    color: 'rgba(255,255,255,0.95)'
                                                }}>
                                                    {userDetails && userDetails.username ? userDetails.username.split(' ').map(n => n[0]).slice(0,2).join('') : ''}
                                                </div>
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
                                                                onClick={async () => {
                                                                    // Save changes to backend
                                                                    const token = localStorage.getItem('token');
                                                                    const nameToSave = editForm.username || userDetails.username;
                                                                    const emailToSave = editForm.email || userDetails.email;
                                                                    setUpdateLoading(true);
                                                                    try {
                                                                        const res = await fetch(`${API_BASE}/auth/profile`, {
                                                                            method: 'PUT',
                                                                            headers: {
                                                                                'Content-Type': 'application/json',
                                                                                ...(token ? { 'Authorization': `Bearer ${token}` } : {})
                                                                            },
                                                                            body: JSON.stringify({ name: nameToSave, email: emailToSave })
                                                                        });
                                                                        if (!res.ok) {
                                                                            const txt = await res.text();
                                                                            throw new Error(txt || `HTTP ${res.status}`);
                                                                        }
                                                                        const data = await res.json();
                                                                        // Update local state from server response if provided
                                                                        if (data && data.user) {
                                                                            setUserDetails({ username: data.user.name || nameToSave, email: data.user.email || emailToSave, designation: data.user.role || userDetails.designation });
                                                                        } else {
                                                                            setUserDetails({ username: nameToSave, email: emailToSave, designation: userDetails.designation });
                                                                        }
                                                                        setIsEditMode(false);
                                                                        setEditForm({ username: '', email: '', password: '' });
                                                                        alert('Profile updated successfully!');
                                                                    } catch (err) {
                                                                        console.error('Profile update failed', err);
                                                                        alert('Profile update failed: ' + extractMessage(err));
                                                                    } finally {
                                                                        setUpdateLoading(false);
                                                                    }
                                                                }}
                                                                disabled={updateLoading}
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
                                                                {updateLoading ? 'Saving...' : 'Save'}
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
                                                    disabled={logoutLoading}
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
                                                    {logoutLoading ? 'Processing...' : 'Logout'}
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
                                                        disabled={loginLoading}
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
                                                        {loginLoading ? 'Logging in...' : 'SECURE LOGIN'}
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
                                                        disabled={signupLoading}
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
                                                        {signupLoading ? 'Creating...' : 'CREATE ACCOUNT'}
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
