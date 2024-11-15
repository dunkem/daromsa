import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Image, Carousel, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaFileUpload } from 'react-icons/fa'; // Asegúrate de instalar react-icons
import './Hormigon.css'; // Importa tu CSS

function Hormigon() {
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

    const suppliers = [
        { src: '/logolomanegra.png', alt: 'Loma Negra' },
        { src: '/LOGOMAPEI.png', alt: 'Mapei' },
        { src: '/LOGOSIKA.png', alt: 'Sika' },
        { src: '/LOGOACINDAR.png', alt: 'Red Acindar' },
        { src: '/LOGOSILOS.png', alt: 'Silos Reneros' },
        { src: '/LOGOBLINKI.png', alt: 'Blinki' },
        { src: '/LOGOCANTERAS.jpg', alt: 'Canteras Argentinas' },
    ];

    const renderCarouselItems = (items, isSupplier = false) => {
        const itemsPerSlide = 4; // Número de elementos por carrusel
        const slides = [];
        
        for (let i = 0; i < Math.ceil(items.length / itemsPerSlide); i++) {
            slides.push(
                <Carousel.Item key={i}>
                    <Row className="justify-content-center">
                        {items.slice(i * itemsPerSlide, i * itemsPerSlide + itemsPerSlide).map((item, idx) => (
                            <Col md={isSupplier ? 2 : 3} sm={6} key={idx} className="mb-4">
                                <Card className={isSupplier ? "supplier-card text-center" : "product-card text-center"}>
                                    <Card.Img 
                                        variant="top" 
                                        src={item.src} 
                                        alt={item.alt} 
                                        className={isSupplier ? "supplier-logo" : "benefit-logo"} 
                                    />
                                    {!isSupplier && (
                                        <Card.Body>
                                            <Card.Title>{item.title || item.name}</Card.Title>
                                            <Card.Text>{item.description}</Card.Text>
                                        </Card.Body>
                                    )}
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
                            backgroundColor: '#ff4d4d', // Color rojo más suave
                            color: 'white', 
                            border: 'none', // Sin borde
                            borderRadius: '5px', // Bordes redondeados
                            padding: '10px 15px', // Espaciado interno ajustado
                            display: 'flex', 
                            alignItems: 'center',
                        }} 
                        onClick={() => alert('Funcionalidad para adjuntar lista de precios aquí.')}
                    >
                        <FaFileUpload style={{ marginRight: '5px' }} /> {/* Ícono de archivo */}
                        ADJUNTA TU LISTA
                    </Button>
                </Col>
                <Col className="text-center">
                    <h1 className="display-4 font-weight-bold">HORMIGÓN ELABORADO</h1>
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
            
            {/* Sección logos proveedores */}
            <Row className="text-center mb-4">
                <Col>
                    <h2 className="section-title">NUESTROS PROVEEDORES</h2>
                    <div className="line-divider"></div>
                </Col>
            </Row>
            <Carousel className="mb-4">
                {renderCarouselItems(suppliers)} {/* Renderiza los proveedores */}
            </Carousel>

            {/* Sección Sobre la Empresa */}
            <Row className="text-center mb-4">
                <Col>
                    <h2 className="section-title">Sobre la Empresa</h2>
                    <div className="line-divider"></div>
                </Col>
            </Row>
            <Row className="company-section text-center mb-4">
                <Col>
                    <p className="company-description">
                        Desde 1978, Darom SA ha liderado en la construcción con una dedicación inquebrantable a la calidad. Con una expansión desde Zona Sur hasta toda la Provincia de Buenos Aires, ofrecemos hormigón elaborado y materiales de construcción de alta calidad. Nos diferenciamos por un soporte integral pre y post compra, equipo de última tecnología y constante capacitación de nuestro personal. Aspiramos a ser líderes nacionales, llevando nuestros productos y servicios a toda la República Argentina.
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
                        <Link to="/privacy" className="footer-link">Política de Privacidad</Link>
                        <span>|</span>
                        <Link to="/terms" className="footer-link">Términos de Servicio</Link>
                        <span>|</span>
                        <Link to="/contact" className="footer-link">Contáctanos</Link>
                    </div>
                    <p className="footer-design">
                        Diseñado por <strong>Dtecno</strong>
                    </p>
                </Col>
            </Row>
        </Container>
    );
}

export default Hormigon;