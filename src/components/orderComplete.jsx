import React from "react";

const orderComplete = () => {
  return (
    <div style={container}>
      <text>
        Thank you for your order. Your order will be ready in 24-48 hours.
      </text>
    </div>
  );
};

const container = {
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

export default orderComplete;
