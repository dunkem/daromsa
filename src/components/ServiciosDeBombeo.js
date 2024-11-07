import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

function ServiciosDeBombeo() {
    return (
        <Container className="mt-4">
            <Row>
                <Col>
                    <h1>Servicios de Bombeo</h1>
                    <p>Ofrecemos servicio de bombeo para Hormigón elaborado. DAROM cuenta con el equipamiento, logística y personal capacitado para cumplir con pequeñas, medianas y grandes obras de construcción. Amplio equipamiento de camiones hormigoneros, indispensable para la elaboración del concreto.</p>
                    <p>La mezcla de cemento, áridos y agua será examinada, pesada y precintada para cumplir exactamente con las cantidades solicitadas por el cliente. Ideal para trabajar en edificios, puentes y plantas de tratamiento, entre otras. Combinado con el tipo de Hormigón correspondiente, nuestras bombas proveerán un perfecto y sistemático método para la distribución de la mezcla.</p>
                    <p>Necesario para bombear Hormigón donde no es posible descargar el material de forma directa. Ofrecemos diferentes tipos de motorización que se adaptarán a las necesidades y tiempos solicitados.</p>
                    <Image src="/serviciobombeo.jpg" alt="Servicio de Bombeo para Hormigón" fluid className="my-4" />
                </Col>
            </Row>
        </Container>
    );
}

export default ServiciosDeBombeo;
