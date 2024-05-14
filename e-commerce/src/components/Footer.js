import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer
      style={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        backgroundColor: "#002D62",
        color: "white",
        textAlign: "center",
        padding: "10px 0",
        zIndex: 1000, // Ensure footer appears above other content
      }}
    >
      <Container fluid>
        <Row>
          <Col>
            <p style={{ margin: 0 }}>
              <strong>The Generics</strong>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
