import React, { useState } from 'react';
import { Container, Row, Col, Button, Carousel, Form } from 'react-bootstrap';
import { FaFileUpload } from 'react-icons/fa'; // Asegúrate de instalar react-icons
import { Link } from 'react-router-dom';
import './Suelos.css';

function Suelos() {
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

    const estudios = [
        '/estudiosuelo.jpg',
        '/estudiosuelo2.jpg',
        '/estudiodesuelo3.jpg',
    ];

    const movimientos = [
        '/portadamovofi.jpg',
        '/portadamov1.jpg',
        '/portadamov2.jpg',
        '/portadamov3.jpg',
        '/portadamov4.jpg',
        '/portadamov5.jpg',
        '/portadamov6.jpg',
        '/portadamov7.jpg',
        '/portadamov8.jpg',
        '/portadamov9.jpg'
    ];

    const renderCarouselItems = (images) => {
        const items = [];
        for (let i = 0; i < images.length; i += 3) {
            items.push(
                <Carousel.Item key={i}>
                    <Row className="justify-content-center">
                        {images.slice(i, i + 3).map((src, index) => (
                            <Col xs={12} sm={4} key={index}>
                                <img
                                    className="d-block w-100 carousel-image"
                                    src={src}
                                    alt={`Imagen ${i + index + 1}`}
                                />
                            </Col>
                        ))}
                    </Row>
                </Carousel.Item>
            );
        }
        return items;
    };

    return (
        <Container className="mt-4 suelos-container">
            <Row>
                <Col>
                    <h1>ESTUDIO DE SUELOS</h1>
                    <p>
                    Transforma tu Proyecto desde la Base Nuestro servicio de Estudio de Suelos te ofrece un análisis detallado y preciso de las condiciones del terreno, asegurando la estabilidad y seguridad de tus construcciones. Con tecnología de vanguardia y un equipo de expertos en geotecnia, identificamos las características del suelo, detectamos posibles riesgos y recomendamos las mejores soluciones para tus necesidades. Confía en nosotros para cimentar tus proyectos sobre una base sólida y segura.
                    </p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Carousel>
                        {renderCarouselItems(estudios)}
                    </Carousel>
                </Col>
            </Row>

            <Row className="mt-4">
                <Col>
                    <h1>MOVIMIENTO DE SUELOS</h1>
                    <p>
                    Prepara tu Terreno para el Éxito En los proyectos de construcción, cada detalle cuenta. Nuestro servicio de Movimientos de Suelos garantiza que tu terreno esté perfectamente nivelado y listo para la edificación. Utilizamos maquinaria moderna y técnicas avanzadas para realizar excavaciones, rellenos y compactaciones con la máxima precisión. Desde grandes desarrollos hasta pequeñas obras, nos aseguramos de que tu proyecto comience con el pie derecho. Confía en nuestra experiencia y dedicación para transformar tu terreno en el lugar ideal para construir.
                    </p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Carousel>
                        {renderCarouselItems(movimientos)}
                    </Carousel>
                </Col>
            </Row>
            {/* Botón de Adjunta tu lista */}
            <Row className="mb-4">
                <Col className="text-left">
                    <Button 
                        style={{ 
                            backgroundColor: '#ff4d4d', 
                            color: 'white', 
                            border: 'none', 
                            borderRadius: '5px', 
                            padding: '10px 15px', 
                            display: 'flex', 
                            alignItems: 'center',
                        }} 
                        onClick={() => alert('Funcionalidad para adjuntar lista de precios aquí.')}
                    >
                        <FaFileUpload style={{ marginRight: '5px' }} />
                        ADJUNTA TU LISTA
                    </Button>
                    <p className="lead">
                        ¡Comparte tu Lista o Presupuesto con Nosotros! Te Ofrecemos los Mejores Precios y Condiciones.
                    </p>
                </Col>
            </Row>

            {/* Sección de contacto */}
            <Row className="contact-form-section mb-4">
                <Col md={6}>
                    <h2 className="contact-title">CONTACTANOS</h2>
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
                        <Button variant="primary" type="submit" className="submit-button">
                            Enviar
                        </Button>
                        {submitted && <p className="mt-3 text-success">Su mensaje ha sido enviado con éxito.</p>}
                    </Form>
                </Col>
                <Col md={6} className="contact-info">
                    <h4>Información de Contacto</h4>
                    <p>Teléfono: <a href="tel:08103334567">0810-333-4567</a></p>
                    <p>Email: <a href="mailto:ventas@darom.com">ventas@darom.com</a></p>
                    <p>Oficina: C. 152 6352, B1885 Guillermo Enrique Hudson</p>
                    <p>Planta: Parque industrial tecnológico de Florencio Varela</p>
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

export default Suelos;