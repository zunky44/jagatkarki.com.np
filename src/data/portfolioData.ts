export const ASSETS = {
  portrait: '/assets/aistudio/6742803B-A514-4A21-831F-E8DAADD08BC8_fff38e8e.png',
  cvPdf: '/assets/aistudio/Jagat_Karki_cb422fb6.pdf',
};

export const IDENTITY = {
  name: 'Jagat Karki',
  title: 'Tech Enthusiast | Mobile Photography | Movie & Music Lover',
  secondaryTitle: 'Banking Professional · MBA (Marketing) · BSc IT',
  tagline: 'Driven by Technology. Framed Through Lenses. Unwinding with Cinema & Music.',
  altHeadline: 'Exploring Technology, Capturing Light, Enjoying Movies & Music.',
  location: 'Gauradaha, Jhapa, Nepal',
  email: 'jagat.kc34@gmail.com',
  phones: ['+977 9815926310', '+977 9843844885'],
  socials: [
    {
      label: 'LinkedIn',
      handle: 'linkedin.com/in/jagatkc34',
      url: 'https://www.linkedin.com/in/jagatkc34/',
    },
    {
      label: 'X (Twitter)',
      handle: '@__syndicate____',
      url: 'https://twitter.com/__syndicate____',
    },
    {
      label: 'Facebook',
      handle: 'facebook.com/zunky.k44',
      url: 'https://www.facebook.com/zunky.k44',
    },
  ],
  languages: [
    { name: 'Nepali', proficiency: 'Native · Excellent' },
    { name: 'English', proficiency: 'Fluent Reading · Good Speaking & Writing' },
    { name: 'Hindi', proficiency: 'Good Proficiency' },
  ],
};

export const HERO_HIGHLIGHTS = [
  {
    value: 'Tech Enthusiast',
    label: 'AI, FinTech & Digital Trends',
    detail: 'Primary Curiosity & Projects',
  },
  {
    value: 'Mobile Photography',
    label: 'Light, Framing & Candid Scenes',
    detail: 'Smartphone Lens Hobby',
  },
  {
    value: 'Cinema & Music',
    label: 'Watching Movies & Playlists',
    detail: 'Pure Viewer & Listener',
  },
  {
    value: 'Banking & MBA / IT',
    label: '5+ Years Operations · BSc IT',
    detail: 'Professional Foundation',
  },
];

export const ABOUT_PARAGRAPHS = [
  "I'm Jagat Karki—a curious mind drawn to emerging technology, mobile photography, watching good movies, and listening to music, based in Jhapa, Nepal.",
  'My interest in technology started with a Bachelor of Science in Information Technology and continues every day through exploring artificial intelligence, digital products, and how modern software reshapes everyday life.',
  'Outside of tech, I love observing everyday moments through a smartphone lens—chasing natural light and candid framing—and relaxing by watching engaging cinema and listening to music.',
  'Professionally, I bring over five years of hands-on banking operations and customer relationship experience alongside an MBA in Marketing, grounding my interests with practical discipline and reliability.',
];

export type TechCategory = 'all' | 'intelligence' | 'finance' | 'systems';

export interface TechInterest {
  id: string;
  title: string;
  category: Exclude<TechCategory, 'all'>;
  categoryLabel: string;
  summary: string;
  perspective: string;
  iconKey:
    | 'brain'
    | 'sparkles'
    | 'workflow'
    | 'server'
    | 'layers'
    | 'lightbulb'
    | 'landmark'
    | 'trending';
}

