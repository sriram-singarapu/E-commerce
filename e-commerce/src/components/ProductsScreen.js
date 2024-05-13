import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

const productsArr = [
  {
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
  {
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
  {
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const ProductsScreen = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center  ">
      <Row
        className="row-cols-2 g-5 "
        style={{
          width: "700px",
          marginTop: "10px",
        }}
      >
        {productsArr.map((product, index) => (
          <Col key={index} className="mb-2">
            <Card>
              <Card.Title className="text-center">{product.title}</Card.Title>
              <Card.Body>
                <Card.Img variant="top" src={product.imageUrl} />
                <div className="d-flex justify-content-between align-items-center mt-auto">
                  <div>
                    <Card.Text>Price: ${product.price}</Card.Text>
                  </div>
                  <div>
                    <Button variant="warning" size="sm">
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
