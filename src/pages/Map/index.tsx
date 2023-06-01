import './index.css';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo/logoSmall.png';
import iconHistorico from '../../assets/icons/iconHistorico.png';
import iconDataSource from '../../assets/icons/iconDataSource.png';
import iconChat from '../../assets/icons/iconChat.png';
import iconSair from '../../assets/icons/iconSair.png';
import iconSearch from '../../assets/icons/iconSearch.png';
import iconOpen from '../../assets/icons/iconOpen.png';
import iconMenu from '../../assets/icons/iconMenu.png';
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import Locations from '../Locations';
import { useNavigate } from 'react-router-dom';

const Map: React.FC = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/locations');
    };

    const handleClickHome = () => {
        navigate('/');
    };

    const dropdownTitle = (
        <div>
            <img src={iconMenu} alt="" />
        </div>
    );

    const containerStyle = {
        width: '100%',
        height: '400px',
    };

    const center = {
        lat: 12.6123899,
        lng: -8.3245086,
    };

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
                <div className='divMap'>
                    <div className='map'>
                        <LoadScript googleMapsApiKey="AIzaSyBzhK8A2jh06ovSrZbtQR8elajuphEqAzI">
                            <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={2}>
                                <Marker position={{ lat: -33.9248685, lng: 18.4240553 }} />
                                <Marker position={{ lat: 33.5731104, lng: -7.5898434 }} />
                                <Marker position={{ lat: -1.286389, lng: 36.817223 }} />
                                <Marker position={{ lat: -8.8399883, lng: 13.2894377 }} />
                                <Marker position={{ lat: 35.6894875, lng: 139.6917064 }} />
                                <Marker position={{ lat: 28.6139391, lng: 77.2090212 }} />
                                <Marker position={{ lat: 41.0082376, lng: 28.9783589 }} />
                                <Marker position={{ lat: 1.352083, lng: 103.819836 }} />
                                <Marker position={{ lat: 40.7127753, lng: -74.0059728 }} />
                                <Marker position={{ lat: 19.4326077, lng: -99.133208 }} />
                                <Marker position={{ lat: -34.6036844, lng: -58.3815591 }} />
                                <Marker position={{ lat: 49.2827291, lng: -123.1207375 }} />
                                <Marker position={{ lat: -33.865143, lng: 151.209900 }} />
                                <Marker position={{ lat: -36.8484609, lng: 174.7633315 }} />
                                <Marker position={{ lat: 21.3069444, lng: -157.8583333 }} />
                                <Marker position={{ lat: -27.4697707, lng: 153.0251235 }} />
                                <Marker position={{ lat: 51.5073509, lng: -0.1277583 }} />
                                <Marker position={{ lat: 48.856614, lng: 2.3522219 }} />
                                <Marker position={{ lat: 41.9027835, lng: 12.4963655 }} />
                                <Marker position={{ lat: 52.3702157, lng: 4.8951679 }} />
                                <Marker position={{ lat: 12.6123899, lng: -8.3245086 }} />
                                <Marker position={{ lat: -3.044653, lng: -60.1071907 }} />
                                <Marker position={{ lat: -8.0421408, lng: -35.1023238 }} />
                                <Marker position={{ lat: 32.8206645, lng: -96.7315525 }} />
                                <Marker position={{ lat: 43.7228319, lng: -110.814403 }} />
                                <Marker position={{ lat: 49.8537806, lng: -97.1528398 }} />
                                <Marker position={{ lat: -23.6810219, lng: -47.2534543 }} />
                                <Marker position={{ lat: 30.0594629, lng: 31.1762335 }} />
                                <Marker position={{ lat: 9.0338725, lng: 8.677457 }} />
                                <Marker position={{ lat: 15.5013018, lng: 32.2436022 }} />
                                <Marker position={{ lat: 39.931436, lng: 115.08073 }} />
                                <Marker position={{ lat: 47.4737239, lng: 63.3723243 }} />
                                <Marker position={{ lat: 33.3175338, lng: 42.3632834 }} />
                            </GoogleMap>
                        </LoadScript>
                    </div>
                    <div className='divVoltar'>
                        <button className='btnVoltar' onClick={handleClick}>
                            Voltar <img src={iconOpen} alt="" />
                        </button>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Map;