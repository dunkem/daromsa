import React from 'react';
import { Container, Row, Col, Card, Button, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';
import './Home.css'; // Asegúrate de crear este archivo CSS


function Home() {
    const services = [
        {
            src: '/port2.jpg',
            title: 'Hormigón Eloborado',
            description: 'Proveemos hormigón de la mejor calidad.',
            link: '/services/hormigon'
        },
        {
            src: '/port1.jpg',
            title: 'Servicios de Bombeo',
            description: 'Proveemos Servicios de bombeo para tus proyectos.',
            link: '/services/bombeo'
        },
        {
            src: '/portcorralon.jpg',
            title: 'Materiales de Corralón',
            description: 'Ofrecemos una amplia variedad de materiales para la construcción y remodelación.',
            link: '/services/materiales'
        },
        {
            src: '/mov1.jpg',
            title: 'Estudio y Movimientos de Suelos',
            description: 'Contamos con expertos en estudio y movimientos de suelos para garantizar la solidez de tus proyectos.',
            link: '/services/suelos'
        }
    ];

    return (
        <Container className="mt-4">
            {/* Carousel Section */}
            <Row>
                <Col>
                    <Carousel interval={3000}>
                        {services.map((service, index) => (
                            <Carousel.Item key={index}>
                                <img className="d-block w-100 carousel-image" src={service.src} alt={`Imagen ${index + 1}`} />
                                <Carousel.Caption>
                                    <h3 className="carousel-title">{service.title}</h3>
                                    <p className="carousel-text">{service.description}</p>
                                    <Button variant="primary" as={Link} to={service.link}>Ver Más</Button>
                                </Carousel.Caption>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </Col>
            </Row>
        
            {/* About Us Section */}
            <Row className="mt-4">
                <Col>
                    <Card className="text-center">
                        <Card.Body>
                            <Card.Title>Sobre Nosotros</Card.Title>
                            <Card.Text>
                                Darom SA es una empresa líder en el mercado de la construcción, ofreciendo productos y servicios de alta calidad. Con más de 20 años de experiencia, nos enorgullece ser la opción preferida para proyectos de todas las magnitudes.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* Featured Projects Section */}
            <Row className="mt-4">
                <Col>
                    <h2>Proyectos Destacados</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Carousel>
                        {['/imagen1.jpg', '/imagen2.jpg', '/imagen3.jpg'].map((src, index) => (
                            <Carousel.Item key={index}>
                                <img className="d-block w-100" src={src} alt={`Proyecto ${index + 1}`} />
                                <Carousel.Caption>
                                    <h3>Proyecto {index + 1}</h3>
                                    <p>Descripción del proyecto {index + 1}.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </Col>
            </Row>
            {/* Clients Section */}
            <Row className="mt-4">
                <Col>
                    <h2>Nuestros Clientes</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Carousel>
                        {['/cliente1-logo.jpg', '/cliente2-logo.jpg', '/cliente3-logo.jpg'].map((src, index) => (
                            <Carousel.Item key={index}>
                                <img className="d-block mx-auto" src={src} alt={`Cliente ${index + 1}`} style={{ width: '100px', height: 'auto' }} />
                                <Carousel.Caption>
                                    <h3>Nombre del cliente {index + 1}</h3>
                                    <p>Descripción del cliente {index + 1}</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </Col>
            </Row>
            {/* Quick Contact Section */}
            <Row className="mt-4">
                <Col>
                    <h2>Ventas</h2>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col className="text-center">
                    <h4>Mejoramos cualquier presupuesto</h4>
                    <p>Llama al 555-555-5555 o envía un correo electrónico a <a href="mailto:contacto@darom.com">contacto@darom.com</a></p>
                </Col>
            </Row>
            {/* Sales Team Section */}
            <Row className="mt-4">


                {[
                    {
                        name: 'Vendedor Principal 1',
                        email: 'vendedor1@darom.com',
                        phone: '555-555-5555',
                        whatsapp: '1234567890',
                    },
                    {
                        name: 'Vendedor Principal 2',
                        email: 'vendedor2@darom.com',
                        phone: '555-555-5555',
                        whatsapp: '1234567891',
                    },
                    {
                        name: 'Vendedor de Movimientos de Suelos',
                        email: 'suelos@darom.com',
                        phone: '555-555-5555',
                        whatsapp: '1234567892',
                    },
                    {
                        name: 'Vendedor de Servicios de Bombeo',
                        email: 'bombeo@darom.com',
                        phone: '555-555-5555',
                        whatsapp: '1234567893',
                    },
                ].map((vendor, index) => (
                    <Col xs={12} md={3} key={index}>
                        <Card className="text-center">
                            <Card.Body>
                                <h5>{vendor.name}</h5>
                                <p>{vendor.phone}</p>
                                <p><a href={`mailto:${vendor.email}`}>{vendor.email}</a></p>
                                <Button variant="success" href={`https://wa.me/${vendor.whatsapp}`} className="d-flex align-items-center justify-content-center">
                                    <FaWhatsapp size={20} className="me-2" /> WhatsApp
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            {/* Office Location Section */}
            <Row className="mt-4">
                <Col>
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