export const TECH_INTERESTS: TechInterest[] = [
  {
    id: 'ai',
    title: 'Artificial Intelligence',
    category: 'intelligence',
    categoryLabel: 'Intelligence & Data',
    summary:
      'Exploring how intelligent systems assist decision-making, streamline operational workflows, and elevate everyday productivity.',
    perspective:
      'Following how modern AI tools reshape knowledge work, customer service responsiveness, and data-driven business insight.',
    iconKey: 'brain',
  },
  {
    id: 'emerging-tech',
    title: 'Emerging Technologies',
    category: 'intelligence',
    categoryLabel: 'Intelligence & Data',
    summary:
      'Keeping a close eye on next-generation platforms and tools that redefine how organizations collaborate and serve clients.',
    perspective:
      'Studying early-stage innovations to understand which technologies create practical, lasting value for businesses and communities.',
    iconKey: 'sparkles',
  },
  {
    id: 'digital-transformation',
    title: 'Digital Transformation',
    category: 'systems',
    categoryLabel: 'Systems & Trends',
    summary:
      'Understanding how traditional institutions modernize processes, reduce friction, and build responsive customer experiences.',
    perspective:
      'Connecting real-world frontline banking experience with how digital-first processes improve accuracy, speed, and trust.',
    iconKey: 'workflow',
  },
  {
    id: 'information-technology',
    title: 'Information Technology',
    category: 'systems',
    categoryLabel: 'Systems & Trends',
    summary:
      'Grounded by a Bachelor of Science in Information Technology, maintaining strong curiosity in core computing and digital systems.',
    perspective:
      'Using an IT academic foundation to bridge communication between operational teams and evolving digital infrastructure.',
    iconKey: 'server',
  },
  {
    id: 'software-products',
    title: 'Software and Digital Products',
    category: 'systems',
    categoryLabel: 'Systems & Trends',
    summary:
      'Observing thoughtful user interfaces, reliable enterprise platforms, and intuitive consumer tools built for scale.',
    perspective:
      'Evaluating how clean product design and usability directly influence customer adoption and everyday efficiency.',
    iconKey: 'layers',
  },
  {
    id: 'tech-innovations',
    title: 'Technology Innovations',
    category: 'intelligence',
    categoryLabel: 'Intelligence & Data',
    summary:
      'Following breakthroughs across cloud computing, automation, and connected services that unlock new business models.',
    perspective:
      'Staying curious about how cross-industry innovation inspires smarter ways of solving recurring operational challenges.',
    iconKey: 'lightbulb',
  },
  {
    id: 'digital-banking-fintech',
    title: 'Digital Banking and FinTech',
    category: 'finance',
    categoryLabel: 'Digital Finance',
    summary:
      'Tracking how modern banking products, digital payments, and mobile financial services expand access and convenience.',
    perspective:
      'Pairing daily branch banking knowledge with an active interest in how FinTech elevates financial inclusion and security.',
    iconKey: 'landmark',
  },
  {
    id: 'technology-trends',
    title: 'Technology Trends',
    category: 'finance',
    categoryLabel: 'Digital Finance',
    summary:
      'Continuously reading and learning about shifting digital habits, cybersecurity awareness, and global tech trajectories.',
    perspective:
      'Maintaining an always-learning mindset to anticipate how tomorrow’s tools will shape careers and commerce.',
    iconKey: 'trending',
  },
];

export interface ExperienceEntry {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  duration: string;
  current?: boolean;
  summary: string;
  highlights: string[];
  allResponsibilities: string[];
}

