import "../assets/css/sobre.css";

const Sobre = () => {
  return (
    <div className="sobre" id="containerapresentacao">
      <div className="atributos2">
        <div className="sobre-mim">
          <h2>Sobre mim</h2>
          <p>
            Olá! Meu nome é Heber, tenho 20 anos e sou um desenvolvedor web
            apaixonado por tecnologia e inovação. Desde jovem, sempre fui
            fascinado pelo mundo digital e pela capacidade que a programação tem
            de transformar ideias em realidade.
          </p>
          <p>
            Atualmente, estou cursando Análise e Desenvolvimento de Sistemas,
            onde tenho aprofundado meus conhecimentos em diversas linguagens de
            programação e frameworks. Tenho experiência com HTML, CSS,
            JavaScript, React, Node.js, entre outras tecnologias.
          </p>
        </div>
        <div className="linguas">
          <h2>Linguagens que domino</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node.js</li>
            <li>Python</li>
            <li>Java</li>
            <li>SQL</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sobre;
