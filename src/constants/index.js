import {
  evve,
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  html5,
  css3,
  vue,
  react,
  bootstrap,
  laravel,
  mysql,
  mongo,
  csharp,
  tailwind,
  node,
  git,
  rubyrails,
  coverhunt,
  clientportal,
  gymerls,
  aksha,
  shiftminds,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'UI/UX Design',
    icon: ux,
  },
  {
    title: 'Software Prototyping',
    icon: prototyping,
  },
];

const technologies = [
  // {
  //   name: 'HTML 5',
  //   icon: html5,
  // },
  // {
  //   name: 'CSS 3',
  //   icon: css3,
  // },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'React JS',
    icon: react,
  },
  // {
  //   name: 'Tailwind CSS',
  //   icon: tailwind,
  // },
  {
    name: 'Node JS',
    icon: node,
  },
  // {
  //   name: 'Rails',
  //   icon: rubyrails,
  // },
  {
    name: 'git',
    icon: git,
  },
  // {
  //   name: 'Bootstrap',
  //   icon: bootstrap,
  // },
  {
    name: 'Vue',
    icon: vue,
  },
  {
    name: 'Laravel',
    icon: laravel,
  },
  // {
  //   name: 'MySQL',
  //   icon: mysql,
  // },
  {
    name: 'Mongoose',
    icon: mongo,
  },
  // {
  //   name: 'CSharp',
  //   icon: csharp,
  // },
];

const experiences = [
  {
    title: 'IT / CCTV Technician',
    company_name: 'JSML Corporation',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Jan 2016 - March 2018',
  },
  {
    title: 'Software Engineer',
    company_name: 'Pragtechnologies',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Sep 2018 - Oct 2020',
  },
  {
    title: 'Web / Android Developer',
    company_name: 'New San Jose Builders Inc',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'June 2021 - Oct 2022',
  },
  {
    title: 'Full Stack Dev - Trainee',
    company_name: 'Vertere Global Solutions Inc',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Oct 2022 - Feb 2023',
  },
  {
    title: 'Developer - Part time',
    company_name: 'EVVE Australia',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Oct 2022 - March 2024',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Evve',
    description: 'A web application that educates, entertains, and inspires woman toward greater understanding of the Body Basics, Cycles, Contraception and Conception Series',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: evve,
    repo: 'https://github.com/shaqdeff/KomiKult',
    demo: 'https://evve.com.au/',
  },
  {
    id: 'project-2',
    name: 'Client portal',
    description:
      'Is a secure online platform designed to streamline communication, collaboration, and access to resources between our company and our clients.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: clientportal,
    repo: 'https://github.com/shaqdeff/Leaderboard',
    demo: 'https://clientportal.nsjbi.com.ph/',
  },
  {
    id: 'project-3',
    name: 'Gymerls 2.0',
    description: 'This platform empowers gym owners and trainers to efficiently manage memberships, schedule classes, track attendance, and handle billing, among other key functionalities',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: gymerls,
    repo: 'https://github.com/shaqdeff/Math-Magicians',
    demo: 'https://www.gymerls.com/',
  },
  {
    id: 'project-4',
    name: 'Aksha christening',
    description: `Our Christening Web Page is a beautifully designed online platform tailored to help families celebrate and commemorate the special occasion of a child's christening or baptism`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: aksha,
    repo: 'https://github.com/shaqdeff/Movie-Metro',
    demo: 'https://akshaillyria.netlify.app/',
  },
  {
    id: 'project-5',
    name: 'Shift Minds',
    description:
      'Welcome to ShiftMinds official website, your gateway to discovering our products, services, and mission.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: shiftminds,
    repo: 'https://github.com/shaqdeff/Nyeusi-Fest-Site',
    demo: 'https://www.shiftminds.com.ph/',
  },
];

export { services, technologies, experiences, projects };
