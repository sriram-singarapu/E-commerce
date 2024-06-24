import React from "react";
import { useParams } from "react-router-dom";
import { useCartContext } from "../Context-Api/Context";
import { Button, Container, Row, Col, Image, Card } from "react-bootstrap";

const ProductDetail = () => {
  const { id } = useParams();
  const {
    state: { productsArr },
    dispatch,
  } = useCartContext();
  const product = productsArr.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <Container>
      <Row className="my-4">
        <Col md={6}>
          <Image src={product.imageUrl} alt={product.title} fluid />
        </Col>
        <Col md={6}>
          <h2>{product.title}</h2>
          <p>Price: ₹{product.price}</p>
          <Button
            variant="warning"
            onClick={() => dispatch({ type: "ADD_TO_CART", payload: product })}
          >
            Add to Cart
          </Button>
          <Card className="mt-4">
            <Card.Body>
              <Card.Title>Reviews</Card.Title>
              {product.reviews.length > 0 ? (
                product.reviews.map((review, index) => (
                  <Card.Text key={index}>"{review}"</Card.Text>
                ))
              ) : (
                <Card.Text>No reviews yet.</Card.Text>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