export const EXPERIENCES: ExperienceEntry[] = [
  {
    id: 'siddhartha-bank',
    role: 'Assistant',
    organization: 'Siddhartha Bank Limited',
    location: 'Gauradaha Branch',
    period: 'November 2021 – Present',
    duration: 'Current Role',
    current: true,
    summary:
      'Delivering frontline banking operations, customer relationship management, regulatory compliance, and branch business growth initiatives.',
    highlights: [
      'Customer relationship management & advisory',
      'Banking operations, cash & foreign currency transactions',
      'Account opening, card & check services',
      'Regulatory compliance & confidential data protection',
      'Complaint resolution & service quality improvement',
      'Marketing campaigns & customer acquisition',
    ],
    allResponsibilities: [
      'Customer relationship management — building cordial, long-term trust and resolving inquiries promptly.',
      'Banking operations and customer services across daily branch workflows and account inquiries.',
      'Advising clients on banking products and financial services tailored to their needs.',
      'Account opening and account-related services adhering strictly to regulatory guidelines.',
      'Cash and financial transactions including checks, debit cards, foreign currency exchange, and shift-end cash drawer reconciliation.',
      'Banking compliance and regulatory procedures, ensuring full adherence to code of conduct and bank policies.',
      'Customer complaint resolution and channeling complex challenges to the right departments promptly.',
      'Customer satisfaction and retention through proactive follow-up and cross-department coordination.',
      'Marketing and customer acquisition via branch awareness campaigns and product promotion.',
      'Confidential information protection, ensuring customer data is strictly safeguarded for official use.',
    ],
  },
  {
    id: 'nic-asia',
    role: 'Customer Executive',
    organization: 'NIC ASIA Bank Limited',
    location: 'Jhapa',
    period: 'May 2021 – November 2021',
    duration: '6 Months',
    summary:
      'Focused on strengthening branch deposit growth, maintaining high customer satisfaction, and supporting credit portfolio management.',
    highlights: [
      'Maintaining high customer satisfaction standards',
      'Improving branch core deposits',
      'Efficient management of the branch credit portfolio',
    ],
    allResponsibilities: [
      'Maintaining a consistently high level of customer satisfaction across daily client interactions.',
      'Improving the core deposit base of the branch through relationship-driven engagement.',
      'Supporting efficient management and follow-up of the branch credit portfolio.',
    ],
  },
];

export interface EducationEntry {
  id: string;
  degree: string;
  field: string;
  institution: string;
  university: string;
  date: string;
  score: string;
  featured: boolean;
  focus: string;
}

export const EDUCATION: EducationEntry[] = [
  {
    id: 'mba',
    degree: 'Master of Business Administration (MBA)',
    field: 'Marketing Specialization',
    institution: 'Sunway International Business School',
    university: 'Infrastructure University Kuala Lumpur (IUKL)',
    date: 'May 2023',
    score: 'CGPA 3.45',
    featured: true,
    focus: 'Strategic marketing, organizational leadership, consumer behavior, and business growth.',
  },
  {
    id: 'bsc-it',
    degree: 'Bachelor of Science in Information Technology',
    field: 'Information Technology',
    institution: 'College for Professional Studies',
    university: 'Sikkim Manipal University (SMU), India',
    date: 'May 2017',
    score: '66%',
    featured: true,
    focus: 'Core computing systems, information management, software fundamentals, and digital operations.',
  },
  {
    id: 'plus-two',
    degree: 'Intermediate +2 Management',
    field: 'Higher Secondary Education',
    institution: 'Shree Sharadaha Higher Secondary School',
    university: 'HSEB, Nepal Government',
    date: 'May 2013',
    score: '52.4%',
    featured: false,
    focus: 'Foundational accounting, economics, and business management principles.',
  },
  {
    id: 'slc',
    degree: 'School Leaving Certificate (SLC)',
    field: 'Secondary Education',
    institution: 'Shree Gyanjyoti Secondary Boarding School',
    university: 'Nepal Government',
    date: 'April 2011',
    score: '78.75%',
    featured: false,
    focus: 'Distinction-level academic foundation across mathematics, science, and languages.',
  },
];

export const CERTIFICATIONS = [
  {
    id: 'nbi-2024',
    title: 'Signature Verification and Possible Scenarios and Major Security Features in NRs 2024',
    issuer: 'National Banking Institute (NBI), Nepal',
    date: 'February 2024',
    format: 'Specialized Workshop · 1 Day',
  },
  {
    id: 'sbl-2022',
    title: 'Finance for Bank Operations',
    issuer: 'Siddhartha Bank Limited',
    date: 'May 2022',
    format: 'Professional Program · 1 Month',
  },
  {
    id: 'kfa-2020',
    title: 'General Banking Training',
    issuer: 'KFA Training School, Kathmandu',
    date: 'November 2020',
    format: 'Foundation Program · 1 Month',
  },
];

export type SkillCategory = 'all' | 'banking' | 'business' | 'interpersonal';

