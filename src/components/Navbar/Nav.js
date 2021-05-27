import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">
                Mind Managed
              </Link>
            <div>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link
                            to="/journal"
                            className={
                                window.location.pathname === "/journal"
                                    ? "nav-link active"
                                    : "nav-link"
                            }
                        >
                            Journal
                    </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/medication"
                            className={window.location.pathname === "/medication" ? "nav-link active" : "nav-link"}
                        >
                            Medication
                    </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;

