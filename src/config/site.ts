export const siteConfig = {
  url: process.env.NEXT_PUBLIC_BASE_URL || "https://your-portfolio.vercel.app",
  author: {
    name: { ko: "윤이바나", en: "IVANA YOON" },
    title: { ko: "인사(HR) 담당 | 채용", en: "HR Generalist | Talent Acquisition" },
    email: "ivanayoon@gmail.com",
  },
  social: {
    github: "https://github.com/username",
    linkedin: "https://linkedin.com/in/username",
    blog: "https://blog.example.com",
  },
  nav: [
    "about",
    "experience",
    "career-highlights",
    "speaking",
    "certified",
    "projects",
    "contact",
  ] as const,
  sections: {
    hero: true,
    about: true,
    experience: true,
    careerHighlights: true,
    speaking: true,
    certified: true,
    projects: true,
    contact: true,
  },
  seo: {
    titleTemplate: "%s | John Doe",
    defaultTitle: "John Doe | Senior Software Engineer",
    description:
      "Personal portfolio showcasing my professional experience, projects, and achievements.",
    keywords: ["portfolio", "software engineer", "developer"],
  },
  googleVerification: "",
};

export type NavKey = (typeof siteConfig.nav)[number];
