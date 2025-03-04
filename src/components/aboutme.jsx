import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaDownload, FaLinkedin, FaGithub } from "react-icons/fa";
import Lamidev from "../assets/Lamidev.jpg";

const AboutMe = ({ scrollToSection, projectsRef, contactRef }) => {
  return (
    <section
      id="about"
      style={{
        background: "black",
        color: "white",
        minHeight: "calc(100vh - 10px)", // Adjust for navbar if necessary
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        overflow: "hidden",
        marginBottom: "3rem", // Added margin at the bottom for more space
        paddingTop: "70px", // Adjust this value based on navbar height
      }}
    >
      <Container>
        <Row className="align-items-center flex-md-row flex-column-reverse text-center text-md-start">
          {/* Text Section */}
          <Col md={6}>
            <h1 style={{ fontSize: "3rem", fontWeight: "bold" }}>
              Hi, I'm{" "}
              <span style={{ color: "#BE564A" }}>Akinyemi Oluwatosin!</span>
            </h1>
            <p style={{ fontSize: "1.2rem", margin: "1rem 0" }}>
              I'm a <strong>Full-Stack Software Developer</strong> specializing
              in modern web technologies such as JavaScript, React, Node.js,
              Express, and MongoDB. I love building scalable, responsive, and
              user-friendly applications. Whether it's creating sleek user
              interfaces or robust backends, I bring ideas to life with code..
              Let's create something amazing together!
            </p>
            <div className="d-flex flex-column flex-md-row mb-2">
              <Button
                onClick={() => scrollToSection(projectsRef)} // Scroll to projects section
                variant="light"
                style={{
                  backgroundColor: "white",
                  border: "none",
                  color: "black",
                  fontWeight: "bold",
                  marginBottom: "1rem",
                  marginRight: "1rem",
                }}
                className="w-100 w-md-auto mb-2"
              >
                View My Work
              </Button>

              <Button
                onClick={() => scrollToSection(contactRef)} // Scroll to contact section
                variant="outline-light"
                style={{
                  fontWeight: "bold",
                  marginBottom: "1rem",
                  marginRight: "1rem",
                }}
                className="w-100 w-md-auto mb-2"
              >
                Contact Me
              </Button>

              {/* Download CV Button */}
              <Button
                href="https://drive.google.com/file/d/1guGMjJ9KDiAhdQFcBGbMGMqj8HhaVA6h/view?usp=sharing"
                target="_blank"
                variant="outline-light"
                style={{
                  fontWeight: "bold",
                  marginBottom: "1rem",
                }}
                className="w-100 w-md-auto mb-2"
              >
                <FaDownload size={18} className="me-2" />
                Download CV
              </Button>
            </div>

            <div className="mt-4 d-flex gap-3 mb-2">
              <a
                href="https://www.linkedin.com/in/akinyemi-oluwatosin-95519130b/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  marginBottom: "1rem",
                }}
              >
                <FaLinkedin size={28} className="text-light" />
              </a>
              <a
                href="https://github.com/Thisslami"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  marginBottom: "1rem",
                }}
              >
                <FaGithub size={28} className="text-light" />
              </a>
            </div>
          </Col>

          {/* Image Section */}
          <Col md={6} className="text-center">
            <img
              src={Lamidev}
              alt="Profile"
              style={{
                borderRadius: "50%",
                width: "250px",
                height: "250px",
                objectFit: "cover",
                margin: "1rem 0",
              }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutMe;
