import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import MyNavbar from './MyNavbar.jsx';
import LoginPage from './LoginPage.jsx';
import MyAbout from './MyAbout.jsx';
import MenuCard from './MenuCard.jsx'; 
import Qtymast from './Qtymast.jsx';
import MyFoodgroup from './MyFoodgroup.jsx';
import MyMenu from './MyMenu.jsx';

import './index.css'; // Adjust the path if necessary


export default function App() {
  // Set initial state based on sessionStorage
  const [isAuthenticated, setIsAuthenticated] = useState(
    sessionStorage.getItem('isAuthenticated') === 'true'
  );
  const location = useLocation();

  // Debugging: Check sessionStorage value on every render
  console.log('Is Authenticated:', isAuthenticated);
  console.log('Session Storage Auth:', sessionStorage.getItem('isAuthenticated'));

  const login = () => {
    setIsAuthenticated(true);
    sessionStorage.setItem('isAuthenticated', 'true'); // Store authentication status
    console.log('Login successful, sessionStorage updated'); // Debugging log
  };

  const logout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('isAuthenticated'); // Remove authentication status on logout
    console.log('Logged out, sessionStorage cleared'); // Debugging log
  };

  return (
    <>
      {/* Conditionally render MyNavbar */}
      {location.pathname !== "/" && <MyNavbar logout={logout} />}

      <Routes>
        <Route path="/" element={<LoginPage onLogin={login} />} />
        {/* Protect other routes */}
        <Route path="/MyAbout" element={isAuthenticated ? <MyAbout /> : <Navigate to="/" />} />
        <Route path="/MenuCard" element={<MenuCard />} /> {/* Ensure this is included to access directly */ }
        <Route path="/Qtymast" element={isAuthenticated ? <Qtymast /> : <Navigate to="/" />} />
        <Route path="/MyFoodgroup" element={isAuthenticated ? <MyFoodgroup /> : <Navigate to="/" />} />
        <Route path="/MyMenu" element={isAuthenticated ? <MyMenu /> : <Navigate to="/" />} />
      </Routes>
    </>
  );
}
