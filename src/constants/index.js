import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  iq,
  digitalOcean,
  solidity,
  blockchain,
  vercel,
  trackersy,
  bitapods,
  hawkershut,
  gdsc,
  open,
  admin,
  manage,
  chemcon,
  holopin,
  h4b,
  hh,
  aaro,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work/Projects",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "achievements",
    title: "Achievements",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Blockchain Developer",
    icon: blockchain,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "Solidity",
    icon: solidity,
  },
  {
    name: "Vercel",
    icon: vercel,
  },
  {
    name: "Digital Ocean",
    icon: digitalOcean,
  },
];

const experiences = [
  {
    title: "MERN stack Developer and Founder's Office Intern",
    company_name: "Iq Apex Labs",
    icon: iq,
    iconBg: "#383E56",
    date: "December 2022 - April 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Projects represented in nasscom and bengal chambers(reputed start-up pitching events).",
    ],
  },
  {
    title: "Backend Developer",
    company_name: "GDSC Heritage Institute of Technology",
    icon: gdsc,
    iconBg: "#383E56",
    date: "August 2023 - Ongoing",
    points: [      
      "Took sessions backend development and handson backend workshop with myself as the speaker",
      "Organizing and managing events for the community.",
      "Contributing to open source projects.",
      "Working on projects with the community.",
      "Conducting workshops and sessions.",      
    ],
  },
  {
    title: "Contributor",
    company_name: "Open Source",
    icon: open,
    iconBg: "#383E56",
    date: "August 2022 - Ongoing",
    points: [      
      "Contributing to open source projects.",
      "Working on projects with the community.",
    ],
  },
];
const achieve = [
  {
    title: "Winner Best Backend Project By PostMan",
    company_name: "Hack4Bengal 2.0",
    icon: h4b,
    iconBg: "#383E56",
    date: "July, 2023",
    points: [
      "Selected as the best backend project by postman out of 100+ other projects.",
    ],
  },
  {
    title: "Winner Best Blockchain Project By Shardeum",
    company_name: "Hack4Bengal 2.0",
    icon: h4b,
    iconBg: "#383E56",
    date: "July, 2023",
    points: [      
      "Selected as the best blockchain project by postman out of 100+ other projects.",      
    ],
  },
  {
    title: "Contributor @Hacktoberfest '22, @Gssoc'23, @Hacktoberfest'23",
    company_name: "Open Source",
    icon: holopin,
    iconBg: "#383E56",
    date: "Since August 2022",
    points: [
      "Contributing to open source projects.",
    ],
  },
  {
    title: "4th at HackHeritage 1.0",
    company_name: "HackHeritage 1.0,Heritage Institute of Technology",
    icon: hh,
    iconBg: "#383E56",
    date: "September,2023",
    points: [      
      "Top 4 out of 120+ teams",
    ],
  },
  {
    title: "Finalists",
    company_name: "HackOverFlow 6.0 at NIT Durgapur",
    icon: aaro,
    iconBg: "#383E56",
    date: "March 2023",
    points: [      
      "Top 5 out of 50+ teams",
    ],
  },
  {
    title: "Finalists",
    company_name: "Spyder Hackathon at UEMK",
    icon: open,
    iconBg: "#383E56",
    date: "May 2022",
    points: [      
      "Top 10 out of 30+ teams",
    ],
  },
];

const testimonials = [
  // {
  //   testimonial:
  //     "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
  //   name: "Sara Lee",
  //   designation: "CFO",
  //   company: "Acme Co",
  //   image: "https://randomuser.me/api/portraits/women/4.jpg",
  // },
  // {
  //   testimonial:
  //     "I've never met a web developer who truly cares about their clients' success like Rick does.",
  //   name: "Chris Brown",
  //   designation: "COO",
  //   company: "DEF Corp",
  //   image: "https://randomuser.me/api/portraits/men/5.jpg",
  // },
  // {
  //   testimonial:
  //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //   name: "Lisa Wang",
  //   designation: "CTO",
  //   company: "456 Enterprises",
  //   image: "https://randomuser.me/api/portraits/women/6.jpg",
  // },
];

const projects = [
  {
    name: "Trackersy",
    description:
      "Web-based platform that allows users to create there income, expense and investment portfolio where stock data gets updated live at realtime data.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "AUTH0",
        color: "green-text-gradient",
      },
      {
        name: "nse-api",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "blue-text-gradient",
      },
    ],
    image: trackersy,
    source_code_link: "https://trackersyv1.onrender.com",
  },
  {
    name: "Go Local",
    description:
      "Decentralized E-commerce platform with real time location tracking(made for local Thelawalas).Features: Real time location tracking, Defi, Decentralized rating, Clean ui ux, responsiveness, admin side, filter system, faq chat-bot contact us form and video walkthrough to help users have asy access  .",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "mapbox",
        color: "pink-text-gradient",
      },
      {
        name: "solidity",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "blue-text-gradient",
      },
      {
        name: "web3",
        color: "pink-text-gradient",
      },
    ],
    image: hawkershut,
    source_code_link: "https://evendorl.onrender.com/",
  },
  {
    name: "Chingari clone",
    description:
      "Decentralized social media platform where users can post and like posts and also tip the creators. Now creators can list their videos as NFTS and NFT buyers will be able to get the profit share of the revenue the video generates.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "AUTH0",
        color: "green-text-gradient",
      },
      {
        name: "Solidity",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "blue-text-gradient",
      },
      {
        name: "Pinata",
        color: "pink-text-gradient",
      },
      {
        name: "truffle",
        color: "blue-text-gradient",
      },
      {
        name: "web3",
        color: "pink-text-gradient",
      },
    ],
    image: trackersy,
    source_code_link: "https://trackersyv1.onrender.com",
  },
  {
    name: "7's Drive",
    description:
      "Decentralized google drive.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "AUTH0",
        color: "green-text-gradient",
      },
      {
        name: "Solidity",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "blue-text-gradient",
      },
      {
        name: "Pinata",
        color: "pink-text-gradient",
      },
      {
        name: "truffle",
        color: "blue-text-gradient",
      },
      {
        name: "web3",
        color: "pink-text-gradient",
      },
    ],
    image: trackersy,
    source_code_link: "https://trackersyv1.onrender.com",
  },
  {
    name: "Chemcon2023 portal",
    description:
      "A portal made for iiche by GDSC hitk(where I contributed as the backend developer) for the chemcon2023 event",
    tags: [
      {
        name: "Next.JS",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "auth0",
        color: "pink-text-gradient",
      },
      {
        name: "Auth0",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "blue-text-gradient",
      },
    ],
    image: chemcon,
    source_code_link: "https://chemcon.co.in",
  },
  {
    name: "Managewise clone",
    description:
      "A clone of the managewise website",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: manage,
    source_code_link: "https://managewise.onrender.com",
  },
  {
    name: "Admin Dashboard",
    description:
      "Admin dashboard made by me when I was learning web development",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "rest api",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
    ],
    image: admin,
    source_code_link: "https://adminhq.onrender.com",
  },
  {
    name: "47Bita Pods",
    description:
      "Web application for a real estate company.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: bitapods,
    source_code_link: "https://github.com/7twik",
  },
];

export { services, technologies, experiences, testimonials, projects, achieve };
