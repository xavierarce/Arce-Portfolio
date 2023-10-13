import "./Contact.css";
import { SocialIcon } from "react-social-icons";

const networkContacts = [
  {
    network: "linkedin",
    url: "https://www.linkedin.com/in/xavier-isaias-arce-carvajal/",
    h2: "Linkedin",
  },
  { network: "email", url: "mailto:xavierarce54321@gmail.com", h2: "mail me" },
  { network: "github", url: "https://github.com/xavierarce", h2: "github" },
];

const socialContacts = [
  { network: "whatsapp", url: "https://wa.me/33668715685" },
  { network: "instagram", url: "https://www.instagram.com/xavierarce_/" },
];

const ContactForm = () => {
  return (
    <div class="background nalo">
      <div class="Contactcontainer">
        <div class="screen">
          <div class="screen-header"></div>
          <div class="screen-body">
            <div class="screen-body-item left ">
              <div class="app-title ">
                <span>CONTACT</span>
                <span>ME</span>
              </div>
              <div class="app-contact">CONTACT INFO : +33 06 68 71 56 85</div>
            </div>
            <div class="screen-body-item">
              <div class="app-form">
                {networkContacts.map((network) => {
                  return (
                    <div class="app-form-group">
                      <SocialIcon
                        url={network.url}
                        network={network.network}
                        target="blank"
                        fgColor="black"
                        bgColor="white"
                      />
                      <h2 class="app-form-control"> {network.h2}</h2>
                    </div>
                  );
                })}
                <div class="app-form-group">
                  {socialContacts.map((social) => {
                    return (
                      <SocialIcon
                        url={social.url}
                        network={social.network}
                        target="blank"
                        fgColor="black"
                        bgColor="white"
                      />
                    );
                  })}
                  <h2 class="app-form-control "> Socials</h2>
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
