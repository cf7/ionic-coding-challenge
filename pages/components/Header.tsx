import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

export const Header = ({ navLinks }) => {
  return (
    <Row className="header">
      <Navbar>
        <Navbar.Brand href="#">
          <img
            src="/assets/logo.png"
            width="40"
            height="32"
            // className="d-inline-block align-top"
            alt="Ionic Challenge Logo"
          />
        </Navbar.Brand>

        {navLinks.map((link) => {
          return <Nav.Link href="#">{link}</Nav.Link>;
        })}
      </Navbar>
      <Col className="header-copy">
        <Row>
          <h2 value="line-1">Your best work.</h2>
          <h2 value="line-2">Done together.</h2>
          <p>
            Build better a business, faster. Start sharing your work across your
            company—in realtime.
          </p>
          <Row>
            <Button variant="primary" value="try-it-free">
              Try it free
            </Button>
            <Button variant="primary" value="download">
              Download
            </Button>
          </Row>
        </Row>
      </Col>
      <Col className="header-image">
        <img src="/assets/image_stock.png" />
      </Col>
    </Row>
  );
};
