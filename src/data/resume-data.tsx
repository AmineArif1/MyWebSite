import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  RamLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Amine EL ARIF",
  initials: "",
  location: "Aubière, France",
  locationLink: "https://maps.app.goo.gl/i3yKrTU31yP89q9Q8",
  about:
    "Full Stack and Security Engineering Student. I am passionate about building products that solve real problems. I am currently looking for a 6-month internship starting in March 2024. ",
  summary:
    "As a Security and Full Stack Engineering student with expertise in Node.js, React, Angular and Spring boot, I've led projects from inception to implementation. My focus on robust development and security measures sets me apart. Now, I'm eager to contribute to open-source projects, leveraging my skills and fostering collaboration within the development community.",
  avatarUrl: "https://perso.limos.fr/~amelarif/irlMeBlackWhite.jpg",
  personalWebsiteUrl: "",
  contact: {
    email: "amine.el_arif@etu.isima.fr",
    tel: "+33749818328",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/AmineArif1",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/elarif-amine/",
        icon: LinkedInIcon,
      }
    ],
  },
  education: [
    {
      school: "ISIMA Clermont Auverge INP",
      degree: "Engineering Degree in Computer Science (Equivalent to Master's Degree)",
      start: "2023",
      end: "2025",
    },
    {
      school: "ENSAM (Ecole Nationale Supérieure d'Arts et Métiers de Casablanca)",
      degree: "Engineering Degree in Computer Science (Equivalent to Master's Degree)",
      start: "2023",
      end: "2019",
    }
  ],
  work: [
    {
      company: "Royal Air Maroc",
      link: "https://www.royalairmaroc.com/",
      badges: ["Internship"],
      title: "Full Stack Developer",
      logo: RamLogo,
      start: "2021",
      end: "2024",
      description:
        "Developed a web application for the management of the company's internal documents. Technologies: React, ExpressJS, MYSQL",
    }
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Angular",
    "Node.js",
    "MYSQL",
    "MongoDB",
    
  ],
  projects: [
    {
      title: "Flights Management",
      techStack: [
        "Spring MVC",
        "Spring boot",
        "Spring Security",
        "MySQL",
      ],
      description: "Design and developpement of a flight management application",
      logo: ConsultlyLogo,
      link: {
        label: "github.com",
        href: "https://github.com/AmineArif1/Flight-Management/tree/main",
      },
    },
    {
      title: "Donation Management",
      techStack: ["Laravel","Angular","MySQL"],
      description:
        "Design and developpement of a donation management application",
     
      link: {
        label: "github.com",
        href: "https://github.com/AmineArif1/Donation-Management",
      },
    },
    {
      title: "Quality management system",
      techStack: ["React","JWT", "ExpressJS", "MySQL"],
      description:
        "Design and development of a web application for managing the ISO 9001 quality management system.",
  
      link: {
        label: "github.com",
        href: "https://github.com/AmineArif1/SMQ-new",
      },
    },
    {
      title: "World Cup 2023",
      techStack: ["React", "Cloudflare workers"],
      description:
        "ReactJS App for world cup 2023",
      logo: Minimal,
      link: {
        label: "github.com",
        href: "https://github.com/AmineArif1/WorldCupApp",
      },
    },
  
  ],
} as const;
