// Import types from centralized type definitions
import microservicesimage from "@/assets/microservicesimage.png";
import bookhubimage from "@/assets/bookhubimage.png";
import hospitalityindustryimage from "@/assets/hospitalityindustryimage.png";
import planindeximage from "@/assets/planindeximage.png";
import jobportalimage from "@/assets/jobportalimage.png";
import gatepassimage from "@/assets/gatepassimage.png";
import terraformimage from "@/assets/terraformimage.png"; 
import kafkaimage from "@/assets/kafkaimage.png";
import portfolioimage from "@/assets/portfolioimage.png"; 

import type { 
  Project, 
  Skill, 
  OtherSkill, 
  WorkExperience
} from "@/types";

// Re-export for backwards compatibility
export type { Project, Skill, OtherSkill, WorkExperience };

export const projects: Project[] = [
  {
    id: 1,
    title: "Cloud-Native Microservices with Real-Time Event Processing",
    description: `• Architected scalable microservices in Java using Spring Boot and Spring Cloud, implementing Eureka for service discovery, Spring Cloud Gateway for centralized routing, enabling seamless workflow management across services
• Integrated Apache Kafka and RabbitMQ for real-time, event-driven communication between microservices, optimizing message handling and optimizing system latency during peak traffic
• Deployed containerized microservices with Docker and incorporated Resilience4J patterns (Circuit Breaker, Retry), improving service reliability and fault tolerance`,
    image: microservicesimage,
    category: ["backend"],
    tags: ["Java", "Spring Boot", "Spring Cloud", "Kafka", "RabbitMQ", "Docker", "Resilience4J"],
    reference: "https://github.com/RishikaBhatKuthyar/Springboot_microservices"
  },
  {
    id: 2,
    title: "Book Hub: An Interactive Platform for Readers and Authors",
    description: `• Collaborated and developed a web platform using Express.js, React, and Node.js to enable real-time content access between readers and authors, enhancing user interaction and platform responsiveness
• Implemented OAuth2 and JWT-based authentication to secure user sessions and protect API endpoints
• Integrated Stripe for secure payment processing of 150+ monthly transactions, set up email functionalities for user communication and leveraged Socket.io for real-time notification`,
    image: bookhubimage,
    category: ["fullstack","backend", "frontend"],
    tags: ["Express.js", "React", "Node.js", "OAuth2", "JWT", "Stripe", "Socket.io"],
    reference: "https://github.com/RishikaBhatKuthyar/BookHub",
  },
  {
    id: 3,
    title: "Hospitality Industry Management System",
    description: "A robust system using Java and Swing to streamline hotel operations and enhance customer interactions with an intuitive interface. Manages room reservations, check-ins, and other amenities.",
    image: hospitalityindustryimage,
    category: ["backend"],
    tags: ["Java", "Swing"],
    reference: "https://github.com/RishikaBhatKuthyar/hotel_management_system"
  },
  {
    id: 4,
    title: "Plan Service API",
    description: `A RESTful API for managing structured JSON data with support for CRUD operations, schema validation, conditional reads/writes, Elasticsearch indexing (parent-child model), and secure access via RS256-signed Bearer tokens from Google Identity Provider (IdP).`,
    image: planindeximage,
    category: ["backend"],
    tags: [
      "Java", 
      "Spring Boot", 
      "Redis", 
      "Elasticsearch", 
      "RabbitMQ", 
      "Google OAuth2", 
      "REST API"
    ],
    reference: "https://github.com/RishikaBhatKuthyar/PlanIndexAPI"
  },
   {
    id: 5,
    title: "Job Portal",
    description: `React Job Portal is a web application designed to bridge the gap between job seekers and employers. Leveraging React for the frontend, Material UI for design, Axios for API requests, and a Node.js backend, this portal offers an intuitive interface for users to explore job listings and company profiles efficiently.`,
    image: jobportalimage,
    category: ["fullstack","backend", "frontend"],  
    tags: [
      "React", "Material UI", "Axios", "Node.js", "Express", "MongoDB", "Mongoose", "bcrypt", "multer", "CORS", "dotenv"
    ],
    reference: "https://github.com/RishikaBhatKuthyar/JobPortal"
  },
   {
    id: 6,
    title: "Advanced Security System using Face Detection",
    description: `Utilizing advanced facial recognition technology, the system enhances security and efficiency by enabling seamless management of student and guest entry and exit records. This solution replaces traditional paper-based logbooks, offering a user-friendly and secure way to handle gate passes through mobile and web platforms.`,
    image: gatepassimage,
    category: ["fullstack","backend","frontend"],
    tags: [
      "Python", "Django", "SQLite", "OpenCV", "Face Recognition", "HTML", "CSS", "Anaconda", "PyCharm", "UML"
    ],
    reference: "https://ijsrset.com/home/issue/view/article.php?id=IJSRSET2293164"
  },
  {
    id: 7,
    title: "Terraform Infrastructure Automation",
    description: `Automated the setup of VPCs, subnets, and cloud resources using Terraform, with a focus on creating reusable modules and managing resource dependencies.`,
    image: terraformimage,
    category: ["devops"],
    tags: [
      "Terraform", "Infrastructure as Code", "AWS", "VPC", "Cloud Automation", "Modules"
    ],
    reference: "https://github.com/RishikaBhatKuthyar/terraform-aws-rishika-test-vpc"
  },
  {
  id: 8,
  title: "Kafka Implementation",
  description: 'This project streams real-time Wikimedia changes from the Wikimedia Event Stream using Kafka. The data is then consumed and stored in a MySQL database. It demonstrates the use of Kafka producers and consumers to handle JSON and String messages efficiently.',
  image: kafkaimage,
  category: ["backend", "devops"],
  tags: [
    "Apache Kafka", "Spring Boot", "Producer", "Consumer", "JSON", "String", "Java", "Messaging"
  ],
  reference: "https://github.com/RishikaBhatKuthyar/realtime-wikimedia-data-processing-kafka"
},
{
  id: 9,
  title: "My Portfolio Website",
  description: `A full-stack web application built with a modern development stack to showcase technical expertise, professional projects, and software engineering skills. It leverages a modular and scalable architecture optimized for performance, rapid development, and clean code practices. The frontend is powered by React and Tailwind CSS using Vite for lightning-fast builds, while the backend uses Express.js with TypeScript to handle API requests and server-side logic.`,
  image: portfolioimage,
  category: ["fullstack", "frontend", "backend"],
  tags: [
    "React", "Vite", "Tailwind CSS", "PostCSS", "Node.js", "Express.js", "TypeScript"
  ],
  reference: "https://github.com/RishikaBhatKuthyar/RishikaBhatKuthyar_Portfolio"
},

];



