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
            src: '/hidrofugo.jpg',
            name: 'Hidrofugo Sika 200 Kg',
            link: '/products/hidrofugo-sika-200'
        },
        {
            src: '/ladrillo.jpg',
            name: 'Ladrillo Común',
            link: '/products/ladrillo-comun'
        },
        {
            src: '/arena.jpg',
            name: 'Arena Gruesa en Bolsón',
            link: '/products/arena-gruesa'
        },
        {
            src: '/cemento.jpg',
            name: 'Cemento Portland',
            link: '/products/cemento-portland'
        },
        {
            src: '/cal.jpg',
            name: 'Cal Hidratada',
            link: '/products/cal-hidratada'
        },
        {
            src: '/hierro.jpg',
            name: 'Hierro de Construcción',
            link: '/products/hierro-construccion'
        },
        {
            src: '/grava.jpg',
            name: 'Grava Triturada',
            link: '/products/grava-triturada'
        }
    ];

    const projects = [
        {
            src: '/obra1.jpg',
            title: 'Construcción de Edificio'
        },
        {
            src: '/obra2.jpg',
            title: 'Puente de Hormigón'
        },
        {
            src: '/obra3.jpg',
            title: 'Carretera Pavimentada'
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
                    <h4>Contáctanos para un Presupuesto Personalizado</h4>
                    <p>Llama al 555-555-5555 o envía un correo a <a href="mailto:contacto@darom.com">contacto@darom.com</a></p>
                    <Button variant="success" href="https://wa.me/1234567890" className="d-flex align-items-center justify-content-center mt-3 modern-button">
                        <FaWhatsapp size={20} className="me-2" /> WhatsApp
                    </Button>
                </Col>
            </Row>

            {/* Office Location Section */}
            <Row className="office-location">
                <Col md={6}>
                    <h4>Oficinas Hudson</h4>
                    <p>152 N° 6352 - 2do.Piso-Of.212</p>
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
                <Col md={6}>
                    <h4>Planta de Hormigón Elaborado y Corralón</h4>
                    <p>Dirección de la planta y corralón</p>
                    <iframe
                        title="Mapa de planta y corralón"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3169.456022497281!2d-58.21165368427842!3d-34.84763467913954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a32f4db3ac5cb7%3A0x7d313e6fdb2c1a!2s152%20N%C2%B06352%2C%20B1848HRB%20Hudson%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1634008710566!5m2!1ses!2sar"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </Col>
            </Row>

            {/* Footer Section */}
            <Row className="mt-4">
                <Col>
                    <p className="text-center">&copy; {new Date().getFullYear()} Darom SA. Todos los derechos reservados.</p>
                    <div className="text-center">
                        <Link to="/privacy" className="me-3">Política de Privacidad</Link>
                        <Link to="/terms" className="me-3">Términos de Servicio</Link>
                        <Link to="/contact">Contáctanos</Link>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Home;

