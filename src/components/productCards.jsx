import React from "react";

const container = {
  width: "18rem"
};

const productCards = props => {
  return (
    <div
      style={{ margin: "5px" }}
      className=" card-deck d-flex justify-content-center"
    >
      {props.products.map(product => (
        <div className="card" style={container} key={product.id}>
          <img src={product.image} className="card-img-top" />
          <div className="product-card">
            <h5 style={{ margin: "5px" }} className="product-name">
              {product.name}
            </h5>
            <h4 className="product-price">{"Price: $" + product.price}</h4>
            <a
              style={{ margin: "5px", color: "#FFFFFF" }}
              onClick={() => props.addProduct(product.id)}
              className="btn btn-primary"
            >
              Add to Cart
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default productCards;
