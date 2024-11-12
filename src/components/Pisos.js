import React from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import './Pisos.css'; // Importa tu CSS

function Pisos() {
    return (
        <Container className="mt-4">
            <Row>
                <Col>
                    <h1>Pisos de Hormigón Llaneado</h1>
                    <p>
                        El hormigón llaneado, también conocido como pisos llaneados, consiste en una losa de un mínimo de 5 cm,
                        el espesor depende de las exigencias a las que este será sometido. Este puede ser aplicado en suelos
                        compactados, estabilizados granulares o contrapisos.
                    </p>
                    <p>
Una vez que el hormigón fue distribuido se le agregan endurecedores o pigmentos y con ayuda de una llana mecánica se realiza la terminación.

El endurecedor ayuda a su terminación, durabilidad y resistencia. El proceso de llaneado de pisos hace que el piso no tenga porosidades, facilitando el lavado de los mismos

 El hormigón llaneado se puede realizar en varios colores para darle una terminación estética que usted desee.

 El hormigón lleneado se caracteriza por su RESISTENCIA,  su fácil limpieza y porque puede ser utilizado tanto en interiores como en exteriores, resiste el tránsito de autoelevadores y zorras.

Los pisos llaneados son ideales para industrias, galpones, estaciones de servicio, y toda superficie que requiera fácil mantenimiento, gran durabilidad y resistencia.
El hormigón alisado es su mejor opción.
                    </p>
                    <Image src="/path_to_image1.jpg" alt="Hormigón llaneado" fluid className="my-4" />
                    <Image src="/path_to_image2.jpg" alt="Proceso de llaneado" fluid className="my-4" />
                </Col>
            </Row>
            <Row className="mt-4">
                <Col>
                    <h2>Contacta con Nosotros</h2>
                    <p>Para más información, no dudes en contactarnos. Estamos aquí para ayudarte.</p>
                    <Button variant="primary" href="mailto:contacto@darom.com" className="me-2">
                        Enviar Correo
                    </Button>
                    <Button variant="success" href="https://wa.me/1234567890">
                        WhatsApp
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}

export default Pisos;