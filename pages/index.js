import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Head from 'next/head'
import Feature from './components/Feature.js';
// import Navbar from './components/Navbar.js';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>

        <Row className="header">
          <Navbar>
            <Navbar.Brand href="#home">
              <img
                src="/assets/logo.png"
                width="40"
                height="32"
                // className="d-inline-block align-top"
                alt="Ionic Challenge Logo"
              />
            </Navbar.Brand>
            <Nav.Link>
              Product
            </Nav.Link>
            <Nav.Link>
              Features
            </Nav.Link>
          </Navbar>

          <div className="copy">
            <h2>Your best work. Done together.</h2>
            <p>
              Build better a business, faster. Start sharing your work across your company—in realtime.
            </p>
            <button>TRY IT FREE</button>
            <button>DOWNLOAD</button>
          </div>

          <img
            src="/assets/image_stock.png"
            width="620"
            height="634"
          />
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

      </main>
    </div>
  );
}