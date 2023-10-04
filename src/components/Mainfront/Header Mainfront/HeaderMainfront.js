import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { animateScroll as scroll } from "react-scroll";
import social from '../ICONS/social.png'
import './HeaderMainfront.css'

const HeaderMainfront = () => {
  const handleScrollToBottom = () => {
    scroll.scrollToBottom({
      duration: 500, // Scroll duration in milliseconds
      smooth: "easeInOutQuart", // Scroll easing function
    });
  };

  return (
    <header className="Mainfronthead">
      <div className='MainfrontIcons'>
        <div className='container-icons'>
          <a  href="#top" className="f5 link white" onClick={handleScrollToBottom}>
          <img
              rel="noreferrer"
              alt="Project-img"
              className=""
              src={social}
              height={34}  
            />
            </a>
            <a className='pl4' href='https://www.linkedin.com/in/xavier-isaias-arce-carvajal/' target='_blanc'>
              <SocialIcon network="linkedin" fgColor="black" bgColor='white' /> 
            </a>  
            <a className='pl4' href="mailto:xavierarce54321@gmail.com"  rel="noreferrer" target="_blank">
              <SocialIcon network="email" fgColor="black" bgColor='white' /> 
            </a>  
            <a className='pl4 pr4' href="https://github.com/xavierarce" rel="noreferrer" target="_blank">
              <SocialIcon network="github" fgColor="black" bgColor='white' /> 
            </a>  
          </div>
      </div>
    </header>
  )
};

export default HeaderMainfront;
