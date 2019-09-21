import React from "react";
import { Modal, Button } from "react-bootstrap";

const cartPage = props => {
  const getQuantity = item => {
    const items = props.itemsCart;
    var quantity;
    for (var i = 0; i < items.length; i++) {
      if (items[i].id == item.id) {
        quantity++;
      }
    }

    console.log(quantity);

    return quantity;
  };
  return (
    <>
      <Modal show={props.handleShow} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Review Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <table className="table">
            <thead>
              <th scope="col">Item</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Total</th>
            </thead>
            <tbody>
              {props.itemsCart.map(item => (
                <tr>
                  <th>{item.name}</th>
                  <th>{item.price}</th>
                  <th>{getQuantity(item)}</th>
                  <th>0</th>
                </tr>
              ))}
            </tbody>
          </table>
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
