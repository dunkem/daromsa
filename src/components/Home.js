import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Carousel, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';
import './Home.css';

function Home() {
    const [visibleProducts, setVisibleProducts] = useState(5);
    const [visibleProjects, setVisibleProjects] = useState(3);

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
        },
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
            src: '/obraecas.jpg',
            title: 'Ecas'
        },
        {
            src: '/obraecas.jpg',
            title: 'Ecas'
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

    useEffect(() => {
        const updateVisibleProducts = () => {
            if (window.innerWidth < 768) {
                setVisibleProducts(2); // Muestra 2 productos en pantallas pequeñas
                setVisibleProjects(2); // Muestra 2 proyectos en pantallas pequeñas
            } else if (window.innerWidth < 992) {
                setVisibleProducts(3); // Muestra 3 productos en pantallas medianas
                setVisibleProjects(3); // Muestra 3 proyectos en pantallas medianas
            } else {
                setVisibleProducts(5); // Muestra 5 productos en pantallas grandes
                setVisibleProjects(3); // Muestra 3 proyectos en pantallas grandes
            }
        };

        updateVisibleProducts(); // Llamada inicial
        window.addEventListener('resize', updateVisibleProducts); // Actualiza al cambiar el tamaño de la ventana

        return () => {
            window.removeEventListener('resize', updateVisibleProducts); // Limpieza del evento
        };
    }, []);

    const renderProducts = () => {
        const slides = [];
        for (let i = 0; i < featuredProducts.length; i += visibleProducts) {
            slides.push(
                <Carousel.Item key={i}>
                    <div className="d-flex justify-content-center">
                        {featuredProducts.slice(i, i + visibleProducts).map((product, index) => (
                            <Card key={index} className="product-card mx-2">
                                <Card.Img variant="top" src={product.src} alt={product.name} />
                                <Card.Body>
                                    <Card.Title>{product.name}</Card.Title>
                                    <Button variant="primary" as={Link} to={product.link} className="mt-2">Ver Artículo</Button>
                                </Card.Body>
                            </Card>
                        ))}
                    </div>
                </Carousel.Item>
            );
        }
        return slides;
    };

    const renderProjects = () => {
        const slides = [];
        for (let i = 0; i < projects.length; i += visibleProjects) {
            slides.push(
                <Carousel.Item key={i}>
                    <div className="d-flex justify-content-center">
                        {projects.slice(i, i + visibleProjects).map((project, index) => (
                            <Card key={index} className="project-card mx-2">
                                <Card.Img variant="top" src={project.src} alt={project.title} />
                                <Card.Body>
                                    <Card.Title>{project.title}</Card.Title>
                                </Card.Body>
                            </Card>
                        ))}
                    </div>
                </Carousel.Item>
            );
        }
        return slides;
    };

    return (
        <Container className="mt-4">
            {/* Carousel Section */}
            <Row className="carousel-container mb-5">
                <Col>
                    <Carousel interval={3000}>
                        {services.map((service, index) => (
                            <Carousel.Item key={index}>
                                <div className="carousel-image-container">
                                    <img className="d-block w-100 carousel-image" src={service.src} alt={`Imagen ${index + 1}`} />
                                    <div className="carousel-caption">
                                        <h3 className="carousel-title">{service.title}</h3>
                                        <p className="carousel-text d-none d-md-block">{service.description}</p> {/* Oculta en móviles */}
                                        <Button variant="primary" as={Link} to={service.link} className="modern-button">Descubre Más</Button>
                                    </div>
                                </div>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </Col>
            </Row>

            {/* Featured Products Carousel */}
            <Row className="mt-4">
                <Col>
                    <h2 className="text-center section-title">Productos Destacados</h2>
                    <Carousel controls={true} interval={null}>
                        {renderProducts()}
                    </Carousel>
                </Col>
            </Row>

            {/* Projects Carousel */}
            <Row className="mt-4">
                <Col>
                    <h2 className="text-center section-title">Nuestras Obras</h2>
                    <Carousel controls={true} interval={null}>
                        {renderProjects()}
                    </Carousel>
                </Col>
            </Row>

            {/* Quick Contact */}
            <Row className="mt-4 contact-section">
                <Col className="text-center">
                    <h4 className="contact-title">Contáctanos para un Presupuesto Personalizado</h4>
                    <p>Selecciona un vendedor para recibir asistencia personalizada:</p>
                    <Row>
                        <Col md={6} className="d-flex justify-content-center">
                            <Card className="mb-4 shadow-sm modern-card contact-card">
                                <Card.Body>
                                    <Card.Text>Especialista en Hormigón Elaborado.</Card.Text>
                                    <Button 
                                        variant="success" 
                                        className="whatsapp-button" 
                                        href="https://wa.me/5555555555"
                                    >
                                        <FaWhatsapp className="me-2" /> Contactar por WhatsApp
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6} className="d-flex justify-content-center">
                            <Card className="mb-4 shadow-sm modern-card contact-card">
                                <Card.Body>
                                    <Card.Text>Especialista en Materiales de Construcción.</Card.Text>
                                    <Button 
                                        variant="success" 
                                        className="whatsapp-button" 
                                        href="https://wa.me/5555555556"
                                    >
                                        <FaWhatsapp className="me-2" /> Contactar por WhatsApp
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <h5 className="mt-4">O envíanos un mensaje:</h5>
                    <Form>
                        <Form.Group controlId="formName">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type="text" placeholder="Ingresa tu nombre" />
                        </Form.Group>
                        <Form.Group controlId="formEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Ingresa tu email" />
                        </Form.Group>
                        <Form.Group controlId="formMessage">
                            <Form.Label>Mensaje</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Escribe tu mensaje aquí" />
                        </Form.Group>
                        <Button variant="primary" type="submit" className="mt-2">Enviar Mensaje</Button>
                    </Form>
                </Col>
            </Row>

            {/* Office Location Section */}
            <Row className="office-location mt-5">
                <Col md={6}>
                    <h4>Oficinas Hudson</h4>
                    <p>152 N° 6352 - 2do.Piso-Of.212</p>
                    <iframe
                        title="Mapa de oficinas en Hudson"
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13104.631459387174!2d-58.1581789!3d-34.80197!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a3278932239ca3%3A0xed9063c343d970ce!2sDowntown%20Greenville%20Hudson!5e0!3m2!1ses!2sar!4v1731112187148!5m2!1ses!2sar"
                        width="100%"
                        height="300" // Ajusta la altura
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
                        height="300" // Ajusta la altura
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </Col>
            </Row>

            {/* Footer Section */}
            <Row className="footer-section mt-4">
                <Col>
                    <div className="footer-content text-center">
                        <h5 className="footer-title">Dtecno</h5>
                        <p>&copy; {new Date().getFullYear()} Darom SA. Todos los derechos reservados.</p>
                        <div className="footer-links">
                            <Link to="/privacy">Política de Privacidad</Link>
                            <span>|</span>
                            <Link to="/terms">Términos de Servicio</Link>
                            <span>|</span>
                            <Link to="/contact">Contáctanos</Link>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Home;