export type SkillIconKey =
  | 'landmark'
  | 'handshake'
  | 'headset'
  | 'wallet'
  | 'briefcase'
  | 'megaphone'
  | 'file-spreadsheet'
  | 'monitor'
  | 'brain'
  | 'message-square'
  | 'wrench'
  | 'clock'
  | 'users'
  | 'refresh'
  | 'user-check';

export interface SkillItem {
  name: string;
  category: Exclude<SkillCategory, 'all'>;
  categoryLabel: string;
  iconKey: SkillIconKey;
  description: string;
  appliedIn: string;
}

export const SKILLS: SkillItem[] = [
  {
    name: 'Banking Operations',
    category: 'banking',
    categoryLabel: 'Banking & Finance',
    iconKey: 'landmark',
    description:
      'Managing daily branch transactions, account openings, cash and check handling, foreign currency exchange, and shift-end cash drawer reconciliation under regulatory standards.',
    appliedIn: 'Siddhartha Bank Limited · Gauradaha Branch',
  },
  {
    name: 'Customer Relationship Management',
    category: 'banking',
    categoryLabel: 'Banking & Finance',
    iconKey: 'handshake',
    description:
      'Building cordial, trust-based client relationships that drive customer retention, repeat engagement, and long-term branch deposit growth.',
    appliedIn: 'Siddhartha Bank Limited & NIC ASIA Bank Limited',
  },
  {
    name: 'Customer Service',
    category: 'banking',
    categoryLabel: 'Banking & Finance',
    iconKey: 'headset',
    description:
      'Delivering courteous, prompt support for account inquiries, balance checks, card/check orders, and timely complaint resolution.',
    appliedIn: '5+ Years Frontline Banking Service',
  },
  {
    name: 'Financial Services',
    category: 'banking',
    categoryLabel: 'Banking & Finance',
    iconKey: 'wallet',
    description:
      'Advising clients on retail banking products, deposit schemes, credit portfolio support, and day-to-day financial service needs.',
    appliedIn: 'Branch Banking & Deposit Portfolio Support',
  },
  {
    name: 'Business Management',
    category: 'business',
    categoryLabel: 'Business & Digital',
    iconKey: 'briefcase',
    description:
      'Applying structured management principles, compliance discipline, and operational coordination across branch departments.',
    appliedIn: 'MBA (Marketing) · IUKL & Branch Operations',
  },
  {
    name: 'Marketing Knowledge',
    category: 'business',
    categoryLabel: 'Business & Digital',
    iconKey: 'megaphone',
    description:
      'Supporting branch awareness campaigns, customer acquisition initiatives, and tailored banking product promotion.',
    appliedIn: 'MBA in Marketing & Branch Outreach Campaigns',
  },
  {
    name: 'Microsoft Office',
    category: 'business',
    categoryLabel: 'Business & Digital',
    iconKey: 'file-spreadsheet',
    description:
      'Preparing clear operational reports, structured spreadsheets, client documentation, and internal presentations accurately.',
    appliedIn: 'Daily Banking Reporting & Academic Research',
  },
  {
    name: 'Computer Operations',
    category: 'business',
    categoryLabel: 'Business & Digital',
    iconKey: 'monitor',
    description:
      'Electronically recording branch transactions with precision and navigating core banking and enterprise software systems.',
    appliedIn: 'BSc Information Technology & Core Banking Systems',
  },
  {
    name: 'Analytical Thinking',
    category: 'business',
    categoryLabel: 'Business & Digital',
    iconKey: 'brain',
    description:
      'Evaluating transaction records, customer needs, and operational bottlenecks logically to make reliable decisions.',
    appliedIn: 'BSc IT · MBA Analytics & Banking Reconciliation',
  },
  {
    name: 'Communication',
    category: 'interpersonal',
    categoryLabel: 'Core Strengths',
    iconKey: 'message-square',
    description:
      'Explaining banking products, policy requirements, and account updates clearly in Nepali, English, and Hindi.',
    appliedIn: 'Client Advisory & Cross-Department Coordination',
  },
  {
    name: 'Problem Solving',
    category: 'interpersonal',
    categoryLabel: 'Core Strengths',
    iconKey: 'wrench',
    description:
      'Diagnosing customer complaints and operational discrepancies calmly and routing complex issues to the right teams for resolution.',
    appliedIn: 'Customer Complaint Resolution & Shift Balancing',
  },
  {
    name: 'Time Management',
    category: 'interpersonal',
    categoryLabel: 'Core Strengths',
    iconKey: 'clock',
    description:
      'Prioritizing high-volume counter service, compliance checks, and daily reconciliation deadlines smoothly under pressure.',
    appliedIn: 'High-Volume Branch Banking Shifts',
  },
  {
    name: 'Interpersonal Skills',
    category: 'interpersonal',
    categoryLabel: 'Core Strengths',
    iconKey: 'user-check',
    description:
      'Listening actively with empathy and professionalism to make every client interaction welcoming and productive.',
    appliedIn: 'Frontline Customer Engagement',
  },
  {
    name: 'Adaptability',
    category: 'interpersonal',
    categoryLabel: 'Core Strengths',
    iconKey: 'refresh',
    description:
      'Adjusting quickly to updated regulatory guidelines, evolving digital tools, and dynamic customer service demands.',
    appliedIn: 'Banking Compliance & Digital Innovation Interest',
  },
  {
    name: 'Teamwork',
    category: 'interpersonal',
    categoryLabel: 'Core Strengths',
    iconKey: 'users',
    description:
      'Collaborating closely with branch colleagues and other bank departments through constructive daily coordination.',
    appliedIn: 'Cross-Department Banking Collaboration',
  },
];

