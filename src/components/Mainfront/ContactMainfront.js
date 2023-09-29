import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { animateScroll as scroll } from "react-scroll";
import social from './ICONS/social.png'

const InfoMainfornt = () => {
  const handleScrollToBottom = () => {
    scroll.scrollToBottom({
      duration: 500, // Scroll duration in milliseconds
      smooth: "easeInOutQuart", // Scroll easing function
    });
  };

  return (
    <header className=" pb1 tr">
      <div className='centrado pr5 pb2'>

      </div>  
    <div>
      <div style={{ display: 'flex',justifyContent:'flex-end', alignItems: 'center'}} >
        <a  href="#top" className="f5 link white" onClick={handleScrollToBottom}>
        <img
                  rel="noreferrer"
                  alt="Project-img"
                  className=""
                  src={social}
                  height={35}
                  
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
    <div className='d-flex justify-end'>
      <hr  align="right" className='mr2 w-25 gray' />
    </div>
      {/* <!-- Notice: if you want to give me some credit, it will be huge for me! if not, put your data on it --> */}
  </div>
  </header>
  )
};

export default InfoMainfornt;
