import React from 'react';
import './Contato.css';

const Contato = () => {
  return (
    <main className="container">
      <h1 className="display-4 text-center mb-2">Entre em contato</h1>
      <hr className="mb-5 my-4 border-2" />
      <form>
        <div className="mb-3">
          <label htmlFor="nome" className="form-label">Nome</label>
          <input type="text" className="form-control" id="nome" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" />
        </div>
        <div className="mb-3">
          <label htmlFor="assunto" className="form-label">Assunto</label>
          <input type="text" className="form-control" id="assunto" />
        </div>
        <div className="mb-3">
          <label htmlFor="mensagem" className="form-label">Mensagem</label>
          <textarea className="form-control" id="mensagem" rows="4"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Enviar</button>
      </form>
    </main>
  );
};

export default Contato;
