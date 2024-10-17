export interface ExperienceItem {
    logo: string;
    title: string;
    description: string;
    company: string;
    period: string;
}

export const experienceData: ExperienceItem[] = [
    {
        logo: "/images/alphadesign.png",
        title: "Founding ML Engineer",
        description: "Building RAG systems for long document and codebase understanding.",
        company: "Alpha Design",
        period: "September 2024 - Present"
    },
    {
        logo: "/images/glossgenius.png",
        title: "SWE Intern - Growth/AI",
        description: "Built out a referral tracking system, AI onboarding experience, and new Platinum tier plan to support large teams.",
        company: "GlossGenius",
        period: "June 2024 - September 2024"
    },
    {
        logo: "/images/snowflake.png",
        title: "SWE Intern - Snowpark Container Services",
        description: "Developed a CLI, REST API, and Python SDK for developers to interact Snowpark Container Services - a secure, managed platform to deploy containerized applications in Snowflake.",
        company: "Snowflake",
        period: "January 2024 - March 2024"
    },
    {
        logo: "/images/c3ai.png",
        title: "SWE Intern - Data Platform",
        description: "Implemented a performance monitoring API and dashboard for C3.ai's data platform to help engineers diagnose and fix issues.",
        company: "C3.ai",
        period: "June 2023 - September 2023"
    },
    {
        logo: "/images/viasat.png",
        title: "SWE Intern - Automation",
        description: "Designed and deployed a statistical model for the business team to predict project timelines based on JIRA metrics",
        company: "Viasat",
        period: "June 2022 - September 2022"
    }
];
