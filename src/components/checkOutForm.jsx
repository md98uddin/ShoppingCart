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
          placeholder="Your Full Name"
          required
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
          placeholder="Full Address"
          required
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
          placeholder="16 Digit Card Number"
          required
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
          placeholder="3 or 4 Digit Security Code"
          required
        />
        <label htmlFor="expiration">Expiration</label>
        <input
          onChange={props.onChange}
          style={{ margin: "10px" }}
          type="text"
          className="form-control"
          minLength="5"
          maxLength="7"
          id="expiration"
          placeholder="mm/yy or mm/yyyy"
          required
        />
        <button
          style={{ margin: "10px", marginLeft: "40px" }}
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
  alignSelf: "center",
  marginLeft: "535px"
};

export default checkOutForm;
