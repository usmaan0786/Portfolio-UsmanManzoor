import react from "../Images/SkillsIcons/react.png";
import js from "../Images/SkillsIcons/js.png";
import redux from "../Images/SkillsIcons/redux.png";
import mongodb from "../Images/SkillsIcons/mongodb.png";
import mysql from "../Images/SkillsIcons/mysql.png";
import github from "../Images/SkillsIcons/github.png";
import contextApi from "../Images/SkillsIcons/contextApi.png";
import RestApi from "../Images/SkillsIcons/RestApi.png";
import html from "../Images/SkillsIcons/html.png";
import css from "../Images/SkillsIcons/css.png";
import tailwindCss from "../Images/SkillsIcons/tailwindCss.png";
import threejs from "../Images/SkillsIcons/threejs.png";
import bootstrap from "../Images/SkillsIcons/bootstrap.png";
import nodejs from "../Images/SkillsIcons/nodejs.png";
import expressjs from "../Images/SkillsIcons/expressjs.png";
import python from "../Images/SkillsIcons/python.png";
import php from "../Images/SkillsIcons/php.png";
import postman from "../Images/SkillsIcons/postman.png";
import canva from "../Images/SkillsIcons/canva.png";

import loginAuth, {
  homeAuth,
  signupAuth,
  aboutAuth,
  fyp1,
  fyp3,
  fyp4,
  fyp5,
  fyp2,
  f1,
  f2,
  f3,
  f4,
  f5,
  f6,
} from "../Images";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "technologies",
    title: "Technologies",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const services = [
  {
    title: "MERN Stack Development",
  },
  {
    title: "Frontend Development",
  },
  {
    title: "Backend Development",
  },
  {
    title: "Database Management",
  },
];

export const technologies = [
  {
    name: "Javascript",
    icon: js,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "php",
    icon: php,
  },
  {
    name: "React",
    icon: react,
  },
  {
    name: "Redux",
    icon: redux,
  },
  {
    name: "Node.js",
    icon: nodejs,
  },
  {
    name: "Expree.js",
    icon: expressjs,
  },
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "Tailwind CSS",
    icon: tailwindCss,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Three.js",
    icon: threejs,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "ContextAPI",
    icon: contextApi,
  },
  {
    name: "REST API",
    icon: RestApi,
  },
  {
    name: "Postman",
    icon: postman,
  },
  {
    name: "Canva",
    icon: canva,
  },
  {
    name: "Github",
    icon: github,
  },
];

export const projects = [
  {
    name: "FYP-Class Based Image Editing",
    Duration: "January 2023- December 2023",
    TechStack:
      "Python, GANs, cGANs Cycle GANs, Streamlit, Keras, Tensorflow, Jupyter Notebook, Ecommerce Dataset",
    category: "AI/ML",
    description: `We have introduced an approach for image editing that operates on human specified labels. When presented with an input image along 
    with labels, our model accurately follows these instructions to carry out edits.`,
    bullets: [
      {
        point: `We have introduced an approach for image editing that operates on human specified labels. When presented with an input image along
        with labels, our model accurately follows these instructions to carry out edits.`,
      },
      {
        point: ` To create our training dataset, we utilize Generative
        Adversarial Networks (GANs), specifically employing Conditional GANs and CycleGANs models. In this project, our primary focus revolves
        around manipulating colors, seamlessly transitioning between green, red, black, and blue tones. Our training dataset is composed of
        approximately 3000 images for each color class, sourced from our e-commerce datasets. The models undergo training to adeptly edit
        input images, generating precise and visually appealing outcomes. The editing process is guided by the conditioned label, ensuring a
        personalized approach for each color—be it green, red, black, or blue.`,
      },
    ],
    src: loginAuth,
    images: [
      {
        src: fyp1,
      },
      {
        src: fyp2,
      },
      {
        src: fyp3,
      },
      {
        src: fyp4,
      },
      {
        src: fyp5,
      },
    ],
    source_code: "https://github.com/usmaan0786/FYP-Class-Based-Image-Editing",
  },
  {
    name: "Dynamic AuthPortal",
    Duration: "January 2024- January 2024",
    TechStack: "React, Node.js, Express.js, MongoDB",
    category: "MERN",
    description: `In this project, I've leveraged the power of the MERN stack, incorporating MongoDB for data storage, Express.js and Node.js for the backend, and
    React.js for a dynamic and responsive frontend. Dynamic Home, About Us, and other pages User-friendly signup and login pages.`,
    bullets: [
      {
        point: `In this project, I've leveraged the power of the MERN stack, incorporating MongoDB for data storage, Express.js and Node.js for the backend, and React.js for a dynamic and responsive frontend. Dynamic Home, About Us, and other pages User-friendly signup and login pages.`,
      },
      {
        point: `Utilized REST API and POSTMAN for seamless. Utilized Fetch API for efficient data retrieval. Implemented routing for seamless navigation within
        the application.`,
      },
      {
        point: `Generated and stored JWT in the database. Stored the token in cookies for improved security.`,
      },
      {
        point: `Verified user identity through token in cookies. Token generation on user login.`,
      },
      {
        point: `Implemented login routes to control user access. Restricted access to home and about us pages for non-logged-in users.`,
      },
      {
        point: `Dynamic data rendering after user authentication.`,
      },
    ],
    src: loginAuth,
    images: [
      {
        src: loginAuth,
      },
      {
        src: signupAuth,
      },
      {
        src: aboutAuth,
      },
      {
        src: homeAuth,
      },
    ],
    source_code: "https://github.com/usmaan0786/MERN-Stack-Project-01",
  },
  {
    name: "Filmflare Movies",
    Duration: "December 2023 - December 2023",
    TechStack: "React, Redux, Tailwind CSS, TMDB API, Axios, Props, Hooks",
    category: "React",
    description: `This React project serves as an advanced movie exploration platform, leveraging the TMDB API. Users effortlessly navigate popular, top-rated, and upcoming movies, accessing detailed information like cast, genres, and personalized recommendations.`,
    bullets: [
      {
        point: `This React project serves as an advanced movie exploration platform, leveraging the TMDB API. Users effortlessly navigate popular, top-rated, and upcoming movies, accessing detailed information like cast, genres, and personalized recommendations.
        `,
      },
      {
        point: `The application features dynamic actor pages with biographies and a carefully curated filmography. 
       `,
      },
      {
        point: ` Its precise search functionality enhances user interaction.
       `,
      },
      {
        point: ` Redux and React hooks (useState, useEffect, useParams) efficiently manage states for a seamless user experience.
       `,
      },
      {
        point: ` Crafted with Tailwind CSS, the interface is stylish and responsive.
       `,
      },
      {
        point: ` Real-time TMDB API integration ensures comprehensive and up-to-date movie details. Redux and React Router contribute to smooth component interaction and seamless navigation across pages.`,
      },
    ],
    src: loginAuth,
    images: [
      {
        src: f1,
      },
      {
        src: f2,
      },
      {
        src: f3,
      },
      {
        src: f4,
      },
      {
        src: f5,
      },
      {
        src: f6,
      },
    ],
    source_code:
      "https://github.com/usmaan0786/React-FilmFlare-Movie-Application",
  },
];
