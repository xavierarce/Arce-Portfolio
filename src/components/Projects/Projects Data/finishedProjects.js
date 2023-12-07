import ReactJs from "../ICONS/React.png";
import JS from "../ICONS/JS.png";
import MySQL from "../ICONS/MySQL.png";
import Node from "../ICONS/Node.js.png";
import CSS3 from "../ICONS/CSS3.png";
import RoboFriends from "../ProjectImages/RoboFriends.png";
import LinearGradient from "../ProjectImages/LinearGradient.png";
import SmartBrain from "../ProjectImages/SmartBrain.png";
import Ecommerce from "../ProjectImages/ECommerce.png";
import Firebase from "../ICONS/Firebase.png";
import GraphQL from "../ICONS/GraphQL_Logo.png";
import RRouter from "../ICONS/RRouter.png";


const iconsProjectEC = [ReactJs, RRouter, Firebase, GraphQL];
const iconsProjectSB = [JS, ReactJs, MySQL, Node];
const iconsProjectRF = [JS, ReactJs];
const iconsProjectLG = [JS, CSS3];

const finishedProjects = [
  {
    className: "EC",
    title: "Arce Crown Site",
    description: [
      "React, Firebase, Redux Saga, Hooks, GraphQL",
      "Utilisation de Redux pour la gestion de l'état et paiements via Stripe.",
      "Progressive Web App (PWA) et tests.",
    ],
    skills: iconsProjectEC,
    abilities: "Firebase Javascrip GraphQL React Router TypeScript",
    liveLink: "https://arce-crown-site.netlify.app/",
    image: Ecommerce,
  },
  {
    className: "SB",
    title: "SmartBrain",
    description: [
      "Front-end developed in React, providing an intuitive and attractive User Interface (UI).",
      "Integration of an Image Recognition API for accurate recognition.",
      "Back-end implemented with Node.js and Express, including a custom server.",
      "Usage of a database to store information of registered users and faces.",
      "Implementation of a secure authentication system to access the application.",
    ],
    skills: iconsProjectSB,
    abilities: "JavaScript ReactJS PostgreSQL NodeJs",
    liveLink: "https://xavierarce.github.io/FACEDETECTOR-APP/",
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
    image: LinearGradient,
  },
  // Add more projects as needed
];

export default finishedProjects;
