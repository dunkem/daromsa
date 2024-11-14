import React, { useState } from 'react';
import { Container, Row, Col, Card, Carousel, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        // Aquí puedes manejar el envío del formulario, como enviar datos a una API
        console.log('Email:', email);
        console.log('Mensaje:', message);
        
        // Simular envío exitoso
        setSubmitted(true);
        setEmail('');
        setMessage('');
    };

    const services = [
        {
            src: '/PORTADAHORMIGONBOMBAOFICIAL.JPG',
            title: 'Hormigón Elaborado',
            description: 'Proveemos hormigón de la mejor calidad para tus proyectos.',
        },
        {
            src: '/portadacorralon2 (2).jpg',
            title: 'Materiales de Corralón',
            description: 'Amplia variedad de materiales para construcción y remodelación.',
        },
        {
            src: '/portadamovofi.jpg',
            title: 'Estudio y Movimientos de Suelos',
            description: 'Expertos en estudios de suelos para garantizar la solidez de tus proyectos.',
        },
        {
            src: '/portadapisollaneado.jpg',
            title: 'Pisos llanos',
            description: 'Mejoramos la calidad de tus superficies con nuestros servicios de pisos.',
        }
    ];

    const featuredProducts = [
        {
            src: '/mathidrofugosika20l.jpg',
            name: 'Hidrofugo Sika 20 tls',
            link: '/products/hidrofugo-sika-200',
        },
        {
            src: '/matlad12.jpg',
            name: 'Ladrillo 12x12x18',
            link: '/products/ladrillo-comun',
        },
        {
            src: '/matbolsonarena.jpg',
            name: 'Arena en Bolsón',
            link: '/products/arena-gruesa',
        },
        {
            src: '/matcementoloma50kg.jpg',
            name: 'Cemento Loma Negra 50kg',
            link: '/products/cemento-portland',
        },
        {
            src: '/matcalcaciquemax30kg.jpg',
            name: 'Cal Hidratada x 30kg',
            link: '/products/cal-hidratada',
        },
        {
            src: '/matvarillashierro.png',
            name: 'Hierro de Construcción',
            link: '/products/hierro-construccion',
        },
        {
            src: '/matpiedra620.jpg',
            name: 'Piedra en Bolson',
            link: '/products/piedra-bolson',
        },
    ];

    const benefits = [
        { src: '/elegirnoslaboratorio.jpg', title: 'Asesoramiento Técnico' },
        { src: '/elegirnosticket.jpg', title: 'Ticket de Pesada' },
        { src: '/elegirnoscargaprecintada.jpg', title: 'Carga Precintada' },
        { src: '/elegirnosseguimiento.jpg', title: 'Rastreo Satelital' },
    ];

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
                                    <Card.Img variant="top" src={item.src} alt={item.alt} className={isSupplier ? "supplier-logo" : "benefit-logo"} />
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
        <Container fluid className="main-container">
            {/* Section de Portada */}
            <Row className="hero-section">
                <Col className="text-center">
                    <div className="hero-content animated fadeIn">
                        <h2 className="hero-title">BIENVENIDOS A DAROM, CALIDAD GARANTIZADA QUE TE ACOMPAÑA EN TUS PROYECTOS</h2>
                        <h3 className="hero-subtitle">HORMIGÓN ELABORADO Y SERVICIOS DE CONSTRUCCIÓN DE CALIDAD SUPERIOR. TRANSFORMA TUS PROYECTOS CON NUESTRA EXCELENCIA.</h3>
                    </div>
                </Col>
            </Row>

            {/* Servicios Section */}
            <Row className="text-center mb-4" style={{ backgroundColor: '#f0f0f0', padding: '20px' }}>
                <Col>
                    <h2 className="section-title">NUESTROS SERVICIOS</h2>
                    <div className="line-divider"></div>
                </Col>
            </Row>
            <Row className="mb-4">
                {services.map((service, index) => (
                    <Col md={3} sm={6} key={index} className="mb-4">
                        <Card className="service-card" style={{ backgroundColor: '#495057', color: '#ffffff' }}>
                            <Card.Img variant="top" src={service.src} />
                            <Card.Body>
                                <Card.Title>{service.title}</Card.Title>
                                <Card.Text>{service.description}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

            {/* Beneficios Section */}
            <Row className="text-center mb-4" style={{ backgroundColor: '#f8f9fa', padding: '20px 0' }}>
                <Col>
                    <h2 className="section-title">SERVICIOS QUE NOS DIFERENCIAN</h2>
                    <div className="line-divider"></div>
                </Col>
            </Row>
            <Row className="justify-content-center">
                {benefits.map((benefit, index) => (
                    <Col md={3} sm={6} key={index} className="mb-4">
                        <div className="benefit-container text-center">
                            <img src={benefit.src} alt={benefit.title} className="benefit-logo" />
                            <h4>{benefit.title}</h4>
                        </div>
                    </Col>
                ))}
            </Row>

            {/* Productos Destacados Section - Carrusel */}
            <Row className="text-center mb-4">
                <Col>
                    <h2 className="section-title">PRODUCTOS DESTACADOS</h2>
                    <div className="line-divider"></div>
                </Col>
            </Row>
            <Carousel className="mb-4">
                {renderCarouselItems(featuredProducts)}
            </Carousel>

            {/* Proveedores Section - Carrusel */}
            <Row className="text-center mb-4">
                <Col>
                    <h2 className="section-title">NUESTROS PROVEEDORES</h2>
                    <div className="line-divider"></div>
                </Col>
            </Row>
            <Carousel className="mb-4">
                {renderCarouselItems(suppliers, true)}
            </Carousel>

            {/* Formulario de Contacto */}
            <Row className="contact-form-section mb-4">
                <Col md={6}>
                    <h2>Contáctenos</h2>
                    <Form onSubmit={handleSubmit}>
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
                        <Button variant="primary" type="submit">Enviar</Button>
                    </Form>
                    {submitted && <p className="mt-3 text-success">Su mensaje ha sido enviado con éxito.</p>}
                </Col>
                <Col md={6}>
                    
                    <p>Teléfono: (011) 1234-5678</p>
                    <p>Email: contacto@darom.com</p>
                    <h3>Dirección</h3>
                    <p>Oficina: C. 152 6352, B1885 Guillermo Enrique Hudson</p>
                    <p>Planta: Pitec de Florencio Varela</p>
                </Col>
            </Row>

            {/* Footer Section */}
            <Row className="footer-section mt-4">
                <Col className="footer-content text-center">
                    <h5 className="footer-title">DAROM SA</h5>
                    <p>&copy; {new Date().getFullYear()} Darom SA. Todos los derechos reservados.</p>
                    <div className="footer-links">
                        <Link to="/privacy">Política de Privacidad</Link>
                        <span>|</span>
                        <Link to="/terms">Términos de Servicio</Link>
                        <span>|</span>
                        <Link to="/contact">Contáctanos</Link>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Home;