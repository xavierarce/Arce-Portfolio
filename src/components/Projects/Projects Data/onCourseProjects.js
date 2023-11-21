import Ecommerce from '../ProjectImages/ECommerce.png';

import ReactJs from '../ICONS/React.png'
import JS from '../ICONS/JS.png'
import Firebase from '../ICONS/Firebase.png'
import GraphQL from '../ICONS/GraphQL_Logo.png'
import TypeScript from '../ICONS/Typescript.png'

const iconsProjectEC=[ReactJs,JS,Firebase,GraphQL,TypeScript];


const onCourseProjects=[
    {
      className: 'EC',
      title: 'Arce Crown Site',
      description: [
        'React, Firebase, Redux Saga, Hooks, GraphQL, TypeScript.',
        'Utilisation de Redux pour la gestion de l\'état et paiements via Stripe.',
        'Progressive Web App (PWA) et tests.',
      ],
      skills: iconsProjectEC,
      abilities: 'ReactJs Firebase Javascrip GraphQL TypeScript',
      liveLink: 'https://arce-crown-site.netlify.app/',
      image: Ecommerce,
    },
    // Add more projects as needed
  ];


export default onCourseProjects