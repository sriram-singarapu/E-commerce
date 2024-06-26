import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useCartContext } from "../Context-Api/Context";
import { useNavigate } from "react-router-dom";

const ProductsScreen = () => {
  const {
    dispatch,
    state: { productsArr },
  } = useCartContext();
  const navigate = useNavigate();

  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  return (
    <React.Fragment>
      <div
        style={{
          backgroundColor: "grey",
          height: "70px",
          color: "white",
          textAlign: "center",
        }}
      >
        <h1>
          <strong>The Generics</strong>
        </h1>
      </div>
      <Container
        style={{ marginBottom: "40%" }}
        className="d-flex justify-content-center align-items-center"
      >
        <Row
          className="row-cols-2 g-5"
          style={{
            width: "700px",
            height: "400px",
            marginTop: "10px",
            margin: "10px",
          }}
        >
          {productsArr.map((product) => (
            <Col key={product.id} className="mb-2">
              <Card
                onClick={() => navigate(`/product/${product.id}`)}
                style={{ cursor: "pointer" }}
              >
                <Card.Title className="text-center">{product.title}</Card.Title>
                <Card.Body>
                  <Card.Img variant="top" src={product.imageUrl} />
                  <div className="d-flex justify-content-between align-items-center mt-auto">
                    <div>
                      <Card.Text>Price: ₹{product.price}</Card.Text>
                    </div>
                    <div>
                      <Button
                        variant="warning"
                        size="sm"
                        style={{ marginTop: "7px" }}
                        onClick={(e) => {
                          e.stopPropagation(); // Prevent the card click event
                          addToCart(product);
                        }}
                      >
                        Add to cart
                      </Button>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default ProductsScreen;
