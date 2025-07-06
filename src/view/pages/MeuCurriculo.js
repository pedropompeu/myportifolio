import React from 'react';
import './MeuCurriculo.css';

const MeuCurriculo = () => {
    return (
        <main className="page-container">
            <h1 className="page-title">Meu Currículo</h1>
            <section className="curriculo-section">
                <h2 className="section-title">Experiência Profissional</h2>
                <div className="timeline">
                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-date">01/2025 - Atual</div>
                        <div className="timeline-content">
                            <h3>Instrutor de Robótica</h3>
                            <p className="timeline-company">Colégio Salvatoriano Nossa Senhora de Fátima</p>
                            <p>
                                Ensino de conceitos de programação em Python, eletrônica e automação, orientando alunos no desenvolvimento de projetos tecnológicos e soluções inovadoras.
                            </p>
                        </div>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-date">08/2024 - 01/2025</div>
                        <div className="timeline-content">
                            <h3>Gestor de Projetos de Dados</h3>
                            <p className="timeline-company">Indicium</p>
                            <p>
                                Desenvolvimento de soluções de BI e engenharia de dados para análise estratégica, utilizando SCRUM e Kanban para organização dos projetos. 
                            </p>
                        </div>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-date">12/2023 - 2024</div>
                        <div className="timeline-content">
                            <h3>Desenvolvedor de Software</h3>
                            <p className="timeline-company">Dígitro Tecnologia</p>
                            <p>
                                Desenvolvimento fullstack com React e Node, e integração de APIs RESTful, seguindo padrões de UX/UI e metodologias ágeis.
                            </p>
                        </div>
                    </div>
                     <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-date">08/2022 - 01/2024</div>
                        <div className="timeline-content">
                            <h3>Estagiário de TI</h3>
                            <p className="timeline-company">Justiça Federal de Santa Catarina</p>
                            <p>
                                Suporte técnico em ambientes Microsoft, testes de homologação, gestão de redes e suporte a sistemas internos.
                            </p>
                        </div>
                    </div>
                     <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-date">2016 - 2018</div>
                        <div className="timeline-content">
                            <h3>Gerente de Projetos</h3>
                            <p className="timeline-company">Blueshift</p>
                            <p>
                                Liderança de equipes para desenvolvimento de softwares, implementando SCRUM e Kanban e gerenciando escopo, prazos e orçamento.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="curriculo-section">
                <h2 className="section-title">Formação Acadêmica</h2>
                <div className="timeline">
                     <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-date">2023 - Atual</div>
                        <div className="timeline-content">
                            <h3>Tecnologia em Análise e Desenvolvimento de Sistemas</h3>
                            <p className="timeline-company">UDESC</p>
                        </div>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-date">2018</div>
                        <div className="timeline-content">
                            <h3>Bacharelado em Administração</h3>
                            <p className="timeline-company">Universidade Federal de Pelotas</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="curriculo-section">
                <h2 className="section-title">Habilidades Técnicas</h2>
                <div className="skills-container">
                    <span className="skill-tag">JavaScript</span>
                    <span className="skill-tag">React.js</span>
                    <span className="skill-tag">SCRUM</span>
                    <span className="skill-tag">TypeScript</span>
                    <span className="skill-tag">Python</span>
                    <span className="skill-tag">NodeJS</span>
                    <span className="skill-tag">Desenvolvimento Responsivo</span>
                    <span className="skill-tag">SQL</span>
                    <span className="skill-tag">PostgreSQL</span>
                    <span className="skill-tag">MySQL</span>
                    <span className="skill-tag">Visual Studio</span>
                    <span className="skill-tag">Vue.js</span>
                    <span className="skill-tag">VS Code</span>
                    <span className="skill-tag">HTML5</span>
                    <span className="skill-tag">CSS3</span>
                    <span className="skill-tag">Git</span>
                    <span className="skill-tag">GitHub</span>
                    <span className="skill-tag">Kanban</span>
                </div>
            </section>
        </main>
    );
};

export default MeuCurriculo;