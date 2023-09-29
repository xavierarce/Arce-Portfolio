import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="nalo contact">
    <div className="container  contact centrado">
      <h2 className="section-title white pt4  ">Contact</h2>
      <div className=" f3 white" >
        <p className="contact-wrapper__text lh-copy">
          Xavier Arce
          <br/>
          Ready To Work
          <br/>
          Available
        </p>
        <a
          rel="noreferrer"
          target="_blank"
          className="f6 link dim ba bw2 mb4 ph3 pv2 mb2 dib white"
          href="mailto:xavierarce54321@gmail.com"
          >Call to Action
        </a>
      </div>
    </div>
  </section>
  );
};

export default Contact;
