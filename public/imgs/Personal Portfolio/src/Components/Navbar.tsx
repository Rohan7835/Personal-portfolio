import { Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./header.css";
export default function Navbar() {
  return (
    <NavbarBs className=" mb-3 me-auto bg-white">
      <Container className="d-flex align-items-center">
        <div className="logo">
          <Nav.Link as={NavLink} to="/">
            <img src="/imgs/logo.png" alt="" />
          </Nav.Link>
        </div>
        <Nav>
          <Nav.Link as={NavLink} to="/" end>
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/contact">
            Contact
          </Nav.Link>
          <Nav.Link as={NavLink} to="/about">
            About
          </Nav.Link>
        </Nav>
      </Container>
    </NavbarBs>
  );
}
