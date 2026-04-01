import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
// import { Link } from "react-router";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function NavScrollExample() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/About">About us</Nav.Link>
            <Nav.Link href="/Contact">Contact us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavScrollExample;
