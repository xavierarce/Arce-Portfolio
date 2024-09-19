import ReactJs from "../ICONS/React.png";
import JS from "../ICONS/JS.png";
import PostgreSQL from "../ICONS/PostgreSQL.png";
import Node from "../ICONS/Node.js.png";
import CSS3 from "../ICONS/CSS3.png";
import RoboFriends from "../ProjectImages/RoboFriends.png";
import LinearGradient from "../ProjectImages/LinearGradient.png";
import SmartBrain from "../ProjectImages/SmartBrain.png";
import Ecommerce from "../ProjectImages/ECommerce.png";
import SpaceAPIProject from "../ProjectImages/Space API Project.png";
import HogarSeguro from "../ProjectImages/HogarSeguro.png";
import Firebase from "../ICONS/Firebase.png";
// import GraphQL from "../ICONS/GraphQL_Logo.png";
import RRouter from "../ICONS/RRouter.png";
import MongoDB from "../ICONS/MongoDB.png";
import Express from "../ICONS/NodeExpress.png";
import NodeJS from "../ICONS/Node.js.png";

import Jest from "../ICONS/Jest.png";

const iconsProjectHS = [MongoDB, ReactJs, Node, Jest, RRouter];
const iconsProjectEC = [ReactJs, RRouter, Firebase];
const iconsProjectSB = [JS, ReactJs, PostgreSQL, Node];
const iconsProjectRF = [JS, ReactJs];
const iconsProjectLG = [JS, CSS3];
const iconsProjectSAP = [MongoDB, NodeJS, Jest, Express];

const finishedProjects = [
  {
    className: "HS",
    title: "HogarSeguro - MERN stack",
    description: [
      "MERN Stack",
      "ReactJs, NodeJs, MongoDB, Jest, React Router",
      "Développement Full-Stack, expérience utilisateur fluide, gestion efficace en agence.",
    ],
    skills: iconsProjectHS,
    abilities: "ReactJs Javascrip React Router NodeJS MongoDB",
    liveLink: "https://hogarseguro.netlify.app/",
    codeLink: "https://github.com/xavierarce/Front-Web-App",
    image: HogarSeguro,
  },
  {
    className: "SAP",
    title: "Space API Project - MERN stack",
    description: [
      "Node.js, Express, Jest, React Router",
      "Optimisation des Meilleures Pratiques",
      "Tests avec Jest et SuperTest",
      "Utilisation de Morgan pour le suivi des événements",
      "MongoDB",
    ],
    skills: iconsProjectSAP,
    abilities: "NodeJS Jest Express ReactJs React Router Mongodb",
    codeLink: "https://github.com/xavierarce/SpaceProject",
    image: SpaceAPIProject,
  },
  {
    className: "EC",
    title: "Arce Crown Site - Firebase Firestore",
    description: [
      "React, Firebase, Redux Saga, Hooks",
      "Utilisation de Redux pour la gestion de l'état et paiements via Stripe.",
      "Progressive Web App (PWA) et tests.",
    ],
    skills: iconsProjectEC,
    abilities: "Firebase Javascrip GraphQL React Router TypeScript",
    liveLink: "https://arce-crown-site.netlify.app/",
    codeLink: "https://github.com/xavierarce/OnlineStore",
    image: Ecommerce,
  },
  {
    className: "SB",
    title: "SmartBrain - PERN Stack",
    description: [
      "Front-end React offrant une UI intuitive.",
      "Intégration API avec NodeJS/Express",
      "Utilisation de PostgreSQL pour stocker les données",
      "Authentification sécurisée mise en place.",
    ],
    skills: iconsProjectSB,
    abilities: "JavaScript ReactJS PostgreSQL NodeJs",
    liveLink: "https://facerrecogntion.onrender.com/",
    codeLink: "https://github.com/xavierarce/FaceDetectorFront",
    image: SmartBrain,
  },
  {
    className: "RF",
    title: "RoboFriends",
    description: [
      "React Framework: Developed using React, allowing reusable components and efficient state management.",
      "Robot Directory: Displays robot cards with names, emails, and avatars.",
      "Real-Time Search: Instant search updates robot cards based on the search query.",
      "Fetching Data: Simulated data fetching from an external API for state management.",
      "Responsive Design: UI adapts seamlessly to different devices.",
      "Styling: CSS & Tachyons for a clean and modern appearance.",
    ],
    skills: iconsProjectRF,
    abilities: "JavaScript ReactJS",
    liveLink: "https://my-friends-cards.netlify.app/",
    codeLink: "https://github.com/xavierarce/my-friends-2 ",
    image: RoboFriends,
  },
  {
    className: "LG",
    title: "RGB Generator",
    description: [
      "Small experiment.",
      "Create random RGB color codes.",
      "Using Linear Gradient to style the background",
    ],
    skills: iconsProjectLG,
    abilities: "JavaScript CSS3",
    liveLink: "https://xavierarce.github.io/Random-Generator/",
    codeLink: "https://github.com/xavierarce/Random-Generator",
    linkText: "See Live",
    image: LinearGradient,
  },
  // Add more projects as needed
];

export default finishedProjects;
