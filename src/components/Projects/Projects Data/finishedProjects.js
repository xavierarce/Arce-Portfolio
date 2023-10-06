import ReactJs from '../ICONS/React.png'
import JS from '../ICONS/JS.png'
import MySQL from '../ICONS/MySQL.png'
import Node from '../ICONS/Node.js.png'
import CSS3 from '../ICONS/CSS3.png'
import RoboFriends from '../ProjectImages/RoboFriends.png';
import LinearGradient from '../ProjectImages/LinearGradient.png';
import SmartBrain from '../ProjectImages/SmartBrain.png';


const iconsProjectSB=[JS,ReactJs,MySQL,Node]
const iconsProjectRF=[JS,ReactJs]
const iconsProjectLG=[JS,CSS3]

const finishedProjects =[
    {
      className: 'SB',
      title: 'SmartBrain',
      description: [
        'Front-end developed in React, providing an intuitive and attractive User Interface (UI).',
        'Integration of an Image Recognition API for accurate recognition.',
        'Back-end implemented with Node.js and Express, including a custom server.',
        'Usage of a database to store information of registered users and faces.',
        'Implementation of a secure authentication system to access the application.',
      ],
      skills: iconsProjectSB,
      liveLink: 'https://xavierarce.github.io/FACEDETECTOR-APP/',
      image: SmartBrain,
    },
    {
      className: 'RF',
      title: 'RoboFriends',
      description: [
        'React Framework: Developed using React, allowing reusable components and efficient state management.',
        'Robot Directory: Displays robot cards with names, emails, and avatars.',
        'Real-Time Search: Instant search updates robot cards based on the search query.',
        'Fetching Data: Simulated data fetching from an external API for state management.',
        'Responsive Design: UI adapts seamlessly to different devices.',
        'Styling: CSS & Tachyons for a clean and modern appearance.',
      ],
      skills: iconsProjectRF,
      liveLink: 'https://my-friends-cards.netlify.app/',
      image: RoboFriends,
    },
    {
      className: 'LG',
      title: 'RGB Generator',
      description: [
        'Small experiment.',
        'Create random RGB color codes.',
        'Using Linear Gradient to style the background',
      ],
      skills: iconsProjectLG,
      liveLink: 'https://xavierarce.github.io/Random-Generator/',
      image: LinearGradient,
    },
    // Add more projects as needed
  ];


export default finishedProjects