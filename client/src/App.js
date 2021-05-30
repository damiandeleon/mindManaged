import React from "react";
import Navbar from "./components/Navbar/Nav";
import Wrapper from "./components/Wrapper/Wrapper";
import Home from "./pages/Home";
import Journal from "./pages/Journal";
import Details from "./pages/Details";
import Medication from "./pages/Medication";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route path="/entries/:id" component={Details} />
          <Route exact path="/Journal" component={Journal} />
          <Route exact path="/Medication" component={Medication} />
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
