const portfolio = {
  profile: {
    name: "Gusti Made Adrian Putradinata",
    role: "Back End Developer",
    location: "Bandar Lampung, Indonesia",
    email: "adrianputradinata@gmail.com",
    phone: "087768256874",
    linkedin: "https://www.linkedin.com/in/gusti-made-adrian-putradinata-768aa7251/",
    summary:
      "Back End Developer with professional experience since 2023. Strong in building RESTful APIs, backend business logic, and database management for both government and private sector applications. Experienced in microservices, payment gateway integration, and attendance & performance systems.",
  },

  experience: [
    {
      company: "Dinas Pertanian Kota Bandar Lampung",
      role: "Back End Developer Intern",
      period: "May 2020 - September 2020",
      type: "Internship",
      responsibilities: [
        "Developed backend services for a web-based agricultural information system",
        "Designed and implemented RESTful APIs for public data access",
        "Built backend logic for data filtering and retrieval",
        "Managed relational databases and optimized queries",
      ],
    },
    {
      company: "PT Hes Cipta Kreasi (lakukan.co.id)",
      role: "Back End Developer",
      period: "March 2023 - December 2024",
      type: "Full-time",
      responsibilities: [
        "Developed backend services in a microservices architecture",
        "Built admin dashboard APIs for operational workflows",
        "Integrated payment gateway services securely",
        "Designed and optimized MongoDB database structures",
        "Developed and tested APIs using Postman",
        "Implemented scalable backend logic using TypeScript",
      ],
    },
    {
      company: "Dinas Komunikasi dan Informatika Lampung Barat",
      role: "Back End Developer",
      period: "January 2025 - December 2025",
      type: "Government",
      responsibilities: [
        "Developed backend services and RESTful APIs for government systems",
        "Worked on BAKAS system (employee performance & attendance)",
        "Implemented performance allowance (Tunjangan Kinerja) calculations",
        "Ensured data accuracy, security, and system reliability",
        "Collaborated with frontend and stakeholders",
      ],
    },
  ],

  education: {
    degree: "Bachelor of Informatics Engineering",
    institution: "Institut Teknologi Sumatera",
    period: "2017 - 2022",
  },

  skills: {
    hardSkills: [
      "Backend Development",
      "RESTful API Development",
      "Microservices Architecture",
      "Database Design & Management",
      "Business Logic Implementation",
      "Authentication & Authorization (JWT, RBAC)",
      "Payment Gateway Integration",
      "Attendance & Performance System",
    ],
    technologies: [
      "Node.js",
      "TypeScript",
      "Express.js",
      "NestJS (Basic-Intermediate)",
      "Prisma ORM",
      "MongoDB",
      "MySQL",
      "PostgreSQL",
      "Docker (Basic)",
      "Linux Server (Basic)",
    ],
    tools: ["Postman", "Git", "GitLab", "VS Code", "Trello"],
  },

  certifications: [
    {
      name: "Javascript Intermediate",
      issuer: "Skilvul",
      year: 2023,
    },
    {
      name: "Belajar Dasar Pemrograman Javascript",
      issuer: "Dicoding",
      year: 2023,
    },
    {
      name: "Belajar Dasar Manajemen Proyek",
      issuer: "Dicoding",
      year: 2025,
    },
    {
      name: "SQL Basic",
      issuer: "HackerRank",
      year: 2023,
    },
  ],
};

module.exports = portfolio;
