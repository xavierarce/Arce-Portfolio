import "./About.css";
// import profileImage from "./profile.png";
import Prix from "./Files About/Prix-min.png";
import ResumeFR from "./Files About/Xavier Arce - 2024.pdf";
// import TimeLine from "./TimeLine";

const About = () => {
  return (
    <div>
      <section id="about" className="about-section nalo">
        <div className="contenedor-TotalAbout centrado">
          <h2 className="section-title-about white phone">À PROPOS</h2>
          <div className="about-container">
            <div className="about-img-container">
              <div className="about-img-inside">
                <img alt="Profile Pic" className="about-img" src={Prix} />
                <p
                  style={{
                    border: "2px solid black",
                    padding: "0.8rem ",
                    fontWeight: 700,
                    marginBottom: 0,
                  }}
                >
                  Une fière troisième place au défi Hackathon
                </p>
                <div style={{ border: "2px solid black", borderTop: "none" }}>
                  <p> Prototype d'application mobile avec React Native</p>
                  <p>
                    Projet React Native avec API Twitter et ChatGPT.
                    Développement front-end, intégration d'API, logique
                    d'application. Lauréat du Troisième Prix en hackathon.
                  </p>
                </div>
              </div>
            </div>
            <div className="about-content tj">
              <h2 className="section-title-about white pc ">À PROPOS DE MOI</h2>
              <p className="f4 white">
                Salut ! 👋 Je suis un passionné du développement web, étudiant
                en informatique à l'ESGI, à Toulouse. . Mon cœur bat pour le
                <strong style={{ color: "black" }}>
                  {" "}
                  MERM Stack : ReactJS
                </strong>
                pour le front-end,{" "}
                <strong style={{ color: "black" }}>
                  NodeJS et Express{" "}
                </strong>{" "}
                pour des APIs rapides, et
                <strong style={{ color: "black" }}> MongoDB</strong> pour une
                scalabilité remarquable.
                <br />
                <br />
                À 21 ans, originaire de l'Équateur, je suis venu en France pour
                enrichir mes compétences et m'immerger dans le monde technique.
                Je parle couramment espagnol, anglais et je progresse en
                français.
                <br />
                <br />
                Javascript est ma passion, et je me délecte des dernières
                tendances. Mon amour pour la MERM Stack est constant, prêt à
                conquérir les défis du marché du travail français.
              </p>
              <span className="pt3">
                <a
                  rel="noreferrer"
                  target="_blank"
                  className="f6 link white"
                  href={ResumeFR}
                  style={{
                    border: "2px solid #fff",
                    padding: "0.8rem 1.6rem",
                    fontWeight: 700,
                  }}
                >
                  Voir le CV
                </a>
              </span>
            </div>
            {/* <TimeLine/> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
