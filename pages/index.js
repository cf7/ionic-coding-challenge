// import '~bootstrap/scss/bootstrap';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import NextHead from 'next/head'
import Feature from './components/Feature.js';
// import Navbar from './components/Navbar.js';

import Button from 'react-bootstrap/Button';

export default function Home() {


  return (
    <Container>
      <NextHead>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </NextHead>

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
          <Nav.Link href="#">
            Product
          </Nav.Link>
          <Nav.Link href="#">
            Features
          </Nav.Link>
          <Nav.Link href="#">
            Enterprise
          </Nav.Link>
          <Nav.Link href="#">
            Company
          </Nav.Link>
          <Nav.Link href="#">
            Sign in
          </Nav.Link>
          <Nav.Link href="#">
            Download
          </Nav.Link>
        </Navbar>

        <Row className="header">
          
          <Col className="header-copy">
            <Row>
              <h2 value="line-1">Your best work.</h2>
              <h2 value="line-2">Done together.</h2>
              <p>
                Build better a business, faster. Start sharing your work across your company—in realtime.
              </p>
            {/*</Row>*/}
            <Row>
              <Button variant="primary" value="try-it-free">TRY IT FREE</Button>
              <Button variant="primary" value="download">DOWNLOAD</Button>
            </Row>
            </Row>
          </Col>

          <Col className="header-image">
            <img
              src="/assets/image_stock.png"
            />
          </Col>

        </Row>

        <Row className="feature-section">
          <Col>
            <Row className="feature-section-header">
              <p className="feature-section-overline">Features</p>
              <h3>A better way to work together</h3>
              <p className="feature-section-description">
                Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.
              </p>
            </Row>
            <Row className="feature-grid">
              <Col>
                <Feature
                  imgURL="/assets/icon-f1.png" 
                  header="Communicate in realtime"
                  content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione."
                />
              </Col>
              <Col>
                <Feature
                  imgURL="/assets/icon-f2.png"
                  header="Do your best work"
                  content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione."
                />
              </Col>
            </Row>
          </Col>
        </Row>

        <Row className="cta">
          <Col className="copy">
            {/*<Row>*/}
              <h2 value="line-1">Ready to start?</h2>
              <h2 value="line-2">Sign up for free today.</h2>
            {/*</Row>*/}
            {/*<Row>*/}
              <Button variant="primary" value="try-it-free">TRY IT FREE</Button>
              <Button variant="primary" value="learn-more">LEARN MORE</Button>
            {/*</Row>*/}
          </Col>
        </Row>

        <Row className="footer">
          <Row className="footer-links">
            <Col>
              <h2>Solutions</h2>
              <ul>
                <li>
                  <a href="#">Screen Sharing</a>
                </li>
                <li>
                  <a href="#">Marketing</a>
                </li>
                <li>
                  <a href="#">Commerce</a>
                </li>
              </ul>
            </Col>
            <Col>
              <h2>Company</h2>
              <ul>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Jobs</a>
                </li>
              </ul>
            </Col>
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
              <img src="/assets/logo-facebook1.png" />
              <img src="/assets/logo-instagram1.png" />
              <img src="/assets/logo-twitter1.png" />
            </div>
            
          </Row>
        </Row>

      </Container>
  );
}