import React, { useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import './Menu.css';

// Importar imagens
import coffee1 from '../../assets/images/cafe3.webp';
import coffee2 from '../../assets/images/petit.jpg';
import coffee3 from '../../assets/images/croissant.jpeg';
import coffee4 from '../../assets/images/milk.jpeg';
import coffee5 from '../../assets/images/cha.jpeg';

function Menu() {
    const [currentImage, setCurrentImage] = useState(coffee1);

    const handleTabSelect = (key) => {
        const images = {
            cafes: coffee1,
            sobremesas: coffee2,
            especiais: coffee3,
            'bebidas-geladas': coffee4,
            chas: coffee5,
        };
        setCurrentImage(images[key] || coffee1);
    };

    return (
        <div className="menu-container">
            <header className="menu-header">
                <h1>Café do Amanhã</h1>
                <p>Descubra sabores únicos para cada momento do dia</p>
            </header>

            <div className="menu-content">
                <div className="menu-image">
                    <img src={currentImage} alt="Menu visualização" />
                </div>

                <div className="menu-tabs">
                    <Tabs
                        defaultActiveKey="cafes"
                        id="styled-menu-tabs"
                        className="mb-3"
                        onSelect={handleTabSelect}
                    >
                        <Tab eventKey="cafes" title="Cafés ☕">
                            <ul className="menu-list">
                                <li>Águas de Março <span>R$ 5,00</span></li>
                                <li>Sampa <span>R$ 6,50</span></li>
                                <li>Garota de Ipanema <span>R$ 7,00</span></li>
                                <li>Chega de Saudade <span>R$ 6,00</span></li>
                                <li>Carinhoso <span>R$ 8,00</span></li>
                                <li>Cappuccino Malandragem <span>R$ 9,00</span></li>
                            </ul>
                        </Tab>
                        <Tab eventKey="sobremesas" title="Sobremesas 🍰">
                            <ul className="menu-list">
                                <li>Doce de Maracujá <span>R$ 8,00</span></li>
                                <li>Romeu e Julieta <span>R$ 9,00</span></li>
                                <li>Chão de Giz <span>R$ 10,00</span></li>
                                <li>Bolinho de Chuva <span>R$ 6,50</span></li>
                                <li>Coração Bobo <span>R$ 7,50</span></li>
                                <li>Pettit Gateau Ilegais <span>R$ 12,00</span></li>
                            </ul>
                        </Tab>
                        <Tab eventKey="especiais" title="Especiais 🎵">
                            <ul className="menu-list">
                                <li>Tarde em Itapoã <span>R$ 12,00</span></li>
                                <li>O Canto da Cidade <span>R$ 10,00</span></li>
                                <li>Fora da Ordem <span>R$ 11,50</span></li>
                                <li>O Leãozinho <span>R$ 9,50</span></li>
                                <li>Iron Maiden <span>R$ 11,50</span></li>
                                <li>Metallica <span>R$ 9,50</span></li>
                            </ul>
                        </Tab>
                        <Tab eventKey="bebidas-geladas" title="Bebidas Geladas 🥤">
                            <ul className="menu-list">
                                <li>Sorvete de Baunilha <span>R$ 7,00</span></li>
                                <li>Milk Shake de Chocolate <span>R$ 10,00</span></li>
                                <li>Milk Shake de Morango <span>R$ 10,00</span></li>
                                <li>Vitamina de Banana <span>R$ 8,00</span></li>
                                <li>Vitamina de Morango <span>R$ 8,50</span></li>
                            </ul>
                        </Tab>
                        <Tab eventKey="chas" title="Chás 🍵">
                            <ul className="menu-list">
                                <li>Chá de Hortelã <span>R$ 4,50</span></li>
                                <li>Chá Verde <span>R$ 5,00</span></li>
                                <li>Chá de Camomila <span>R$ 4,50</span></li>
                                <li>Chá de Frutas Vermelhas <span>R$ 6,00</span></li>
                                <li>Chá de Gengibre e Limão <span>R$ 5,50</span></li>
                            </ul>
                        </Tab>
                    </Tabs>
                </div>
            </div>
        </div>
    );
}

export default Menu;