import React from 'react';
import { Container, Row, Col, Button, Carousel } from 'react-bootstrap';
import './Suelos.css'; // Asegúrate de aplicar los estilos modernos aquí

function Suelos() {
    return (
        <Container className="mt-4">
            <Row>
                <Col>
                    <h1>Estudio de Suelos</h1>
                    <p>Realizamos estudios de suelos para garantizar la solidez y seguridad de tus construcciones.</p>
                    <p>Ofrecemos servicios de alta calidad y expertos en la materia para asegurar el éxito de tus proyectos.</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Carousel>
                        {[
                            '/estudiosuelo.jpg',
                            '/estudiosuelo2.jpg',
                            '/estudiodesuelo3.jpg'
                        ].map((src, index) => (
                            <Carousel.Item key={index}>
                                <img
                                    className="d-block w-100 carousel-image"
                                    src={src}
                                    alt={`Estudio de suelos ${index + 1}`}
                                />
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </Col>
            </Row>

            <Row className="mt-4">
                <Col>
                    <h1>Movimientos de Suelo</h1>
                    <p>Realizamos movimientos de suelos para garantizar la solidez y seguridad de tus construcciones.</p>
                    <p>Ofrecemos servicios de alta calidad y expertos en la materia para asegurar el éxito de tus proyectos.</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Carousel>
                        {[
                            '/portadamov.jpg',
                            '/portadamov1.jpg',
                            '/portadamov2.jpg',
                            '/portadamov3.jpg',
                            '/portadamov4.jpg',
                            '/portadamov5.jpg',
                            '/portadamov6.jpg',
                            '/portadamov7.jpg',
                            '/portadamov8.jpg',
                            '/portadamov9.jpg'
                        ].map((src, index) => (
                            <Carousel.Item key={index}>
                                <img
                                    className="d-block w-100 carousel-image"
                                    src={src}
                                    alt={`Movimiento de suelos ${index + 1}`}
                                />
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </Col>
            </Row>

            <Row className="mt-4 text-center">
                <Col>
                    <h2>Contacta con Nosotros</h2>
                    <p>Para más información, no dudes en contactarnos. Estamos aquí para ayudarte.</p>
                    <Button variant="primary" href="mailto:contacto@darom.com" className="me-2">Enviar Correo</Button>
                    <Button variant="success" href="https://wa.me/1234567890" className="whatsapp-button">WhatsApp</Button>
                </Col>
            </Row>

            <Row className="mt-4 footer-section text-center">
                <Col>
                    <p>&copy; {new Date().getFullYear()} Darom SA. Todos los derechos reservados.</p>
                </Col>
            </Row>
        </Container>
    );
}

export default Suelos;
