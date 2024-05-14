import React, { useEffect, useState } from "react";
import { Modal, Row, Col, Button, Form, Image } from "react-bootstrap";
import "./Cart.css";
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
          <Modal.Title>Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <>
              {cart.map((product) => (
                <Row key={product.id}>
                  <Col>
                    <Image
                      src={product.imageUrl}
                      alt={product.title}
                      className="img-fluid rounded-3"
                      style={{ margin: "3px", padding: "2px" }}
                    />
                  </Col>
                  <Col>
                    <p className="text-center">{product.title}</p>
                  </Col>
                  <Col>${product.price}</Col>
                  <Col>
                    <Form.Control
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
          <span>Total: ${total.toFixed(2)}</span>
          <Button variant="secondary" onClick={() => props.setShow(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Cart;
