import React from "react";
import { Container, Nav, Row, Col } from "react-bootstrap";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import "./Footer.css";
import Logo from "../assets/image/logo.jpeg";

const Footer = () => {
  return (
    <footer className="bg-white border-top pt-4 pb-2 footer-card">
      <Container fluid className="px-5">
        <Row className="align-items-center">
          {/* Left Nav */}

          {/* Center Logo */}
          <Col md="4" className="text-center">
            <img className="logo-img" src={Logo} alt="" />
          </Col>
          <Col md="4" className="d-flex gap-auto justify-content-around">
            <Nav.Link href="/" className="footer-link">
              Home
            </Nav.Link>
            <Nav.Link href="/about" className="footer-link">
              About Us
            </Nav.Link>
            <Nav.Link href="/contact" className="footer-link">
              Contact Us
            </Nav.Link>
          </Col>

          {/* Right Social Icons */}
          <Col md="4" className="d-flex justify-content-end gap-3">
            <a href="#" className="footer-icon">
              <FaInstagram />
            </a>
            <a href="#" className="footer-icon">
              <FaFacebookF />
            </a>
          </Col>
        </Row>

        {/* Copyright */}
        <Row className="mt-3">
          <Col className="text-center">
            <p className="text-muted copyright-text">
              Copyright © 2025 Bhavrib. All Rights Reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
