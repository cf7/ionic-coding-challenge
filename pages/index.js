// import '~bootstrap/scss/bootstrap';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Form from 'react-bootstrap/Form';
import NextHead from 'next/head'
import Feature from './components/Feature.js';
// import Navbar from './components/Navbar.js';

import Button from 'react-bootstrap/Button';

import Header from './components/Header.js';
import FeatureSection from './components/FeatureSection.js';
import CTA from './components/CTA.js';
import Footer from './components/Footer.js';

export default function Home() {

  const navLinks = [ "Product", "Features", "Enterprise", "Company", "Sign in", "Download" ];
  const features = [
    { 
      imgURL:"/assets/icon-f1.png",
      header: "Communicate in realtime",
      content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    },
    {
      imgURL: "/assets/icon-f2.png",
      header: "Do your best work",
      content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione."
    },
    {
      imgURL: "/assets/icon-f3.png",
      header: "Avoid costly revisions",
      content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione."
    },
    {
      imgURL: "/assets/icon-f4.png",
      header: "Everything in one place",
      content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione."
    },
  ];
  const footerLinks = {
    "Solutions": ["Screen Sharing", "Marketing", "Commerce", "Insights"],
    "Resources": ["Pricing", "Documentation", "Guides", "API Status"],
    "Company": ["About", "Blog", "Jobs", "Press"],
    "Help": ["Support", "Training", "Tutorials"]
  };
  const logos = [ "/assets/logo-facebook1.png", "/assets/logo-instagram1.png", "/assets/logo-twitter1.png" ];

  return (
    <Container>
      <NextHead>
        <title>Ionic Challenge</title>
        <link rel="icon" href="/favicon.ico" />
      </NextHead>
      <Header navLinks={navLinks} />
      <FeatureSection features={features} />
      <CTA />
      <Footer footerLinks={footerLinks} logos={logos} />
    </Container>
  );
}