import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    java,
    html,
    css,
    hibernate,  
    mysql,
    linux,
    vr,
    git,
    spring,
    carrent,
    jobit,
    tripguide,
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
      title: "Java Developer",
      icon: web,
    },
    {
      title: "Spring Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Web Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "Java",
      icon: java,
    },
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
      name: "my-sql",
      icon: mysql,
    },
    {
      name: "Spring",
      icon: spring,
    },
    {
      name: "Linux",
      icon: linux,
    },
    {
      name: "Hibernate",
      icon: hibernate,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "Software Developer Intern",
      company_name: "V.R. Telepresent pvt. ltd.",
      icon: vr,
      iconBg: "#383E56",
      date: "January 2023 - Febrary 2023",
      points: [
        " Software applications using Java and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Participating in testing Application and providing constructive feedback to other developers.",
      ],
    },
    // {
    //   title: "React Native Developer",
    //   company_name: "Tesla",
    //   icon: tesla,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2021 - Feb 2022",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "Web Developer",
    //   company_name: "Shopify",
    //   icon: shopify,
    //   iconBg: "#383E56",
    //   date: "Jan 2022 - Jan 2023",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Open Source Chat",
      description:
        "Spring Boot based web-Application platform that allows users to Chat with the users available online on that. No need of additional Information just log in using name.",
      tags: [
        {
          name: "Spring",
          color: "green-text-gradient",
        },
        {
          name: "web-Sockets",
          color: "blue-text-gradient",
        },
        {
          name: "Xml",
          color: "orange-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/akash-321/Open_Source_Chat",
    },
    {
      name: "Crypto price Tracker",
      description:
        "Mobile application that enables users to search for job latest Cryptos, view the live graph of the crypto from 1 Min to 1 Mon, and add that crypto in Watchlist for future analysis.",
      tags: [
        {
          name: "Kotlin",
          color: "blue-text-gradient",
        },
        {
          name: "XML",
          color: "orange-text-gradient",
        },
        {
          name: "API",
          color: "green-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/akash-321/Crypto-Price-Tracker",
    },
    {
      name: "THE Metro App",
      description:
        "Developed a command-line interface (CLI) application to efficiently find the shortest path between any two Delhi Metro stations, aiding commuters in navigating the extensive Delhi Metro network.",
      tags: [
        {
          name: "Java",
          color: "blue-text-gradient",
        },
        {
          name: "Data Structure",
          color: "green-text-gradient",
        },
        {
          name: "Algorithums",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/akash-321/THE-METRO-APP",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  