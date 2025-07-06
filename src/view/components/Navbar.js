// view/components/Navbar.js
import React, { useState } from 'react'; // 1. Importar useState
import { Link } from 'react-router-dom';
import Logo from './Logo';
import './Navbar.css';

const Navbar = () => {
    // 2. Criar o estado para controlar a abertura/fechamento do menu
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // 3. Função para fechar o menu ao clicar em um link (em modo mobile)
    const handleLinkClick = () => {
        if (isMenuOpen) {
            setIsMenuOpen(false);
        }
    };

    return (
        <nav className="navbar">
            {/* O Link no Logo também deve fechar o menu */}
            <Link to="/" onClick={handleLinkClick}>
              <Logo />
            </Link>

            {/* 4. Ícone do Hambúrguer (só aparece no mobile via CSS) */}
            <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>

            {/* 5. Aplicar a classe 'active' quando o menu estiver aberto */}
            <ul className={isMenuOpen ? "nav-links active" : "nav-links"}>
                <li><Link to="/" onClick={handleLinkClick}>Home</Link></li>
                <li><Link to="/sobre-mim" onClick={handleLinkClick}>Sobre Mim</Link></li>
                <li><Link to="/meu-curriculo" onClick={handleLinkClick}>Meu Currículo</Link></li>
                <li><Link to="/contato" onClick={handleLinkClick}>Contato</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;