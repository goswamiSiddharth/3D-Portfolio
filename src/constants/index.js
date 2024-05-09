import { NCR } from "../assets/images";
import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  youtube,
  typescript,
  docker,
  springboot,
  java,
  todo,
  unsplash
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },

  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },

  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: docker,
    name: "DOCKER",
    type: "Container",
  },
  {
    imageUrl: springboot,
    name: "SPRING BOOT",
    type: "Backend",
  },
  {
    imageUrl: java,
    name: "JAVA",
    type: "OOPS",
  },
];

export const experiences = [
  {
    title: "Railway Communication Systems Intern",
    company_name: "North Central Railway",
    icon: NCR,
    iconBg: "#accbe1",
    date: "Jun 2023 - Jul 2023",
    points: [
      "Assisting in the maintenance and troubleshooting of communication systems used in railway operations, such as radio communication, signaling systems, and control systems.",
      "Participating in the installation and testing of electronic equipment used for train control and management, including sensors, actuators, and communication devices.",
      "Engaging in on-the-job training sessions and workshops to enhance technical skills and knowledge of railway communication systems, safety protocols, and industry standards.",
      "Communicating effectively with team members and stakeholders to coordinate project activities, report progress, and address any challenges encountered during the internship.",
    ],
  },
  //   {
  //     title: "React Native Developer",
  //     company_name: "Tesla",
  //     icon: tesla,
  //     iconBg: "#fbc3bc",
  //     date: "Jan 2021 - Feb 2022",
  //     points: [
  //       "Developing and maintaining web applications using React.js and other related technologies.",
  //       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //       "Implementing responsive design and ensuring cross-browser compatibility.",
  //       "Participating in code reviews and providing constructive feedback to other developers.",
  //     ],
  //   },
  //   {
  //     title: "Web Developer",
  //     company_name: "Shopify",
  //     icon: shopify,
  //     iconBg: "#b7e4c7",
  //     date: "Jan 2022 - Jan 2023",
  //     points: [
  //       "Developing and maintaining web applications using React.js and other related technologies.",
  //       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //       "Implementing responsive design and ensuring cross-browser compatibility.",
  //       "Participating in code reviews and providing constructive feedback to other developers.",
  //     ],
  //   },
  //   {
  //     title: "Full stack Developer",
  //     company_name: "Meta",
  //     icon: meta,
  //     iconBg: "#a2d2ff",
  //     date: "Jan 2023 - Present",
  //     points: [
  //       "Developing and maintaining web applications using React.js and other related technologies.",
  //       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //       "Implementing responsive design and ensuring cross-browser compatibility.",
  //       "Participating in code reviews and providing constructive feedback to other developers.",
  //     ],
  //   },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/goswamiSiddharth",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/siddharth-goswami-30a118229",
  },
];

export const projects = [
  {
    iconUrl: youtube,
    theme: "btn-back-red",
    name: "Youtube Clone",
    description:
      "Implemented a YouTube clone using React.js, Material-UI, JavaScript, and RapidAPIs, showcasing proficiency in frontend development and API integration. Developed an intuitive user interface resembling YouTube's design, featuring key functionalities such as video playback, search, and recommendations. Leveraged Material-UI components for a responsive and visually appealing layout. Integrated RapidAPIs to fetch and display real-time video data, demonstrating competency in RESTful API usage and data manipulation. This project exemplifies strong skills in frontend development, UI design, and API integration within a modern web development stack.",
    link: "https://github.com/goswamiSiddharth/YoutubeClone",
  },
  {
    iconUrl: todo,
    theme: "btn-back-green",
    name: "TODO LIST ",
    description:
      "Elevating the classic todo list to new heights, this project merges the power of Next.js, Tailwind CSS, and drag-and-drop functionality to create a seamless and intuitive task management experience. Seamlessly crafted with a modern tech stack, this todo list application allows users to effortlessly add, delete, and mark tasks as complete, all while enjoying the fluidity of drag-and-drop interaction to prioritize their tasks.",
    link: "https://github.com/goswamiSiddharth/TODO-LIST",
  },
  // {
  //   iconUrl: car,
  //   theme: "btn-back-blue",
  //   name: "Car Finding App",
  //   description:
  //     "Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.",
  //   link: "https://github.com/adrianhajdin/project_next13_car_showcase",
  // },
  {
    iconUrl: unsplash,
    theme: "btn-back-pink",
    name: "Unsplash SearchBar",
    description:
      "Crafted with React.js and Unsplash API, my Unsplash search bar offers users seamless access to an extensive library of high-quality images. With its intuitive design and real-time updates, users can effortlessly explore, discover, and access stunning visuals for any project or inspiration. This dynamic search experience provides a frictionless gateway to an endless array of creative possibilities.",

    link: "https://github.com/goswamiSiddharth/unsplashImageSearchBar",
  },
  // {
  //   iconUrl: estate,
  //   theme: "btn-back-black",
  //   name: "Real-Estate Application",
  //   description:
  //     "Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.",
  //   link: "https://github.com/adrianhajdin/projects_realestate",
  // },
  // {
  //   iconUrl: summiz,
  //   theme: "btn-back-yellow",
  //   name: "AI Summarizer Application",
  //   description:
  //     "App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.",
  //   link: "https://github.com/adrianhajdin/project_ai_summarizer",
  // },
];
