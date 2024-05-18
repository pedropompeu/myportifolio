import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Logo from './Logo';

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="navbar-home">
        <Logo />
      </div>
      <div className="navbar-links-container">
        <div className="navbar-links">
          <Link className="link-sobre" to="/sobre-mim">Sobre mim</Link>
          <Link className="link-curriculo" to="/meu-curriculo">Meu currículo</Link>
          <Link className="link-contato" to="/contato">Entre em contato</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
