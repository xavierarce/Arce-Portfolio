import React from "react";
import Tilt from "react-parallax-tilt";
import "../Project.css";

const FinishedProjectComponent = ({
  className,
  title,
  description,
  skills,
  liveLink,
  codeLink,
  image,
  linkText,
}) => {
  return (
    <div className="entire-project">
      <div className="info-project">
        <div className="project-wrapper__text">
          <h3 className={`pj-${className}`}>{title}</h3>
          <div className="project-text">
            {description.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          <br />
          <div className="skills" style={{ marginBottom: 40 }}>
            {skills.map((icon, index) => (
              <Tilt
                key={index}
                className="icons"
                tiltMaxAngleX={25}
                tiltMaxAngleY={25}
              >
                <img
                  alt={`Skill-icon-${index}`}
                  className="project-icons-img"
                  src={icon}
                />
              </Tilt>
            ))}
          </div>
          <div className="project-linkbuttons">
            {codeLink ? (
              <a
                rel="noreferrer"
                target="_blank"
                href={codeLink}
                className="seeLive"
              >
                See Code
              </a>
            ) : null}
            {liveLink ? (
              <a
                rel="noreferrer"
                target="_blank"
                href={liveLink}
                className="seeLive"
              >
                See Live
              </a>
            ) : null}
          </div>
        </div>
      </div>
      <div className="photo-project">
        <a rel="noreferrer" href={liveLink} target="_blank">
          <div>
            <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
              <img
                alt={`Project-img-${title}`}
                className="photo-inside-img"
                src={image}
              />
            </Tilt>
          </div>
        </a>
      </div>
    </div>
  );
};

export default FinishedProjectComponent;
