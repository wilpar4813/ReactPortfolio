import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
    return (
        <div className="navcontainer">
            <nav className="contactBar">
                <div className="icons">
                    <ul>
                        <li className="ml-auto">
                            <a href="mailto:webmaster@tripp.parham@gmail.com">
                                <i class="far fa-envelope"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://bit.ly/3baM4M9">
                                <i class="fab fa-linkedin"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://bit.ly/3cdMQcP">
                                <i class="fab fa-github-square"></i>
                            </a>
                        </li>
                        <li className="mr-auto">
                            <a href="https://www.facebook.com/TrippParham">
                                <i class="fab fa-facebook-square"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
            <nav className="navbar navbar-expand-lg header">
                <Link className="navbar-brand" to="/">
                    Tripp Parham
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target=".navbarText"
                    aria-controls="navbarText"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="dark-blue-text">
                        <i className="fas fa-bars fa-1x"></i>
                    </span>
                </button>

                <div className="navbar-collapse collapse navbarText">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link
                                to="/"
                                className={
                                    window.location.pathname === "/" ||
                                    window.location.pathname === "/about"
                                        ? "nav-link active"
                                        : "nav-link"
                                }
                            >
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/portfolio"
                                className={
                                    window.location.pathname === "/portfolio"
                                        ? "nav-link active"
                                        : "nav-link"
                                }
                            >
                                Projects
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/resume"
                                className={
                                    window.location.pathname === "/resume"
                                        ? "nav-link active"
                                        : "nav-link"
                                }
                            >
                                Resume
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/contact"
                                className={
                                    window.location.pathname === "/contact"
                                        ? "nav-link active"
                                        : "nav-link"
                                }
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div> //End navcontainer
    );
}

export default Navbar;
