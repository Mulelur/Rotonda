import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
  {
    id: "weblinnk",
    title: "Weblinnk",
    period: {
      start: "2023",
    },
    link: "https://app.weblinnk.com",
    skills: [
      "React.js",
      "Firebase",
      "AWS Lambda",
      "Serverless Architecture",
      "Authentication",
      "Cloud Functions",
      "NoSQL",
      "SaaS",
    ],
    description: `
Weblinnk is a lightweight SaaS web application that enables users to quickly create and manage simple websites through a CRM-style interface.

- Designed and built the frontend using React.js with a focus on usability and responsiveness
- Implemented backend services using Firebase and AWS Lambda
- Integrated authentication, data storage, and serverless APIs
- Designed scalable cloud-based architecture for rapid deployment and low operational overhead
- Focused on performance, security, and ease of use for non-technical users
    `,
    isExpanded: true,
  },
  {
    id: "grapes",
    title: "Grapes",
    link: "",
    period: {
      start: "2024",
    },
    skills: [
      "Tauri",
      "Rust",
      "React",
      "TypeScript",
      "shadcn/ui",
      "Desktop Applications",
      "Cross-platform",
    ],
    description: `
Grapes is a multi-platform desktop blogging application built with modern, high-performance technologies.

- Developed a cross-platform desktop app using Tauri and Rust for performance and security
- Built the user interface with React and shadcn/ui
- Focused on low memory footprint, fast startup time, and native OS integration
- Designed modular architecture for future plugin and extension support
    `,
  },
  {
    id: "draftcode",
    title: "DraftCode.io",
    period: {
      start: "2024",
    },
    link: "https://draftcode.io",
    skills: [
      "AI Integration",
      "Backend Architecture",
      "Code Evaluation",
      "REST APIs",
      "Developer Tools",
      "Cloud",
      "Problem Solving",
    ],
    description: `
DraftCode.io is an AI-powered coding practice and learning platform designed to help developers solve programming challenges efficiently.

- Built an online coding platform for practicing and learning algorithms and problem-solving
- Integrated AI-powered contextual code suggestions and step-by-step explanations
- Designed workflows to validate logic, accelerate experimentation, and improve learning outcomes
- Focused on developer experience, performance, and scalability
    `,
  },
  {
    id: "pazzplay",
    title: "PazzPlay",
    period: {
      start: "2023",
    },
    link: "",
    skills: [
      "Unity",
      "C#",
      "Game Architecture",
      "DOTween",
      "UI/UX",
      "Procedural Logic",
      "TextMeshPro",
    ],
    description: `
PazzPlay is an interactive sliding-tile puzzle game featuring polished animations and dynamic gameplay logic.

- Designed and developed a fully interactive puzzle game using Unity and C#
- Implemented dynamic 2×2, 3×3, and 4×4 puzzle grids with procedural layout logic
- Built modular architecture separating GameManager, UI, and Node logic
- Integrated DOTween for cinematic animations including tile spawning, shuffle, and UI transitions
- Designed the system for scalability, future power-ups, and leaderboard expansion
    `,
  },
];
