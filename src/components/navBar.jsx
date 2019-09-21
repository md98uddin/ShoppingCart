import React from "react";

const navBar = props => {
  return (
    <nav style={container} className="navbar navbar-dark bg-dark">
      <text className="navbar-brand">Bike Rental</text>
    </nav>
  );
};

const container = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

export default navBar;
