import "./Contact.css";
import { SocialIcon } from "react-social-icons";
import profileImage from "../Home/ICONS/profile.png";

const networkContacts = [
  { network: "email", url: "mailto:xavierarce54321@gmail.com", h2: "mail me" },
  {
    network: "linkedin",
    url: "https://www.linkedin.com/in/xavier-isaias-arce-carvajal/",
    h2: "Linkedin",
  },
  { network: "github", url: "https://github.com/xavierarce", h2: "github" },
];

const socialContacts = [
  { network: "whatsapp", url: "https://wa.me/33668715685" },
  { network: "instagram", url: "https://www.instagram.com/xavierarce_/" },
];

const ContactForm = () => {
  return (
    <div className="ContactForm nalo">
      <div className="Contactcontainer">
        <div className="screen">
          <div className="screen-header"></div>
          <div className="screen-body">
            <div className="screen-body-item left ">
              <div className="app-title ">
                <span>CONTACT</span>
                <span>ME</span>
              </div>
              <div className="profile">
                <img
                  alt="Profile Pic"
                  className="profile-img-contact"
                  src={profileImage}
                />
              </div>
              <div className="app-contact">CONTACT INFO :</div>
              <div className="app-contact">Xavier ARCE</div>
              <div className="app-contact">📍Toulouse, Fr</div> 
              <div className="app-contact">+33 06 68 71 56 85</div>
              <div className="app-contact"></div> 
            </div>
            <div className="screen-body-item">
              <div className="app-form">
                {networkContacts.map((network,id) => {
                  return (
                    <div key={id} className="app-form-group">
                      <SocialIcon
                        url={network.url}
                        network={network.network}
                        target="blank"
                        fgColor="black"
                        bgColor="white"
                      />
                      <h2 className="app-form-control"> {network.h2}</h2>
                    </div>
                  );
                })}
                <div className="app-form-group">
                  <div className="socials">
                    {socialContacts.map((social, id) => {
                      return (  
                        <SocialIcon
                          url={social.url}
                          network={social.network}
                          target="blank"
                          fgColor="black"
                          bgColor="white"
                          key={id}
                        />
                      );
                    })}
                  </div>
                  <h2 className="app-form-control "> Socials</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
