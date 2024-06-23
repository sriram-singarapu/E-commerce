import React, { useEffect, useState } from "react";
import { Modal, Row, Col, Button, Form, Image } from "react-bootstrap";

import { useCartContext } from "../Context-Api/Context";

const Cart = (props) => {
  const {
    state: { cart },
    dispatch,
  } = useCartContext();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    // Calculate total price whenever cart changes
    const totalPrice = cart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setTotal(totalPrice);
  }, [cart]);

  const handleRemoveFromCart = (productId) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: { id: productId } });
  };

  return (
    <div>
      <Modal show={props.show} onHide={() => props.setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h1>Cart</h1>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {cart.length === 0 ? (
            <p>
              <strong>Your cart is empty</strong>
            </p>
          ) : (
            <>
              <Row
                style={{
                  borderBottom: "1px solid black",
                  marginBottom: "15px",
                }}
              >
                <div style={{ width: "250px", display: "inline-block" }}>
                  {" "}
                  <Col>
                    <h3>Item</h3>
                  </Col>
                </div>

                <Col>
                  <h3>Price</h3>
                </Col>
              </Row>
              {cart.map((product) => (
                <Row key={product.id}>
                  <div style={{ width: "250px", display: "inline-block" }}>
                    <Row>
                      <Col>
                        <Image
                          src={product.imageUrl}
                          alt={product.title}
                          className="img-fluid rounded-3"
                          style={{ margin: "3px", padding: "2px" }}
                        />
                      </Col>
                      <Col>
                        <strong className="text-center">{product.title}</strong>
                      </Col>
                    </Row>
                  </div>

                  <Col style={{ width: "30px" }}>₹{product.price}</Col>
                  <Col>
                    <Form.Control
                      style={{ width: "50px" }}
                      type="number"
                      value={product.quantity}
                      onChange={(e) =>
                        dispatch({
                          type: "CHANGE_CART_QTY",
                          payload: {
                            id: product.id,
                            quantity: e.target.valueAsNumber,
                          },
                        })
                      }
                    />
                  </Col>
                  <Col>
                    <Button
                      variant="danger"
                      onClick={() => handleRemoveFromCart(product.id)}
                    >
                      Remove
                    </Button>
                  </Col>
                </Row>
              ))}
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <strong style={{ margin: "20px", marginRight: "90px" }}>
            Total: ₹{total.toFixed(2)}
          </strong>

          <Button variant="warning" onClick={() => props.setShow(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Cart;
