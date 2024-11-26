
import { Container, Row, Col, Image, Carousel } from 'react-bootstrap';
import './About.css';

function About() {
    

    const obras = [
        { src: "/obraconstrumex.jpg", alt: "Obra Construcción Mex", title: "Obra Construcción Mex" },
        { src: "/obracorredoresverdes.jpg", alt: "Obra Corredores Verdes", title: "Obra Corredores Verdes" },
        { src: "/obraecas.jpg", alt: "Obra Ecas", title: "Obra Ecas" },
        { src: "/obralibertatyfrench.jpg", alt: "Obra Libertad y French", title: "Obra Libertad y French" },
        { src: "/obramagallanes.jpg", alt: "Obra Magallanes", title: "Obra Magallanes" },
        { src: "/obrapavimentacionmitre.jpg", alt: "Obra Pavimentación Mitre", title: "Obra Pavimentación Mitre" },
        { src: "/obrasvarias (3).jpg", alt: "Obra Varias 3", title: "Obra Varias 3" },
        { src: "/obrasvarias (4).jpg", alt: "Obra Varias 4", title: "Obra Varias 4" },
        { src: "/obrasvarias (5).jpg", alt: "Obra Varias 5", title: "Obra Varias 5" },
        { src: "/obrasvarias (7).jpg", alt: "Obra Varias 7", title: "Obra Varias 7" },
        { src: "/obraxapor.jpg", alt: "Obra Xapor", title: "Obra Xapor" }
    ];

    // Agrupamos las obras en grupos de 4
    const groupedObras = [];
    for (let i = 0; i < obras.length; i += 4) {
        groupedObras.push(obras.slice(i, i + 4));
    }

    return (
        <Container className="about-container mt-4">
            <Row>
                <Col>
                    <h1 className="about-title">LA EMPRESA</h1>
                    <p className="about-paragraph">
                        Desde el año 1978, los actuales socios de Darom SA incursionan en la actividad de la construcción, habiendo comenzado como proveedor de Hormigón Elaborado para Zona Sur. Actualmente, la empresa se ha expandido en toda la Provincia de Buenos Aires, comercializando sus productos y servicios en diversas localidades.
                    </p>
                    <h2 className="about-section-title">Historia</h2>
                    <p className="about-paragraph">
                        DAROM ha iniciado sus actividades como un emprendimiento familiar, y al día de hoy ha podido expandir su negocio trabajando en distintos proyectos (obras públicas, civiles y particulares). La empresa cuenta con una planta de elaboración de Hormigón ubicada en la localidad de Bosques y, así mismo, centraliza sus operaciones en las oficinas administrativas en el partido de Hudson y La Plata.
                    </p>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col>
                    <h2 className="about-section-title">Misión</h2>
                    <p className="about-paragraph">
                        Elaboramos Hormigón y comercializamos materiales para distintos tipos de operaciones. Nos diferenciamos en el mercado por el servicio ofrecido a nuestros clientes, brindando un soporte pre y post compra que asegurará la correcta satisfacción de sus necesidades.
                    </p>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col>
                    <h2 className="about-section-title">Visión</h2>
                    <p className="about-paragraph">
                        Comercializar nuestros materiales y servicios para toda la República Argentina con el objetivo de ser los líderes del mercado a nivel nacional.
                    </p>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col>
                    <h2 className="about-section-title">NUESTRAS OBRAS</h2>
                    <Carousel className="about-carousel" interval={3000} controls indicators>
                        {groupedObras.map((group, index) => (
                            <Carousel.Item key={index}>
                                <Row className="justify-content-center">
                                    {group.map((obra, idx) => (
                                        <Col md={3} key={idx} className="mb-3">
                                            <div className="carousel-image-container">
                                                <Image src={obra.src} alt={obra.alt} fluid className="about-image" />
                                                <Carousel.Caption className="carousel-caption">
                                                    <h5 className="carousel-caption-title">{obra.title}</h5>
                                                </Carousel.Caption>
                                            </div>
                                        </Col>
                                    ))}
                                </Row>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </Col>
            </Row>
            

        </Container>
    );
}

export default About;