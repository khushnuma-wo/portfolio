/**
 * All editable portfolio content lives in this file.
 * Update text, links and lists here — components read from it and never hardcode personal details.
 * Optional links left as '' are hidden automatically.
 */

export type ProjectAccent = 'emerald' | 'amber' | 'violet' | 'rose';

export interface Project {
  id: string;
  name: string;
  category: string;
  description: string;
  /** Longer overview shown in the case-study view. */
  overview: string;
  role: string;
  technologies: string[];
  /** 3–6 short features shown on the card. */
  keyFeatures: string[];
  /** Detailed work shown in the case-study view, grouped by area. */
  details: { title: string; points: string[] }[];
  accent: ProjectAccent;
  /** Path to a real screenshot in /public/projects (e.g. '/projects/paid.png'). Leave '' to show the illustration. */
  image: string;
  repoUrl: string;
  demoUrl: string;
}

export const profile = {
  name: 'Khushnuma Baluchi',
  firstName: 'Khushnuma',
  title: 'Full Stack Developer',
  experience: '3+ years',
  location: 'Surat, India',
  email: 'khushnuma22.work@gmail.com',
  phone: '+91 7572965547',
  /** Leave '' until the real URLs are available — the links stay hidden while empty. */
  linkedinUrl: '',
  githubUrl: '',
  /** Put the PDF at public/resume.pdf. The download buttons only appear when the file exists. */
  resumePath: '/resume.pdf',
  resumeFileName: 'Khushnuma_Baluchi_Resume.pdf',
  headline: 'Building scalable SaaS applications, robust APIs, and modern web experiences.',
  intro:
    'I build full-stack web and SaaS products end to end — from React and Angular interfaces to Node.js and NestJS APIs, payment and third-party integrations, real-time features, and Docker deployments on Google Cloud.',
  focus: ['SaaS platforms', 'REST APIs', 'Payments', 'Real-time', 'Cloud & CI/CD'],
};

export const about = {
  paragraphs: [
    "I'm a Full Stack Developer with 3+ years of experience building and maintaining web and SaaS applications at WebOsmotic. My work spans the whole product: responsive frontends in React.js and Angular, backend services in Node.js, Express.js and NestJS, and data in MongoDB and Firebase Firestore — across both MERN and MEAN stacks.",
    'Most of my time goes into the parts of a product that have to be right: authentication and role-based access, Stripe and Plaid payments and subscriptions, REST APIs that other teams and services depend on, real-time updates with Socket.IO, and scheduled background workflows.',
    'I also take features through to production — containerising applications with Docker, running them on Google Cloud Run, managing infrastructure as code, and automating deployments with GitHub Actions. I work directly with clients to understand requirements and keep delivery on track.',
  ],
  strengths: [
    'Full-stack web & SaaS development',
    'REST API design & documentation',
    'Authentication & role-based access control',
    'Payments, subscriptions & webhooks',
    'Real-time features with Socket.IO',
    'Third-party API integrations',
    'Cloud deployments & CI/CD on GCP',
    'Direct client communication',
  ],
};

export interface SkillGroup {
  title: string;
  /** Core groups are shown larger and first. */
  primary?: boolean;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Backend',
    primary: true,
    skills: ['Node.js', 'Express.js', 'NestJS', 'RESTful APIs', 'Swagger', 'Socket.IO', 'Passport.js', 'JWT', 'OAuth (Google / Facebook)', 'RBAC'],
  },
  {
    title: 'Frontend',
    primary: true,
    skills: ['React.js', 'Angular', 'Redux Toolkit', 'RTK Query', 'Material UI', 'Bootstrap', 'EJS', 'jQuery'],
  },
  {
    title: 'Languages',
    primary: true,
    skills: ['TypeScript', 'JavaScript', 'HTML5', 'CSS3'],
  },
  {
    title: 'Cloud & DevOps',
    primary: true,
    skills: ['GCP Cloud Run', 'Cloud Run Jobs', 'Cloud Scheduler', 'Cloud Storage', 'Secret Manager', 'Docker', 'Terraform / OpenTofu', 'GitHub Actions', 'CI/CD', 'AWS SES', 'PM2', 'Hetzner', 'DigitalOcean'],
  },
  {
    title: 'APIs & Integrations',
    skills: ['Stripe', 'Plaid', 'SendGrid', 'Dropbox Sign', 'Ecwid', 'Railz', 'ShipTime', 'Duda', 'Google Maps API'],
  },
  {
    title: 'Databases',
    skills: ['MongoDB', 'Firebase Firestore'],
  },
  {
    title: 'Mobile',
    skills: ['NativeScript (Android / iOS)', 'Firebase Cloud Messaging'],
  },
  {
    title: 'Architecture',
    skills: ['MERN', 'MEAN', 'Multi-tenant SaaS', 'REST API design', 'Real-time applications', 'Third-party integrations'],
  },
  {
    title: 'Tools',
    skills: ['Git', 'GitHub', 'Assembla', 'Asana', 'MongoDB Compass', 'NoSQLBooster'],
  },
];

