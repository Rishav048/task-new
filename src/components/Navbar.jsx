import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";
import { useLocation } from "react-router-dom"; // <-- import this
import "./Navbar.css"; // for your custom font/colors if needed

const NavigationBar = () => {
  const location = useLocation(); // <-- get current path

  return (
    <Navbar
      expand="lg"
      className="w-100 py-3 bg-white border-bottom"
      style={{ backgroundColor: "#fff" }}
    >
      <Container fluid className="px-5">
        {/* Left Links */}
        <Nav className="me-auto gap-4">
          <Nav.Link
            href="/"
            className={`nav-item ${location.pathname === "/" ? "active" : ""}`}
          >
            Home
          </Nav.Link>
          <Nav.Link
            href="/about"
            className={`nav-item ${
              location.pathname === "/about" ? "active" : ""
            }`}
          >
            About
          </Nav.Link>
          <Nav.Link
            href="/contact"
            className={`nav-item ${
              location.pathname === "/contact" ? "active" : ""
            }`}
          >
            Contact Us
          </Nav.Link>
        </Nav>

        {/* Center Logo */}
        <Navbar.Brand href="#" className="mx-auto nav-logo title">
          BHAVRI B
        </Navbar.Brand>

        {/* Right Icons */}
        <Nav className="ms-auto gap-4">
          <Nav.Link href="#">
            <FaSearch />
          </Nav.Link>
          <Nav.Link href="#">
            <FaUser />
          </Nav.Link>
          <Nav.Link href="#">
            <FaShoppingCart />
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
