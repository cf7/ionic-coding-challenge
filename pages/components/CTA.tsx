import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

export const CTA = () => {
  return (
    <Row className="cta">
      <Col>
        <Row className="cta-copy">
          <h2 value="line-1">Ready to start?</h2>
          <h2 value="line-2">Sign up for free today.</h2>
        </Row>
      </Col>
      <Col>
        <Row className="cta-buttons">
          <Button variant="primary" value="try-it-free">
            Try it free
          </Button>
          <Button variant="primary" value="learn-more">
            Learn more
          </Button>
        </Row>
      </Col>
    </Row>
  );
};
