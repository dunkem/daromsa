import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import './Contact.css'; // Asegúrate de que este archivo CSS existe

function Contact() {
    const [validated, setValidated] = useState(false);
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            setSubmitted(true);
        }
        setValidated(true);
    };

    return (
        <Container className="contact-container mt-5">
            <Row className="contact-background mb-4">
                <Col md={6} className="p-4">
                    <h2 className="contact-title">CONTACTANOS</h2>
                    <Form noValidate validated={validated} onSubmit={handleSubmit} className="contact-form">
                        <Form.Group controlId="formName">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control required type="text" placeholder="Ingresa tu nombre" />
                            <Form.Control.Feedback type="invalid">
                                Por favor ingresa tu nombre.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="formEmail">
                            <Form.Label>
                                <i className="fas fa-envelope"></i> Email
                            </Form.Label>
                            <Form.Control 
                                type="email" 
                                placeholder="Ingrese su email" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="formMessage">
                            <Form.Label>
                                <i className="fas fa-comment-dots"></i> Mensaje
                            </Form.Label>
                            <Form.Control 
                                as="textarea" 
                                rows={3} 
                                placeholder="Escriba su mensaje" 
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                Por favor ingresa un mensaje.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Button variant="primary" type="submit" className="submit-button mt-3">
                            <i className="fas fa-paper-plane"></i> Enviar
                        </Button>
                        {submitted && <p className="mt-3 text-success">Su mensaje ha sido enviado con éxito.</p>}
                    </Form>
                </Col>
                <Col md={6} className="contact-info p-4 text-center">
                    <h5>Información de Contacto</h5>
                    <p><i className="fas fa-phone"></i> Teléfono: <a href="tel:08103334567">0810-333-4567</a></p>
                    <p><i className="fas fa-envelope"></i> Email: <a href="mailto:ventas@darom.com">ventas@darom.com | proveedores@darom.com | pagos@daromsa</a></p>
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
        </Container>
    );
}

export default Contact;