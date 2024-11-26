
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import { FaFileUpload } from 'react-icons/fa';
import './Pisos.css';

function Pisos() {


    return (
        <Container className="mt-4">
            <Row>
                <Col>
                    <h1>PISOS LLANEADOS DE HORMIGON ELABORADO</h1>
                    <p>
                        El hormigón llaneado, también conocido como <strong>pisos llaneados</strong>, consiste en una losa de un mínimo de 5 cm,
                        el espesor depende de las exigencias a las que este será sometido. Este puede ser aplicado en suelos
                        compactados, estabilizados granulares o contrapisos.
                    </p>
                    <Image src="/portadapisollaneado.jpg" alt="Hormigón llaneado" fluid className="my-4 image-small float-left" />
                    <p>
                        Una vez que el hormigón fue distribuido se le agregan <strong>endurecedores</strong> o <strong>pigmentos</strong> y con ayuda de una llana mecánica se realiza la terminación.
                        El endurecedor ayuda a su terminación, <strong>durabilidad</strong> y <strong>resistencia</strong>. El proceso de llaneado de pisos hace que el piso no tenga porosidades, facilitando el lavado de los mismos.
                        El hormigón llaneado se puede realizar en varios colores para darle una terminación estética que usted desee.
                        Se caracteriza por su <strong>resistencia</strong>, su fácil limpieza y porque puede ser utilizado tanto en interiores como en exteriores, resiste el tránsito de autoelevadores y zorras.
                    </p>
                    <Image src="/portadapisollaneado2.jpeg" alt="Proceso de llaneado" fluid className="my-4 image-small float-right" />
                    <p>
                        Trayectoria y Experiencia: <strong>Darom</strong>, con una sólida trayectoria como expertos en hormigón y obras, ahora aplica su conocimiento y experiencia a los pisos industriales.
                        Nuestra historia y éxito en el sector nos posicionan como líderes en el mercado, garantizando calidad y durabilidad en cada proyecto.
                    </p>
                    <p>
                        Innovación y Calidad: En <strong>Darom</strong>, la innovación y la calidad son pilares fundamentales. Abordamos cada etapa del proceso,
                        desde el diseño inicial hasta la puesta en obra y el producto terminado, con una meticulosa atención al detalle.
                        Nuestro compromiso es proporcionar <strong>pisos industriales</strong> que no solo cumplan, sino que superen las expectativas de nuestros clientes.
                    </p>
                    <p>
                        Todo en Uno: Con <strong>Darom</strong>, puedes resolver todos tus requerimientos en un solo lugar. Ofrecemos un servicio integral que abarca desde los cimientos hasta el acabado de la superficie de servicio.
                        Nos ocupamos de cada aspecto del proyecto para que tú no tengas que preocuparte por nada.
                    </p>
                    <p>
                        Servicios de Pisos Llaneados: Nuestros pisos llaneados se destacan por su:
                        <ul>
                            <li><strong>Resistencia y Durabilidad</strong>: Perfectos para soportar el tráfico pesado y las condiciones exigentes de los entornos industriales.</li>
                            <li><strong>Acabado Perfecto</strong>: Gracias a nuestras técnicas avanzadas de llaneado, logramos superficies lisas y uniformes que facilitan el mantenimiento y mejoran la estética de tus instalaciones.</li>
                            <li><strong>Versatilidad</strong>: Ideales para una amplia gama de aplicaciones, desde almacenes hasta plantas de producción.</li>
                        </ul>
                    </p>
                    <p>
                        Innovación en Cada Paso: Nos mantenemos a la vanguardia de la tecnología y las prácticas de la industria. Utilizamos equipos de última generación y materiales de alta calidad para asegurar que cada piso cumpla con los más altos estándares de rendimiento.
                    </p>
                    <p>
                        Conclusión: Confía en <strong>Darom</strong> para transformar tus espacios industriales con pisos llaneados de calidad superior.
                        Nuestra dedicación a la excelencia en cada etapa del proyecto garantiza que recibirás un producto final que no solo es funcional, sino que también eleva el nivel de tu infraestructura.
                    </p>
                </Col>
            </Row>

            {/* Botón de Adjunta tu lista */}
            <Row className="mb-4">
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
            </Row>

           

        </Container>
    );
}

export default Pisos;