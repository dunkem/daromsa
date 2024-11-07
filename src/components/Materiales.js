import React, { useContext, useState } from 'react';
import { Container, Row, Col, Button, ListGroup, DropdownButton, Dropdown } from 'react-bootstrap';
import { CartContext } from '../contexts/CartContext';

function Materiales() {
    const { addToCart } = useContext(CartContext);
    const [selectedSubrubro, setSelectedSubrubro] = useState('hidrofugos');

    const materiales = {
        hidrofugos: [
          { id: 1, name: "Hidrofugo Sika 1 Tambor x 200 Kg" },
          { id: 2, name: "Hidrofugo Sika 1 Bidón x 20 Kg" },
          { id: 3, name: "Hidrofugo Sika 1 Bidón x 10 Kg" },
          { id: 4, name: "Hidrófugo Sika 1 x 4 Lts." },
          { id: 5, name: "Hidrófugo Darapel 19 Grace" },
          { id: 6, name: "Hidrofugo Mapei Balde x 20 Kg" },
          { id: 7, name: "Hidrofugo Mapei Tambor x 200 Kg" },
          { id: 8, name: "Hidrofugo Mapei Box 4 x 5 Kg" },
          { id: 9, name: "HIDROFUGO CERESITA X 4LTS" },
          { id: 10, name: "Revoque Exterior Hidrofugo Proyectable 3 en 1 x 30Kg" }
        ],
        ladrillos: [
          { id: 11, name: "Ladrillo Comun" },
          { id: 12, name: "LADRILLO HUECO 8x18x33 CTIBOR [216 X PALLET]" },
          { id: 13, name: "LADRILLO HUECO 12x18x33 [9A] FANELLI [144 X PALLET]" },
          { id: 14, name: "LADRILLO HUECO 18x18x33 FANELLI [90 X PALLET]" },
          { id: 15, name: "Ladrillo PORTANTE 18x19x33 CTIBOR [90 X PALLET]" },
          { id: 16, name: "Ladrillo PORTANTE 12x19x33 CTIBOR [120 X PALLET]" },
          { id: 17, name: "Ladrillo retak® 60 15 [64 un]" },
          { id: 18, name: "Ladrillo PORTANTE 12x25x33 FANELLI" },
          { id: 19, name: "Ladrillo Doble Pared 24x18x33 FANELLI [72 X PALLET]" },
          { id: 20, name: "Ladrillo KLIMABLOCK 27x19x20 FANELLI" },
          { id: 21, name: "Ladrillo Doble Pared 20x18x25 [120 X PALLET]" },
          { id: 22, name: "Ladrillo Vista Mar Del Plata" },
          { id: 23, name: "Ladrillo Doble Pared 27x18x33 FANELLI [54 X PALLET]" },
          { id: 24, name: "Ladrillo ECONOBLOCK-27x19x20 Ctibor" },
          { id: 25, name: "Ladrillo ECONOBLOCK-20x19x27 CTIBOR [80 X PALLET]" },
          { id: 26, name: "LADRILLO HUECO 18X18X33 MOLDE NUEVO [90 X PALLET]" },
          { id: 27, name: "Ladrillo Doble Pared 20x18x33 [90 X PALLET]" },
          { id: 28, name: "LADRILLO HUECO 8X18X33 FANELLI [198 X PALLET]" },
          { id: 29, name: "LADRILLO HUECO 12X18X33 [9A] CTIBOR [144 X PALLET]" },
          { id: 30, name: "LADRILLO HUECO 18X18X33 CTIBOR [90 X PALLET]" }
        ],
        arenas_piedras: [
          { id: 31, name: "ARENA GRUESA EN BOLSÓN" },
          { id: 32, name: "Tosca a Granel x m3" },
          { id: 33, name: "Tosca en Bolsón x m3" },
          { id: 34, name: "Tierra de Relleno a Granel x m3" },
          { id: 35, name: "Tierra de Relleno en Bolsón" },
          { id: 36, name: "Tierra Negra en Bolsón" },
          { id: 37, name: "Tierra Negra a Granel x m3" },
          { id: 38, name: "Arena en Bolsón" },
          { id: 39, name: "Arena a Granel x m3" },
          { id: 40, name: "Piedra partida 6/20 en Bolsón" },
          { id: 41, name: "Piedra partida 6/20 a Granel x m3" },
          { id: 42, name: "Cascote picado en Bolsón" },
          { id: 43, name: "Cascote picado a Granel x m3" },
          { id: 44, name: "Piedra partida 6/12 en Bolsón" },
          { id: 45, name: "Piedra partida 6/12 a Granel x m3" },
          { id: 46, name: "Piedra Partida en Bolsa de 30 Kg" },
          { id: 47, name: "Arena en Bolsa x 30 Kg." },
          { id: 48, name: "Piedra Granza Blanca Mar Del Plata en Bolsón" },
          { id: 49, name: "Piedra Granza Blanca Mar Del Plata en Bolsa x 30 kg." }
        ],
        cementos_cal: [
          { id: 50, name: "Cemento Loma Negra x 50 Kg" },
          { id: 51, name: "Cemento a Granel x Kg" },
          { id: 52, name: "Plasticor x 40 Kg" },
          { id: 53, name: "Cal Cacique Max x 30 Kg" },
          { id: 54, name: "Cal Milagro x 25 Kg" },
          { id: 55, name: "Cal Cacique Plus x 20kg" },
          { id: 56, name: "CAL SANTA ELENA x 20 Kg" },
          { id: 57, name: "CAL UTIL VIAL EN BIG BAG X TONELADA" }
        ],
        hierros: [
          { id: 58, name: "Hierro Ø 4.2 mm" },
          { id: 59, name: "Hierro Ø 6 mm Acindar" },
          { id: 60, name: "Hierro Ø 8 mm Acindar" },
          { id: 61, name: "Hierro Ø 10 mm Acindar" },
          { id: 62, name: "Hierro Ø 12 mm Acindar" },
          { id: 63, name: "Hierro Ø 16 mm Acindar" },
          { id: 64, name: "Hierro Ø 20 mm Acindar" },
          { id: 65, name: "Hierro Ø 25 mm Acindar" },
          { id: 66, name: "HIERRO X KG - ACINDAR" }
        ],
        mallas: [
          { id: 67, name: "Malla # 4 [15x25] 2x3 mts [Trafilada]" },
          { id: 68, name: "Malla # 4 [15x15] 2x5 mts [Trafilada]" },
          { id: 69, name: "Malla # 5.1 [15x25] 2x5 mts [Trafilada]" },
          { id: 70, name: "Malla # 6 [15x15] 2x5 mts [Trafilada]" },
          { id: 71, name: "Malla Job Shop Q109 - 50x50" },
          { id: 72, name: "MALLA Q 188 150X150X6 2.40X6 [ACINDAR]" },
          { id: 73, name: "Malla # 8 [15x15] 2x6 mts [Trafilada]" },
          { id: 74, name: "MALLA Q 335 150X150X8 2.40X6" },
          { id: 75, name: "MALLA Q 524 150X150X10 2.40X6" },
          { id: 76, name: "malla # 4 [15x15] 2x3 mts [Trifilada]" },
          { id: 77, name: "MALLA 8 [15X15] 2x5" },
          { id: 78, name: "MALLA 4 [15X25] 2X6" }
        ],
        yeso: [
          { id: 79, name: "Yeso Sika - 30 Kg" },
          { id: 80, name: "Yeso (Sika) x 25 Kg" },
          { id: 81, name: "Yeso Durazno" }
        ],
        pegamentos: [
          { id: 82, name: "Pegamento SikaCeram Flex x 20 kg" },
          { id: 83, name: "Pegamento SikaCeram Tradicional x 30 kg" },
          { id: 84, name: "Pegamento Cerámica 5 kg" },
          { id: 85, name: "Pegamento Para Cerámica x 25 Kg" }
        ],
        viguetas: [
          { id: 86, name: "Vigueta 6 x 12" },
          { id: 87, name: "Vigueta 4 x 10" },
          { id: 88, name: "Vigueta 6 x 10" },
          { id: 89, name: "Vigueta 5 x 12" },
          { id: 90, name: "Vigueta 5 x 10" },
          { id: 91, name: "Vigueta 4 x 12" },
          { id: 92, name: "Vigueta 4 x 8" }
        ],
        canos_hormigon: [
          { id: 93, name: "CAÑO DE HORMIGÓN 150X300" },
          { id: 94, name: "CAÑO DE HORMIGÓN 200X400" }
        ],
        membranas: [
          { id: 95, name: "Membrana Liquida x 20kg" },
          { id: 96, name: "Membrana Polimérica x 4mm" }
        ],
        separadores: [
          { id: 97, name: "Separador de Hormigón" },
          { id: 98, name: "Separador de plástico" }
        ],
        fijaciones: [
          { id: 99, name: "Fijación de hormigón" },
          { id: 100, name: "Fijación para cerámica" }
        ]
      };
      

    const handleSelect = (eventKey) => {
        setSelectedSubrubro(eventKey);
    };

    return (
        <Container className="mt-4">
            <Row>
                <Col md={6}>
                    <h1>Materiales de Corralón</h1>
                    <DropdownButton
                        id="dropdown-basic-button"
                        title={selectedSubrubro.charAt(0).toUpperCase() + selectedSubrubro.slice(1)}
                        onSelect={handleSelect}
                        variant="success"
                    >
                        {Object.keys(materiales).map(subrubro => (
                            <Dropdown.Item eventKey={subrubro} key={subrubro}>
                                {subrubro.charAt(0).toUpperCase() + subrubro.slice(1)}
                            </Dropdown.Item>
                        ))}
                    </DropdownButton>
                    <ListGroup className="mt-4">
                        {materiales[selectedSubrubro].map(material => (
                            <ListGroup.Item key={material.id}>
                                <h5>{material.name}</h5>
                                <Button variant="success" size="sm" onClick={() => addToCart(material)} className="w-50">
                                    Agregar al Carrito
                                </Button>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </Col>
                <Col md={6}>
                    <h2>Nuestros Proveedores</h2>
                    <img src="/proveedor1.jpg" alt="Proveedor 1" className="img-fluid mb-2" />
                    <img src="/proveedor2.jpg" alt="Proveedor 2" className="img-fluid mb-2" />
                    <img src="/proveedor3.jpg" alt="Proveedor 3" className="img-fluid mb-2" />
                    {/* Añade los logos de todos tus proveedores aquí */}
                </Col>
            </Row>
            <Row className="mt-4">
                <Col>
                    <h2>Información de la Empresa</h2>
                    <p><strong>Dirección:</strong> 152 N° 6352 - 2do.Piso-Of.212, Hudson, Provincia de Buenos Aires</p>
                    <p><strong>Teléfono:</strong> 555-555-5555</p>
                    <p><strong>Correo Electrónico:</strong> <a href="mailto:contacto@darom.com">contacto@darom.com</a></p>
                    <p><strong>Horario de Atención:</strong> Lunes a Viernes, de 9:00 a 18:00 hs</p>
                    <iframe
    title="Mapa de oficinas en Hudson"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3169.456022497281!2d-58.21165368427842!3d-34.84763467913954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a32f4db3ac5cb7%3A0x7d313e6fdb2c1a!2s152%20N%C2%B06352%2C%20B1848HRB%20Hudson%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1634008710566!5m2!1ses!2sar"
    width="100%"
    height="450"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
></iframe>

                </Col>
            </Row>
        </Container>
    );
}

export default Materiales;
