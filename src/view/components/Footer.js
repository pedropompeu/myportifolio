import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-section">
                    <h5>Sobre</h5>
                    <p>Este é o site pessoal do Pompeu. Aqui você encontrará informações sobre mim, meu currículo e como entrar em contato.</p>
                </div>
                <div className="footer-section">
                    <h5>Redes Sociais</h5>
                    <ul>
                        <li><a href="https://www.linkedin.com/in/pedro-pompeu/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                        <li><a href="https://github.com/pedropompeu" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                        <li><a href="https://wa.me/5553981097510" target="_blank" rel="noopener noreferrer">Whatsapp</a></li>
                        <li><a href="mailto:pedrolpompeu@gmail.com">Meu E-mail</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h5>Links Úteis</h5>
                    <ul>
                        <li><Link to="/sobre-mim">Sobre mim</Link></li>
                        <li><Link to="/meu-curriculo">Meu currículo</Link></li>
                        <li><Link to="/contato">Entre em contato</Link></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                &copy; 2025 Pompeu. Todos os direitos reservados.
            </div>
        </footer>
    );
};

export default Footer;