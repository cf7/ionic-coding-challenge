import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Head from 'next/head'
import Feature from './components/Feature.js';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Row>
          Header Here
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