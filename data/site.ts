/**
 * ============================================
 * PAGE CONTENT DATA
 * ============================================
 * All structured content for pages lives here.
 * Edit these arrays/objects to customize the template content.
 *
 * Replace placeholder images in src/assets/ with your own.
 */

export const site = {
    url: "https://www.github.com/jlimbert85/jlimbert85.github.io",
    meta: {
        title: "Joseph Limbert | Full-stack engineer",
        description:
            "My ePortfolio showcasing my work as a full-stack engineer.",
    },
    hero: {
        name: "Joseph Limbert",
        role: "Full-stack engineer",
        tagline:
            "From product intent to production — pragmatic systems, accessible UI, and maintainable code.",
        contact:
            "Open to new opportunities and collaborations in software development.",
        avatarSrc: "/profile.jpeg",
        avatarAlt: "Joseph Limbert",
    },
    selfAssessment: {
        paragraphs: [
            "Over the past two years in the Computer Science program, I have built a comprehensive foundation in modern software engineering principles, web architectures, and full-stack development. Building upon a background in Audio Production (A.S., 2010)—which refined my technical problem-solving skills and detail-oriented mindset—I transitioned into computer science and successfully fulfilled my core degree requirements. Throughout my academic journey, I have evolved from writing basic scripts to architecting full-stack web applications, designing RESTful APIs, and implementing secure database systems. I have mastered both traditional Waterfall and modern Agile/Scrum development methodologies, gaining practical experience defining sprint goals, collaborating in team environments, and effectively communicating with stakeholders to translate high-level requirements into functional software specifications. Furthermore, my training in secure coding, defensive programming, and continuous unit and integration testing has established a habit of building reliable, maintainable, and secure software throughout the entire development lifecycle.",
            "My technical portfolio artifacts directly reflect this academic growth, adaptability, and problem-solving capability. Through refining a native mobile application into a multi-platform web solution, I demonstrated proficiency across full-stack migration, algorithmic optimization, and database security. I refactored a native Android weight-tracking application into a full-stack web application using the MEAN stack (MongoDB, Express.js, Angular, Node.js), successfully addressing desktop versus mobile viewport constraints by engineering an adaptive interface that transforms bottom-tabbed mobile navigation into a single-page dashboard for widescreen displays. To enhance the application's core functionality, I designed real-time computational algorithms for dynamic BMI calculation and integrated visual progress-tracking charts fed by a centralized Angular data service. When faced with real-time state synchronization overhead, I refactored the data-handling pipeline from continuous WebSocket database polling to an event-driven API model, significantly reducing unnecessary network calls while maintaining immediate UI responsiveness. Finally, I hardened application security by migrating from local SQLite storage to a cloud-hosted MongoDB database, replacing plaintext credentials with salted password digests, implementing JSON Web Token (JWT) authorization, and normalizing collections to avoid document size limitations.",
            "These accomplishments directly align with my primary career goal of becoming a professional Full-Stack Software Developer. A full-stack developer must fluidly navigate client-side presentation layers and server-side business logic while building scalable systems that communicate efficiently. My hands-on experience connecting Angular frontends with Node.js and Express backends demonstrates my ability to deliver end-to-end web applications. Because modern web applications handle sensitive user data across public networks, my practical implementation of password hashing, token-based authentication, and schema normalization ensures I can protect user privacy against security vulnerabilities. By combining a strong computer science foundation, a security-first mindset, and a proven ability to solve complex architectural challenges, I am fully prepared to deliver immediate value as a professional full-stack software engineer.",
        ],
    },
    codeReview: {
        description:
            "A detailed code review video showcasing my approach to building and maintaining high-quality code.",
        videoLink:
            "https://www.youtube.com/embed/dOLGxgjsSzo?si=hON3BcS64SNXEBup",
    },
    experiences: [
        {
            period: "2025",
            title: "Lead Product Designer",
            company: "Lumen Studio",
            summary:
                "Built a polished portfolio experience with accessible UI, motion-led interactions, and reusable components.",
            highlights: [
                "Designed and shipped the complete website using Astro, Tailwind CSS, and content-driven components",
                "Crafted consistent responsive layouts and accessible typography across desktop and mobile",
                "Optimized asset delivery and performance for sub-1s page load metrics",
            ],
            tech: ["TypeScript", "Astro", "Tailwind CSS", "Node", "Vite"],
        },
        {
            period: "2024",
            title: "Frontend Architect",
            company: "Nova Launch",
            summary:
                "Delivered a modular marketing site and interactive product showcase for a launch-ready SaaS brand.",
            highlights: [
                "Implemented a component-based design system with reusable cards, buttons, and hero sections",
                "Built content-driven project pages, archive views, and client-side navigation enhancements",
                "Added cross-browser polish and performance tuning with image optimization and lazy loading",
            ],
            tech: ["Astro", "TypeScript", "Tailwind CSS", "Node", "Vite"],
        },
        {
            period: "2023",
            title: "UI Engineer",
            company: "Orbital Creative",
            summary:
                "Created an interactive product showcase with a clean visual system and accessible component library.",
            highlights: [
                "Built a flexible project card system for content updates without code changes",
                "Improved brand consistency with typography, color, and motion guidelines",
                "Added testing and quality checks for cross-device UI fidelity",
            ],
            tech: ["Astro", "Tailwind CSS", "JavaScript", "Node", "Vitest"],
        },
    ],
    featuredProjects: [
        {
            title: "Lumen Studio Website",
            period: "2025",
            summary:
                "Built a polished portfolio experience with accessible UI, motion-led interactions, and reusable components.",
            solution:
                "Designed a modular component system with Astro and Tailwind CSS, ensuring consistent brand experience across all breakpoints.",
            impact: "Achieved sub-1s page load metrics and 95+ Lighthouse scores through optimized asset delivery and lazy loading strategies.",
            image: "astro-01.webp",
            imageAlt: "Lumen Studio website showcase",
            techCategories: [
                {
                    category: "Frontend",
                    items: [
                        "TypeScript",
                        "Astro",
                        "Tailwind CSS",
                        "Responsive Design",
                    ],
                },
                {
                    category: "Performance",
                    items: ["Asset Optimization", "Lazy Loading", "Image CDN"],
                },
            ],
        },
        {
            title: "Nova Launch Marketing Platform",
            period: "2024",
            summary:
                "Delivered a modular marketing site and interactive product showcase for a launch-ready SaaS brand.",
            solution:
                "Implemented a content-driven architecture with reusable card components and dynamic project pages, enabling non-technical content updates.",
            impact: "Reduced content update time by 80% through intuitive component-based structure; enabled marketing team independence.",
            image: "astro-02.jpeg",
            imageAlt: "Nova Launch platform interface",
            techCategories: [
                {
                    category: "Frontend",
                    items: ["Astro", "TypeScript", "Tailwind CSS"],
                },
                {
                    category: "Developer Experience",
                    items: ["Vite", "ESLint", "Automated Testing"],
                },
            ],
        },
    ],
    projectArchivePage: {
        title: "All projects",
        description:
            "Project archive: dates, roles, and technologies across representative engagements.",
        intro: "A concise archive of engagements and representative work.",
    },
    projectArchive: [
        {
            date: "2025",
            project: "Design system rollout",
            role: "Frontend",
            techStack: "Astro, CSS, Storybook",
        },
        {
            date: "2024",
            project: "Checkout reliability",
            role: "Full-stack",
            techStack: "TypeScript, Postgres, Redis",
        },
        {
            date: "2024",
            project: "Auth hardening",
            role: "Backend",
            techStack: "OAuth2, JWT, rate limits",
        },
        {
            date: "2023",
            project: "Analytics pipeline",
            role: "Data",
            techStack: "SQL, dbt, warehouse",
        },
        {
            date: "2023",
            project: "Mobile web refresh",
            role: "Frontend",
            techStack: "HTML, CSS, a11y audits",
        },
    ],
    contact: {
        email: "jlimbert85@gmail.com",
        github: "https://github.com/jlimbert85",
        linkedin: "https://www.linkedin.com/in/jlimbert85",
    },
} as const;

export type ProjectArchiveRow = (typeof site.projectArchive)[number];
export type FeaturedProject = (typeof site.featuredProjects)[number];
