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
import pharmaCardImage from "@/assets/pharma_card.png";
import financeCardImage from "@/assets/finance_card.png";

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
    title: "Pharma Analytics Chatbot",
    description: [
      "Built a conversational analytics assistant that translates natural-language questions into data-driven insights over pharma datasets.",
      "Delivered a responsive tool that helps stakeholders explore regulatory and commercial data faster while reducing manual query overhead."
    ],
    image: pharmaCardImage,
    category: ["fullstack", "AI"],
    tags: ["Claude API", "FastAPI", "DuckDB", "Redis", "React", "Vite"],
    reference: "https://github.com/RishikaBhatKuthyar/pharma_analytics_tool"
  },

  {
    id: 2,
    title: "LLM Financial Chatbot with RAG",
    description: [
      "Built a financial chatbot that provides grounded, report-driven insights for investment and market analysis.",
      "Created a platform for users to explore financial documents and receive concise, actionable guidance from structured data."
    ],
    image: financeCardImage,
    category: ["fullstack", "AI"],
    tags: ["Django", "Gemini", "ChromaDB", "Sentence Transformers", "React", "RAG"],
    reference: "https://github.com/RishikaBhatKuthyar/George-Soros-chatbot"
  },

  {
    id: 3,
    title: "Cloud-Native Microservices with Real-Time Event Processing",
    description: [
      "Delivered a resilient microservices platform designed for high-throughput event processing and reliable service coordination.",
      "Built a scalable architecture that improved operational visibility and simplified workflow orchestration across distributed services."
    ],
    image: microservicesimage,
    category: ["backend"],
    tags: ["Java", "Spring Boot", "Spring Cloud", "Kafka", "RabbitMQ", "Docker", "Resilience4J"],
    reference: "https://github.com/RishikaBhatKuthyar/Springboot_microservices"
  },
  {
    id: 4,
    title: "Book Hub: An Interactive Platform for Readers and Authors",
    description: [
      "Created a collaborative publishing platform that connects readers and authors with real-time engagement and content discovery.",
      "Delivered an intuitive experience for managing author contributions, reader interactions, and transaction workflows."
    ],
    image: bookhubimage,
    category: ["fullstack","backend", "frontend"],
    tags: ["Express.js", "React", "Node.js", "OAuth2", "JWT", "Stripe", "Socket.io"],
    reference: "https://github.com/RishikaBhatKuthyar/BookHub",
  },
  {
    id: 5,
    title: "Hospitality Industry Management System",
    description: [
      "A robust system using Java and Swing to streamline hotel operations and enhance customer interactions with an intuitive interface.",
      "Manages room reservations, check-ins, and other amenities."
    ],
    image: hospitalityindustryimage,
    category: ["backend"],
    tags: ["Java", "Swing"],
    reference: "https://github.com/RishikaBhatKuthyar/hotel_management_system"
  },
  {
    id: 6,
    title: "Plan Service API",
    description: [
      "A RESTful API for managing structured JSON data with support for CRUD operations, schema validation, conditional reads/writes.",
      "Includes Elasticsearch indexing (parent-child model) and secure access via RS256-signed Bearer tokens from Google Identity Provider (IdP)."
    ],
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
   id: 7,
   title: "Job Portal",
    description: [
      "React Job Portal is a web application designed to bridge the gap between job seekers and employers.",
      "Leverages React, Material UI, Axios, and a Node.js backend to provide an intuitive interface for exploring job listings and company profiles."
    ],
    image: jobportalimage,
    category: ["fullstack","backend", "frontend"],  
    tags: [
      "React", "Material UI", "Axios", "Node.js", "Express", "MongoDB", "Mongoose", "bcrypt", "multer", "CORS", "dotenv"
    ],
    reference: "https://github.com/RishikaBhatKuthyar/JobPortal"
  },
  {
   id: 8,
   title: "Advanced Security System using Face Detection",
    description: [
      "Utilizing advanced facial recognition technology to enhance security and efficiency for student and guest entry/exit records.",
      "Replaces paper-based logbooks with a user-friendly mobile and web solution for gate pass management."
    ],
    image: gatepassimage,
    category: ["fullstack","backend","frontend"],
    tags: [
      "Python", "Django", "SQLite", "OpenCV", "Face Recognition", "HTML", "CSS", "Anaconda", "PyCharm", "UML"
    ],
    reference: "https://ijsrset.com/home/issue/view/article.php?id=IJSRSET2293164"
  },
  {
    id: 9,
    title: "Terraform Infrastructure Automation",
    description: [
      "Automated the setup of VPCs, subnets, and cloud resources using Terraform.",
      "Focused on creating reusable modules and managing resource dependencies for repeatable infrastructure provisioning."
    ],
    image: terraformimage,
    category: ["devops"],
    tags: [
      "Terraform", "Infrastructure as Code", "AWS", "VPC", "Cloud Automation", "Modules"
    ],
    reference: "https://github.com/RishikaBhatKuthyar/terraform-aws-rishika-test-vpc"
  },
  {
  id: 10,
  title: "Kafka Implementation",
  description: [
    'Streams real-time Wikimedia changes from the Wikimedia Event Stream using Kafka, consuming and storing data in MySQL.',
    'Demonstrates Kafka producers and consumers handling JSON and String messages efficiently.'
  ],
  image: kafkaimage,
  category: ["backend", "devops"],
  tags: [
    "Apache Kafka", "Spring Boot", "Producer", "Consumer", "JSON", "String", "Java", "Messaging"
  ],
  reference: "https://github.com/RishikaBhatKuthyar/realtime-wikimedia-data-processing-kafka"
},
{
  id: 11,
  title: "My Portfolio Website",
  description: [
    "A full-stack web application built with a modern development stack to showcase technical expertise and projects.",
    "Uses React, Tailwind CSS, and Vite on the frontend and an Express + TypeScript backend for API handling and server logic."
  ],
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
    title: "Technical Analyst Coop",
    company: "State Street | Boston, USA",
    period: "Jan 2025 –  Aug 2025",
      description: [
        "Led system design and delivery of workflow automation features for the Charles River IMS Workflow Rule Engine, shipping enhancements in the 25R3 release for trading and compliance processes used by 200+ front-office users.",
        "Collaborated with 6+ stakeholders across engineering, product, and business teams to scope workflow rule enhancements and translate complex trading/compliance requirements into scalable technical solutions.",
        "Developed a RAG-based AI assistant using embeddings, vector search, and LLM APIs to surface internal documentation, reducing support requests by 25% and accelerating knowledge discovery.",
        "Containerized backend services with Docker and deployed to Kubernetes using health checks and rolling updates, reducing environment setup time from ~1 day to under 1 hour."
      ],
  },
  {
    title: "Associate Software Engineer",
    company: "Innova Solutions | Hyderabad, India",
    period: "June 2022 – Dec 2023",
      description: [
        "Engineered a Java Spring Boot application with RESTful APIs, JWT authentication, and role-based access control to manage 30K+ employee records, improving security and data handling.",
        "Designed event-driven microservices using Apache Kafka for asynchronous processing, reducing p95 latency by ~30%.",
        "Improved service resilience by building a lightweight API rate limiter with Spring AOP and Redis to mitigate overload during peak usage.",
        "Migrated services to Azure Kubernetes Service (AKS) with automated CI/CD pipelines, enabling zero-downtime rolling deployments and improving release reliability."
      ],
  },
  {
    title: "Software Developer Intern",
    company: "Techimax | Hyderabad, India",
    period: "Jan 2020 – June 2020",
      description: [
        "Developed a full-stack healthcare dashboard using React, Node.js, and MySQL to visualize and manage patient records, improving data accessibility and UX.",
        "Implemented and tested REST APIs using Java, JUnit, Mockito, and Postman, improving backend reliability and reducing regression defects."
      ]  },
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
    period: "Jan 2024 – May 2026",
    courses: [
      "INFO5001 Application Engineering Development",
      "INFO6150 Web Design and User Experience",
      "INFO 6205 Program Structure & Algorithms",
      "CSYE 6200 Concepts of Object-Oriented Design",
      "INFO 7255 Advanced Big-Data Application Indexing",
      "INFO 7375 User Experience in Era of Generative AI",
      "CSYE 7380 Theory and Practical Applications of Generative AI",
      "INFO 7260 Business Process Engineering"
    ],
    // skills: [
    //   "Generative AI","Web Development", "Java", "Spring Framework", "Data Structures and Algorithms"
    // ]
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
    // skills: [
    //   "Java", "Python (Programming Language)"
    // ]
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