import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./project-card";
import Homepic from "../assets/homeImg.png";
import Homepic2 from "../assets/homeImg2.png";
import Homepic3 from "../assets/homeImg3.png";

const Project = () => {
  return (
    // Full-width background
    <div
      style={{
        backgroundColor: "#f5f5f5",
        width: "100%",
      }}
    >
      {/* Constrained content */}
      <Container className="py-5">
        {/* Section Title */}
        <h2 className="text-center mb-4 fw-bold">Projects</h2>

        <Row className="justify-content-center">
          {/* Each project takes 4 columns on large screens, 6 on medium, 12 on small */}
          <Col lg={4} md={6} xs={12} className="mb-4">
            <ProjectCard
              title="School Management System"
              description="A modern School Management System built using React, Node.js, and MongoDB."
              image="https://res.cloudinary.com/djbtdlzrj/image/upload/v1738102417/Screenshot_2025-01-28_231209_wmkvwt.png"
              link="https://chizzy-kids-school.onrender.com/"
            />
          </Col>

          <Col lg={4} md={6} xs={12} className="mb-4">
            <ProjectCard
              title="Gadget E-commerce Website"
              description="A modern fullstack e-commerce platform built using React, Node.js, and MongoDB."
              image={Homepic}
              link="https://versegadget.onrender.com"
            />
          </Col>

          <Col lg={4} md={6} xs={12} className="mb-4">
            <ProjectCard
              title="Professional Massage Therapist Website"
              description="A professional massage therapy website offering relaxation and wellness services built with MERN stack."
              image={Homepic2}
              link="https://euphoric-touch-with-tish.onrender.com"
            />
          </Col>

          {/* New Afkit Project - Responsive like others */}
          <Col lg={4} md={6} xs={12} className="mb-4">
            <ProjectCard
              title="Afkit Nigeria"
              description="Premium gadget store offering 6-month warranty with payment on delivery. Built with MERN stack (MongoDB, Express, React, Node.js)."
              image={Homepic3} // Use your Afkit image here
              link="https://afkit.ng"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Project;