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
                Salut là-bas ! 👋 Je suis un développeur web dévoué actuellement en train de suivre un parcours passionnant pour obtenir mon diplôme d'informatique à l'ESGI dans la ville dynamique de Toulouse, en France. Mon cœur bat dans le code, notamment dans les domaines de{" "}
                <strong style={{ color: "black" }}>
                  {" "}
                  JavaScript, ReactJS et NodeJS.
                </strong>
                <br />
                <br />
                Bien que je sois officiellement en première année à l'ESGI, ma passion pour le développement web a commencé bien avant cela. Pendant plus d'un an, je me suis plongé dans le monde de JavaScript, consacrant d'innombrables heures à maîtriser l'art de React. J'ai dépassé les bases, plongeant dans des projets impliquant{" "}
                <strong style={{ color: "black" }}>
                  {" "}
                  React, MongoDB, Node.js,
                </strong>{" "}
                et même dansant avec{" "}
                <strong style={{ color: "black" }}> les bases de données.</strong>
                <br />
                <br />
                Originaire de la belle terre de l'Équateur, j'embrasse maintenant la vie en tant qu'étudiant étranger à Toulouse. Les langues ? Eh bien, je suis un passionné de linguistique. Couramment en{" "}
                <strong style={{ color: "black" }}>espagnol</strong> et en{" "}
                <strong style={{ color: "black" }}>anglais</strong>, avec une fluidité croissante en{" "}
                <strong style={{ color: "black" }}>français</strong>—parce que, soyons honnêtes, les langages de codage ne sont pas les seuls qui méritent d'être conquis.
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
