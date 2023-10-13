import React from "react";
import { SocialIcon } from "react-social-icons";
import { animateScroll as scroll } from "react-scroll";
import "./Footer.css";

const Footer = () => {
  const handleScrollToTop = () => {
    scroll.scrollToTop({
      duration: 850, // Scroll duration in milliseconds
      smooth: "easeInOutQuart", // Scroll easing function
    });
  };

  const Size = 35;
  const ICON_STYLE = {
    width: Size,
    height: Size,
  };

  return (
    <div>
      <footer className="footer ">
        <h2 className="Contact">Contact</h2>
        <p className="Contact-Loc">📍Toulouse, Fr</p>
        <a
          rel="noreferrer"
          target="_blank"
          className="CallAction"
          href="mailto:xavierarce54321@gmail.com"
        >
          Call to Action
        </a>

        <div className="centrado">
          <div className="social-icons-wrapper">
            <SocialIcon
              url="https://wa.me/33668715685"
              network="whatsapp"
              fgColor="#ffffff"
              style={ICON_STYLE}
            />
            <SocialIcon
              url="https://www.instagram.com/xavierarce_/"
              network="instagram"
              fgColor="#ffffff"
              style={ICON_STYLE}
            />
          </div>

          <hr />

          {/* <!-- Notice: if you want to give me some credit, it will be huge for me! if not, put your data on it --> */}
          <p className="footer__text gray">
            <a
              rel="noreferrer"
              href="https://github.com/xavierarce"
              target="_blank"
              className="gray link"
            >
              © Xavier Arce
            </a>
            <a href="#top" onClick={handleScrollToTop}>
              <i className="return"> Return</i>
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
