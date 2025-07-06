import React from 'react';
import VideoBackground from '../components/VideoBackground';
import './Home.css';

const Home = () => {
    return (
        <main className="home-container">
            <VideoBackground />
            <div className="home-content">
                <h1>Bem-vindo à Minha Página</h1>
                <p>Aqui você pode saber mais sobre mim e meu trabalho.</p>
            </div>
        </main>
    );
};

export default Home;