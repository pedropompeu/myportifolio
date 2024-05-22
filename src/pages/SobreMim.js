import React from 'react';
import './SobreMim.css';

const SobreMim = () => {
  return (
    <main className="sobre-container">
      <h1 className="sobre-titulo">Sobre o Pompeu</h1>
      
      <img
        className="sobre-imagem"
        src="https://media.licdn.com/dms/image/C4D03AQFxM4K2gfConA/profile-displayphoto-shrink_800_800/0/1555081113068?e=1721865600&v=beta&t=L5L1Lb-beIdbMr_T2_ehfIyKvDple7N7v_O7b-mN9lo"
        alt="Pedro Luiz Pompeu da Silva"
      />
      <h2 className="sobre-nome">Pedro Luiz Pompeu da Silva</h2>
      <p className="sobre-paragrafo">
        Sou um estudante de tecnologia com graduação em administração pela UFPel e trabalhei como gerente de projetos de TI. Atualmente, sou estagiário de desenvolvimento de software na Dígitro Tecnologia, dedicando-me a aprimorar minhas habilidades de programação. Para aumentar minha dedicação, estou cursando Análise e Desenvolvimento de Sistemas na UDESC.
      </p>
      <p className="sobre-paragrafo">
        Tenho habilidade para treinar clientes, entender os componentes de um projeto, criar planos de implementação e configurar sistemas com uma mentalidade proativa e determinada. Estou comprometido com o sucesso de todos os projetos em que participo, continuando a buscar novas maneiras de me capacitar.
      </p>
      <p className="sobre-paragrafo">
        Além disso, estou focado em aprimorar minhas habilidades de desenvolvimento frontend, criando interfaces de usuário simples de entender e interessantes usando tecnologias como HTML, CSS, JavaScript, React e Bootstrap. Acredito que posso ajudar muito as equipes de desenvolvimento de software com minha experiência em gerenciamento de projetos e conhecimento em desenvolvimento Software.
      </p>
      <p className="sobre-paragrafo">
        Também tenho experiência em linguagens como Java e Python para tecnologias de backend, o que complementa meu perfil como desenvolvedor de software. Meu objetivo é aplicar minhas habilidades técnicas em projetos solicitados, especialmente no contexto de desenvolvimento frontend, e contribuir para o progresso e a excelência no campo do desenvolvimento de software.
      </p>
    </main>
  );
};

export default SobreMim;
