import React from "react";
import { Modal, Button } from "react-bootstrap";

const cartPage = props => {
  function cartTotal() {
    const arr = props.itemsCart;
    var total = 0;
    for (var i = 0; i < arr.length; i++) {
      total += arr[i].price;
    }

    return total;
  }
  var total = cartTotal();
  return (
    <>
      <Modal show={props.handleShow} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Review Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <tex>
            {" "}
            Your current total:{" "}
            <span
              style={{ marginBottom: "10px", width: "75px", height: "20px" }}
              className="badge badge-pill badge-secondary"
            >
              {"$" + total}
            </span>
          </tex>

          <table className="table">
            <thead>
              <tr>
                <th scope="col">Item</th>
                <th scope="col">Price</th>
                <th scope="col">Remove</th>
              </tr>
            </thead>
            <tbody>
              {props.itemsCart.map(item => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>
                    {" "}
                    <button
                      onClick={() => props.deleteProduct(item.id)}
                      className="btn-danger btn-sm"
                    >
                      X
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <text>Make sure your order contains a bike before checking out</text>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Continue Shopping
          </Button>
          <Button variant="primary" onClick={props.handleCheckout}>
            Checkout
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default cartPage;
