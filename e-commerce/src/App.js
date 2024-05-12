import "./App.css";
import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import ProductsScreen from "./components/ProductsScreen";

const App = () => {
  return (
    <React.Fragment>
      <Navbar bg="dark" expand="sm" variant="dark">
        <Container fluid>
          <Navbar.Brand className="ms-auto me-0">React</Navbar.Brand>s
          <Nav className="mx-auto">
            <Nav.Link href="">Home</Nav.Link>
            <Nav.Link href="">Store</Nav.Link>
            <Nav.Link href="">About</Nav.Link>
          </Nav>
          <Button variant="primary" className="me-auto ms-0">
            Cart
          </Button>
        </Container>
      </Navbar>
      <div style={{ backgroundColor: "grey", height: "70px", color: "white" }}>
        <h1 className="text-center">
          <strong>The Generics</strong>
        </h1>
      </div>

      <ProductsScreen />
    </React.Fragment>
  );
};

export default App;
