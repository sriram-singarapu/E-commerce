import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import ProductsScreen from "./components/ProductsScreen";
import Cart from "./components/Cart";
import { Badge, Button, Container, Nav, Navbar } from "react-bootstrap";
import { useCartContext } from "./Context-Api/Context";
import About from "./components/About";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Contact from "./components/Contact";

const App = () => {
  const { state } = useCartContext(); // Access the context value
  const [showCart, setShowCart] = useState(false);

  return (
    <React.Fragment>
      <Navbar
        style={{ height: "80px", fontSize: "20px" }}
        expand="lg"
        bg="dark"
        data-bs-theme="dark"
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            React
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className=" mx-auto">
              <Nav.Link as={Link} to="/home" className="mx-4">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/" className="mx-4">
                Store
              </Nav.Link>
              <Nav.Link as={Link} to="/about" className="mx-4">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/contact" className="mx-4">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Button variant="primary" onClick={() => setShowCart(true)}>
            Cart <Badge bg="secondary">{state.cart.length}</Badge>
          </Button>
        </Container>
      </Navbar>

      {/* Use Routes to define your application routes */}
      <Routes>
        <Route path="/" element={<ProductsScreen />} />
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* Render Cart component */}
      <Cart show={showCart} setShow={setShowCart} />
      <Footer />
    </React.Fragment>
  );
};

export default App;
