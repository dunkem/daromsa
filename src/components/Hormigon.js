import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Image, Carousel, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaFileUpload } from 'react-icons/fa';
import './Hormigon.css';

function Hormigon() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);

    // Maneja el envío del formulario
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Email:', email);
        console.log('Mensaje:', message);
        setSubmitted(true);
        setEmail('');
        setMessage('');
    };

    // Datos de los proveedores
    const suppliers = [
        { src: '/logolomanegra.png', alt: 'Loma Negra' },
        { src: '/LOGOMAPEI.png', alt: 'Mapei' },
        { src: '/LOGOSIKA.png', alt: 'Sika' },
        { src: '/LOGOACINDAR.png', alt: 'Red Acindar' },
        { src: '/LOGOSILOS.png', alt: 'Silos Reneros' },
        { src: '/LOGOBLINKI.png', alt: 'Blinki' },
        { src: '/LOGOCANTERAS.jpg', alt: 'Canteras Argentinas' },
    ];

    // Renderiza los elementos del carrusel
    const renderCarouselItems = (items) => {
        const itemsPerSlide = 4; // Número de elementos por carrusel
        const slides = [];

        for (let i = 0; i < Math.ceil(items.length / itemsPerSlide); i++) {
            slides.push(
                <Carousel.Item key={i}>
                    <Row className="justify-content-center">
                        {items.slice(i * itemsPerSlide, i * itemsPerSlide + itemsPerSlide).map((item, idx) => (
                            <Col md={3} sm={6} key={idx} className="mb-4">
                                <Card className="supplier-card text-center">
                                    <Card.Img 
                                        variant="top" 
                                        src={item.src} 
                                        alt={item.alt} 
                                        className="supplier-logo" 
                                    />
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Carousel.Item>
            );
        }
        return slides;
    };

    return (
        <Container className="mt-4">
            <Row>
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
                <Col className="text-center">
                    <h1 className="display-4 font-weight-bold" style={{ color: 'black' }}>HORMIGÓN ELABORADO</h1>
                    <p className="lead">OFRECEMOS HORMIGÓN DE ALTA CALIDAD Y SERVICIOS DE BOMBEO PARA TUS PROYECTOS DE CONSTRUCCIÓN.</p>
                    <p>TRABAJAMOS CON LOS ESTÁNDARES MÁS ALTOS PARA ASEGURAR LA DURABILIDAD Y RESISTENCIA DE TUS ESTRUCTURAS.</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Image 
                        src="/tiposhormigon.jpg" 
                        alt="HORMIGÓN DE ALTA CALIDAD" 
                        fluid 
                        className="full-width-image my-4" 
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Image 
                        src="/servicioshormilomanegra.png" 
                        alt="HORMIGÓN DE ALTA CALIDAD" 
                        fluid 
                        className="full-width-image my-4" 
                    />
                </Col>
            </Row>
            {/* Nuevas imágenes de servicios de bomba */}
            <Row className="text-center mb-4">
                <Col>
                    <h2 className="section-title">POSEEMOS UNA FLOTA DE BOMBAS</h2>
                    <div className="line-divider"></div>
                </Col>
            </Row>
            <Row className="justify-content-center mb-4">
                <Col xs={6} md={5} className="text-center">
                    <Image 
                        src="/bombaarrastre.jpg" 
                        alt="Bomba Arrastre" 
                        fluid 
                        className="full-width-image" 
                    />
                    <p>Bomba Arrastre</p>
                </Col>
                <Col xs={6} md={5} className="text-center">
                    <Image 
                        src="/bombapluma.jpg" 
                        alt="Bomba Pluma" 
                        fluid 
                        className="full-width-image" 
                    />
                    <p>Bomba Pluma</p>
                </Col>
            </Row>
            
            {/* Sección logos proveedores */}
            <Row className="text-center mb-4">
                <Col>
                    <h2 className="section-title">NUESTROS PROVEEDORES</h2>
                    <div className="line-divider"></div>
                </Col>
            </Row>
            <Carousel className="mb-4">
                {renderCarouselItems(suppliers)} 
            </Carousel>

            {/* Sección Sobre la Empresa */}
            <Row className="text-center mb-4">
                <Col>
                    <h2 className="section-title">SOBRE LA EMPRESA</h2>
                    <div className="line-divider"></div>
                </Col>
            </Row>
            <Row className="company-section text-center mb-4">
                <Col>
                    <p className="company-description">
                        Desde 1978, Darom SA ha liderado en la construcción con una dedicación inquebrantable a la calidad. Con una expansión desde Zona Sur hasta toda la Provincia de Buenos Aires, ofrecemos hormigón elaborado y materiales de construcción de alta calidad.
                    </p>
                </Col>
            </Row>

            {/* Contacto */}
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

export default Hormigon;