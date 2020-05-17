import React from 'react';
import './styles.css';

import logoImg from '../../images/logo.png';
import rgbImg from '../../images/rgb.png';

export default function Home(){
    return(
        <div className="home-container" id="top">
            <header className="menu-container">
                <nav className="menu">
                    <ul>
                        <li id="home">  <a href="#top">Home</a> </li>
                        <li id="advantages"><a href="#advantages-header">Vantagens</a></li>
                        <li id="logo"> <img id="logoImg" src={logoImg} alt="Logo ICMC Junior" /> </li>
                        <li id="feedbacks"><a href="#feedbacks-header">Feedbacks</a></li>
                        <li id="goto"><a href="/application">Ir para Listas</a></li>
                    </ul>
                </nav>
            </header>
            <section className="main-container">
                <div id="rgb-container" > <img id="rgbImg" src={rgbImg} alt="RGB - Camaleão mascote da Empresa Junior"/> </div>
                <div id="div-goto"> <a href="./application"> <button id="btn-goto"> Experimentar  </button> </a> </div>
            </section>
            <div id="advantages-header"><li id="advantages-home">  <a href="#top">Home</a> </li></div>
            <div id="advantages-title">Vantagens</div>
            <section className="advantages-container" id="advantages" >              
                <div className="advantage-box">
                    <p>Adicione, edite e remova suas listas a qualquer momento. </p>
                </div>
                <div className="advantage-box">
                    <p>Pelo título ou pelas tarefas encontre tudo o que você precisa! </p>
                </div>
                <div className="advantage-box">
                    <p>Deixe suas tarefas mais estilosas utilizando a ferramenta de cores. </p>
                </div>
            </section>
            <div id="feedbacks-header"><li id="feedbacks-home">  <a href="#top">Home</a> </li></div>
            <div id="feedbacks-title">Feedback dos Usuários</div>
            <section className="feedbacks-container" id="feedbacks">
            <div className="feedback-box">
                <p>Comecei a utilizar o ToDo para agilizar minha organização na faculdade e até agora não tenho o que reclamar. As listas serem organizadas por cores é a parte mais legal! Recomendo demais!</p><br/>
                <h1>Marcos Antonio</h1>
            </div>
            <div className="feedback-box">
                <p>Uso essa aplicação para organizar minhas vendas. Desde que comecei a usar só sucesso!</p><br/>
                <h1>Maria Antonieta</h1>
            </div>
            <div className="feedback-box">
                <p>Meu grupo da empresa adorou a dinâmica do aplicativo! Nossa organização melhorou 100%. Amei poder escolher quais listas visualizar </p><br/>
                <h1>Heloisa Brasil</h1>
            </div>
                
            </section>
            <footer className="footer">
                <div id="facebook"><a href="https://www.facebook.com/ICMCJunior/" target="blank" >Facebook</a></div>
                <div id="twitter"><a href="https://twitter.com/icmcjunior" target="blank">Twitter</a></div>
                <div id="logo"> <img id="logoImg" src={logoImg} alt="Logo ICMC Junior" /> </div>
                <div id="linkedin"><a href="https://www.linkedin.com/company/icmc-jr/about/" target="blank">LinkedIn</a></div>
                <div id="instagram"><a href="https://www.instagram.com/icmcjunior/" target="blank">Instagram</a></div>
            </footer>

        </div>
    );
}