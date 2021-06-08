import React, {useState,useEffect} from "react";
import { Link} from "react-router-dom";
import { GiBrain } from 'react-icons/gi';
import LoginBtn from '../LoginBtn/LoginBtn'
import LogoutBtn from '../LogoutBtn/LogoutBtn'
import { useAuth0 } from '@auth0/auth0-react';
import API from '../../utils/API'
import "./Nav.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  const { user, isAuthenticated } = useAuth0();

  const [userData, setUserData] = useState({
    given_name: 'loading',
    family_name: 'loading',
    email: 'loading',
    sub: 'loading',
    picture: 'loading'
  })

  useEffect(() => {
    if (isAuthenticated) {
      setUserData(user)
      API.saveUser({
        firstName: userData.given_name,
        lastName: userData.family_name,
        email: userData.email,
        user_id: userData.sub,
        picture: userData.picture
      })
    }
  },[isAuthenticated, user, userData])

    return (
      <nav className="navbar navbar-default navbar-expand-lg navbar-light bg-light" expand="lg">
          <Link className="navbar-brand" to="/">
            Mind<GiBrain className="brain-style"/>Managed
          </Link>

          <div>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/charts" className={window.location.pathname === "/charts" ? "nav-link active" : "nav-link"}>
                  Charts
                </Link>
              </li>
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
                <LoginBtn name="Login" variant="outline-info"/>
              </li>
              <li className="nav-item">
                <LogoutBtn name="Logout" variant="outline-info"/>
              </li>
            </ul>
          </div>
      </nav>
    );
}

export default Navbar;

