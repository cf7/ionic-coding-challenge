import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Feature } from "./Feature";

export const FeatureSection = ({ features }) => {
  const Features = features.map((feat) => (
    <Feature imgURL={feat.imgURL} header={feat.header} content={feat.content} />
  ));

  return (
    <Row className="feature-section">
      <Col>
        <Row className="feature-section-header">
          <p className="feature-section-overline">Features</p>
          <h3>A better way to work together</h3>
          <p className="feature-section-description">
            Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam
            voluptatum cupiditate veritatis in accusamus quisquam.
          </p>
        </Row>
        <Row className="feature-grid">
          <Col>{Features.filter((_, i) => (i + 1) % 2 != 0)}</Col>
          <Col>{Features.filter((_, i) => (i + 1) % 2 == 0)}</Col>
        </Row>
      </Col>
    </Row>
  );
};
