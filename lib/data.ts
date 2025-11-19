export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  github?: {
    label: string;
    url: string;
  }[];
  demo?: {
    label: string;
    url: string;
  }[];
  icon: string;
  testCredentials?: {
    login: string;
    password: string;
  };
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Credit Card Planner",
    description: "A complete system to manage credit card expenses, installments, categories, and financial insights. Modern UI built with Next.js App Router, Tailwind, and shadcn/ui.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "Supabase"],
    github: [
      {
        label: "Frontend",
        url: "https://github.com/felippe-fernandes/credit_card_planner_frontend",
      },
      {
        label: "Backend",
        url: "https://github.com/felippe-fernandes/credit_card_planner_backend",
      },
    ],
    demo: [
      {
        label: "Live Demo",
        url: "https://credit-card-planner.vercel.app",
      },
      {
        label: "API Docs",
        url: "https://credit-card-planner-backend.onrender.com/api",
      },
    ],
    icon: "credit-card",
    testCredentials: {
      login: "teste@teste.com",
      password: "123456",
    },
  },
  {
    id: 2,
    title: "TeachFlow",
    description: "A productivity platform that helps teachers organize classes, plans, assignments, and materials. Built with Next.js + Prisma, focused on intuitive workflows and clarity.",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    github: [
      {
        label: "Repository",
        url: "https://github.com/felippe-fernandes/teach_flow",
      },
    ],
    demo: [
      {
        label: "Live Demo",
        url: "https://teachflow-edu.vercel.app",
      },
    ],
    icon: "book-open",
    testCredentials: {
      login: "teste@teste.com",
      password: "123456",
    },
  },
  {
    id: 3,
    title: "Medical Annotations",
    description: "A lightweight and structured tool for medical note-taking. Fast, simple, and reliable for healthcare professionals.",
    technologies: ["Next.js", "TypeScript", "React"],
    github: [
      {
        label: "Repository",
        url: "https://github.com/felippe-fernandes/medical_annotations",
      },
    ],
    demo: [
      {
        label: "Live Demo",
        url: "https://medical-annotations.vercel.app",
      },
    ],
    icon: "stethoscope",
    testCredentials: {
      login: "teste@teste.com",
      password: "123456",
    },
  },
];

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/felippe-fernandes",
    icon: "github",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/fernandes-felippe/",
    icon: "linkedin",
  },
  {
    name: "Email",
    url: "mailto:your-email@example.com",
    icon: "mail",
  },
];

export const personalInfo = {
  name: "Felippe Fernandes",
  tagline: "Fullstack Developer · Frontend Specialist",
};
