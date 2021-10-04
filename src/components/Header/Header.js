import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {

    return (
        <div className="bg-secondary p-3 mx-auto text-light link-div mb-3">
            <Link to="/home" className="link">Home</Link>
            <Link to="/services" className="link">Services</Link>
            <Link to="/about" className="link">About</Link>
            <Link to="/contact" className="link">Contact Us</Link>
        </div>
    );
};

export default Header;