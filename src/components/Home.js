import React from 'react';
import { Container, Row, Col, Card, Button, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';
import './Home.css'; // Asegúrate de aplicar estilos modernos aquí

function Home() {
    const services = [
        {
            src: '/portadahomeplumamixer.jpg',
            title: 'Hormigón Elaborado',
            description: 'Proveemos hormigón de la mejor calidad para tus proyectos.',
            link: '/services/hormigon'
        },
        {
            src: '/portadaserviciopluma.jpg',
            title: 'Servicios de Bombeo',
            description: 'Servicios de bombeo confiables y eficientes.',
            link: '/services/bombeo'
        },
        {
            src: '/portadacorralon2 (2).jpg',
            title: 'Materiales de Corralón',
            description: 'Amplia variedad de materiales para construcción y remodelación.',
            link: '/services/materiales'
        },
        {
            src: '/portadamovofi.jpg',
            title: 'Estudio y Movimientos de Suelos',
            description: 'Expertos en estudios de suelos para garantizar la solidez de tus proyectos.',
            link: '/services/suelos'
        }
    ];

    const featuredProducts = [
        {
            src: '/mathidrofugosika20l.jpg',
            name: 'Hidrofugo Sika 20 tls',
            link: '/products/hidrofugo-sika-200'
        },
        {
            src: '/matlad12.jpg',
            name: 'Ladrillo 12x12x18',
            link: '/products/ladrillo-comun'
        },
        {
            src: '/matbolsonarena.jpg',
            name: 'Arena en Bolsón',
            link: '/products/arena-gruesa'
        },
        {
            src: '/matcementoloma50kg.jpg',
            name: 'Cemento Loma Negra 50kg',
            link: '/products/cemento-portland'
        },
        {
            src: '/matcalcaciquemax30kg.jpg',
            name: 'Cal Hidratada x 30kg',
            link: '/products/cal-hidratada'
        },
        {
            src: '/matvarillashierro.png',
            name: 'Hierro de Construcción',
            link: '/products/hierro-construccion'
        },
        {
            src: '/matpiedra620.jpg',
            name: 'Piedra en Bolson',
            link: '/products/piedra-bolson'
        }
    ];

    const projects = [
        {
            src: '/obraconstrumex.jpg',
            title: 'Pavimentación Construmex'
        },
        {
            src: '/obraecas.jpg',
            title: 'Ecas'
        },
        {
            src: '/obrasvarias.jpg',
            title: 'Magallanes'
        }
    ];

    const renderProducts = () => {
        const productChunks = [];
        for (let i = 0; i < featuredProducts.length; i += 3) {
            productChunks.push(featuredProducts.slice(i, i + 3));
        }
        return productChunks.map((chunk, index) => (
            <Carousel.Item key={index}>
                <Row>
                    {chunk.map((product, idx) => (
                        <Col md={4} key={idx}>
                            <Card className="mb-4 shadow-sm modern-card">
                                <Card.Img variant="top" src={product.src} alt={product.name} />
                                <Card.Body>
                                    <Card.Title>{product.name}</Card.Title>
                                    <Button variant="primary" as={Link} to={product.link} className="modern-button">Ver Detalles</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Carousel.Item>
        ));
    };

    return (
        <Container className="mt-4">
            {/* Carousel Section */}
            <Row className="carousel-container">
                <Col>
                    <Carousel interval={3000}>
                        {services.map((service, index) => (
                            <Carousel.Item key={index}>
                                <img className="d-block w-100 carousel-image" src={service.src} alt={`Imagen ${index + 1}`} />
                                <Carousel.Caption>
                                    <h3 className="carousel-title">{service.title}</h3>
                                    <p className="carousel-text">{service.description}</p>
                                    <Button variant="primary" as={Link} to={service.link} className="modern-button">Descubre Más</Button>
                                </Carousel.Caption>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </Col>
            </Row>

            {/* Featured Products Carousel */}
            <Row className="mt-4">
                <Col>
                    <h2 className="text-center">Productos Destacados</h2>
                    <Carousel>
                        {renderProducts()}
                    </Carousel>
                </Col>
            </Row>

            {/* Projects Section */}
            <Row className="mt-4">
                <Col>
                    <h2 className="text-center">Nuestras Obras</h2>
                </Col>
            </Row>
            <Row>
                {projects.map((project, index) => (
                    <Col md={4} key={index}>
                        <Card className="mb-4 shadow-sm modern-card">
                            <Card.Img variant="top" src={project.src} alt={project.title} />
                            <Card.Body>
                                <Card.Title>{project.title}</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

           {/* Quick Contact */}
<Row className="mt-4">
    <Col className="text-center contact-section">
        <div className="contact-card">
            <h4>Contáctanos para un Presupuesto Personalizado</h4>
            <p className="contact-details">
                Llama al <strong>555-555-5555</strong> o envía un correo a <a href="mailto:contacto@darom.com">contacto@darom.com</a>
            </p>
            <Button 
                variant="success" 
                href="https://wa.me/1234567890" 
                className="whatsapp-button d-flex align-items-center justify-content-center mt-3 modern-button"
            >
                <FaWhatsapp size={20} className="me-2" /> Contáctanos por WhatsApp
            </Button>
        </div>
    </Col>
</Row>

            {/* Office Location Section */}
            <Row className="office-location">
                <Col md={6}>
                    <h4>Oficinas Hudson</h4>
                    <p>152 N° 6352 - 2do.Piso-Of.212</p>
                    <iframe
                        title="Mapa de oficinas en Hudson"
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13104.631459387174!2d-58.1581789!3d-34.80197!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a3278932239ca3%3A0xed9063c343d970ce!2sDowntown%20Greenville%20Hudson!5e0!3m2!1ses!2sar!4v1731112187148!5m2!1ses!2sar" 
                        width="100%"
                        height="450"
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
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3274.330843200107!2d-58.206128!3d-34.8479134!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2d7ff2e248f6b%3A0x13a6d078d9f675a2!2sPitec%20-%20Parque%20Industrial%20y%20Tecnol%C3%B3gico%20Florencio%20Varela!5e0!3m2!1ses!2sar!4v1731110773986!5m2!1ses!2sar" 
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </Col>
            </Row>

      {/* Footer Section */}
<Row className="mt-4 footer-section">
    <Col>
        <p>&copy; {new Date().getFullYear()} Darom SA. Todos los derechos reservados. Dtecno estudio</p>
        <div className="footer-links">
            <Link to="/privacy">Política de Privacidad</Link>
            <Link to="/terms">Términos de Servicio</Link>
            <Link to="/contact">Contáctanos</Link>
        </div>
    </Col>
</Row>
        </Container>
    );
}

export default Home;

