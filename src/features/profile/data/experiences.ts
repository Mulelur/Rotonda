import type { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    id: "yiya-kude",
    companyName: "Yiya Kude",
    companyLogo: "",
    positions: [
      {
        id: "yiya-fe",
        title: "Frontend Developer",
        employmentPeriod: {
          start: "07.2021",
          end: "10.2022",
        },
        employmentType: "Full-time",
        icon: "code",
        description: `
- Developed a web-based softphone UI using WebRTC for browser-based voice calls.
- Built responsive and scalable user interfaces using React and TypeScript.
- Ensured UI/UX consistency across platforms and devices.
- Collaborated closely with backend and VoIP engineers to deliver real-time communication features.
- Improved performance and usability of the calling interface.`,
        skills: [
          "React.js",
          "TypeScript",
          "WebRTC",
          "Styled Components",
          "Ant Design",
          "SCSS",
          "UI/UX",
          "Agile",
        ],
        isExpanded: true,
      },
      {
        id: "yiya-be",
        title: "Backend / Full Stack Developer",
        employmentPeriod: {
          start: "11.2022",
          end: "09.2023",
        },
        employmentType: "Full-time",
        icon: "design",
        description: `
- Designed and maintained backend services for a cloud-based VoIP platform.
- Implemented billing, usage tracking, and minute management systems.
- Integrated payment gateways including Stripe, PayPal, and Yoco.
- Maintained and synchronized microservices supporting real-time communications.
- Worked with Asterisk PBX and WebRTC signaling services.
- Ensured API consistency, performance, and reliability.`,
        skills: [
          "Node.js",
          "REST APIs",
          "SQL",
          "Redis",
          "Asterisk",
          "WebRTC",
          "Microservices",
          "Payment Integrations",
        ],
      },
    ],
    isCurrentEmployer: false,
  },

  {
    id: "port443",
    companyName: "Port443",
    companyLogo: "",
    positions: [
      {
        id: "port443-devsecops",
        title: "DevSecOps / Backend Engineer",
        employmentPeriod: {
          start: "10.2022",
        },
        employmentType: "Full-time",
        icon: "code",
        description: `
- Integrated multiple enterprise security platforms including Mimecast, Microsoft Defender, Qualys, ManageEngine, Bitdefender, and CyberArk.
- Built Python-based services to ingest, normalize, and transform security telemetry data.
- Developed custom agents to collect data from VMs and servers and store it in centralized databases.
- Designed dashboards and reporting pipelines for security posture visibility.
- Worked extensively with AWS services such as Lambda, S3, Athena, DynamoDB, EC2, and IAM.
- Automated data processing, reporting, and compliance workflows.
- Collaborated with security teams to improve detection, monitoring, and reporting capabilities.`,
        skills: [
          "Python",
          "AWS Lambda",
          "S3",
          "Athena",
          "DynamoDB",
          "EC2",
          "CyberArk",
          "Qualys",
          "Mimecast",
          "Microsoft Defender",
          "ManageEngine",
          "DevSecOps",
          "Data Pipelines",
        ],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: true,
  },

  {
    id: "weblinnk",
    companyName: "Weblinnk (PTY) LTD",
    positions: [
      {
        id: "weblinnk-founder",
        title: "Founder & Director",
        employmentPeriod: {
          start: "03.2024",
        },
        employmentType: "Part-time",
        icon: "idea",
        description: `
- Founded and led the company’s technical and business strategy.
- Designed system architectures and oversaw software development initiatives.
- Managed client relationships and project delivery.`,
        skills: ["Leadership", "System Architecture", "Business Strategy"],
      },
    ],
    isCurrentEmployer: true,
  },

  {
    id: "freelance",
    companyName: "Freelance",
    positions: [
      {
        id: "freelance-fs",
        title: "Full Stack Developer",
        employmentPeriod: {
          start: "2018",
          end: "2020",
        },
        employmentType: "Part-time",
        description: `
- Built web applications including order management systems and e-commerce platforms.
- Developed real-time features using WebSockets and Socket.IO.
- Designed and deployed scalable backend services.
- Managed deployments using Docker and NGINX.`,
        icon: "code",
        skills: [
          "React",
          "Node.js",
          "Laravel",
          "MongoDB",
          "Firebase",
          "Socket.IO",
          "Docker",
          "NGINX",
        ],
      },
    ],
  },

  {
    id: "education",
    companyName: "Education",
    positions: [
      {
        id: "education-ecs",
        title: "Diploma in Electrical & Computer Systems",
        employmentPeriod: {
          start: "08.2018",
          end: "2026",
        },
        icon: "education",
        description: `
- Studying Electrical and Computer Systems Engineering.
- Strong foundation in software engineering, systems design, and computer architecture.
- Practical experience with programming, networking, and embedded systems.`,
        skills: [
          "Python",
          "Java",
          "C/C++",
          "Data Structures",
          "Algorithms",
          "Databases",
          "Distributed Systems",
          "Software Engineering",
          "Problem Solving",
        ],
      },
    ],
  },
];
