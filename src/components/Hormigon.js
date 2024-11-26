
import { Container, Row, Col, Card, Button, Image, Carousel } from 'react-bootstrap';
import { FaFileUpload } from 'react-icons/fa';
import './Hormigon.css';

function Hormigon() {

     // Beneficios ofrecidos
     const benefits = [
        { src: '/elegirnoslaboratorio.jpg', title: 'Asesoramiento Técnico', description: 'Recibe orientación experta para elegir los mejores materiales y técnicas.' },
        { src: '/elegirnosticket.jpg', title: 'Ticket de Pesada', description: 'Garantizamos transparencia y precisión en cada entrega con nuestro sistema de pesaje.' },
        { src: '/elegirnoscargaprecintada.jpg', title: 'Carga Precintada', description: 'Todos nuestros productos son precintados para asegurar su integridad.' },
        { src: '/elegirnosseguimiento.jpg', title: 'Rastreo Satelital', description: 'Monitorea el estado y la ubicación de tus pedidos en tiempo real.' },
    ];

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
                            <p>{benefit.description}</p> {/* Descripción añadida */}
                        </div>
                    </Col>
                ))}
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

            
        </Container>
    );
}

export default Hormigon;