export const experience = [
  {
    company: 'WebOsmotic Pvt Ltd',
    role: 'Full-Stack Developer',
    period: '2023 – Present',
    location: 'Surat, India',
    summary:
      'Building and maintaining full-stack web and SaaS applications for client projects, from API design through to cloud deployment.',
    points: [
      'Build and maintain full-stack web and SaaS applications using React.js, Angular, Node.js, Express.js, NestJS and TypeScript.',
      'Work with MongoDB and Firebase Firestore as application data stores.',
      'Design and document REST APIs for authentication, billing, subscriptions and third-party integrations.',
      'Integrate Stripe and Plaid payments, OAuth and JWT authentication, and Socket.IO real-time features.',
      'Manage cloud deployments and CI/CD across GCP, Hetzner and DigitalOcean using Docker, Terraform and GitHub Actions.',
      'Communicate directly with clients to understand requirements, give technical guidance and support delivery.',
    ],
    stack: ['React.js', 'Angular', 'Node.js', 'NestJS', 'TypeScript', 'MongoDB', 'Firestore', 'GCP', 'Docker'],
  },
];

export const projects: Project[] = [
  {
    id: 'paid',
    name: 'PAID',
    category: 'Multi-Service SaaS Platform',
    description:
      'A SaaS platform for payments, subscriptions, online checkout, POS, shipping, accounting and team management.',
    overview:
      'PAID brings a business’s payments and operations into one platform: Stripe Connect payments, invoices and subscriptions, in-person card payments, e-commerce checkout, shipping accounts, accounting sync and team roles — with a TypeScript REST API and a React.js web app.',
    role: 'Full-stack developer — backend REST APIs and TypeScript migration, React.js frontend, integrations and deployment.',
    technologies: ['Node.js', 'Express.js', 'TypeScript', 'MongoDB', 'React.js', 'Redux Toolkit', 'Material UI', 'React Hook Form', 'i18next', 'Vite', 'JWT', 'Socket.IO', 'Stripe Connect', 'Stripe Elements', 'Stripe Terminal', 'Swagger', 'SendGrid', 'PM2', 'Docker', 'Nginx', 'GCP Cloud Run', 'Secret Manager', 'Cloud Storage', 'GitHub Actions'],
    keyFeatures: [
      'Migrated the backend from JavaScript to TypeScript',
      'REST APIs for accounts, billing, subscriptions, teams and admin',
      'React.js, Redux Toolkit and Material UI web app for payments, invoicing and admin',
      'Stripe Connect payments, subscriptions, refunds, disputes and Terminal (POS)',
      'Ecwid, Railz, ShipTime, Duda and SendGrid integrations',
      'Docker deployments of the API and frontend to Cloud Run',
    ],
    details: [
      {
        title: 'Architecture & TypeScript',
        points: [
          'Migrated the complete backend from JavaScript to TypeScript with strict type-checking before every build.',
          'Modular structure per feature: routes, controllers, services, DAOs, Joi validation and models.',
          'Documented the REST APIs with Swagger; enforced code quality with ESLint, Prettier and Husky pre-commit hooks.',
        ],
      },
      {
        title: 'APIs & Security',
        points: [
          'Built REST APIs for accounts, billing, subscriptions, company plans, teams, roles and the admin dashboard.',
          'Implemented JWT access / refresh tokens, Google and Facebook OAuth, and role-based access control.',
        ],
      },
      {
        title: 'Payments',
        points: [
          'Integrated Stripe Connect for merchant onboarding and checkout with platform fees.',
          'Subscriptions, invoices, refunds, disputes, payouts and webhooks.',
          'Stripe Terminal transactions for in-person (POS) payments.',
        ],
      },
      {
        title: 'Frontend',
        points: [
          'Developed React.js screens with TypeScript, Redux Toolkit and Material UI for payments, invoicing, subscriptions & billing, reports and the admin dashboard.',
          'Built invoice creation and tracking, dispute management with evidence submission, plan changes, bank accounts and revenue report downloads (PDF / CSV).',
          'Built the Ecwid payment extension UI and the ShipTime ↔ PAID account redirection flow.',
          'Built admin features: support & feedback management, partner management and user session history.',
          'Added English / French localization with i18next and real-time notifications with Socket.IO.',
          'Refactored class components to functional components and moved forms from Redux Form to React Hook Form with Yup validation.',
        ],
      },
      {
        title: 'Integrations & Real-time',
        points: [
          'Integrated Ecwid store checkout, Railz accounting sync, ShipTime shipping, Duda website builder and SendGrid email.',
          'Socket.IO events for real-time payment and transaction updates.',
          'Scheduled jobs for invoice and dispute reminder emails.',
        ],
      },
      {
        title: 'Deployment',
        points: [
          'Ran and managed the Node.js API with PM2 on the VM server, then migrated it to Docker containers on Google Cloud Run.',
          'Containerised the API with Docker and automated deployments to Google Cloud Run using GitHub Actions.',
          'Moved the React frontend to Cloud Run (Docker + Nginx), with production builds uploaded to Google Cloud Storage and served by the API service.',
          'Managed application secrets with GCP Secret Manager.',
        ],
      },
    ],
    accent: 'emerald',
    image: '',
    repoUrl: '',
    demoUrl: '',
  },
  {
    id: 'warehowz',
    name: 'WAREHOWZ',
    category: 'On-Demand Warehousing Marketplace',
    description:
      'A marketplace for warehouse storage, quotes, listings, contracts, inventory, invoicing, payments and communication.',
    overview:
      'Warehowz connects businesses that need storage with warehouse providers. It is a full-stack, server-rendered EJS application with separate Buyer, Provider and Manager portals covering the whole flow — from project requests and quotes to contracts, inventory, invoicing and payments.',
    role: 'Full-stack developer — EJS application, payments, background jobs, infrastructure and deployment.',
    technologies: ['Node.js', 'Express.js', 'MongoDB', 'EJS', 'jQuery', 'Passport.js', 'Socket.IO', 'Stripe', 'Plaid', 'Dropbox Sign', 'SendGrid', 'Docker', 'OpenTofu (Terraform)', 'GCP Cloud Run', 'Cloud Run Jobs', 'Cloud Scheduler', 'Secret Manager', 'Cloud Storage', 'GitHub Actions'],
    keyFeatures: [
      'Buyer, Provider and Manager portals in a server-rendered EJS app',
      'Projects, quotes, listings, contracts, inventory and invoicing',
      'Stripe, Plaid, Dropbox Sign and SendGrid integrations',
      'Passport.js local login and Google / Facebook OAuth',
      'Real-time chat and support tickets with Socket.IO',
      'Cloud Run Jobs + Cloud Scheduler for payments, expiry and renewals',
    ],
    details: [
      {
        title: 'Application',
        points: [
          'Full-stack EJS server-rendered application with Buyer, Provider and Manager portals.',
          'Workflows for projects, quotes, listings, contracts, inventory, sales orders, invoices and support tickets.',
        ],
      },
      {
        title: 'Authentication & Security',
        points: [
          'Passport.js local authentication and Google / Facebook OAuth with role-based access per portal.',
          'MongoDB-backed sessions, scrypt password hashing and login rate limiting.',
        ],
      },
      {
        title: 'Payments & Integrations',
        points: [
          'Stripe invoice payments, ACH bank debits, provider connected accounts and configurable service fees.',
          'Plaid bank linking, Dropbox Sign contract e-signatures and SendGrid transactional email.',
        ],
      },
      {
        title: 'Real-time & Background Jobs',
        points: [
          'Real-time buyer–provider chat and support ticket chat with Socket.IO.',
          'Moved background jobs — payment scheduling, payment status checks, project expiry and renewals — into separate Cloud Run Jobs triggered by Cloud Scheduler.',
        ],
      },
      {
        title: 'Infrastructure & Deployment',
        points: [
          'Managed GCP infrastructure as code with OpenTofu (Terraform).',
          'Automated Docker deployments to Cloud Run with GitHub Actions.',
          'Google Cloud Storage for files, MongoDB Atlas, GCP Secret Manager, and centralized logging with Cloud Logging and Error Reporting.',
        ],
      },
    ],
    accent: 'amber',
    image: '',
    repoUrl: '',
    demoUrl: '',
  },
  {
    id: 'mcspirit',
    name: 'MCSPIRIT',
    category: 'Community Platform',
    description:
      'A community platform supporting posts, courses, events, memberships, notifications and subscriptions.',
    overview:
      'McSpirit lets community owners run paid communities with posts, courses, events, memberships and monthly or yearly subscriptions. I contributed across the NestJS backend and the React.js frontend.',
    role: 'Full-stack contributor — NestJS backend modules, scheduled emails, Stripe subscriptions, React.js frontend and automated database backups.',
    technologies: ['NestJS', 'Node.js', 'TypeScript', 'MongoDB', 'React.js', 'Redux Toolkit', 'Material UI', 'Socket.IO', 'Stripe', 'EJS', 'AWS SES', 'Hetzner', 'Hetzner Storage Box', 'Google Drive'],
    keyFeatures: [
      'NestJS modules for communities, posts, courses, events and notifications',
      'Daily / weekly digest and event-reminder emails with NestJS Schedule',
      'Stripe monthly / yearly subscriptions and webhook handling',
      'Automated weekly / monthly MongoDB backups to Hetzner Storage Box and Google Drive',
      'Socket.IO real-time notifications and updates',
      'Responsive React.js / Material UI screens with Redux Toolkit',
    ],
    details: [
      {
        title: 'Backend',
        points: [
          'Contributed to NestJS backend modules for communities, posts, courses, events, notifications and subscriptions.',
          'JWT authentication with role-based guards.',
        ],
      },
      {
        title: 'Scheduled Emails',
        points: [
          'Implemented scheduled daily and weekly digest emails and event-reminder emails using NestJS Schedule cron jobs.',
          'Built the emails with EJS templates, delivered through AWS SES.',
        ],
      },
      {
        title: 'Payments & Real-time',
        points: [
          'Maintained Stripe subscription features, including monthly / yearly plans and webhook handling.',
          'Contributed to Socket.IO real-time notifications and updates.',
        ],
      },
      {
        title: 'Frontend',
        points: [
          'Developed responsive React.js and Material UI screens.',
          'Used Redux Toolkit for state management and API integration.',
        ],
      },
      {
        title: 'Database Backups',
        points: [
          'Wrote an automated backup script that connects to the Hetzner server and backs up the MongoDB database.',
          'Stores the backups on a Hetzner Storage Box, with automatic weekly and monthly backups.',
          'Uploads the backups to Google Drive as an off-site copy.',
        ],
      },
    ],
    accent: 'violet',
    image: '',
    repoUrl: '',
    demoUrl: '',
  },
  {
    id: 'friendlyforce',
    name: 'FRIENDLYFORCE',
    category: 'Disaster & Incident Communication Platform',
    description:
      'A mobile platform connecting vulnerable people and pets with nearby support during disasters and incidents.',
    overview:
      'FriendlyForce helps people report incidents and get help from nearby support. I developed Android and iOS features with NativeScript and Angular on a Firebase backend.',
    role: 'Mobile developer — NativeScript and Angular features with Firebase.',
    technologies: ['NativeScript', 'Angular', 'Firebase Firestore', 'Firebase Authentication', 'Firebase Cloud Messaging', 'Google Maps API'],
    keyFeatures: [
      'Android and iOS features with NativeScript and Angular',
      'Real-time incident synchronization with Firestore',
      'User authentication with Firebase',
      'Emergency push notifications with FCM',
      'Location-based incident reporting with Google Maps',
    ],
    details: [
      {
        title: 'Mobile',
        points: ['Developed Android and iOS features using NativeScript and Angular.'],
      },
      {
        title: 'Firebase',
        points: [
          'Implemented real-time incident synchronization with Firebase Firestore.',
          'User authentication with Firebase Authentication.',
          'Emergency push notifications with Firebase Cloud Messaging.',
        ],
      },
      {
        title: 'Maps',
        points: ['Integrated the Google Maps API for location-based incident reporting and visualization.'],
      },
    ],
    accent: 'rose',
    image: '',
    repoUrl: '',
    demoUrl: '',
  },
];

