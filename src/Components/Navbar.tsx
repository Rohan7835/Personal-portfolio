import { Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./header.css";
export default function Navbar() {
  return (
    <NavbarBs className=" mb-3 me-auto">
      <Container className="d-flex align-items-center">
        <div className="logo">
          <Nav.Link as={NavLink} to="/">
            Valentine's by ROHAN
          </Nav.Link>
        </div>
      </Container>
    </NavbarBs>
  );
}
