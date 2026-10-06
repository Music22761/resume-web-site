// Shared across languages
export const contact = {
  name: 'Sitthikan Chaiyamart',
  firstName: 'Sitthikan',
  email: 'sitthikan.2236@gmail.com',
  phone: '063-491-0819',
  phoneHref: '+66634910819',
  resume: '/Sitthikan-Chaiyamart-Resume.pdf',
  // Set to an imported image (e.g. `import photo from './assets/profile.png'`) to show a photo
  photo: null,
}

const stacks = {
  admission: ['Bun', 'Elysia', 'Next.js', 'Flutter', 'MySQL'],
  airQuality: ['Bun', 'Elysia', 'MySQL', 'React', 'Flutter'],
  deploy: ['Bun', 'Elysia', 'Next.js', 'PostgreSQL'],
}

const skillItems = {
  frontend: ['HTML', 'CSS', 'React (JS/TS)', 'Next.js', 'Flutter'],
  backend: ['Bun', 'Elysia', 'Node.js', 'Express'],
  database: ['MySQL', 'PostgreSQL', 'Drizzle ORM'],
  tools: ['GitHub', 'VS Code', 'Postman', 'Linux', 'Docker', 'AWS EC2'],
}

const en = {
  meta: {
    title: 'Sitthikan Chaiyamart — Portfolio',
    description:
      'Sitthikan Chaiyamart — Full-Stack Software Developer building end-to-end systems across Web, Mobile, and API.',
  },
  nav: { about: 'About', experience: 'Experience', projects: 'Projects', skills: 'Skills', contact: 'Contact' },
  ui: {
    status: 'Software Developer @ Kitsomboon',
    hello: 'Hi, I’m',
    nameEnd: '.',
    headline: 'I build systems end to end.',
    viewWork: 'View my work',
    download: 'Download résumé',
    aboutEyebrow: 'About me',
    aboutTitle: 'From requirements to production.',
    education: 'Education',
    basedIn: 'Based in',
    location: 'Thailand',
    openTo: 'Open to new opportunities',
    expEyebrow: 'Experience',
    expTitle: 'Where I work.',
    projEyebrow: 'Selected projects',
    projTitle: 'Things I’ve built.',
    role: 'Role',
    skillsEyebrow: 'Skills',
    skillsTitle: 'My toolkit.',
    beyondCode: 'Beyond code',
    contactEyebrow: '05 — Contact',
    contactTitle: 'Have a project in mind?',
    contactTitle2: 'Let’s build it together.',
    contactLead:
      'I’m always happy to talk about new opportunities, interesting systems, or how I can help your team ship.',
    email: 'Email',
    phone: 'Phone',
    sayHello: 'Say hello',
    backToTop: 'Back to top ↑',
    portraitAlt: 'Portrait of',
    copy: 'Copy',
    toggleMenu: 'Toggle menu',
    toLight: 'Switch to light mode',
    toDark: 'Switch to dark mode',
    switchLang: 'เปลี่ยนเป็นภาษาไทย',
  },
  tagline:
    'I design and build end-to-end systems across Web, Mobile, and API — from requirements and architecture to production delivery.',
  about:
    'Software Developer with over 1 year of experience, specializing in designing and developing end-to-end systems across Web, Mobile, and API. Experienced in delivering systems to enterprise clients, working directly with clients, and delivering under high-pressure environments.',
  stats: [
    { value: '1+', label: 'Years of experience' },
    { value: '3', label: 'Production systems' },
    { value: '3', label: 'Platforms: Web, Mobile, API' },
  ],
  experience: {
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
  },
  projects: [
    {
      id: 'admission',
      title: 'Admission Tracking System',
      summary:
        'Real-time patient admission tracking system for hospitals, supporting both Web and Mobile Application through a single shared API.',
      stack: stacks.admission,
      role: 'Designed and developed the API, Mobile Application (Flutter), and Web Frontend.',
      tags: ['Healthcare', 'Real-time', 'Web + Mobile'],
    },
    {
      id: 'air-quality',
      title: 'Air Quality Monitor',
      summary:
        'Air quality tracking system — analyzed and rebuilt entirely across Web, Mobile, and API with Authentication/SSO and a Real-time Dashboard.',
      stack: stacks.airQuality,
      role: 'Full-stack Developer — analyzed, designed, and developed the entire system from scratch, including production deployment.',
      tags: ['SSO', 'Dashboard', 'Production'],
    },
    {
      id: 'deploy',
      title: 'Internal Deployment Platform',
      badge: 'R&D',
      summary:
        'Internal platform for managing deployments and environment provisioning, with multi-role access, Deployment Tracking, and Activity Logging.',
      stack: stacks.deploy,
      role: 'Designed the architecture and developed the entire system.',
      tags: ['DevOps', 'RBAC', 'Audit log'],
    },
  ],
  skills: [
    { group: 'Frontend', icon: 'monitor', items: skillItems.frontend },
    { group: 'Backend', icon: 'server', items: skillItems.backend },
    { group: 'Database', icon: 'database', items: skillItems.database },
    { group: 'Tools', icon: 'tool', items: skillItems.tools },
  ],
  softSkills: [
    'Systematic problem-solving',
    'Teamwork and collaboration',
    'Adaptability and continuous learning',
    'Working under pressure',
  ],
  education: {
    degree: 'Bachelor of Science, Computer Science',
    school: 'Mahasarakham University, Thailand',
  },
}

