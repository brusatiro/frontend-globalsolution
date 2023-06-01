import React from 'react';
import './index.css';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo/logoSmall.png';
import logoLg from '../../assets/logo/logoLarge.png';
import iconData from '../../assets/icons/iconData.png';
import iconMedicine from '../../assets/icons/iconMedicine.png';
import iconPlant from '../../assets/icons/iconPlant.png';
import iconAlert from '../../assets/icons/iconAlert.png';
import iconOpen from '../../assets/icons/iconOpen.png';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home: React.FC = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/login');
    };

    return (
        <div className='main'>
            <div className='header'>
                <div className='divLogo'>
                    <img src={logo} alt="" />
                    <h1>ProHuman AI</h1>
                </div>
                <div className='divMenu'>
                    <Navbar expand="lg" className="custom-navbar">
                        <Container>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                    <Nav.Link as={Link} className="nav-Item" to="/" >Sobre</Nav.Link>
                                    <Nav.Link as={Link} className="nav-Item" to="/" >Preços</Nav.Link>
                                    <Nav.Link as={Link} className="nav-Item" to="/" >Chat</Nav.Link>
                                    <Nav.Link as={Link} className="nav-Item" to="/" >Data Source</Nav.Link>
                                    <Nav.Link as={Link} className="nav-Item" id="entrar" to="/login" >Entrar</Nav.Link>
                                    <Nav.Link as={Link} className="nav-Item" id="inscrever" to="/" >Inscrever-se</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
            </div>
            <div className='containerMain'>
                <h2>Modelos de previsão de fome em tempo real</h2>
                <div className='divContainer'>
                    <div className='divBlocos'>
                        <div className='divBlocoTop'>
                            <div className='bloco'>
                                <img src={iconData} alt="" />
                                <p>Combine diversos dados para identificar áreas em risco de fome</p>
                            </div>
                            <div className='bloco'>
                                <img src={iconMedicine} alt="" />
                                <p>Monitore a desnutrição e promova intervenções médicas e nutricionais</p>
                            </div>
                        </div>
                        <div className='divBlocoBottom'>
                            <div className='bloco'>
                                <img src={iconPlant} alt="" />
                                <p>Obtenha orientações para desenvolver práticas agrícolas de subsistência</p>
                            </div>
                            <div className='bloco'>
                                <img src={iconAlert} alt="" />
                                <p>Mobilize recursos com antecedência e se antecipe em emergências</p>
                            </div>
                        </div>
                    </div>
                    <div className='divAbrir'>
                        <img src={logoLg} alt="" />
                        <button className='btnAbrir' onClick={handleClick}>Abrir ProHuman AI <img src={iconOpen} alt="" /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;