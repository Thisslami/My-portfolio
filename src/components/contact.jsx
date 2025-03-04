import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Spinner } from "react-bootstrap";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const Contact = () => {
  // State for form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Set loading and success states
    setLoading(true);
    setSuccess(null);

    // Send the form data to the backend via a POST request
    // fetch(`http://localhost:5000/api/send-email`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(formData), // Send the form data to your backend
    // })
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/send-email`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json()) // Parse the JSON response from your backend
      .then((data) => {
        if (data.success) {
          setSuccess("Message sent successfully!");
          setFormData({ name: "", email: "", subject: "", message: "" }); // Clear the form
        } else {
          setSuccess("Failed to send message. Try again later.");
        }
      })
      .catch((error) => {
        console.error("Error:", error); // Log any errors
        setSuccess("Failed to send message. Try again later.");
      })
      .finally(() => {
        setLoading(false); // Reset loading state after API call
      });
  };

  return (
    <Container className="py-5" id="contact">
      <h2 className="text-center mb-4 fw-bold">Contact</h2>
      <Row className="justify-content-center">
        {/* Left: Contact Information */}
        <Col md={5} className="mb-4">
          <h4>Get in Touch</h4>
          <div className="mt-3">
            <p>
              <FaEnvelope className="me-2 text-dark" /> Akinyemioluwaseunjunior@gmail.com
            </p>
            <p>
              <FaPhone className="me-2 text-dark" /> +23470 5650 1913
            </p>
            <p>
              <FaMapMarkerAlt className="me-2 text-dark" /> Lagos, Nigeria
            </p>
          </div>

          {/* Social Links */}
          <div className="mt-4 d-flex gap-3">
            <a
              href="https://www.linkedin.com/in/akinyemi-oluwatosin-95519130b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={28} className="text-dark" />
            </a>
            <a
              href="https://github.com/Thisslami"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={28} className="text-dark" />
            </a>
          </div>
        </Col>

        {/* Right: Contact Form */}
        <Col md={6}>
          <Form onSubmit={handleSubmit} className="p-4 shadow-lg rounded-4 bg-light">
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Enter your name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="email"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Enter subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Enter your message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Button 
              variant="primary" 
              type="submit" 
              className="w-100" 
              disabled={loading} // Disable button while loading
            >
              {loading ? (
                <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
              ) : (
                "Send Message"
              )}
              {loading && " Sending..."} {/* Text will change when loading */}
            </Button>

            {success && (
              <p
                className={`mt-3 text-center ${success.includes("successfully") ? "text-success" : "text-danger"}`}
              >
                {success}
              </p>
            )}
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;