export const highlights = [
  {
    icon: 'layers',
    title: 'SaaS architecture',
    text: 'Multi-portal and multi-tenant applications structured into clear modules — routes, controllers, services and data access.',
  },
  {
    icon: 'braces',
    title: 'REST API design',
    text: 'Validated, documented APIs for accounts, billing, subscriptions, teams and administration, described with Swagger.',
  },
  {
    icon: 'shield',
    title: 'Authentication & authorization',
    text: 'JWT access / refresh tokens, Passport.js, Google and Facebook OAuth, and role-based access control.',
  },
  {
    icon: 'card',
    title: 'Payments & subscriptions',
    text: 'Stripe Connect, subscriptions, invoices, refunds, Terminal and webhooks, plus Plaid bank linking.',
  },
  {
    icon: 'radio',
    title: 'Real-time systems',
    text: 'Socket.IO for chat, support tickets, notifications and live payment updates.',
  },
  {
    icon: 'plug',
    title: 'Third-party integrations',
    text: 'Ecwid, Railz, ShipTime, Duda, SendGrid, Dropbox Sign and Google Maps connected into production workflows.',
  },
  {
    icon: 'clock',
    title: 'Scheduled workflows',
    text: 'Cloud Run Jobs with Cloud Scheduler and NestJS cron jobs for payments, expiry, renewals and digest emails, plus automated weekly / monthly database backups.',
  },
  {
    icon: 'cloud',
    title: 'Cloud & CI/CD',
    text: 'Docker images deployed to Google Cloud Run through GitHub Actions, with infrastructure as code and Secret Manager.',
  },
] as const;

export const education = [
  {
    degree: 'Master of Computer Applications (MCA)',
    institution: 'Veer Narmad South Gujarat University',
  },
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'UCCC & SPBCBA & SDHG College of BCA & IT',
  },
];

export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];
