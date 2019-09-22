import React, { Component } from "react";
import data from "../constants/bikerentals";
import ProductCards from "./productCards";
import CartPage from "./cartPage";

class products extends Component {
  state = {
    products: data.products,
    containsBike: false,
    itemsCart: [],
    show: false
  };

  render() {
    const { products, itemsCart, show, cartTotal } = this.state;
    return (
      <div style={container}>
        <ProductCards products={products} addProduct={this.handleAddProduct} />
        <CartPage
          handleShow={show}
          handleClose={this.handleClose}
          handleCheckout={this.handleCheckout}
          itemsCart={itemsCart}
          deleteProduct={this.handleDeleteProduct}
        />
        <button
          onClick={this.handleClose}
          style={{ margin: "50px" }}
          className="btn-primary btn-lg "
        >
          Cart ${this.cartTotal()}
        </button>
        <text className="primary">{this.items()} items in cart.</text>
      </div>
    );
  }

  handleAddProduct = id => {
    const { products, itemsCart } = this.state;

    const itemsArr = [...itemsCart, products[id]];
    this.setState({
      itemsCart: itemsArr
    });
  };

  handleDeleteProduct = itemId => {
    const { itemsCart } = this.state;
    const itemsArr = itemsCart.filter(item => item.id !== itemId);
    this.setState({
      itemsCart: itemsArr
    });
  };

  items() {
    const { itemsCart } = this.state;
    return itemsCart.length;
  }

  cartTotal(arr) {
    const { itemsCart } = this.state;
    var total = 0;
    arr = itemsCart;
    for (var i = 0; i < arr.length; i++) {
      total += arr[i].price;
    }

    return total.toFixed(2);
  }

  handleClose = event => {
    const { show } = this.state;
    this.setState({ show: !show });
  };

  handleCheckout = event => {
    const { itemsCart } = this.state;
    for (var i = 0; i < itemsCart.length; i++) {
      if (itemsCart[i].name.includes("Bike")) {
        return this.props.history.push("/checkOut");
      }
    }
  };
}

const container = {
  justifyContent: "center",
  alignItems: "center"
};

export default products;