export const workExperience: WorkExperience[] = [
  {
    title: "Technical Business Analyst Coop",
    company: "State Street | Boston, USA",
    period: "Jan 2025 – Present",
    description:
      "Designed event-driven workflows in Java and automated B2B integrations, reducing manual effort and bottlenecks. Drove containerization with Docker and Kubernetes, improving deployment efficiency.",
  },
  {
    title: "Associate Software Engineer",
    company: "Innova Solutions | Hyderabad, India",
    period: "June 2022 – Dec 2023",
    description:
      "Developed secure Spring Boot APIs and optimized Azure infrastructure with AKS and CI/CD. Enhanced system reliability and performance for 30K+ users through Kafka and Redis solutions.",
  },
  {
    title: "Software Developer Intern",
    company: "Techimax | Hyderabad, India",
    period: "Jan 2020 – June 2020",
    description:
      "Built a real-time patient dashboard with React and Node.js, improving system responsiveness. Strengthened data security and automated testing, boosting code quality and reliability.",
  },
];


export interface ExtraExperience {
  title: string;
  organization: string;
  period: string;
  skills: string[];
  description: string;
}

export const extraExperience: ExtraExperience[] = [
  {
    title: "RSO Proctor",
    organization: "Northeastern University",
    period: "June 2024 – Present",
    skills: ["Teamwork", "Communication", "Conflict Resolution", "Multitasking", "Adaptability"],
    description:
      "Ensured safety and security at residence halls by collaborating with Residential Life, Building Services, and NUPD. Demonstrated strong communication and conflict resolution skills to maintain a safe environment for all residents.",
  },
  {
    title: "Organising Committee Head",
    organization: "Women in Engineering Conference",
    period: "July 2019 – Dec 2021",
    skills: ["Problem Solving","Leadership", "Project Management", "Customer Service", "Organization"],
    description:
      "Led a national conference for 500 delegates, coordinating with multiple departments to ensure seamless operations. Enhanced team leadership and provided tailored support to guests, maintaining high standards of empathy and service.",
  },
  {
    title: "Operations Head",
    organization: "Sunshine NGO",
    period: "July 2021 – Jan 2022",
    skills: ["Team Management", "Collaboration", "Decision Making", "Advocacy"],
    description:
      "Directed daily operations and managed a diverse volunteer team to advance outreach programs. Secured funding, coordinated advocacy campaigns, and encouraged collaboration to increase public engagement and support for the NGO’s mission.",
  },
];



import neuLogo from "@/assets/neu_logo.png";
import jntuhLogo from "@/assets/jntuh_logo.png";
import narayanaLogo from "@/assets/narayana_logo.png";
import ogsLogo from "@/assets/ogs_logo.png";



export interface Education {
  institution: string;
  logo?: string;
  degree: string;
  period: string;
  courses?: string[];
  skills?: string[];
}

export const educationTimeline: Education[] = [
  {
    institution: "Northeastern University",
    logo: neuLogo,
    degree: "Master of Science (MS), Information Systems",
    period: "Jan 2024 – Present",
    courses: [
      "INFO5001 Application Engineering Development",
      "INFO6150 Web Design and User Experience",
      "INFO6205 Program Structure & Algorithms",
      "CSYE6200 Concepts of Object-Oriented Design",
      "INFO7255 Advanced Big-Data Application Indexing"
    ],
    skills: [
      "Web Development", "Java", "JavaScript", "Java Swing", "Data Structures and Algorithms"
    ]
  },
  {
    institution: "Jawaharlal Nehru Technological University",
    logo: jntuhLogo,
    degree: "Bachelor of Technology (BTech), Information Technology",
    period: "2018 – 2022",
    courses: [
      "Data Structures",
      "Object-Oriented Programming Through Java",
      "Python",
      "Database Management Systems",
      "Software Engineering and OOAD",
      "Design and Analysis of Algorithms",
      "Cloud Computing"
    ],
    skills: [
      "Java", "Python (Programming Language)"
    ]
  },
  {
    institution: "Narayana Junior College - India",
    logo: narayanaLogo,
    degree: "High School Diploma, MPC",
    period: "2016 – 2018"
  },
  {
    institution: "Oxford Grammar School - India",
    logo: ogsLogo,
    degree: "High School Diploma",
    period: "2014 – 2016"
  }
];