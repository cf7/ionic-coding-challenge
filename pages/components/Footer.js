import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <Row className="footer">
          <Row className="footer-links">

          {
            Object.keys(this.props.footerLinks).map(header => {
              return (
                <Col>
                  <h2>{header}</h2>
                  <ul>
                    {
                      this.props.footerLinks[header].map(link => {
                        return <li><a href="#">{link}</a></li>;
                      })
                    }
                  </ul>
                </Col>
              );
            })
          }
          <Col>
            <h2>Subscribe to our newsletter</h2>
            <Form className="subscription-form">
              <Form.Label>
                Get the latest news, articles, and resources, sent to your inbox every week.
              </Form.Label>
              <div className="subscription-inputs">
              <Form.Control 
                id="subscription-email" 
                type="email"
                placeholder="Email"
              >
              </Form.Control>
              <Button type="submit">Subscribe</Button>

              </div>
            </Form>
          </Col>
        </Row>
        <div className="footer-line"></div>
        <Row className="company-info">
          <p>© 2021 Acme, Inc. All rights reserved.</p>
          <div>
          {
            this.props.logos.map(logo => {
              return <img src={logo} />
            })
          }
          </div>
        </Row>
      </Row>
    );
  }
}