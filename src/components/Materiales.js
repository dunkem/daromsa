import React, { useContext, useState } from 'react';
import { Container, Row, Col, Button, Card, ButtonGroup, Form } from 'react-bootstrap';
import { CartContext } from '../contexts/CartContext';
import { Link } from 'react-router-dom';
import { FaFileUpload } from 'react-icons/fa'; // Asegúrate de instalar react-icons
import './Materiales.css';

function Materiales() {
    const { addToCart } = useContext(CartContext);
    const [selectedSubrubro, setSelectedSubrubro] = useState('hidrofugos');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const materiales = {
        hidrofugos: [
            { id: 1, name: "Hidrofugo Sika 1 Tambor x 200 Kg", img: "/mathidrofugosika200lts.jpg" },
            { id: 2, name: "Hidrofugo Sika 1 Bidón x 20 Kg", img: "/mathidrofugosikabidon20kg.jpg" },
            { id: 3, name: "Hidrofugo Sika 1 Bidón x 10 Kg", img: "/matsikahidrofugo.jpg" },
            { id: 4, name: "Hidrófugo Sika 1 x 4 Lts.", img: "/matsikahidrofugo.jpg" },
            { id: 5, name: "Hidrófugo Darapel 19 Grace", img: "/matsikahidrofugo.jpg" }
          ],
          ladrillos: [
            { id: 11, name: "Ladrillo Comun", img: "/matladcomun.png" },
            { id: 12, name: "LADRILLO HUECO 8x18x33 CTIBOR [216 X PALLET]", img: "/matladhueco8x18x33-1.jpg" },
            { id: 13, name: "LADRILLO HUECO 12x18x33 [9A] FANELLI [144 X PALLET]", img: "/matladhueco12.jpg" },
            { id: 14, name: "LADRILLO HUECO 18x18x33 FANELLI [90 X PALLET]", img: "/matladhueco18.jpg" },
            { id: 15, name: "Ladrillo PORTANTE 18x19x33 CTIBOR [90 X PALLET]", img: "/matladportante12.jpg" },
            { id: 16, name: "Ladrillo PORTANTE 12x19x33 CTIBOR [120 X PALLET]", img: "/matladportante12.jpg" },
            { id: 17, name: "Ladrillo retak® 60 15 [64 un]", img: "/matladretak.jpg" },
            { id: 18, name: "Ladrillo PORTANTE 12x25x33 FANELLI", img: "/matladportante12.jpg" },
            { id: 19, name: "Ladrillo Doble Pared 24x18x33 FANELLI [72 X PALLET]", img: "matladdoblemuro20x18x25.jpg" },
            { id: 20, name: "Ladrillo KLIMABLOCK 27x19x20 FANELLI", img: "/matladbloque.jpeg" },
            { id: 21, name: "Ladrillo Doble Pared 20x18x25 [120 X PALLET]", img: "/matladdoblemuro20x18x25.jpg" },
            { id: 22, name: "Ladrillo Vista Mar Del Plata", img: "matladcomun.png" },
            { id: 23, name: "Ladrillo Doble Pared 27x18x33 FANELLI [54 X PALLET]", img: "/matladdoblemuro27x18x33.jpg" },
            { id: 24, name: "Ladrillo ECONOBLOCK-27x19x20 Ctibor", img: "/matladbloque.jpeg" },
            { id: 25, name: "Ladrillo ECONOBLOCK-20x19x27 CTIBOR [80 X PALLET]", img: "/matladbloque.jpeg" },
            { id: 26, name: "LADRILLO HUECO 18X18X33 MOLDE NUEVO [90 X PALLET]", img: "/matladmolde18x18x33.jpg" },
            { id: 27, name: "Ladrillo Doble Pared 20x18x33 [90 X PALLET]", img: "/matladdoblemuro20x18x33.jpg" },
            { id: 28, name: "LADRILLO HUECO 8X18X33 FANELLI [198 X PALLET]", img: "/matlad8x18x33fanelli.jpg" },
            { id: 29, name: "LADRILLO HUECO 12X18X33 [9A] CTIBOR [144 X PALLET]", img: "/matlad12x18x33ctibor.jpg" },
            { id: 30, name: "LADRILLO HUECO 18X18X33 CTIBOR [90 X PALLET]", img: "/matlad18x18x33ctibor.jpg" }
          ],
          aridos: [
            { id: 31, name: "ARENA GRUESA EN BOLSÓN", img: "matarenagru.jpg" },
            { id: 32, name: "Tosca a Granel x m3", img: "mattoscagranel.jpg" },
            { id: 33, name: "Tosca en Bolsón x m3", img: "mattoscabolson.jpg" },
            { id: 34, name: "Tierra de Relleno a Granel x m3", img: "mattierrarelleno.jpg" },
            { id: 35, name: "Tierra de Relleno en Bolsón", img: "mattierrarellenoen.jpg" },
            { id: 36, name: "Tierra Negra en Bolsón", img: "mattnegrabolson.jpg" },
            { id: 37, name: "Tierra Negra a Granel x m3", img: "mattnegragranel.jpg" },
            { id: 38, name: "Arena en Bolsón", img: "matarenabolson.jpg" },
            { id: 39, name: "Arena a Granel x m3", img: "matarenagranel.jpg" },
            { id: 40, name: "Piedra partida 6/20 en Bolsón", img: "matpiedra620.jpg" },
            { id: 41, name: "Piedra partida 6/20 a Granel x m3", img: "matpiedra620granel.jpg" },
            { id: 42, name: "Cascote picado en Bolsón", img: "matcascote.jpg" },
            { id: 43, name: "Cascote picado a Granel x m3", img: "matcascotegranel.jpg" },
            { id: 44, name: "Piedra partida 6/12 en Bolsón", img: "matpiedra612.jpg" },
            { id: 45, name: "Piedra partida 6/12 a Granel x m3", img: "matpiedra612granel.jpg" },
            { id: 46, name: "Piedra Partida en Bolsa de 30 Kg", img: "matpiedra30kg.jpg" },
            { id: 47, name: "Arena en Bolsa x 30 Kg.", img: "matarena30kg.jpg" },
            { id: 48, name: "Piedra Granza Blanca Mar Del Plata en Bolsón", img: "matpiedrablanca.jpg" },
            { id: 49, name: "Piedra Granza Blanca Mar Del Plata en Bolsa x 30 kg.", img: "matpiedrablancabolsa.jpg" }
          ],
          cementoscales: [
            { id: 50, name: "Cemento Loma Negra x 50 Kg", img: "/matcementoloma50kg.jpg" },
            { id: 51, name: "Cemento a Granel x Kg", img: "/TOLVA.jpg" },
            { id: 52, name: "Plasticor x 40 Kg", img: "/matplasticor.jpg" },
            { id: 53, name: "Cal Cacique Max x 30 Kg", img: "/matcalcaciquemax30kg.jpg" },
            { id: 54, name: "Cal Milagro x 25 Kg", img: "/matcalmilagro.jpg" },
            { id: 55, name: "Cal Cacique Plus x 20kg", img: "/matcalcaciquemax30kg.jpg" },
            { id: 56, name: "CAL SANTA ELENA x 20 Kg", img: "/matcalsantaelena.jpg" },
            { id: 57, name: "CAL UTIL VIAL EN BIG BAG X TONELADA", img: "/matcalcaciquemax30kg.jpg" }
          ],
          hierros: [
            { id: 58, name: "Hierro Ø 4.2 mm", img: "/matvarillashierro.png" },
            { id: 59, name: "Hierro Ø 6 mm Acindar", img: "/matvarillashierro.png" },
            { id: 60, name: "Hierro Ø 8 mm Acindar", img: "/matvarillashierro.png" },
            { id: 61, name: "Hierro Ø 10 mm Acindar", img: "/matvarillashierro.png" },
            { id: 62, name: "Hierro Ø 12 mm Acindar", img: "/matvarillashierro.png" },
            { id: 63, name: "Hierro Ø 16 mm Acindar", img: "/matvarillashierro.png" },
            { id: 64, name: "Hierro Ø 20 mm Acindar", img: "/matvarillashierro.png" },
            { id: 65, name: "Hierro Ø 25 mm Acindar", img: "/matvarillashierro.png" },
            { id: 66, name: "HIERRO X KG - ACINDAR", img: "/matvarillashierro.png" }
          ],
          mallas: [
            { id: 67, name: "Malla # 4 [15x25] 2x3 mts [Trafilada]", img: "/matmallas.jpg" },
            { id: 68, name: "Malla # 4 [15x15] 2x5 mts [Trafilada]", img: "/matmallas.jpg" },
            { id: 69, name: "Malla # 5.1 [15x25] 2x5 mts [Trafilada]", img: "/matmallas.jpg" },
            { id: 70, name: "Malla # 6 [15x15] 2x5 mts [Trafilada]", img: "/matmallas.jpg" },
            { id: 71, name: "Malla Job Shop Q109 - 50x50", img: "/matmallas.jpg" },
            { id: 72, name: "MALLA Q 188 150X150X6 2.40X6 [ACINDAR]", img: "/matmallas.jpg" },
            { id: 73, name: "Malla # 8 [15x15] 2x6 mts [Trafilada]", img: "/matmallas.jpg" },
            { id: 74, name: "MALLA Q 335 150X150X8 2.40X6", img: "/matmallas.jpg" },
            { id: 75, name: "MALLA Q 524 150X150X10 2.40X6", img: "/matmallas.jpg" },
            { id: 76, name: "malla # 4 [15x15] 2x3 mts [Trifilada]", img: "/matmallas.jpg" },
            { id: 77, name: "MALLA 8 [15X15] 2x5", img: "/matmallas.jpg" },
            { id: 78, name: "MALLA 4 [15X25] 2X6", img: "/matmallas.jpg" }
          ],
          yeso: [
            { id: 79, name: "Yeso Sika 30 Kg", img: "/matyeso.jpg" },
           
          ],
          pegamentos: [
            { id: 82, name: "Pegamento SikaCeram Flex x 20 kg", img: "/matpegamentoporcelanato.jpg" },
            { id: 83, name: "Pegamento SikaCeram Tradicional x 30 kg", img: "/matsikaceram.jpg" },
            { id: 84, name: "Pegamento Cerámica 5 kg", img: "/matsikaceram.jpg" },
            { id: 85, name: "Pegamento Para Cerámica x 25 Kg", img: "/matsikaceramflexible.jpg" }
          ],
          viguetas: [
            { id: 86, name: "Vigueta 6 x 12", img: "/matvigasdobles.jpg" },
            { id: 87, name: "Vigueta 4 x 10", img: "/matvigasdobles.jpg" },
            { id: 88, name: "Vigueta 6 x 10", img: "/matvigasdobles.jpg" },
            { id: 89, name: "Vigueta 5 x 12", img: "/matvigasdobles.jpg" },
            { id: 90, name: "Vigueta 5 x 10", img: "/matvigasdobles.jpg" },
            { id: 91, name: "Vigueta 4 x 12", img: "/matvigasdobles.jpg" },
            { id: 92, name: "Vigueta 4 x 8", img: "/matvigasdobles.jpg" }
          ],
          cañosdehormigon: [
            { id: 93, name: "CAÑO DE HORMIGÓN 150X300", img: "/matcañosdecemento.png" },
            { id: 94, name: "CAÑO DE HORMIGÓN 200X400", img: "/matcañosdecemento.png" }
          ],
          membranas: [
            { id: 95, name: "Membrana Liquida x 20kg", img: "/matmembranaliquidasika.jpg" },
            { id: 96, name: "Membrana Polimérica x 4mm", img: "/matmembrana.jpg" }
          ],
          separadores: [
            { id: 97, name: "Separador de Hormigón", img: "/matseparadores.jpg" },
            
          ],
          fijaciones: [
            { id: 99, name: "Fijación de hormigón", img: "/matfijacioneshormigon.jpg" },
            { id: 100, name: "Fijaciónes para construccion en seco", img: "/matfijacionesdur.jpg" }
          ]
      };
      const handleSubrubroSelect = (subrubro) => {
        setSelectedSubrubro(subrubro);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Aquí podrías agregar lógica para manejar el envío
        console.log('Email:', email);
        console.log('Mensaje:', message);
        setSubmitted(true);
        setEmail('');
        setMessage('');
    };

    return (
        <Container className="mt-4 materiales-container">
            <Row>
                <Col md={3}>
                    <h2>Productos</h2>
                    <ButtonGroup vertical className="w-100 mb-4">
                        {Object.keys(materiales).map(subrubro => (
                            <Button 
                                key={subrubro} 
                                variant={selectedSubrubro === subrubro ? "primary" : "light"}
                                onClick={() => handleSubrubroSelect(subrubro)}
                                className="mb-2"
                            >
                                {subrubro.charAt(0).toUpperCase() + subrubro.slice(1)}
                            </Button>
                        ))}
                    </ButtonGroup>
                </Col>
                <Col md={9}>
                    <h1 className="display-4 font-weight-bold" style={{ color: 'black' }}>
                        MATERIALES DE CORRALÓN
                    </h1>
                    <Row className="d-flex justify-content-center">
                        {materiales[selectedSubrubro].map(material => (
                            <Col xs={12} sm={6} md={4} lg={3} key={material.id} className="mb-4 d-flex align-items-stretch">
                                <Card className="material-card">
                                    <Card.Img variant="top" src={material.img} alt={material.name} />
                                    <Card.Body>
                                        <Card.Title className="text-center">{material.name}</Card.Title>
                                        <Button variant="success" size="sm" onClick={() => addToCart(material)} className="w-100">
                                            Agregar al Carrito
                                        </Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
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

            {/* Contacto */}
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
                    <div className="footer-links">
                        <Link to="/privacy" className="footer-link">
                            <i className="fas fa-shield-alt"></i> Política de Privacidad
                        </Link>
                        <span>|</span>
                        <Link to="/terms" className="footer-link">
                            <i className="fas fa-file-contract"></i> Términos de Servicio
                        </Link>
                        <span>|</span>
                        <Link to="/contact" className="footer-link">
                            <i className="fas fa-envelope"></i> Contáctanos
                        </Link>
                    </div>
                    <p className="footer-design">
                        Diseñado por <strong>DTECNO</strong>
                    </p>
                </Col>
            </Row>
        </Container>
    );
}

export default Materiales;