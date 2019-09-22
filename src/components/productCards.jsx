import React from "react";

const container = {
  width: "18rem"
};

const productCards = props => {
  return (
    <div
      style={{ margin: "5px" }}
      className=" card-deck d-flex justify-content-horizontal .col-md-4"
    >
      {props.products.map(product => (
        <div className="card" style={container} key={product.id}>
          <img src={product.image} className="card-img-top" alt="" />
          <div className="product-card">
            <h5 style={{ margin: "5px" }} className="product-name">
              {product.name}
            </h5>
            <h4 className="product-price">{"Price: $" + product.price}</h4>
            <button
              className="btn-md btn-primary"
              style={{ margin: "5px", color: "#FFFFFF" }}
              onClick={() => props.addProduct(product.id)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default productCards;
