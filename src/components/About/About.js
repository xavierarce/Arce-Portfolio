import { useLanguageContext } from "../../Context/LanguageContext";
import "./About.css";
// import profileImage from "./profile.png";
import Prix from "./Files About/Prix-min.png";
import ResumeFR from "./Files About/Xavier Arce - Alt Dev.pdf";
// import TimeLine from "./TimeLine";

const tradKey = "About";

const About = () => {
  const { translate } = useLanguageContext();
  const { writeTrad } = translate(tradKey);

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
                  {writeTrad("prix_du_hackathon")}
                </p>
                <div style={{ border: "2px solid black", borderTop: "none" }}>
                  <p>{writeTrad("prototype_react")}</p>
                  <p>{writeTrad("prototype_react_description")}</p>
                  <p></p>
                </div>
              </div>
            </div>
            <div className="about-content tj">
              <h2 className="section-title-about white pc ">
                {writeTrad("about_me")}
              </h2>
              <p className="f4 white">
                {writeTrad("intro")}{" "}
                <strong style={{ color: "black" }}>Xavier Arce</strong>,{" "}
                {writeTrad("position")}
                <strong style={{ color: "black" }}>ESGI Toulouse</strong>,{" "}
                {writeTrad("specialization")}.
                <br />
                <br />
                {writeTrad("current")}{" "}
                <strong style={{ color: "black" }}>Strateg In</strong>,{" "}
                {writeTrad("stack")}
                <strong style={{ color: "black" }}>
                  TypeScript, React.js, Prisma
                </strong>{" "}
                {writeTrad("and")}{" "}
                <strong style={{ color: "black" }}>PostgreSQL</strong>.
                <br />
                <br />
                {writeTrad("projects")}
                <br />
                <br />
                {writeTrad("goals")}
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
