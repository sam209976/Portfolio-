import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  threejs,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Chatbot Automation Expert",
    icon: mobile,
  },
  {
    title: "UI/UX Designer",
    icon: backend,
  },
  {
    title: "Lead Gen Strategist",
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
];

const experiences = [
  {
    title: "V2C.AI – Chatbot Development & Automation",
    company_name: "Freelance",
    icon: web,
    iconBg: "#E6DEDD",
    date: "2024 - Present",
    points: [
      "Customized and integrated AI chatbots for client websites.",
      "Handled end-to-end domain setup, hosting, email configuration, SEO.",
      "Created pitch decks, client-specific bots, and lead generation funnels.",
      "Integrated analytics, WhatsApp API, and lead capture systems.",
    ],
  },
  {
    title: "Technical Support – Optus",
    company_name: "[24]7.ai",
    icon: backend,
    iconBg: "#383E56",
    date: "2023 - 2024",
    points: [
      "Resolved device/service issues for Optus (Australia).",
      "Delivered customer satisfaction through accurate troubleshooting.",
      "Maintained clear logs and escalated priority cases.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Sameer's bot helped us track customer orders and automate responses. We saw a 30% drop in manual queries.",
    name: "Mike Bags",
    designation: "Founder",
    company: "mikebags.com",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
];

const projects = [
{
  name: "V2C.AI Business",
  description: "Designed and deployed chatbot-based automation systems for clients...",
  tags: [
    { name: "chatling", color: "blue-text-gradient" },
    { name: "zapier", color: "green-text-gradient" },
  ],
},
  {
    name: "Smart Water Dispenser",
    description:
      "Sensor-based dispenser activates when a glass is placed below. Tested and validated to reduce water waste.",
    tags: [
      { name: "sensors", color: "green-text-gradient" },
      { name: "testing", color: "blue-text-gradient" },
    ],
    
  },
  {
    name: "Mobile Controlled Lighting",
    description:
      "Built a mobile app-controlled smart lighting system with responsive UI and device compatibility testing.",
    tags: [
      { name: "iot", color: "blue-text-gradient" },
      { name: "android", color: "pink-text-gradient" },
    ],
    
  },
];

export { services, technologies, experiences, testimonials, projects };
