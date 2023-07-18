import { Container } from "react-bootstrap";
import React from "react";
import { Header, FeatureSection, CTA, Footer } from "../views/components";
import { navLinks, features, footerLinks, logos } from "../lib/constants";

const Index = ({}) => {
  return (
    <Container>
      <Header navLinks={navLinks} />
      <FeatureSection features={features} />
      <CTA />
      <Footer footerLinks={footerLinks} logos={logos} />
    </Container>
  );
};

export default Index;