const th = {
  meta: {
    title: 'Sitthikan Chaiyamart — Portfolio',
    description:
      'Sitthikan Chaiyamart — Full-Stack Software Developer ออกแบบและพัฒนาระบบครบวงจรทั้ง Web, Mobile และ API',
  },
  nav: { about: 'เกี่ยวกับ', experience: 'ประสบการณ์', projects: 'ผลงาน', skills: 'ทักษะ', contact: 'ติดต่อ' },
  ui: {
    status: 'Software Developer @ Kitsomboon',
    hello: 'สวัสดีครับ ผม',
    nameEnd: '',
    headline: 'สร้างระบบครบวงจร ตั้งแต่ต้นจนจบ',
    viewWork: 'ดูผลงาน',
    download: 'ดาวน์โหลดเรซูเม่',
    aboutEyebrow: 'เกี่ยวกับผม',
    aboutTitle: 'จากความต้องการ สู่ระบบที่ใช้งานจริง',
    education: 'การศึกษา',
    basedIn: 'ที่อยู่',
    location: 'ประเทศไทย',
    openTo: 'พร้อมรับโอกาสใหม่ ๆ',
    expEyebrow: 'ประสบการณ์',
    expTitle: 'ที่ทำงานปัจจุบัน',
    projEyebrow: 'ผลงานที่คัดมา',
    projTitle: 'สิ่งที่ผมสร้าง',
    role: 'บทบาท',
    skillsEyebrow: 'ทักษะ',
    skillsTitle: 'เครื่องมือที่ใช้',
    beyondCode: 'ทักษะอื่น ๆ',
    contactEyebrow: '05 — ติดต่อ',
    contactTitle: 'มีโปรเจกต์ในใจอยู่ไหม?',
    contactTitle2: 'มาสร้างไปด้วยกัน',
    contactLead:
      'ยินดีพูดคุยเรื่องโอกาสใหม่ ๆ ระบบที่น่าสนใจ หรือเรื่องที่ผมช่วยให้ทีมของคุณส่งมอบงานได้',
    email: 'อีเมล',
    phone: 'โทรศัพท์',
    sayHello: 'ส่งข้อความหาผม',
    backToTop: 'กลับขึ้นด้านบน ↑',
    portraitAlt: 'รูปของ',
    copy: 'คัดลอก',
    toggleMenu: 'เปิด/ปิดเมนู',
    toLight: 'เปลี่ยนเป็นโหมดสว่าง',
    toDark: 'เปลี่ยนเป็นโหมดมืด',
    switchLang: 'Switch to English',
  },
  tagline:
    'ออกแบบและพัฒนาระบบครบวงจรทั้ง Web, Mobile และ API ตั้งแต่เก็บความต้องการ วางสถาปัตยกรรม จนถึงส่งมอบขึ้นระบบจริง',
  about:
    'Software Developer ที่มีประสบการณ์มากกว่า 1 ปี เชี่ยวชาญการออกแบบและพัฒนาระบบแบบครบวงจรทั้ง Web, Mobile และ API มีประสบการณ์ส่งมอบระบบให้ลูกค้าองค์กร ทำงานร่วมกับลูกค้าโดยตรง และส่งมอบงานภายใต้สภาวะกดดันได้',
  stats: [
    { value: '1+', label: 'ปีของประสบการณ์' },
    { value: '3', label: 'ระบบที่ส่งมอบ' },
    { value: '3', label: 'แพลตฟอร์ม: Web, Mobile, API' },
  ],
  experience: {
    company: 'Kitsomboon Business and Technology',
    title: 'Software Developer',
    period: 'ก.ค. 2568 – ปัจจุบัน',
    responsibilities: [
      {
        icon: 'layers',
        title: 'วิเคราะห์และออกแบบระบบ',
        text: 'เก็บและวิเคราะห์ความต้องการของผู้ใช้ เพื่อออกแบบสถาปัตยกรรมระบบให้ตอบโจทย์เป้าหมายทางธุรกิจ',
      },
      {
        icon: 'code',
        title: 'พัฒนาแบบ Full-Stack',
        text: 'พัฒนาแอปพลิเคชันครบวงจรทั้ง Web, Mobile และ API รวมถึงทดสอบระบบก่อนส่งมอบ',
      },
      {
        icon: 'database',
        title: 'ออกแบบฐานข้อมูล',
        text: 'ออกแบบและวางโครงสร้างฐานข้อมูลให้มีประสิทธิภาพและรองรับการขยายตัว',
      },
      {
        icon: 'users',
        title: 'ประสานงานกับลูกค้า',
        text: 'ประสานงานและนำเสนองานกับลูกค้าโดยตรง รวมถึงส่งมอบระบบขึ้นใช้งานจริง (Production)',
      },
      {
        icon: 'spark',
        title: 'พัฒนาโดยใช้ AI ช่วย',
        text: 'ใช้ AI เป็นเครื่องมือเสริมในการเขียนโค้ด รีวิวโค้ด และแก้บั๊ก เพื่อเพิ่มประสิทธิภาพ โดยยังเป็นผู้ตัดสินใจด้านการออกแบบและเทคนิคทั้งหมดเอง',
      },
    ],
  },
  projects: [
    {
      id: 'admission',
      title: 'Admission Tracking System',
      summary:
        'ระบบติดตามการรับผู้ป่วยเข้ารักษาในโรงพยาบาลแบบเรียลไทม์ รองรับทั้ง Web และ Mobile Application ผ่าน API ชุดเดียวกัน',
      stack: stacks.admission,
      role: 'ออกแบบและพัฒนา API, Mobile Application (Flutter) และ Web Frontend',
      tags: ['Healthcare', 'Real-time', 'Web + Mobile'],
    },
    {
      id: 'air-quality',
      title: 'Air Quality Monitor',
      summary:
        'ระบบติดตามคุณภาพอากาศ วิเคราะห์และพัฒนาใหม่ทั้งหมดทั้ง Web, Mobile และ API พร้อมระบบ Authentication/SSO และ Dashboard แบบเรียลไทม์',
      stack: stacks.airQuality,
      role: 'Full-stack Developer — วิเคราะห์ ออกแบบ และพัฒนาทั้งระบบตั้งแต่เริ่มต้น รวมถึง deploy ขึ้น Production',
      tags: ['SSO', 'Dashboard', 'Production'],
    },
    {
      id: 'deploy',
      title: 'Internal Deployment Platform',
      badge: 'R&D',
      summary:
        'แพลตฟอร์มภายในสำหรับจัดการการ deploy และเตรียม environment รองรับผู้ใช้หลายบทบาท พร้อมระบบติดตามการ deploy และบันทึกกิจกรรม',
      stack: stacks.deploy,
      role: 'ออกแบบสถาปัตยกรรมและพัฒนาทั้งระบบ',
      tags: ['DevOps', 'RBAC', 'Audit log'],
    },
  ],
  skills: [
    { group: 'Frontend', icon: 'monitor', items: skillItems.frontend },
    { group: 'Backend', icon: 'server', items: skillItems.backend },
    { group: 'Database', icon: 'database', items: skillItems.database },
    { group: 'Tools', icon: 'tool', items: skillItems.tools },
  ],
  softSkills: [
    'แก้ปัญหาอย่างเป็นระบบ',
    'ทำงานเป็นทีมและร่วมมือกับผู้อื่น',
    'ปรับตัวเร็วและเรียนรู้อย่างต่อเนื่อง',
    'ทำงานภายใต้แรงกดดันได้',
  ],
  education: {
    degree: 'วิทยาศาสตรบัณฑิต สาขาวิทยาการคอมพิวเตอร์',
    school: 'มหาวิทยาลัยมหาสารคาม',
  },
}

export const content = { en, th }
