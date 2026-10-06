export const profile = {
  name: 'Sitthikan Chaiyamart',
  firstName: 'Sitthikan',
  role: 'Full-Stack Software Developer',
  tagline:
    'I design and build end-to-end systems across Web, Mobile, and API — from requirements and architecture to production delivery.',
  about:
    'Software Developer with over 1 year of experience, specializing in designing and developing end-to-end systems across Web, Mobile, and API. Experienced in delivering systems to enterprise clients, working directly with clients, and delivering under high-pressure environments.',
  email: 'sitthikan.2236@gmail.com',
  phone: '063-491-0819',
  phoneHref: '+66634910819',
  location: 'Thailand',
  resume: '/Sitthikan-Chaiyamart-Resume.pdf',
  // Set to an imported image (e.g. `import photo from './assets/profile.png'`) to show a photo
  photo: null,
}

export const stats = [
  { value: '1+', label: 'Years of experience' },
  { value: '3', label: 'Production systems' },
  { value: '3', label: 'Platforms: Web, Mobile, API' },
]

export const experience = {
  company: 'Kitsomboon Business and Technology',
  title: 'Software Developer',
  period: 'Jul 2025 – Present',
  responsibilities: [
    {
      icon: 'layers',
      title: 'System Analysis & Design',
      text: 'Gather and analyze user requirements to design system architecture that meets business objectives.',
    },
    {
      icon: 'code',
      title: 'Full-Stack Development',
      text: 'Develop full-cycle applications across Web, Mobile, and API, including system testing before delivery.',
    },
    {
      icon: 'database',
      title: 'Database Architecture',
      text: 'Design and structure databases for performance and scalability.',
    },
    {
      icon: 'users',
      title: 'Client Coordination',
      text: 'Coordinate and present work directly to clients, including system delivery in production environments.',
    },
    {
      icon: 'spark',
      title: 'AI-Assisted Development',
      text: 'Use AI as a supplementary tool for coding, code review, and bug fixing — while keeping full ownership of design and technical decisions.',
    },
  ],
}

export const projects = [
  {
    title: 'Admission Tracking System',
    summary:
      'Real-time patient admission tracking system for hospitals, supporting both Web and Mobile Application through a single shared API.',
    stack: ['Bun', 'Elysia', 'Next.js', 'Flutter', 'MySQL'],
    role: 'Designed and developed the API, Mobile Application (Flutter), and Web Frontend.',
    tags: ['Healthcare', 'Real-time', 'Web + Mobile'],
  },
  {
    title: 'Air Quality Monitor',
    summary:
      'Air quality tracking system — analyzed and rebuilt entirely across Web, Mobile, and API with Authentication/SSO and a Real-time Dashboard.',
    stack: ['Bun', 'Elysia', 'MySQL', 'React', 'Flutter'],
    role: 'Full-stack Developer — analyzed, designed, and developed the entire system from scratch, including production deployment.',
    tags: ['SSO', 'Dashboard', 'Production'],
  },
  {
    title: 'Internal Deployment Platform',
    badge: 'R&D',
    summary:
      'Internal platform for managing deployments and environment provisioning, with multi-role access, Deployment Tracking, and Activity Logging.',
    stack: ['Bun', 'Elysia', 'Next.js', 'PostgreSQL'],
    role: 'Designed the architecture and developed the entire system.',
    tags: ['DevOps', 'RBAC', 'Audit log'],
  },
]

export const skills = [
  { group: 'Frontend', icon: 'monitor', items: ['HTML', 'CSS', 'React (JS/TS)', 'Next.js', 'Flutter'] },
  { group: 'Backend', icon: 'server', items: ['Bun', 'Elysia', 'Node.js', 'Express'] },
  { group: 'Database', icon: 'database', items: ['MySQL', 'PostgreSQL', 'Drizzle ORM'] },
  { group: 'Tools', icon: 'tool', items: ['GitHub', 'VS Code', 'Postman', 'Linux', 'Docker', 'AWS EC2'] },
]

export const softSkills = [
  'Systematic problem-solving',
  'Teamwork and collaboration',
  'Adaptability and continuous learning',
  'Working under pressure',
]

export const education = {
  degree: 'Bachelor of Science, Computer Science',
  school: 'Mahasarakham University',
  location: 'Thailand',
}
