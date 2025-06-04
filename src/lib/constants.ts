
import type { Project, ProjectType } from '@/components/projects/types';

export const PROJECT_TYPES: ProjectType[] = ["All", "Web", "Mobile", "Systems"];

export const WHATSAPP_ORDER_NUMBER = "254758673616"; // IMPORTANT: User's WhatsApp business number
export const INSTAGRAM_PROFILE_URL = "https://www.instagram.com/00001000692y63iwt/";

export const MOCK_PROJECTS: Project[] = [
  {
    id: '1',
    title: 'OpenSource Hub',
    description: 'A platform for discovering, collaborating on, and managing open-source projects.',
    longDescription: "OpenSource Hub aims to be a central nexus for the open-source community. It facilitates project discovery through advanced search and categorization, supports collaboration with integrated version control and issue tracking, and provides tools for project maintainers to manage contributions and releases effectively. Built for transparency and community growth.",
    image: 'https://smartbuy.co.ke/wp-content/uploads/2021/04/ASUS-X543M-1.jpg',
    dataAiHint: 'community platform',
    techStack: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
    liveUrl: '#',
    repoUrl: 'https://github.com/Symoh242/Opensource-Simon-version-1',
    projectType: 'Web',
  },
  {
    id: '2',
    title: 'Mobile Fitness App "FitTrack"',
    description: 'Cross-platform app for workout tracking, meal planning, and progress monitoring.',
    longDescription: 'FitTrack is a comprehensive mobile fitness companion available on iOS and Android. It offers personalized workout plans, a vast exercise library with video demonstrations, calorie and macronutrient tracking, integration with wearables (Apple Health, Google Fit), and community features for motivation.',
    image: 'https://scontent.fnbo10-1.fna.fbcdn.net/v/t39.30808-6/480958632_1002644978447298_9041735281931764108_n.jpg?stp=c248.0.992.992a_dst-jpg_s206x206_tt6&_nc_cat=111&ccb=1-7&_nc_sid=50ad20&_nc_eui2=AeHSD_Y-WVMX1W6XxgGcWv89OEx4L_fb5Vw4THgv99vlXMdoZxH-R1rRFvgUeO1QbPMt4qRvssIogD-24E1De2LY&_nc_ohc=wz3OsvM0bYcQ7kNvwFaT9xf&_nc_oc=Adkzt3lu8i1nva_xBmPElQVjUDvXEoB6ZA8OV-sHW8vqBMf9d-oo8I4SLHLn2-Chi4M&_nc_zt=23&_nc_ht=scontent.fnbo10-1.fna&_nc_gid=4PW0JTSgVctBVXRqLbjNCg&oh=00_AfIgtBVBUBoq1zsAc8Thhs79ePWWiqqztaOOzX8dx-jfyw&oe=6837B73C',
    dataAiHint: 'fitness app',
    techStack: ['React Native', 'TypeScript', 'Firebase', 'GraphQL', 'Node.js'],
    liveUrl: '#',
    projectType: 'Mobile',
  },
  {
    id: '3',
    title: 'Royaltech Limited',
    description: "Delivering cutting-edge data analytics and enterprise solutions for Royaltech Limited's clients.",
    longDescription: "Royaltech Limited leverages advanced technologies to provide clients with powerful data analytics dashboards, business intelligence tools, and custom enterprise software. Their solutions, like the flagship InsightEngine, empower organizations to make data-driven decisions, optimize operations, and achieve strategic goals. Focus on scalability, security, and real-time insights.",
    image: 'https://picsum.photos/id/1/600/400',
    dataAiHint: 'tech solutions',
    techStack: ['Python (Flask)', 'React', 'D3.js', 'Kafka', 'Spark', 'MongoDB'],
    liveUrl: 'https://royaltech-system-1-version.vercel.app/',
    repoUrl: 'https://github.com/Symoh242/ROYALTECH-SYSTEM-1VERSION',
    projectType: 'Systems',
  },
  {
    id: '4',
    title: 'Simon Styles Technology Limited',
    description: "Professional portfolio and service showcase for Simon Styles Technology Limited, detailing expertise and projects.",
    longDescription: "The official online presence of Simon Styles Technology Limited, showcasing a range of successfully delivered web, mobile, and system development projects. This platform highlights the skills, methodologies, and innovative solutions offered, providing a comprehensive overview of capabilities and an easy way for potential clients to connect.",
    image: 'https://picsum.photos/id/1/600/400',
    dataAiHint: 'portfolio website',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Genkit', 'Gemini AI'],
    liveUrl: 'https://simon-styles-openhub.vercel.app/',
    repoUrl: 'https://github.com/Symoh242/SIMON-STYLES-OPENHUB',
    projectType: 'Web',
  },
  {
    id: '5',
    title: 'SaaS Booking System "AppointEase"',
    description: 'Cloud-based appointment scheduling software for service-based businesses.',
    longDescription: 'AppointEase simplifies appointment management for businesses like salons, clinics, and consultants. Features include online booking, automated reminders (SMS/email), staff management, service customization, payment integration, and reporting tools. It is a multi-tenant SaaS application.',
    image: 'https://picsum.photos/id/1/600/400',
    dataAiHint: 'booking interface',
    techStack: ['Ruby on Rails', 'React', 'PostgreSQL', 'Sidekiq', 'Stripe API'],
    liveUrl: 'https://bms-28in.vercel.app/',
    repoUrl: 'https://github.com/Symoh242',
    projectType: 'Web',
  },
  {
    id: '6',
    title: 'COMPCODES LIMITED',
    description: 'Bespoke software development and system integration by COMPCODES LIMITED.',
    longDescription: "COMPCODES LIMITED specializes in crafting tailored software solutions for diverse business needs. Their services include web and mobile application development, custom CRM systems like their successful ClientConnect platform, and complex system integrations. They are committed to delivering high-quality, scalable, and maintainable code.",
    image: 'https://picsum.photos/id/1/600/400',
    dataAiHint: 'software company',
    techStack: ['Django (Python)', 'Vue.js', 'PostgreSQL', 'Celery', 'REST APIs'],
    liveUrl: '#',
    repoUrl: 'https://github.com/Symoh242',
    projectType: 'Systems',
  },
];