export const PERSONAL_INTERESTS = [
  {
    id: 'tech-enthusiast',
    title: 'Technology Enthusiast',
    subtitle: 'Primary Personal Passion',
    description:
      'Always curious about technology, digital innovations, artificial intelligence, emerging trends, and the future of technology.',
    focusLine: 'AI · Digital Systems · Future Tech',
    featured: true,
    icon: 'cpu' as const,
  },
  {
    id: 'fpl',
    title: 'FPL Enthusiast',
    subtitle: 'Football & Strategy',
    description:
      'Following Fantasy Premier League tactics, weekly matchday strategy, and football analytics throughout every season.',
    focusLine: 'Squad Tactics · Fixtures · Analytics',
    featured: false,
    icon: 'trophy' as const,
  },
  {
    id: 'mobile-photography',
    title: 'Mobile Photography Enthusiast',
    subtitle: 'Visual Perspective',
    description:
      'Observing natural light, composition, and candid everyday stories through a smartphone lens across travel and daily life.',
    focusLine: 'Natural Light · Composition · Everyday Scenes',
    featured: false,
    icon: 'camera' as const,
  },
  {
    id: 'movies',
    title: 'Movies & Cinema',
    subtitle: 'Visual Storytelling',
    description:
      'Appreciating thoughtful cinema, compelling storytelling, and memorable direction across genres.',
    focusLine: 'Direction · Narrative · Cinematography',
    featured: false,
    icon: 'film' as const,
  },
  {
    id: 'music',
    title: 'Music',
    subtitle: 'Focus & Inspiration',
    description:
      'Unwinding with diverse playlists and melodies that keep energy focused and creativity inspired.',
    focusLine: 'Rhythm · Deep Focus · Discovery',
    featured: false,
    icon: 'music' as const,
  },
];

export type ProjectCategory = 'all' | 'personal' | 'academic' | 'fintech';

export interface ProjectItem {
  id: string;
  title: string;
  context: string;
  year: string;
  category: Exclude<ProjectCategory, 'all'>[];
  goal: string;
  role: string;
  technologies: string[];
  highlights: string[];
  iconKey: 'dashboard' | 'chart' | 'shield' | 'trophy';
  demoSummary: {
    metricLabel: string;
    metricValue: string;
    secondaryLabel: string;
    secondaryValue: string;
    workflowSteps: string[];
  };
}

