import "bootstrap/scss/bootstrap.scss";
import "./scss/app.scss";
import { Container } from "react-bootstrap";
import React from "react";
import { Header, FeatureSection, CTA, Footer } from "./components";

export const App = () => {
  const navLinks = [
    "Product",
    "Features",
    "Enterprise",
    "Company",
    "Sign in",
    "Download",
  ];
  const features = [
    {
      imgURL: "/assets/icon-f1.png",
      header: "Communicate in realtime",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    },
    {
      imgURL: "/assets/icon-f2.png",
      header: "Do your best work",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    },
    {
      imgURL: "/assets/icon-f3.png",
      header: "Avoid costly revisions",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    },
    {
      imgURL: "/assets/icon-f4.png",
      header: "Everything in one place",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    },
  ];
  const footerLinks = {
    Solutions: ["Screen Sharing", "Marketing", "Commerce", "Insights"],
    Resources: ["Pricing", "Documentation", "Guides", "API Status"],
    Company: ["About", "Blog", "Jobs", "Press"],
    Help: ["Support", "Training", "Tutorials"],
  };
  const logos = [
    "/assets/logo-facebook1.png",
    "/assets/logo-instagram1.png",
    "/assets/logo-twitter1.png",
  ];

  return (
    <Container>
      <NextHead>
        <title>Landing Page</title>
        <link rel="icon" href="/favicon.ico" />
      </NextHead>
      <Header navLinks={navLinks} />
      <FeatureSection features={features} />
      <CTA />
      <Footer footerLinks={footerLinks} logos={logos} />
    </Container>
  );
};
