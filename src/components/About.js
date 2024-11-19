import React, { useState } from 'react';
import { Container, Row, Col, Button, Image, Form } from 'react-bootstrap';
import './About.css';

function About() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Email:', email);
        console.log('Mensaje:', message);
        setSubmitted(true);
        setEmail('');
        setMessage('');
    };

    return (
        <Container className="about-container mt-4">
            <Row>
                <Col>
                    <h1 className="about-title">Sobre Nosotros</h1>
                    <p className="about-paragraph">
                        Desde el año 1978, los actuales socios de Darom SA incursionan en la actividad de la construcción, habiendo comenzado como proveedor de Hormigón Elaborado para Zona Sur. Actualmente, la empresa se ha expandido en toda la Provincia de Buenos Aires, comercializando sus productos y servicios en diversas localidades.
                    </p>
                    <h2 className="about-section-title">Historia</h2>
                    <p className="about-paragraph">
                        DAROM ha iniciado sus actividades como un emprendimiento familiar, y al día de hoy ha podido expandir su negocio trabajando en distintos proyectos (obras públicas, civiles y particulares). La empresa cuenta con una planta de elaboración de Hormigón ubicada en la localidad de Bosques y, así mismo, centraliza sus operaciones en las oficinas administrativas en el partido de Hudson y La Plata.
                    </p>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col>
                    <h2 className="about-section-title">Misión</h2>
                    <p className="about-paragraph">
                        Elaboramos Hormigón y comercializamos materiales para distintos tipos de operaciones. Nos diferenciamos en el mercado por el servicio ofrecido a nuestros clientes, brindando un soporte pre y post compra que asegurará la correcta satisfacción de sus necesidades. Esto es logrado a través de la capacitación constante de nuestros empleados en todos los procesos que intervienen. Contamos con un equipamiento moderno y de alta tecnología que permite la realización de pequeñas, medianas y grandes obras.
                    </p>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col>
                    <h2 className="about-section-title">Visión</h2>
                    <p className="about-paragraph">
                        Comercializar nuestros materiales y servicios para toda la República Argentina con el objetivo de ser los líderes del mercado a nivel nacional.
                    </p>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col md={6}>
                    <Image src="/path_to_about_image1.jpg" alt="Equipo de trabajo" fluid className="about-image" />
                </Col>
                <Col md={6}>
                    <Image src="/path_to_about_image2.jpg" alt="Proyectos realizados" fluid className="about-image" />
                </Col>
            </Row>

            {/* Sección de contacto */}
            <Row className="about-contact-form-section mb-4">
                <Col md={6}>
                    <h2 className="about-contact-title">CONTACTANOS</h2>
                    <Form onSubmit={handleSubmit} className="contact-form">
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control 
                                type="email" 
                                placeholder="Ingrese su email" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="formBasicMessage">
                            <Form.Label>Mensaje</Form.Label>
                            <Form.Control 
                                as="textarea" 
                                rows={3} 
                                placeholder="Escriba su mensaje" 
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit" className="about-submit-button">
                            Enviar
                        </Button>
                        {submitted && <p className="mt-3 text-success">Su mensaje ha sido enviado con éxito.</p>}
                    </Form>
                </Col>
                <Col md={6} className="about-contact-info">
                    <h4>Información de Contacto</h4>
                    <p>Teléfono: <a href="tel:08103334567">0810-333-4567</a></p>
                    <p>Email: <a href="mailto:ventas@darom.com">ventas@darom.com</a></p>
                    <p>Oficina: C. 152 6352, B1885 Guillermo Enrique Hudson</p>
                    <p>Planta: Parque industrial tecnológico de Florencio Varela</p>
                </Col>
            </Row>

            {/* Footer Section */}
            <Row className="about-footer-section mt-4">
                <Col className="footer-content text-center">
                    <h5 className="about-footer-title">DAROM SA</h5>
                    <p>&copy; {new Date().getFullYear()} Darom SA. Todos los derechos reservados.</p>
                    <p className="about-footer-design">Diseñado por <strong>Dtecno</strong></p>
                </Col>
            </Row>
        </Container>
    );
}

export default About;