export const PROJECTS: ProjectItem[] = [
  {
    id: 'branch-queue-analytics',
    title: 'Branch Queue & Service Analytics Dashboard',
    context: 'Personal Concept · Banking Operations',
    year: '2024',
    category: ['personal', 'fintech'],
    goal: 'Prototype a lightweight branch service dashboard to monitor peak customer footfall, teller turnaround times, and daily transaction volume trends.',
    role: 'Led workflow modeling, operational KPI selection, and front-end dashboard prototyping based on real branch service patterns.',
    technologies: ['JavaScript', 'React', 'Tailwind CSS', 'Data Visualization'],
    highlights: [
      'Models hourly teller counter load and average customer wait time windows.',
      'Separates cash, remittance, and account-opening service queues for clearer staffing insights.',
      'Designed for zero-clutter branch supervisor visibility across daily shifts.',
    ],
    iconKey: 'dashboard',
    demoSummary: {
      metricLabel: 'Simulated Wait Reduction',
      metricValue: '-24%',
      secondaryLabel: 'Peak Shift Window',
      secondaryValue: '11:00 – 14:00',
      workflowSteps: [
        'Log service category arrival (Cash, Remittance, Account Inquiry)',
        'Track counter turnaround against target SLA benchmarks',
        'Flag peak-hour queue bottlenecks for dynamic counter allocation',
      ],
    },
  },
  {
    id: 'deposit-retention-analyzer',
    title: 'Customer Retention & Deposit Growth Analyzer',
    context: 'Academic & Research · MBA Marketing',
    year: '2023',
    category: ['academic', 'fintech'],
    goal: 'Analyze customer satisfaction drivers and branch deposit retention factors to inform targeted retail banking product outreach.',
    role: 'Designed the structured analytical framework, cleaned survey and service response datasets, and authored marketing strategy recommendations.',
    technologies: ['Python', 'Pandas', 'Statistical Analysis', 'Excel Modeling'],
    highlights: [
      'Segmented customer feedback across service responsiveness, product awareness, and trust.',
      'Identified key cross-selling touchpoints for recurring savings and fixed deposit accounts.',
      'Translated quantitative survey findings into practical branch marketing actions.',
    ],
    iconKey: 'chart',
    demoSummary: {
      metricLabel: 'Core Drivers Evaluated',
      metricValue: '12 Factors',
      secondaryLabel: 'Primary Retention Signal',
      secondaryValue: 'Response Speed',
      workflowSteps: [
        'Aggregate anonymized customer feedback and product adoption scores',
        'Run correlation checks between query resolution time and repeat deposits',
        'Generate segment-level outreach priorities for relationship teams',
      ],
    },
  },
  {
    id: 'kyc-verification-portal',
    title: 'Digital Onboarding & KYC Checklist System',
    context: 'Academic Capstone · BSc Information Technology',
    year: '2017',
    category: ['academic', 'fintech'],
    goal: 'Build a structured digital account-opening checklist and document verification tracker to reduce manual KYC omissions.',
    role: 'Served as system designer and lead developer—defining relational database schemas, validation rules, and user forms.',
    technologies: ['JavaScript', 'HTML5', 'CSS3', 'Relational SQL'],
    highlights: [
      'Enforced mandatory identity, address, and specimen signature verification checkpoints.',
      'Organized client onboarding records in a searchable relational schema.',
      'Inspired later professional attention to compliance accuracy and signature security.',
    ],
    iconKey: 'shield',
    demoSummary: {
      metricLabel: 'Validation Checkpoints',
      metricValue: '8 Stages',
      secondaryLabel: 'Compliance Target',
      secondaryValue: '100% KYC Complete',
      workflowSteps: [
        'Capture applicant profile and account tier requirements',
        'Verify identity documents and mandatory regulatory disclosures',
        'Produce audit-ready onboarding summary prior to account activation',
      ],
    },
  },
  {
    id: 'fpl-fixture-planner',
    title: 'FPL Matchweek Squad & Fixture Analyzer',
    context: 'Personal Project · Sports Analytics',
    year: '2025',
    category: ['personal'],
    goal: 'Create a personal Fantasy Premier League planning utility that evaluates upcoming fixture difficulty, form trends, and transfer timing.',
    role: 'Built the scoring logic, cloud scheduling concept, and responsive interface independently to combine analytical thinking with football.',
    technologies: ['Python', 'TypeScript', 'REST APIs', 'AWS Lambda'],
    highlights: [
      'Computes rolling 5-gameweek fixture difficulty ratings across attacking and defensive metrics.',
      'Compares transfer options with tabular projections to avoid short-term knee-jerk moves.',
      'Automated weekly data refresh design using lightweight serverless functions.',
    ],
    iconKey: 'trophy',
    demoSummary: {
      metricLabel: 'Projection Horizon',
      metricValue: '5 Gameweeks',
      secondaryLabel: 'Refresh Cadence',
      secondaryValue: 'Weekly Automated',
      workflowSteps: [
        'Fetch fixture schedules and player recent form indicators',
        'Score upcoming matchups using weighted home/away difficulty ratings',
        'Rank optimal transfer and captaincy candidates for the next deadline',
      ],
    },
  },
];

