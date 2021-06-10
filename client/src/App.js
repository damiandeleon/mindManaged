import React from "react";
import Navigator from "./components/Navbar/Nav";
import Wrapper from "./components/Wrapper/Wrapper";
import Login from "./pages/Login";
import Charts from "./pages/Charts";
import Journal from "./pages/Journal";
import Details from "./pages/Details";
import Medication from "./pages/Medication";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useAuth0 } from '@auth0/auth0-react';
import Home from "./pages/Home";


function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <Router>
      <div>
          <Navigator />
          <Wrapper>
            <Route exact path="/" component={Home} />

            <Route exact path="/charts">
              {isAuthenticated ? <Charts />: <Login />}
            </Route>

            <Route exact path="/Journal">
              {isAuthenticated ? <Journal />: <Login />}
            </Route>
            
            <Route path="/entries/:id">
              {isAuthenticated ? <Details />: <Login />}
            </Route>

            <Route path="/Medication">
              {isAuthenticated ? <Medication />: <Login />}
            </Route>
          </Wrapper>
      </div>
    </Router>
  );
}

export default App;
