import React from "react";
import { Modal, Row, Col, Button, Form, Card } from "react-bootstrap";
import "./Cart.css";
const products = [
  {
    title: "Colors",
    price: 100,
    quantity: 1,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
  {
    title: "Black and white Colors",
    price: 50,
    quantity: 1,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    title: "Yellow and Black Colors",
    price: 70,
    quantity: 1,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
  {
    title: "Blue Color",
    price: 100,
    quantity: 1,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const Cart = (props) => {
  return (
    <div>
      <Modal show={props.show} onHide={() => props.setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {products.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            products.map((product, index) => (
              <Row key={index} className="row-cols-4 g-10 ">
                <Col xs={3}>
                  <img
                    src={product.imageUrl}
                    alt={product.title}
                    className="img-fluid"
                  />
                </Col>
                <Col>
                  <p className="mb-0">{product.title}</p>
                </Col>
                <Col xs={2}>
                  {" "}
                  <p className="text-muted">{product.price}</p>
                </Col>
                <Col xs={1}>
                  <Form.Control type="number" value={product.quantity} />
                </Col>
                <Col>
                  <Button variant="danger">Remove</Button>
                </Col>
              </Row>
            ))
          )}
        </Modal.Body>
        <Modal.Footer>
          <button onClick={() => props.setShow(false)}>Close</button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Cart;
