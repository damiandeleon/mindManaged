import React, { useState, useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { GiBrain } from 'react-icons/gi';
import { useDispatch } from 'react-redux';
import "./Nav.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
    const userProfile = JSON.parse(localStorage.getItem('profile'));
    const [user, setUser] = useState(userProfile);
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();

    const logout = () => {
      dispatch({ type: 'LOGOUT' })

      history.push('/')
      setUser(null)
    }

    console.log(user)

    useEffect(() => {
      // const token = user?.token;

      setUser(JSON.parse(localStorage.getItem('profile')))
    }, [location])

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/">
            Mind<GiBrain className="brain-style"/>Managed
          </Link>
          <div>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/journal" className={window.location.pathname === "/journal" ? "nav-link active" : "nav-link"}>
                  Journal
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/medication" className={window.location.pathname === "/medication" ? "nav-link active" : "nav-link"}>
                Medication
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/login" className={window.location.pathname === "/login" ? "nav-link active" : "nav-link"}>
                Login
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/logout" className={window.location.pathname === "/logout" ? "nav-link active" : "nav-link"} onClick={logout}>
                Log Out
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/signup" className={window.location.pathname === "/signup" ? "nav-link active" : "nav-link"}>
                Sign Up
                </Link>
              </li>
            </ul>
          </div>
      </nav>
    );
}

export default Navbar;

