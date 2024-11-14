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
            title: 'HORMIGÓN ELABORADO Y SERVICIOS DE BOMBEO',
            description: 'Nos especializamos en proveer hormigón de alta calidad, asegurando resistencia y durabilidad en cada aplicación. Nuestros servicios de bombeo facilitan su uso en cualquier obra.',
            backup: {
                text: 'RESPALDADOS POR LOMA NEGRA',
                logo: '/logolomanegra.png'
            },
            link: '/services/hormigon' // Ruta añadida
        },
        {
            src: '/portadacorralon2 (2).jpg',
            title: 'MATERIALES DE CONSTRUCCIÓN Y CORRALÓN',
            description: 'Ofrecemos una amplia gama de materiales de construcción, desde ladrillos y cementos hasta acabados y accesorios. Calidad garantizada para todo tipo de proyectos.',
            link: '/services/materiales' // Ruta añadida
        },
        {
            src: '/portadamovofi.jpg',
            title: 'ESTUDIO Y MOVIMIENTOS DE SUELOS',
            description: 'Realizamos estudios de suelos detallados y precisos para asegurar la estabilidad de tus proyectos. Nuestros expertos gestionan movimientos de tierra con eficiencia y seguridad.',
            link: '/services/suelos' // Ruta añadida
        },
        {
            src: '/portadapisollaneado.jpg',
            title: 'PISOS LLANEADOS Y ACABADOS SUPERFICIALES',
            description: 'Transformamos tus superficies con nuestros servicios de pisos llanos y acabados de alta calidad. Mejora la estética y funcionalidad de tus espacios con nuestros especialistas.',
            backup: {
                text: 'RESPALDADOS POR MAPEI',
                logo: '/LOGOMAPEI.png'
            },
            link: '/services/pisos' // Ruta añadida
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
            <Row className="text-center mb-4" style={{ backgroundColor: '#f8f9fa', padding: '20px 0' }}>
                <Col>
                    <h2 className="section-title">NUESTROS SERVICIOS</h2>
                    <div className="line-divider"></div>
                </Col>
            </Row>

            <Row className="mb-4">
                {services.map((service, index) => (
                    <Col md={3} sm={6} key={index} className="mb-4 d-flex align-items-stretch">
                        <Card className="service-card">
                            <div className="service-image-container">
                                <Card.Img variant="top" src={service.src} className="service-img" />
                                {service.backup && (
                                    <div className="backup-info">
                                        <p>{service.backup.text}</p>
                                        <img src={service.backup.logo} alt="Logo" className="backup-logo" />
                                    </div>
                                )}
                            </div>
                            <Card.Body>
                                <Card.Title className="service-title">{service.title}</Card.Title>
                                <Card.Text className="service-description">{service.description}</Card.Text>
                                <Link to={service.link}>
                                    <Button className="service-button">Ver Más</Button>
                                </Link>
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
                <Form.Label>
                    <i className="fas fa-envelope"></i> Email
                </Form.Label>
                <Form.Control 
                    type="email" 
                    placeholder="Ingrese su email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group controlId="formBasicMessage">
                <Form.Label>
                    <i className="fas fa-comment-dots"></i> Mensaje
                </Form.Label>
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
                <i className="fas fa-paper-plane"></i> Enviar
            </Button>
            {submitted && <p className="mt-3 text-success">Su mensaje ha sido enviado con éxito.</p>}
        </Form>
    </Col>
    <Col md={6} className="contact-info">
        <p><i className="fas fa-phone"></i> Teléfono: <a href="tel:08103334567">0810-333-4567</a></p>
        <p><i className="fas fa-envelope"></i> Email: <a href="mailto:ventas@darom.com">ventas@darom.com</a></p>
        <p><i className="fas fa-map-marker-alt"></i> Oficina: C. 152 6352, B1885 Guillermo Enrique Hudson</p>
        <p><i className="fas fa-industry"></i> Planta: Parque industrial tecnológico de Florencio Varela</p>
    </Col>
</Row>

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
            Diseñado por <strong>Dtecno</strong>
        </p>
    </Col>
</Row>
        </Container>
    );
}

export default Home;