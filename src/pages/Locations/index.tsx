import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import api from '../../services/api';
import './index.css';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo/logoSmall.png';
import iconHistorico from '../../assets/icons/iconHistorico.png';
import iconDataSource from '../../assets/icons/iconDataSource.png';
import iconChat from '../../assets/icons/iconChat.png';
import iconSair from '../../assets/icons/iconSair.png';
import iconSearch from '../../assets/icons/iconSearch.png';
import iconOpen from '../../assets/icons/iconOpen.png';
import iconMenu from '../../assets/icons/iconMenu.png';

interface ILocation {
    id: number;
    continent: string;
    country: string;
    division: string;
    city: string;
}

const Locations: React.FC = () => {
    const [locations, setLocations] = useState<ILocation[]>([])

    const navigate = useNavigate();

    const handleClickMap = () => {
        navigate('/map');
    };

    const handleClickData = () => {
        navigate('/data');
    };

    const handleClickHome = () => {
        navigate('/');
    };

    const dropdownTitle = (
        <div>
            <img src={iconMenu} alt="" />
        </div>
    );

    useEffect(() => {
        loadTasks()
    }, [])

    async function loadTasks() {
        const response = await api.get('/locations')
        console.log(response);
        setLocations(response.data)
    }

    return (
        <div className='main'>
            <div className='header'>
                <div className='divLogo' onClick={handleClickHome}>
                    <img src={logo} alt="" />
                    <h1>ProHuman AI</h1>
                </div>
                <div className='divMenu'>
                    <NavDropdown title={dropdownTitle} className='menu' id="basic-nav-dropdown">
                        <NavDropdown.Item className='menuItem' href=""> <img src={iconHistorico} alt="" /> Histórico</NavDropdown.Item>
                        <NavDropdown.Item className='menuItem' href=""> <img src={iconDataSource} alt="" /> Data Source</NavDropdown.Item>
                        <NavDropdown.Item className='menuItem' href=""> <img src={iconChat} alt="" /> Chat</NavDropdown.Item>
                        <NavDropdown.Item className='menuItem' id='last-item' href="./"> <img src={iconSair} alt="" /> Sair</NavDropdown.Item>
                    </NavDropdown>
                </div>
            </div>
            <div className="containerMainTable">
                <div>
                    <h1>Modelos de previsão de fome em tempo real</h1>
                </div>
                <div>
                    <button className='search'>Busque por local <img src={iconSearch} alt="" /></button>
                </div>
                <div className='divTable'>
                    <Table bordered hover className='text-center'>
                        <thead>
                            <tr>
                                <th>Continente</th>
                                <th>País</th>
                                <th>Divisão</th>
                                <th>Cidade</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                locations.map(location => (
                                    <tr key={location.id}>
                                        <td>{location.continent}</td>
                                        <td>{location.country}</td>
                                        <td>{location.division}</td>
                                        <td>{location.city}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </Table>
                    <div className='divVerDados'>
                        <button className='btnAbrirMapa' onClick={handleClickMap}>Abrir mapa</button>
                        <button className='btnVerDados' onClick={handleClickData}>Ver Dados <img src={iconOpen} alt="" /></button>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Locations;