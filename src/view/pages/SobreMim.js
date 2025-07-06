import React from 'react';
import './SobreMim.css';
import profilePic from '../../assets/img/foto-pompeu.jpeg';

const SobreMim = () => {
    return (
        <main className="page-container">
            <section className="sobre-mim-content">
                <div className="text-column">
                    <h1 className="page-title">Sobre Mim</h1>
                    <p>
                        Olá! Meu nome é Pedro Pompeu e sou um desenvolvedor apaixonado por criar soluções inovadoras e eficientes. Com uma sólida experiência em desenvolvimento web, meu objetivo é transformar ideias complexas em aplicações intuitivas e performáticas.
                    </p>
                    <p>
                        Minha jornada na programação começou com a curiosidade de entender como a tecnologia molda o nosso mundo. Hoje, trabalho com diversas tecnologias, incluindo React, Node.js e bancos de dados SQL e NoSQL, sempre buscando aprender e aplicar as melhores práticas do mercado.
                    </p>
                    <p>
                        Acredito que a colaboração e a comunicação são as chaves para o sucesso de qualquer projeto. Vamos criar algo incrível juntos?
                    </p>
                </div>
                <div className="image-column">
               <img src={profilePic} alt="Foto de Pedro Pompeu" className="profile-image" />
                </div>
            </section>
        </main>
    );
};

export default SobreMim;