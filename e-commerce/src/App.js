// App.js

import React, { useState } from "react";
import ProductsScreen from "./components/ProductsScreen";
import Cart from "./components/Cart";
import { Badge, Button, Container, Nav, Navbar } from "react-bootstrap";
import { useCartContext } from "./Context-Api/Context";

const App = () => {
  const [showCart, setShowCart] = useState(false);
  const { state } = useCartContext(); // Access the context value
  console.log(state.cart); // Check if state.cart is accessible

  return (
    <React.Fragment>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>React</Navbar.Brand>
          <Nav className="col-md-center mx-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">Store</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
          </Nav>
          <Button variant="primary" onClick={() => setShowCart(true)}>
            Cart <Badge bg="secondary">{state.cart.length}</Badge>
          </Button>
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
      <Cart show={showCart} setShow={setShowCart} />
    </React.Fragment>
  );
};

export default App;
