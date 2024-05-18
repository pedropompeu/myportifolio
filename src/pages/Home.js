import React from 'react';
import VideoBackground from '../components/VideoBackground';
import './Home.css';
const Home = () => {
  return (
    <div className="home-container">
      <VideoBackground />
      <div className="home-content">
        <h1 className="title">Bem-vindos ao site do Pompeu</h1>
        <h2 className="subtitle">Aqui você terá a oportunidade de saber mais sobre mim.</h2>
        <a className="link-saiba-mais" href="/sobre-mim">
          <button className="button-saiba-mais">Saiba mais</button>
        </a>
      </div>
    </div>
  );
  
};

export default Home;
