import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

function About() {
    return (
        <Container className="mt-4">
            <Row>
                <Col>
                    <h1>Sobre Nosotros</h1>
                    <p>
                        Desde el año 1978, los actuales socios de Darom SA incursionan en la actividad de la construcción, habiendo comenzado como proveedor de Hormigón Elaborado para Zona Sur. Actualmente, la empresa se ha expandido en toda la Provincia de Buenos Aires, comercializando sus productos y servicios en diversas localidades.
                    </p>
                    <h2>Historia</h2>
                    <p>
                        DAROM ha iniciado sus actividades como un emprendimiento familiar, y al día de hoy ha podido expandir su negocio trabajando en distintos proyectos (obras públicas, civiles y particulares). La empresa cuenta con una planta de elaboración de Hormigón ubicada en la localidad de Bosques y, así mismo, centraliza sus operaciones en las oficinas administrativas en el partido de Hudson y La Plata.
                    </p>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col>
                    <h2>Misión</h2>
                    <p>
                        Elaboramos Hormigón y comercializamos materiales para distintos tipos de operaciones. Nos diferenciamos en el mercado por el servicio ofrecido a nuestros clientes, brindando un soporte pre y post compra que asegurará la correcta satisfacción de sus necesidades. Esto es logrado a través de la capacitación constante de nuestros empleados en todos los procesos que intervienen. Contamos con un equipamiento moderno y de alta tecnología que permite la realización de pequeñas, medianas y grandes obras.
                    </p>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col>
                    <h2>Visión</h2>
                    <p>
                        Comercializar nuestros materiales y servicios para toda la República Argentina con el objetivo de ser los líderes del mercado a nivel nacional.
                    </p>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col md={6}>
                    <Image src="/path_to_about_image1.jpg" alt="Equipo de trabajo" fluid />
                </Col>
                <Col md={6}>
                    <Image src="/path_to_about_image2.jpg" alt="Proyectos realizados" fluid />
                </Col>
            </Row>
        </Container>
    );
}

export default About;
