import React, { useContext } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaYoutube, FaWhatsapp, FaShoppingCart } from 'react-icons/fa';
import { CartProvider, CartContext } from './contexts/CartContext';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Cart from './components/Cart';
import Hormigon from './components/Hormigon';
import Materiales from './components/Materiales';
import Suelos from './components/Suelos';
import ServiciosDeBombeo from './components/ServiciosDeBombeo';

function App() {
    return (
        <CartProvider>
            <Container fluid>
                <Navbar bg="light" expand="lg" className="shadow-sm p-3 mb-5 bg-white rounded">
                    <Container>
                        <Navbar.Brand>
                            <img src="/logodaromtransparente.png" alt="Darom SA" style={{ height: 70, width: 200 }} />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link as={Link} to="/" className="btn btn-outline-primary mx-1">Home</Nav.Link>
                                <Nav.Link as={Link} to="/services/hormigon" className="btn btn-outline-primary mx-1">Hormigón Elaborado</Nav.Link>
                                <Nav.Link as={Link} to="/services/bombeo" className="btn btn-outline-primary mx-1">Servicios de Bombeo</Nav.Link>
                                <Nav.Link as={Link} to="/services/materiales" className="btn btn-outline-primary mx-1">Materiales</Nav.Link>
                                <Nav.Link as={Link} to="/services/suelos" className="btn btn-outline-primary mx-1">Estudio y Movimientos de Suelos</Nav.Link>
                                <Nav.Link as={Link} to="/about" className="btn btn-outline-primary mx-1">Sobre Nosotros</Nav.Link>
                                <Nav.Link as={Link} to="/contact" className="btn btn-outline-primary mx-1">Contacto</Nav.Link>
                            </Nav>
                            <Nav className="social-icons">
                                <Nav.Link href="https://www.facebook.com/tu_pagina" target="_blank" className="mx-1">
                                    <FaFacebook size={25} />
                                </Nav.Link>
                                <Nav.Link href="https://www.instagram.com/tu_pagina" target="_blank" className="mx-1">
                                    <FaInstagram size={25} />
                                </Nav.Link>
                                <Nav.Link href="https://www.youtube.com/tu_pagina" target="_blank" className="mx-1">
                                    <FaYoutube size={25} />
                                </Nav.Link>
                                <Nav.Link href="https://wa.me/1234567890" target="_blank" className="mx-1">
                                    <FaWhatsapp size={25} />
                                </Nav.Link>
                                <CartSummary />
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/services/materiales" element={<Materiales />} />
                    <Route path="/services/hormigon" element={<Hormigon />} />
                    <Route path="/services/bombeo" element={<ServiciosDeBombeo />} />
                    <Route path="/services/suelos" element={<Suelos />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
            </Container>
        </CartProvider>
    );
}

function CartSummary() {
    const { cart } = useContext(CartContext);
    const totalItems = cart.length;
    const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

    return (
        <NavDropdown title={<><FaShoppingCart /> ({totalItems})</>} id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="/cart">Ver Carrito</NavDropdown.Item>
            <NavDropdown.Item>Artículos: {totalItems}</NavDropdown.Item>
            <NavDropdown.Item>Total: ${totalPrice}</NavDropdown.Item>
        </NavDropdown>
    );
}

export default App;
