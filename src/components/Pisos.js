import React, { useState } from 'react';
import { Container, Row, Col, Button, Image, Form } from 'react-bootstrap';
import './Pisos.css'; // Importa tu CSS

function Pisos() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Email:', email);
        console.log('Mensaje:', message);
        setSubmitted(true);
        setEmail('');
        setMessage('');
    };

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
                        El endurecedor ayuda a su terminación, durabilidad y resistencia. El proceso de llaneado de pisos hace que el piso no tenga porosidades, facilitando el lavado de los mismos.
                        El hormigón llaneado se puede realizar en varios colores para darle una terminación estética que usted desee.
                        El hormigón lleneado se caracteriza por su RESISTENCIA, su fácil limpieza y porque puede ser utilizado tanto en interiores como en exteriores, resiste el tránsito de autoelevadores y zorras.
                        Los pisos llaneados son ideales para industrias, galpones, estaciones de servicio, y toda superficie que requiera fácil mantenimiento, gran durabilidad y resistencia.
                        El hormigón alisado es su mejor opción.
                    </p>
                    <Image src="/portadapisollaneado.jpg" alt="Hormigón llaneado" fluid className="my-4 image-small" />
                    <p>
                        Trayectoria y Experiencia: Darom, con una sólida trayectoria como expertos en hormigón y obras, ahora aplica su conocimiento y experiencia a los pisos industriales.
                        Nuestra historia y éxito en el sector nos posicionan como líderes en el mercado, garantizando calidad y durabilidad en cada proyecto.
                    </p>
                    <Image src="/portadapisollaneado2.jpeg" alt="Proceso de llaneado" fluid className="my-4 image-small" />
                    <p>
                        Innovación y Calidad: En Darom, la innovación y la calidad son pilares fundamentales. Abordamos cada etapa del proceso,
                        desde el diseño inicial hasta la puesta en obra y el producto terminado, con una meticulosa atención al detalle.
                        Nuestro compromiso es proporcionar pisos industriales que no solo cumplan, sino que superen las expectativas de nuestros clientes.
                    </p>
                    <p>
                        Todo en Uno: Con Darom, puedes resolver todos tus requerimientos en un solo lugar. Ofrecemos un servicio integral que abarca desde los cimientos hasta el acabado de la superficie de servicio.
                        Nos ocupamos de cada aspecto del proyecto para que tú no tengas que preocuparte por nada.
                    </p>
                    <p>
                        Servicios de Pisos Llaneados: Nuestros Pisos Llaneados se destacan por su:
                        - Resistencia y Durabilidad: Perfectos para soportar el tráfico pesado y las condiciones exigentes de los entornos industriales.
                        - Acabado Perfecto: Gracias a nuestras técnicas avanzadas de llaneado, logramos superficies lisas y uniformes que facilitan el mantenimiento y mejoran la estética de tus instalaciones.
                        - Versatilidad: Ideales para una amplia gama de aplicaciones, desde almacenes hasta plantas de producción.
                    </p>
                    <p>
                        Innovación en Cada Paso: Nos mantenemos a la vanguardia de la tecnología y las prácticas de la industria. Utilizamos equipos de última generación y materiales de alta calidad para asegurar que cada piso cumpla con los más altos estándares de rendimiento.
                    </p>
                    <p>
                        Conclusión: Confía en Darom para transformar tus espacios industriales con pisos llaneados de calidad superior.
                        Nuestra dedicación a la excelencia en cada etapa del proyecto garantiza que recibirás un producto final que no solo es funcional, sino que también eleva el nivel de tu infraestructura.
                    </p>
                </Col>
            </Row>
            {/* Sección de contacto */}
            <Row className="contact-form-section mb-4">
                <Col md={6}>
                    <h2 className="contact-title">CONTACTANOS</h2>
                    <Form onSubmit={handleSubmit} className="contact-form">
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control 
                                type="email" 
                                placeholder="Ingrese su email" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="formBasicMessage">
                            <Form.Label>Mensaje</Form.Label>
                            <Form.Control 
                                as="textarea" 
                                rows={3} 
                                placeholder="Escriba su mensaje" 
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit" className="submit-button">
                            Enviar
                        </Button>
                        {submitted && <p className="mt-3 text-success">Su mensaje ha sido enviado con éxito.</p>}
                    </Form>
                </Col>
                <Col md={6} className="contact-info">
                    <h4>Información de Contacto</h4>
                    <p>Teléfono: <a href="tel:08103334567">0810-333-4567</a></p>
                    <p>Email: <a href="mailto:ventas@darom.com">ventas@darom.com</a></p>
                    <p>Oficina: C. 152 6352, B1885 Guillermo Enrique Hudson</p>
                    <p>Planta: Parque industrial tecnológico de Florencio Varela</p>
                </Col>
            </Row>

            {/* Footer Section */}
            <Row className="footer-section mt-4">
                <Col className="footer-content text-center">
                    <h5 className="footer-title">DAROM SA</h5>
                    <p>&copy; {new Date().getFullYear()} Darom SA. Todos los derechos reservados.</p>
                    <p className="footer-design">Diseñado por <strong>Dtecno</strong></p>
                </Col>
            </Row>
        </Container>
    );
}

export default Pisos;