export type PhotoCategory = 'all' | 'mountains' | 'flora' | 'golden-hour';

export interface MobilePhotoItem {
  id: string;
  src: string;
  title: string;
  category: Exclude<PhotoCategory, 'all'>;
  categoryLabel: string;
  lighting: string;
  framingNote: string;
  caption: string;
}

export const PHOTO_CATEGORIES: { id: PhotoCategory; label: string }[] = [
  { id: 'all', label: 'All Shots' },
  { id: 'mountains', label: 'Mountains & Mist' },
  { id: 'flora', label: 'Flora & Garden' },
  { id: 'golden-hour', label: 'Golden Hour' },
];

export const MOBILE_PHOTOS: MobilePhotoItem[] = [
  {
    id: 'golden-hour-flags',
    src: '/assets/aistudio/IMG_0629_17d32597.jpg',
    title: 'Golden Hour Prayer Flags',
    category: 'golden-hour',
    categoryLabel: 'Golden Hour',
    lighting: 'Warm Backlit Sunset Glow',
    framingNote: 'Low Sun · Warm Color Contrast',
    caption:
      'Late-afternoon sun catching rows of vibrant prayer flags stretched quietly across a courtyard as the evening settles in.',
  },
  {
    id: 'himalayan-peaks-sky',
    src: '/assets/aistudio/IMG_0994_0df8d9f4.jpg',
    title: 'Snow-Capped Himalayan Peaks',
    category: 'mountains',
    categoryLabel: 'Mountains & Mist',
    lighting: 'Crisp High-Altitude Daylight',
    framingNote: 'Clean Horizon · High-Key Contrast',
    caption:
      'Sharp snow ridges standing bright against a deep blue winter sky—captured handheld without extra filters.',
  },
  {
    id: 'layered-mist-ridges',
    src: '/assets/aistudio/IMG_1005_927d9141.jpg',
    title: 'Layered Mist & Foothill Ridges',
    category: 'mountains',
    categoryLabel: 'Mountains & Mist',
    lighting: 'Soft Diffused Morning Haze',
    framingNote: 'Foreground Pine · Layered Depth',
    caption:
      'Rolling mountain silhouettes fading into cool morning mist, anchored by dark pine branches in the foreground.',
  },
  {
    id: 'roofline-alpine-peaks',
    src: '/assets/aistudio/IMG_0991_72ef2934.jpg',
    title: 'Diagonal Roofline & Alpine Peaks',
    category: 'mountains',
    categoryLabel: 'Mountains & Mist',
    lighting: 'Clear Morning Sun',
    framingNote: 'Diagonal Anchor · Frame Within Frame',
    caption:
      'Using an everyday blue hillside roofline as a crisp geometric foreground leading the eye toward sunlit snow peaks.',
  },
  {
    id: 'forested-ridge-snow',
    src: '/assets/aistudio/IMG_1006_f59e7ee8.jpg',
    title: 'Alpine Slope & Quiet Ridge',
    category: 'mountains',
    categoryLabel: 'Mountains & Mist',
    lighting: 'Soft Pale Morning Light',
    framingNote: 'Vertical Layers · Natural Scale',
    caption:
      'Bare hillside trees and terraced slopes meeting a forested ridge beneath towering distant snow peaks.',
  },
  {
    id: 'bougainvillea-sky',
    src: '/assets/aistudio/IMG_1015_e69a34c9.jpg',
    title: 'Magenta Bougainvillea Against Sky',
    category: 'flora',
    categoryLabel: 'Flora & Garden',
    lighting: 'Soft Overcast Daylight',
    framingNote: 'Shallow Depth · Natural Bokeh',
    caption:
      'Vibrant magenta blossoms framed up against soft drifting clouds, letting natural smartphone depth separate color from sky.',
  },
  {
    id: 'white-hibiscus-garden',
    src: '/assets/aistudio/IMG_0623_bd248ee2.jpg',
    title: 'Twin White Hibiscus Blooms',
    category: 'flora',
    categoryLabel: 'Flora & Garden',
    lighting: 'Even Garden Shade',
    framingNote: 'Twin Subject · Clean Leaf Texture',
    caption:
      'Crisp white petals with deep crimson centers resting calmly beside woven bamboo fencing in soft daylight.',
  },
];

