import React from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';

function Hormigon() {
    return (
        <Container className="mt-4">
            <Row>
                <Col>
                    <h1>Hormigón Elaborado</h1>
                    <p>Ofrecemos hormigón de alta calidad y servicios de bombeo para tus proyectos de construcción.</p>
                    <p>Trabajamos con los estándares más altos para asegurar la durabilidad y resistencia de tus estructuras.</p>
                    <Image src="/tiposhormigon.jpg" alt="Hormigón de alta calidad" fluid className="my-4" />
                    <Image src="/lomamid.png" alt="Hormigón de alta calidad" fluid className="my-4" />
                    <Image src="/pqelegirnos.png" alt="Hormigón de alta calidad" fluid className="my-4" />
                </Col>
            </Row>
            <Row className="mt-4">
                <Col>
                    <h2>Contacta con Nosotros</h2>
                    <p>Para más información sobre nuestros productos y servicios, no dudes en contactarnos. Estamos aquí para ayudarte en cada paso de tu proyecto.</p>
                    <p><strong>Teléfono:</strong> 555-555-5555</p>
                    <p><strong>Correo Electrónico:</strong> <a href="mailto:contacto@darom.com">contacto@darom.com</a></p>
                    <Button variant="primary" href="mailto:contacto@darom.com" className="me-2">Enviar Correo</Button>
                    <Button variant="success" href="https://wa.me/1234567890" className="me-2">WhatsApp</Button>
                    <Button variant="info" href="tel:555-555-5555" className="me-2">Llamar</Button>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col>
                    <h2>Visítanos</h2>
                    <p>Nuestras oficinas están ubicadas en:</p>
                    <p>152 N° 6352 - 2do.Piso-Of.212, Hudson, Provincia de Buenos Aires</p>
                    <iframe
    title="Mapa de oficinas en Hudson"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3169.456022497281!2d-58.21165368427842!3d-34.84763467913954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a32f4db3ac5cb7%3A0x7d313e6fdb2c1a!2s152%20N%C2%B06352%2C%20B1848HRB%20Hudson%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1634008710566!5m2!1ses!2sar"
    width="100%"
    height="450"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
></iframe>


                </Col>
            </Row>
        </Container>
    );
}

export default Hormigon;

