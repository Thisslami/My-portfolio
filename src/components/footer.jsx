import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-3 mt-auto w-100">
      <Container>
        <Row className="align-items-center justify-content-md-between text-center text-md-start">
          {/* Social Media Links */}
          <Col xs={12} md={4} className="mb-3 mb-md-0">
            <h5>Connect with Me</h5>
            <div className="d-flex justify-content-center justify-content-md-start gap-3">
              <a
                href="https://github.com/Thisslami"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light social-link"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/akinyemi-oluwatosin-95519130b/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light social-link"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light social-link"
              >
                <FaTwitter size={24} />
              </a>
              <a href="mailto:akinyemioluwaseunjunior@gmail.com" className="text-light social-link">
                <FaEnvelope size={24} />
              </a>
            </div>
          </Col>

          {/* Copyright Notice */}
          <Col xs={12} md={4}>
            <h5>Lamidev</h5>
            <p className="mb-0">
              &copy; {new Date().getFullYear()} Lamidev. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>

      {/* Custom Styles for Hover Effects */}
      <style>
        {`
          .social-link:hover {
            color: #0d6efd; /* Bootstrap primary blue */
            transition: color 0.3s ease-in-out;
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;


