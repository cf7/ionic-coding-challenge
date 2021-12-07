import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Feature from './Feature.js';

export default class FeatureSection extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <Row className="feature-section">
        <Col className="feature-col">
          <Row className="feature-section-header">
            <p className="feature-section-overline">Features</p>
            <h3>A better way to work together</h3>
            <p className="feature-section-description">
              Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.
            </p>
          </Row>
          <Row className="feature-grid">
            <Col>
              {
                this.props.features.map((feat,i) => {
                  if ((i+1) % 2 != 0) {
                    return (
                      <Feature
                          imgURL={feat.imgURL}
                          header={feat.header}
                          content={feat.content}
                        />
                    );
                  }
                })
              }
            </Col>
            <Col>
              {
                this.props.features.map((feat,i) => {
                  if ((i+1) % 2 == 0) {
                    return (
                      <Feature
                          imgURL={feat.imgURL}
                          header={feat.header}
                          content={feat.content}
                        />
                    );
                  }
                })
              }
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}