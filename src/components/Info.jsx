import "../assets/css/info.css";
import "../assets/css/style.css";
import "../assets/css/personalizado.css";

import fotoPerfil from "../assets/img/fotoPerfil.png";

const Info = () => {
  return (
    <div className="info">
      <div className="profile container-fluid">
        <div className="info-redes">
          <div className="descricao">
            <h4>Desenvolvedor Fontend/Backend</h4>
            <br />
            <p>
              ´Sou um desenvolvedor em formação com uma base sólida adquirida no
              curso de Análise e Desenvolvimento de Sistemas (ADS), onde
              explorei profundamente o desenvolvimento de software e a solução
              de problemas digitais. Tenho experiência prática em linguagens
              como Java e JavaScript,além de frameworks modernos, como Spring
              Boot e React.´
            </p>
          </div>
          <div className="redes">
            <ul className="social-icons">
              <li>
                <a href="https://www.instagram.com/heberrodriguess/">
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/heber-rodrigues-7bb78a86/">
                  <i className="fa fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="https://github.com/heberhb?tab=repositories">
                  <i className="fa fa-github"></i>
                </a>
              </li>
            </ul>
            <div className="frasedeimpacto">
              <h1>´Transformando ideias em código, um projeto de cada vez.´</h1>
            </div>
          </div>
        </div>
        <div className="informacao">
          <div id="profile_completo">
            <div className="AroFoto">
              <div className="containerFoto">
                <div className="fotoPerfil">
                  <img
                    className="img-fluid"
                    src={fotoPerfil}
                    alt="Imgagem do Desenvolvedor do site"
                  />
                </div>
              </div>
            </div>
            <div className="nome">
              <h3>Hello, I am</h3>
              <h1>Heber Rodrigues</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
