import React, { useState } from 'react';
import emailjs from '@emailjs/browser'; // Importar a biblioteca
import './Contato.css';

const Contato = () => {
    // useState para controlar os valores de cada campo do formulário
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        mensagem: ''
    });
    // Estado para controlar o feedback de envio (carregando/enviado/erro)
    const [status, setStatus] = useState('');

    // Função para atualizar o estado quando o usuário digita
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Função para lidar com o envio do formulário
    const handleSubmit = (e) => {
        e.preventDefault(); // Previne o recarregamento da página
        setStatus('enviando'); // Atualiza o status para "enviando"

        // Parâmetros do template do EmailJS
        const templateParams = {
            nome: formData.nome,
            email: formData.email,
            mensagem: formData.mensagem
        };
        
        // Suas chaves do EmailJS inseridas aqui
        const serviceID = 'service_1bfsloc';
        const templateID = 'template_mjla3hq';
        const publicKey = 'Z6MKf0zVaS0wKsf_z';

        emailjs.send(serviceID, templateID, templateParams, publicKey)
            .then((response) => {
                console.log("EMAIL ENVIADO", response.status, response.text);
                setStatus('enviado'); // Sucesso
                // Limpa o formulário
                setFormData({
                    nome: '',
                    email: '',
                    mensagem: ''
                });
            }, (err) => {
                console.log("ERRO: ", err);
                setStatus('erro'); // Erro
            });
    };

    return (
        <main className="page-container">
            <h1 className="page-title">Entre em Contato</h1>
            <section className="contato-content">
                {/* Coluna do Formulário */}
                <div className="contact-form-container">
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="nome">Nome</label>
                            <input
                                type="text"
                                id="nome"
                                name="nome"
                                value={formData.nome}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="mensagem">Mensagem</label>
                            <textarea
                                id="mensagem"
                                name="mensagem"
                                rows="6"
                                value={formData.mensagem}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        
                        {/* Botão dinâmico e mensagens de status */}
                        <button type="submit" className="submit-button" disabled={status === 'enviando'}>
                            {status === 'enviando' ? 'Enviando...' : 'Enviar Mensagem'}
                        </button>
                        {status === 'enviado' && <p className="status-message success">Mensagem enviada com sucesso! Obrigado.</p>}
                        {status === 'erro' && <p className="status-message error">Ocorreu um erro ao enviar. Tente novamente.</p>}
                    </form>
                </div>

                {/* Coluna de Informações de Contato */}
                <div className="contact-info-container">
                    <h3>Outras formas de contato</h3>
                    <p>
                        Sinta-se à vontade para me contatar por qualquer um dos canais abaixo. Estou sempre aberto a novas oportunidades, projetos e um bom bate-papo sobre tecnologia.
                    </p>
                    <ul className="contact-info-list">
                        <li>
                            <strong>Email:</strong> <a href="mailto:pedrolpompeu@gmail.com">pedrolpompeu@gmail.com</a>
                        </li>
                        <li>
                            <strong>Telefone:</strong> <a href="https://wa.me/5553981097510">+55 53 98109-7510</a>
                        </li>
                        <li>
                            <strong>Localização:</strong> Florianópolis, SC
                        </li>
                    </ul>
                    <p>
                        Você também pode me encontrar nas seguintes redes sociais:
                    </p>
                     <ul className="contact-info-list">
                        <li><a href="https://www.linkedin.com/in/pedro-pompeu" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                        <li><a href="https://github.com/pedropompeu" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                    </ul>
                </div>
            </section>
        </main>
    );
};

export default Contato;