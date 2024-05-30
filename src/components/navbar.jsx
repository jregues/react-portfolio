import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
    const location = useLocation();

    return (
        <nav className="navbar bg-body-tertiary fixed-top" style={{ marginTop: 0, paddingTop: 0 }}>
            <div className="container-fluid"  style={{ backgroundColor: 'rgb(3, 87, 165)', padding: 15 }}>
                <a className="navbar-brand" href="#" style={{ color: 'white' }}>James Egues</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation" style={{ backgroundColor: 'white' }}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" >
                    <div className="offcanvas-header" >
                        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Pages</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" ></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li className="nav-item">
                                <Link to="/" className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}>
                                    About
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Contact" className={location.pathname === '/Contact' ? 'nav-link active' : 'nav-link'}>
                                    Contact
                                </Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link to="/Portfolio" className={location.pathname === '/Portfolio' ? 'nav-link active' : 'nav-link'}>
                                    Portfolio
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;

