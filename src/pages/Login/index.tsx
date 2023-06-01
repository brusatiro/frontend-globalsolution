import React from 'react';
import './index.css';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo/logoSmall.png';

const Login: React.FC = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/locations');
    };

    const handleClickHome = () => {
        navigate('/');
    };

    return (
        <div className='main'>
            <div className='header'>
                <div className='divLogo' onClick={handleClickHome}>
                    <img src={logo} alt="" />
                    <h1>ProHuman AI</h1>
                </div>
                <div className='divMenu'>
                    <Navbar expand="lg">
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
            <div className='containerMainLogin'>
                <div className='divContainerLogin'>
                    <h2>Entrar</h2>
                    <div className='divForm'>
                        <label className='label' htmlFor="">E-mail</label>
                        <input className='input' type="email" placeholder='Digite seu e-mail' />
                        <label className='label' htmlFor="">Senha</label>
                        <input className='input' type="email" placeholder='Digite sua senha' />
                        <p className='btnEsqueciSenha'>Esqueci minha senha</p>
                        <button className='btnEntrar' onClick={handleClick}>Entrar</button>
                        <p className='btnLembrar'>Lembre-se de mim</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;