export interface CinemaPillar {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  whatDrawsMe: string[];
  moodLabel: string;
  vibeTag: string;
  type: 'cinema' | 'music';
}

export const CINEMA_PILLARS: CinemaPillar[] = [
  {
    id: 'thrillers-mysteries',
    title: 'Gripping Thrillers & Mysteries',
    subtitle: 'Suspense · Clever Twists',
    description:
      'Love settling in for suspenseful movies with smart twists, tight pacing, and mysteries that keep you guessing right until the final scene.',
    whatDrawsMe: [
      'Unpredictable storylines that keep attention locked in',
      'Smart mystery reveals that feel earned on rewatch',
      'Great late-night weekend movie energy',
    ],
    moodLabel: 'Weekend Watchlist',
    vibeTag: 'Pure Viewer Enjoyment',
    type: 'cinema',
  },
  {
    id: 'drama-stories',
    title: 'Feel-Good & Relatable Dramas',
    subtitle: 'Heartfelt · Memorable Stories',
    description:
      'Enjoy watching grounded, emotional movies about real people, friendships, ambition, and everyday resilience across Nepali and world cinema.',
    whatDrawsMe: [
      'Relatable characters and natural humor or warmth',
      'Stories that leave you thinking long after watching',
      'Memorable performances and uplifting moments',
    ],
    moodLabel: 'Evening Watch',
    vibeTag: 'Story & Emotion',
    type: 'cinema',
  },
  {
    id: 'scifi-adventure',
    title: 'Sci-Fi & Big-Screen Worlds',
    subtitle: 'Imagination · Escapism',
    description:
      'Always up for watching imaginative sci-fi, future-tech concepts, and epic adventures that make movie night feel larger than life.',
    whatDrawsMe: [
      'Fascinating concepts around technology, space, and time',
      'Immersive worlds you can completely escape into',
      'Exciting soundtracks and big-screen spectacle',
    ],
    moodLabel: 'Immersive Escape',
    vibeTag: 'Big-Screen Fun',
    type: 'cinema',
  },
  {
    id: 'music-listening',
    title: 'Music & Everyday Playlists',
    subtitle: 'Daily Listening · Chill & Focus',
    description:
      'Listening to music is part of my daily routine—from soulful melodies and Nepali acoustics to upbeat tracks and memorable film soundtracks.',
    whatDrawsMe: [
      'Calm playlists for unwinding after work or long days',
      'Upbeat rhythms that keep focus and energy steady',
      'Movie soundtracks that bring favorite scenes back to life',
    ],
    moodLabel: 'Daily Listening',
    vibeTag: 'Headphones On',
    type: 'music',
  },
];


