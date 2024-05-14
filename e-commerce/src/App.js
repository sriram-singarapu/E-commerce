import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductsScreen from "./components/ProductsScreen";
import Cart from "./components/Cart";
import { Badge, Button, Container, Nav, Navbar } from "react-bootstrap";
import { useCartContext } from "./Context-Api/Context";
import About from "./components/About";
import Footer from "./components/Footer";

const App = () => {
  const { state } = useCartContext(); // Access the context value
  const [showCart, setShowCart] = useState(false);

  return (
    <Router>
      <React.Fragment>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand as={Link} to="/">
              React
            </Navbar.Brand>
            <Nav className="col-md-center mx-auto">
              <Nav.Link as={Link} to="/Home">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/">
                Store
              </Nav.Link>
              <Nav.Link as={Link} to="/About">
                About
              </Nav.Link>
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
            textAlign: "center",
          }}
        >
          <h1>
            <strong>The Generics</strong>
          </h1>
        </div>

        {/* Use Routes to define your application routes */}
        <Routes>
          <Route path="/" element={<ProductsScreen />} />
          <Route path="/about" element={<About />} />
          {/* Add more routes as needed */}
        </Routes>

        {/* Render Cart component */}
        <Cart show={showCart} setShow={setShowCart} />
        <Footer />
      </React.Fragment>
    </Router>
  );
};

export default App;
