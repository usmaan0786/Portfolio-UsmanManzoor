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
  f5,
  f6,
  S1,
  S2,
  S3,
  S4,
  S5,
  S6,
  S7,
  S8,
  S9,
  S10,
  t1,
  t2,
  t3,
  t4,
  t5,
  t6,
  t7,
  c1,
  c2,
  c3,
  c4,
  c5,
  l1,
  l2,
  l3,
  l4,
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
    name: "Class Based Image Editing",
    Duration: "Jan 2023- Dec 2023",
    TechStack:
      "Python, GANs, cGANs Cycle GANs, Streamlit, Keras, Tensorflow, Jupyter Notebook, Ecommerce Dataset",
    category: "AI/ML",
    description: `We have introduced an approach for image editing that operates on human specified labels. When presented with an input image
    along with labels, our model accurately follows these instructions to carry out edits. We utilize Generative Adversarial Networks (GANs),
    specifically employing Conditional GANs and CycleGANs models. In this project, our primary focus revolves around manipulating
    colors, seamlessly transitioning between green, red, black, and blue tones.`,
    bullets: [
      {
        point: `We have introduced an approach for image editing that operates on human specified labels. When presented with an input image
        along with labels, our model accurately follows these instructions to carry out edits. We utilize Generative Adversarial Networks (GANs),
        specifically employing Conditional GANs and CycleGANs models. In this project, our primary focus revolves around manipulating
        colors, seamlessly transitioning between green, red, black, and blue tones.
        `,
      },
      {
        point: ` Our training dataset is composed of approximately 3000 images for each color class, sourced from our e-commerce datasets.
        `,
      },
      {
        point: `The models undergo training to adeptly edit input images, generating precise and visually appealing outcomes.
        `,
      },
      {
        point: `The editing process is guided by the conditioned label, ensuring a personalized approach for each color—be it green, red, black, or
      blue.`,
      },
    ],
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
    TechStack:
      "React, Node.js, Express.js, MongoDB, TMDB API, Cookies, JWT, Authorization, Authentication",
    category: "MERN",
    description: `In this project, I've leveraged the power of the MERN stack, incorporating MongoDB for data storage, Express.js and Node.js for the backend, and
    React.js for a dynamic and responsive frontend. Dynamic Home, About Us, and other pages User-friendly signup and login pages.`,
    bullets: [
      {
        point: `Created dynamic pages like Home and About Us, along with easy-to-use signup and login pages.`,
      },
      {
        point: `Tested and retrieved data seamlessly using REST API with POSTMAN and Fetch API.`,
      },
      {
        point: `Implemented smooth navigation through routing within the app`,
      },
      {
        point: `Stored user data securely in an online database during registration, using bcryptjs for password encryption.`,
      },
      {
        point: `Enabled secure authentication using JWT, with tokens stored in cookies for added security.`,
      },
      {
        point: `Controlled user access with login routes, restricting non-logged-in users from accessing certain pages like Home and About Us. Rendered
        data dynamically after user authentication`,
      },
    ],
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
        point: ` Real-time TMDB API integration ensures comprehensive and up-to-date movie details. Redux and React Router contribute to smooth component interaction and seamless navigation across pages.`,
      },
    ],
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
        src: f5,
      },
      {
        src: f6,
      },
    ],
    source_code:
      "https://github.com/usmaan0786/React-FilmFlare-Movie-Application",
  },
  {
    name: "Tour & Travel Website",
    Duration: "Oct 2023 - Nov 2023",
    TechStack: "React, Redux, Tailwind CSS, CRUD, REST API, Props, Hooks",
    category: "React",
    description: `This react based projects offers dynamic navigation system. A destinations page populated with data fetched from an API, an admin page to facilitate CRUD operations, an intuitive create pop-up to expand the list of destinations, and an efficient edit destinations page with a delete function.
    `,
    bullets: [
      {
        point: `This react based projects offers dynamic navigation system. A destinations page populated with data fetched from an API, an admin page to facilitate CRUD operations, an intuitive create pop-up to expand the list of destinations, and an efficient edit destinations page with a delete function.
        `,
      },
    ],
    images: [
      {
        src: t1,
      },
      {
        src: t2,
      },
      {
        src: t3,
      },
      {
        src: t4,
      },
      {
        src: t5,
      },
      {
        src: t6,
      },
      {
        src: t7,
      },
    ],
    source_code:
      "https://github.com/usmaan0786/React-Redux-TourAndTravel-Website/tree/main",
  },

  {
    name: "Ecommerce Store",
    Duration: "Sept 2023 - Oct 2023",
    TechStack: "React, Tailwind CSS, API, Axios, Context API, Props, Hooks",
    category: "React",
    description: `The react-based ecommerce website offers seamless online shopping, featuring key pages like Home, About, Products, Contact, and Add
    to Cart for a comprehensive user experience.
    `,
    bullets: [
      {
        point: `The react-based ecommerce website offers seamless online shopping, featuring key pages like Home, About, Products, Contact, and Add
        to Cart for a comprehensive user experience.
        `,
      },
      {
        point: `Project features a captivating Home Page with a dynamic hero section showcasing top featured items and services.
 
       `,
      },
      {
        point: `The Products Page offers easy navigation through a sidebar, enabling users to search by various criteria such as companies, categories,
        price range and discover products efficiently. It displays items in a visually appealing grid format for easy comparison.
 
       `,
      },
      {
        point: ` The Contact Page allows users to connect with the platform for inquiries or feedback.

       `,
      },
      {
        point: `The Add to Cart Page streamlines the checkout process by summarizing selected items and providing options for management before
        finalizing orders`,
      },
    ],
    images: [
      {
        src: S1,
      },
      {
        src: S2,
      },
      {
        src: S3,
      },
      {
        src: S4,
      },
      {
        src: S5,
      },
      {
        src: S6,
      },
      {
        src: S7,
      },
      {
        src: S8,
      },
      {
        src: S9,
      },
      {
        src: S10,
      },
    ],
    source_code:
      "https://www.linkedin.com/posts/usman-manzoor-a4b89827a_presenting-you-my-new-react-e-commerce-activity-7109553873882628096-pxvi?utm_source=share&utm_medium=member_desktop",
  },
  {
    name: "Crave for Bite",
    Duration: "Oct 2023 - Oct 2023",
    TechStack: "React, Tailwind CSS, fetchAPI, Context API, Props, Hooks",
    category: "React",
    description: `Project contains top section, navbar, slider that displays a variety of food images, quick delivery services, top picks This contains list of the app's top-rated food items, meals that contains a list of food categories. When a category is clicked, it shows a list of the corresponding food items.
    `,
    bullets: [
      {
        point: `Navbar: This is the top section of the app and it contains the app name, and search bar and a Button of add to cart. The navbar is responsive and changes its layout depending on the screen size.
        `,
      },
      {
        point: `Quick Delivery: This section contains text that promotes the app's quick delivery service.
 
       `,
      },
      {
        point: `Top Picks: This section displays a list of the app's top-rated food items.
 
       `,
      },
      {
        point: `Meals: This section contains a list of food categories. When a category is clicked, it shows a list of the corresponding food items.
        `,
      },
      {
        point: `Design: I will employ Tailwind CSS to give the website a sleek ,modern look and a Responsive Design.
 
       `,
      },
      {
        point: `Functionality: React, along with some incredible hooks like useState for manage the state of the app, such as the current navbar state, useEffect for used to run side effects, such as fetching data, useReducer for managing the most complex state which powers the dynamic features.
 
       `,
      },
    ],
    images: [
      {
        src: c1,
      },
      {
        src: c2,
      },
      {
        src: c3,
      },
      {
        src: c4,
      },
      {
        src: c5,
      },
    ],
    source_code:
      "https://github.com/usmaan0786/React-Food-Ordering-App-CraveForBite",
  },
  {
    name: "ToDo List",
    Duration: "Aug 2023 - Aug 2023",
    TechStack: "React, CSS, Props, Hooks",
    category: "React",
    description: `A to-do list web app is a tool that allows users to create and manage lists of products, tasks or activities that they need to complete. The app typically provides a simple and intuitive interface for users to create new tasks, set due dates, add notes or descriptions.
    `,
    bullets: [
      {
        point: `A to-do list web app is a tool that allows users to create and manage lists of products, tasks or activities that they need to complete. The app typically provides a simple and intuitive interface for users to create new tasks, set due dates, add notes or descriptions.x
        `,
      },
    ],
    src: loginAuth,
    images: [
      {
        src: l1,
      },
      {
        src: l2,
      },
      {
        src: l3,
      },
      {
        src: l4,
      }
    ],
    source_code:
      "https://www.linkedin.com/posts/usman-manzoor-a4b89827a_presenting-you-my-new-react-e-commerce-activity-7109553873882628096-pxvi?utm_source=share&utm_medium=member_desktop",
  },
];
