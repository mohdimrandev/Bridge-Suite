import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/bridge-logo.png';

const Header = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <header>
            <div >
                <Link to="/"><img src={logo} className="logo" alt="Logo" /></Link>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to="/" className={currentPath === "/" ? "active" : ""}>Home</Link>
                    </li>
                    <li>
                        <Link to="/about" className={currentPath === "/about" ? "active" : ""}>About</Link>
                    </li>
                    <li>
                        <Link to="/contact" className={currentPath === "/contact" ? "active" : ""}>Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
