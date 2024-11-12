import React from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';
import './Home.css'; // Importa tu CSS


function Hormigon() {
    return (
        <Container className="mt-4">
            <Row>
                <Col>
                    <h1>Hormigón Elaborado</h1>
                    <p>Ofrecemos hormigón de alta calidad y servicios de bombeo para tus proyectos de construcción.</p>
                    <p>Trabajamos con los estándares más altos para asegurar la durabilidad y resistencia de tus estructuras.</p>
                    <Image src="/tiposhormigon.jpg" alt="Hormigón de alta calidad" fluid className="my-4" />
                    <Image src="/servicioshormilomanegra.png" alt="Hormigón de alta calidad" fluid className="my-4" />
                    
                </Col>
            </Row>
            {/* Quick Contact */}
            <Row className="mt-4 contact-section">
                <Col className="text-center">
                    <h4 className="contact-title">Contáctanos para un Presupuesto Personalizado</h4>
                    <Row>
                        <Col md={6} className="d-flex justify-content-center">
                            <Card className="mb-4 shadow-sm modern-card contact-card">
                                <Card.Body>
                                    <Card.Text>Especialista en Hormigón Elaborado.</Card.Text>
                                    <Button
                                        variant="success"
                                        className="whatsapp-button"
                                        href="https://wa.me/5555555555"
                                    >
                                        <FaWhatsapp className="me-2" /> Contactar por WhatsApp
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6} className="d-flex justify-content-center">
                            <Card className="mb-4 shadow-sm modern-card contact-card">
                                <Card.Body>
                                    <Card.Text>Especialista en Materiales de Construcción.</Card.Text>
                                    <Button
                                        variant="success"
                                        className="whatsapp-button"
                                        href="https://wa.me/5555555556"
                                    >
                                        <FaWhatsapp className="me-2" /> Contactar por WhatsApp
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>

            {/* Office Location Section */}
            <Row className="office-location mt-5">
                <Col md={6}>
                    <h4>Oficinas Hudson</h4>
                    <p>152 N° 6352 - 2do.Piso-Of.212</p>
                    <iframe
                        title="Mapa de oficinas en Hudson"
                        src="https://www.google.com/maps/embed?pb=..."
                        width="100%"
                        height="300"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </Col>
                <Col md={6}>
                    <h4>Planta de Hormigón Elaborado y Corralón</h4>
                    <p>Pitec - Parque Industrial y Tecnológico Florencio Varela</p>
                    <iframe
                        title="Mapa de planta y corralón"
                        src="https://www.google.com/maps/embed?pb=..."
                        width="100%"
                        height="300"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </Col>
            </Row>

            {/* Footer Section */}
            <Row className="footer-section mt-4">
                <Col>
                    <div className="footer-content text-center">
                        <h5 className="footer-title">Dtecno</h5>
                        <p>&copy; {new Date().getFullYear()} Darom SA. Todos los derechos reservados.</p>
                        <div className="footer-links">
                            <Link to="/privacy">Política de Privacidad</Link>
                            <span>|</span>
                            <Link to="/terms">Términos de Servicio</Link>
                            <span>|</span>
                            <Link to="/contact">Contáctanos</Link>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Hormigon;

