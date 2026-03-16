/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('userData');
    if (!savedUser) return null;

    try {
      return JSON.parse(savedUser);
    } catch (error) {
      console.error('Error parsing user data:', error);
      localStorage.removeItem('userData');
      return null;
    }
  });
  const isLoading = false;

  const login = (email, password) => {
    const savedUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
    const foundUser = savedUsers.find((u) => u.email === email && u.password === password);

    if (foundUser) {
      const { password: _password, ...userWithoutPassword } = foundUser;
      setUser(userWithoutPassword);
      localStorage.setItem('userData', JSON.stringify(userWithoutPassword));
      return { success: true };
    }

    return { success: false, error: 'Invalid email or password' };
  };

  const register = (username, email, password, confirmPassword) => {
    if (password !== confirmPassword) {
      return { success: false, error: 'Passwords do not match' };
    }

    const savedUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
    const existingUser = savedUsers.find((u) => u.email === email);

    if (existingUser) {
      return { success: false, error: 'User already exists with this email' };
    }

    const newUser = {
      id: Date.now(),
      username,
      email,
      password,
      createdAt: new Date().toISOString(),
    };

    savedUsers.push(newUser);
    localStorage.setItem('registeredUsers', JSON.stringify(savedUsers));

    const { password: _password, ...userWithoutPassword } = newUser;
    setUser(userWithoutPassword);
    localStorage.setItem('userData', JSON.stringify(userWithoutPassword));

    return { success: true };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('userData');
  };

  const updateProfile = (updatedData) => {
    const savedUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
    const userIndex = savedUsers.findIndex((u) => u.id === user.id);

    if (userIndex !== -1) {
      savedUsers[userIndex] = { ...savedUsers[userIndex], ...updatedData };
      localStorage.setItem('registeredUsers', JSON.stringify(savedUsers));

      const updatedUser = { ...user, ...updatedData };
      setUser(updatedUser);
      localStorage.setItem('userData', JSON.stringify(updatedUser));

      return { success: true };
    }

    return { success: false, error: 'User not found' };
  };

  const value = {
    user,
    isLoading,
    login,
    register,
    logout,
    updateProfile,
    isAuthenticated: !!user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
