import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import { FaFileUpload } from 'react-icons/fa';
import './Pisos.css';

function Pisos() {
    return (
        <Container className="mt-4">
            <Row>
                <Col>
                    <h1>PISOS INDUSTRIALES DE HORMIGÓN ELABORADO</h1>
                    
            {/* Información adicional */}
            <Row className="mb-4 text-center">
                <Col>
                <Button 
                        style={{ 
                            backgroundColor: '#ff4d4d', 
                            color: 'white', 
                            border: 'none', 
                            borderRadius: '5px', 
                            padding: '10px 15px', 
                            marginBottom: '20px' 
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
                    <p>
                        El <strong>hormigón llaneado</strong>, también conocido como <strong>pisos llaneados</strong>, consiste en una losa de un mínimo de 5 cm. 
                        El espesor depende de las exigencias a las que este será sometido y puede ser aplicado en suelos compactados, estabilizados granulares o contrapisos.
                    </p>
                    <Image src="/portadapisosindustriales.png" alt="Hormigón llaneado" fluid className="my-4 image-small float-right" />
                    <p>
                        Una vez distribuido, se añaden <strong>endurecedores</strong> o <strong>pigmentos</strong>, y con ayuda de una llana mecánica se realiza la terminación. 
                        El endurecedor contribuye a la <strong>durabilidad</strong> y <strong>resistencia</strong> del piso, evitando porosidades y facilitando su limpieza. 
                        Además, el hormigón llaneado se puede realizar en varios colores, logrando una terminación estética a tu gusto.
                    </p>
                    <Image src="/portadapisollaneado2.jpeg" alt="Proceso de llaneado" fluid className="my-4 image-small float-left" />
                    <p>
                        Trayectoria y Experiencia: <strong>Darom</strong> aplica su sólida trayectoria en hormigón y obras a los pisos industriales, 
                        posicionándose como líderes en el mercado y garantizando calidad y durabilidad en cada proyecto.
                    </p>
                    <p>
                        Innovación y Calidad: En <strong>Darom</strong>, la <strong>innovación</strong> y la <strong>calidad</strong> son fundamentales. 
                        Abordamos cada etapa del proceso con meticulosa atención al detalle, desde el diseño hasta la puesta en obra.
                        Nuestro compromiso es proporcionar <strong>pisos industriales</strong> que superen las expectativas de nuestros clientes.
                    </p>
                    <p>
                        Todo en Uno: Con <strong>Darom</strong>, puedes resolver todos tus requerimientos en un solo lugar. 
                        Ofrecemos un servicio integral que abarca desde los cimientos hasta el acabado de la superficie.
                    </p>
                    <p>
                        Servicios de Pisos Llaneados: Nuestros pisos llaneados se destacan por su:
                        <ul>
                            <li><strong>Resistencia y Durabilidad</strong>: Perfectos para soportar el tráfico pesado y condiciones exigentes.</li>
                            <li><strong>Acabado Perfecto</strong>: Superficies lisas y uniformes que facilitan el mantenimiento.</li>
                            <li><strong>Versatilidad</strong>: Ideales para aplicaciones en almacenes y plantas de producción.</li>
                        </ul>
                    </p>
                    <p>
                        Innovación en Cada Paso: Nos mantenemos a la vanguardia de la tecnología, utilizando equipos de última generación y materiales de alta calidad para asegurar que cada piso cumpla con los más altos estándares.
                    </p>
                    <p>
                        Conclusión: Confía en <strong>Darom</strong> para transformar tus espacios industriales con pisos llaneados de calidad superior. 
                        Nuestra dedicación a la excelencia en cada etapa del proyecto garantiza un producto final funcional y estéticamente superior.
                    </p>
                </Col>
            </Row>

        </Container>
    );
}

export default Pisos;