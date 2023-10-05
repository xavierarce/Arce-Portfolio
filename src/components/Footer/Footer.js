import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { animateScroll as scroll } from "react-scroll";
import './Footer.css'

const Footer = () => {

  const handleScrollToTop = () => {
    scroll.scrollToTop({
      duration: 850, // Scroll duration in milliseconds
      smooth: "easeInOutQuart", // Scroll easing function
    });
  };

  const Size=35;
  const ICON_STYLE = {
    width: Size,
    height: Size,
  };
  
  

  return (
    <footer className="footer ">
      <a href="#top"  onClick={handleScrollToTop}>
        <i className="return"> Return</i>
        </a>
    <div className="centrado">
      <div className='social-icons-wrapper'>
        <a href='https://wa.me/33668715685' target='_blanc'>
        <SocialIcon  network="whatsapp" fgColor="#ffffff" style={ICON_STYLE}/> 
        </a>
        <a href='https://www.instagram.com/xavierarce_/' target='_blanc'>
        <SocialIcon network="instagram" fgColor="#ffffff"  style={ICON_STYLE}/>
        </a> 
      </div>

      <hr/>

      {/* <!-- Notice: if you want to give me some credit, it will be huge for me! if not, put your data on it --> */}
      <p className="footer__text gray">
        © 
        <a rel="noreferrer" href="https://github.com/xavierarce" target="_blank" className='gray link'
          >Xavier Arce
        </a>
      </p>
    </div>
  </footer>
  );
};

export default Footer;
