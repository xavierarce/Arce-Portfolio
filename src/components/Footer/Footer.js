import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { animateScroll as scroll } from "react-scroll";
import './Footer.css'

const Footer = () => {

  const handleScrollToTop = () => {
    scroll.scrollToTop({
      duration: 2000, // Scroll duration in milliseconds
      smooth: "easeInOutQuart", // Scroll easing function
    });
  };

  return (
    <footer className="footer pa4 ">
      <div className='centrado'>
        <a href="#top" className="f5 link white" onClick={handleScrollToTop}>
          <i> Return</i>
        </a>
      </div>  
    <div className="container centrado pa4 f4 ">
      <div className='social-icons-wrapper'>
        <SocialIcon url="https://www.linkedin.com/in/xavier-isaias-arce-carvajal/" network="linkedin" fgColor="#ffffff" /> 
        <SocialIcon url="https://github.com/xavierarce" network="github" fgColor="#ffffff" /> 
        <SocialIcon url="https://www.instagram.com/xavierarce_/" network="instagram" fgColor="#ffffff" bgColor="#dd2a7b" /> 
      </div>

      <hr className='w-50 gray' />

      {/* <!-- Notice: if you want to give me some credit, it will be huge for me! if not, put your data on it --> */}
      <p className="footer__text gray">
        © 
        <a rel="noreferrer" href="https://github.com/xavierarce" target="_blank" className='gray link'
          >Xavier Arce
        </a>
        
      </p>

      {/* <!-- TO DO: remove this entire paragraph once you finish your portfolio --> */}
    </div>
  </footer>
  );
};

export default Footer;
