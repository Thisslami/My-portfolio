import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNode, FaDatabase, FaGitAlt } from "react-icons/fa";
import { SiRedux, SiNextdotjs } from "react-icons/si";

const Skills = () => {
  const skills = [
    {
      category: "Frontend Development",
      items: [
        { name: "HTML", icon: <FaHtml5 color="#e34c26" /> },
        { name: "CSS", icon: <FaCss3Alt color="#264de4" /> },
        { name: "JavaScript", icon: <FaJs color="#f7df1e" /> },
        { name: "React", icon: <FaReact color="#61dafb" /> },
        { name: "Redux", icon: <SiRedux color="#764abc" /> },
        { name: "Next.js", icon: <SiNextdotjs color="#000000" /> },
      ],
    },
    {
      category: "Backend Development",
      items: [
        { name: "Node.js", icon: <FaNode color="#3c873a" /> },
        { name: "MongoDB", icon: <FaDatabase color="#4db33d" /> },
      ],
    },
    {
      category: "Tools & Version Control",
      items: [
        { name: "Git", icon: <FaGitAlt color="#f34f29" /> },
      ],
    },
  ];

  return (
    <section
      style={{
        background: "#f8f9fa",
        padding: "4rem 0",
      }}
    >
      <Container>
        <h2 className="text-center" style={{ marginBottom: "2rem", fontWeight: "bold" }}>
          Tech Stack
        </h2>
        {skills.map((skillCategory, index) => (
          <div key={index} style={{ marginBottom: "3rem" }}>
            <h4 style={{ fontWeight: "bold", color: "#495057", marginBottom: "1rem" }}>
              {skillCategory.category}
            </h4>
            <Row>
              {skillCategory.items.map((skill, idx) => (
                <Col xs={6} md={3} className="mb-2" key={idx}>
                  <Card
                    className="text-center"
                    style={{
                      padding: "2rem 1rem",
                      borderRadius: "15px",
                      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                      transition: "transform 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "scale(1.05)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                    }}
                  >
                    <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>{skill.icon}</div>
                    <h6 style={{ fontWeight: "bold", color: "#343a40" }}>{skill.name}</h6>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        ))}
      </Container>
    </section>
  );
};

export default Skills;