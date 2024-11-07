import React, { useState } from 'react';
import { Container, Form, Button, Row, Col, Card } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import './Contact.css'; // Asegúrate de crear este archivo CSS

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
        <Container className="mt-5">
            <h1 className="text-center mb-4">Contacto</h1>
            <Card className="shadow-lg">
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
            <Row className="mt-4">
                <Col className="d-flex justify-content-around">
                    <h5 className="text-center">Conéctate con nosotros:</h5>
                </Col>
            </Row>
            <Row className="mt-2">
                <Col className="d-flex justify-content-around">
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
                </Col>
            </Row>
        </Container>
    );
}

export default Contact;
