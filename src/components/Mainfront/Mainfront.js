import React from "react";
import "./Mainfront.css";
import MainfrontInfo from "./MainfrontInfo";
import InfoMainfornt from "./ContactMainfront";

const Mainfront = () => {
  return (
      <div style={{height:'100vh'}}>
      <InfoMainfornt />
      <MainfrontInfo/>
      </div>
  );
};

export default Mainfront;
