import React from "react";
import "./App.css";
import Products from "./components/products";
import CheckOut from "./components/checkOut";
import OrderComplete from "./components/orderComplete";
import NavBar from "./components/navBar";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundSize: "auto",
        backgroundRepeat: "no-repeat"
      }}
    >
      <NavBar />
      <Router>
        <Route path="/" exact component={Products} />
        <Route path="/checkOut" exact component={CheckOut} />
        <Route path="/orderComplete" exact component={OrderComplete} />
      </Router>
    </div>
  );
}

export default App;
