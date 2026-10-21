export interface SkillGroup {
  readonly title: string;
  readonly skills: readonly { readonly name: string; readonly level: string }[];
}

export const SKILL_GROUPS: readonly SkillGroup[] = [
  {
    title: 'Languages & Backend',
    skills: [
      { name: 'PHP 8+ / Laravel', level: 'Expert' },
      { name: 'Golang', level: 'Advanced' },
      { name: 'Node.js / NestJS', level: 'Advanced' },
      { name: 'Python', level: 'Intermediate' },
      { name: 'Java (Openbravo)', level: 'Past Core' },
    ],
  },
  {
    title: 'Databases & Caching',
    skills: [
      { name: 'PostgreSQL', level: 'Expert' },
      { name: 'MySQL / MariaDB', level: 'Expert' },
      { name: 'Redis (Cache/Queues)', level: 'Advanced' },
      { name: 'MongoDB', level: 'Intermediate' },
      { name: 'Query Indexing & Tuning', level: 'Specialist' },
    ],
  },
  {
    title: 'Infrastructure & DevOps',
    skills: [
      { name: 'Linux Environment', level: 'Expert' },
      { name: 'Docker Container', level: 'Advanced' },
      { name: 'AWS (EC2, S3, RDS)', level: 'Intermediate' },
      { name: 'Nginx / Reverse Proxy', level: 'Advanced' },
      { name: 'Git / CI-CD', level: 'Advanced' },
    ],
  },
  {
    title: 'Frontend & Architecture',
    skills: [
      { name: 'Next.js / React', level: 'Intermediate' },
      { name: 'RESTful API Design', level: 'Expert' },
      { name: 'Microservices Pattern', level: 'Advanced' },
      { name: 'System Scalability', level: 'Specialist' },
      { name: 'Tailwind CSS', level: 'Intermediate' },
    ],
  },
];

export interface EducationItem {
  readonly id: string;
  readonly period: string;
  readonly degree: string;
  readonly institution: string;
  readonly location: string;
}

export const EDUCATION_DATA: readonly EducationItem[] = [
  {
    id: 's1-ti',
    period: '2015 — 2019',
    degree: 'S1 Teknik Informatika (Bachelor of IT)',
    institution: 'STMIK PPKIA Pradnya Paramita',
    location: 'Malang, Jawa Timur',
  },
  {
    id: 'smk-rpl',
    period: '2012 — 2014',
    degree: 'Rekayasa Perangkat Lunak (Software Engineering)',
    institution: 'SMK Negeri 5 Malang',
    location: 'Malang, Jawa Timur',
  },
];
