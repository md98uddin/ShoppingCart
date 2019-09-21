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
    const { products, itemsCart, show } = this.state;
    return (
      <div style={container}>
        <ProductCards products={products} addProduct={this.handleAddProduct} />
        <CartPage
          handleShow={show}
          handleClose={this.handleClose}
          handleCheckout={this.handleCheckout}
          cartTotal={this.cartTotal}
          itemsCart={itemsCart}
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
    console.log(products[id]);
    this.setState({
      itemsCart: itemsArr
    });

    console.log(itemsCart);
  };

  handleDeleteProduct = id => {
    const { itemsCart } = this.state;
    console.log(itemsCart[id]);
    const itemsArr = itemsCart.filter(item => {
      return item !== item[id];
    });

    this.setState({
      itemsCart: itemsArr
    });
  };

  items() {
    const { itemsCart } = this.state;
    return itemsCart.length;
  }

  cartTotal() {
    const { itemsCart } = this.state;
    var total = 0;
    for (var i = 0; i < itemsCart.length; i++) {
      total += itemsCart[i].price;
    }

    return total.toFixed(2);
  }

  handleClose = event => {
    const { show } = this.state;
    this.setState({ show: !show });
    console.log(this.state.show);
  };

  handleCheckout = event => {
    this.props.history.push("/checkOut");
  };
}

const container = {
  justifyContent: "center",
  alignItems: "center"
};

export default products;
