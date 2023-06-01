import React from 'react';
import './index.css';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo/logoSmall.png';
import iconBandeira from '../../assets/icons/iconBandeira.png';
import iconAlert from '../../assets/icons/iconAlert.png';
import iconOpen from '../../assets/icons/iconOpen.png';
import iconMenu from '../../assets/icons/iconMenu.png';
import iconHistorico from '../../assets/icons/iconHistorico.png';
import iconDataSource from '../../assets/icons/iconDataSource.png';
import iconChat from '../../assets/icons/iconChat.png';
import iconSair from '../../assets/icons/iconSair.png';
import 'bootstrap/dist/css/bootstrap.min.css';


const Data: React.FC = () => {

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
            <div className="containerMainData">
                <div>
                    <h1>Modelos de previsão de fome em tempo real</h1>
                </div>
                <div className='divContainerData'>
                    <div className='divContainerDataTable'>
                        <div className='divLeft'>
                            <div className='divLocal'>
                                <img src={iconBandeira} alt="" />
                                <div className='divLocalText'>
                                    <h3>Brasil</h3>
                                    <h4>São Paulo - SP</h4>
                                </div>
                            </div>
                            <div className='dataTable'>
                                <div className='lineTitle'>
                                    <p className='indicador'>1. Alertas e mobilização de recursos</p>
                                    <p className='levelTitle'>7</p>
                                </div>
                                <div className='line'>
                                    <p className='indicador'>• Eficiência do modelo de previsão em identificar riscos iminentes de fome</p>
                                    <p className='level'>6</p>
                                </div>
                                <div className='line'>
                                    <p className='indicador'>• Capacidade de alertar governos, ONGs e agências de ajuda com antecedência</p>
                                    <p className='level'>6</p>
                                </div>
                                <div className='line' id='lastline'>
                                    <p className='indicador'>• Taxa de resposta pronta e mobilização efetiva de recursos</p>
                                    <p className='level'>9</p>
                                </div>
                            </div>
                            <div className='dataTable'>
                                <div className='lineTitle'>
                                    <p className='indicador'>2. Distribuição de alimentos e suplementos nutricionais</p>
                                    <p className='levelTitle'>7</p>
                                </div>
                                <div className='line'>
                                    <p className='indicador'>• Eficiência na distribuição de alimentos e suplementos nutricionais</p>
                                    <p className='level'>6</p>
                                </div>
                                <div className='line'>
                                    <p className='indicador'>• Número de parcerias com governos, ONGs e empresas privadas</p>
                                    <p className='level'>6</p>
                                </div>
                                <div className='line' id='lastline'>
                                    <p className='indicador'>• Acessibilidade e cobertura da distribuição para as comunidades vulneráveis</p>
                                    <p className='level'>9</p>
                                </div>
                            </div>
                            <div className='dataTable'>
                                <div className='lineTitle'>
                                    <p className='indicador'>1. Agricultura de subsistência</p>
                                    <p className='levelTitle'>7</p>
                                </div>
                                <div className='line'>
                                    <p className='indicador'>• Efetividade das práticas agrícolas de subsistência recomendadas</p>
                                    <p className='level'>6</p>
                                </div>
                                <div className='line'>
                                    <p className='indicador'>• Número de comunidades capacitadas e técnicas de cultivo sustentáveis</p>
                                    <p className='level'>6</p>
                                </div>
                                <div className='line' id='lastline'>
                                    <p className='indicador'>• Autossuficiência alcançada pelas comunidades em de produção de alimentos</p>
                                    <p className='level'>9</p>
                                </div>
                            </div>
                        </div>
                        <div className='divRight'>
                            <div className='divNivel'>
                                <img src={iconAlert} alt="" />
                                <h3>Nível do risco de fome</h3>
                                <h4>35/50</h4>
                            </div>
                            <div>
                                <div className='dataTable'>
                                    <div className='lineTitle'>
                                        <p className='indicador'>1. Programas de transferência de renda</p>
                                        <p className='levelTitle'>7</p>
                                    </div>
                                    <div className='line'>
                                        <p className='indicador'>• Eficiência na identificação e seleção das famílias mais vulneráveis</p>
                                        <p className='level'>6</p>
                                    </div>
                                    <div className='line'>
                                        <p className='indicador'>• Eficácia dos programas de transferência de renda em fornecer recursos financeiros adequados</p>
                                        <p className='level'>6</p>
                                    </div>
                                    <div className='line' id='lastline'>
                                        <p className='indicador'>• Capacidade das famílias em adquirir alimentos e suprir necessidades durante períodos de escassez</p>
                                        <p className='level'>9</p>
                                    </div>
                                </div>
                                <div className='dataTable'>
                                    <div className='lineTitle'>
                                        <p className='indicador'>1. Alertas e mobilização de recursos</p>
                                        <p className='levelTitle'>7</p>
                                    </div>
                                    <div className='line'>
                                        <p className='indicador'>• Capacidade de identificar áreas em risco de desnutrição aguda com precisão</p>
                                        <p className='level'>6</p>
                                    </div>
                                    <div className='line'>
                                        <p className='indicador'>• Tempo de resposta e eficácia das intervenções médicas para tratamento e cuidados especializados</p>
                                        <p className='level'>6</p>
                                    </div>
                                    <div className='line' id='lastline'>
                                        <p className='indicador'>• Redução dos índices de desnutrição e melhoria da saúde nas áreas atendidas</p>
                                        <p className='level'>9</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='divVoltar'>
                        <button className='btnVoltar' onClick={handleClick}>Voltar <img src={iconOpen} alt="" /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Data;