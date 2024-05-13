import "./App.css";
import React from "react";
import ProductsScreen from "./components/ProductsScreen";
import Navigation from "./components/Navigation";
import { Button, Container, Nav, Navbar, Stack } from "react-bootstrap";

const App = () => {
  return (
    <React.Fragment>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>React</Navbar.Brand>s
          <Nav className="col-md-center mx-auto">
            <Nav.Link href="">Home</Nav.Link>
            <Nav.Link href="">Store</Nav.Link>
            <Nav.Link href="">About</Nav.Link>
          </Nav>
          <Button variant="primary">Cart</Button>
        </Container>
      </Navbar>
      <div
        style={{
          backgroundColor: "grey",
          height: "70px",
          color: "white",
          alignContent: "center",
          textAlign: "center",
        }}
      >
        <h1>
          <strong>The Generics</strong>
        </h1>
      </div>
      <ProductsScreen />
    </React.Fragment>
  );
};

export default App;
