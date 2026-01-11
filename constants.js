import {
  Github,
  Linkedin,
  Mail,
  Code2,
  Database,
  Wrench,
  Terminal,
} from "lucide-react";

export const NAV_ITEMS = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const SKILLS = [
  // Languages
  { name: "C", category: "Languages" },
  { name: "Java", category: "Languages" },

  // Frontend
  { name: "HTML5", category: "Frontend" },
  { name: "CSS3", category: "Frontend" },
  { name: "JavaScript", category: "Frontend" },
  { name: "React.js", category: "Frontend" },

  // Backend
  { name: "Node.js", category: "Backend" },
  { name: "MongoDB", category: "Backend" },
  { name: "MySQL", category: "Backend" },

  // Tools
  { name: "Git & GitHub", category: "Tools" },
  { name: "Postman", category: "Tools" },
  { name: "VS Code", category: "Tools" },
];



export const PROJECTS = [
  {
    id: 6,
    title: "Chat Application",
    description:
      "A real-time chat application built using React, Node.js, MongoDB, and Socket.IO that enables instant messaging with a clean, responsive user interface.",
    image: "/assets/project5.png",
    tags: ["React", "Node.js", "MongoDB", "Socket.IO"],
    githubUrl: "https://github.com/Madhavimeka27",
    demoUrl: "#",
  },

  {
    id: 1,
    title: "To-Do Application",
    description:
      "A clean and functional Todo List application featuring task addition, deletion, and persistent state. Built using vanilla JavaScript to master DOM manipulation.",
    image: "/assets/project1.png",
    tags: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/Madhavimeka27",
    demoUrl: "#",
  },
  {
    id: 2,
    title: "Quiz App",
    description:
      "A dynamic quiz platform that tests user knowledge. Features score tracking, result analysis, and a smooth user interface.",
    image: "/assets/project2.png",
    tags: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/Madhavimeka27",
    demoUrl: "#",
  },
  {
    id: 3,
    title: "Kanban Dashboard",
    description:
      'A project management tool allowing users to organize tasks into "To Do", "In Progress", and "Done" columns. Efficient and responsive design.',
    image: "/assets/project3.png",
    tags: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/Madhavimeka27",
    demoUrl: "#",
  },
  {
    id: 4,
    title: "Fitness Club Website",
    description:
      "A clean, responsive gym landing page built with only HTML and CSS.",
    image: "/assets/project4.png",
    tags: ["HTML", "CSS"],
    githubUrl: "https://github.com/Madhavimeka27",
    demoUrl: "#",
  },

  {
    id: 6,
    title: "Resume ATS Checker",
    description:
      "A Resume ATS tool that analyzes resumes and provides feedback based on ATS-friendly rules to improve job application success.",
    image: "/assets/project6.png",
    tags: ["React", "JavaScript", "CSS"],
    githubUrl: "https://github.com/Madhavimeka27",
    demoUrl: "#",
  },
];

export const SOCIAL_LINKS = [
  { platform: "GitHub", url: "https://github.com/Madhavimeka27", icon: Github },
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/madhavi-meka-826a22291",
    icon: Linkedin,
  },
  { platform: "Email", url: "mailto:madhavimeka27@gmail.com", icon: Mail },
];

export const CATEGORY_ICONS = {
  Languages: Terminal,
  Frontend: Code2,
  Backend: Database,
  Tools: Wrench,
};
