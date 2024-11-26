import { Container, Row, Col, Card, Carousel, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.css';
import { FaCheckCircle, FaTools, FaBuilding, FaHammer } from 'react-icons/fa'; // Importar íconos

function Home({ setLoading }) {
  // Servicios ofrecidos
  const services = [
    {
      src: '/PORTADAHORMIGONBOMBAOFICIAL.JPG',
      title: 'HORMIGÓN ELABORADO Y SERVICIOS DE BOMBEO',
      description: 'Proveemos hormigón de alta calidad, asegurando resistencia y durabilidad en cada aplicación.',
      backup: { text: 'RESPALDADOS POR', logo: '/logolomanegra.png' },
      link: '/services/hormigon'
    },
    {
      src: '/portadacorralon2 (2).jpg',
      title: 'MATERIALES DE CONSTRUCCIÓN',
      description: 'Amplia gama de materiales de construcción, desde ladrillos hasta acabados y accesorios.',
      link: '/services/materiales'
    },
    {
      src: '/portadamovofi.jpg',
      title: 'ESTUDIO Y MOVIMIENTO DE SUELO',
      description: 'Realizamos estudios de suelos precisos y movimientos de tierra con eficiencia.',
      link: '/services/suelos'
    },
    {
      src: '/portadapisollaneado.jpg',
      title: 'PISOS LLANEADOS Y ACABADOS SUPERFICIALES',
      description: 'Transformamos superficies con pisos llanos y acabados de alta calidad.',
      backup: { text: 'RESPALDADOS POR', logo: '/LOGOMAPEI.png' },
      link: '/services/pisos'
    }
  ];

  // Productos destacados
  const featuredProducts = [
    { src: '/mathidrofugosika20l.jpg', name: 'Hidrofugo Sika 20 tls', link: '/products/hidrofugo-sika-200' },
    { src: '/matlad12.jpg', name: 'Ladrillo 12x12x18', link: '/products/ladrillo-comun' },
    { src: '/matbolsonarena.jpg', name: 'Arena en Bolsón', link: '/products/arena-gruesa' },
    { src: '/matcementoloma50kg.jpg', name: 'Cemento Loma Negra 50kg', link: '/products/cemento-portland' },
    { src: '/matcalcaciquemax30kg.jpg', name: 'Cal Hidratada x 30kg', link: '/products/cal-hidratada' },
    { src: '/matvarillashierro.png', name: 'Hierro de Construcción', link: '/products/hierro-construccion' },
    { src: '/matpiedra620.jpg', name: 'Piedra en Bolson', link: '/products/piedra-bolson' }
  ];

  // Proveedores
  const suppliers = [
    { src: '/logolomanegra.png', alt: 'Loma Negra' },
    { src: '/LOGOMAPEI.png', alt: 'Mapei' },
    { src: '/LOGOSIKA.png', alt: 'Sika' },
    { src: '/LOGOACINDAR.png', alt: 'Red Acindar' },
    { src: '/LOGOSILOS.png', alt: 'Silos Reneros' },
    { src: '/LOGOBLINKI.png', alt: 'Blinki' },
    { src: '/LOGOCANTERAS.jpg', alt: 'Canteras Argentinas' }
  ];

  // Renderiza los elementos del carrusel
  const renderCarouselItems = (items, isSupplier = false) => {
    const itemsPerSlide = 4;
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
      {/* Sección de Portada */}
      <Row className="hero-section">
        <Col className="text-center">
          <div className="hero-content animated fadeIn">
            <h2 className="hero-title">COMPROMETIDOS CON LA CALIDAD Y LA CONFIANZA</h2>
            <h3 className="hero-subtitle">TRANSFORMA TUS PROYECTOS CON NUESTRA EXPERIENCIA E INNOVACIÓN EN CADA ETAPA DE CONSTRUCCIÓN.</h3>
          </div>
        </Col>
      </Row>

      {/* Compromiso con el Cliente */}
      <Row className="text-center mb-4" style={{ backgroundColor: '#e9ecef', padding: '40px 0' }}>
        <Col>
          <h2 className="section-title">NUESTRO COMPROMISO CON EL CLIENTE</h2>
          <div className="line-divider"></div>
          <p className="commitment-description">
            <FaCheckCircle /> Atención personalizada en todo momento.<br />
            <FaTools /> Proveemos hormigón de los más altos estándares.<br />
            <FaBuilding /> Servicios de bombas y laboratorio.<br />
            <FaHammer /> Rotura de probetas, y más.
          </p>
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
                <Card.Img variant="top" src={service.src} className="service-img" style={{ height: '300px' }} /> {/* Aumentar altura de imagen */}
                {service.backup && (
                  <div className="backup-info">
                    <p>{service.backup.text}</p>
                    <img src={service.backup.logo} alt="Logo" className="backup-logo" />
                  </div>
                )}
              </div>
              <Card.Body className="service-body">
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

      {/* Sección Sobre la Empresa - Ahora debajo de los servicios */}
      <Row className="text-center mb-4">
        <Col>
          <h2 className="section-title">LA EMPRESA</h2>
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

      {/* Sección logos proveedores */}
      <Row className="text-center mb-4">
        <Col>
          <h2 className="section-title">NUESTROS PROVEEDORES</h2>
          <div className="line-divider"></div>
        </Col>
      </Row>
      <Carousel className="mb-4">
        {renderCarouselItems(suppliers, true)}
      </Carousel>

      {/* Sección de Entregas */}
      <Row className="text-center mb-4" style={{ backgroundColor: '#e9ecef', padding: '20px 0' }}>
        <Col>
          <h2 className="section-title">ÁREA DE ENTREGAS</h2>
          <div className="line-divider"></div>
          <p>Realizamos entregas en toda la Zona Sur y Puerto Madero.</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;