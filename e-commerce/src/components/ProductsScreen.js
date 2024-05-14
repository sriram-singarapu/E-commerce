import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useCartContext } from "../Context-Api/Context";

const ProductsScreen = () => {
  const {
    dispatch,
    state: { productsArr },
  } = useCartContext();

  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  return (
    <Container className="d-flex justify-content-center align-items-center">
      <Row
        className="row-cols-2 g-5"
        style={{ width: "700px", marginTop: "10px", margin: "10px" }}
      >
        {productsArr.map((product) => (
          <Col key={product.id} className="mb-2">
            <Card>
              <Card.Title className="text-center">{product.title}</Card.Title>
              <Card.Body>
                <Card.Img variant="top" src={product.imageUrl} />
                <div className="d-flex justify-content-between align-items-center mt-auto">
                  <div>
                    <Card.Text>Price: ${product.price}</Card.Text>
                  </div>
                  <div>
                    <Button
                      variant="warning"
                      size="sm"
                      style={{ marginTop: "7px" }}
                      onClick={() => addToCart(product)}
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
  );
};

export default ProductsScreen;
