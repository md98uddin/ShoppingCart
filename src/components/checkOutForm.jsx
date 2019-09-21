import React from "react";

const checkOutForm = props => {
  return (
    <div>
      <form style={container} onSubmit={props.onSubmit}>
        <label htmlFor="fullName">Full Name</label>
        <input
          onChange={props.onChange}
          style={{ margin: "10px" }}
          type="text"
          className="form-control"
          minLength="2"
          maxLength="48"
          id="fullName"
        />

        <label htmlFor="">Address</label>
        <input
          onChange={props.onChange}
          style={{ margin: "10px" }}
          type="text"
          className="form-control"
          minLength="8"
          maxLength="48"
          id="address"
        />

        <label htmlFor="creditCardNumber">Credit Card Number</label>
        <input
          onChange={props.onChange}
          style={{ margin: "10px" }}
          type="text"
          className="form-control"
          minLength="16"
          maxLength="16"
          id="creditCardNumber"
        />
        <label htmlFor="CVV">CVV</label>
        <input
          onChange={props.onChange}
          style={{ margin: "10px" }}
          type="text"
          className="form-control"
          minLength="3"
          maxLength="4"
          id="CVV"
        />
        <label htmlFor="expiration">Expiration</label>
        <input
          onChange={props.onChange}
          style={{ margin: "10px" }}
          type="text"
          className="form-control"
          minLength="6"
          maxLength="10"
          id="expiration"
        />
        <button
          style={{ margin: "10px" }}
          type="submit"
          className="btn btn-primary"
        >
          Complete Order
        </button>
      </form>
    </div>
  );
};

const container = {
  width: "250px",
  flex: 1,
  justifyContent: "center",
  marginLeft: "550px"
};

export default checkOutForm;
