import React from "react";
import { Button, Container, Nav, Navbar, Stack } from "react-bootstrap";

const Navigation = () => {
  <React.Fragment>
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>React</Navbar.Brand>s
        {/* <Stack direction="horizontal"> */}
        <Nav>
          <Nav.Link href="">Home</Nav.Link>
          <Nav.Link href="">Store</Nav.Link>
          <Nav.Link href="">About</Nav.Link>
        </Nav>
        <Button variant="primary">Cart</Button>
        {/* </Stack> */}
      </Container>
    </Navbar>
    <div style={{ backgroundColor: "grey", height: "70px", color: "white" }}>
      <h1 className="text-center">
        <strong>The Generics</strong>
      </h1>
    </div>
  </React.Fragment>;
};

export default Navigation;
