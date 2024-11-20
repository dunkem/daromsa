import React, { useState } from 'react';
import { Container, Form, Button, Row, Col, Card } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Contact.css'; // Asegúrate de que este archivo CSS existe

function Contact() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    };

    return (
        <Container className="contact-container mt-5">
            <h1 className="text-center mb-4">CONTACTANOS</h1>
            <Card className="shadow-lg mb-4">
                <Card.Body>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Group controlId="formName">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control required type="text" placeholder="Ingresa tu nombre" />
                            <Form.Control.Feedback type="invalid">
                                Por favor ingresa tu nombre.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="formEmail">
                            <Form.Label>Correo Electrónico</Form.Label>
                            <Form.Control required type="email" placeholder="Ingresa tu correo electrónico" />
                            <Form.Control.Feedback type="invalid">
                                Por favor ingresa un correo electrónico válido.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="formMessage">
                            <Form.Label>Mensaje</Form.Label>
                            <Form.Control required as="textarea" rows={4} placeholder="Tu mensaje" />
                            <Form.Control.Feedback type="invalid">
                                Por favor ingresa un mensaje.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Button variant="primary" type="submit" className="mt-3 w-100">
                            Enviar
                        </Button>
                    </Form>
                </Card.Body>
            </Card>

            <Row className="contact-info mb-4">
                <Col md={6} className="text-center">
                    <h5>Información de Contacto</h5>
                    <p><i className="fas fa-phone"></i> Teléfono: <a href="tel:08103334567">0810-333-4567</a></p>
                    <p><i className="fas fa-envelope"></i> Email: <a href="mailto:ventas@darom.com">ventas@daromsa.com |proveedores@daromsa.com |pagos@daromsa</a></p>
                    <p><i className="fas fa-map-marker-alt"></i> Oficina: C. 152 6352, B1885 Guillermo Enrique Hudson</p>
                    <p><i className="fas fa-industry"></i> Planta: Parque industrial tecnológico de Florencio Varela</p>
                </Col>
            </Row>

            <Row className="social-buttons text-center mt-4">
                <Col>
                    <h5>Síguenos en Redes Sociales</h5>
                    <div className="d-flex justify-content-around">
                        <Button variant="outline-primary" href="https://www.facebook.com/tu_pagina" target="_blank">
                            <FaFacebook /> Facebook
                        </Button>
                        <Button variant="outline-danger" href="https://www.instagram.com/tu_pagina" target="_blank">
                            <FaInstagram /> Instagram
                        </Button>
                        <Button variant="outline-danger" href="https://www.youtube.com/tu_pagina" target="_blank">
                            <FaYoutube /> YouTube
                        </Button>
                        <Button variant="outline-success" href="https://wa.me/1234567890" target="_blank">
                            <FaWhatsapp /> WhatsApp
                        </Button>
                    </div>
                </Col>
            </Row>

            {/* Footer Section */}
            <Row className="footer-section mt-4">
                <Col className="footer-content text-center">
                    <h5 className="footer-title">DAROM SA</h5>
                    <p>&copy; {new Date().getFullYear()} Darom SA. Todos los derechos reservados.</p>
                    <div className="footer-links">
                        <Link to="/privacy" className="footer-link">
                            <i className="fas fa-shield-alt"></i> Política de Privacidad
                        </Link>
                        <span>|</span>
                        <Link to="/terms" className="footer-link">
                            <i className="fas fa-file-contract"></i> Términos de Servicio
                        </Link>
                        <span>|</span>
                        <Link to="/contact" className="footer-link">
                            <i className="fas fa-envelope"></i> Contáctanos
                        </Link>
                    </div>
                    <p className="footer-design">
                        Diseñado por <strong>DTECNO</strong>
                    </p>
                </Col>
            </Row>
        </Container>
    );
}

export default Contact;