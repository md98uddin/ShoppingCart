import React, { Component } from "react";
import CheckOutForm from "./checkOutForm";

class checkOut extends Component {
  state = {
    fullName: "",
    address: "",
    creditCardNumber: "",
    CVV: "",
    expiration: ""
  };

  onChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    this.props.history.push("/orderComplete");
  };

  render() {
    return <CheckOutForm onSubmit={this.onSubmit} onChange={this.onChange} />;
  }
}

export default checkOut;
