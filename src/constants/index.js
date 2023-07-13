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
    horizon,
    threejs,
    Manzi,
    OlivierCeo,
    Hirwa,
    Anda,
    TiraCash,
    Health
  } from "../assets";


  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "UI DESIGNER",
      icon: web,
    },
    {
      title: "UX DESIGNER",
      icon: mobile,
    },
    {
      title: "GRAPHIC DESIGNER",
      icon: backend,
    },
    {
      title: "CONTENT CREATOR",
      icon: creator,
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
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
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
      name: "Three JS",
      icon: threejs,
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
  ];
  
  const experiences = [
    {
      title: "UI DESIGNER",
      company_name: "SOLVIT AFRICA ",
      icon: horizon,
      iconBg: "#383E56",
      date: "Feb 2023 - June 2023",
      points: [
        "Conducted user research to understand user needs, goals, and behaviors.",
        "Created user personas and user journey maps to guide design decisions.",
        "Developed wireframes, prototypes, and interactive mockups to visualize design concepts.",
        "Designed intuitive and user-friendly interfaces for websites, mobile apps, and other digital products. "
      ],
    },
   
    {
      title: "UI DESIGNER",
      company_name: "Techly ",
      icon: horizon,
      iconBg: "#E6DEDD",
      date: "June 2023 - Present",
      points: [
        "Collaborated with cross-functional teams, including developers, product managers, and stakeholders, to ensure design feasibility and alignment.",
        "Designing the UI of various websites using Figma for better User Experience (DX).",
        "Creating high-fidelity digital assets such as logos, icons, illustrations etc.",
        "Working closely with developers on improving product quality through testing.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Oscar proved me wrong.",
      name: "Olivier Nsabimana",
      designation: "CEO",
      company: "CloudSkale",
      image: OlivierCeo,
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Oscar does.",
      name: "Manzi Gandhi",
      designation: "UI/UX Engineer ",
      company: "CloudSkale",
      image: Manzi,
    },
    {
      testimonial:
        "After Oscar optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Hirwa Olivier",
      designation: "CEO",
      company: "Espoir Coffee",
      image: Hirwa,
    },
  ];
  
  const projects = [
    {
      name: "Anda Project",
      description:
        " Anda is a platform for businesses and people who are looking for services. It connects Services providers with Those who need services.",
      tags: [
        {
          name: "FIGMA",
          color: "blue-text-gradient",
        },
        {
          name: "ADOBE ILLUSTATOR",
          color: "green-text-gradient",
        },
        {
          name: "PHOTOSHOP",
          color: "pink-text-gradient",
        },
      ],
      image: Anda,
      source_code_link: "http://espoir.coffee.s3-website-us-east-1.amazonaws.com",
    },
    {
      name: "Tira Cash",
      description:
        "TiraCash is a Web and Mobile app that aims at facilitating people to access easy and flexible loans.",
      tags: [
        {
          name: "FIGMA",
          color: "blue-text-gradient",
        },
        {
          name: "ADOBE ILLUSTRATOR",
          color: "green-text-gradient",
        },
        {
          name: "PHOTOSHOP",
          color: "pink-text-gradient",
        },
      ],
      image: TiraCash,
      source_code_link: "https://www.figma.com/file/larpfiMQvKFobHedhuvXlH/Tira-cash?type=design&node-id=29-552&mode=design&t=jIuBlrkN32KXsfRt-0",
    },
    {
      name: "Wellbe Project",
      description:
        "Wellbe is a Web based application that helps users manage their daily lifestyle and health progress. It also enables them to book appointments with doctors in case of emergency.",
      tags: [
        {
          name: "ADOBE ILLUSTRATOR",
          color: "blue-text-gradient",
        },
        {
          name: "PHOTOSHOP",
          color: "green-text-gradient",
        },
        {
          name: "FIGMA",
          color: "pink-text-gradient",
        },
      ],
      image: Health,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };

