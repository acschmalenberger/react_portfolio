import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Nav } from 'react-bootstrap'

function NavTabs() {
    const location = useLocation();
    
    return (
        <Nav className="justify-content-center" activeKey= "/" >
            <Nav.Item>
                <Link
                to="/about"
                className={location.pathname === "/about" ? "nav-link active" : "nav-link"}
                >
                About
                </Link>
            </Nav.Item>
            <Nav.Item>
                <Link
                to="/portfolio"
                className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
                >
                Protfolio
                </Link>
            </Nav.Item>
            <Nav.Item>
                <Link
                to="/contact"
                className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}
                >
                Contact
                </Link>
            </Nav.Item>

        </Nav>
    );
}

export default NavTabs;


