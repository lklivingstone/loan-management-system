import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './Navbar.css';
import { NavbarItem } from '../navbarItem/NavbarItem';

function Navbar() {
    const navigate= useNavigate()

    const handleLogoutClick = () => {
        navigate("/logout")
    };

    const handleHomeClick = () => {
        navigate("/")
    };

    return (
        <nav className='navbar'>
            <div className="navbar-container">
                <NavbarItem label="home" onClick={handleHomeClick} />
            </div>
            <div className="navbar-container-right">
                <NavbarItem label="Logout" onClick={handleLogoutClick} />
            </div>
            <div className="border"></div>
        </nav>
    );
}

export default Navbar;