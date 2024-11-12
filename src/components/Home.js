import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';
import './Home.css'; // Importa tu CSS

function Home() {
    const [visibleProducts, setVisibleProducts] = useState(5);
    const [visibleProjects, setVisibleProjects] = useState(3);

    const services = [
        {
            src: '/PORTADAHORMIGONBOMBAOFICIAL.JPG',
            title: 'Hormigón Elaborado',
            description: 'Proveemos hormigón de la mejor calidad para tus proyectos.',
            link: '/services/hormigon',
        },
        {
            src: '/portadacorralon2 (2).jpg',
            title: 'Materiales de Corralón',
            description: 'Amplia variedad de materiales para construcción y remodelación.',
            link: '/services/materiales',
        },
        {
            src: '/portadamovofi.jpg',
            title: 'Estudio y Movimientos de Suelos',
            description: 'Expertos en estudios de suelos para garantizar la solidez de tus proyectos.',
            link: '/services/suelos',
        },
        {
            src: '/portadapisollaneado.jpg',
            title: 'Pisos llaneados',
            description: 'Expertos en estudios de suelos para garantizar la solidez de tus proyectos.',
            link: '/services/pisos',
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

    const projects = [
        {
            src: '/obraconstrumex.jpg',
            title: 'Pavimentación Construmex',
        },
        {
            src: '/obraecas.jpg',
            title: 'Ecas',
        },
        {
            src: '/obrautedyc.jpg',
            title: 'Utedyc',
        },
        {
            src: '/obraxapor.jpg',
            title: 'Xapor',
        },
        {
            src: '/obrapavimentacionmitre.jpg',
            title: 'Pavimentacion Av. Mitre',
        },
        {
            src: '/obracorredoresverdes.jpg',
            title: 'Corredores Verdes',
        },
        {
            src: '/obralibertatyfrench.jpg',
            title: 'Libertad y French',
        },
        {
            src: '/obrasvarias (3).jpg',
            title: 'Pavimentación',
        },
        {
            src: '/obrasvarias (4).jpg',
            title: 'Otras Obras',
        },
        {
            src: '/obrasvarias (5).jpg',
            title: 'Otras Obras',
        },
        {
            src: '/obrasvarias (7).jpg',
            title: 'Otras Obras',
        },

    ];

    useEffect(() => {
        const updateVisibleProducts = () => {
            if (window.innerWidth < 768) {
                setVisibleProducts(2);
                setVisibleProjects(2);
            } else if (window.innerWidth < 992) {
                setVisibleProducts(3);
                setVisibleProjects(3);
            } else {
                setVisibleProducts(5);
                setVisibleProjects(3);
            }
        };

        updateVisibleProducts();
        window.addEventListener('resize', updateVisibleProducts);

        return () => {
            window.removeEventListener('resize', updateVisibleProducts);
        };
    }, []);

    const renderProducts = () => {
        const slides = [];
        for (let i = 0; i < featuredProducts.length; i += visibleProducts) {
            slides.push(
                <Carousel.Item key={i}>
                    <div className="d-flex justify-content-center">
                        {featuredProducts.slice(i, i + visibleProducts).map((product) => (
                            <Card key={product.link} className="product-card mx-2">
                                <Card.Img variant="top" src={product.src} alt={product.name} />
                                <Card.Body>
                                    <Card.Title>{product.name}</Card.Title>
                                    <Button variant="primary" as={Link} to={product.link} className="mt-2">
                                        Ver Artículo
                                    </Button>
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
        const slides = []; for (let i = 0; i < projects.length; i += visibleProjects) { 
            slides.push( 
            <Carousel.Item key={i}> 
            <Row className="justify-content-center"> 
                {projects.slice(i, i + visibleProjects).map((project, index) => ( 
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
                            </Carousel.Item> 
                            ); } return slides; 
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

    const renderSuppliers = () => {
        const slides = [];
        for (let i = 0; i < suppliers.length; i += 3) {
            slides.push(
                <Carousel.Item key={i}>
                    <div className="d-flex justify-content-center flex-wrap">
                        {suppliers.slice(i, i + 3).map((supplier) => (
                            <img
                                key={supplier.alt}
                                src={supplier.src}
                                alt={supplier.alt}
                                className="supplier-logo mx-2"
                            />
                        ))}
                    </div>
                </Carousel.Item>
            );
        }
        return slides;
    };

    return (
        <Container className="mt-4 contact-container">
            {/* Carousel Section */}
            <Row className="carousel-container mb-5">
                <Col>
                    <Carousel interval={2500}>
                        {services.map((service, index) => (
                            <Carousel.Item key={index}>
                                <div className="carousel-image-container">
                                    <img
                                        className="d-block w-100 carousel-image"
                                        src={service.src}
                                        alt={`Imagen ${index + 1}`}
                                    />
                                    <div className="carousel-caption">
                                        <h3 className="carousel-title">{service.title}</h3>
                                        <p className="carousel-text d-none d-md-block">{service.description}</p>
                                        <Button variant="primary" as={Link} to={service.link} className="modern-button">
                                            Descubre Más
                                        </Button>
                                    </div>
                                </div>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </Col>
            </Row>

           {/* Benefits Section */}
<Row className="mt-4">
    <Col className="text-center">
        <h2 className="section-title">Nuestros Beneficios</h2>
        <Carousel interval={3000}>
            {[
                { src: '/BENEFICIOATENCION.png', title: 'Atención Personalizada', description: 'Ofrecemos atención personalizada para cada proyecto.' },
                { src: '/BENEFICIOBOMBA.png', title: 'Servicio de Bombeo', description: 'Servicios de bombeo eficientes y confiables.' },
                { src: '/elegirnoslaboratorio.jpg', title: 'Asesoramiento Técnico y Laboratorio', description: 'Asesoramiento técnico y laboratorio móvil para tus obras.' },
                { src: '/elegirnosticket.jpg', title: 'Ticket de Pesada', description: 'Provisión de tickets de pesada para mayor control.' },
                { src: '/elegirnoscargaprecintada.jpg', title: 'Carga Precintrada', description: 'Ofrecemos servicio de carga precintrada.' },
                { src: '/elegirnosseguimiento.jpg', title: 'Rastreo Satelital', description: 'Rastreo satelital de nuestros vehículos y maquinaria.' }
            ].reduce((chunks, benefit, index) => {
                const chunkIndex = Math.floor(index / 3);
                if (!chunks[chunkIndex]) {
                    chunks[chunkIndex] = []; // start a new chunk
                }
                chunks[chunkIndex].push(benefit);
                return chunks;
            }, []).map((chunk, index) => (
                <Carousel.Item key={index}>
                    <Row className="justify-content-center">
                        {chunk.map((benefit, idx) => (
                            <Col md={4} key={idx}>
                                <Card className="benefit-card text-center">
                                    <Card.Img variant="top" src={benefit.src} alt={benefit.title} className="benefit-logo mx-auto" />
                                    <Card.Body>
                                        <Card.Title>{benefit.title}</Card.Title>
                                        <Card.Text>{benefit.description}</Card.Text>
                                        <Button variant="primary" as={Link} to="/benefits" className="modern-button">Más Información</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
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

            {/* Company Description */}
            <Row className="mt-4">
                <Col>
                    <h2 className="text-center section-title">Sobre Nosotros</h2>
                    <p className="text-center">Elaboramos Hormigón y comercializamos materiales para distintos tipos de operaciones. Nos diferenciamos en el mercado por el servicio ofrecido a nuestros clientes, brindando un soporte pre y post compra que asegurará la correcta satisfacción de sus necesidades. Esto es logrado a través de la capacitación constante de nuestros empleados en todos los procesos que intervienen. Contamos con un equipamiento moderno y de alta tecnología que permite la realización de pequeñas, medianas y grandes obras.</p>
                </Col>
            </Row>

            {/* Supplier Logos Carousel */}
            <Row className="mt-4">
                <Col>
                    <h2 className="text-center section-title">Nuestros Proveedores</h2>
                    <Carousel controls={true} interval={2500} fade>
                        {renderSuppliers()}
                    </Carousel>
                </Col>
            </Row>

            {/* Projects Carousel */}
            <Row className="mt-4">
                <Col>
                    <h2 className="text-center section-title">Nuestras Obras</h2>
                    <Carousel controls={true} interval={2500}>
                        {renderProjects()}
                    </Carousel>
                </Col>
            </Row>

            {/* Quick Contact */}
            <Row className="mt-4 contact-section">
                <Col className="text-center">
                    <h4 className="contact-title">Contáctanos para un Presupuesto Personalizado</h4>
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
                </Col>
            </Row>

            {/* Office Location Section */}
            <Row className="office-location mt-5">
                <Col md={6}>
                    <h4>Oficinas Hudson</h4>
                    <p>152 N° 6352 - 2do.Piso-Of.212</p>
                    <iframe
                        title="Mapa de oficinas en Hudson"
                        src="https://www.google.com/maps/embed?pb=..."
                        width="100%"
                        height="300"
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
                        src="https://www.google.com/maps/embed?pb=..."
                        width="100%"
                        height="300"
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