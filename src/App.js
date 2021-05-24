import React from "react";
import Navbar from "./components/Navbar/Nav";
import Home from "./pages/Home";
import Journal from "./pages/Journal";
import Medication from "./pages/Medication";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/Journal" component={Journal} />
        <Route exact path="/Medication" component={Medication} />
      </div>
    </Router>
  );
}

export default App;
