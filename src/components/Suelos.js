import React from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';

function Suelos() {
    return (
        <Container className="mt-4">
            <Row>
                <Col>
                    <h1>Estudio y Movimientos de Suelos</h1>
                    <p>Realizamos estudios y movimientos de suelos para garantizar la solidez y seguridad de tus construcciones.</p>
                    <p>Ofrecemos servicios de alta calidad y expertos en la materia para asegurar el éxito de tus proyectos.</p>
                    <Image src="/path_to_image1.jpg" alt="Estudio de suelos" fluid className="my-4" />
                    <Image src="/path_to_image2.jpg" alt="Movimiento de suelos" fluid className="my-4" />
                </Col>
            </Row>
            <Row className="mt-4">
                <Col>
                    <h2>Contacta con Nosotros</h2>
                    <p>Para más información, no dudes en contactarnos. Estamos aquí para ayudarte.</p>
                    <Button variant="primary" href="mailto:contacto@darom.com" className="me-2">Enviar Correo</Button>
                    <Button variant="success" href="https://wa.me/1234567890">WhatsApp</Button>
                </Col>
            </Row>
        </Container>
    );
}

export default Suelos;
